/**
 * For games whose official CDN thumbnails are blocked/missing,
 * generate a branded cover so every catalogue card remains production-ready.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
// Game thumbnails must never receive a TPOWER logo watermark.

const ROOT = process.cwd();
const cataloguePath = path.join(ROOT, "src/data/games-catalogue.json");
const catalogue = JSON.parse(fs.readFileSync(cataloguePath, "utf8"));

const W = 480;
const H = 640;

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(title, max = 16) {
  const words = String(title).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > max && cur) {
      lines.push(cur);
      cur = w;
    } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

async function makeCover(game) {
  const lines = wrap(game.name.en);
  const provider = escapeXml((game.providerName || game.providerId || "").toUpperCase());
  const title = lines
    .map(
      (line, i) =>
        `<text x="40" y="${430 + i * 40}" font-family="Arial Black, Arial, sans-serif" font-size="30" font-weight="900" fill="#fff">${escapeXml(line)}</text>`,
    )
    .join("");
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14080c"/>
      <stop offset="55%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#050505"/>
    </linearGradient>
    <radialGradient id="g" cx="70%" cy="25%" r="55%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="28" y="360" rx="999" height="26" width="${Math.min(220, 40 + provider.length * 8)}" fill="rgba(0,0,0,0.5)" stroke="#E50914" stroke-opacity="0.5"/>
  <text x="42" y="378" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#fff">${provider}</text>
  ${title}
  <rect x="0" y="${H - 5}" width="${W}" height="5" fill="#E50914"/>
</svg>`);
  return sharp(svg).webp({ quality: 88 }).toBuffer();
}

let made = 0;
for (const game of catalogue) {
  const dest = path.join(ROOT, "public", game.image.replace(/^\//, ""));
  if (fs.existsSync(dest)) continue;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const buf = await makeCover(game);
  fs.writeFileSync(dest, buf);
  made += 1;
  console.log("fallback", game.slug);
}
console.log("created", made);
