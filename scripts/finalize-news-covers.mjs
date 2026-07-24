/**
 * Optimize unique news covers → 1600×900 WebP + official TPOWER logo.
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
const OUT = path.join(ROOT, "public/images/news");

const covers = [
  ["news-platform-update.png", "tpower-platform-performance-update.webp"],
  ["news-live-casino.png", "tpower-live-casino-tables.webp"],
  ["news-vip-hosts.png", "tpower-vip-host-coverage.webp"],
  ["news-payments-duitnow.png", "tpower-duitnow-ewallet-tips.webp"],
];

fs.mkdirSync(OUT, { recursive: true });

const grade = Buffer.from(`<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="v" cx="50%" cy="45%" r="75%">
      <stop offset="62%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.32"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#v)"/>
</svg>`);
const gradeBuf = await sharp(grade).png().toBuffer();

for (const [srcName, destName] of covers) {
  const src = [
    path.join(ASSETS, srcName),
    path.join(ROOT, "assets", srcName),
  ].find((p) => fs.existsSync(p));
  if (!src) throw new Error(`Missing ${srcName}`);

  const graded = await sharp(src)
    .resize(1600, 900, { fit: "cover", position: "centre" })
    .composite([{ input: gradeBuf, top: 0, left: 0 }])
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

for (const old of [
  "news-platform.webp",
  "news-live.webp",
  "news-vip.webp",
  "news-payments.webp",
]) {
  const p = path.join(ROOT, "public/images", old);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("removed", old);
  }
}
