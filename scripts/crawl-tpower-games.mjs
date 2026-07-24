/**
 * Crawl official TPOWER lobby API (www.tpower3.com) and store local catalogue + covers.
 *
 * Run: node scripts/crawl-tpower-games.mjs
 *
 * Env:
 *   TPOWER_DOMAIN=www.tpower3.com
 *   TPOWER_PER_PAGE=500
 *   TPOWER_CONCURRENCY=10
 *   TPOWER_SKIP_DOWNLOAD=1   # metadata JSON only
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import CryptoJS from "crypto-js";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT_IMG = path.join(ROOT, "public/images/games");
const OUT_JSON = path.join(ROOT, "src/data/games-catalogue.json");
const OUT_RAW = path.join(ROOT, "src/data/games-catalogue.raw.json");
const OUT_VENDORS = path.join(ROOT, "src/data/tpower-vendors.json");
const TMP = path.join(ROOT, "scripts/.tmp-tpower3");

const DOMAIN = process.env.TPOWER_DOMAIN || "www.tpower3.com";
const API = process.env.TPOWER_API_URL || "https://d5y9.apit.5t1p6.com/";
const ORIGIN = process.env.TPOWER_ORIGIN || "https://www.tpower3.com";
const PER_PAGE = Number(process.env.TPOWER_PER_PAGE || 500);
const CONCURRENCY = Number(process.env.TPOWER_CONCURRENCY || 10);
const SKIP_DOWNLOAD = process.env.TPOWER_SKIP_DOWNLOAD === "1";

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
  return String(input || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['’]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72) || "game";
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
  // Prefer larger pragmatic square packs when present
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

async function downloadBest(url) {
  let best = null;
  for (const candidate of upgradeCandidates(url)) {
    try {
      const res = await fetch(candidate, {
        headers: { "user-agent": UA, referer: ORIGIN + "/", accept: "image/*" },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("image") && !/\.(png|jpe?g|webp|gif)(\?|$)/i.test(candidate)) {
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) continue;
      if (!best || buf.length > best.buf.length) {
        best = { buf, url: candidate, ct, bytes: buf.length };
      }
    } catch {
      // try next candidate
    }
  }
  return best;
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

function extFrom(url, ct = "") {
  if (/webp/i.test(ct) || /\.webp(\?|$)/i.test(url)) return "webp";
  if (/png/i.test(ct) || /\.png(\?|$)/i.test(url)) return "png";
  if (/gif/i.test(ct) || /\.gif(\?|$)/i.test(url)) return "gif";
  return "jpg";
}

async function crawlAllGames() {
  const first = await apiPost("api/myGamesByDomain", {
    domain: DOMAIN,
    page: 1,
    per_page: PER_PAGE,
  });
  const total = first.pagination?.total || first.data?.length || 0;
  const pages = first.pagination?.pages || 1;
  console.log(`catalogue total=${total} pages=${pages} per_page=${PER_PAGE}`);

  const games = [...(first.data || [])];
  for (let page = 2; page <= pages; page++) {
    const res = await apiPost("api/myGamesByDomain", {
      domain: DOMAIN,
      page,
      per_page: PER_PAGE,
    });
    games.push(...(res.data || []));
    console.log(`page ${page}/${pages} (+${(res.data || []).length}) total ${games.length}`);
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
  // Best-effort: re-fetch first page in zh for name map
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

function cleanupOldFlatPlaceholders() {
  if (!fs.existsSync(OUT_IMG)) return;
  for (const name of fs.readdirSync(OUT_IMG)) {
    const full = path.join(OUT_IMG, name);
    const stat = fs.statSync(full);
    if (stat.isFile() && /\.(webp|png|jpg|jpeg)$/i.test(name)) {
      fs.unlinkSync(full);
    }
  }
  // legacy flat copies
  const legacy = path.join(ROOT, "public/games");
  if (fs.existsSync(legacy)) {
    for (const name of fs.readdirSync(legacy)) {
      const full = path.join(legacy, name);
      if (fs.statSync(full).isFile() && /\.(webp|png|jpg|jpeg)$/i.test(name)) {
        fs.unlinkSync(full);
      }
    }
  }
}

async function main() {
  fs.mkdirSync(OUT_IMG, { recursive: true });
  fs.mkdirSync(TMP, { recursive: true });

  console.log("Crawling vendors…");
  const vendors = await crawlVendors();
  fs.writeFileSync(OUT_VENDORS, `${JSON.stringify(vendors, null, 2)}\n`);
  console.log("vendors", vendors.length);

  console.log("Crawling tagged shelves…");
  const tags = await crawlTagged();

  console.log("Crawling full game list…");
  const rawGames = await crawlAllGames();
  fs.writeFileSync(OUT_RAW, `${JSON.stringify({ domain: DOMAIN, fetchedAt: new Date().toISOString(), games: rawGames, tags, vendors }, null, 2)}\n`);

  const zhMap = await maybeZhNames(rawGames);
  const rtpById = new Map();
  for (const g of [...(tags.hot || []), ...(tags.new || [])]) {
    if (g?.id != null && g.rtp) rtpById.set(String(g.id), String(g.rtp));
  }

  // Dedupe by id
  const byId = new Map();
  for (const g of rawGames) byId.set(String(g.id), g);
  const unique = [...byId.values()];
  console.log("unique games", unique.length);

  cleanupOldFlatPlaceholders();

  const usedSlugs = new Set();
  const catalogue = unique.map((game) => {
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
      // Id-based path avoids slug collisions / wrong-thumb reuse
      image: `/images/games/${folder}/${id}.webp`,
      sourceImage: game.image || "",
      _rawImage: game.image || "",
    };
  });

  if (!SKIP_DOWNLOAD) {
    let done = 0;
    await mapPool(catalogue, CONCURRENCY, async (entry) => {
      const dir = path.join(OUT_IMG, entry.providerFolder);
      fs.mkdirSync(dir, { recursive: true });
      const fileStem = String(entry.sourceId);
      if (!entry._rawImage) {
        done += 1;
        return;
      }
      try {
        const best = await downloadBest(entry._rawImage);
        if (!best) {
          done += 1;
          return;
        }
        entry.sourceImage = best.url;
        const ext = extFrom(best.url, best.ct);
        fs.writeFileSync(path.join(dir, `${fileStem}.${ext}`), best.buf);

        // Game artwork must stay unbranded — never stamp TPOWER logo on thumbs.
        const outBuf = await sharp(best.buf).webp({ quality: 90 }).toBuffer();
        fs.writeFileSync(path.join(dir, `${fileStem}.webp`), outBuf);
      } catch (error) {
        console.warn(`image fail ${entry.slug}:`, error.message);
      }
      done += 1;
      if (done % 50 === 0 || done === catalogue.length) {
        console.log(`images ${done}/${catalogue.length}`);
      }
    });
  }

  for (const entry of catalogue) {
    delete entry._rawImage;
  }

  // Stable sort: hot/new first, then name
  catalogue.sort((a, b) => {
    const score = (g) => (g.featured ? 2 : 0) + (g.new ? 1 : 0) + (g.jackpot ? 1 : 0);
    const d = score(b) - score(a);
    if (d !== 0) return d;
    return a.name.en.localeCompare(b.name.en);
  });

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(catalogue, null, 2)}\n`);
  console.log("wrote", OUT_JSON, "games", catalogue.length);

  const byProvider = catalogue.reduce((acc, g) => {
    acc[g.providerFolder] = (acc[g.providerFolder] || 0) + 1;
    return acc;
  }, {});
  const byCategory = catalogue.reduce((acc, g) => {
    acc[g.category] = (acc[g.category] || 0) + 1;
    return acc;
  }, {});
  console.log("by provider", byProvider);
  console.log("by category", byCategory);
  console.log("featured", catalogue.filter((g) => g.featured).length);
  console.log("new", catalogue.filter((g) => g.new).length);
  console.log("jackpot", catalogue.filter((g) => g.jackpot).length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
