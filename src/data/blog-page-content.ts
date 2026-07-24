import type { BlogCategoryKey, LocalizedString } from "@/types";

export type BlogHubStat = {
  id: string;
  value: string;
  label: LocalizedString;
};

export type BlogFeaturedCategory = {
  id: string;
  categoryKey: BlogCategoryKey | "all";
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  query: string;
};

export type BlogHubLink = {
  href: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
};

export const blogHubStats: BlogHubStat[] = [
  {
    id: "guides",
    value: "10+",
    label: { en: "Official Guides", zh: "官方攻略" },
  },
  {
    id: "updated",
    value: "Weekly",
    label: { en: "Updated Weekly", zh: "每周更新" },
  },
  {
    id: "official",
    value: "100%",
    label: { en: "Official Information", zh: "官方信息" },
  },
  {
    id: "bilingual",
    value: "EN / 中文",
    label: { en: "Bilingual Support", zh: "中英双语" },
  },
];

export const blogFeaturedCategories: BlogFeaturedCategory[] = [
  {
    id: "account",
    categoryKey: "tpower-guides",
    title: { en: "Account & Access", zh: "账户与登入" },
    description: {
      en: "Login, register, download, and the TPOWER App.",
      zh: "登录、注册、下载与 TPOWER官方APP。",
    },
    image: "/blog/tpower-login-guide.webp",
    query: "TPOWER Login",
  },
  {
    id: "payments",
    categoryKey: "payment-guides",
    title: { en: "Payments", zh: "支付指南" },
    description: {
      en: "Deposit, withdraw, and Malaysia payment rails.",
      zh: "存款、提现与马来西亚支付通道。",
    },
    image: "/blog/how-to-deposit-tpower.webp",
    query: "TPOWER Deposit",
  },
  {
    id: "vip",
    categoryKey: "vip",
    title: { en: "VIP & Rewards", zh: "VIP 与礼遇" },
    description: {
      en: "Quiet hosting, cashback rhythm, and tier clarity.",
      zh: "低调管家、返水节奏与等级说明。",
    },
    image: "/blog/vip.webp",
    query: "TPOWER VIP",
  },
  {
    id: "providers",
    categoryKey: "casino-guides",
    title: { en: "Providers & Lobby", zh: "厂商与大厅" },
    description: {
      en: "How TPOWER selects studios and organises play.",
      zh: "TPOWER 如何筛选工作室与整理玩法。",
    },
    image: "/blog/providers.webp",
    query: "Providers",
  },
  {
    id: "responsible",
    categoryKey: "responsible-gaming",
    title: { en: "Responsible Play", zh: "负责任博彩" },
    description: {
      en: "Limits, cool-offs, and safer session habits.",
      zh: "限额、冷静期与更安全的娱乐习惯。",
    },
    image: "/blog/responsible-play.webp",
    query: "Responsible",
  },
  {
    id: "download",
    categoryKey: "tpower-guides",
    title: { en: "Download & APK", zh: "下载与 APK" },
    description: {
      en: "Official TPOWER Download and Android APK paths.",
      zh: "官方 TPOWER下载与 Android APK 路径。",
    },
    image: "/blog/how-to-download-tpower.webp",
    query: "TPOWER Download",
  },
];

export const blogKnowledgeHub: BlogHubLink[] = [
  {
    href: "/download",
    title: { en: "TPOWER Download", zh: "TPOWER下载" },
    description: {
      en: "Official app install hub for Android and iOS.",
      zh: "Android 与 iOS 官方安装中枢。",
    },
    image: "/images/download/features/fast-install.webp",
  },
  {
    href: "/register",
    title: { en: "Register", zh: "注册" },
    description: {
      en: "Create your TPOWER account with accurate details.",
      zh: "用真实资料创建 TPOWER 账号。",
    },
    image: "/blog/how-to-register-tpower.webp",
  },
  {
    href: "/login",
    title: { en: "Login", zh: "登录" },
    description: {
      en: "Return to the lobby through official entry points.",
      zh: "经官方入口回到大厅。",
    },
    image: "/blog/tpower-login-guide.webp",
  },
  {
    href: "/promotions",
    title: { en: "Promotions", zh: "优惠" },
    description: {
      en: "Welcome, reload, and cashback with clear terms.",
      zh: "欢迎礼、续存与返水，条款清楚。",
    },
    image: "/images/promotions/tpower-welcome-package.webp",
  },
  {
    href: "/vip",
    title: { en: "VIP Club", zh: "VIP 俱乐部" },
    description: {
      en: "Priority support and quieter premium hosting.",
      zh: "优先支持与更安静的高端管家。",
    },
    image: "/blog/vip.webp",
  },
  {
    href: "/providers",
    title: { en: "Providers", zh: "游戏厂商" },
    description: {
      en: "Studios powering slots, live casino, and sports.",
      zh: "支撑老虎机、真人与体育的工作室。",
    },
    image: "/blog/providers.webp",
  },
  {
    href: "/news",
    title: { en: "Newsroom", zh: "新闻室" },
    description: {
      en: "Official platform updates from the TPOWER team.",
      zh: "TPOWER 团队发布的官方平台动态。",
    },
    image: "/images/news/tpower-platform-performance-update.webp",
  },
  {
    href: "/responsible-gaming",
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    description: {
      en: "Tools that keep entertainment intentional.",
      zh: "让娱乐保持有节制的工具。",
    },
    image: "/blog/responsible-play.webp",
  },
];

export const blogPopularSearches: LocalizedString[] = [
  { en: "TPOWER Login", zh: "TPOWER登录" },
  { en: "TPOWER Register", zh: "TPOWER注册" },
  { en: "TPOWER Download", zh: "TPOWER下载" },
  { en: "TPOWER APK", zh: "TPOWER APK" },
  { en: "TPOWER VIP", zh: "TPOWER VIP" },
  { en: "TPOWER Deposit", zh: "TPOWER存款" },
  { en: "TPOWER Withdraw", zh: "TPOWER提现" },
  { en: "TPOWER Promotions", zh: "TPOWER优惠" },
];

export const blogQuickLinks: Array<{
  href: string;
  label: LocalizedString;
}> = [
  { href: "/download", label: { en: "Download App", zh: "下载 APP" } },
  { href: "/apk", label: { en: "TPOWER APK", zh: "TPOWER APK" } },
  { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  { href: "/contact", label: { en: "Contact Support", zh: "联系客服" } },
  { href: "/payment-methods", label: { en: "Payment Methods", zh: "支付方式" } },
  { href: "/security", label: { en: "Security", zh: "安全说明" } },
];

export const blogRelatedTopics: Array<{
  href: string;
  label: LocalizedString;
}> = [
  { href: "/games", label: { en: "Games Lobby", zh: "游戏大厅" } },
  { href: "/slots", label: { en: "Slots", zh: "老虎机" } },
  { href: "/live-casino", label: { en: "Live Casino", zh: "真人视讯" } },
  { href: "/sports", label: { en: "Sports", zh: "体育博彩" } },
  { href: "/news", label: { en: "TPOWER News", zh: "TPOWER新闻" } },
  { href: "/vip", label: { en: "VIP Club", zh: "VIP 俱乐部" } },
];
