import type { LocalizedString, NewsCategoryKey } from "@/types";

export type NewsCategoryFilter = {
  key: "all" | NewsCategoryKey;
  label: LocalizedString;
};

export type NewsPlatformTimelineItem = {
  id: string;
  month: LocalizedString;
  date: string;
  version: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type NewsPlatformStat = {
  id: string;
  value: string;
  label: LocalizedString;
};

export const NEWS_CATEGORY_FILTERS: NewsCategoryFilter[] = [
  { key: "all", label: { en: "All", zh: "全部" } },
  { key: "promotion", label: { en: "Promotion", zh: "优惠" } },
  { key: "games", label: { en: "Games", zh: "游戏" } },
  { key: "vip", label: { en: "VIP", zh: "VIP" } },
  { key: "payments", label: { en: "Payments", zh: "支付" } },
  { key: "guide", label: { en: "Guide", zh: "指南" } },
  { key: "security", label: { en: "Security", zh: "安全" } },
  { key: "sports", label: { en: "Sports", zh: "体育" } },
  { key: "download", label: { en: "Download", zh: "下载" } },
  { key: "android", label: { en: "Android", zh: "Android" } },
  { key: "ios", label: { en: "iOS", zh: "iOS" } },
  { key: "news", label: { en: "News", zh: "新闻" } },
  { key: "update", label: { en: "Update", zh: "更新" } },
];

export const newsBreakingTicker: LocalizedString[] = [
  {
    en: "July platform performance update is live across cashier and lobby",
    zh: "七月平台性能升级已上线：收银与大厅同步提速",
  },
  {
    en: "New Evolution live tables open for Malaysia evening peaks",
    zh: "Evolution 真人新桌开放，覆盖大马晚间高峰",
  },
  {
    en: "VIP host coverage extended through weekends for Gold and Platinum",
    zh: "黄金与铂金 VIP 管家周末时段延长",
  },
  {
    en: "Welcome package refresh clarifies first-deposit claim steps",
    zh: "欢迎礼包焕新：首存领取步骤更清楚",
  },
  {
    en: "Official Android APK path reminder—avoid third-party mirrors",
    zh: "官方 Android APK 路径提醒：勿用第三方镜像",
  },
  {
    en: "Weekend sports odds boost windows now marked in the lobby",
    zh: "周末体育盘口加成窗口已在大厅标注",
  },
  {
    en: "DuitNow and e-wallet tips help keep deposits and payouts smooth",
    zh: "DuitNow 与电子钱包贴士：入金提款更顺",
  },
  {
    en: "Support desk staffing strengthened on peak Malaysian nights",
    zh: "大马夜间高峰客服人力加强",
  },
];

export const newsPlatformTimeline: NewsPlatformTimelineItem[] = [
  {
    id: "timeline-2026-07",
    month: { en: "July 2026", zh: "2026年7月" },
    date: "2026-07-10",
    version: "v2.7.0",
    title: {
      en: "Performance and cashier clarity release",
      zh: "性能与收银清晰度版本",
    },
    body: {
      en: "Lighter mobile lobby assets, sharper cashier statuses, and promotion expiry labels before opt-in.",
      zh: "手机大厅轻量加载、收银状态更清晰，优惠领取前显示到期提示。",
    },
  },
  {
    id: "timeline-2026-06",
    month: { en: "June 2026", zh: "2026年6月" },
    date: "2026-06-28",
    version: "v2.6.2",
    title: {
      en: "VIP hosting windows and payment guide refresh",
      zh: "VIP管家时段与支付指南更新",
    },
    body: {
      en: "Expanded evening and weekend host coverage plus clearer DuitNow and e-wallet checklists.",
      zh: "扩展晚间与周末管家覆盖，并梳理 DuitNow、电子钱包操作清单。",
    },
  },
  {
    id: "timeline-2026-05",
    month: { en: "May 2026", zh: "2026年5月" },
    date: "2026-05-20",
    version: "v2.6.0",
    title: {
      en: "Download hub and install safety polish",
      zh: "下载中心与安装安全打磨",
    },
    body: {
      en: "Official Download checklist updates for Android APK hygiene and iOS home-screen access.",
      zh: "官方下载清单升级，强化 Android APK 安全与 iOS 主屏幕访问说明。",
    },
  },
  {
    id: "timeline-2026-04",
    month: { en: "April 2026", zh: "2026年4月" },
    date: "2026-04-15",
    version: "v2.5.1",
    title: {
      en: "Live casino capacity and sports lobby badges",
      zh: "真人容量与体育大厅标记",
    },
    body: {
      en: "Additional live seats for peak hours and clearer sports boost badges ahead of weekend fixtures.",
      zh: "高峰真人座位扩容，周末赛事前体育加成标记更明显。",
    },
  },
  {
    id: "timeline-2026-03",
    month: { en: "March 2026", zh: "2026年3月" },
    date: "2026-03-12",
    version: "v2.5.0",
    title: {
      en: "Promotions hub readability pass",
      zh: "优惠中心可读性优化",
    },
    body: {
      en: "Welcome, reload, and cashback cards regrouped with stronger eligibility and turnover cues.",
      zh: "欢迎礼、续存与返水卡片重组，资格与流水提示更醒目。",
    },
  },
];

export const newsPlatformStats: NewsPlatformStat[] = [
  {
    id: "stat-players",
    value: "100K+",
    label: { en: "Players", zh: "活跃玩家" },
  },
  {
    id: "stat-providers",
    value: "13+",
    label: { en: "Providers", zh: "游戏供应商" },
  },
  {
    id: "stat-availability",
    value: "99.9%",
    label: { en: "Availability", zh: "平台可用率" },
  },
  {
    id: "stat-support",
    value: "24/7",
    label: { en: "Support", zh: "全天客服" },
  },
  {
    id: "stat-articles",
    value: "120+",
    label: { en: "News Articles", zh: "新闻文章" },
  },
];

export const newsStatusLine: LocalizedString = {
  en: "All systems operational — cashier, lobby, and live support are running normally.",
  zh: "系统运行正常 — 收银、大厅与在线客服目前运作稳定。",
};
