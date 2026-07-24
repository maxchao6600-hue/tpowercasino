/**
 * Repair game thumbnails that still have solid corner rectangles baked in
 * by coverPreviousBrandCorner / the old games:unstamp flow.
 *
 * These are NOT CSS overlays — the colored blocks are pixels inside the .webp.
 * GameCard DOM only has Image + NEW/HOT; DevTools confirms no overlay nodes.
 *
 * Run: node scripts/repair-patched-game-covers.mjs
 *      node scripts/repair-patched-game-covers.mjs --dry-run
 *      node scripts/repair-patched-game-covers.mjs --limit 50
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const DRY = process.argv.includes("--dry-run");
const LIMIT = (() => {
  const i = process.argv.indexOf("--limit");
  return i >= 0 ? Number(process.argv[i + 1]) || 0 : 0;
})();

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const catalogue = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/games-catalogue.json"), "utf8"),
);

const byLocalImage = new Map();
for (const game of catalogue) {
  if (!game.image) continue;
  byLocalImage.set(String(game.image).replace(/\\/g, "/"), game);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_providers") continue;
      walk(abs, out);
    } else if (entry.name.endsWith(".webp")) {
      out.push(abs);
    }
  }
  return out;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Detect the solid top-left square painted by coverPreviousBrandCorner.
 * Requires high fill ratio + hard color jump on the patch edge.
 */
