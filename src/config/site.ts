export const siteConfig = {
  name: "TPOWER Malaysia",
  shortName: "TPOWER",
  tagline: {
    en: "Official Online Casino Platform",
    zh: "官方线上博彩平台",
  },
  description: {
    en: "Experience TPOWER Online Casino Malaysia with official APK download, premium slots, live casino, sports betting, secure payments, fast withdrawals, exclusive promotions and mobile gaming for Malaysia players.",
    zh: "体验TPOWER线上博彩马来西亚官方平台：官方APK下载、热门老虎机、真人视讯、体育博彩、安全支付、快速提现、独家优惠与手机博彩，专为马来西亚玩家打造。",
  },
  title: {
    en: "TPOWER Online Casino Malaysia | Official TPOWER Casino, Slots, Live Casino & APK Download",
    zh: "TPOWER线上博彩马来西亚｜官方平台・老虎机・真人视讯・APK下载",
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
  auth: {
    registerUrl: "https://m.tpower3.com/Signup/UAUMCYVJT",
    /** Temporary until a dedicated login URL is provided. */
    loginUrl: "https://m.tpower3.com/Signup/UAUMCYVJT",
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];
