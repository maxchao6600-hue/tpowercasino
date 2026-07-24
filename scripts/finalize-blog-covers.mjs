/**
 * Optimize blog cover artworks → 1600×900 WebP + official TPOWER logo.
 * Overwrites existing public/blog/*.webp paths used by blogPosts.
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
const OUT = path.join(ROOT, "public/blog");
const W = 1600;
const H = 900;

const frames = [
  ["blog-cover-login.png", "tpower-login-guide.webp"],
  ["blog-cover-register.png", "how-to-register-tpower.webp"],
  ["blog-cover-download.png", "how-to-download-tpower.webp"],
  ["blog-cover-mobile-app.png", "tpower-mobile-app.webp"],
  ["blog-cover-deposit.png", "how-to-deposit-tpower.webp"],
  ["blog-cover-withdraw.png", "how-to-withdraw-tpower.webp"],
  ["blog-cover-responsible.png", "responsible-play.webp"],
  ["blog-cover-payments.png", "payments.webp"],
  ["blog-cover-providers.png", "providers.webp"],
  ["blog-cover-vip.png", "vip.webp"],
];

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });

const grade = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="v" cx="50%" cy="40%" r="78%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.4"/>
    </radialGradient>
    <radialGradient id="r" cx="70%" cy="18%" r="50%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#E50914" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#r)"/>
  <rect width="${W}" height="${H}" fill="url(#v)"/>
</svg>`);
const gradePng = await sharp(grade).png().toBuffer();

for (const [srcName, destName] of frames) {
  const src = [path.join(ASSETS, srcName), path.join(ROOT, "assets", srcName)].find(
    (p) => fs.existsSync(p),
  );
  if (!src) {
    console.warn("skip missing", srcName);
    continue;
  }
  const resized = await sharp(src)
    .resize(W, H, { fit: "cover", position: "centre" })
    .webp({ quality: 90 })
    .toBuffer();
  const graded = await sharp(resized)
    .composite([{ input: gradePng, top: 0, left: 0 }])
    .webp({ quality: 90 })
    .toBuffer();
  const dest = path.join(OUT, destName);
  await stampOfficialLogo(graded, { output: dest, format: "webp", quality: 90 });
  fs.copyFileSync(src, path.join(ROOT, "assets", srcName));
  const meta = await sharp(dest).metadata();
  console.log("wrote", destName, `${meta.width}x${meta.height}`, fs.statSync(dest).size);
}
