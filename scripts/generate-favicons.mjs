/**
 * Generate official TPOWER favicon / PWA icon set from the brand mark.
 * Source: public/logo/tpower-mark.png (official mark-only asset).
 *
 * Outputs opaque icons (solid #090909 plate) so the white mark stays
 * visible on light browser chrome tabs / bookmarks / PWA install.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "public/logo/tpower-mark.png");
const outDir = path.join(root, "public/icons");
const BG = { r: 9, g: 9, b: 9, alpha: 1 };

fs.mkdirSync(outDir, { recursive: true });

async function renderPng(size) {
  // Letterbox the official mark on a solid dark plate — avoids transparent
  // favicons that look blank/placeholder on light Chrome tab strips.
  const inset = Math.max(1, Math.round(size * 0.06));
  const inner = Math.max(1, size - inset * 2);
  const mark = await sharp(source)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: mark, left: inset, top: inset }])
    .png()
    .toBuffer();
}

async function writePng(size, filename) {
  const buf = await renderPng(size);
  const file = path.join(outDir, filename);
  fs.writeFileSync(file, buf);
  console.log(`wrote ${filename} (${size}x${size})`);
  return buf;
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

  const png16 = await writePng(16, "favicon-16x16.png");
  const png32 = await writePng(32, "favicon-32x32.png");
  await writePng(32, "favicon-32.png"); // legacy path
  const png48 = await writePng(48, "favicon-48x48.png");
  await writePng(180, "apple-touch-icon.png");
  await writePng(192, "android-chrome-192x192.png");
  await writePng(512, "android-chrome-512x512.png");

  const ico = buildIco([png16, png32, png48]);
  const icoPath = path.join(outDir, "favicon.ico");
  fs.writeFileSync(icoPath, ico);
  // Browsers still request /favicon.ico by default
  fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);
  console.log("wrote favicon.ico (+ public/favicon.ico)");

  // Self-contained SVG (no external href — those fail as favicons)
  const svgPng = await renderPng(64);
  const b64 = svgPng.toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TPOWER">
  <image href="data:image/png;base64,${b64}" width="64" height="64" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
  fs.writeFileSync(path.join(outDir, "favicon.svg"), svg);
  console.log("wrote favicon.svg (embedded PNG)");

  // Remove legacy placeholder SVGs that were a plain red T rectangle
  for (const stale of [
    "public/icons/apple-touch-icon.svg",
    "public/logo/tpower-mark.svg",
  ]) {
    const abs = path.join(root, stale);
    if (fs.existsSync(abs)) {
      fs.unlinkSync(abs);
      console.log(`removed ${stale}`);
    }
  }

  // Next.js App Router file conventions (cache-busted by Next hash)
  const appDir = path.join(root, "src/app");
  fs.mkdirSync(appDir, { recursive: true });
  fs.writeFileSync(path.join(appDir, "icon.png"), png32);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), await renderPng(180));
  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);
  console.log("wrote src/app/{icon.png,apple-icon.png,favicon.ico}");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
