/**
 * Optimize Install Timeline artworks → 1600×1280 WebP + official TPOWER logo.
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
const OUT = path.join(ROOT, "public/images/download/install");
const W = 1600;
const H = 1280;

const frames = [
  ["install-step-01-download-apk.png", "step-01-download-apk.webp"],
  ["install-step-02-allow-unknown.png", "step-02-allow-unknown.webp"],
  ["install-step-03-install.png", "step-03-install.webp"],
  ["install-step-04-login.png", "step-04-login.webp"],
  ["install-step-05-welcome-bonus.png", "step-05-welcome-bonus.webp"],
];

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(ROOT, "assets"), { recursive: true });

const grade = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="v" cx="50%" cy="42%" r="78%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0.38"/>
    </radialGradient>
    <radialGradient id="r" cx="72%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#E50914" stop-opacity="0.12"/>
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
  if (!src) throw new Error(`Missing ${srcName}`);

  const resized = await sharp(src)
    .resize(W, H, { fit: "cover", position: "centre" })
    .webp({ quality: 90 })
    .toBuffer();

  const graded = await sharp(resized)
    .composite([{ input: gradePng, top: 0, left: 0 }])
    .webp({ quality: 90 })
    .toBuffer();

  const dest = path.join(OUT, destName);
  await stampOfficialLogo(graded, {
    output: dest,
    format: "webp",
    quality: 90,
  });

  fs.copyFileSync(src, path.join(ROOT, "assets", srcName));

  const meta = await sharp(dest).metadata();
  console.log(
    "wrote",
    destName,
    `${meta.width}x${meta.height}`,
    fs.statSync(dest).size,
  );
}
