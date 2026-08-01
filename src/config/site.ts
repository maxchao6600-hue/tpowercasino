export const siteConfig = {
  name: "TPOWER Malaysia",
  shortName: "TPOWER",
  tagline: {
    en: "Official Online Casino Platform",
    zh: "官方线上博彩平台",
  },
  description: {
    en: "TPOWER Malaysia is the official online casino platform for slots, live casino, and sports betting — secure banking, fast withdrawals, and premium mobile gaming built for Malaysian players.",
    zh: "TPOWER Malaysia 官方线上博彩平台，提供老虎机、真人视讯与体育博彩——安全支付、快速提现，以及为马来西亚玩家打造的高端手机博彩体验。",
  },
  title: {
    en: "TPOWER Malaysia | Official Online Casino Platform",
    zh: "TPOWER Malaysia｜官方线上博彩平台",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tpower.my",
  locale: "en_MY",
  locales: ["en", "zh"] as const,
  defaultLocale: "en" as const,
  country: "Malaysia",
  supportEmail: "support@tpower.my",
  businessEmail: "hello@tpower.my",
  phone: "+60 3-9212 8800",
  address: {
    en: "Kuala Lumpur, Malaysia",
    zh: "马来西亚吉隆坡",
  },
  social: {
    facebook: "https://www.facebook.com/tpowercasino",
    instagram: "https://www.instagram.com/tpowercasino",
    telegram: "https://t.me/tpowercasino",
    twitter: "https://x.com/tpowercasino",
    youtube: "https://www.youtube.com/@tpowercasino",
    whatsapp: "https://wa.me/60392128800",
  },
  legal: {
    ageRestriction: 21,
    responsibleGamingUrl: "/responsible-gaming",
  },
  themeColor: "#090909",
  ogImage: "/og/default.webp",
} as const;

export type Locale = (typeof siteConfig.locales)[number];
