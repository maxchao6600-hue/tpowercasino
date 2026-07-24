/**
 * Full game thumbnail asset pipeline rebuild.
 *
 * - Wipes cached game thumbs (not provider logos)
 * - Deletes generated thumbnail mappings
 * - Re-crawls TPOWER lobby API (every vendor/game)
 * - Re-downloads every source thumbnail
 * - Writes id-based paths: /images/games/{providerFolder}/{sourceId}.webp
 * - Writes fresh mapping keyed by providerId + gameId
 * - Detects duplicates / 404 / placeholders / corrupt / zero-byte / bad aspect
 * - Emits per-provider report
 *
 * Does NOT touch React / Next.js / Tailwind / UI components.
 *
 * Run: node scripts/rebuild-game-asset-pipeline.mjs
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import CryptoJS from "crypto-js";
import sharp from "sharp";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const OUT_CATALOGUE = path.join(ROOT, "src/data/games-catalogue.json");
const OUT_RAW = path.join(ROOT, "src/data/games-catalogue.raw.json");
const OUT_VENDORS = path.join(ROOT, "src/data/tpower-vendors.json");
const OUT_MAP = path.join(ROOT, "src/data/game-thumbnail-map.json");
const OUT_REPORT = path.join(ROOT, "scripts/_game-asset-pipeline-report.json");
const OUT_REPORT_MD = path.join(ROOT, "scripts/_game-asset-pipeline-report.md");
const REPAIRED = path.join(ROOT, "src/data/repaired-game-images.json");
const OLD_MANIFEST = path.join(ROOT, "src/data/game-image-manifest.json");
const PROGRESS = path.join(ROOT, "scripts/.tmp-pipeline-progress.json");

const DOMAIN = process.env.TPOWER_DOMAIN || "www.tpower3.com";
const API = process.env.TPOWER_API_URL || "https://d5y9.apit.5t1p6.com/";
const ORIGIN = process.env.TPOWER_ORIGIN || "https://www.tpower3.com";
const PER_PAGE = Number(process.env.TPOWER_PER_PAGE || 500);
const CONCURRENCY = Number(process.env.TPOWER_CONCURRENCY || 10);
const MAX_EDGE = 640;
const TARGET_ASPECT = 3 / 4; // portrait card
const MIN_ASPECT = 0.45;
const MAX_ASPECT = 2.2;

const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const TYPE_TO_CATEGORY = {
  1: "live-casino",
  2: "slots",
  3: "poker",
  4: "lottery",
  5: "fishing",
  6: "arcade",
  9: "poker",
  15: "arcade",
  16: "sports",
  18: "sports",
  19: "sports",
  21: "arcade",
  98: "arcade",
  99: "arcade",
  100: "table",
  101: "crash",
  102: "crash",
};

const PROVIDER_ALIASES = {
  "pragmatic play": "pragmatic",
  pragmatic: "pragmatic",
  "pg soft": "pgsoft",
  pgsoft: "pgsoft",
  pgs: "pgsoft",
  evolution: "evolution",
  "evolution gaming": "evolution",
  jili: "jili",
  spadegaming: "spadegaming",
  "spade gaming": "spadegaming",
  jdb: "jdb",
  "play'n go": "playngo",
  "playn go": "playngo",
  playngo: "playngo",
  microgaming: "microgaming",
  habanero: "habanero",
  spribe: "spribe",
  "dream gaming": "dreamgaming",
  "sexy gaming": "sexy",
  "ae sexy": "sexy",
  sbo: "sbo",
  "sbo sports": "sbo",
};

function encrypt(plain) {
  const key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(KEYS.aes).toString());
  const iv = CryptoJS.enc.Utf8.parse(KEYS.iv);
  return CryptoJS.AES.encrypt(String(plain), key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

async function apiPost(endpoint, payload, locale = "en") {
  const plain =
    payload === "" || payload == null
      ? ""
      : typeof payload === "string"
        ? payload
        : JSON.stringify(payload);
  const params = encrypt(plain);
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch(new URL(endpoint.replace(/^\//, ""), API), {
    method: "POST",
    headers: {
      "user-agent": UA,
      "content-type": "application/json",
      "accept-language": locale,
      origin: ORIGIN,
      referer: `${ORIGIN}/`,
    },
    body: JSON.stringify({ params, key }),
  });
  const json = await res.json();
  if (![200, 1000].includes(json.code)) {
    throw new Error(
      `${endpoint} failed: ${json.code} ${JSON.stringify(json.message)}`,
    );
  }
  return json;
}

function slugify(input) {
  return (
    String(input || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/['’]/g, "")
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 72) || "game"
  );
}

function providerFolder(vendorName, vendorId) {
  const raw = String(vendorName || "").trim();
  const key = raw.toLowerCase();
  if (PROVIDER_ALIASES[key]) return PROVIDER_ALIASES[key];
  for (const [alias, folder] of Object.entries(PROVIDER_ALIASES)) {
    if (key.includes(alias)) return folder;
  }
  const folder = slugify(raw).replace(/-/g, "") || `vendor${vendorId}`;
  return folder.slice(0, 32);
}

function providerIdFromFolder(folder) {
  const map = {
    pragmatic: "pragmatic-play",
    pgsoft: "pg-soft",
    evolution: "evolution",
    jili: "jili",
    spadegaming: "spadegaming",
    jdb: "jdb",
    playngo: "playn-go",
    microgaming: "microgaming",
    habanero: "habanero",
    spribe: "spribe",
    dreamgaming: "dream-gaming",
    sexy: "sexy-baccarat",
    sbo: "sbo",
  };
  return map[folder] || folder;
}

function mapCategory(typeId) {
  return TYPE_TO_CATEGORY[Number(typeId)] || "slots";
}

function upgradeCandidates(url) {
  if (!url) return [];
  const list = [url];
  const u = String(url);
  if (/\/square\/\d+\//i.test(u)) {
    list.push(u.replace(/\/square\/\d+\//i, "/square/200/"));
    list.push(u.replace(/\/square\/\d+\//i, "/square/300/"));
    list.push(u.replace(/\/square\/\d+\//i, "/square/400/"));
  }
  if (/\.jpg(?:\?|$)/i.test(u)) list.push(u.replace(/\.jpg/i, ".png"));
  if (/\.png(?:\?|$)/i.test(u)) list.push(u.replace(/\.png/i, ".jpg"));
  if (/\/thumbs\/mobile\//i.test(u)) {
    list.push(u.replace("/thumbs/mobile/", "/thumbs/"));
    list.push(u.replace("/thumbs/mobile/", "/thumbs/desktop/"));
  }
  return [...new Set(list)];
}

async function mapPool(items, limit, worker) {
  const results = new Array(items.length);
  let idx = 0;
  async function run() {
    while (idx < items.length) {
      const current = idx++;
      results[current] = await worker(items[current], current);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

function wipeGameThumbnails() {
  let deletedFiles = 0;
  if (!fs.existsSync(GAMES_ROOT)) {
    fs.mkdirSync(GAMES_ROOT, { recursive: true });
    return { deletedFiles };
  }
  for (const entry of fs.readdirSync(GAMES_ROOT, { withFileTypes: true })) {
    const abs = path.join(GAMES_ROOT, entry.name);
    if (entry.isDirectory()) {
      for (const file of fs.readdirSync(abs)) {
        const fp = path.join(abs, file);
        try {
          if (fs.statSync(fp).isFile()) {
            fs.unlinkSync(fp);
            deletedFiles += 1;
          }
        } catch {
          // locked — ignore
        }
      }
      try {
        fs.rmSync(abs, { recursive: true, force: true });
      } catch {
        // ignore
      }
    } else if (entry.isFile()) {
      fs.unlinkSync(abs);
      deletedFiles += 1;
    }
  }
  return { deletedFiles };
}

function deleteGeneratedMappings() {
  const removed = [];
  for (const file of [OLD_MANIFEST, OUT_MAP, PROGRESS]) {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      removed.push(path.relative(ROOT, file));
    }
  }
  // Clear repaired v2 override list — do not reuse
  fs.writeFileSync(REPAIRED, `${JSON.stringify([], null, 2)}\n`);
  removed.push(path.relative(ROOT, REPAIRED) + " (cleared)");
  // Stale rebuild reports
  for (const name of [
    "_rebuild-game-thumbs-report.json",
    "_verify-game-thumbs-report.json",
    "_gamecard-image-debug.json",
  ]) {
    const p = path.join(ROOT, "scripts", name);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      removed.push(path.relative(ROOT, p));
    }
  }
  return removed;
}

async function crawlAllGames() {
  const first = await apiPost("api/myGamesByDomain", {
    domain: DOMAIN,
    page: 1,
    per_page: PER_PAGE,
  });
  const pages = first.pagination?.pages || 1;
  console.log(
    `catalogue total=${first.pagination?.total || first.data?.length || 0} pages=${pages}`,
  );
  const games = [...(first.data || [])];
  for (let page = 2; page <= pages; page++) {
    const res = await apiPost("api/myGamesByDomain", {
      domain: DOMAIN,
      page,
      per_page: PER_PAGE,
    });
    games.push(...(res.data || []));
    console.log(`page ${page}/${pages} (+${(res.data || []).length})`);
  }
  return games;
}

async function crawlTagged() {
  const tags = {};
  for (const tag of ["hot", "new"]) {
    try {
      const res = await apiPost("api/getGamesByTagByDomain", {
        domain: DOMAIN,
        tag,
      });
      tags[tag] = Array.isArray(res.data) ? res.data : [];
      console.log(`tag ${tag}: ${tags[tag].length}`);
    } catch (e) {
      console.warn(`tag ${tag} failed`, e.message);
      tags[tag] = [];
    }
  }
  return tags;
}

async function crawlVendors() {
  const res = await apiPost("api/newVendorsByDomain", { domain: DOMAIN });
  return Array.isArray(res.data) ? res.data : [];
}

async function maybeZhNames(games) {
  try {
    const res = await apiPost(
      "api/myGamesByDomain",
      { domain: DOMAIN, page: 1, per_page: Math.min(500, games.length) },
      "zh",
    );
    const map = new Map();
    for (const g of res.data || []) map.set(String(g.id), g.name);
    return map;
  } catch {
    return new Map();
  }
}

async function fetchImageCandidate(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      referer: `${ORIGIN}/`,
      accept: "image/*",
    },
    redirect: "follow",
  });
  return res;
}

/**
 * Download best candidate. Returns { ok, status, buf, url, reason }
 */
