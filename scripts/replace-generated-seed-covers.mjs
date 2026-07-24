/**
 * Replace tall generated seed covers (480x640 theme SVGs) with real catalogue art
 * when a matching clean thumb exists.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const catalogue = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/games-catalogue.json"), "utf8"),
);

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function hasCornerPatch(input) {
  try {
    const { data, info } = await sharp(input)
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

const byName = new Map();
for (const game of catalogue) {
  const key = slugify(game.name?.en);
  if (!key) continue;
  const rel = String(game.image || "").replace(/^\//, "");
  if (!rel || rel.includes(".v2.webp")) continue;
  const abs = path.join(ROOT, "public", rel);
  if (!fs.existsSync(abs)) continue;
  if (await hasCornerPatch(abs)) continue;
  const meta = await sharp(abs).metadata();
  const score =
    meta.width === 480 && meta.height === 640
      ? 1
      : (meta.width || 0) * (meta.height || 0);
  const prev = byName.get(key);
  if (!prev || score > prev.score) {
    byName.set(key, { abs, score, image: game.image, sourceImage: game.sourceImage });
  }
}

const folders = [
  "pgsoft",
  "evolution",
  "spribe",
  "sexy-gaming",
  "dream-gaming",
  "habanero",
  "playngo",
  "microgaming",
  "sbo",
  "jili",
  "jdb",
  "spadegaming",
  "pragmatic",
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function download(url) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "image/*" },
      redirect: "follow",
    });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1024) return null;
    if (await hasCornerPatch(buf)) return null;
    return buf;
  } catch {
    return null;
  }
}

let replaced = 0;
let downloaded = 0;
let skipped = 0;

for (const folder of folders) {
  const dir = path.join(ROOT, "public/images/games", folder);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".webp") && !x.includes(".v2."))) {
    const abs = path.join(dir, f);
    const meta = await sharp(abs).metadata();
    const looksGenerated = meta.width === 480 && meta.height === 640;
    const patched = await hasCornerPatch(abs);
    if (!looksGenerated && !patched) {
      skipped += 1;
      continue;
    }

    const key = f.replace(/\.webp$/i, "");
    const donor = byName.get(key);
    let buf = null;
    if (donor) {
      buf = await sharp(donor.abs).webp({ quality: 90 }).toBuffer();
    } else if (donor?.sourceImage) {
      buf = await download(donor.sourceImage);
      if (buf) buf = await sharp(buf).webp({ quality: 90 }).toBuffer();
    }

    // Soft name match
    if (!buf) {
      for (const [name, entry] of byName) {
        if (name.includes(key) || key.includes(name)) {
          if (name.length >= 5) {
            buf = await sharp(entry.abs).webp({ quality: 90 }).toBuffer();
            break;
          }
        }
      }
    }

    if (!buf) {
      console.log("keep", folder, f);
      continue;
    }

    try {
      fs.writeFileSync(abs, buf);
      console.log("replaced", folder, f);
      replaced += 1;
    } catch {
      const v2 = abs.replace(/\.webp$/i, ".v2.webp");
      fs.writeFileSync(v2, buf);
      console.log("v2", folder, f);
      downloaded += 1;
    }
  }
}

// refresh manifest
const manifest = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    else if (entry.name.endsWith(".v2.webp")) {
      manifest.push(
        `/${path.relative(path.join(ROOT, "public"), abs).replace(/\\/g, "/")}`,
      );
    }
  }
}
walk(path.join(ROOT, "public/images/games"));
fs.writeFileSync(
  path.join(ROOT, "src/data/repaired-game-images.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(JSON.stringify({ replaced, downloaded, skipped, manifest: manifest.length }, null, 2));
