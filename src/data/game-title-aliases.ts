/**
 * Alternative stems / normalized titles for reference-game image lookup.
 * Keys are normalized English titles (see normGameTitle).
 */
export const GAME_TITLE_ALIASES: Record<string, string[]> = {
  "sexy baccarat classic": ["baccarat-classic"],
  "sexy baccarat speed": ["baccarat-speed", "speed-baccarat"],
  "sexy baccarat squeeze": ["baccarat-squeeze", "squeeze-baccarat"],
  "ae sexy baccarat 1": ["baccarat-1", "ae-sexy-baccarat-1"],
  "ae sexy baccarat 2": ["baccarat-2", "ae-sexy-baccarat-2"],
  "ae sexy baccarat 3": ["baccarat-3", "ae-sexy-baccarat-3"],
  "ae sexy dragon tiger": ["dragontiger", "dragon-tiger"],
  "ae sexy roulette": ["roulette"],
  "ae sexy sicbo": ["sicbo", "sic-bo"],
  "dg live": ["dg-live"],
  "dg baccarat 1": ["dg-baccarat-1", "baccarat-1"],
  "dg baccarat 2": ["dg-baccarat-2", "baccarat-2"],
  "dg speed baccarat": ["dg-speed-baccarat", "speed-baccarat"],
  "dg roulette": ["dg-roulette", "roulette"],
  "dg dragon tiger": ["dg-dragon-tiger", "dragontiger", "dragon-tiger"],
  "dg sic bo": ["dg-sic-bo", "sicbo", "sic-bo"],
  "speed dragon tiger": ["dragontiger", "dragon-tiger"],
  "lucky roulette": ["roulette"],
  "egypts book of mystery": ["egypt-s-book-of-mystery", "book-of-mystery"],
  "gonzos treasure hunt": ["gonzo-s-treasure-hunt", "treasure-hunt"],
  "captains bounty": ["captain-s-bounty"],
  "casino holdem": ["casino-hold-em", "hold-em"],
  "thunderstruck ii": ["thunderstruck-2", "thunderstruck-ii"],
  "thunderstruck 2": ["thunderstruck-ii", "thunderstruck-2"],
};

/** Folder search order when multiple local files share a stem or catalogue name. */
export const PROVIDER_IMAGE_SEARCH_FOLDERS: Record<string, string[]> = {
  "pragmatic-play": ["pragmatic"],
  "pg-soft": ["pgsoft", "pxplay", "vpower", "megah5", "acewin", "pegasus", "pragmatic"],
  evolution: ["evolution", "playtech"],
  jili: ["jili"],
  jdb: ["jdb"],
  "sexy-baccarat": ["sexy-gaming", "sexy"],
  "sexy-gaming": ["sexy-gaming", "sexy"],
  "dream-gaming": ["dream-gaming", "dg"],
  microgaming: ["microgaming", "playtech"],
  "playn-go": ["playngo", "playtech"],
  spribe: ["spribe", "jili", "jdb"],
  spadegaming: ["spadegaming"],
  habanero: ["habanero"],
  sbo: ["sbo", "maxbetibcbet", "wbet", "m9bet"],
};
