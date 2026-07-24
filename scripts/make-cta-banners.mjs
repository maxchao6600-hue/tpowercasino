/**
 * Compose premium CTA artworks from official TPOWER campaign assets.
 * Output: public/images/cta/*.webp with official logo stamped top-left.
 *
 * Run: node scripts/make-cta-banners.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { stampOfficialLogo } from "./lib/brand-logo.mjs";

const ROOT = process.cwd();
const ASSETS = [
  path.join(
    process.env.USERPROFILE || "",
    ".cursor",
    "projects",
    "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
    "assets",
  ),
  path.join(ROOT, "assets"),
].find((p) => fs.existsSync(p));

const OUT = path.join(ROOT, "public/images/cta");
const W = 1400;
const H = 1050;

if (!ASSETS) throw new Error("Campaign assets folder missing");
fs.mkdirSync(OUT, { recursive: true });

function asset(...names) {
  for (const name of names) {
    const p = path.join(ASSETS, name);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`Missing asset: ${names.join(" | ")}`);
}

async function gradeOverlay() {
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="red" cx="70%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="gold" cx="30%" cy="70%" r="45%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="50%" cy="45%" r="78%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.45"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#red)"/>
  <rect width="${W}" height="${H}" fill="url(#gold)"/>
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
</svg>`);
  return sharp(svg).png().toBuffer();
}

async function makeSlotsPhone(width, height) {
  const slotPaths = [
    "public/images/games/uuslot/777-bonanza.webp",
    "public/images/games/spadegaming/888.webp",
    "public/images/games/megah5/5-dragon.webp",
    "public/images/games/epicwin/5-wukong.webp",
    "public/images/games/lfc888/3-hot-chillies.webp",
    "public/images/games/ace333/5koi.webp",
  ]
    .map((p) => path.join(ROOT, p))
    .filter((p) => fs.existsSync(p));

  const bezel = 14;
  const radius = Math.round(width * 0.12);
  const innerW = width - bezel * 2;
  const innerH = height - bezel * 2;
  const cellW = Math.floor((innerW - 16) / 2);
  const cellH = Math.floor((innerH - 24) / 3);

  const tiles = [];
  for (let i = 0; i < 6; i += 1) {
    const src = slotPaths[i % Math.max(1, slotPaths.length)];
    if (!src) continue;
    const col = i % 2;
    const row = Math.floor(i / 2);
    const tile = await sharp(src)
      .resize(cellW, cellH, { fit: "cover", position: "centre" })
      .png()
      .toBuffer();
    tiles.push({
      input: tile,
      left: bezel + 8 + col * (cellW + 8),
      top: bezel + 12 + row * (cellH + 6),
    });
  }

  const chrome = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2a2a2a"/>
        <stop offset="50%" stop-color="#111"/>
        <stop offset="100%" stop-color="#3a1518"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="url(#frame)"/>
    <rect x="${bezel}" y="${bezel}" width="${innerW}" height="${innerH}" rx="${Math.round(radius * 0.7)}" ry="${Math.round(radius * 0.7)}" fill="#0a0a0a"/>
    <rect x="${width / 2 - 28}" y="6" width="56" height="6" rx="3" fill="#1a1a1a"/>
  </svg>`);

  const mask = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#fff"/>
  </svg>`);

  return sharp(await sharp(chrome).png().toBuffer())
    .composite(tiles)
    .composite([{ input: await sharp(mask).png().toBuffer(), blend: "dest-in" }])
    .png()
    .toBuffer();
}

/** CTA 1 — full lobby: live casino + mobile slots focus */
async function makeLobbyBanner() {
  const live = asset("news-live-casino.png");
  const cards = asset("hero-glass-cards.png");

  const base = await sharp(live)
    .resize(W, H, { fit: "cover", position: "centre" })
    .modulate({ brightness: 0.92, saturation: 1.08 })
    .toBuffer();

  // Soft secondary layer from glass-cards for gold/card accents (right side)
  const cardsLayer = await sharp(cards)
    .resize(Math.round(W * 0.55), H, { fit: "cover", position: "right" })
    .modulate({ brightness: 0.85, saturation: 1.05 })
    .ensureAlpha()
    .toBuffer();

  const cardsFade = Buffer.from(`<svg width="${Math.round(W * 0.55)}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="f" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
        <stop offset="35%" stop-color="#fff" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0.55"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#f)"/>
  </svg>`);

  const cardsMasked = await sharp(cardsLayer)
    .composite([
      {
        input: await sharp(cardsFade).png().toBuffer(),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  const phoneW = 340;
  const phoneH = 520;
  const phoneBuf = await makeSlotsPhone(phoneW, phoneH);

  const phoneGlow = Buffer.from(`<svg width="${phoneW + 80}" height="${phoneH + 80}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#E50914" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="${(phoneW + 80) / 2}" cy="${(phoneH + 80) / 2}" rx="${(phoneW + 80) / 2}" ry="${(phoneH + 80) / 2}" fill="url(#g)"/>
  </svg>`);

  const composed = await sharp(base)
    .composite([
      { input: cardsMasked, left: Math.round(W * 0.45), top: 0 },
      {
        input: await sharp(phoneGlow).png().toBuffer(),
        left: W - phoneW - 70,
        top: Math.round((H - phoneH) / 2) - 40,
      },
      {
        input: phoneBuf,
        left: W - phoneW - 56,
        top: Math.round((H - phoneH) / 2) - 12,
      },
      { input: await gradeOverlay(), left: 0, top: 0 },
    ])
    .webp({ quality: 90 })
    .toBuffer();

  const dest = path.join(OUT, "tpower-lobby-cta.webp");
  await stampOfficialLogo(composed, {
    output: dest,
    format: "webp",
    quality: 90,
  });
  console.log("wrote", dest);
}

/** CTA 2 — join / app / welcome: phone + gift / welcome bonus (distinct from lobby) */
async function makeJoinBanner() {
  const promoCta = asset("tpower-promotions-cta.webp", "promo-welcome.png");
  const welcome = asset(
    "tpower-promotions-hero.webp",
    "promo-welcome.png",
  );

  // Product side of promotions CTA (app + gift) — avoid the text/CTA wall
  const promoMeta = await sharp(promoCta).metadata();
  const cropW = Math.round((promoMeta.width || 1536) * 0.56);
  const product = await sharp(promoCta)
    .extract({
      left: 0,
      top: 0,
      width: cropW,
      height: promoMeta.height || 1024,
    })
    .resize(W, H, { fit: "cover", position: "left" })
    .modulate({ brightness: 0.95, saturation: 1.05 })
    .toBuffer();

  // Welcome-bonus gift accent softly blended on the right for register theme
  const giftLayer = await sharp(welcome)
    .resize(Math.round(W * 0.5), H, { fit: "cover", position: "centre" })
    .modulate({ brightness: 0.9, saturation: 1.08 })
    .ensureAlpha()
    .toBuffer();

  const giftFade = Buffer.from(`<svg width="${Math.round(W * 0.5)}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="f" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
        <stop offset="40%" stop-color="#fff" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0.65"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#f)"/>
  </svg>`);

  const giftMasked = await sharp(giftLayer)
    .composite([
      { input: await sharp(giftFade).png().toBuffer(), blend: "dest-in" },
    ])
    .png()
    .toBuffer();

  const composed = await sharp(product)
    .composite([
      { input: giftMasked, left: Math.round(W * 0.5), top: 0 },
      { input: await gradeOverlay(), left: 0, top: 0 },
    ])
    .webp({ quality: 90 })
    .toBuffer();

  const dest = path.join(OUT, "tpower-join-cta.webp");
  await stampOfficialLogo(composed, {
    output: dest,
    format: "webp",
    quality: 90,
  });
  console.log("wrote", dest);
}

await makeLobbyBanner();
await makeJoinBanner();
console.log("CTA banners ready");
