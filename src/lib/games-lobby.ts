import type { Locale } from "@/config/site";
import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { getGameProviderUrlSlug } from "@/lib/game-paths";
import type { Game, GameCategory } from "@/types";

/** Initial / "Load more" page size for the Games lobby grid. */
export const GAMES_LOBBY_PAGE_SIZE = 120;

/**
 * Minimal card DTO for the Games lobby.
 * Intentionally omits descriptions, sourceImage, gameSource, sourceId, etc.
 */
export type GameLobbyItem = {
  id: string;
  slug: string;
  name: string;
  providerId: string;
  providerName: string;
  providerSlug: string;
  category: GameCategory;
  image: string;
  featured?: boolean;
  new?: boolean;
  rtp?: string;
};

export type GamesLobbyProviderOption = {
  id: string;
  name: string;
};

export type GamesLobbyQuery = {
  locale: Locale;
  category?: GameCategory | "all";
  providerId?: string;
  query?: string;
  offset?: number;
  limit?: number;
};

export type GamesLobbyResult = {
  items: GameLobbyItem[];
  total: number;
  offset: number;
  limit: number;
};

export function toGameLobbyItem(game: Game, locale: Locale): GameLobbyItem {
  const item: GameLobbyItem = {
    id: game.id,
    slug: game.slug,
    name: game.name[locale],
    providerId: game.providerId,
    providerName: game.providerName || game.providerId,
    providerSlug: getGameProviderUrlSlug(game),
    category: game.category,
    image: game.image,
  };

  if (game.featured) item.featured = true;
  if (game.new) item.new = true;
  if (game.rtp) item.rtp = game.rtp;

  return item;
}

function filterLobbyGames(
  category: GameCategory | "all",
  providerId: string,
  query: string,
): Game[] {
  const q = query.trim().toLowerCase();

  return games.filter((game) => {
    if (category !== "all" && game.category !== category) return false;
    if (providerId !== "all" && game.providerId !== providerId) return false;
    if (!q) return true;
    const haystack =
      `${game.name.en} ${game.name.zh} ${game.providerId} ${game.providerName ?? ""}`.toLowerCase();
    return haystack.includes(q);
  });
}

/** Server-side filter + paginate → slim lobby DTOs. */
export function queryGamesLobby(params: GamesLobbyQuery): GamesLobbyResult {
  const category = params.category ?? "all";
  const providerId = params.providerId && params.providerId.length > 0
    ? params.providerId
    : "all";
  const query = params.query ?? "";
  const offset = Math.max(0, params.offset ?? 0);
  const limit = Math.min(
    GAMES_LOBBY_PAGE_SIZE * 2,
    Math.max(1, params.limit ?? GAMES_LOBBY_PAGE_SIZE),
  );

  const filtered = filterLobbyGames(category, providerId, query);
  const slice = filtered.slice(offset, offset + limit);

  return {
    items: slice.map((game) => toGameLobbyItem(game, params.locale)),
    total: filtered.length,
    offset,
    limit,
  };
}

/** Unique providers present in the lobby catalogue (for the filter select). */
export function getGamesLobbyProviderOptions(): GamesLobbyProviderOption[] {
  const map = new Map<string, string>();

  for (const game of games) {
    if (map.has(game.providerId)) continue;
    map.set(
      game.providerId,
      game.providerName ||
        providers.find((item) => item.id === game.providerId)?.name ||
        game.providerId,
    );
  }

  return [...map.entries()]
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
