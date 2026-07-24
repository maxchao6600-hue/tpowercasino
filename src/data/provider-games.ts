import type { Game, GameSource, Provider } from "@/types";
import { getProviderCatalogueIds } from "@/data/providers";

export { providerImageFolder } from "@/data/provider-games-folders";

function tagCrawlerGame(game: Game): Game {
  const source: GameSource =
    game.sourceImage && !game.sourceId ? "image" : "crawler";
  return {
    ...game,
    gameSource: game.gameSource ?? source,
  };
}

function crawlerGamesForProvider(
  provider: Provider,
  catalogue: Game[],
): Game[] {
  const aliases = new Set(
    getProviderCatalogueIds(provider).map((value) => value.toLowerCase()),
  );

  return catalogue
    .filter((game) => {
      const id = game.providerId?.toLowerCase();
      const folder = game.providerFolder?.toLowerCase();
      return (id && aliases.has(id)) || (folder && aliases.has(folder));
    })
    .map((game) =>
      tagCrawlerGame(
        game.providerId === provider.id
          ? game
          : {
              ...game,
              providerId: provider.id,
              providerName: provider.name,
              providerFolder: provider.slug,
            },
      ),
    );
}

/** TPOWER crawl rows for a provider (reference seeds excluded from UI). */
export function resolveProviderGames(
  provider: Provider,
  catalogue: Game[],
): Game[] {
  return crawlerGamesForProvider(provider, catalogue);
}

export function getPopularGameIdsForProvider(
  provider: Provider,
  allGames: Game[],
  limit = 3,
): string[] {
  const library = resolveProviderGames(provider, allGames);
  const preferred = library.filter((game) => game.featured || game.new);
  const pool = preferred.length >= limit ? preferred : library;
  return pool.slice(0, limit).map((game) => game.id);
}
