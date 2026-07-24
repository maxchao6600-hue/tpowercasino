import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SEEDS_PATH = path.join(ROOT, "src/data/provider-game-seeds.ts");
const OVERRIDES_PATH = path.join(ROOT, "src/data/seed-image-overrides.json");

function seedKey(providerSlug) {
  return providerSlug.includes("-") ? `"${providerSlug}"` : providerSlug;
}

/** Parse seed titles for one provider slug from provider-game-seeds.ts */
export function readSeedNames(providerSlug) {
  const src = fs.readFileSync(SEEDS_PATH, "utf8");
  const key = seedKey(providerSlug);
  if (new RegExp(`${key}:\\s*\\[\\s*\\],`).test(src)) return [];
  const blockRe = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\n\\s*\\],`, "m");
  const m = src.match(blockRe);
  if (!m) return [];
  const names = [];
  for (const line of m[1].split("\n")) {
    const nm = line.match(/name:\s*"([^"]+)"/);
    if (nm) names.push(nm[1]);
  }
  return names;
}

export function writeSeedsBlock(providerSlug, seeds, commentLines = []) {
  let src = fs.readFileSync(SEEDS_PATH, "utf8");
  const key = seedKey(providerSlug);
  const blockRe = new RegExp(
    `(?:\\/\\*[\\s\\S]*?\\*\\/\\s*)?${key}:\\s*\\[[\\s\\S]*?\\],`,
    "m",
  );
  const comment = commentLines.length
    ? `/**\n${commentLines.map((l) => ` * ${l}`).join("\n")}\n */\n  `
    : "";
  const body =
    seeds.length === 0
      ? "[]"
      : `[\n${seeds
          .map((s) => {
            const flags = [];
            if (s.featured) flags.push("featured: true");
            if (s.new) flags.push("new: true");
            if (s.jackpot) flags.push("jackpot: true");
            const extra = flags.length ? `, ${flags.join(", ")}` : "";
            const rtp = s.rtp ? `, rtp: "${s.rtp}"` : "";
            const zh = s.nameZh ? `, nameZh: "${s.nameZh}"` : "";
            return `    { name: "${s.name}"${zh}, category: "${s.category}"${rtp}${extra} },`;
          })
          .join("\n")}\n  ]`;
  if (!blockRe.test(src)) {
    throw new Error(`Seed block not found for ${providerSlug}`);
  }
  src = src.replace(blockRe, `${comment}${key}: ${body},`);
  fs.writeFileSync(SEEDS_PATH, src);
}

export function loadOverrides() {
  return JSON.parse(fs.readFileSync(OVERRIDES_PATH, "utf8"));
}

export function saveOverrides(data) {
  fs.writeFileSync(OVERRIDES_PATH, `${JSON.stringify(data, null, 2)}\n`);
}

export function setSeedOverrides(providerSlug, providerId, mappings) {
  const data = loadOverrides();
  const overrides = { ...(data.overrides || {}) };
  const prefix = `seed-${providerId}-`;
  for (const key of Object.keys(overrides)) {
    if (
      key.startsWith(prefix) ||
      key.startsWith(`${providerSlug}:`) ||
      key.startsWith(`${providerId}:`)
    ) {
      delete overrides[key];
    }
  }
  for (const [slug, imagePath] of Object.entries(mappings)) {
    overrides[`seed-${providerId}-${slug}`] = imagePath;
    overrides[`${providerSlug}:${slug}`] = imagePath;
    overrides[`${providerId}:${slug}`] = imagePath;
  }
  data.overrides = overrides;
  data.generatedAt = new Date().toISOString();
  data.note = `Provider-specific resolver (${providerSlug})`;
  saveOverrides(data);
}
