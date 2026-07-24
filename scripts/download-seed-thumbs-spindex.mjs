/**
 * Download missing/generated seed thumbs from Spindex public slot thumbnails.
 * Stores under public/images/games/{folder}/{slug}.webp (no hotlink at runtime).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const FOLDERS = {
  "pragmatic-play": "pragmatic",
  "pg-soft": "pgsoft",
  evolution: "evolution",
  jili: "jili",
  jdb: "jdb",
  "sexy-gaming": "sexy-gaming",
  "dream-gaming": "dream-gaming",
  microgaming: "microgaming",
  "playn-go": "playngo",
  spribe: "spribe",
  spadegaming: "spadegaming",
  habanero: "habanero",
  sbo: "sbo",
};

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function loadSeeds() {
  const src = fs.readFileSync(
    path.join(ROOT, "src/data/provider-game-seeds.ts"),
    "utf8",
  );
  const providers = {};
  const blockRe =
    /(?:^|\n)\s*(?:"([^"]+)"|([a-z0-9-]+)):\s*\[([\s\S]*?)\n\s*\],/g;
  let match;
  while ((match = blockRe.exec(src))) {
    const slug = match[1] || match[2];
    if (!slug || slug === "ProviderGameSeed") continue;
    const names = [...match[3].matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
    if (names.length) providers[slug] = names;
  }
  return providers;
}

async function needsFill(abs) {
  if (!fs.existsSync(abs)) return true;
  try {
    const meta = await sharp(abs).metadata();
    const size = fs.statSync(abs).size;
    return meta.width === 480 && meta.height === 640 && size < 22000;
  } catch {
    return true;
  }
}

function candidates(slug) {
  const list = [
    slug,
    slug.replace(/^dg-/, ""),
    slug.replace(/-live$/, ""),
    slug.replace(/-deluxe$/, ""),
  ];
  return [...new Set(list)];
}

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function fetchThumb(slug) {
  for (const key of candidates(slug)) {
    const url = `https://auth.spindex.net/storage/v1/object/public/slot-thumbnails/${key}.webp`;
    try {
      const res = await fetch(url, {
        headers: { "user-agent": UA, accept: "image/*" },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 2000) continue;
      return buf;
    } catch {
      // next
    }
  }
  return null;
}

const seeds = loadSeeds();
let ok = 0;
let miss = 0;

for (const [provider, names] of Object.entries(seeds)) {
  const folder = FOLDERS[provider];
  if (!folder) continue;
  const dir = path.join(ROOT, "public/images/games", folder);
  fs.mkdirSync(dir, { recursive: true });

  for (const name of names) {
    const slug = slugify(name);
    const dest = path.join(dir, `${slug}.webp`);
    if (!(await needsFill(dest))) continue;

    const buf = await fetchThumb(slug);
    if (!buf) {
      miss += 1;
      console.log("miss", provider, slug);
      continue;
    }

    const webp = await sharp(buf).webp({ quality: 90 }).toBuffer();
    try {
      fs.writeFileSync(dest, webp);
    } catch {
      fs.writeFileSync(dest.replace(/\.webp$/i, ".v2.webp"), webp);
    }
    ok += 1;
    console.log("ok", provider, slug, webp.length);
  }
}

console.log(JSON.stringify({ ok, miss }, null, 2));
