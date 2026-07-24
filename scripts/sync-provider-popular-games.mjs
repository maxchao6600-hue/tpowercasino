import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const games = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/games-catalogue.json"), "utf8"),
);
const providersPath = path.join(ROOT, "src/data/providers.ts");
let text = fs.readFileSync(providersPath, "utf8");

const byProvider = new Map();
for (const game of games) {
  if (!byProvider.has(game.providerId)) byProvider.set(game.providerId, []);
  byProvider.get(game.providerId).push(game);
}

function pick(list) {
  return [...list]
    .sort((a, b) => {
      const score = (g) => (g.featured ? 2 : 0) + (g.new ? 1 : 0);
      return score(b) - score(a) || a.name.en.localeCompare(b.name.en);
    })
    .slice(0, 3)
    .map((g) => g.id);
}

for (const [providerId, list] of byProvider) {
  const ids = pick(list);
  if (ids.length === 0) continue;
  const re = new RegExp(
    `(id:\\s*"${providerId}"[\\s\\S]*?popularGameIds:\\s*)\\[[^\\]]*\\]`,
  );
  if (!re.test(text)) continue;
  text = text.replace(re, `$1${JSON.stringify(ids)}`);
  console.log(providerId, ids);
}

fs.writeFileSync(providersPath, text);
console.log("updated providers.ts");
