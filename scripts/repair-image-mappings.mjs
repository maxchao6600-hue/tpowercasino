/**
 * Revert unsafe fuzzy remaps; keep only exact stem / exact name matches.
 * No downloads.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const CAT = path.join(ROOT, "src/data/games-catalogue.json");
const MAP = path.join(ROOT, "src/data/game-thumbnail-map.json");
const SEEDS_TS = path.join(ROOT, "src/data/provider-game-seeds.ts");
const OVERRIDE = path.join(ROOT, "src/data/seed-image-overrides.json");
const REPORT = path.join(ROOT, "scripts/_mapping-repair-report.json");
const REPORT_MD = path.join(ROOT, "scripts/_mapping-repair-report.md");

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

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function existsOk(imagePath) {
  const abs = path.join(
    ROOT,
    "public",
    String(imagePath || "")
      .replace(/\\/g, "/")
      .replace(/^\//, ""),
  );
  try {
    return fs.existsSync(abs) && fs.statSync(abs).size > 500;
  } catch {
    return false;
  }
}

function buildStemIndex() {
  /** @type {Map<string, string[]>} */
  const byStem = new Map();
  if (!fs.existsSync(GAMES_ROOT)) return byStem;
  for (const folder of fs.readdirSync(GAMES_ROOT, { withFileTypes: true })) {
    if (!folder.isDirectory() || folder.name.startsWith("_")) continue;
    for (const file of fs.readdirSync(path.join(GAMES_ROOT, folder.name))) {
      if (!/\.webp$/i.test(file)) continue;
      const abs = path.join(GAMES_ROOT, folder.name, file);
      if (fs.statSync(abs).size < 500) continue;
      const stem = file
        .replace(/\.v2\.webp$/i, "")
        .replace(/\.webp$/i, "")
        .toLowerCase();
      const pub = `/images/games/${folder.name}/${file}`;
      if (!byStem.has(stem)) byStem.set(stem, []);
      byStem.get(stem).push(pub);
    }
  }
  return byStem;
}

/** Exact stem only — never substring fuzzy. Prefer same provider folder. */
function exactStemMatch(gameName, preferredFolder, byStem) {
  const stem = slugify(gameName);
  if (!stem) return null;
  const hits = byStem.get(stem) || [];
  if (!hits.length) return null;
  const preferred = hits.find((p) => p.includes(`/games/${preferredFolder}/`));
  return preferred || (hits.length === 1 ? hits[0] : hits[0]);
}

function parseSeeds() {
  const text = fs.readFileSync(SEEDS_TS, "utf8");
  const out = [];
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const prov = line.match(/^\s*"([^"]+)":\s*\[/);
    if (prov) {
      current = prov[1];
      continue;
    }
    const name = line.match(/name:\s*"([^"]+)"/);
    if (current && name) {
      const folder = PROVIDER_FOLDERS[current] || slugify(current);
      const file = `${slugify(name[1])}.webp`;
      out.push({
        provider: current,
        game: name[1],
        gameId: `seed-${current}-${slugify(name[1])}`,
        expected: `/images/games/${folder}/${file}`,
        folder,
        stem: slugify(name[1]),
      });
    }
  }
  return out;
}

const byStem = buildStemIndex();
const catalogue = JSON.parse(fs.readFileSync(CAT, "utf8"));
const mapJson = JSON.parse(fs.readFileSync(MAP, "utf8"));
const mapEntries = mapJson.entries || {};

const failures = [];
const repairs = [];

// Restore catalogue canonical id paths, then exact-remap only
for (const g of catalogue) {
  const folder = g.providerFolder || PROVIDER_FOLDERS[g.providerId] || g.providerId;
  const canonical = `/images/games/${folder}/${g.sourceId}.webp`;
  const nameStem = slugify(g.name?.en || g.slug);

  // Reset to canonical id path (correct mapping contract)
  g.image = canonical;

  const key = `${g.providerId}:${g.sourceId}`;
  const exists = existsOk(canonical);

  if (exists) {
    mapEntries[key] = {
      providerId: g.providerId,
      gameId: g.id,
      sourceId: g.sourceId,
      image: canonical,
      sourceUrl: g.sourceImage || "",
      status: "ok",
    };
    continue;
  }

  // Exact filename stem match only (e.g. thunderstruck-ii.webp somewhere)
  const exact = exactStemMatch(g.name?.en || g.slug, folder, byStem);
  if (exact && exact !== canonical) {
    g.image = exact;
    mapEntries[key] = {
      providerId: g.providerId,
      gameId: g.id,
      sourceId: g.sourceId,
      image: exact,
      sourceUrl: g.sourceImage || "",
      status: "ok",
      repairedAt: new Date().toISOString(),
      repairReason: "exact-stem-remap",
    };
    repairs.push({
      game: g.name?.en || g.slug,
      provider: g.providerId,
      sourceId: g.sourceId,
      expectedImage: canonical,
      actualMappedFile: exact,
      exists: true,
      reason: "canonical-id-file-missing; exact stem found elsewhere",
    });
    continue;
  }

  mapEntries[key] = {
    providerId: g.providerId,
    gameId: g.id,
    sourceId: g.sourceId,
    image: canonical,
    sourceUrl: g.sourceImage || "",
    status: "missing",
  };
  failures.push({
    game: g.name?.en || g.slug,
    provider: g.providerId,
    sourceId: g.sourceId,
    expectedImage: canonical,
    actualMappedFile: canonical,
    exists: false,
    reason: "canonical file missing; no exact-stem local match",
    lookup: "GameCard → game.image",
  });
}

