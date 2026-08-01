/**
 * Generate official TPOWER favicon / PWA icon set from the brand mark.
 * Source: public/logo/tpower-mark.png (official mark-only asset).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "public/logo/tpower-mark.png");
const outDir = path.join(root, "public/icons");

fs.mkdirSync(outDir, { recursive: true });

async function png(size, filename) {
  const file = path.join(outDir, filename);
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(file);
  console.log(`wrote ${filename} (${size}x${size})`);
  return fs.readFileSync(file);
}

/** Build a multi-size .ico containing embedded PNG images. */
function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + count * 16;
  for (const pngBuf of pngBuffers) {
    const width = pngBuf.readUInt32BE(16);
    const height = pngBuf.readUInt32BE(20);
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(pngBuf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += pngBuf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function main() {
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source logo: ${source}`);
  }

  const png16 = await png(16, "favicon-16x16.png");
  const png32 = await png(32, "favicon-32x32.png");
  await png(32, "favicon-32.png"); // legacy path still referenced
  await png(180, "apple-touch-icon.png");
  await png(192, "android-chrome-192x192.png");
  await png(512, "android-chrome-512x512.png");

  const ico = buildIco([png16, png32]);
  fs.writeFileSync(path.join(outDir, "favicon.ico"), ico);
  console.log("wrote favicon.ico");

  // Keep a simple SVG mark for browsers that prefer SVG
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TPOWER">
  <image href="/logo/tpower-mark.png" width="64" height="64" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(outDir, "favicon.svg"), svg);
  console.log("wrote favicon.svg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
