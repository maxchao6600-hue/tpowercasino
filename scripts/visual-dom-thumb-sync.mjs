/**
 * Visual DOM thumbnail sync vs official TPOWER (www.tpower3.com).
 *
 * Reality (verified in Chromium):
 *  - Clicking a vendor tile opens a Sign In modal for guests.
 *  - Individual provider game shelves are login-gated in the browser.
 *  - The SPA shelf endpoint frontend/api/game/list?vendor_id= returns the
 *    same image URLs the game cards use once authenticated (includes thumbs).
 *  - CMS providers PG Soft / Evolution / Microgaming / Play'n GO / Habanero /
 *    Spribe / SBO are NOT on the official lobby at all.
 *
 * This script:
 *  1) Screenshots official lobby + login-gated vendor click
 *  2) Scrapes visible lobby DOM card thumbs (hot games)
 *  3) Loads each official vendor shelf image list (card URLs with thumbs)
 *  4) Downloads those URLs and replaces mismatched local assets
 *  5) Removes generated/incorrect seed covers for providers not on lobby
 *  6) Screenshots local provider pages
 *  7) Writes scripts/visual-thumb-report/index.html (side-by-side)
 *
 * Does NOT trust prior pipeline reports. Does NOT modify React/UI.
 *
 * Run: node scripts/visual-dom-thumb-sync.mjs
 * Env: LOCAL_BASE=http://localhost:3001
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import CryptoJS from "crypto-js";
import sharp from "sharp";
import { chromium } from "playwright";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/visual-thumb-report");
const SHOTS = path.join(OUT, "shots");
const LIVE_JSON = path.join(OUT, "live-dom-games.json");
const MAP_PATH = path.join(ROOT, "src/data/game-thumbnail-map.json");
const CAT_PATH = path.join(ROOT, "src/data/games-catalogue.json");
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const VENDORS_PATH = path.join(ROOT, "src/data/tpower-vendors.json");

const LOCAL_BASE = process.env.LOCAL_BASE || "http://localhost:3001";
const ORIGIN = "https://www.tpower3.com";
const API = "https://d5y9.apit.5t1p6.com/";
const DOMAIN = "www.tpower3.com";
const CONCURRENCY = 8;

const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

const CHROME =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

/** CMS slug → official lobby vendor name(s). Empty = not on official TPOWER. */
const CMS_TO_OFFICIAL = {
  "pragmatic-play": ["PRAGMATIC-SLOT", "PRAGMATIC-LIVE"],
  "pg-soft": [],
  evolution: [],
  jili: ["JILI"],
  jdb: ["JDB-SLOT", "JDB-FISHING"],
  "sexy-baccarat": ["AE SEXY"],
  "sexy-gaming": ["AE SEXY"],
  "dream-gaming": ["DREAMGAMING"],
  microgaming: [],
  "playn-go": [],
  spribe: [],
  spadegaming: ["SPADEGAMING"],
  habanero: [],
  sbo: [],
};

const SEED_FOLDERS = {
  "pragmatic-play": "pragmatic",
  "pg-soft": "pgsoft",
  evolution: "evolution",
  jili: "jili",
  jdb: "jdb",
  "sexy-baccarat": "sexy-gaming",
  "sexy-gaming": "sexy-gaming",
  "dream-gaming": "dream-gaming",
  microgaming: "microgaming",
  "playn-go": "playngo",
  spribe: "spribe",
  spadegaming: "spadegaming",
  habanero: "habanero",
  sbo: "sbo",
};

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

