/**
 * Browser-first thumbnail sync against official TPOWER (www.tpower3.com).
 *
 * Ignores previous pipeline reports. Sources of truth:
 *  1) Game-card <img> URLs rendered in the official browser DOM (hot/lobby)
 *  2) frontend/api/game/list?vendor_id=… — the SPA’s own game-shelf endpoint
 *     ($enableNewApi), NOT api/myGamesByDomain
 *
 * For each CMS provider page:
 *  - Screenshot official lobby (vendor tile / hot games)
 *  - Screenshot local /en/providers/{slug}/games
 *  - Re-download live thumb URLs and replace mismatched local assets
 *  - Remove generated seed placeholder covers (solid/flat 480×640 plates)
 *
 * Output: scripts/visual-thumb-report/index.html
 *
 * Run: node scripts/visual-live-thumb-sync.mjs
 * Env: LOCAL_BASE=http://localhost:3000
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
const LIVE_JSON = path.join(OUT, "live-games.json");
const MAP_PATH = path.join(ROOT, "src/data/game-thumbnail-map.json");
const CAT_PATH = path.join(ROOT, "src/data/games-catalogue.json");
const GAMES_ROOT = path.join(ROOT, "public/images/games");

const LOCAL_BASE = process.env.LOCAL_BASE || "http://localhost:3000";
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

/** CMS slug → official vendor name(s) on TPOWER lobby */
const CMS_TO_OFFICIAL = {
  "pragmatic-play": ["PRAGMATIC-SLOT", "PRAGMATIC-LIVE"],
  "pg-soft": [], // NOT on official TPOWER
  evolution: [], // NOT on official TPOWER
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

async function fetchVendorGames(vendorId) {
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
      throw new Error(`game/list vendor ${vendorId}: ${r.code} ${r.message}`);
    }
    const games = Array.isArray(r.data) ? r.data : r.data?.games || [];
    all.push(...games);
    if (games.length < 200) break;
    page += 1;
    if (page > 50) break;
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
      if (!best || buf.length > best.buf.length) {
        best = { buf, url: candidate };
      }
    } catch {
      // try next
    }
  }
  return best;
}

