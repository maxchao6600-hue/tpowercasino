/**
 * Try to locate an official full TPOWER logo (wordmark included).
 * Falls back to cleaned official mark if none is found.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SITE = "https://www.tpower3.com";
const outFull = path.join(ROOT, "public/logo/tpower-logo.png");
const outMark = path.join(ROOT, "public/logo/tpower-mark.png");

async function download(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0", accept: "image/*,*/*" },
    redirect: "follow",
  });
  if (!res.ok) return null;
  const type = res.headers.get("content-type") || "";
  if (!type.includes("image") && !type.includes("octet-stream")) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 800) return null;
  return buf;
}

async function stripDarkPlate(buf) {
  const { data, info } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    if (a > 8 && max < 42 && chroma < 16) data[i + 3] = 0;
    if (a > 8 && max < 110 && chroma < 10) data[i + 3] = 0;
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

const candidates = [
  `${SITE}/static/img/icon/tpower.png`,
  `${SITE}/static/img/v_world/custom_icon.png`,
  `${SITE}/static/img/logo.png`,
  `${SITE}/static/img/logo.webp`,
  `${SITE}/static/img/tpower_logo.png`,
  `${SITE}/static/img/tpower-logo.png`,
  `${SITE}/static/img/brand/logo.png`,
  `${SITE}/static/img/brand/tpower.png`,
  `${SITE}/favicon.ico`,
];

let best = null;
for (const url of candidates) {
  try {
    const buf = await download(url);
    if (!buf) {
      console.log("skip", url);
      continue;
    }
    const meta = await sharp(buf).metadata();
    console.log("ok", url, meta.width, meta.height, meta.format, buf.length);
    // Prefer wider logos that may include wordmark
    const score = (meta.width || 0) * (meta.height || 0) + (meta.width > meta.height * 1.4 ? 500000 : 0);
    if (!best || score > best.score) {
      best = { url, buf, meta, score };
    }
  } catch (e) {
    console.log("err", url, e.message);
  }
}

if (!best) throw new Error("No official logo found");

const cleaned = await stripDarkPlate(best.buf);
await sharp(cleaned).png().toFile(outMark);

// If source is already wide (full logo), use it as nav logo.
// Otherwise keep mark as the only official brand asset for nav.
const isWide =
  best.meta.width &&
  best.meta.height &&
  best.meta.width / best.meta.height >= 1.6;

if (isWide) {
  await sharp(cleaned)
    .resize({ height: 192, fit: "inside", withoutEnlargement: false })
    .png()
    .toFile(outFull);
  console.log("wrote FULL logo from", best.url);
} else {
  // Official asset is icon-only. For nav, use cleaned mark as the logo file
  // (do not fabricate a wordmark with fonts).
  await sharp(cleaned)
    .resize(192, 192, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outFull);
  console.log(
    "official source is mark-only; wrote transparent mark to tpower-logo.png from",
    best.url,
  );
}

fs.writeFileSync(
  path.join(ROOT, "public/logo/SOURCE.txt"),
  `${best.url}\n${best.meta.width}x${best.meta.height}\n`,
);
