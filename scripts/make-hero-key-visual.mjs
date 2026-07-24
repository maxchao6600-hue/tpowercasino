/**
 * Finalize commercial key visual hero.
 * Starts from an integrated campaign render (players primary),
 * then adds subtle official brand + provider accents only.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const W = 1600;
const H = 1600;

const sourceCandidates = [
  path.join(
    process.env.USERPROFILE || "",
    ".cursor",
    "projects",
    "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
    "assets",
    "hero-key-visual-v1.png",
  ),
  path.join(ROOT, "assets", "hero-key-visual-v1.png"),
];

const source = sourceCandidates.find((p) => fs.existsSync(p));
if (!source) throw new Error("hero-key-visual-v1.png missing");

const logoPath = path.join(ROOT, "public/logo/tpower-logo.png");
const outPath = path.join(ROOT, "public/images/hero.webp");
const previewPath = path.join(ROOT, "assets", "hero-key-visual-final.png");

// Providers / glass / phone are already integrated in the key visual.
// Only reinforce the official brand mark — keep players as the primary focus.

const base = await sharp(source)
  .resize(W, H, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.94, saturation: 1.08 })
  .sharpen({ sigma: 0.6 })
  .png()
  .toBuffer();

// Subtle cinematic grade — deepen blacks, soft red atmosphere
const grade = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="red" cx="55%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="50%" cy="45%" r="75%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.55"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#red)"/>
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
</svg>`);

const layers = [
  { input: base, top: 0, left: 0 },
  { input: await sharp(grade).png().toBuffer(), top: 0, left: 0 },
];

// Official logo — small, integrated over the generated mark area
if (fs.existsSync(logoPath)) {
  const brand = await sharp(logoPath)
    .resize(88, 88, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const softGlow = Buffer.from(`<svg width="130" height="130" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#E50914" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="65" cy="65" r="65" fill="url(#g)"/>
  </svg>`);

  layers.push(
    { input: await sharp(softGlow).png().toBuffer(), left: 52, top: 52 },
    { input: brand, left: 73, top: 73 },
  );
}

// Soft film grain
const grain = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.035 0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)"/>
</svg>`);
layers.push({ input: await sharp(grain).png().toBuffer(), top: 0, left: 0 });

const composed = sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: { r: 8, g: 8, b: 8 },
  },
}).composite(layers);

await composed.clone().webp({ quality: 91 }).toFile(outPath);
await sharp(outPath).png().toFile(previewPath);

// Keep working source in project assets
fs.copyFileSync(source, path.join(ROOT, "assets", "hero-key-visual-v1.png"));

console.log("wrote", outPath);
console.log("preview", previewPath);
