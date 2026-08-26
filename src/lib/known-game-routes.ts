import { games, getGameProviderUrlSlug } from "@/data/games";

const KNOWN_GAME_DETAIL_ROUTES = new Set(
  games.map(
    (game) => `${getGameProviderUrlSlug(game)}/${game.slug}`.toLowerCase(),
  ),
);

/** True when providerSlug/gameSlug is a real catalogue detail route. */
export function isKnownGameDetailRoute(
  providerSlug: string,
  gameSlug: string,
): boolean {
  return KNOWN_GAME_DETAIL_ROUTES.has(
    `${providerSlug}/${gameSlug}`.toLowerCase(),
  );
}
