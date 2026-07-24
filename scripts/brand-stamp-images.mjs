/**
 * Stamp / restamp the official TPOWER logo (top-left safe area).
 *
 * Usage:
 *   npm run brand:stamp
 *   npm run brand:stamp -- --restamp
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import {
  assertOfficialLogoExists,
  stampOfficialLogo,
} from "./lib/brand-logo.mjs";

const ROOT = process.cwd();
const RESTAMP = process.argv.includes("--restamp");
const MANIFEST_PATH = path.join(ROOT, "scripts/.brand-stamp-manifest.json");
const ASSETS_CURSOR = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-maxch-OneDrive-Desktop-tpcsnmy",
  "assets",
);
const ASSETS_LOCAL = path.join(ROOT, "assets");

assertOfficialLogoExists();

const INCLUDE_DIRS = [
  "public/images/news",
  "public/images/promotions",
  "public/images/categories",
  "public/images/download/install",
  "public/images/download/features",
  "public/images/payments/heroes",
  // Game thumbnails must never receive a TPOWER logo watermark.
  "public/blog",
  "public/og",
];

const INCLUDE_FILES = [
  "public/images/hero.webp",
  "public/images/app-preview.webp",
  "public/images/404.webp",
  "public/images/download/lobby-bg-1.webp",
  "public/images/download/lobby-bg-2.webp",
  "public/images/download/use-app-en.webp",
  "public/images/download/use-pc-en.webp",
];

const SOURCE_REGEN = [
  {
    sources: ["promo-welcome.png"],
    dest: "public/images/promotions/tpower-welcome-package.webp",
    size: [1600, 900],
  },
  {
    sources: ["promo-reload.png"],
    dest: "public/images/promotions/tpower-weekly-reload.webp",
    size: [1600, 900],
  },
  {
    sources: ["promo-cashback.png"],
    dest: "public/images/promotions/tpower-cashback.webp",
    size: [1600, 900],
  },
  {
    sources: ["promo-vip.png"],
    dest: "public/images/promotions/tpower-vip-rewards.webp",
    size: [1600, 900],
  },
  {
    sources: ["promo-seasonal.png"],
    dest: "public/images/promotions/tpower-merdeka-seasonal.webp",
    size: [1600, 900],
  },
  {
    sources: ["news-platform-update.png"],
    dest: "public/images/news/tpower-platform-performance-update.webp",
    size: [1600, 900],
  },
  {
    sources: ["news-live-casino.png"],
    dest: "public/images/news/tpower-live-casino-tables.webp",
    size: [1600, 900],
  },
  {
    sources: ["news-payments-duitnow.png"],
    dest: "public/images/news/tpower-duitnow-ewallet-tips.webp",
    size: [1600, 900],
  },
  {
    sources: ["news-vip-hosts.png"],
    dest: "public/images/news/tpower-vip-host-coverage.webp",
    size: [1600, 900],
  },
];

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function findSource(names) {
  for (const name of names) {
    for (const dir of [ASSETS_CURSOR, ASSETS_LOCAL]) {
      const candidate = path.join(dir, name);
      if (fs.existsSync(candidate)) return candidate;
    }
  }
  return null;
}

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, acc);
    else if (/\.(webp|png|jpe?g)$/i.test(entry.name)) acc.push(full);
  }
  return acc;
}

function collectTargets() {
  const targets = new Set(INCLUDE_FILES);
  for (const dir of INCLUDE_DIRS) {
    for (const full of walkFiles(path.join(ROOT, dir))) {
      targets.add(toPosix(path.relative(ROOT, full)));
    }
  }
  return [...targets].sort();
}

async function regenerateFromSource(entry) {
  const src = findSource(entry.sources);
  if (!src) return false;
  const [w, h] = entry.size;
  const destAbs = path.join(ROOT, entry.dest);
  const resized = await sharp(src)
    .resize(w, h, { fit: "cover", position: "centre" })
    .webp({ quality: 88 })
    .toBuffer();
  await stampOfficialLogo(resized, {
    output: destAbs,
    format: "webp",
    quality: 88,
    restamp: false,
  });
  console.log("regen+stamp", entry.dest, "←", path.basename(src));
  return true;
}

async function stampFile(rel, manifest) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return;

  if (!RESTAMP && manifest[rel]?.stampedAt) {
    console.log("skip-branded", rel);
    return;
  }

  const ext = path.extname(rel).toLowerCase();
  const format =
    ext === ".png" ? "png" : ext === ".jpg" || ext === ".jpeg" ? "jpeg" : "webp";

  try {
    const input = fs.readFileSync(abs);
    const result = await stampOfficialLogo(input, {
      output: abs,
      format,
      quality: 85,
      restamp: Boolean(RESTAMP || manifest[rel]?.stampedAt),
    });

    const next = fs.statSync(abs);
    manifest[rel] = {
      size: next.size,
      mtimeMs: next.mtimeMs,
      edge: result.edge,
      logoWidth: result.logoWidth,
      stampedAt: new Date().toISOString(),
      safeMargin: true,
    };
    console.log(
      RESTAMP ? "restamp" : "stamp",
      rel,
      `${result.width}x${result.height}`,
      `safe=${result.inset?.left ?? result.edge}x${result.inset?.top ?? result.edge}`,
      `logo@${result.edgeX ?? result.edge},${result.edgeY ?? result.edge}`,
      `logoW=${result.logoWidth}px`,
    );
  } catch (error) {
    console.error("FAIL", rel, error.message);
  }
}

let manifest = RESTAMP ? {} : loadManifest();
const regenerated = new Set();

for (const entry of SOURCE_REGEN) {
  if (!RESTAMP && (manifest[entry.dest]?.stampedAt || manifest[entry.dest]?.fromSource)) {
    regenerated.add(entry.dest);
    console.log("skip-regen", entry.dest);
    continue;
  }
  const ok = await regenerateFromSource(entry);
  if (ok) {
    regenerated.add(entry.dest);
    const abs = path.join(ROOT, entry.dest);
    const stat = fs.statSync(abs);
    const layoutNote = await sharp(abs).metadata();
    manifest[entry.dest] = {
      size: stat.size,
      mtimeMs: stat.mtimeMs,
      stampedAt: new Date().toISOString(),
      fromSource: true,
      safeMargin: true,
      width: layoutNote.width,
      height: layoutNote.height,
    };
  }
}

const targets = collectTargets();
let stamped = 0;
let skipped = 0;
let failed = 0;

for (const rel of targets) {
  if (!RESTAMP && (regenerated.has(rel) || manifest[rel]?.stampedAt)) {
    skipped += 1;
    console.log("skip-branded", rel);
    continue;
  }
  if (RESTAMP && regenerated.has(rel)) {
    skipped += 1;
    console.log("skip-regen", rel);
    continue;
  }

  const before = manifest[rel]?.stampedAt;
  await stampFile(rel, manifest);
  if (manifest[rel]?.stampedAt && manifest[rel]?.stampedAt !== before) stamped += 1;
  else if (!manifest[rel]?.stampedAt) failed += 1;
}

saveManifest(manifest);
console.log("\nDone.", RESTAMP ? "(restamp mode)" : "(stamp mode)");
console.log("Targets:", targets.length, "written:", stamped, "skipped:", skipped, "failed:", failed);
