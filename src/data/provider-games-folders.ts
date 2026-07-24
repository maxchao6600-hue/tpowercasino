/** Shared provider → public/images/games folder map (no heavy imports). */
export const PROVIDER_IMAGE_FOLDERS: Record<string, string> = {
  "pragmatic-play": "pragmatic",
  "pg-soft": "pgsoft",
  evolution: "evolution",
  jili: "jili",
  jdb: "jdb",
  "sexy-baccarat": "sexy-gaming",
  "sexy-gaming": "sexy-gaming",
  "dream-gaming": "dream-gaming",
  microgaming: "microgaming",
  "playn-go": "playngo",
  spribe: "spribe",
  spadegaming: "spadegaming",
  habanero: "habanero",
  sbo: "sbo",
};

function slugify(value: string): string {
  return String(value || "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

export function providerImageFolder(provider: {
  slug: string;
  id: string;
}): string {
  return (
    PROVIDER_IMAGE_FOLDERS[provider.slug] ||
    PROVIDER_IMAGE_FOLDERS[provider.id] ||
    slugify(provider.slug)
  );
}
