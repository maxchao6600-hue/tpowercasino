/**
 * Scan /public/images/games and catalogue paths — no downloads, no catalogue writes.
 * Output: src/data/local-game-image-index.json
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const GAMES_ROOT = path.join(ROOT, "public/images/games");
const CAT = path.join(ROOT, "src/data/games-catalogue.json");
const OUT = path.join(ROOT, "src/data/local-game-image-index.json");

function normName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
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

/** @type {Set<string>} */
const existingPaths = new Set();
/** @type {Map<string, string[]>} */
const byStem = new Map();
/** @type {Map<string, string[]>} */
const byCatalogueName = new Map();

if (fs.existsSync(GAMES_ROOT)) {
  for (const folder of fs.readdirSync(GAMES_ROOT, { withFileTypes: true })) {
    if (!folder.isDirectory() || folder.name.startsWith("_")) continue;
    for (const file of fs.readdirSync(path.join(GAMES_ROOT, folder.name))) {
      if (!/\.webp$/i.test(file)) continue;
      const abs = path.join(GAMES_ROOT, folder.name, file);
      if (fs.statSync(abs).size < 500) continue;
      const pub = `/images/games/${folder.name}/${file}`;
      existingPaths.add(pub);
      const stem = file
        .replace(/\.v2\.webp$/i, "")
        .replace(/\.webp$/i, "")
        .toLowerCase();
      if (!byStem.has(stem)) byStem.set(stem, []);
      byStem.get(stem).push(pub);
    }
  }
}

const catalogue = JSON.parse(fs.readFileSync(CAT, "utf8"));
for (const game of catalogue) {
  const image = String(game.image || "").replace(/\\/g, "/");
  if (!existsOk(image)) continue;
  existingPaths.add(image);
  const norm = normName(game.name?.en || game.slug);
  if (!norm) continue;
  if (!byCatalogueName.has(norm)) byCatalogueName.set(norm, []);
  const list = byCatalogueName.get(norm);
  if (!list.includes(image)) list.push(image);
}

const payload = {
  version: 1,
  generatedAt: new Date().toISOString(),
  existingPaths: [...existingPaths].sort(),
  byStem: Object.fromEntries(
    [...byStem.entries()].map(([k, v]) => [k, [...new Set(v)].sort()]),
  ),
  byCatalogueName: Object.fromEntries(
    [...byCatalogueName.entries()].map(([k, v]) => [k, [...new Set(v)].sort()]),
  ),
};

fs.writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      existingPaths: payload.existingPaths.length,
      stems: Object.keys(payload.byStem).length,
      catalogueNames: Object.keys(payload.byCatalogueName).length,
      out: "src/data/local-game-image-index.json",
    },
    null,
    2,
  ),
);
