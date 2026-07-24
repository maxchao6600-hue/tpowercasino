import type { IntentRelatedLink } from "./types";

/** All Sprint 3 intent landing routes (unique; do not collide with product UIs). */
export const intentClusterLinks: IntentRelatedLink[] = [
  { href: "/tpower-login", label: { en: "TPOWER Login", zh: "TPower登录" } },
  { href: "/tpower-register", label: { en: "TPOWER Register", zh: "TPower注册" } },
  { href: "/tpower-apk", label: { en: "TPOWER APK", zh: "TPower APK下载" } },
  { href: "/mobile-app", label: { en: "TPOWER Mobile App", zh: "TPower手机APP" } },
  {
    href: "/tpower-promotions",
    label: { en: "TPOWER Promotions", zh: "TPower优惠" },
  },
  {
    href: "/welcome-bonus",
    label: { en: "Welcome Bonus", zh: "迎新奖金" },
  },
  { href: "/free-credit", label: { en: "Free Credit", zh: "免费信用" } },
  { href: "/cashback", label: { en: "Cashback", zh: "现金回馈" } },
  { href: "/slot-games", label: { en: "Slot Games", zh: "老虎机游戏" } },
  {
    href: "/tpower-live-casino",
    label: { en: "Live Casino", zh: "真人视讯" },
  },
  {
    href: "/tpower-sports",
    label: { en: "Sports Betting", zh: "体育博彩" },
  },
  { href: "/baccarat", label: { en: "Baccarat", zh: "百家乐" } },
  { href: "/roulette", label: { en: "Roulette", zh: "轮盘" } },
  {
    href: "/tpower-fishing",
    label: { en: "Fishing Games", zh: "捕鱼游戏" },
  },
  { href: "/tpower-crash", label: { en: "Crash Games", zh: "爆点游戏" } },
  { href: "/tpower-lottery", label: { en: "Lottery", zh: "彩票" } },
];

export const intentCoreLinks: IntentRelatedLink[] = [
  { href: "/", label: { en: "TPOWER Home", zh: "TPOWER官网首页" } },
  { href: "/games", label: { en: "Games Lobby", zh: "游戏大厅" } },
  { href: "/providers", label: { en: "Providers", zh: "游戏供应商" } },
  {
    href: "/payment-methods",
    label: { en: "Payment Center", zh: "支付中心" },
  },
  { href: "/deposit-guide", label: { en: "Deposit Guide", zh: "存款指南" } },
  { href: "/download", label: { en: "Download", zh: "下载" } },
  { href: "/vip", label: { en: "VIP Club", zh: "VIP俱乐部" } },
  { href: "/contact", label: { en: "Support Center", zh: "客服中心" } },
  { href: "/blog", label: { en: "Knowledge Center", zh: "知识中心" } },
  { href: "/news", label: { en: "Newsroom", zh: "新闻室" } },
  {
    href: "/responsible-gaming",
    label: { en: "Responsible Gaming", zh: "负责任博彩" },
  },
  { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  { href: "/login", label: { en: "Login (account)", zh: "登录入口" } },
  { href: "/register", label: { en: "Register (account)", zh: "注册入口" } },
  { href: "/promotions", label: { en: "Promotions Lobby", zh: "优惠大厅" } },
  { href: "/slots", label: { en: "Slots Lobby", zh: "老虎机大厅" } },
  {
    href: "/live-casino",
    label: { en: "Live Casino Lobby", zh: "真人视讯大厅" },
  },
];

export function withIntentRelated(
  extra: IntentRelatedLink[] = [],
): IntentRelatedLink[] {
  const seen = new Set<string>();
  const merged = [...extra, ...intentClusterLinks, ...intentCoreLinks];
  return merged.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}
