import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";

export type NavItem = {
  key: string;
  href: string;
  label: Record<Locale, string>;
  description?: Record<Locale, string>;
};

/** Primary navbar — money and content hubs surfaced; FAQ remains in footer. */
export const mainNavigation: NavItem[] = [
  {
    key: "home",
    href: "/",
    label: { en: "Home", zh: "首页" },
  },
  {
    key: "promotions",
    href: "/promotions",
    label: { en: "Promotions", zh: "优惠" },
  },
  {
    key: "games",
    href: "/games",
    label: { en: "Games", zh: "游戏" },
  },
  {
    key: "providers",
    href: "/providers",
    label: { en: "Providers", zh: "供应商" },
  },
  {
    key: "vip",
    href: "/vip",
    label: { en: "VIP", zh: "VIP" },
  },
  {
    key: "download",
    href: "/download",
    label: { en: "Download", zh: "下载" },
  },
  {
    key: "news",
    href: "/news",
    label: { en: "News", zh: "新闻" },
  },
  {
    key: "blog",
    href: "/blog",
    label: { en: "Blog", zh: "博客" },
  },
  {
    key: "contact",
    href: "/contact",
    label: { en: "Support", zh: "客服中心" },
  },
];

export const footerNavigation = {
  about: [
    { key: "about", href: "/about", label: { en: "About TPOWER", zh: "关于 TPOWER" } },
    {
      key: "why-choose",
      href: "/why-choose-tpower",
      label: { en: "Why Choose TPOWER", zh: "为什么选择TPOWER" },
    },
    {
      key: "customer-commitment",
      href: "/customer-commitment",
      label: { en: "Customer Commitment", zh: "客户承诺" },
    },
    { key: "affiliate", href: "/affiliate", label: { en: "Affiliate", zh: "联盟计划" } },
    { key: "vip", href: "/vip", label: { en: "VIP Club", zh: "VIP 俱乐部" } },
    { key: "news", href: "/news", label: { en: "News", zh: "新闻" } },
    { key: "blog", href: "/blog", label: { en: "Blog", zh: "博客" } },
  ],
  games: [
    { key: "games", href: "/games", label: { en: "All Games", zh: "全部游戏" } },
    { key: "slots", href: "/slots", label: { en: "Slots", zh: "老虎机" } },
    { key: "live", href: "/live-casino", label: { en: "Live Casino", zh: "真人娱乐" } },
    { key: "sports", href: "/sports", label: { en: "Sports", zh: "体育" } },
    { key: "fishing", href: "/fishing", label: { en: "Fishing", zh: "捕鱼" } },
    { key: "lottery", href: "/lottery", label: { en: "Lottery", zh: "彩票" } },
    { key: "poker", href: "/poker", label: { en: "Poker", zh: "扑克" } },
    { key: "arcade", href: "/arcade", label: { en: "Arcade", zh: "街机" } },
    { key: "crash", href: "/crash", label: { en: "Crash", zh: "爆点" } },
  ],
  support: [
    { key: "faq", href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    { key: "contact", href: "/contact", label: { en: "Support Center", zh: "客服中心" } },
    { key: "download", href: "/download", label: { en: "Download App", zh: "下载应用" } },
    { key: "apk", href: "/apk", label: { en: "APK", zh: "APK" } },
    {
      key: "payments",
      href: "/payment-methods",
      label: { en: "Payment Methods", zh: "支付方式" },
    },
    {
      key: "deposit-guide",
      href: "/deposit-guide",
      label: { en: "Deposit Guide", zh: "存款指南" },
    },
    {
      key: "withdrawal-guide",
      href: "/withdrawal-guide",
      label: { en: "Withdrawal Guide", zh: "提款指南" },
    },
    {
      key: "payment-security",
      href: "/payment-security",
      label: { en: "Payment Security", zh: "支付安全" },
    },
    {
      key: "deposit-withdrawal-faq",
      href: "/deposit-withdrawal-faq",
      label: { en: "Deposit & Withdrawal FAQ", zh: "存提款常见问题" },
    },
    { key: "providers", href: "/providers", label: { en: "Providers", zh: "供应商" } },
  ],
  legal: [
    {
      key: "responsible",
      href: "/responsible-gaming",
      label: { en: "Responsible Gaming", zh: "负责任博彩" },
    },
    {
      key: "fair-gaming",
      href: "/fair-gaming",
      label: { en: "Fair Gaming", zh: "公平游戏" },
    },
    {
      key: "editorial",
      href: "/editorial-policy",
      label: { en: "Editorial Policy", zh: "编辑政策" },
    },
    {
      key: "privacy-data",
      href: "/privacy-and-data-protection",
      label: { en: "Privacy & Data Protection", zh: "隐私与数据保护" },
    },
    {
      key: "aml-kyc",
      href: "/aml-kyc",
      label: { en: "AML & KYC", zh: "AML与KYC" },
    },
    {
      key: "privacy",
      href: "/privacy-policy",
      label: { en: "Privacy Policy", zh: "隐私政策" },
    },
    {
      key: "terms",
      href: "/terms-and-conditions",
      label: { en: "Terms & Conditions", zh: "条款与条件" },
    },
    {
      key: "cookies",
      href: "/cookies",
      label: { en: "Cookie Policy", zh: "Cookie 政策" },
    },
    { key: "security", href: "/security", label: { en: "Platform Security", zh: "平台安全" } },
  ],
} as const;

export function getLocalizedHref(locale: Locale, href: string): string {
  return localePath(locale, href);
}
