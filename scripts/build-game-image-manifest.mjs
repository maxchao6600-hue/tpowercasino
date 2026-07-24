/**
 * Classify local game thumbs as real vs generated placeholders.
 * Output: src/data/game-image-manifest.json
 *
 * Generated heuristic: 480x640 + small filesize (SVG→webp pipeline).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const GAMES = path.join(ROOT, "public/images/games");
const OUT = path.join(ROOT, "src/data/game-image-manifest.json");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_providers") continue;
      walk(abs, out);
    } else if (/\.webp$/i.test(entry.name)) {
      out.push(abs);
    }
  }
  return out;
}

function toPublicPath(abs) {
  return `/${path.relative(path.join(ROOT, "public"), abs).replace(/\\/g, "/")}`;
}

async function hasCornerPatch(abs) {
  try {
    const { data, info } = await sharp(abs)
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
    for (let y = 0; y < side; y++) {
      for (let x = 0; x < side; x++) {
        if (same(at(x, y), c0)) match += 1;
      }
    }
    if (match / (side * side) < 0.97) return false;
    let jumps = 0;
    let n = 0;
    const step = Math.max(1, Math.floor(side / 16));
    for (let i = 0; i < side; i += step) {
      const a = at(Math.max(0, side - 3), i);
      const b = at(Math.min(w - 1, side + 2), i);
      jumps +=
        Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
      n += 1;
    }
    return n ? jumps / n >= 15 : false;
  } catch {
    return true;
  }
}

const realBySlug = {};
const generated = [];
const real = [];
const patched = [];

for (const abs of walk(GAMES)) {
  const pub = toPublicPath(abs);
  const slug = path.basename(abs, ".webp").replace(/\.v2$/i, "");
  try {
    const meta = await sharp(abs).metadata();
    const size = fs.statSync(abs).size;
    // Our SVG cover pipeline always writes 480x640 with a solid 6px accent bar
    // along the bottom edge — that fingerprint avoids misclassifying small real thumbs.
    let isGenerated = false;
    if (meta.width === 480 && meta.height === 640 && size < 22000) {
      const bar = await sharp(abs)
        .extract({ left: 40, top: 634, width: 400, height: 4 })
        .stats();
      const flatBar = bar.channels
        .slice(0, 3)
        .every((c) => (c.stdev ?? 999) < 28);
      // Generator also leaves a near-flat top-left plate area.
      const plate = await sharp(abs)
        .extract({ left: 28, top: 28, width: 48, height: 24 })
        .stats();
      const flatPlate = plate.channels
        .slice(0, 3)
        .every((c) => (c.stdev ?? 999) < 35);
      isGenerated = flatBar && flatPlate;
    }

    if (isGenerated) {
      generated.push(pub);
      continue;
    }

    if (await hasCornerPatch(abs)) {
      patched.push(pub);
      continue;
    }

    real.push(pub);
    // Prefer larger non-v2 real art for slug index
    const prev = realBySlug[slug];
    const score =
      (meta.width || 0) * (meta.height || 0) + (pub.includes(".v2.") ? 0 : 1000);
    if (!prev || score > prev.score) {
      realBySlug[slug] = { path: pub, score };
    }
  } catch {
    // unreadable
  }
}

const payload = {
  generated: generated.sort(),
  patched: patched.sort(),
  real: real.sort(),
  realBySlug: Object.fromEntries(
    Object.entries(realBySlug).map(([slug, value]) => [slug, value.path]),
  ),
};

fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      real: real.length,
      generated: generated.length,
      patched: patched.length,
      slugs: Object.keys(realBySlug).length,
      out: path.relative(ROOT, OUT),
    },
    null,
    2,
  ),
);
