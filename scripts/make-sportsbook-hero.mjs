/**
 * Premium sportsbook hero composition (DraftKings / FanDuel caliber).
 * Original AI photography + photoreal product overlays. Not a logo collage.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const ASSETS = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
  "assets",
);

const W = 1600;
const H = 1600;
const outPath = path.join(ROOT, "public/images/hero.webp");

function resolveAsset(...names) {
  for (const name of names) {
    const candidates = [
      path.join(ASSETS, name),
      path.join(ROOT, "assets", name),
    ];
    const hit = candidates.find((p) => fs.existsSync(p));
    if (hit) return hit;
  }
  throw new Error(`Missing asset: ${names.join(" | ")}`);
}

async function knockOutNearBlack(input, threshold = 28) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    if (max <= threshold) {
      // Soft edge: fade very dark pixels
      const t = max / threshold;
      data[i + 3] = Math.round(data[i + 3] * t * t);
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function softShadow(width, height, blur = 28, opacity = 0.55) {
  const svg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="s" cx="50%" cy="55%" r="50%">
        <stop offset="0%" stop-color="#000" stop-opacity="${opacity}"/>
        <stop offset="70%" stop-color="#000" stop-opacity="${opacity * 0.35}"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="${width / 2}" cy="${height * 0.72}" rx="${width * 0.42}" ry="${height * 0.18}" fill="url(#s)"/>
  </svg>`);
  return sharp(svg).blur(blur).png().toBuffer();
}

async function providerOrb(file, size = 96) {
  // Frosted light plate so dark provider marks stay readable
  const plate = Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.96"/>
        <stop offset="100%" stop-color="#d8d8d8" stop-opacity="0.92"/>
      </radialGradient>
      <filter id="f" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000" flood-opacity="0.55"/>
      </filter>
    </defs>
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="url(#g)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5" filter="url(#f)"/>
  </svg>`);

  const logo = await sharp(file)
    .resize(Math.round(size * 0.58), Math.round(size * 0.58), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp(plate)
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

const basePath = resolveAsset("hero-sportsbook-base.png", "hero-sports-base.png");
const phonePath = resolveAsset("hero-phone-mockup.png");
const cardsPath = resolveAsset("hero-glass-cards.png");
const logoPath = path.join(ROOT, "public/logo/tpower-logo.png");

const providers = [
  "sbo.png",
  "evolution.png",
  "pragmatic-play.png",
  "pg-soft.png",
].map((f) => path.join(ROOT, "public/providers", f));

// ---- Cinematic base ----
const base = await sharp(basePath)
  .resize(W, H, { fit: "cover", position: "attention" })
  .modulate({ brightness: 0.88, saturation: 1.12 })
  .sharpen({ sigma: 0.8 })
  .png()
  .toBuffer();

const grade = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="spotlight" cx="42%" cy="38%" r="58%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.18"/>
      <stop offset="45%" stop-color="#E50914" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="45%" r="72%">
      <stop offset="40%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.78"/>
    </radialGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#spotlight)"/>
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>
  <rect width="${W}" height="${H}" fill="url(#floor)"/>
</svg>`);

const layers = [
  { input: base, top: 0, left: 0 },
  { input: await sharp(grade).png().toBuffer(), top: 0, left: 0 },
];

// ---- Glass cards (knock out black plate, place with depth) ----
const cardsCut = await knockOutNearBlack(cardsPath, 22);
const cardsScaled = await sharp(cardsCut)
  .resize(720, null, { fit: "inside" })
  .png()
  .toBuffer();
const cardsMeta = await sharp(cardsScaled).metadata();

layers.push(
  {
    input: await softShadow(cardsMeta.width + 80, cardsMeta.height + 80, 24, 0.5),
    left: 40,
    top: 70,
  },
  { input: cardsScaled, left: 72, top: 96 },
);

// ---- Phone mockup ----
const phoneCut = await knockOutNearBlack(phonePath, 18);
const phoneScaled = await sharp(phoneCut)
  .resize(520, null, { fit: "inside" })
  .png()
  .toBuffer();
const phoneMeta = await sharp(phoneScaled).metadata();
const phoneLeft = W - (phoneMeta.width || 520) - 70;
const phoneTop = H - (phoneMeta.height || 900) - 40;

layers.push(
  {
    input: await softShadow(
      (phoneMeta.width || 520) + 120,
      (phoneMeta.height || 900) + 100,
      32,
      0.65,
    ),
    left: phoneLeft - 40,
    top: phoneTop + 40,
  },
  { input: phoneScaled, left: phoneLeft, top: phoneTop },
);

// ---- Official logo (mark only — no fabricated wordmark) ----
if (fs.existsSync(logoPath)) {
  const brand = await sharp(logoPath)
    .resize(128, 128, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const glow = Buffer.from(`<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#E50914" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="90" cy="90" r="90" fill="url(#g)"/>
  </svg>`);
  layers.push(
    { input: await sharp(glow).png().toBuffer(), left: W - 210, top: 48 },
    { input: brand, left: W - 184, top: 74 },
  );
}

// ---- Provider orbs (not rectangular chips) ----
const orbSlots = [
  { x: 120, y: 1180 },
  { x: 250, y: 1280 },
  { x: 980, y: 220 },
  { x: 1120, y: 320 },
];

for (let i = 0; i < providers.length; i++) {
  if (!fs.existsSync(providers[i])) continue;
  const orb = await providerOrb(providers[i], i < 2 ? 100 : 88);
  layers.push({ input: orb, left: orbSlots[i].x, top: orbSlots[i].y });
}

// Subtle film grain for commercial finish
const grainSvg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.045 0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)"/>
</svg>`);
layers.push({ input: await sharp(grainSvg).png().toBuffer(), top: 0, left: 0 });

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: { r: 8, g: 8, b: 8 },
  },
})
  .composite(layers)
  .webp({ quality: 90 })
  .toFile(outPath);

// Local PNG preview for QA
await sharp(outPath)
  .png()
  .toFile(path.join(ROOT, "assets/hero-final-preview.png"));

console.log("wrote", outPath);
