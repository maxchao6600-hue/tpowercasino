import type { Game } from "@/types";
import localGameImageIndex from "@/data/local-game-image-index.json";
import { MIN_FULL_PROVIDER_LIBRARY } from "@/config/provider-library";

export { MIN_FULL_PROVIDER_LIBRARY };

const EXISTING = new Set(
  (localGameImageIndex as { existingPaths: string[] }).existingPaths.map((p) =>
    p.replace(/\\/g, "/"),
  ),
);

function normalizeImagePath(imagePath: string | undefined): string {
  return String(imagePath || "")
    .replace(/\\/g, "/")
    .trim();
}

/** Paths that must never be used as game cover art. */
export function isDisallowedGameCoverPath(imagePath: string): boolean {
  const path = normalizeImagePath(imagePath);
  if (!path) return true;
  if (path.includes("/images/games/_providers/")) return true;
  if (path.includes("/logo/")) return true;
  if (/\/providers\/[^/]+\.(webp|png|jpe?g)$/i.test(path)) return true;
  return false;
}

/**
 * A game may render only when it has indexed local cover art and is not a reference/seed row.
 */
export function hasRealGameArtwork(game: Game): boolean {
  if (game.gameSource === "reference") return false;
  if (game.id.startsWith("seed-")) return false;

  const image = normalizeImagePath(game.image);
  if (!image || isDisallowedGameCoverPath(image)) return false;
  return EXISTING.has(image);
}

export function filterGamesWithRealArtwork(games: Game[]): Game[] {
  return games.filter(hasRealGameArtwork);
}

export function getRealGameCount(games: Game[]): number {
  return filterGamesWithRealArtwork(games).length;
}
