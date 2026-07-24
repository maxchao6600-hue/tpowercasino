/**
 * Compose an original cinematic sports hero banner.
 * Base art is AI-generated (original). Brand/provider overlays are local assets.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const W = 1400;
const H = 1400;

const baseCandidates = [
  path.join(
    process.env.USERPROFILE || "",
    ".cursor",
    "projects",
    "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
    "assets",
    "hero-sports-base.png",
  ),
  path.join(ROOT, "assets", "hero-sports-base.png"),
  path.join(ROOT, "public", "images", "hero-sports-base.png"),
];

const basePath = baseCandidates.find((p) => fs.existsSync(p));
if (!basePath) throw new Error("hero-sports-base.png not found");

const markPath = path.join(ROOT, "public/logo/tpower-mark.png");
const logoPath = path.join(ROOT, "public/logo/tpower-logo.png");
const outPath = path.join(ROOT, "public/images/hero.webp");

const providerFiles = [
  "sbo.png",
  "pragmatic-play.png",
  "evolution.png",
  "pg-soft.png",
  "jili.png",
].map((f) => path.join(ROOT, "public/providers", f));

async function roundedRectPng(width, height, radius, fill, stroke, strokeWidth = 1) {
  const svg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${strokeWidth / 2}" y="${strokeWidth / 2}" width="${width - strokeWidth}" height="${height - strokeWidth}" rx="${radius}" ry="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>
  </svg>`);
  return sharp(svg).png().toBuffer();
}

async function glassCard({ width, height, radius = 22, title, value, subtitle }) {
  const bg = await roundedRectPng(
    width,
    height,
    radius,
    "rgba(17,17,17,0.82)",
    "rgba(255,255,255,0.16)",
    1.5,
  );

  const labelSvg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <text x="22" y="34" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#B3B3B3" letter-spacing="1.6">${title}</text>
    <text x="22" y="76" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="800" fill="#FFFFFF">${value}</text>
    <text x="22" y="${height - 20}" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="600" fill="#E50914">${subtitle}</text>
  </svg>`);

  return sharp(bg)
    .composite([{ input: await sharp(labelSvg).png().toBuffer(), top: 0, left: 0 }])
    .png()
    .toBuffer();
}

async function providerChip(file, width = 156, height = 58) {
  const bg = await roundedRectPng(
    width,
    height,
    16,
    "rgba(16,16,16,0.90)",
    "rgba(255,255,255,0.14)",
    1.25,
  );
  const logo = await sharp(file)
    .resize(Math.round(width * 0.7), Math.round(height * 0.5), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .modulate({ brightness: 1.4 })
    .png()
    .toBuffer();

  return sharp(bg)
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

async function phoneMockup() {
  const phoneW = 268;
  const phoneH = 540;
  const screenW = phoneW - 28;
  const screenH = phoneH - 28;

  const frame = await roundedRectPng(
    phoneW,
    phoneH,
    40,
    "rgba(10,10,10,0.98)",
    "rgba(255,255,255,0.2)",
    2,
  );

  // Original premium sports-app UI screen (not copied from any site)
  const screenSvg = Buffer.from(`<svg width="${screenW}" height="${screenH}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#141414"/>
        <stop offset="100%" stop-color="#0B0B0B"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E50914"/>
        <stop offset="100%" stop-color="#7A0A10"/>
      </linearGradient>
    </defs>
    <rect width="${screenW}" height="${screenH}" fill="url(#bg)"/>
    <rect x="18" y="48" width="${screenW - 36}" height="92" rx="18" fill="url(#accent)"/>
    <text x="34" y="84" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" fill-opacity="0.85">LIVE MATCH</text>
    <text x="34" y="118" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="#FFFFFF">2.5 · Over</text>
    <rect x="18" y="160" width="${screenW - 36}" height="64" rx="16" fill="#161616" stroke="#252525"/>
    <text x="34" y="188" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="600" fill="#B3B3B3">Home Win</text>
    <text x="34" y="210" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">1.68</text>
    <rect x="18" y="236" width="${screenW - 36}" height="64" rx="16" fill="#161616" stroke="#252525"/>
    <text x="34" y="264" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="600" fill="#B3B3B3">Draw</text>
    <text x="34" y="286" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">3.40</text>
    <rect x="18" y="312" width="${screenW - 36}" height="64" rx="16" fill="#161616" stroke="#252525"/>
    <text x="34" y="340" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="600" fill="#B3B3B3">Away Win</text>
    <text x="34" y="362" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">4.20</text>
    <rect x="18" y="${screenH - 78}" width="${screenW - 36}" height="48" rx="14" fill="#E50914"/>
    <text x="${screenW / 2}" y="${screenH - 48}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">Open App</text>
  </svg>`);

  const screen = await sharp(screenSvg).png().toBuffer();
  const notch = await roundedRectPng(88, 16, 9, "#111111", "rgba(0,0,0,0)", 0);

  return sharp(frame)
    .composite([
      { input: screen, top: 14, left: 14 },
      { input: notch, top: 26, left: Math.round((phoneW - 88) / 2) },
    ])
    .png()
    .toBuffer();
}

const base = await sharp(basePath)
  .resize(W, H, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.9, saturation: 1.08 })
  .png()
  .toBuffer();

const atmosphere = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="red" cx="30%" cy="40%" r="52%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.24"/>
      <stop offset="60%" stop-color="#E50914" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="48%" r="70%">
      <stop offset="50%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0.78"/>
    </radialGradient>
    <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="45%" stop-color="#090909" stop-opacity="0"/>
      <stop offset="100%" stop-color="#090909" stop-opacity="0.6"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#red)"/>
  <rect width="${W}" height="${H}" fill="url(#vignette)"/>
  <rect width="${W}" height="${H}" fill="url(#bottom)"/>
</svg>`);

const composites = [
  { input: base, top: 0, left: 0 },
  { input: await sharp(atmosphere).png().toBuffer(), top: 0, left: 0 },
];

// Glass cards — sparse, premium
composites.push({
  input: await glassCard({
    width: 228,
    height: 112,
    title: "LIVE ODDS",
    value: "1.92",
    subtitle: "In Play · Football",
  }),
  left: 64,
  top: 120,
});

composites.push({
  input: await glassCard({
    width: 210,
    height: 112,
    title: "SUPPORT",
    value: "24/7",
    subtitle: "Trusted · Secure",
  }),
  left: 64,
  top: 260,
});

// Brand mark with soft glow (top-right)
const mark = await sharp(markPath)
  .resize(132, 132, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const markGlow = Buffer.from(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="100" cy="100" r="100" fill="url(#g)"/>
</svg>`);

composites.push(
  { input: await sharp(markGlow).png().toBuffer(), left: 1120, top: 56 },
  { input: mark, left: 1154, top: 90 },
);

// Full logo glass chip
if (fs.existsSync(logoPath)) {
  const logoBar = await roundedRectPng(
    286,
    68,
    18,
    "rgba(9,9,9,0.78)",
    "rgba(255,255,255,0.14)",
    1.25,
  );
  const fullLogo = await sharp(logoPath)
    .resize(240, 48, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  composites.push({
    input: await sharp(logoBar)
      .composite([{ input: fullLogo, gravity: "centre" }])
      .png()
      .toBuffer(),
    left: 64,
    top: 1208,
  });
}

// Floating providers — fewer, breathable placement
const slots = [
  { x: 1040, y: 250 },
  { x: 1180, y: 360 },
  { x: 1040, y: 430 },
  { x: 64, y: 1060 },
  { x: 240, y: 1120 },
];

for (let i = 0; i < providerFiles.length; i++) {
  const file = providerFiles[i];
  if (!fs.existsSync(file)) continue;
  composites.push({
    input: await providerChip(file),
    left: slots[i].x,
    top: slots[i].y,
  });
}

// Phone mockup
const phone = await phoneMockup();
const phoneShadow = Buffer.from(`<svg width="320" height="580" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="s" cx="50%" cy="78%" r="45%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="160" cy="520" rx="140" ry="34" fill="url(#s)"/>
</svg>`);

composites.push(
  { input: await sharp(phoneShadow).png().toBuffer(), left: 1000, top: 560 },
  { input: phone, left: 1035, top: 620 },
);

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: { r: 9, g: 9, b: 9 },
  },
})
  .composite(composites)
  .webp({ quality: 87 })
  .toFile(outPath);

console.log("wrote", outPath);
