/**
 * Download official provider logos from TPOWER (tpower3 CDN + tpower.ai)
 * into public/images/providers/. Rejects empty / placeholder assets.
 *
 * Run: node scripts/sync-provider-logos.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public/images/providers");
const VENDORS_PATH = path.join(ROOT, "src/data/tpower-vendors.json");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** @type {{ id: string, name: string, sources: string[], vendorNames?: string[] }[]} */
const PROVIDERS = [
  {
    id: "pragmatic-play",
    name: "Pragmatic Play",
    // Prefer compact marketing marks; CDN app icon is a giant square artwork.
    vendorNames: [],
    sources: [
      "https://tpower.ai/wp-content/uploads/2025/09/pragmatic-play.webp",
      "https://tpower.ai/wp-content/uploads/2025/09/slots-pragmatic-play.webp",
    ],
    localFallbacks: [
      "public/providers/pragmatic-play.png",
      "scripts/.tmp-provider-logos/pragmatic-play-image.png",
    ],
  },
  {
    id: "pg-soft",
    name: "PG Soft",
    sources: [],
    localFallbacks: ["public/images/providers/pg-soft.webp", "public/providers/pg-soft.png"],
  },
  {
    id: "evolution",
    name: "Evolution",
    // WP asset is a portrait cover — keep horizontal brand mark locally when valid.
    sources: ["https://tpower.ai/wp-content/uploads/2025/09/evolution.webp"],
    localFallbacks: ["public/providers/evolution.png"],
  },
  {
    id: "jili",
    name: "JILI",
    vendorNames: ["JILI"],
    sources: [],
  },
  {
    id: "spadegaming",
    name: "Spadegaming",
    vendorNames: ["SPADEGAMING"],
    sources: [],
    localFallbacks: ["public/providers/spadegaming.png"],
  },
  {
    id: "cq9",
    name: "CQ9",
    sources: [],
  },
  {
    id: "playtech",
    name: "Playtech",
    vendorNames: [],
    sources: [
      "https://tpower.ai/wp-content/uploads/2025/09/playtech_logo.png",
    ],
  },
  {
    id: "netent",
    name: "NetEnt",
    sources: [],
  },
  {
    id: "microgaming",
    name: "Microgaming",
    sources: [],
    localFallbacks: [
      "public/images/providers/microgaming.webp",
      "public/providers/microgaming.png",
    ],
  },
  {
    id: "habanero",
    name: "Habanero",
    sources: [],
    localFallbacks: [
      "public/images/providers/habanero.webp",
      "public/providers/habanero.png",
    ],
  },
  {
    id: "spribe",
    name: "Spribe",
    sources: [],
    localFallbacks: ["public/images/providers/spribe.webp", "public/providers/spribe.png"],
  },
  {
    id: "sbo",
    name: "SBO",
    sources: [],
    localFallbacks: ["public/images/providers/sbo.webp", "public/providers/sbo.png"],
  },
  {
    id: "live22",
    name: "Live22",
    vendorNames: ["LIVE22"],
    sources: [],
  },
  {
    id: "sexy-gaming",
    name: "Sexy Gaming",
    vendorNames: ["AE SEXY"],
    sources: ["https://tpower.ai/wp-content/uploads/2025/09/sexy-gaming.webp"],
  },
  {
    id: "dream-gaming",
    name: "Dream Gaming",
    vendorNames: ["DREAMGAMING"],
    sources: [],
  },
  {
    id: "wm-casino",
    name: "WM Casino",
    sources: [],
  },
  {
    id: "sa-gaming",
    name: "SA Gaming",
    sources: [],
  },
  {
    id: "asia-gaming",
    name: "Asia Gaming",
    sources: [
      "https://tpower.ai/wp-content/uploads/2025/11/AG-SLOT.png",
      "https://tpower.ai/wp-content/uploads/2025/11/ag-live.png",
    ],
    // Square AG marks are acceptable when no wide logo exists
  },
  {
    id: "kingmaker",
    name: "Kingmaker",
    sources: [],
  },
  {
    id: "yggdrasil",
    name: "YGGDRASIL",
    sources: [],
  },
  // Also sync catalogue providers used elsewhere
  {
    id: "jdb",
    name: "JDB",
    vendorNames: ["JDB-SLOT", "JDB-FISHING"],
    sources: ["https://tpower.ai/wp-content/uploads/2025/09/JDB.png"],
  },
  {
    id: "playn-go",
    name: "Play'n GO",
    sources: [],
    localFallbacks: [
      "public/images/providers/playn-go.webp",
      "public/providers/playn-go.png",
    ],
  },
  {
    id: "ae-sexy",
    name: "AE Sexy",
    vendorNames: ["AE SEXY"],
    sources: ["https://tpower.ai/wp-content/uploads/2025/09/sexy-gaming.webp"],
  },
];

const MIN_OPAQUE = 800;

fs.mkdirSync(OUT, { recursive: true });

const vendors = fs.existsSync(VENDORS_PATH)
  ? JSON.parse(fs.readFileSync(VENDORS_PATH, "utf8"))
  : [];

