import type { Game, GameCategory } from "@/types";
import {
  getProviderById,
  getProviderBySlug,
  getProviderCatalogueIds,
  providers,
} from "@/data/providers";
import { resolveProviderGames } from "@/data/provider-games";
import {
  filterGamesWithRealArtwork,
  getRealGameCount,
  MIN_FULL_PROVIDER_LIBRARY,
} from "@/lib/real-game-artwork";
import {
  getGameProviderUrlSlug,
  getGameDetailPath,
} from "@/lib/game-paths";
import catalogue from "@/data/games-catalogue.json";

export { MIN_FULL_PROVIDER_LIBRARY, getRealGameCount };
export { getGameProviderUrlSlug, getGameDetailPath };

const rawCatalogue = catalogue as Game[];

/**
 * Map live-crawl provider folders onto CMS provider ids where aliases match.
 * Unmapped studios stay as-is for the global games lobby.
 */
function remapCatalogueProviders(games: Game[]): Game[] {
  return games.map((game) => {
    const provider = providers.find((item) => {
      const aliases = getProviderCatalogueIds(item);
      return (
        aliases.includes(game.providerId) ||
        (game.providerFolder
          ? aliases.includes(game.providerFolder)
          : false)
      );
    });

    if (!provider) {
      return {
        ...game,
        gameSource: game.gameSource ?? "crawler",
      };
    }

    return {
      ...game,
      providerId: provider.id,
      providerName: provider.name,
      providerFolder: provider.slug,
      gameSource: game.gameSource ?? "crawler",
    };
  });
}

const remappedCatalogue = remapCatalogueProviders(rawCatalogue);

/** Crawled lobby games with verified local cover art only. */
export const games: Game[] = filterGamesWithRealArtwork(remappedCatalogue);

export function getFeaturedGames(): Game[] {
  return games.filter((item) => item.featured);
}

export function getNewGames(limit = 24): Game[] {
  return games.filter((item) => item.new).slice(0, limit);
}

export function getHotGames(limit = 24): Game[] {
  return games.filter((item) => item.featured || item.new).slice(0, limit);
}

export function getGamesByCategory(category: GameCategory | "all"): Game[] {
  if (category === "all") return games;
  return games.filter((item) => item.category === category);
}

/** Real playable games for a provider (verified cover art only). */
export function getGamesByProvider(providerIdOrSlug: string): Game[] {
  const provider =
    getProviderById(providerIdOrSlug) || getProviderBySlug(providerIdOrSlug);

  if (provider) {
    return filterGamesWithRealArtwork(
      resolveProviderGames(provider, remappedCatalogue),
    );
  }

  const needle = providerIdOrSlug.toLowerCase();
  return games.filter(
    (item) =>
      item.providerId.toLowerCase() === needle ||
      item.providerFolder?.toLowerCase() === needle,
  );
}

export function getRealGameCountByProvider(providerIdOrSlug: string): number {
  return getGamesByProvider(providerIdOrSlug).length;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((item) => item.slug === slug);
}

export function getGameByProviderAndSlug(
  providerSlug: string,
  gameSlug: string,
): Game | undefined {
  const needle = providerSlug.toLowerCase();
  return games.find((game) => {
    if (game.slug !== gameSlug) return false;
    const urlSlug = getGameProviderUrlSlug(game).toLowerCase();
    return (
      urlSlug === needle ||
      game.providerId.toLowerCase() === needle ||
      (game.providerFolder?.toLowerCase() === needle)
    );
  });
}

export function getSimilarGames(game: Game, limit = 6): Game[] {
  const sameProvider = games.filter(
    (item) =>
      item.id !== game.id &&
      (item.providerId === game.providerId ||
        item.providerFolder === game.providerFolder),
  );
  if (sameProvider.length >= limit) {
    return sameProvider.slice(0, limit);
  }
  const sameCategory = games.filter(
    (item) =>
      item.id !== game.id &&
      item.category === game.category &&
      !sameProvider.some((existing) => existing.id === item.id),
  );
  return [...sameProvider, ...sameCategory].slice(0, limit);
}

export function countGamesByCategory(): Record<GameCategory | "all", number> {
  const counts = {
    all: games.length,
    slots: 0,
    "live-casino": 0,
    sports: 0,
    fishing: 0,
    table: 0,
    crash: 0,
    lottery: 0,
    poker: 0,
    arcade: 0,
  } as Record<GameCategory | "all", number>;

  for (const game of games) {
    counts[game.category] += 1;
  }
  return counts;
}

/** Expose remapped crawl rows for scripts/tests without reference merge. */
export const crawledCatalogue: Game[] = remappedCatalogue;
