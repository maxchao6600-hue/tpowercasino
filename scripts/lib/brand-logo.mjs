/**
 * Shared official TPOWER logo compositor for marketing visuals.
 * Asset: public/logo/tpower-logo.png — never regenerate or redesign.
 *
 * Global Brand Safe Area: ~5% of width AND height on every edge is protected.
 * The logo is placed just inside that safe area (never in the edge zone).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
export const OFFICIAL_LOGO_PATH = path.join(ROOT, "public/logo/tpower-logo.png");

/** Must stay in sync with src/config/brand-safe-area.ts */
export const BRAND_SAFE_RATIO = 0.05;

export function assertOfficialLogoExists() {
  if (!fs.existsSync(OFFICIAL_LOGO_PATH)) {
    throw new Error(`Official TPOWER logo missing: ${OFFICIAL_LOGO_PATH}`);
  }
}

/**
 * @param {number} width
 * @param {number} height
 * @param {number} [ratio]
 */
export function brandSafeInsets(width, height, ratio = BRAND_SAFE_RATIO) {
  return {
    left: Math.max(1, Math.round(width * ratio)),
    top: Math.max(1, Math.round(height * ratio)),
    right: Math.max(1, Math.round(width * ratio)),
    bottom: Math.max(1, Math.round(height * ratio)),
  };
}

/**
 * Logo sits at the top-left of the *content* box (inside the 5% safe padding).
 * @param {number} width
 * @param {number} height
 */
export function logoLayoutForSize(width, height) {
  const inset = brandSafeInsets(width, height);

  // Logo scale relative to content width, not full canvas
  const contentWidth = Math.max(1, width - inset.left - inset.right);
  let logoWidth = Math.round(contentWidth * 0.06);
  logoWidth = Math.max(40, Math.min(96, logoWidth));

  const maxLogo = Math.max(
    32,
    contentWidth - 8,
    width - inset.left - inset.right - 8,
  );
  logoWidth = Math.min(logoWidth, maxLogo);

  return {
    edgeX: inset.left,
    edgeY: inset.top,
    edge: inset.left,
    logoWidth,
    inset,
  };
}

/**
 * @param {number} logoWidth
 */
export async function prepareOfficialLogo(logoWidth) {
  assertOfficialLogoExists();
  return sharp(OFFICIAL_LOGO_PATH)
    .resize(logoWidth, null, {
      fit: "inside",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();
}

/**
 * Cover a previous top-left brand plate so restamping does not stack logos.
 * @param {Buffer} inputBuffer
 * @param {number} width
 * @param {number} height
 */
export async function coverPreviousBrandCorner(inputBuffer, width, height) {
  const inset = brandSafeInsets(width, height);
  const cover = Math.min(
    width,
    height,
    Math.max(inset.left + 140, Math.round(width * 0.2)),
  );
  const sampleX = Math.min(width - 1, cover + 8);
  const sampleY = Math.min(height - 1, cover + 8);

  const sample = await sharp(inputBuffer)
    .extract({
      left: sampleX,
      top: sampleY,
      width: 1,
      height: 1,
    })
    .raw()
    .toBuffer();

  const r = sample[0] ?? 12;
  const g = sample[1] ?? 12;
  const b = sample[2] ?? 12;

  const patch = await sharp({
    create: {
      width: cover,
      height: cover,
      channels: 3,
      background: { r, g, b },
    },
  })
    .png()
    .toBuffer();

  return sharp(inputBuffer)
    .composite([{ input: patch, left: 0, top: 0 }])
    .toBuffer();
}

/**
 * Composite the official logo at top-left inside the Brand Safe Area.
 * @param {string|Buffer} input
 * @param {{ output?: string, quality?: number, format?: string, restamp?: boolean }} [options]
 */
export async function stampOfficialLogo(input, options = {}) {
  let inputBuffer = Buffer.isBuffer(input) ? input : fs.readFileSync(input);
  let image = sharp(inputBuffer);
  let meta = await image.metadata();
  let width = meta.width ?? 0;
  let height = meta.height ?? 0;
  if (!width || !height) {
    throw new Error("Cannot stamp logo: image has no dimensions");
  }

  if (options.restamp) {
    inputBuffer = await coverPreviousBrandCorner(inputBuffer, width, height);
    image = sharp(inputBuffer);
    meta = await image.metadata();
    width = meta.width ?? width;
    height = meta.height ?? height;
  }

  const { logoWidth, inset } = logoLayoutForSize(width, height);
  const logoBuf = await prepareOfficialLogo(logoWidth);
  const logoMeta = await sharp(logoBuf).metadata();
  const pad = Math.max(8, Math.round(logoWidth * 0.14));
  const plateW = (logoMeta.width ?? logoWidth) + pad * 2;
  const plateH = (logoMeta.height ?? logoWidth) + pad * 2;

  // Everything starts at the Brand Safe Area boundary (≈5%) — never in the edge zone
  const plateLeft = inset.left;
  const plateTop = inset.top;
  const logoLeft = plateLeft + pad;
  const logoTop = plateTop + pad;

  const plate = await sharp({
    create: {
      width: plateW,
      height: plateH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0.4 },
    },
  })
    .png()
    .toBuffer();

  const format = options.format ?? meta.format ?? "webp";
  const quality = options.quality ?? 85;

  const pipeline = sharp(inputBuffer).composite([
    { input: plate, left: plateLeft, top: plateTop },
    { input: logoBuf, left: logoLeft, top: logoTop },
  ]);

  let buffer;
  if (format === "png") {
    buffer = await pipeline.png().toBuffer();
  } else if (format === "jpeg" || format === "jpg") {
    buffer = await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer();
  } else {
    buffer = await pipeline.webp({ quality }).toBuffer();
  }

  if (options.output) {
    await writeBufferAtomic(options.output, buffer);
  }

  return {
    width,
    height,
    edge: logoLeft,
    edgeX: logoLeft,
    edgeY: logoTop,
    logoWidth,
    inset,
    buffer,
  };
}

/** Write via OS temp + replace, with retries for OneDrive locks. */
export async function writeBufferAtomic(dest, buffer, attempts = 10) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const tmp = path.join(
    os.tmpdir(),
    `tpower-brand-${process.pid}-${Date.now()}-${path.basename(dest)}`,
  );
  let lastError;

  fs.writeFileSync(tmp, buffer);

  for (let i = 0; i < attempts; i++) {
    try {
      try {
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
      } catch {
        /* locked — wait and retry */
      }
      fs.copyFileSync(tmp, dest);
      try {
        fs.unlinkSync(tmp);
      } catch {
        /* ignore */
      }
      return;
    } catch (error) {
      lastError = error;
      await new Promise((r) => setTimeout(r, 400 * (i + 1)));
    }
  }

  try {
    fs.unlinkSync(tmp);
  } catch {
    /* ignore */
  }
  throw lastError;
}
