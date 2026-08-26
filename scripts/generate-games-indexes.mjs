/**
 * Build-time games indexes for Cloudflare Worker stability.
 *
 * - known-game-routes.json — providerSlug/gameSlug for middleware (no full Game[])
 * - games-lobby-index.json — slim lobby rows for API + SSR helpers
 *
 * Aligned with src/data/games.ts filter + getGameProviderUrlSlug.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "src", "data");

const PROVIDER_IMAGE_FOLDERS = {
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

const providersTs = readFileSync(path.join(DATA, "providers.ts"), "utf8");

/** @type {Map<string, { id: string; name: string; slug: string }>} */
const aliasMap = new Map();

const aliasBlock = providersTs.match(
  /PROVIDER_CATALOGUE_ALIASES[^=]*=\s*\{([\s\S]*?)\n\};/,
)?.[1];
/** @type {Record<string, string[]>} */
const catalogueAliases = {};
if (aliasBlock) {
  for (const m of aliasBlock.matchAll(
    /"([^"]+)":\s*\[([^\]]*)\]/g,
  )) {
    catalogueAliases[m[1]] = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  }
}

const providerBlocks = providersTs.split(/{\s*\n\s*id:\s*"/).slice(1);
/** @type {Array<{ id: string; name: string; slug: string }>} */
const providerList = [];
for (const block of providerBlocks) {
  const id = block.match(/^([^"]+)"/)?.[1];
  if (!id) continue;
  const slug = block.match(/\n\s*slug:\s*"([^"]+)"/)?.[1] || id;
  const name = block.match(/\n\s*name:\s*"([^"]+)"/)?.[1] || id;
  providerList.push({ id, slug, name });
  const extras = [
    ...(catalogueAliases[slug] ?? []),
    ...(catalogueAliases[id] ?? []),
  ];
  for (const alias of new Set([id, slug, ...extras])) {
    aliasMap.set(alias.toLowerCase(), { id, name, slug });
  }
}

const catalogue = JSON.parse(
  readFileSync(path.join(DATA, "games-catalogue.json"), "utf8"),
);
const imageIndex = JSON.parse(
  readFileSync(path.join(DATA, "local-game-image-index.json"), "utf8"),
);
const EXISTING = new Set(
  (imageIndex.existingPaths || []).map((p) => String(p).replace(/\\/g, "/")),
);

function hasRealArtwork(game) {
  if (game.gameSource === "reference") return false;
  if (String(game.id || "").startsWith("seed-")) return false;
  const image = String(game.image || "")
    .replace(/\\/g, "/")
    .trim();
  if (!image) return false;
  if (image.includes("/images/games/_providers/")) return false;
  if (image.includes("/logo/")) return false;
  if (/\/providers\/[^/]+\.(webp|png|jpe?g)$/i.test(image)) return false;
  return EXISTING.has(image);
}

function remap(game) {
  const hit =
    aliasMap.get(String(game.providerId || "").toLowerCase()) ||
    (game.providerFolder
      ? aliasMap.get(String(game.providerFolder).toLowerCase())
      : undefined);

  if (!hit) {
    return { ...game, gameSource: game.gameSource ?? "crawler" };
  }

  return {
    ...game,
    providerId: hit.id,
    providerName: hit.name,
    providerFolder: hit.slug,
    gameSource: game.gameSource ?? "crawler",
  };
}

function providerUrlSlug(game) {
  return (
    PROVIDER_IMAGE_FOLDERS[game.providerId] ||
    game.providerFolder ||
    game.providerId
  );
}

const filtered = catalogue.map(remap).filter(hasRealArtwork);

const routes = [
  ...new Set(
    filtered.map(
      (game) => `${providerUrlSlug(game)}/${game.slug}`.toLowerCase(),
    ),
  ),
];

const items = filtered.map((game) => {
  const item = {
    id: game.id,
    slug: game.slug,
    nameEn: game.name?.en || game.slug,
    nameZh: game.name?.zh || game.name?.en || game.slug,
    providerId: game.providerId,
    providerName: game.providerName || game.providerId,
    providerSlug: providerUrlSlug(game),
    category: game.category,
    image: game.image,
    search:
      `${game.name?.en || ""} ${game.name?.zh || ""} ${game.providerId} ${game.providerName || ""}`.toLowerCase(),
  };
  if (game.featured) item.featured = true;
  if (game.new) item.new = true;
  if (game.rtp) item.rtp = game.rtp;
  return item;
});

const providerOptionsMap = new Map();
for (const item of items) {
  if (!providerOptionsMap.has(item.providerId)) {
    providerOptionsMap.set(item.providerId, item.providerName);
  }
}

const categoryCounts = { all: items.length };
for (const item of items) {
  categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
}

const lobbyIndex = {
  generatedAt: new Date().toISOString(),
  count: items.length,
  items,
  providerOptions: [...providerOptionsMap.entries()]
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name)),
  categoryCounts,
};

mkdirSync(DATA, { recursive: true });
writeFileSync(
  path.join(DATA, "known-game-routes.json"),
  `${JSON.stringify(routes)}\n`,
);
writeFileSync(
  path.join(DATA, "games-lobby-index.json"),
  `${JSON.stringify(lobbyIndex)}\n`,
);

console.log(
  `[games-indexes] providersParsed=${providerList.length} routes=${routes.length} lobbyItems=${items.length}`,
);