async function detectCornerPatch(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  if (w < 40 || h < 40) return { isPatch: false };

  const at = (x, y) => {
    const i = (y * w + x) * ch;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const same = (a, b, tol = 6) =>
    Math.abs(a[0] - b[0]) <= tol &&
    Math.abs(a[1] - b[1]) <= tol &&
    Math.abs(a[2] - b[2]) <= tol;

  const c0 = at(2, 2);
  let sw = 0;
  while (sw < w && same(at(Math.min(w - 1, sw), 2), c0)) sw += 1;
  let sh = 0;
  while (sh < h && same(at(2, Math.min(h - 1, sh)), c0)) sh += 1;
  const side = Math.min(sw, sh);
  if (side < 28) return { isPatch: false, side };

  let match = 0;
  const total = side * side;
  for (let y = 0; y < side; y++) {
    for (let x = 0; x < side; x++) {
      if (same(at(x, y), c0)) match += 1;
    }
  }
  const fill = match / total;

  const edgeJump = (axis) => {
    let jumps = 0;
    let n = 0;
    const step = Math.max(1, Math.floor(side / 16));
    for (let i = 0; i < side; i += step) {
      let inside;
      let outside;
      if (axis === "right") {
        inside = at(Math.max(0, side - 3), i);
        outside = at(Math.min(w - 1, side + 2), i);
      } else {
        inside = at(i, Math.max(0, side - 3));
        outside = at(i, Math.min(h - 1, side + 2));
      }
      jumps +=
        Math.abs(inside[0] - outside[0]) +
        Math.abs(inside[1] - outside[1]) +
        Math.abs(inside[2] - outside[2]);
      n += 1;
    }
    return n ? jumps / n : 0;
  };

  const avgJump = Math.max(edgeJump("right"), edgeJump("bottom"));
  const minDim = Math.min(w, h);
  const isPatch =
    fill >= 0.97 &&
    side >= Math.max(28, Math.round(minDim * 0.14)) &&
    side <= Math.round(minDim * 0.8) &&
    avgJump >= 15;

  return { isPatch, side, fill, avgJump, color: c0, w, h };
}

async function hasCornerPatch(input) {
  return (await detectCornerPatch(input)).isPatch;
}

function upgradeCandidates(url) {
  if (!url) return [];
  const list = [url];
  const u = String(url);
  if (/\/square\/\d+\//i.test(u)) {
    list.push(u.replace(/\/square\/\d+\//i, "/square/200/"));
    list.push(u.replace(/\/square\/\d+\//i, "/square/300/"));
  }
  if (/\.jpg(?:\?|$)/i.test(u)) list.push(u.replace(/\.jpg/i, ".png"));
  if (/\/thumbs\/mobile\//i.test(u)) {
    list.push(u.replace("/thumbs/mobile/", "/thumbs/"));
    list.push(u.replace("/thumbs/mobile/", "/thumbs/desktop/"));
  }
  return [...new Set(list)];
}

async function downloadBest(url) {
  let best = null;
  for (const candidate of upgradeCandidates(url)) {
    try {
      const res = await fetch(candidate, {
        headers: { "user-agent": UA, accept: "image/*" },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) continue;
      if (await hasCornerPatch(buf)) continue;
      if (!best || buf.length > best.len) {
        best = { buf, url: candidate, len: buf.length };
      }
    } catch {
      // next candidate
    }
  }
  return best;
}

function hashHue(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h % 360;
}

async function makeFallbackCover(title, provider, seedKey) {
  const W = 480;
  const H = 640;
  const hue = hashHue(seedKey);
  const c0 = `hsl(${hue} 55% 14%)`;
  const c1 = `hsl(${(hue + 28) % 360} 60% 22%)`;
  const accent = `hsl(${(hue + 12) % 360} 85% 55%)`;
  const safeTitle = String(title || "Game")
    .replace(/[<>&"]/g, "")
    .slice(0, 28);
  const safeProvider = String(provider || "TPOWER")
    .replace(/[<>&"]/g, "")
    .slice(0, 22);
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c0}"/>
      <stop offset="100%" stop-color="${c1}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="340" cy="180" r="90" fill="${accent}" opacity="0.22"/>
  <circle cx="120" cy="420" r="70" fill="${accent}" opacity="0.16"/>
  <text x="40" y="520" fill="#fff" font-family="Arial,sans-serif" font-size="28" font-weight="700">${safeTitle}</text>
  <text x="40" y="560" fill="${accent}" font-family="Arial,sans-serif" font-size="16">${safeProvider}</text>
</svg>`);
  return sharp(svg).webp({ quality: 88 }).toBuffer();
}

function localPublicPath(absWebp) {
  const rel = path
    .relative(path.join(ROOT, "public"), absWebp)
    .replace(/\\/g, "/");
  return `/${rel}`;
}

async function writeFileRetry(abs, data, attempts = 8) {
  let lastError;
  for (let i = 0; i < attempts; i++) {
    try {
      // OneDrive often blocks rename(); overwrite in place instead.
      try {
        fs.chmodSync(abs, 0o666);
      } catch {
        // new file
      }
      fs.writeFileSync(abs, data);
      return;
    } catch (error) {
      lastError = error;
      await new Promise((r) => setTimeout(r, 250 * (i + 1)));
    }
  }
  throw lastError;
}

async function writeCleanWebp(abs, buf) {
  const webp = await sharp(buf).webp({ quality: 90 }).toBuffer();
  await writeFileRetry(abs, webp);
  const slug = path.basename(abs, ".webp");
  const dir = path.dirname(abs);
  for (const ext of [".jpg", ".jpeg", ".png"]) {
    const sibling = path.join(dir, `${slug}${ext}`);
    if (!fs.existsSync(sibling)) continue;
    const out =
      ext === ".png"
        ? await sharp(buf).png().toBuffer()
        : await sharp(buf).jpeg({ quality: 90 }).toBuffer();
    await writeFileRetry(sibling, out);
  }
}

/** Index clean thumbs by slug/name for seed copy fallback. */
async function buildCleanBySlug(allFiles, patchedSet) {
  const map = new Map();
  for (const abs of allFiles) {
    if (patchedSet.has(abs)) continue;
    const slug = path.basename(abs, ".webp");
    if (!map.has(slug)) map.set(slug, abs);
  }
  return map;
}

const files = walk(GAMES_ROOT);
const patched = [];
for (const file of files) {
  try {
    if (await hasCornerPatch(file)) patched.push(file);
  } catch {
    // ignore
  }
}

console.log(
  JSON.stringify(
    {
      scanned: files.length,
      patched: patched.length,
      dry: DRY,
      limit: LIMIT || null,
    },
    null,
    2,
  ),
);

const patchedSet = new Set(patched);
const cleanBySlug = await buildCleanBySlug(files, patchedSet);

let redownloaded = 0;
let copied = 0;
let regenerated = 0;
let failed = 0;
const targets = LIMIT > 0 ? patched.slice(0, LIMIT) : patched;

// Phase 1: re-download catalogue sources
for (const abs of targets) {
  const publicPath = localPublicPath(abs);
  const game = byLocalImage.get(publicPath);
  if (!game?.sourceImage) continue;

  try {
    const best = await downloadBest(game.sourceImage);
    if (!best) continue;
    if (!DRY) {
      await writeCleanWebp(abs, best.buf);
      game.sourceImage = best.url;
      patchedSet.delete(abs);
      cleanBySlug.set(path.basename(abs, ".webp"), abs);
    }
    redownloaded += 1;
    if (redownloaded % 50 === 0) console.log(`redownloaded ${redownloaded}`);
  } catch (error) {
    failed += 1;
    console.warn("fail-download", publicPath, error.message);
  }
}

// Phase 2: copy from another clean slug match, else generate
for (const abs of targets) {
  if (!DRY && !patchedSet.has(abs) && (await hasCornerPatch(abs)) === false) {
    continue;
  }
  // In dry-run, skip ones we "would have" redownloaded
  if (DRY) {
    const game = byLocalImage.get(localPublicPath(abs));
    if (game?.sourceImage) {
      // already counted in phase 1 dry tally when downloadBest would work —
      // re-check quickly
      continue;
    }
  } else if (!(await hasCornerPatch(abs))) {
    continue;
  }

  const publicPath = localPublicPath(abs);
  const game = byLocalImage.get(publicPath);
  const folder = path.basename(path.dirname(abs));
  const slug = path.basename(abs, ".webp");

  try {
    // Prefer a clean sibling elsewhere with the same slug / soft name match.
    let donor = cleanBySlug.get(slug);
    if (!donor) {
      const soft = slugify(game?.name?.en || slug);
      for (const [key, value] of cleanBySlug) {
        if (key === soft || key.includes(soft) || soft.includes(key)) {
          if (key.length >= 4 || key === soft) {
            donor = value;
            break;
          }
        }
      }
    }

    if (donor && donor !== abs) {
      if (!DRY) {
        const buf = fs.readFileSync(donor);
        if (!(await hasCornerPatch(buf))) {
          await writeCleanWebp(abs, buf);
          patchedSet.delete(abs);
          copied += 1;
          continue;
        }
      } else {
        copied += 1;
        continue;
      }
    }

    if (!DRY) {
      const buf = await makeFallbackCover(
        game?.name?.en || slug,
        game?.providerName || folder,
        `${folder}:${slug}`,
      );
      await writeCleanWebp(abs, buf);
      patchedSet.delete(abs);
    }
    regenerated += 1;
  } catch (error) {
    failed += 1;
    console.warn("fail-repair", publicPath, error.message);
  }
}

if (!DRY && redownloaded > 0) {
  fs.writeFileSync(
    path.join(ROOT, "src/data/games-catalogue.json"),
    `${JSON.stringify(catalogue, null, 2)}\n`,
  );
}

console.log(
  JSON.stringify(
    {
      patched: patched.length,
      processed: targets.length,
      redownloaded,
      copied,
      regenerated,
      failed,
      dry: DRY,
    },
    null,
    2,
  ),
);
