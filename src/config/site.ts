export const siteConfig = {
  name: "TPOWER",
  shortName: "TPOWER",
  tagline: {
    en: "Official Online Gaming Platform for Malaysia",
    zh: "马来西亚官方线上博彩平台",
  },
  description: {
    en: "TPOWER is an online gaming platform for Malaysia, integrating licensed studio partners for slots, live casino, sports, fishing, lottery and promotions — with official customer support and APK download guidance.",
    zh: "TPOWER线上博彩是面向马来西亚的官方平台，通过合作游戏厂商提供老虎机、真人视讯、体育博彩、捕鱼、彩票与优惠，并提供官方客服与APK下载指引。",
  },
  title: {
    en: "TPOWER Online Casino Malaysia | Official Slots, Live Casino & APK Download",
    zh: "TPOWER线上博彩马来西亚｜官方老虎机・真人视讯・APK下载",
  },
  // Must match sitemap / GSC property (non-www). Override via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpowermycasino.com",
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
    whatsapp: "https://tpowercs.wasap.my",
    telegram: "https://t.me/tpowercs",
    facebook: "https://www.facebook.com/share/1EasRgVuaH/",
    instagram: "https://www.instagram.com/tpower0314?igsh=ZTNtcGd4eGY1MHB2",
    threads: "https://www.threads.com/@tpower0314",
  },
  supportHours: {
    en: "Daily 10:00–02:00 (MYT). Peak evenings may queue longer.",
    zh: "每日 10:00–02:00（马来西亚时间）。晚间高峰可能排队较长。",
  },
  legal: {
    ageRestriction: 21,
    responsibleGamingUrl: "/responsible-gaming",
  },
  themeColor: "#090909",
  ogImage: "/og/default.webp",
  auth: {
    registerUrl: "https://m.tpower3.com/Signup/UAUMCYVJT",
    /** Temporary until a dedicated login URL is provided. */
    loginUrl: "https://m.tpower3.com/Signup/UAUMCYVJT",
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];
