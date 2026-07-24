import type { AuthorityPageContent, AuthorityRelatedLink } from "./types";

/** Shared internal link set for authority hubs — never leave pages isolated. */
export const authorityCoreLinks: AuthorityRelatedLink[] = [
  { href: "/", label: { en: "TPOWER Home", zh: "TPOWER官网首页" } },
  { href: "/games", label: { en: "Games Lobby", zh: "游戏大厅" } },
  { href: "/providers", label: { en: "Game Providers", zh: "游戏供应商" } },
  { href: "/vip", label: { en: "VIP Club", zh: "VIP俱乐部" } },
  { href: "/download", label: { en: "Download App", zh: "APP下载" } },
  { href: "/blog", label: { en: "Knowledge Center", zh: "知识中心" } },
  { href: "/news", label: { en: "Newsroom", zh: "新闻室" } },
  { href: "/contact", label: { en: "Support Center", zh: "客服中心" } },
  { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  { href: "/promotions", label: { en: "Promotions", zh: "优惠专区" } },
  {
    href: "/responsible-gaming",
    label: { en: "Responsible Gaming", zh: "负责任博彩" },
  },
];

export const authorityImages = {
  hero: "/images/hero.webp",
  lobby: "/images/cta/tpower-lobby-cta.webp",
  join: "/images/cta/tpower-join-cta.webp",
  performance: "/images/news/tpower-platform-performance-update.webp",
  live: "/images/news/tpower-live-casino-tables.webp",
  vip: "/images/promotions/tpower-vip-rewards.webp",
  payments: "/images/news/tpower-duitnow-ewallet-tips.webp",
} as const;

export function withCoreRelated(
  extra: AuthorityRelatedLink[] = [],
): AuthorityRelatedLink[] {
  const seen = new Set<string>();
  const merged = [...extra, ...authorityCoreLinks];
  return merged.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}

export type { AuthorityPageContent };
