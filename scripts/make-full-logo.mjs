/**
 * Build a clean transparent full TPOWER logo (mark + wordmark).
 * Strips near-black / grey plate backgrounds from the official mark.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const markPath = path.join(ROOT, "public/logo/tpower-mark.png");
const outPath = path.join(ROOT, "public/logo/tpower-logo.png");
const cleanMarkPath = path.join(ROOT, "public/logo/tpower-mark.png");

const HEIGHT = 192;
const MARK = 168;
const PAD_X = 4;
const GAP = 24;

async function stripDarkPlate(inputPath) {
  const { data, info } = await sharp(inputPath)
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

    // Remove near-black / grey plate pixels; keep red brand + white art.
    const isDarkPlate = a > 8 && max < 48 && chroma < 18;
    const isGreyPlate = a > 8 && max < 120 && chroma < 12 && max - min < 10;
    if (isDarkPlate || isGreyPlate) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();
}

const cleanedMark = await stripDarkPlate(markPath);
await sharp(cleanedMark).png().toFile(cleanMarkPath);

const markBuf = await sharp(cleanedMark)
  .resize(MARK, MARK, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const textSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="520" height="${HEIGHT}">
  <text
    x="0"
    y="${HEIGHT / 2}"
    dominant-baseline="central"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="92"
    font-weight="900"
    letter-spacing="4"
    fill="#FFFFFF"
  >TPOWER</text>
</svg>
`);

const textBuf = await sharp(textSvg).png().toBuffer();
const textMeta = await sharp(textBuf).metadata();
const textWidth = textMeta.width ?? 520;
const width = PAD_X + MARK + GAP + textWidth + PAD_X;

await sharp({
  create: {
    width,
    height: HEIGHT,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([
    {
      input: markBuf,
      left: PAD_X,
      top: Math.round((HEIGHT - MARK) / 2),
    },
    {
      input: textBuf,
      left: PAD_X + MARK + GAP,
      top: 0,
    },
  ])
  .png()
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log("wrote", outPath, `${meta.width}x${meta.height}`);
