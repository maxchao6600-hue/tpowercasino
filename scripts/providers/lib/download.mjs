import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ORIGIN = process.env.TPOWER_ORIGIN || "https://www.tpower3.com";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export async function downloadImage(url) {
  const candidates = [url];
  if (/\/square\/\d+\//i.test(url)) {
    candidates.push(url.replace(/\/square\/\d+\//i, "/square/200/"));
    candidates.push(url.replace(/\/square\/\d+\//i, "/square/300/"));
  }
  let best = null;
  for (const candidate of [...new Set(candidates)]) {
    try {
      const res = await fetch(candidate, {
        headers: {
          "user-agent": UA,
          referer: `${ORIGIN}/`,
          accept: "image/*",
        },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 256) continue;
      await sharp(buf).metadata();
      if (!best || buf.length > best.buf.length) best = { buf, url: candidate };
    } catch {
      // try next
    }
  }
  return best;
}

export async function writeWebp(abs, buf, maxEdge = 640) {
  const out = await sharp(buf)
    .rotate()
    .resize({
      width: maxEdge,
      height: maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toBuffer();
  writeAtomic(abs, out);
  return out;
}

export function writeAtomic(abs, data) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const tmp = `${abs}.${process.pid}.${Date.now()}.tmp`;
  for (let attempt = 0; attempt < 10; attempt++) {
    try {
      fs.writeFileSync(tmp, data);
      try {
        fs.renameSync(tmp, abs);
      } catch {
        try {
          fs.chmodSync(abs, 0o666);
        } catch {
          // new file
        }
        try {
          fs.unlinkSync(abs);
        } catch {
          // ignore
        }
        fs.copyFileSync(tmp, abs);
        try {
          fs.unlinkSync(tmp);
        } catch {
          // ignore
        }
      }
      return;
    } catch {
      if (attempt === 9) throw new Error(`writeAtomic failed: ${abs}`);
    }
  }
}
