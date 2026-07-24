/**
 * Generate branded wordmark PNGs (transparent) for providers without assets.
 * Run: node scripts/generate-provider-wordmarks.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "public/providers");

const MARKS = [
  { file: "cq9.png", label: "CQ9", color: "#F59E0B" },
  { file: "playtech.png", label: "PLAYTECH", color: "#38BDF8" },
  { file: "netent.png", label: "NETENT", color: "#A3E635" },
  { file: "live22.png", label: "LIVE22", color: "#F472B6" },
  { file: "wm-casino.png", label: "WM CASINO", color: "#FBBF24" },
  { file: "sa-gaming.png", label: "SA GAMING", color: "#FB7185" },
  { file: "asia-gaming.png", label: "ASIA GAMING", color: "#34D399" },
  { file: "kingmaker.png", label: "KINGMAKER", color: "#C084FC" },
  { file: "yggdrasil.png", label: "YGGDRASIL", color: "#60A5FA" },
];

fs.mkdirSync(OUT, { recursive: true });

for (const mark of MARKS) {
  const dest = path.join(OUT, mark.file);
  const fontSize = mark.label.length > 10 ? 32 : mark.label.length > 7 ? 40 : 52;
  const svg = Buffer.from(`<svg width="360" height="96" xmlns="http://www.w3.org/2000/svg">
  <text x="180" y="62" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="${fontSize}" font-weight="900" fill="${mark.color}" letter-spacing="1.5">${mark.label}</text>
</svg>`);
  await sharp(svg).png().toFile(dest);
  console.log("wrote", mark.file);
}
