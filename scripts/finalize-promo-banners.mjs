/**
 * Optimize generated promo banners → 1600px WebP + official TPOWER logo.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { stampOfficialLogo } from "./lib/brand-logo.mjs";

const ROOT = process.cwd();
const ASSETS = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
  "assets",
);
const OUT = path.join(ROOT, "public/images/promotions");

const banners = [
  ["promo-welcome.png", "tpower-welcome-package.webp"],
  ["promo-reload.png", "tpower-weekly-reload.webp"],
  ["promo-cashback.png", "tpower-cashback.webp"],
  ["promo-vip.png", "tpower-vip-rewards.webp"],
  ["promo-seasonal.png", "tpower-merdeka-seasonal.webp"],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [srcName, destName] of banners) {
  const src = [
    path.join(ASSETS, srcName),
    path.join(ROOT, "assets", srcName),
  ].find((p) => fs.existsSync(p));
  if (!src) throw new Error(`Missing ${srcName}`);

  const resized = await sharp(src)
    .resize(1600, 900, {
      fit: "cover",
      position: "centre",
    })
    .webp({ quality: 88 })
    .toBuffer();

  // Soft vignette for consistent premium grade
  const grade = Buffer.from(`<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="v" cx="50%" cy="45%" r="75%">
        <stop offset="60%" stop-color="#000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#050505" stop-opacity="0.35"/>
      </radialGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#v)"/>
  </svg>`);

  const graded = await sharp(resized)
    .composite([{ input: await sharp(grade).png().toBuffer(), top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toBuffer();

  const dest = path.join(OUT, destName);
  await stampOfficialLogo(graded, {
    output: dest,
    format: "webp",
    quality: 88,
  });

  fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });
  fs.copyFileSync(src, path.join(ROOT, "assets", srcName));

  const meta = await sharp(dest).metadata();
  console.log("wrote", destName, `${meta.width}x${meta.height}`, fs.statSync(dest).size);
}

for (const old of ["welcome.webp", "reload.webp", "cashback.webp", "vip.webp", "seasonal.webp"]) {
  const p = path.join(OUT, old);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("removed", old);
  }
}
