/**
 * Restore clean game thumbnails after logo-unstamp corner patches.
 *
 * For each .webp under public/images/games:
 * 1) Prefer sibling original (.jpg/.jpeg/.png) written by the crawl (unstamped)
 * 2) Otherwise leave for seed regeneration (games:covers --force)
 *
 * Run: node scripts/restore-clean-game-covers.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const FORCE = process.argv.includes("--force");

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

function findOriginal(webpPath) {
  const dir = path.dirname(webpPath);
  const base = path.basename(webpPath, ".webp");
  for (const ext of [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]) {
    const candidate = path.join(dir, `${base}${ext}`);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

/**
 * Detect solid top-left square left by coverPreviousBrandCorner.
 * Uses raw pixels + hard edge jump (sharp.stats missed many patches).
 */
async function hasCornerPatch(webpPath) {
  try {
    const { data, info } = await sharp(webpPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const { width: w, height: h, channels: ch } = info;
    if (w < 40 || h < 40) return false;

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
    const minDim = Math.min(w, h);
    if (side < Math.max(28, Math.round(minDim * 0.14))) return false;
    if (side > Math.round(minDim * 0.8)) return false;

    let match = 0;
    const total = side * side;
    for (let y = 0; y < side; y++) {
      for (let x = 0; x < side; x++) {
        if (same(at(x, y), c0)) match += 1;
      }
    }
    if (match / total < 0.97) return false;

    let jumps = 0;
    let n = 0;
    const step = Math.max(1, Math.floor(side / 16));
    for (let i = 0; i < side; i += step) {
      const insideR = at(Math.max(0, side - 3), i);
      const outsideR = at(Math.min(w - 1, side + 2), i);
      const insideB = at(i, Math.max(0, side - 3));
      const outsideB = at(i, Math.min(h - 1, side + 2));
      const jR =
        Math.abs(insideR[0] - outsideR[0]) +
        Math.abs(insideR[1] - outsideR[1]) +
        Math.abs(insideR[2] - outsideR[2]);
      const jB =
        Math.abs(insideB[0] - outsideB[0]) +
        Math.abs(insideB[1] - outsideB[1]) +
        Math.abs(insideB[2] - outsideB[2]);
      jumps += Math.max(jR, jB);
      n += 1;
    }
    return n ? jumps / n >= 15 : false;
  } catch {
    return false;
  }
}

const files = walk(GAMES_ROOT);
let restored = 0;
let skipped = 0;
let noOriginal = 0;

for (const webp of files) {
  const original = findOriginal(webp);
  if (!original) {
    noOriginal += 1;
    continue;
  }

  const damaged = FORCE || (await hasCornerPatch(webp));
  if (!damaged) {
    skipped += 1;
    continue;
  }

  try {
    const clean = await sharp(original).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(webp, clean);
    restored += 1;
    if (restored % 100 === 0) {
      console.log(`restored ${restored}`);
    }
  } catch (error) {
    console.warn("fail", path.relative(ROOT, webp), error.message);
  }
}

console.log(
  JSON.stringify({ restored, skipped, noOriginal, total: files.length }, null, 2),
);
