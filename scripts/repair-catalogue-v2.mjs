/**
 * For remaining patched catalogue thumbs that cannot be overwritten,
 * write `{slug}.v2.webp` and rewrite catalogue `image` paths to the sibling.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const cataloguePath = path.join(ROOT, "src/data/games-catalogue.json");
const catalogue = JSON.parse(fs.readFileSync(cataloguePath, "utf8"));

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
    return false;
  }
}

function hashHue(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h % 360;
}

async function makeCover(title, provider, seedKey) {
  const W = 480;
  const H = 640;
  const hue = hashHue(seedKey);
  const c0 = `hsl(${hue} 55% 14%)`;
  const c1 = `hsl(${(hue + 28) % 360} 60% 22%)`;
  const accent = `hsl(${(hue + 12) % 360} 85% 55%)`;
  const safeTitle = String(title || "Game").replace(/[<>&"]/g, "").slice(0, 28);
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
  <text x="40" y="520" fill="#fff" font-family="Arial,sans-serif" font-size="28" font-weight="700">${safeTitle}</text>
  <text x="40" y="560" fill="${accent}" font-family="Arial,sans-serif" font-size="16">${safeProvider}</text>
</svg>`);
  return sharp(svg).webp({ quality: 88 }).toBuffer();
}

let rewritten = 0;
let generated = 0;

for (const game of catalogue) {
  const rel = String(game.image || "").replace(/^\//, "");
  if (!rel || !rel.endsWith(".webp")) continue;
  if (rel.endsWith(".v2.webp")) continue;
  const abs = path.join(ROOT, "public", rel);
  if (!fs.existsSync(abs)) continue;
  if (!(await hasCornerPatch(abs))) continue;

  const v2Rel = rel.replace(/\.webp$/i, ".v2.webp");
  const v2Abs = path.join(ROOT, "public", v2Rel);
  if (!fs.existsSync(v2Abs) || (await hasCornerPatch(v2Abs))) {
    const buf = await makeCover(
      game.name?.en || game.slug,
      game.providerName || game.providerId,
      `catalogue:${game.id}`,
    );
    fs.writeFileSync(v2Abs, buf);
    generated += 1;
  }
  game.image = `/${v2Rel.replace(/\\/g, "/")}`;
  rewritten += 1;
  if (rewritten % 25 === 0) console.log("rewritten", rewritten);
}

fs.writeFileSync(cataloguePath, `${JSON.stringify(catalogue, null, 2)}\n`);
console.log(JSON.stringify({ rewritten, generated }, null, 2));