// Seeds: exact stem only
const seedOverrides = {};
for (const s of parseSeeds()) {
  if (existsOk(s.expected)) continue;
  const exact = exactStemMatch(s.game, s.folder, byStem);
  if (exact) {
    seedOverrides[s.gameId] = exact;
    seedOverrides[`${s.provider}:${s.stem}`] = exact;
    repairs.push({
      game: s.game,
      provider: s.provider,
      sourceId: null,
      expectedImage: s.expected,
      actualMappedFile: exact,
      exists: true,
      reason: "seed slug path missing; exact stem found on disk",
    });
  } else {
    failures.push({
      game: s.game,
      provider: s.provider,
      sourceId: null,
      expectedImage: s.expected,
      actualMappedFile: s.expected,
      exists: false,
      reason:
        "seed path missing; no exact-stem file on disk (cannot repair mapping without an asset)",
      lookup:
        "providerGameImagePath → seed slug; not in game-thumbnail-map.json",
    });
  }
}

fs.writeFileSync(CAT, `${JSON.stringify(catalogue, null, 2)}\n`);
mapJson.entries = mapEntries;
mapJson.version = 5;
mapJson.repairedAt = new Date().toISOString();
mapJson.repairNote =
  "Exact-stem mapping repair only. Fuzzy remaps reverted. GameCard uses game.image; seeds use overrides.";
fs.writeFileSync(MAP, `${JSON.stringify(mapJson, null, 2)}\n`);
fs.writeFileSync(
  OVERRIDE,
  `${JSON.stringify(
    {
      version: 2,
      generatedAt: new Date().toISOString(),
      note: "Exact stem matches only — no fuzzy remaps",
      overrides: seedOverrides,
    },
    null,
    2,
  )}\n`,
);

const thunder = {
  game: "Thunderstruck II",
  provider: "microgaming",
  sourceId: null,
  expectedImage: "/images/games/microgaming/thunderstruck-ii.webp",
  actualMappedFile: "/images/games/microgaming/thunderstruck-ii.webp",
  exists: existsOk("/images/games/microgaming/thunderstruck-ii.webp"),
  mapEntry: mapEntries["microgaming:thunderstruck-ii"] || null,
  localExactStem: byStem.get("thunderstruck-ii") || [],
  reason: existsOk("/images/games/microgaming/thunderstruck-ii.webp")
    ? "ok"
    : "file missing; not in map; no local exact stem — GameCard onError → provider logo placeholder",
};

const report = {
  generatedAt: new Date().toISOString(),
  reactLookup: {
    primary: "GameCard uses game.image only",
    mapFile: "game-thumbnail-map.json is NOT imported by React",
    seeds: "providerGameImagePath + seed-image-overrides.json",
    placeholder: "onError → provider.logo or /images/games/_providers/{slug}.webp",
  },
  thunderstruckII: thunder,
  repaired: repairs.length,
  stillFailing: failures.length,
  seedOverrides: Object.keys(seedOverrides).length,
  repairs,
  failures,
};

fs.writeFileSync(REPORT, `${JSON.stringify(report, null, 2)}\n`);

const md = [
  "# Image mapping repair report (exact-stem only)",
  "",
  `Generated: ${report.generatedAt}`,
  "",
  "No downloads. Fuzzy remaps were reverted.",
  "",
  "## React lookup",
  "",
  "1. `GameCard` renders `game.image`",
  "2. If load fails → `onError` → provider logo / `_providers` placeholder",
  "3. `game-thumbnail-map.json` is **not** read by any React component",
  "4. Seeds resolve via `providerGameImagePath()` + `seed-image-overrides.json`",
  "",
  "## Example: Thunderstruck II (Microgaming)",
  "",
  `| Field | Value |`,
  `|---|---|`,
  `| Provider | microgaming |`,
  `| sourceId | _(seed — none)_ |`,
  `| Expected | \`/images/games/microgaming/thunderstruck-ii.webp\` |`,
  `| Map entry | **absent** (seeds never written to map) |`,
  `| Exists? | **no** |`,
  `| Local exact stem | none |`,
  `| Reason | Seed maps to slug path; folder purged / never downloaded; React falls back to placeholder |`,
  "",
  "## Summary",
  "",
  `| Metric | Count |`,
  `|---|---:|`,
  `| Exact remaps applied | ${repairs.length} |`,
  `| Seed overrides | ${Object.keys(seedOverrides).length / 2} games |`,
  `| Still missing (no file to map to) | ${failures.length} |`,
  "",
  "## Failures",
  "",
  "| Game | Expected image file | Actual mapped file | Exists? | Reason |",
  "|---|---|---|---|---|",
  ...failures.map(
    (f) =>
      `| ${String(f.game).replace(/\|/g, "/")} | \`${f.expectedImage}\` | \`${f.actualMappedFile}\` | no | ${f.reason} |`,
  ),
  "",
  "## Exact remaps",
  "",
  "| Game | Expected | Mapped to | Reason |",
  "|---|---|---|---|",
  ...repairs.map(
    (r) =>
      `| ${String(r.game).replace(/\|/g, "/")} | \`${r.expectedImage}\` | \`${r.actualMappedFile}\` | ${r.reason} |`,
  ),
  "",
];

fs.writeFileSync(REPORT_MD, md.join("\n"));
console.log(
  JSON.stringify(
    {
      repaired: repairs.length,
      seedOverrideGames: Object.keys(seedOverrides).length / 2,
      stillFailing: failures.length,
      thunderstruckII: thunder,
      reportMd: "scripts/_mapping-repair-report.md",
    },
    null,
    2,
  ),
);
