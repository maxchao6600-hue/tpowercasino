export const siteConfig = {
  name: "TPOWER Casino",
  shortName: "TPOWER",
  tagline: {
    en: "Premium Online Gaming Platform",
    zh: "高端在线娱乐平台",
  },
  description: {
    en: "TPOWER Casino is Malaysia's premium online gaming platform — secure banking, licensed providers, and a refined player experience built for trust and performance.",
    zh: "TPOWER Casino 是马来西亚高端在线娱乐平台——安全支付、持牌供应商，以及为信任与性能打造的精致玩家体验。",
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