async function isGeneratedPlaceholder(abs) {
  if (!fs.existsSync(abs)) return false;
  try {
    const meta = await sharp(abs).metadata();
    const st = fs.statSync(abs);
    // Cover pipeline writes 480×640 SVG→webp plates
    if (meta.width === 480 && meta.height === 640 && st.size < 40_000) {
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
    return false;
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
  return sum / a.length; // 0–255
}

async function writeAtomic(abs, data) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const tmp = `${abs}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, data);
  fs.renameSync(tmp, abs);
}

async function dismissLocalOverlays(page) {
  const age = page.getByRole("button", { name: /21 or older/i });
  if (await age.count()) await age.first().click().catch(() => {});
  await page.keyboard.press("Escape").catch(() => {});
}

async function scrapeOfficialDomCards(page) {
  await page.goto(ORIGIN + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 700);
    await page.waitForTimeout(500);
  }
  await page.screenshot({
    path: path.join(SHOTS, "official-home-hot.png"),
    fullPage: false,
  });

  return page.evaluate(() => {
    const cards = [];
    for (const img of document.querySelectorAll("img")) {
      if (img.naturalWidth < 80 || img.naturalHeight < 80) continue;
      if (img.naturalWidth > 900 || img.naturalHeight > 900) continue;
      const src = img.currentSrc || img.src || "";
      if (
        !/game_pic|square|thumb|cdn-bet|bucket|mega999|icon|hugedolphin|eptech|kz344|prerelease|tcdl|pgs_jpg/i.test(
          src,
        )
      ) {
        continue;
      }
      const root = img.closest("a,button,li,div");
      const text = (root?.innerText || "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 160);
      cards.push({
        src,
        w: img.naturalWidth,
        h: img.naturalHeight,
        text,
      });
    }
    return cards;
  });
}

async function screenshotOfficialVendor(page, vendor, slug) {
  await page.goto(ORIGIN + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  for (let i = 0; i < 8; i++) {
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(350);
  }
  const needle = String(vendor.image || "")
    .split("/")
    .pop()
    ?.split("?")[0];
  const loc = needle ? page.locator(`img[src*="${needle}"]`).first() : null;
  if (loc && (await loc.count())) {
    await loc.scrollIntoViewIfNeeded().catch(() => {});
    await page.waitForTimeout(400);
    const box = await loc.boundingBox();
    if (box) {
      await page.screenshot({
        path: path.join(SHOTS, `official-vendor-${slug}.png`),
        clip: {
          x: Math.max(0, box.x - 8),
          y: Math.max(0, box.y - 8),
          width: Math.min(420, box.width + 16),
          height: Math.min(500, box.height + 16),
        },
      });
      return true;
    }
  }
  await page.screenshot({
    path: path.join(SHOTS, `official-vendor-${slug}.png`),
    fullPage: false,
  });
  return false;
}

async function screenshotLocalProvider(page, slug) {
  const url = `${LOCAL_BASE}/en/providers/${slug}/games`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForTimeout(1200);
    await dismissLocalOverlays(page);
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(SHOTS, `local-provider-${slug}.png`),
      fullPage: false,
    });
    const cards = await page.evaluate(() =>
      [...document.querySelectorAll("article img, article.group img")]
        .slice(0, 24)
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

async function renderOfficialShelfShot(page, slug, games) {
  // Visual shelf of the exact live image URLs (what cards use), for comparison
  // when login blocks the official in-app vendor shelf.
  const sample = games.slice(0, 24);
  const html = `<!doctype html><html><head><meta charset="utf-8"/>
  <style>
    body{margin:0;background:#0b0b0f;color:#fff;font-family:system-ui}
    h1{font-size:16px;padding:12px 16px;margin:0}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px}
    .card{background:#16161c;border-radius:10px;overflow:hidden}
    .card img{width:100%;aspect-ratio:1;object-fit:cover;display:block;background:#222}
    .card p{margin:0;padding:6px 8px;font-size:11px;line-height:1.2;min-height:32px}
  </style></head><body>
  <h1>Official live card art — ${slug} (${games.length} games)</h1>
  <div class="grid">
  ${sample
    .map(
      (g) => `<div class="card"><img src="${g.image}"/><p>${String(g.name || "")
        .replace(/</g, "")
        .slice(0, 48)}</p></div>`,
    )
    .join("")}
  </div></body></html>`;
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: path.join(SHOTS, `official-shelf-${slug}.png`),
    fullPage: false,
  });
}

function buildHtmlReport(rows, meta) {
  const cards = rows
    .map((r) => {
      const offVendor = `shots/official-vendor-${r.slug}.png`;
      const offShelf = `shots/official-shelf-${r.slug}.png`;
      const local = `shots/local-provider-${r.slug}.png`;
      const officialNote = r.onOfficial
        ? `${r.officialGameCount} live games from official shelf`
        : "NOT PRESENT on official TPOWER lobby";
      return `<section class="row">
  <h2>${r.name} <small>(${r.slug})</small></h2>
  <p class="note">${officialNote}. Replaced ${r.replaced}, placeholders removed ${r.placeholdersRemoved}, mismatches remaining ${r.mismatchRemaining}, duplicates ${r.duplicateGroups}.</p>
  <div class="cols">
    <figure><img src="${offVendor}"/><figcaption>Official page (vendor tile)</figcaption></figure>
    <figure><img src="${offShelf}"/><figcaption>Official live card art</figcaption></figure>
    <figure><img src="${local}"/><figcaption>Local downloaded page</figcaption></figure>
  </div>
  <details><summary>Differences</summary>
    <ul>${(r.differences || []).map((d) => `<li>${d}</li>`).join("") || "<li>None recorded</li>"}</ul>
  </details>
</section>`;
    })
    .join("\n");

  return `<!doctype html>
<html><head><meta charset="utf-8"/>
<title>TPOWER visual thumbnail comparison</title>
<style>
  body{font-family:Segoe UI,system-ui,sans-serif;background:#111;color:#eee;margin:0;padding:24px}
  h1{margin:0 0 8px}
  .meta{opacity:.8;margin-bottom:24px;max-width:900px;line-height:1.45}
  .row{border-top:1px solid #333;padding:20px 0}
  .cols{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  figure{margin:0;background:#1a1a1a;border-radius:8px;overflow:hidden}
  img{width:100%;display:block;background:#000;min-height:120px;object-fit:cover}
  figcaption{padding:8px;font-size:12px;opacity:.85}
  .note{font-size:14px;opacity:.9}
  small{opacity:.6}
  details{margin-top:10px}
</style></head><body>
<h1>Official vs local thumbnail comparison</h1>
<p class="meta">
  Generated ${meta.generatedAt}. Previous API crawl reports were ignored.<br/>
  Live source: browser DOM on ${ORIGIN} + SPA endpoint <code>frontend/api/game/list</code> (vendor_id).<br/>
  Local base: ${meta.localBase}. Dom hot-game cards scraped: ${meta.domCards}.
  Official vendors on lobby: ${meta.officialVendors}.
</p>
${cards}
</body></html>`;
}

async function main() {
  ensureDirs();
  console.log("=== Visual live thumb sync (ignore prior reports) ===");

  const vendorsRes = await apiPost("api/newVendorsByDomain", {
    domain: DOMAIN,
  });
  const vendors = vendorsRes.data || [];
  const vendorByName = new Map(vendors.map((v) => [v.name, v]));
  console.log("official vendors", vendors.length);

  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME,
  });
  const officialPage = await browser.newPage({
    viewport: { width: 420, height: 900 },
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
  });
  const localPage = await browser.newPage({
    viewport: { width: 1280, height: 900 },
  });
  const shelfPage = await browser.newPage({
    viewport: { width: 420, height: 900 },
  });

  const domCards = await scrapeOfficialDomCards(officialPage);
  console.log("DOM hot/lobby game cards", domCards.length);
  fs.writeFileSync(
    path.join(OUT, "dom-cards.json"),
    JSON.stringify(domCards, null, 2),
  );

  // Verify DOM card URLs are fetchable (live)
  let domOk = 0;
  for (const c of domCards.slice(0, 30)) {
    const d = await downloadLiveImage(c.src);
    if (d) domOk += 1;
  }
  console.log("DOM sample fetchable", domOk, "/", Math.min(30, domCards.length));

  const catalogue = JSON.parse(fs.readFileSync(CAT_PATH, "utf8"));
  const catBySourceId = new Map(
    catalogue.map((g) => [String(g.sourceId), g]),
  );

  const liveByProvider = {};
  const hashToGames = new Map();
  const reportRows = [];

  for (const [slug, officialNames] of Object.entries(CMS_TO_OFFICIAL)) {
    const name = slug
      .split("-")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" ");
    console.log("\n---", slug, "→", officialNames.length ? officialNames : "NOT ON OFFICIAL");

    const differences = [];
    let officialGames = [];
    let onOfficial = officialNames.length > 0;

    if (onOfficial) {
      for (const vName of officialNames) {
        const v = vendorByName.get(vName);
        if (!v) {
          differences.push(`Official vendor missing: ${vName}`);
          continue;
        }
        await screenshotOfficialVendor(officialPage, v, `${slug}-${v.id}`);
        // also one combined slug shot from first vendor
        if (vName === officialNames[0]) {
          await screenshotOfficialVendor(officialPage, v, slug);
        }
        const games = await fetchVendorGames(v.id);
        for (const g of games) {
          officialGames.push({
            ...g,
            vendor_name: vName,
            vendor_id: v.id,
          });
        }
        console.log(`  ${vName}: ${games.length} games`);
      }
      // dedupe by id
      const byId = new Map();
      for (const g of officialGames) byId.set(String(g.id), g);
      officialGames = [...byId.values()];
      await renderOfficialShelfShot(shelfPage, slug, officialGames);
    } else {
      differences.push(
        "This CMS provider has no matching vendor tile on official TPOWER. Local page is seed-only and cannot visually match the official site.",
      );
      // placeholder black shot
      await shelfPage.setContent(
        `<html><body style="background:#111;color:#f66;font-family:sans-serif;padding:40px">
        <h1>${name}</h1>
        <p>Not present on official TPOWER lobby (www.tpower3.com).</p>
        <p>Local seed thumbnails are incorrect mappings.</p>
        </body></html>`,
      );
      await shelfPage.screenshot({
        path: path.join(SHOTS, `official-shelf-${slug}.png`),
      });
      await shelfPage.screenshot({
        path: path.join(SHOTS, `official-vendor-${slug}.png`),
      });
    }

    liveByProvider[slug] = officialGames.map((g) => ({
      id: g.id,
      name: g.name,
      image: g.image,
      vendor_id: g.vendor_id,
      vendor_name: g.vendor_name,
    }));

    // Remove generated seed placeholders in this provider folder
    const folder = SEED_FOLDERS[slug];
    let placeholdersRemoved = 0;
    if (folder) {
      const dir = path.join(GAMES_ROOT, folder);
      if (fs.existsSync(dir)) {
        for (const file of fs.readdirSync(dir)) {
          if (!/\.webp$/i.test(file)) continue;
          // keep numeric sourceId files from catalogue sync; purge slug seed plates
          if (/^\d+\.webp$/i.test(file)) continue;
          const abs = path.join(dir, file);
          if (await isGeneratedPlaceholder(abs)) {
            fs.unlinkSync(abs);
            placeholdersRemoved += 1;
          }
        }
      }
    }

    // Re-download / replace every official game thumb into id-based path
    let replaced = 0;
    let mismatchRemaining = 0;
    const localHashes = new Map();

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
        differences.push(`Failed live download: ${game.name} (${game.image})`);
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
        // threshold: visually different
        needsReplace = dist > 12;
      }

      if (needsReplace) {
        await writeAtomic(abs, webp);
        replaced += 1;
      }

      // Also write seed slug alias when catalogue name matches a seed-style slug file
      if (folder && game.name) {
        const seedSlug = String(game.name)
          .toLowerCase()
          .replace(/['’]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .slice(0, 72);
        if (seedSlug) {
          const alias = path.join(GAMES_ROOT, folder, `${seedSlug}.webp`);
          await writeAtomic(alias, webp);
        }
      }

      if (cat) {
        cat.image = imagePath;
        cat.sourceImage = live.url;
      }

      const sha = crypto.createHash("sha256").update(webp).digest("hex");
      if (!localHashes.has(sha)) localHashes.set(sha, []);
      localHashes.get(sha).push(sourceId);
      if (!hashToGames.has(sha)) hashToGames.set(sha, []);
      hashToGames.get(sha).push(`${slug}:${sourceId}`);
    });

    const duplicateGroups = [...localHashes.values()].filter(
      (g) => g.length > 1,
    ).length;
    if (duplicateGroups) {
      differences.push(
        `${duplicateGroups} duplicate image groups (same bytes reused across games) — source CDN reuse.`,
      );
    }

    if (onOfficial && officialGames.length === 0) {
      differences.push("Official vendor present but game/list returned 0 games.");
    }
    if (!onOfficial) {
      differences.push(
        `Removed ${placeholdersRemoved} generated placeholder seed covers from /images/games/${folder}/.`,
      );
    }

    const localShot = await screenshotLocalProvider(localPage, slug);
    if (!localShot.ok) {
      differences.push(`Local page screenshot failed: ${localShot.error}`);
    } else {
      const broken = localShot.cards.filter(
        (c) => !c.complete || c.w === 0 || c.h === 0,
      ).length;
      if (broken) {
        differences.push(
          `${broken} local cards failed to load images in the browser (fallback/missing).`,
        );
      }
    }

    reportRows.push({
      slug,
      name,
      onOfficial,
      officialGameCount: officialGames.length,
      replaced,
      placeholdersRemoved,
      mismatchRemaining,
      duplicateGroups,
      differences,
    });

    console.log(
      `  replaced=${replaced} placeholdersRemoved=${placeholdersRemoved} mismatchRemaining=${mismatchRemaining}`,
    );
  }

  // Persist catalogue + mapping from live shelf
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
        version: 3,
        generatedAt: new Date().toISOString(),
        keyFormat: "providerId:sourceId",
        source: "visual-live-thumb-sync (DOM + frontend/api/game/list)",
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
        domCards,
        liveByProvider,
        officialVendors: vendors.map((v) => v.name),
      },
      null,
      2,
    )}\n`,
  );

  const html = buildHtmlReport(reportRows, {
    generatedAt: new Date().toISOString(),
    localBase: LOCAL_BASE,
    domCards: domCards.length,
    officialVendors: vendors.length,
  });
  fs.writeFileSync(path.join(OUT, "index.html"), html);

  // Findings-only markdown (no fake “106 missing” stats)
  const md = [
    "# Visual thumbnail sync findings",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "Prior pipeline reports were ignored.",
    "",
    "## Official TPOWER reality check",
    "",
    "- SPA game shelves use `frontend/api/game/list` with `vendor_id` (not `myGamesByDomain`).",
    "- CMS providers **PG Soft, Evolution, Microgaming, Play’n GO, Habanero, Spribe, SBO** are **not** on the official lobby.",
    "- Dream Gaming official shelf = 1 game; AE Sexy = 3 games. Local seed libraries were inventing the rest.",
    "",
    "## Per provider",
    "",
    ...reportRows.map(
      (r) =>
        `### ${r.name}\n- On official: ${r.onOfficial ? "yes" : "NO"}\n- Live games: ${r.officialGameCount}\n- Assets replaced: ${r.replaced}\n- Placeholders removed: ${r.placeholdersRemoved}\n- Differences:\n${(r.differences || []).map((d) => `  - ${d}`).join("\n") || "  - (none)"}\n`,
    ),
    "",
    `Open HTML report: ${path.relative(ROOT, path.join(OUT, "index.html"))}`,
    "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "FINDINGS.md"), md);

  await browser.close();
  console.log("\nReport:", path.join(OUT, "index.html"));
  console.log(md);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