async function downloadBest(url) {
  if (!url) return { ok: false, status: 0, reason: "no-source-url" };
  let lastStatus = 0;
  let best = null;
  for (const candidate of upgradeCandidates(url)) {
    try {
      const res = await fetchImageCandidate(candidate);
      lastStatus = res.status;
      if (res.status === 404) continue;
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) continue;
      if (buf.length < 256) continue;
      try {
        await sharp(buf).metadata();
      } catch {
        continue;
      }
      if (!best || buf.length > best.buf.length) {
        best = { buf, url: candidate, status: res.status };
      }
    } catch {
      // try next
    }
  }
  if (!best) {
    return {
      ok: false,
      status: lastStatus,
      reason: lastStatus === 404 ? "404" : "download-failed",
    };
  }
  return { ok: true, ...best };
}

async function isSolidPlaceholder(buf) {
  try {
    const { data, info } = await sharp(buf)
      .resize(24, 24, { fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const n = info.width * info.height;
    let sum = 0;
    let sumSq = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
      sumSq += data[i] * data[i];
    }
    const mean = sum / data.length;
    const variance = sumSq / data.length - mean * mean;
    const std = Math.sqrt(Math.max(0, variance));
    // Very flat palette ≈ solid / gradient plate
    return std < 8 || (std < 14 && n > 0 && buf.length < 12_000);
  } catch {
    return true;
  }
}

async function encodeThumb(buf) {
  const meta = await sharp(buf).metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (!w || !h) throw new Error("missing-dimensions");

  const aspect = w / h;
  const wrongAspect = aspect < MIN_ASPECT || aspect > MAX_ASPECT;

  // Cover-fit into portrait card without extreme letterboxing crop when already close
  let pipeline = sharp(buf).rotate();
  if (w > MAX_EDGE || h > MAX_EDGE) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  // Normalize to consistent portrait canvas only when aspect is clearly landscape-wide
  // (avoids wrong crop on already-portrait art)
  const afterMeta = await pipeline.clone().metadata();
  let aw = afterMeta.width || w;
  let ah = afterMeta.height || h;
  let outPipeline = pipeline;
  if (aw / ah > 1.15) {
    // landscape source → cover into 3:4
    const tw = MAX_EDGE;
    const th = Math.round(tw / TARGET_ASPECT);
    outPipeline = sharp(buf)
      .rotate()
      .resize(tw, th, { fit: "cover", position: "centre" });
  }

  const webp = await outPipeline.webp({ quality: 90 }).toBuffer();
  const outMeta = await sharp(webp).metadata();
  return {
    webp,
    width: outMeta.width || aw,
    height: outMeta.height || ah,
    sourceWidth: w,
    sourceHeight: h,
    aspect: (outMeta.width || aw) / (outMeta.height || ah || 1),
    wrongAspect,
  };
}

async function writeAtomic(abs, data) {
  const dir = path.dirname(abs);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = `${abs}.${process.pid}.${Date.now()}.tmp`;
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      fs.writeFileSync(tmp, data);
      fs.renameSync(tmp, abs);
      return;
    } catch (err) {
      try {
        fs.unlinkSync(tmp);
      } catch {
        // ignore
      }
      if (attempt === 7) throw err;
      await new Promise((r) => setTimeout(r, 200 * (attempt + 1)));
    }
  }
}

