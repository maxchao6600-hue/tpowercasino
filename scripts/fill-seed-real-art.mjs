/**
 * For seed library paths that are missing or generated placeholders,
 * copy/download real artwork into the expected provider folder filename.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const catalogue = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/games-catalogue.json"), "utf8"),
);

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

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

async function isGeneratedOrMissing(abs) {
  if (!fs.existsSync(abs)) return true;
  try {
    const meta = await sharp(abs).metadata();
    const size = fs.statSync(abs).size;
    return meta.width === 480 && meta.height === 640 && size < 22000;
  } catch {
    return true;
  }
}

async function isRealBuffer(buf) {
  try {
    const meta = await sharp(buf).metadata();
    const size = buf.length;
    if (meta.width === 480 && meta.height === 640 && size < 22000) return false;
    return Boolean(meta.width && meta.height);
  } catch {
    return false;
  }
}

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function download(url) {
  if (!url) return null;
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "image/*" },
      redirect: "follow",
    });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 1500) return null;
    if (!(await isRealBuffer(buf))) return null;
    return buf;
  } catch {
    return null;
  }
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
    const body = match[3];
    const names = [...body.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
    if (names.length) providers[slug] = names;
  }
  return providers;
}

// Index catalogue real files + source URLs by slugified English name
const bySlug = new Map();
for (const game of catalogue) {
  const key = slugify(game.name?.en);
  if (!key) continue;
  const rel = String(game.image || "").replace(/^\//, "");
  const abs = path.join(ROOT, "public", rel);
  const entry = bySlug.get(key) || { files: [], sources: [] };
  if (rel && fs.existsSync(abs)) entry.files.push(abs);
  if (game.sourceImage) entry.sources.push(game.sourceImage);
  bySlug.set(key, entry);
}

async function writeDest(dest, buf) {
  const webp = await sharp(buf).webp({ quality: 90 }).toBuffer();
  try {
    fs.writeFileSync(dest, webp);
    return true;
  } catch {
    const v2 = dest.replace(/\.webp$/i, ".v2.webp");
    try {
      fs.writeFileSync(v2, webp);
      return true;
    } catch {
      return false;
    }
  }
}

const seeds = loadSeeds();
let copied = 0;
let downloaded = 0;
let unresolved = 0;

for (const [providerSlug, names] of Object.entries(seeds)) {
  const folder = FOLDERS[providerSlug];
  if (!folder) continue;
  const dir = path.join(ROOT, "public/images/games", folder);
  fs.mkdirSync(dir, { recursive: true });

  for (const name of names) {
    const file = `${slugify(name)}.webp`;
    const dest = path.join(dir, file);
    if (!(await isGeneratedOrMissing(dest))) continue;

    const key = slugify(name);
    const hit = bySlug.get(key);
    let buf = null;

    if (hit) {
      for (const fileAbs of hit.files) {
        if (await isGeneratedOrMissing(fileAbs)) continue;
        buf = fs.readFileSync(fileAbs);
        break;
      }
      if (!buf) {
        for (const url of hit.sources) {
          buf = await download(url);
          if (buf) break;
        }
      }
    }

    // Soft match: pgs-fortune-rabbit / fortune-rabbit
    if (!buf) {
      for (const [slug, entry] of bySlug) {
        if (slug === key || slug.endsWith(`-${key}`) || key.endsWith(`-${slug}`)) {
          for (const fileAbs of entry.files) {
            if (await isGeneratedOrMissing(fileAbs)) continue;
            buf = fs.readFileSync(fileAbs);
            break;
          }
          if (buf) break;
          for (const url of entry.sources) {
            buf = await download(url);
            if (buf) break;
          }
          if (buf) break;
        }
      }
    }

    if (!buf) {
      unresolved += 1;
      console.log("unresolved", providerSlug, name);
      continue;
    }

    const ok = await writeDest(dest, buf);
    if (!ok) {
      unresolved += 1;
      continue;
    }
    if (hit?.sources?.length) downloaded += 1;
    else copied += 1;
    console.log("filled", providerSlug, file);
  }
}

console.log(JSON.stringify({ copied, downloaded, unresolved }, null, 2));

// Rebuild manifest + normalize repaired paths
await import("./build-game-image-manifest.mjs");

const repairedPath = path.join(ROOT, "src/data/repaired-game-images.json");
if (fs.existsSync(repairedPath)) {
  const repaired = JSON.parse(fs.readFileSync(repairedPath, "utf8")).map((p) =>
    String(p).replace(/\\/g, "/"),
  );
  fs.writeFileSync(repairedPath, `${JSON.stringify(repaired, null, 2)}\n`);
}
