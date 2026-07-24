import { PROVIDER_IMAGE_FOLDERS } from "@/data/provider-games-folders";

type GamePathInput = {
  slug: string;
  providerId: string;
  providerFolder?: string;
};

/**
 * Public URL segment for a provider in /games/{providerSlug}/{gameSlug}.
 * Prefers the image-folder alias (e.g. pragmatic-play → pragmatic).
 */
export function getGameProviderUrlSlug(game: GamePathInput): string {
  return (
    PROVIDER_IMAGE_FOLDERS[game.providerId] ||
    game.providerFolder ||
    game.providerId
  );
}

export function getGameDetailPath(game: GamePathInput): string {
  return `/games/${getGameProviderUrlSlug(game)}/${game.slug}`;
}
