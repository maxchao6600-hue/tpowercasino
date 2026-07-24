/**
 * Delete local game thumbnails and re-download from catalogue sourceImage URLs.
 * Does NOT touch UI/components, provider logos, or non-game assets.
 *
 * Run: node scripts/rebuild-game-thumbnails.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const cataloguePath = path.join(ROOT, "src/data/games-catalogue.json");
const repairedPath = path.join(ROOT, "src/data/repaired-game-images.json");
const reportPath = path.join(ROOT, "scripts/_rebuild-game-thumbs-report.json");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const CONCURRENCY = 12;

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
  const tried = [];
  for (const candidate of upgradeCandidates(url)) {
    tried.push(candidate);
    try {
      const res = await fetch(candidate, {
        headers: { "user-agent": UA, accept: "image/*" },
        redirect: "follow",
      });
      if (!res.ok) {
        tried.push(`HTTP ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) continue;
      // Validate as image
      await sharp(buf).metadata();
      if (!best || buf.length > best.len) {
        best = { buf, url: candidate, len: buf.length };
      }
    } catch {
      // try next
    }
  }
  return { best, tried };
}

function wipeGameThumbnails() {
  if (!fs.existsSync(GAMES_ROOT)) {
    fs.mkdirSync(GAMES_ROOT, { recursive: true });
    return { deletedFiles: 0, keptProvidersDir: false };
  }

  let deletedFiles = 0;
  for (const entry of fs.readdirSync(GAMES_ROOT, { withFileTypes: true })) {
    const abs = path.join(GAMES_ROOT, entry.name);
    // Keep folder name _providers empty recreate later via covers; wipe its files too
    // (these are generated game placeholders, NOT provider logos in /images/providers)
    if (entry.isDirectory()) {
      for (const file of fs.readdirSync(abs)) {
        const fp = path.join(abs, file);
        if (fs.statSync(fp).isFile()) {
          fs.unlinkSync(fp);
          deletedFiles += 1;
        }
      }
      // remove empty provider game folders except recreate on write
      try {
        fs.rmdirSync(abs);
      } catch {
        // non-empty nested — ignore
      }
    } else if (entry.isFile()) {
      fs.unlinkSync(abs);
      deletedFiles += 1;
    }
  }
  return { deletedFiles };
}

function normalizeImagePath(image) {
  // Drop .v2.webp overrides — rebuild uses canonical .webp
  return String(image || "").replace(/\.v2\.webp$/i, ".webp").replace(/\\/g, "/");
}

function localAbsFromPublic(imagePath) {
  const rel = normalizeImagePath(imagePath).replace(/^\//, "");
  return path.join(ROOT, "public", rel);
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()));
  return results;
}

const catalogue = JSON.parse(fs.readFileSync(cataloguePath, "utf8"));
const wipe = wipeGameThumbnails();
console.log("wiped", wipe);

// Normalize catalogue image paths away from .v2
let pathRewrites = 0;
for (const game of catalogue) {
  const next = normalizeImagePath(game.image);
  if (next !== game.image) {
    game.image = next;
    pathRewrites += 1;
  }
}

const filenameCounts = new Map();
const brokenUrls = [];
const missing = [];
let downloaded = 0;
let failed = 0;

const results = await mapPool(catalogue, CONCURRENCY, async (game) => {
  const imagePath = normalizeImagePath(game.image);
  const abs = localAbsFromPublic(imagePath);
  const base = path.basename(abs);
  filenameCounts.set(base, (filenameCounts.get(base) || 0) + 1);

  const url = game.sourceImage;
  if (!url) {
    missing.push({ id: game.id, slug: game.slug, reason: "no-sourceImage" });
    return { ok: false };
  }

  const { best } = await downloadBest(url);
  if (!best) {
    failed += 1;
    brokenUrls.push({ id: game.id, slug: game.slug, url, image: imagePath });
    missing.push({ id: game.id, slug: game.slug, reason: "download-failed", url });
    return { ok: false };
  }

  fs.mkdirSync(path.dirname(abs), { recursive: true });
  const webp = await sharp(best.buf).webp({ quality: 90 }).toBuffer();
  // Also keep a sibling original for future restore (png/jpeg by source)
  const ext = /\.png(?:\?|$)/i.test(best.url)
    ? ".png"
    : /\.webp(?:\?|$)/i.test(best.url)
      ? null
      : ".jpg";
  fs.writeFileSync(abs, webp);
  if (ext) {
    const sibling = abs.replace(/\.webp$/i, ext);
    try {
      const sibBuf =
        ext === ".png"
          ? await sharp(best.buf).png().toBuffer()
          : await sharp(best.buf).jpeg({ quality: 90 }).toBuffer();
      fs.writeFileSync(sibling, sibBuf);
    } catch {
      // optional
    }
  }
  game.sourceImage = best.url;
  downloaded += 1;
  if (downloaded % 100 === 0) console.log(`downloaded ${downloaded}`);
  return { ok: true };
});

fs.writeFileSync(cataloguePath, `${JSON.stringify(catalogue, null, 2)}\n`);

// Rebuild repaired-game-images index (empty after clean rebuild — no v2 overrides)
fs.writeFileSync(repairedPath, `${JSON.stringify([], null, 2)}\n`);

const duplicateFilenames = [...filenameCounts.entries()]
  .filter(([, n]) => n > 1)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count);

// Verify every catalogue path exists
const unresolved = [];
for (const game of catalogue) {
  const abs = localAbsFromPublic(game.image);
  if (!fs.existsSync(abs)) {
    unresolved.push({ id: game.id, slug: game.slug, image: game.image });
  }
}

const report = {
  wipedFiles: wipe.deletedFiles,
  pathRewrites,
  totalGames: catalogue.length,
  thumbnailsDownloaded: downloaded,
  downloadFailed: failed,
  missingThumbnails: missing.length,
  brokenUrls: brokenUrls.length,
  duplicateFilenames: duplicateFilenames.length,
  unresolvedAfterVerify: unresolved.length,
  sampleBrokenUrls: brokenUrls.slice(0, 30),
  sampleMissing: missing.slice(0, 30),
  sampleDuplicates: duplicateFilenames.slice(0, 30),
  sampleUnresolved: unresolved.slice(0, 30),
};

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
