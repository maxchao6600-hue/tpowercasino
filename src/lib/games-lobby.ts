import type { Locale } from "@/config/site";
import lobbyIndexFile from "@/data/games-lobby-index.json";
import type { GameCategory } from "@/types";

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

type LobbyIndexRow = {
  id: string;
  slug: string;
  nameEn: string;
  nameZh: string;
  providerId: string;
  providerName: string;
  providerSlug: string;
  category: GameCategory;
  image: string;
  search: string;
  featured?: boolean;
  new?: boolean;
  rtp?: string;
};

type LobbyIndexFile = {
  count: number;
  items: LobbyIndexRow[];
  providerOptions: GamesLobbyProviderOption[];
  categoryCounts: Record<string, number>;
};

const lobbyIndex = lobbyIndexFile as LobbyIndexFile;

function toLobbyItem(row: LobbyIndexRow, locale: Locale): GameLobbyItem {
  const item: GameLobbyItem = {
    id: row.id,
    slug: row.slug,
    name: locale === "zh" ? row.nameZh : row.nameEn,
    providerId: row.providerId,
    providerName: row.providerName,
    providerSlug: row.providerSlug,
    category: row.category,
    image: row.image,
  };
  if (row.featured) item.featured = true;
  if (row.new) item.new = true;
  if (row.rtp) item.rtp = row.rtp;
  return item;
}

function filterLobbyRows(
  category: GameCategory | "all",
  providerId: string,
  query: string,
): LobbyIndexRow[] {
  const q = query.trim().toLowerCase();

  return lobbyIndex.items.filter((row) => {
    if (category !== "all" && row.category !== category) return false;
    if (providerId !== "all" && row.providerId !== providerId) return false;
    if (!q) return true;
    return row.search.includes(q);
  });
}

/** Server-side filter + paginate → slim lobby DTOs (no full Game catalogue). */
export function queryGamesLobby(params: GamesLobbyQuery): GamesLobbyResult {
  const category = params.category ?? "all";
  const providerId =
    params.providerId && params.providerId.length > 0
      ? params.providerId
      : "all";
  const query = params.query ?? "";
  const offset = Math.max(0, params.offset ?? 0);
  const limit = Math.min(
    GAMES_LOBBY_PAGE_SIZE * 2,
    Math.max(1, params.limit ?? GAMES_LOBBY_PAGE_SIZE),
  );

  const filtered = filterLobbyRows(category, providerId, query);
  const slice = filtered.slice(offset, offset + limit);

  return {
    items: slice.map((row) => toLobbyItem(row, params.locale)),
    total: filtered.length,
    offset,
    limit,
  };
}

/** Unique providers present in the lobby catalogue (for the filter select). */
export function getGamesLobbyProviderOptions(): GamesLobbyProviderOption[] {
  return lobbyIndex.providerOptions;
}

export function getGamesLobbyCategoryCounts(): Record<string, number> {
  return lobbyIndex.categoryCounts;
}

export function getGamesLobbyTotalCount(): number {
  return lobbyIndex.count;
}

/** Featured / new shelves from the slim index (avoids full Game[] on the hub). */
export function getLobbyShelfItems(
  locale: Locale,
  kind: "featured" | "new",
  limit = 12,
): GameLobbyItem[] {
  const rows = lobbyIndex.items.filter((row) =>
    kind === "featured" ? row.featured : row.new,
  );
  return rows.slice(0, limit).map((row) => toLobbyItem(row, locale));
}

export function getLobbyMosaicImages(limit = 16): string[] {
  const featured = lobbyIndex.items.filter((row) => row.featured);
  const source =
    featured.length >= 8 ? featured : lobbyIndex.items.slice(0, limit);
  return source.slice(0, limit).map((row) => row.image);
}