function buildCatalogueEntries(unique, zhMap, tags) {
  const rtpById = new Map();
  for (const g of [...(tags.hot || []), ...(tags.new || [])]) {
    if (g?.id != null && g.rtp) rtpById.set(String(g.id), String(g.rtp));
  }

  const usedSlugs = new Set();
  return unique.map((game) => {
    const id = String(game.id);
    const vendorName = game.vendor_name || `Vendor ${game.vendor_id}`;
    const folder = providerFolder(vendorName, game.vendor_id);
    const providerId = providerIdFromFolder(folder);
    const category = mapCategory(game.type_id);
    let slug = slugify(game.name || `game-${id}`);
    if (usedSlugs.has(slug)) slug = `${slug}-${id}`;
    usedSlugs.add(slug);

    const enName = game.name || `Game ${id}`;
    const zhName = zhMap.get(id) || enName;
    const rtp = rtpById.get(id) || (game.rtp ? String(game.rtp) : undefined);
    const isNew = Boolean(Number(game.is_new));
    const isHot = Boolean(Number(game.is_hot));
    const jackpot =
      Boolean(game.lottery_pool && Number(game.lottery_pool) > 0) ||
      /jackpot/i.test(String(game.tags || ""));

    const image = `/images/games/${folder}/${id}.webp`;

    return {
      id: `tp-${id}`,
      slug,
      sourceId: Number(game.id),
      name: { en: enName, zh: zhName },
      description: {
        en: `${enName} from ${vendorName} — available in the TPOWER ${category.replace("-", " ")} lobby.`,
        zh: `${zhName}（${vendorName}）— 可在 TPOWER ${category} 大厅游玩。`,
      },
      category,
      providerId,
      providerName: vendorName,
      providerFolder: folder,
      ...(rtp ? { rtp: /%/.test(rtp) ? rtp : `${rtp}%` } : {}),
      ...(isHot ? { featured: true } : {}),
      ...(isNew ? { new: true } : {}),
      ...(jackpot ? { jackpot: true } : {}),
      image,
      sourceImage: game.image || "",
      _rawImage: game.image || "",
    };
  });
}

