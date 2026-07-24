export type MarqueeProvider = {
  id: string;
  name: string;
  /** Static public path, or null for typography fallback */
  logo: string | null;
  href?: string;
};

/**
 * Static Official Game Providers marquee data.
 * No filesystem access — safe for client components.
 */
export const providerMarqueeItems: MarqueeProvider[] = [
  {
    id: "pragmatic-play",
    name: "Pragmatic Play",
    logo: "/images/providers/pragmatic-play.png",
    href: "/providers/pragmatic-play",
  },
  {
    id: "pg-soft",
    name: "PG Soft",
    logo: "/images/providers/pg-soft.png",
    href: "/providers/pg-soft",
  },
  {
    id: "evolution",
    name: "Evolution",
    logo: "/images/providers/evolution.png",
    href: "/providers/evolution",
  },
  {
    id: "jili",
    name: "JILI",
    logo: "/images/providers/jili.png",
    href: "/providers/jili",
  },
  {
    id: "spadegaming",
    name: "Spadegaming",
    logo: "/images/providers/spadegaming.png",
    href: "/providers/spadegaming",
  },
  { id: "cq9", name: "CQ9", logo: null },
  {
    id: "playtech",
    name: "Playtech",
    logo: "/images/providers/playtech.png",
  },
  { id: "netent", name: "NetEnt", logo: null },
  {
    id: "microgaming",
    name: "Microgaming",
    logo: "/images/providers/microgaming.png",
    href: "/providers/microgaming",
  },
  {
    id: "habanero",
    name: "Habanero",
    logo: null,
    href: "/providers/habanero",
  },
  {
    id: "spribe",
    name: "Spribe",
    logo: "/images/providers/spribe.png",
    href: "/providers/spribe",
  },
  {
    id: "sbo",
    name: "SBO",
    logo: "/images/providers/sbo.png",
    href: "/providers/sbo",
  },
  {
    id: "live22",
    name: "Live22",
    logo: "/images/providers/live22.png",
  },
  {
    id: "sexy-gaming",
    name: "Sexy Gaming",
    logo: "/images/providers/sexy-gaming.png",
    href: "/providers/sexy-gaming",
  },
  {
    id: "dream-gaming",
    name: "Dream Gaming",
    logo: "/images/providers/dream-gaming.png",
    href: "/providers/dream-gaming",
  },
  { id: "wm-casino", name: "WM Casino", logo: null },
  { id: "sa-gaming", name: "SA Gaming", logo: null },
  {
    id: "asia-gaming",
    name: "Asia Gaming",
    logo: "/images/providers/asia-gaming.png",
  },
  { id: "kingmaker", name: "Kingmaker", logo: null },
  { id: "yggdrasil", name: "YGGDRASIL", logo: null },
];

/** Alias matching the requested static export name. */
export const providerMarquee = providerMarqueeItems;
