import type { Provider } from "@/types";
import localGameImageIndex from "@/data/local-game-image-index.json";
import seedImageOverrides from "@/data/seed-image-overrides.json";
import {
  GAME_TITLE_ALIASES,
  PROVIDER_IMAGE_SEARCH_FOLDERS,
} from "@/data/game-title-aliases";
import { providerImageFolder } from "@/data/provider-games-folders";

type LocalIndex = {
  existingPaths: string[];
  byStem: Record<string, string[]>;
  byCatalogueName: Record<string, string[]>;
};

const index = localGameImageIndex as LocalIndex;
const EXISTING = new Set(index.existingPaths);
const OVERRIDES =
  (seedImageOverrides as { overrides?: Record<string, string> }).overrides ?? {};

export function slugifyGameTitle(value: string): string {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

export function normGameTitle(value: string): string {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function existsIndexed(imagePath: string): boolean {
  return EXISTING.has(imagePath.replace(/\\/g, "/"));
}

function folderFromPath(imagePath: string): string {
  const match = imagePath.match(/\/images\/games\/([^/]+)\//);
  return match?.[1] ?? "";
}

function rankPaths(paths: string[], provider: Provider): string[] {
  const primary = providerImageFolder(provider);
  const searchOrder = PROVIDER_IMAGE_SEARCH_FOLDERS[provider.slug] ??
    PROVIDER_IMAGE_SEARCH_FOLDERS[provider.id] ?? [primary];

  const score = (imagePath: string): number => {
    const folder = folderFromPath(imagePath);
    const idx = searchOrder.indexOf(folder);
    if (idx >= 0) return idx;
    if (folder === primary) return 0;
    return 100 + searchOrder.length;
  };

  return [...paths].sort((a, b) => score(a) - score(b));
}

function pickBest(paths: string[], provider: Provider): string | null {
  const existing = paths.filter((p) => existsIndexed(p));
  if (!existing.length) return null;
  return rankPaths(existing, provider)[0] ?? null;
}

function stemsForTitle(gameName: string): string[] {
  const stems = new Set<string>();
  const slug = slugifyGameTitle(gameName);
  if (slug) stems.add(slug);

  const norm = normGameTitle(gameName);
  for (const alias of GAME_TITLE_ALIASES[norm] ?? []) {
    if (alias) stems.add(alias);
  }

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
      stems.add(slugifyGameTitle(stripped));
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
    .replace(/\bX{0,2}II\b/gi, "2")
    .replace(/\bX\b/gi, "10");
  if (roman !== gameName) {
    stems.add(slugifyGameTitle(roman));
    const normRoman = normGameTitle(roman);
    for (const alias of GAME_TITLE_ALIASES[normRoman] ?? []) {
      if (alias) stems.add(alias);
    }
  }

  return [...stems].filter(Boolean);
}

function overrideFor(provider: Provider, gameName: string): string | null {
  for (const stem of stemsForTitle(gameName)) {
    const keys = [
      `seed-${provider.id}-${stem}`,
      `${provider.slug}:${stem}`,
      `${provider.id}:${stem}`,
    ];
    for (const key of keys) {
      const hit = OVERRIDES[key];
      if (hit && existsIndexed(hit)) return hit.replace(/\\/g, "/");
    }
  }
  return null;
}

function stemHits(stem: string, folder: string): string[] {
  const fromIndex = index.byStem[stem] ?? [];
  const direct = [
    `/images/games/${folder}/${stem}.webp`,
    `/images/games/${folder}/${stem}.v2.webp`,
  ];
  return [...new Set([...direct, ...fromIndex])];
}

/**
 * Resolve a reference-game image from local assets only.
 * Falls back to the canonical slug path when no artwork is indexed (GameCard may still onError → logo).
 */
export function resolveReferenceGameImage(
  provider: Provider,
  gameName: string,
): string {
  const folder = providerImageFolder(provider);
  const stems = stemsForTitle(gameName);

  const override = overrideFor(provider, gameName);
  if (override) return override;

  for (const stem of stems) {
    const hits = stemHits(stem, folder);
    const best = pickBest(hits, provider);
    if (best) return best;
  }

  const norm = normGameTitle(gameName);
  const catalogueHits = index.byCatalogueName[norm] ?? [];
  const catalogueBest = pickBest(catalogueHits, provider);
  if (catalogueBest) return catalogueBest;

  for (const alias of GAME_TITLE_ALIASES[norm] ?? []) {
    const aliasHits = index.byStem[alias] ?? [];
    const aliasBest = pickBest(aliasHits, provider);
    if (aliasBest) return aliasBest;
  }

  const slug = slugifyGameTitle(gameName) || "game";
  const canonical = `/images/games/${folder}/${slug}.webp`;
  if (existsIndexed(canonical)) return canonical;
  const v2 = `/images/games/${folder}/${slug}.v2.webp`;
  if (existsIndexed(v2)) return v2;

  return canonical;
}

export function referenceImageWouldFallback(
  provider: Provider,
  gameName: string,
): boolean {
  const resolved = resolveReferenceGameImage(provider, gameName);
  return !existsIndexed(resolved);
}