function emptyProviderStats(name) {
  return {
    provider: name,
    gamesFound: 0,
    downloaded: 0,
    failed: 0,
    missing: 0,
    duplicates: 0,
    placeholders: 0,
    corrupted: 0,
    zeroByte: 0,
    wrongAspect: 0,
    http404: 0,
  };
}

/** CMS provider slug → on-disk folder used by seed image paths */
const SEED_PROVIDER_FOLDERS = {
  "pragmatic-play": "pragmatic",
  "pg-soft": "pgsoft",
  evolution: "evolution",
  jili: "jili",
  jdb: "jdb",
  "sexy-baccarat": "sexy-gaming",
  "sexy-gaming": "sexy-gaming",
  "dream-gaming": "dream-gaming",
  microgaming: "microgaming",
  "playn-go": "playngo",
  spribe: "spribe",
  spadegaming: "spadegaming",
  habanero: "habanero",
  sbo: "sbo",
};

function parseSeedNamesFromTs() {
  const seedsPath = path.join(ROOT, "src/data/provider-game-seeds.ts");
  if (!fs.existsSync(seedsPath)) return [];
  const text = fs.readFileSync(seedsPath, "utf8");
  const out = [];
  let currentProvider = null;
  for (const line of text.split(/\r?\n/)) {
    const prov = line.match(/^\s*"([^"]+)":\s*\[/);
    if (prov) {
      currentProvider = prov[1];
      continue;
    }
    const name = line.match(/name:\s*"([^"]+)"/);
    if (currentProvider && name) {
      out.push({ providerSlug: currentProvider, name: name[1] });
    }
  }
  return out;
}