async function apiPost(endpoint, payload) {
  const params = encrypt(
    payload == null || payload === "" ? "" : JSON.stringify(payload),
  );
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept-language": "en",
      origin: ORIGIN,
      referer: `${ORIGIN}/`,
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

function ensureDirs() {
  fs.mkdirSync(SHOTS, { recursive: true });
  fs.mkdirSync(OUT, { recursive: true });
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

async function fetchVendorShelfGames(vendorId) {
  const all = [];
  let page = 1;
  for (;;) {
    const r = await apiPost("frontend/api/game/list", {
      domain: DOMAIN,
      page,
      per_page: 200,
      vendor_id: vendorId,
    });
    if (![200, 1000].includes(r.code)) {
      throw new Error(`game/list ${vendorId}: ${r.code} ${r.message}`);
    }
    const games = r.data?.games || (Array.isArray(r.data) ? r.data : []);
    for (const g of games) {
      if (!g?.image) continue; // skip rows without thumbs
      all.push(g);
    }
    const total = r.data?.pagination?.total || all.length;
    if (all.length >= total || games.length < 200) break;
    page += 1;
    if (page > 60) break;
  }
  return all;
}

async function downloadLiveImage(url) {
  const candidates = [url];
  if (/\/square\/\d+\//i.test(url)) {
    candidates.push(url.replace(/\/square\/\d+\//i, "/square/200/"));
    candidates.push(url.replace(/\/square\/\d+\//i, "/square/300/"));
  }
  let best = null;
  for (const candidate of [...new Set(candidates)]) {
    try {
      const res = await fetch(candidate, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          referer: `${ORIGIN}/`,
          accept: "image/*",
        },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 256) continue;
      await sharp(buf).metadata();
      if (!best || buf.length > best.buf.length) best = { buf, url: candidate };
    } catch {
      // next
    }
  }
  return best;
}

async function isGeneratedPlaceholder(abs) {
  if (!fs.existsSync(abs)) return false;
  try {
    const meta = await sharp(abs).metadata();
    const st = fs.statSync(abs);
    if (meta.width === 480 && meta.height === 640 && st.size < 45_000) {
      const { data } = await sharp(abs)
        .resize(24, 24, { fit: "fill" })
        .removeAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });
      let sum = 0;
      let sumSq = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i];
        sumSq += data[i] * data[i];
      }
      const mean = sum / data.length;
      const std = Math.sqrt(Math.max(0, sumSq / data.length - mean * mean));
      return std < 18;
    }
    // Very small files are also suspect
    return st.size < 1500;
  } catch {
    return true;
  }
}

async function perceptualDistance(bufA, bufB) {
  const size = 32;
  const a = await sharp(bufA)
    .resize(size, size, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer();
  const b = await sharp(bufB)
    .resize(size, size, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer();
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += Math.abs(a[i] - b[i]);
  return sum / a.length;
}

async function writeAtomic(abs, data) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const tmp = `${abs}.${process.pid}.${Date.now()}.tmp`;
  for (let attempt = 0; attempt < 10; attempt++) {
    try {
      fs.writeFileSync(tmp, data);
      try {
        fs.renameSync(tmp, abs);
      } catch {
        // OneDrive often blocks rename-over-existing — unlink then copy
        try {
          fs.chmodSync(abs, 0o666);
        } catch {
          // new file
        }
        try {
          fs.unlinkSync(abs);
        } catch {
          // ignore
        }
        fs.copyFileSync(tmp, abs);
        fs.unlinkSync(tmp);
      }
      return;
    } catch (err) {
      try {
        fs.unlinkSync(tmp);
      } catch {
        // ignore
      }
      if (attempt === 9) throw err;
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
    }
  }
}

async function dismissOverlays(page) {
  await page
    .getByRole("button", { name: /21 or older/i })
    .click({ timeout: 2500 })
    .catch(() => {});
  await page
    .locator("text=/Continue|Got it|OK/i")
    .first()
    .click({ timeout: 1000 })
    .catch(() => {});
  await page.keyboard.press("Escape").catch(() => {});
}

async function scrapeLobbyDomCards(page) {
  await page.goto(ORIGIN + "/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1800);
  await dismissOverlays(page);
  for (let i = 0; i < 6; i++) {
    await page.mouse.wheel(0, 800);
    await page.waitForTimeout(400);
  }
  await page.screenshot({
    path: path.join(SHOTS, "official-lobby.png"),
    fullPage: false,
  });
  return page.evaluate(() => {
    const out = [];
    const seen = new Set();
    for (const img of document.querySelectorAll("img")) {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (w < 100 || h < 100 || w > 400 || h > 400) continue;
      const src = img.currentSrc || img.src || "";
      if (!src || seen.has(src)) continue;
      if (
        !/game_pic|square\/|pgs_jpg|cdn-bet|bucket|kz344|game-icon|prerelease|3338launcher|eptech|hugedolphin/i.test(
          src,
        )
      ) {
        continue;
      }
      seen.add(src);
      const text = (img.closest("a,li,button,div")?.innerText || "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 120);
      out.push({ src, w, h, text });
    }
    return out;
  });
}

async function clickVendorAndDetectLogin(page, vendor, slug) {
  await page.goto(ORIGIN + "/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1200);
  await dismissOverlays(page);
  for (let i = 0; i < 12; i++) {
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(250);
  }
  const needle = String(vendor.image || "")
    .split("/")
    .pop()
    ?.split("?")[0];
  if (!needle) return { clicked: false, loginGate: false };
  const loc = page.locator(`img[src*="${needle}"]`).first();
  if (!(await loc.count())) return { clicked: false, loginGate: false };
  await loc.scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(300);
  await loc.click({ force: true }).catch(() => {});
  await page.waitForTimeout(2500);
  const loginGate = await page
    .locator("text=/Sign In|Player Account|Password/i")
    .first()
    .isVisible()
    .catch(() => false);
  await page.screenshot({
    path: path.join(SHOTS, `official-vendor-click-${slug}.png`),
    fullPage: false,
  });
  // Also save under official-shelf name for report layout
  fs.copyFileSync(
    path.join(SHOTS, `official-vendor-click-${slug}.png`),
    path.join(SHOTS, `official-shelf-${slug}.png`),
  );
  return { clicked: true, loginGate };
}

async function renderOfficialCardGrid(page, slug, games) {
  const sample = games.slice(0, 30);
  const html = `<!doctype html><html><head><meta charset="utf-8"/>
  <style>
    body{margin:0;background:#0b0b0f;color:#fff;font-family:system-ui}
    h1{font-size:14px;padding:12px 14px;margin:0}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px}
    .card{background:#16161c;border-radius:10px;overflow:hidden}
    .card img{width:100%;aspect-ratio:3/4;object-fit:cover;display:block;background:#222}
    .card p{margin:0;padding:6px 8px;font-size:11px;min-height:34px}
  </style></head><body>
  <h1>Official card thumbnail URLs — ${slug} (${games.length} games)</h1>
  <div class="grid">
  ${sample
    .map(
      (g) =>
        `<div class="card"><img src="${String(g.image).replace(/"/g, "")}"/><p>${String(
          g.name || "",
        )
          .replace(/</g, "")
          .slice(0, 48)}</p></div>`,
    )
    .join("")}
  </div></body></html>`;
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: path.join(SHOTS, `official-cards-${slug}.png`),
    fullPage: false,
  });
}

