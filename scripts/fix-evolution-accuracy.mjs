/**
 * Search every official TPOWER vendor shelf for Evolution seed titles.
 * Accuracy-first: only exact / near-exact name matches with real image URLs.
 */
import fs from "node:fs";
import path from "node:path";
import CryptoJS from "crypto-js";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "scripts/evolution-accuracy");
const SEEDS_TS = path.join(ROOT, "src/data/provider-game-seeds.ts");

const KEYS = {
  md5: "&W7e1vRWRH02jZIB",
  aes: "M53B?gQhkRtSeQZ^",
  iv: "4339794120398193",
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

async function api(endpoint, payload) {
  const params = encrypt(JSON.stringify(payload));
  const key = CryptoJS.MD5(params + KEYS.md5).toString();
  const res = await fetch("https://d5y9.apit.5t1p6.com/" + endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://www.tpower3.com",
      referer: "https://www.tpower3.com/",
    },
    body: JSON.stringify({ params, key }),
  });
  return res.json();
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function normName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function parseEvolutionSeeds() {
  const text = fs.readFileSync(SEEDS_TS, "utf8");
  const lines = text.split(/\r?\n/);
  const out = [];
  let inEvo = false;
  for (const line of lines) {
    if (/^\s*evolution:\s*\[/.test(line)) {
      inEvo = true;
      continue;
    }
    if (inEvo && /^\s*[a-z0-9_-]+:\s*\[/.test(line)) break;
    if (!inEvo) continue;
    const m = line.match(/name:\s*"([^"]+)"/);
    if (m) out.push(m[1]);
  }
  return out;
}

async function fetchAllVendorGames(vendorId) {
  const all = [];
  let page = 1;
  for (;;) {
    const r = await api("frontend/api/game/list", {
      domain: "www.tpower3.com",
      page,
      per_page: 200,
      vendor_id: vendorId,
    });
    const games = r.data?.games || [];
    all.push(...games);
    const total = r.data?.pagination?.total || all.length;
    if (all.length >= total || games.length < 200) break;
    page += 1;
    if (page > 40) break;
  }
  return all;
}

function scoreMatch(seedName, gameName) {
  const a = normName(seedName);
  const b = normName(gameName);
  if (!a || !b) return 0;
  if (a === b) return 100;
  if (b.startsWith(a) || a.startsWith(b)) return 90;
  // token containment
  const at = a.split(" ");
  const bt = new Set(b.split(" "));
  const hit = at.filter((t) => t.length > 2 && bt.has(t)).length;
  if (hit === at.length && at.length >= 2) return 85;
  if (b.includes(a) || a.includes(b)) return 70;
  return 0;
}

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.join(ROOT, "public/images/games/evolution"), {
  recursive: true,
});

const seeds = parseEvolutionSeeds();
console.log("Evolution seeds:", seeds.length);

const vendors = (await api("api/newVendorsByDomain", { domain: "www.tpower3.com" }))
  .data;
console.log("Official vendors:", vendors.length);

const officialIndex = [];
for (const v of vendors) {
  process.stdout.write(`  shelf ${v.name}… `);
  try {
    const games = await fetchAllVendorGames(v.id);
    console.log(games.length);
    for (const g of games) {
      if (!g?.image || !g?.name) continue;
      officialIndex.push({
        id: g.id,
        name: g.name,
        image: g.image,
        vendor_id: v.id,
        vendor_name: v.name,
      });
    }
  } catch (err) {
    console.log("FAIL", err.message);
  }
}

console.log("Official games indexed:", officialIndex.length);

const matches = [];
const unmatched = [];

for (const seed of seeds) {
  let best = null;
  for (const g of officialIndex) {
    const score = scoreMatch(seed, g.name);
    if (score < 85) continue;
    if (!best || score > best.score) best = { ...g, score, seed };
  }
  if (best) matches.push(best);
  else unmatched.push(seed);
}

console.log("Exact/strong matches:", matches.length);
console.log("Unmatched seeds:", unmatched.length);
console.log(
  "Matches:",
  matches.map((m) => `${m.seed} ← ${m.vendor_name}/${m.name} (${m.score})`),
);
console.log("Unmatched:", unmatched);

fs.writeFileSync(
  path.join(OUT, "official-match.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      seedCount: seeds.length,
      officialGameCount: officialIndex.length,
      matches,
      unmatched,
      note: "Evolution is not an official TPOWER lobby vendor. Matches are Evolution seed titles found on other official shelves.",
    },
    null,
    2,
  ),
);

// Download ONLY matched official thumbs into evolution/{slug}.webp
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function download(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": UA,
      referer: "https://www.tpower3.com/",
      accept: "image/*",
    },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).metadata();
  return buf;
}

const results = [];
const hashes = new Map();

for (const m of matches) {
  const slug = slugify(m.seed);
  const abs = path.join(ROOT, "public/images/games/evolution", `${slug}.webp`);
  try {
    const buf = await download(m.image);
    const webp = await sharp(buf)
      .rotate()
      .resize({ width: 640, height: 640, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 92 })
      .toBuffer();
    const sha = (await import("node:crypto")).createHash("sha256").update(webp).digest("hex");
    if (!hashes.has(sha)) hashes.set(sha, []);
    hashes.get(sha).push(slug);
    fs.writeFileSync(abs, webp);
    results.push({
      seed: m.seed,
      slug,
      officialName: m.name,
      vendor: m.vendor_name,
      sourceId: m.id,
      sourceUrl: m.image,
      local: `/images/games/evolution/${slug}.webp`,
      score: m.score,
      status: "ok",
      sha256: sha,
    });
    console.log("ok", slug, "←", m.vendor_name, m.name);
  } catch (err) {
    results.push({
      seed: m.seed,
      slug,
      status: "download-failed",
      error: String(err.message || err),
      sourceUrl: m.image,
    });
    console.log("FAIL", slug, err.message);
  }
}

const dupGroups = [...hashes.entries()].filter(([, s]) => s.length > 1);

fs.writeFileSync(
  path.join(OUT, "results.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      matchedDownloaded: results.filter((r) => r.status === "ok").length,
      unmatchedSeeds: unmatched,
      duplicateGroups: dupGroups.map(([sha, slugs]) => ({ sha, slugs })),
      results,
    },
    null,
    2,
  ),
);

console.log(
  JSON.stringify(
    {
      matchedDownloaded: results.filter((r) => r.status === "ok").length,
      unmatched: unmatched.length,
      duplicateGroups: dupGroups.length,
      out: OUT,
    },
    null,
    2,
  ),
);