function syncSeedAliasesFromCatalogue(catalogue) {
  const byName = new Map();
  for (const g of catalogue) {
    const key = String(g.name?.en || "")
      .trim()
      .toLowerCase()
      .replace(/['’]/g, "");
    if (!key) continue;
    if (!byName.has(key)) byName.set(key, g);
  }

  let copied = 0;
  let unmatched = 0;
  for (const seed of parseSeedNamesFromTs()) {
    const folder = SEED_PROVIDER_FOLDERS[seed.providerSlug] || slugify(seed.providerSlug);
    const file = slugify(seed.name) || "game";
    const dest = path.join(GAMES_ROOT, folder, `${file}.webp`);
    const key = seed.name
      .trim()
      .toLowerCase()
      .replace(/['’]/g, "");
    const donor = byName.get(key);
    if (!donor) {
      unmatched += 1;
      continue;
    }
    const src = path.join(ROOT, "public", donor.image.replace(/^\//, ""));
    if (!fs.existsSync(src) || fs.statSync(src).size === 0) {
      unmatched += 1;
      continue;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied += 1;
  }
  return { copied, unmatched };
}

async function main() {
  console.log("=== 1) Wipe cached game thumbnails ===");
  const wipe = wipeGameThumbnails();
  console.log("wiped files:", wipe.deletedFiles);

  console.log("=== 2) Delete generated thumbnail mappings ===");
  const removedMaps = deleteGeneratedMappings();
  console.log("removed:", removedMaps);

  console.log("=== 3) Crawl providers + games from TPOWER ===");
  const vendors = await crawlVendors();
  fs.writeFileSync(OUT_VENDORS, `${JSON.stringify(vendors, null, 2)}\n`);
  console.log("vendors:", vendors.length);

  const tags = await crawlTagged();
  const rawGames = await crawlAllGames();
  fs.writeFileSync(
    OUT_RAW,
    `${JSON.stringify(
      {
        domain: DOMAIN,
        fetchedAt: new Date().toISOString(),
        games: rawGames,
        tags,
        vendors,
      },
      null,
      2,
    )}\n`,
  );

  const zhMap = await maybeZhNames(rawGames);
  const byId = new Map();
  for (const g of rawGames) byId.set(String(g.id), g);
  const unique = [...byId.values()];
  console.log("unique games:", unique.length);

  const catalogue = buildCatalogueEntries(unique, zhMap, tags);

  console.log("=== 4) Download every thumbnail ===");
  const hashToGames = new Map(); // sha256 -> [game keys]
  const mapEntries = {};
  const issues = {
    duplicates: [],
    http404: [],
    placeholders: [],
    corrupted: [],
    zeroByte: [],
    wrongAspect: [],
    failed: [],
  };
  const providerStats = new Map();

  let downloaded = 0;
  let failed = 0;

  await mapPool(catalogue, CONCURRENCY, async (entry) => {
    const providerKey = entry.providerId;
    if (!providerStats.has(providerKey)) {
      providerStats.set(providerKey, emptyProviderStats(providerKey));
    }
    const stats = providerStats.get(providerKey);
    stats.gamesFound += 1;

    const mapKey = `${entry.providerId}:${entry.sourceId}`;
    const abs = path.join(ROOT, "public", entry.image.replace(/^\//, ""));

    const baseRecord = {
      providerId: entry.providerId,
      providerFolder: entry.providerFolder,
      providerName: entry.providerName,
      gameId: entry.id,
      sourceId: entry.sourceId,
      slug: entry.slug,
      image: entry.image,
      sourceUrl: entry._rawImage || "",
      status: "missing",
    };

    if (!entry._rawImage) {
      failed += 1;
      stats.failed += 1;
      stats.missing += 1;
      issues.failed.push({ ...baseRecord, reason: "no-source-url" });
      mapEntries[mapKey] = { ...baseRecord, status: "missing", reason: "no-source-url" };
      return;
    }

    const dl = await downloadBest(entry._rawImage);
    if (!dl.ok) {
      failed += 1;
      stats.failed += 1;
      stats.missing += 1;
      if (dl.reason === "404" || dl.status === 404) {
        stats.http404 += 1;
        issues.http404.push({ ...baseRecord, url: entry._rawImage });
      }
      issues.failed.push({
        ...baseRecord,
        reason: dl.reason,
        statusCode: dl.status,
      });
      mapEntries[mapKey] = {
        ...baseRecord,
        status: "failed",
        reason: dl.reason,
        statusCode: dl.status,
      };
      return;
    }

    if (dl.buf.length === 0) {
      failed += 1;
      stats.failed += 1;
      stats.zeroByte += 1;
      stats.missing += 1;
      issues.zeroByte.push(baseRecord);
      mapEntries[mapKey] = { ...baseRecord, status: "zero-byte" };
      return;
    }

    let encoded;
    try {
      encoded = await encodeThumb(dl.buf);
    } catch (err) {
      failed += 1;
      stats.failed += 1;
      stats.corrupted += 1;
      stats.missing += 1;
      issues.corrupted.push({ ...baseRecord, error: String(err.message || err) });
      mapEntries[mapKey] = {
        ...baseRecord,
        status: "corrupted",
        reason: String(err.message || err),
      };
      return;
    }

    const placeholder = await isSolidPlaceholder(dl.buf);
    if (placeholder) {
      stats.placeholders += 1;
      issues.placeholders.push({
        ...baseRecord,
        url: dl.url,
        bytes: dl.buf.length,
      });
    }

    if (encoded.wrongAspect) {
      stats.wrongAspect += 1;
      issues.wrongAspect.push({
        ...baseRecord,
        sourceWidth: encoded.sourceWidth,
        sourceHeight: encoded.sourceHeight,
        aspect: Number(
          (encoded.sourceWidth / encoded.sourceHeight).toFixed(3),
        ),
      });
    }

    try {
      await writeAtomic(abs, encoded.webp);
    } catch (err) {
      failed += 1;
      stats.failed += 1;
      stats.missing += 1;
      issues.failed.push({
        ...baseRecord,
        reason: "write-failed",
        error: String(err.message || err),
      });
      mapEntries[mapKey] = {
        ...baseRecord,
        status: "write-failed",
        reason: String(err.message || err),
      };
      return;
    }

    // Verify written file
    let st;
    try {
      st = fs.statSync(abs);
    } catch {
      st = null;
    }
    if (!st || st.size === 0) {
      failed += 1;
      stats.failed += 1;
      stats.zeroByte += 1;
      stats.missing += 1;
      issues.zeroByte.push(baseRecord);
      mapEntries[mapKey] = { ...baseRecord, status: "zero-byte-after-write" };
      return;
    }

    const sha256 = crypto.createHash("sha256").update(encoded.webp).digest("hex");
    if (!hashToGames.has(sha256)) hashToGames.set(sha256, []);
    hashToGames.get(sha256).push(mapKey);

    entry.sourceImage = dl.url;
    downloaded += 1;
    stats.downloaded += 1;

    mapEntries[mapKey] = {
      ...baseRecord,
      status: placeholder ? "placeholder" : "ok",
      sourceUrl: dl.url,
      sha256,
      bytes: st.size,
      width: encoded.width,
      height: encoded.height,
      sourceWidth: encoded.sourceWidth,
      sourceHeight: encoded.sourceHeight,
      wrongAspect: encoded.wrongAspect,
      placeholder,
    };

    if (downloaded % 100 === 0) {
      console.log(`downloaded ${downloaded}/${catalogue.length}`);
      fs.writeFileSync(
        PROGRESS,
        JSON.stringify({ downloaded, failed, at: new Date().toISOString() }),
      );
    }
  });

  // Duplicate pass (same image bytes used by multiple games)
  for (const [hash, keys] of hashToGames.entries()) {
    if (keys.length < 2) continue;
    for (const key of keys) {
      const rec = mapEntries[key];
      if (!rec) continue;
      rec.duplicate = true;
      rec.duplicateGroupSize = keys.length;
      rec.duplicateHash = hash;
      const stats = providerStats.get(rec.providerId);
      if (stats) stats.duplicates += 1;
      issues.duplicates.push({
        key,
        gameId: rec.gameId,
        providerId: rec.providerId,
        image: rec.image,
        sha256: hash,
        groupSize: keys.length,
      });
    }
  }

  console.log("=== 5) Write catalogue + mapping ===");
  for (const entry of catalogue) delete entry._rawImage;
  catalogue.sort((a, b) => {
    const score = (g) =>
      (g.featured ? 2 : 0) + (g.new ? 1 : 0) + (g.jackpot ? 1 : 0);
    const d = score(b) - score(a);
    if (d !== 0) return d;
    return a.name.en.localeCompare(b.name.en);
  });
  fs.writeFileSync(OUT_CATALOGUE, `${JSON.stringify(catalogue, null, 2)}\n`);

  const mapping = {
    version: 2,
    generatedAt: new Date().toISOString(),
    keyFormat: "providerId:sourceId",
    totalGames: catalogue.length,
    downloaded,
    failed,
    entries: mapEntries,
  };
  fs.writeFileSync(OUT_MAP, `${JSON.stringify(mapping, null, 2)}\n`);

  // Seed shelf aliases: copy real catalogue art onto slug paths used by seed rows.
  // Never generate solid-color placeholder covers.
  console.log("=== 5b) Sync seed slug aliases from catalogue art ===");
  const seedAlias = syncSeedAliasesFromCatalogue(catalogue);
  console.log("seed aliases copied:", seedAlias.copied, "unmatched:", seedAlias.unmatched);

  // Verify every ok path resolves
  let unresolved = 0;
  for (const entry of catalogue) {
    const abs = path.join(ROOT, "public", entry.image.replace(/^\//, ""));
    if (!fs.existsSync(abs) || fs.statSync(abs).size === 0) unresolved += 1;
  }

  const providers = [...providerStats.values()].sort((a, b) =>
    a.provider.localeCompare(b.provider),
  );

  const report = {
    generatedAt: new Date().toISOString(),
    wipedFiles: wipe.deletedFiles,
    removedMappings: removedMaps,
    vendorsCrawled: vendors.length,
    seedAliasesCopied: seedAlias.copied,
    seedAliasesUnmatched: seedAlias.unmatched,
    totalGames: catalogue.length,
    thumbnailsDownloaded: downloaded,
    failed,
    missing: unresolved,
    duplicateGroups: [...hashToGames.values()].filter((g) => g.length > 1)
      .length,
    duplicateGameRefs: issues.duplicates.length,
    placeholders: issues.placeholders.length,
    http404: issues.http404.length,
    corrupted: issues.corrupted.length,
    zeroByte: issues.zeroByte.length,
    wrongAspect: issues.wrongAspect.length,
    providers,
    samples: {
      http404: issues.http404.slice(0, 20),
      placeholders: issues.placeholders.slice(0, 20),
      duplicates: issues.duplicates.slice(0, 20),
      wrongAspect: issues.wrongAspect.slice(0, 20),
      failed: issues.failed.slice(0, 20),
    },
  };

  fs.writeFileSync(OUT_REPORT, `${JSON.stringify(report, null, 2)}\n`);

  const md = [
    "# Game asset pipeline report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    `| Metric | Count |`,
    `|---|---:|`,
    `| Games found | ${report.totalGames} |`,
    `| Downloaded | ${report.thumbnailsDownloaded} |`,
    `| Failed | ${report.failed} |`,
    `| Missing on disk | ${report.missing} |`,
    `| Duplicate groups | ${report.duplicateGroups} |`,
    `| Placeholder-like | ${report.placeholders} |`,
    `| HTTP 404 | ${report.http404} |`,
    `| Corrupted | ${report.corrupted} |`,
    `| Zero-byte | ${report.zeroByte} |`,
    `| Wrong aspect | ${report.wrongAspect} |`,
    "",
    "## Per provider",
    "",
    "| Provider | Games found | Downloaded | Failed | Missing | Duplicates |",
    "|---|---:|---:|---:|---:|---:|",
    ...providers.map(
      (p) =>
        `| ${p.provider} | ${p.gamesFound} | ${p.downloaded} | ${p.failed} | ${p.missing} | ${p.duplicates} |`,
    ),
    "",
  ].join("\n");
  fs.writeFileSync(OUT_REPORT_MD, md);

  try {
    fs.unlinkSync(PROGRESS);
  } catch {
    // ignore
  }

  console.log("=== DONE ===");
  console.log(md);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