function vendorUrls(names = []) {
  const urls = [];
  for (const name of names) {
    const v = vendors.find((x) => x.name === name);
    if (!v) continue;
    // Prefer app icons (usually horizontal brand marks) over lobby card art
    if (v.app_icon) urls.push(v.app_icon);
    if (v.image) urls.push(v.image);
  }
  return [...new Set(urls)];
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      accept: "image/*,*/*",
      referer: "https://www.tpower3.com/",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = (res.headers.get("content-type") || "").toLowerCase();
  if (ct && !ct.includes("image") && !ct.includes("octet-stream")) {
    throw new Error(`not image: ${ct}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function opaqueCount(buf) {
  const { data } = await sharp(buf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let opaque = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 20) opaque += 1;
  }
  return opaque;
}

/** Detect generated wordmarks (flat colored text on empty/transparent canvas). */
async function looksLikeWordmark(buf) {
  const meta = await sharp(buf).metadata();
  if (meta.width === 360 && meta.height === 96) return true;
  const opaque = await opaqueCount(buf);
  if (opaque < MIN_OPAQUE) return true;
  return false;
}

async function normalizeLogo(buf, destBase) {
  const meta = await sharp(buf).metadata();
  const format = (meta.format || "png").toLowerCase();

  // Keep SVG as-is
  if (format === "svg") {
    const dest = `${destBase}.svg`;
    fs.writeFileSync(dest, buf);
    return dest;
  }

  const image = sharp(buf).rotate();
  const { width = 0, height = 0 } = meta;
  const resized =
    height > 120 || width > 480
      ? image.resize({
          width: 480,
          height: 120,
          fit: "inside",
          withoutEnlargement: true,
        })
      : image;

  const dest = `${destBase}.png`;
  await resized.png({ quality: 90, compressionLevel: 9 }).toFile(dest);
  return dest;
}

async function scoreCandidate(buf) {
  try {
    if (await looksLikeWordmark(buf)) return -1;
    const opaque = await opaqueCount(buf);
    if (opaque < MIN_OPAQUE) return -1;
    const meta = await sharp(buf).metadata();
    const w = meta.width || 1;
    const h = meta.height || 1;
    const ratio = w / h;
    const megapixels = (w * h) / 1_000_000;

    // Base: modest opaque weight (avoid huge raster art winning)
    let score = Math.min(opaque, 80_000) / 10;

    // Strongly prefer horizontal logo marks for the marquee
    if (ratio >= 1.8 && ratio <= 4.5) score += 200_000;
    else if (ratio >= 1.35 && ratio < 1.8) score += 120_000;
    else if (ratio >= 1.05 && ratio < 1.35) score += 40_000;
    else if (ratio < 0.95) score -= 150_000; // portrait lobby cards

    if (megapixels > 4) score -= 180_000;
    else if (megapixels > 1.5) score -= 60_000;

    // Tiny genuine marks still beat portrait cards
    if (w >= 100 && h >= 40 && ratio >= 1.2) score += 25_000;

    return score;
  } catch {
    return -1;
  }
}

async function resolveBestBuffer(provider) {
  /** @type {{ buf: Buffer, score: number, from: string }[]} */
  const scored = [];

  const urls = [
    ...vendorUrls(provider.vendorNames),
    ...(provider.sources || []),
  ];

  for (const url of urls) {
    try {
      const buf = await fetchBuffer(url);
      const score = await scoreCandidate(buf);
      console.log(`  try ${url.slice(0, 72)}… score=${score}`);
      if (score > 0) scored.push({ buf, score, from: url });
    } catch (e) {
      console.log(`  fail ${url.slice(0, 72)}… ${e.message}`);
    }
  }

  for (const rel of provider.localFallbacks || []) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) continue;
    try {
      const buf = fs.readFileSync(abs);
      const score = await scoreCandidate(buf);
      console.log(`  local ${rel} score=${score}`);
      if (score > 0) scored.push({ buf, score, from: rel });
    } catch (e) {
      console.log(`  local fail ${rel} ${e.message}`);
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored[0] || null;
}

const manifest = {};

for (const provider of PROVIDERS) {
  console.log(`\n== ${provider.id} ==`);
  const best = await resolveBestBuffer(provider);
  if (!best) {
    console.log("  NO LOGO (will use typography fallback)");
    manifest[provider.id] = null;
    // Remove stale broken files for this slug so UI does not 404
    for (const ext of ["png", "webp", "svg", "jpg", "jpeg"]) {
      const stale = path.join(OUT, `${provider.id}.${ext}`);
      if (fs.existsSync(stale)) {
        // Keep only if it still looks valid — otherwise delete
        try {
          const buf = fs.readFileSync(stale);
          if ((await scoreCandidate(buf)) <= 0) fs.unlinkSync(stale);
        } catch {
          fs.unlinkSync(stale);
        }
      }
    }
    continue;
  }

  const destBase = path.join(OUT, provider.id);
  // Clear other extensions for this slug
  for (const ext of ["png", "webp", "svg", "jpg", "jpeg"]) {
    const p = `${destBase}.${ext}`;
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  const dest = await normalizeLogo(best.buf, destBase);
  const rel = `/images/providers/${path.basename(dest)}`;
  manifest[provider.id] = rel;
  console.log(`  SAVED ${rel} from ${best.from.slice(0, 80)}`);
}

const manifestPath = path.join(ROOT, "src/data/provider-logos.manifest.json");
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${manifestPath}`);
console.log(
  "With logo:",
  Object.values(manifest).filter(Boolean).length,
  "/ missing:",
  Object.values(manifest).filter((v) => !v).length,
);
