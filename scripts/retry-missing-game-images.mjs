import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import CryptoJS from "crypto-js";

const ROOT = process.cwd();
const cataloguePath = path.join(ROOT, "src/data/games-catalogue.json");
const rawPath = path.join(ROOT, "src/data/games-catalogue.raw.json");
const catalogue = JSON.parse(fs.readFileSync(cataloguePath, "utf8"));
const raw = JSON.parse(fs.readFileSync(rawPath, "utf8"));
const bySource = new Map((raw.games || []).map((g) => [String(g.id), g]));

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function upgradeCandidates(url) {
  if (!url) return [];
  const list = [url];
  const u = String(url);
  if (/\/square\/\d+\//i.test(u)) {
    list.push(u.replace(/\/square\/\d+\//i, "/square/200/"));
    list.push(u.replace(/\/square\/\d+\//i, "/square/300/"));
  }
  if (/\.jpg(?:\?|$)/i.test(u)) list.push(u.replace(/\.jpg/i, ".png"));
  if (/\/thumbs\/mobile\//i.test(u)) {
    list.push(u.replace("/thumbs/mobile/", "/thumbs/"));
    list.push(u.replace("/thumbs/mobile/", "/thumbs/desktop/"));
  }
  return [...new Set(list)];
}

async function downloadBest(url) {
  let best = null;
  for (const candidate of upgradeCandidates(url)) {
    try {
      const res = await fetch(candidate, {
        headers: { "user-agent": UA, accept: "image/*" },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) continue;
      if (!best || buf.length > best.length) best = { buf, url: candidate, len: buf.length };
    } catch {}
  }
  return best;
}

const missing = catalogue.filter(
  (g) => !fs.existsSync(path.join(ROOT, "public", g.image.replace(/^\//, ""))),
);
console.log("missing", missing.length);

let fixed = 0;
for (const entry of missing) {
  const source = bySource.get(String(entry.sourceId));
  const url = entry.sourceImage || source?.image;
  if (!url) continue;
  const best = await downloadBest(url);
  if (!best) {
    console.warn("still fail", entry.slug, url);
    continue;
  }
  const dir = path.join(ROOT, "public/images/games", entry.providerFolder);
  fs.mkdirSync(dir, { recursive: true });
  // Game artwork must stay unbranded — never stamp TPOWER logo on thumbs.
  const outBuf = await sharp(best.buf).webp({ quality: 90 }).toBuffer();
  fs.writeFileSync(path.join(dir, `${entry.slug}.webp`), outBuf);
  entry.sourceImage = best.url;
  fixed += 1;
  console.log("fixed", entry.slug);
}

fs.writeFileSync(cataloguePath, `${JSON.stringify(catalogue, null, 2)}\n`);
console.log("fixed", fixed, "/", missing.length);