async function screenshotLocalProvider(page, slug) {
  const url = `${LOCAL_BASE}/en/providers/${slug}/games`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(1000);
    await dismissOverlays(page);
    await page.waitForTimeout(900);
    await page.screenshot({
      path: path.join(SHOTS, `local-provider-${slug}.png`),
      fullPage: false,
    });
    const cards = await page.evaluate(() =>
      [...document.querySelectorAll("article img, article.group img")]
        .slice(0, 40)
        .map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.alt || "",
          w: img.naturalWidth,
          h: img.naturalHeight,
          complete: img.complete,
        })),
    );
    return { ok: true, url, cards };
  } catch (err) {
    return { ok: false, url, error: String(err.message || err), cards: [] };
  }
}

function buildHtmlReport(rows, meta) {
  const cards = rows
    .map((r) => {
      return `<section class="row">
  <h2>${r.name} <small>(${r.slug})</small></h2>
  <p class="note">${
    r.onOfficial
      ? `Official shelf card URLs: <b>${r.officialGameCount}</b>. Login gate on click: <b>${r.loginGate ? "YES" : "no"}</b>.`
      : `<span class="bad">NOT on official TPOWER lobby</span> — local page cannot match.`
  }
  Replaced ${r.replaced}. Seed files removed ${r.seedFilesRemoved}. Mismatch remaining ${r.mismatchRemaining}. Duplicate groups ${r.duplicateGroups}.</p>
  <div class="cols">
    <figure><img src="shots/official-shelf-${r.slug}.png" onerror="this.style.opacity=.15"/><figcaption>Official page (vendor click / lobby)</figcaption></figure>
    <figure><img src="shots/official-cards-${r.slug}.png" onerror="this.style.opacity=.15"/><figcaption>Official card thumbnails (live URLs)</figcaption></figure>
    <figure><img src="shots/local-provider-${r.slug}.png" onerror="this.style.opacity=.15"/><figcaption>Local downloaded page</figcaption></figure>
  </div>
  <details open><summary>Differences</summary>
    <ul>${(r.differences || []).map((d) => `<li>${d}</li>`).join("") || "<li>None recorded</li>"}</ul>
  </details>
</section>`;
    })
    .join("\n");

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<title>Official vs local thumbnail comparison</title>
<style>
  body{font-family:Segoe UI,system-ui,sans-serif;background:#111;color:#eee;margin:0;padding:24px}
  h1{margin:0 0 8px}
  .meta{opacity:.9;margin-bottom:24px;max-width:1000px;line-height:1.5}
  .row{border-top:1px solid #333;padding:20px 0}
  .cols{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  figure{margin:0;background:#1a1a1a;border-radius:8px;overflow:hidden}
  img{width:100%;display:block;background:#000;min-height:140px;object-fit:cover}
  figcaption{padding:8px;font-size:12px;opacity:.85}
  .bad{color:#f87171;font-weight:600}
  .warn{color:#fbbf24}
  details{margin-top:10px}
</style></head><body>
<h1>Official vs local — screenshot comparison</h1>
<p class="meta">
  Generated ${meta.generatedAt}. <span class="warn">Prior pipeline “106 missing” reports were ignored.</span><br/>
  Method: Chromium opens www.tpower3.com, scrapes lobby DOM thumbs, clicks each vendor (guest → Sign In gate),
  loads official card image URLs from the SPA shelf the cards use, replaces mismatched local files,
  screenshots local <code>/en/providers/{slug}/games</code>.<br/>
  Lobby DOM hot-game cards: ${meta.domCards}. Official vendors: ${meta.officialVendors}.
  Local: ${meta.localBase}.
</p>
${cards}
</body></html>`;
}

async function main() {
  ensureDirs();
  console.log("=== Visual DOM sync (ignore prior reports) ===");

  const vendorsRes = await apiPost("api/newVendorsByDomain", { domain: DOMAIN });
  const vendors = vendorsRes.data || [];
  fs.writeFileSync(VENDORS_PATH, `${JSON.stringify(vendors, null, 2)}\n`);
  const vendorByName = new Map(vendors.map((v) => [v.name, v]));
  console.log("official vendors:", vendors.map((v) => v.name).join(", "));

  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME,
  });
  const officialPage = await browser.newPage({
    viewport: { width: 420, height: 900 },
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
  });
  const gridPage = await browser.newPage({
    viewport: { width: 420, height: 900 },
  });
  const localPage = await browser.newPage({
    viewport: { width: 1280, height: 900 },
  });

  const domCards = await scrapeLobbyDomCards(officialPage);
  console.log("lobby DOM game thumbs:", domCards.length);
  fs.writeFileSync(
    path.join(OUT, "dom-lobby-cards.json"),
    JSON.stringify(domCards, null, 2),
  );

  const catalogue = JSON.parse(fs.readFileSync(CAT_PATH, "utf8"));
  const catBySourceId = new Map(catalogue.map((g) => [String(g.sourceId), g]));

  const liveByProvider = {};
  const reportRows = [];
  let visualMatchComplete = true;

  for (const [slug, officialNames] of Object.entries(CMS_TO_OFFICIAL)) {
    const name = slug
      .split("-")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" ");
    console.log(
      `\n--- ${slug} → ${officialNames.length ? officialNames.join(", ") : "NOT ON OFFICIAL"}`,
    );

    const differences = [];
    let officialGames = [];
    let loginGate = false;
    const onOfficial = officialNames.length > 0;
    const folder = SEED_FOLDERS[slug];

    if (onOfficial) {
      for (const vName of officialNames) {
        const v = vendorByName.get(vName);
        if (!v) {
          differences.push(`Lobby vendor missing: ${vName}`);
          visualMatchComplete = false;
          continue;
        }
        const click = await clickVendorAndDetectLogin(
          officialPage,
          v,
          officialNames.length === 1 ? slug : `${slug}-${v.id}`,
        );
        if (vName === officialNames[0]) {
          await clickVendorAndDetectLogin(officialPage, v, slug);
          loginGate = click.loginGate;
        }
        if (click.loginGate) {
          differences.push(
            `Guest click on ${vName} opens Sign In — full shelf DOM is login-gated.`,
          );
        }
        const games = await fetchVendorShelfGames(v.id);
        const withThumbs = games.filter((g) => g.image);
        const without = games.length - withThumbs.length;
        console.log(
          `  ${vName}: shelf=${games.length} withThumb=${withThumbs.length} missingThumbField=${without}`,
        );
        if (without) {
          differences.push(
            `${without} shelf rows for ${vName} had empty image fields (skipped).`,
          );
        }
        for (const g of withThumbs) {
          officialGames.push({
            ...g,
            vendor_name: vName,
            vendor_id: v.id,
          });
        }
      }
      const byId = new Map();
      for (const g of officialGames) byId.set(String(g.id), g);
      officialGames = [...byId.values()];
      await renderOfficialCardGrid(gridPage, slug, officialGames);
      if (!officialGames.length) {
        differences.push("No official card thumbnail URLs captured.");
        visualMatchComplete = false;
      }
    } else {
      visualMatchComplete = false;
      differences.push(
        "Provider does not exist on official TPOWER lobby (www.tpower3.com). Every local seed thumbnail is an incorrect mapping.",
      );
      await gridPage.setContent(
        `<html><body style="background:#111;color:#f87171;font-family:sans-serif;padding:36px">
        <h1>${name}</h1>
        <p>Not present on the official TPOWER lobby.</p>
        <p>Local provider page shows invented seed games — cannot visually match official.</p>
        </body></html>`,
      );
      await gridPage.screenshot({
        path: path.join(SHOTS, `official-cards-${slug}.png`),
      });
      await gridPage.screenshot({
        path: path.join(SHOTS, `official-shelf-${slug}.png`),
      });
    }

    liveByProvider[slug] = officialGames.map((g) => ({
      id: g.id,
      name: g.name,
      image: g.image,
      vendor_id: g.vendor_id,
      vendor_name: g.vendor_name,
    }));

    // Remove incorrect seed / invented covers
    let seedFilesRemoved = 0;
    if (folder) {
      const dir = path.join(GAMES_ROOT, folder);
      if (fs.existsSync(dir)) {
        const officialIds = new Set(
          officialGames.map((g) => `${g.id}.webp`.toLowerCase()),
        );
        for (const file of fs.readdirSync(dir)) {
          if (!/\.webp$/i.test(file)) continue;
          const abs = path.join(dir, file);
          const isOfficialId = officialIds.has(file.toLowerCase());
          const placeholder = await isGeneratedPlaceholder(abs);
          const isNumeric = /^\d+\.webp$/i.test(file);
          let remove = false;
          if (!onOfficial) {
            // No official shelf — every local cover is an incorrect mapping
            remove = true;
          } else if (!isOfficialId && (!isNumeric || placeholder)) {
            // Slug seed plates / placeholders not tied to this shelf
            remove = true;
          }
          if (remove) {
            try {
              fs.chmodSync(abs, 0o666);
            } catch {
              // ignore
            }
            try {
              fs.unlinkSync(abs);
              seedFilesRemoved += 1;
            } catch {
              // locked by OneDrive
            }
          }
        }
      }
    }

    let replaced = 0;
    let mismatchRemaining = 0;
    const hashes = new Map();

    await mapPool(officialGames, CONCURRENCY, async (game) => {
      const sourceId = String(game.id);
      const cat = catBySourceId.get(sourceId);
      const providerFolder =
        cat?.providerFolder || folder || slug.replace(/-/g, "");
      const imagePath = `/images/games/${providerFolder}/${sourceId}.webp`;
      const abs = path.join(ROOT, "public", imagePath.replace(/^\//, ""));

      const live = await downloadLiveImage(game.image);
      if (!live) {
        mismatchRemaining += 1;
        visualMatchComplete = false;
        differences.push(`Download failed: ${game.name}`);
        return;
      }
      const webp = await sharp(live.buf)
        .rotate()
        .resize({
          width: 640,
          height: 640,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 90 })
        .toBuffer();

      let needsReplace = true;
      if (fs.existsSync(abs) && fs.statSync(abs).size > 0) {
        const dist = await perceptualDistance(fs.readFileSync(abs), webp);
        needsReplace = dist > 10;
      }
      if (needsReplace) {
        await writeAtomic(abs, webp);
        replaced += 1;
      }

      if (folder && game.name) {
        const seedSlug = slugify(game.name);
        if (seedSlug) {
          try {
            await writeAtomic(
              path.join(GAMES_ROOT, folder, `${seedSlug}.webp`),
              webp,
            );
          } catch (err) {
            differences.push(
              `Alias write failed for ${seedSlug}: ${err.message}`,
            );
          }
        }
      }

      if (cat) {
        cat.image = imagePath;
        cat.sourceImage = live.url;
      }

      const sha = crypto.createHash("sha256").update(webp).digest("hex");
      if (!hashes.has(sha)) hashes.set(sha, []);
      hashes.get(sha).push(sourceId);
    });

    const duplicateGroups = [...hashes.values()].filter((g) => g.length > 1)
      .length;
    if (duplicateGroups) {
      differences.push(
        `${duplicateGroups} duplicate groups (identical bytes reused across games) from official CDN.`,
      );
    }
    if (seedFilesRemoved) {
      differences.push(
        `Removed ${seedFilesRemoved} incorrect/seed local covers under /images/games/${folder}/.`,
      );
    }

    const localShot = await screenshotLocalProvider(localPage, slug);
    if (!localShot.ok) {
      differences.push(`Local screenshot failed: ${localShot.error}`);
      visualMatchComplete = false;
    } else {
      const broken = localShot.cards.filter(
        (c) => !c.complete || c.w === 0 || c.h === 0,
      ).length;
      if (broken) {
        differences.push(
          `${broken} local cards failed to load images (missing → fallback).`,
        );
        if (onOfficial) visualMatchComplete = false;
      }
      // Local invents many more cards than official for thin shelves
      if (onOfficial && localShot.cards.length > officialGames.length + 5) {
        differences.push(
          `Local page shows ~${localShot.cards.length} cards vs ${officialGames.length} official shelf games — seed/catalogue inflation.`,
        );
        visualMatchComplete = false;
      }
    }

    reportRows.push({
      slug,
      name,
      onOfficial,
      loginGate,
      officialGameCount: officialGames.length,
      replaced,
      seedFilesRemoved,
      mismatchRemaining,
      duplicateGroups,
      differences,
    });

    console.log(
      `  live=${officialGames.length} replaced=${replaced} removed=${seedFilesRemoved} mismatch=${mismatchRemaining}`,
    );
  }

  fs.writeFileSync(CAT_PATH, `${JSON.stringify(catalogue, null, 2)}\n`);
  const mapEntries = {};
  for (const g of catalogue) {
    mapEntries[`${g.providerId}:${g.sourceId}`] = {
      providerId: g.providerId,
      gameId: g.id,
      sourceId: g.sourceId,
      image: g.image,
      sourceUrl: g.sourceImage,
      status: fs.existsSync(
        path.join(ROOT, "public", String(g.image || "").replace(/^\//, "")),
      )
        ? "ok"
        : "missing",
    };
  }
  fs.writeFileSync(
    MAP_PATH,
    `${JSON.stringify(
      {
        version: 4,
        generatedAt: new Date().toISOString(),
        keyFormat: "providerId:sourceId",
        source: "visual-dom-thumb-sync",
        entries: mapEntries,
      },
      null,
      2,
    )}\n`,
  );

  fs.writeFileSync(
    LIVE_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        visuallyMatched: visualMatchComplete,
        domLobbyCards: domCards,
        liveByProvider,
        officialVendors: vendors.map((v) => v.name),
        note: "Guest vendor clicks open Sign In; shelf card image URLs come from SPA frontend/api/game/list (includes thumbnails).",
      },
      null,
      2,
    )}\n`,
  );

  fs.writeFileSync(
    path.join(OUT, "index.html"),
    buildHtmlReport(reportRows, {
      generatedAt: new Date().toISOString(),
      localBase: LOCAL_BASE,
      domCards: domCards.length,
      officialVendors: vendors.length,
    }),
  );

  const md = [
    "# Visual thumbnail comparison findings",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "Prior pipeline reports ignored.",
    "",
    visualMatchComplete
      ? "Visual match: COMPLETE for mapped official providers."
      : "**Visual match: INCOMPLETE** — aggregate download statistics withheld.",
    "",
    "## Why previous reports were wrong",
    "",
    "- `api/myGamesByDomain` is not how the official provider shelf renders cards.",
    "- Guest users cannot open vendor game grids — Sign In modal appears.",
    "- CMS pages for **PG Soft, Evolution, Microgaming, Play'n GO, Habanero, Spribe, SBO** have **no official lobby counterpart**; local seed libraries invent games/thumbnails.",
    "- Dream Gaming / AE Sexy official shelves are tiny; local seeds inflate them.",
    "",
    "## Official lobby vendors",
    "",
    vendors.map((v) => `- ${v.name}`).join("\n"),
    "",
    "## Per provider",
    "",
    ...reportRows.map(
      (r) =>
        `### ${r.name}\n- On official: ${r.onOfficial ? "yes" : "**NO**"}\n- Login gate on click: ${r.loginGate}\n- Official card URLs: ${r.officialGameCount}\n- Replaced: ${r.replaced}\n- Seed files removed: ${r.seedFilesRemoved}\n- Differences:\n${(r.differences || []).map((d) => `  - ${d}`).join("\n") || "  - (none)"}\n`,
    ),
    "",
    `Open screenshot report: \`${path.relative(ROOT, path.join(OUT, "index.html"))}\``,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "FINDINGS.md"), md);

  await browser.close();
  console.log("\n" + md);
  console.log("Report:", path.join(OUT, "index.html"));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
