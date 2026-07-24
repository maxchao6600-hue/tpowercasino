import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const W = 1200;
const H = 1200;

const markPath = path.join(ROOT, "public/logo/tpower-mark.png");
const providerDir = path.join(ROOT, "public/providers");
const outPath = path.join(ROOT, "public/images/hero.webp");

const providerFiles = [
  "pragmatic-play.png",
  "evolution.png",
  "pg-soft.png",
  "jili.png",
  "spadegaming.png",
  "microgaming.png",
].map((f) => path.join(providerDir, f));

const baseSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="48%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.45"/>
      <stop offset="55%" stop-color="#E50914" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#090909"/>
  <circle cx="600" cy="520" r="420" fill="url(#glow)"/>
  <circle cx="220" cy="260" r="120" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1.5"/>
  <circle cx="980" cy="860" r="160" fill="none" stroke="#E50914" stroke-opacity="0.18" stroke-width="1.5"/>
  <rect x="180" y="210" width="840" height="780" rx="48" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.08"/>
  <rect x="250" y="280" width="700" height="640" rx="40" fill="#111111" fill-opacity="0.55" stroke="#252525"/>
</svg>`);

const mark = await sharp(markPath)
  .resize(280, 280, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const composites = [
  { input: baseSvg, top: 0, left: 0 },
  { input: mark, top: 460, left: 460 },
];

const slots = [
  { x: 300, y: 340 },
  { x: 760, y: 340 },
  { x: 260, y: 720 },
  { x: 800, y: 720 },
  { x: 520, y: 260 },
  { x: 520, y: 860 },
];

for (let i = 0; i < providerFiles.length; i++) {
  const file = providerFiles[i];
  if (!fs.existsSync(file)) continue;
  const chipBg = await sharp({
    create: {
      width: 160,
      height: 72,
      channels: 4,
      background: { r: 22, g: 22, b: 22, alpha: 0.92 },
    },
  })
    .png()
    .toBuffer();

  const logo = await sharp(file)
    .resize(110, 40, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .modulate({ brightness: 1.25 })
    .png()
    .toBuffer();

  const chip = await sharp(chipBg)
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();

  // rounded glass chip via SVG mask approximation: just place
  composites.push({
    input: chip,
    left: slots[i].x,
    top: slots[i].y,
  });
}

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: { r: 9, g: 9, b: 9 },
  },
})
  .composite(composites)
  .webp({ quality: 88 })
  .toFile(outPath);

console.log("wrote", outPath);
