/**
 * Report reference-game image match rates using the same index + rules as the app.
 * No downloads. No catalogue writes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEEDS_TS = path.join(ROOT, "src/data/provider-game-seeds.ts");
const INDEX = path.join(ROOT, "src/data/local-game-image-index.json");
const OVERRIDES = path.join(ROOT, "src/data/seed-image-overrides.json");

const PROVIDER_FOLDERS = {
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

const PROVIDER_IMAGE_SEARCH_FOLDERS = {
  "pragmatic-play": ["pragmatic"],
  "pg-soft": ["pgsoft", "pxplay", "vpower", "megah5", "acewin", "pegasus", "pragmatic"],
  evolution: ["evolution", "playtech"],
  jili: ["jili"],
  jdb: ["jdb"],
  "sexy-baccarat": ["sexy-gaming", "sexy"],
  "sexy-gaming": ["sexy-gaming", "sexy"],
  "dream-gaming": ["dream-gaming", "dg"],
  microgaming: ["microgaming", "playtech"],
  "playn-go": ["playngo", "playtech"],
  spribe: ["spribe", "jili", "jdb"],
  spadegaming: ["spadegaming"],
  habanero: ["habanero"],
  sbo: ["sbo", "maxbetibcbet", "wbet", "m9bet"],
};

const GAME_TITLE_ALIASES = {
  "sexy baccarat classic": ["baccarat-classic"],
  "sexy baccarat speed": ["baccarat-speed", "speed-baccarat"],
  "sexy baccarat squeeze": ["baccarat-squeeze", "squeeze-baccarat"],
  "ae sexy baccarat 1": ["baccarat-1", "ae-sexy-baccarat-1"],
  "ae sexy baccarat 2": ["baccarat-2", "ae-sexy-baccarat-2"],
  "ae sexy baccarat 3": ["baccarat-3", "ae-sexy-baccarat-3"],
  "ae sexy dragon tiger": ["dragontiger", "dragon-tiger"],
  "ae sexy roulette": ["roulette"],
  "ae sexy sicbo": ["sicbo", "sic-bo"],
  "dg live": ["dg-live"],
  "dg baccarat 1": ["dg-baccarat-1", "baccarat-1"],
  "dg baccarat 2": ["dg-baccarat-2", "baccarat-2"],
  "dg speed baccarat": ["dg-speed-baccarat", "speed-baccarat"],
  "dg roulette": ["dg-roulette", "roulette"],
  "dg dragon tiger": ["dg-dragon-tiger", "dragontiger", "dragon-tiger"],
  "dg sic bo": ["dg-sic-bo", "sicbo", "sic-bo"],
  "speed dragon tiger": ["dragontiger", "dragon-tiger"],
  "lucky roulette": ["roulette"],
  "egypts book of mystery": ["egypt-s-book-of-mystery", "book-of-mystery"],
  "gonzos treasure hunt": ["gonzo-s-treasure-hunt", "treasure-hunt"],
  "captains bounty": ["captain-s-bounty"],
  "casino holdem": ["casino-hold-em", "hold-em"],
  "thunderstruck ii": ["thunderstruck-2", "thunderstruck-ii"],
  "thunderstruck 2": ["thunderstruck-ii", "thunderstruck-2"],
};

const REPORT_PROVIDERS = [
  ["evolution", "Evolution"],
  ["pg-soft", "PG Soft"],
  ["microgaming", "Microgaming"],
  ["playn-go", "Play'n GO"],
  ["habanero", "Habanero"],
  ["spribe", "Spribe"],
  ["sbo", "SBO"],
  ["dream-gaming", "Dream Gaming"],
  ["sexy-gaming", "Sexy Gaming"],
  ["jili", "Jili"],
  ["jdb", "JDB"],
  ["pragmatic-play", "Pragmatic Play"],
  ["spadegaming", "Spadegaming"],
];

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

const index = JSON.parse(fs.readFileSync(INDEX, "utf8"));
const EXISTING = new Set(index.existingPaths);
const OVERRIDES_MAP =
  JSON.parse(fs.readFileSync(OVERRIDES, "utf8")).overrides ?? {};

function folderFromPath(imagePath) {
  const match = imagePath.match(/\/images\/games\/([^/]+)\//);
  return match?.[1] ?? "";
}

function rankPaths(paths, slug) {
  const primary = PROVIDER_FOLDERS[slug] || slugify(slug);
  const searchOrder = PROVIDER_IMAGE_SEARCH_FOLDERS[slug] ?? [primary];
  const score = (imagePath) => {
    const folder = folderFromPath(imagePath);
    const idx = searchOrder.indexOf(folder);
    if (idx >= 0) return idx;
    if (folder === primary) return 0;
    return 100 + searchOrder.length;
  };
  return [...paths].sort((a, b) => score(a) - score(b));
}

function pickBest(paths, slug) {
  const existing = paths.filter((p) => EXISTING.has(p));
  if (!existing.length) return null;
  return rankPaths(existing, slug)[0] ?? null;
}

function stemsForTitle(gameName) {
  const stems = new Set();
  const slug = slugify(gameName);
  if (slug) stems.add(slug);
  const norm = normName(gameName);
  for (const alias of GAME_TITLE_ALIASES[norm] ?? []) stems.add(alias);
  const strippedPrefixes = [
    /^(ae sexy|sexy baccarat|sexy gaming|sexy)\s+/i,
    /^(dg|dream gaming)\s+/i,
    /^(first person)\s+/i,
  ];
  let stripped = gameName;
  for (const re of strippedPrefixes) {
    const next = stripped.replace(re, "").trim();
    if (next && next !== stripped) {
      stripped = next;
      stems.add(slugify(stripped));
    }
  }
  const roman = gameName
    .replace(/\bX{0,3}IX\b/gi, "9")
    .replace(/\bX{0,3}VIII\b/gi, "8")
    .replace(/\bX{0,3}VII\b/gi, "7")
    .replace(/\bX{0,3}VI\b/gi, "6")
    .replace(/\bX{0,3}V\b/gi, "5")
    .replace(/\bX{0,3}IV\b/gi, "4")
    .replace(/\bX{0,3}III\b/gi, "3")
    .replace(/\bX{0,2}II\b/gi, "2");
  if (roman !== gameName) {
    stems.add(slugify(roman));
    for (const alias of GAME_TITLE_ALIASES[normName(roman)] ?? []) stems.add(alias);
  }
  return [...stems].filter(Boolean);
}

function resolveReference(slug, gameName) {
  const folder = PROVIDER_FOLDERS[slug] || slugify(slug);
  const stems = stemsForTitle(gameName);
  for (const stem of stems) {
    for (const key of [
      `seed-${slug}-${stem}`,
      `${slug}:${stem}`,
    ]) {
      const hit = OVERRIDES_MAP[key];
      if (hit && EXISTING.has(hit)) return hit;
    }
  }
  for (const stem of stems) {
    const hits = [
      `/images/games/${folder}/${stem}.webp`,
      `/images/games/${folder}/${stem}.v2.webp`,
      ...(index.byStem[stem] ?? []),
    ];
    const best = pickBest(hits, slug);
    if (best) return best;
  }
  const norm = normName(gameName);
  const catBest = pickBest(index.byCatalogueName[norm] ?? [], slug);
  if (catBest) return catBest;
  for (const alias of GAME_TITLE_ALIASES[norm] ?? []) {
    const aliasBest = pickBest(index.byStem[alias] ?? [], slug);
    if (aliasBest) return aliasBest;
  }
  return `/images/games/${folder}/${slugify(gameName)}.webp`;
}

function parseSeeds() {
  const text = fs.readFileSync(SEEDS_TS, "utf8");
  const blocks = {};
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const prov = line.match(/^\s*"?([a-z0-9-]+)"?:\s*\[/);
    if (prov) {
      current = prov[1];
      blocks[current] = [];
      continue;
    }
    if (!current) continue;
    const name = line.match(/name:\s*"([^"]+)"/);
    if (name) blocks[current].push(name[1]);
  }
  return blocks;
}

const seeds = parseSeeds();

for (const [slug, label] of REPORT_PROVIDERS) {
  const names = seeds[slug] ?? [];
  let matched = 0;
  let fallback = 0;
  for (const name of names) {
    const resolved = resolveReference(slug, name);
    if (EXISTING.has(resolved)) matched++;
    else fallback++;
  }
  console.log(label);
  console.log(`${names.length} games`);
  console.log(`matched artwork: ${matched}`);
  console.log(`provider-logo fallback: ${fallback}`);
  console.log("");
}
