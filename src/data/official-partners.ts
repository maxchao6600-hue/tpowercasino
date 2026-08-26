import type { GameCategory, LocalizedString } from "@/types";

export type OfficialPartner = {
  id: string;
  name: string;
  /** Provider hub path when a detail page exists; otherwise null */
  href: string | null;
  logo: string | null;
  category: GameCategory | "multi";
  categoryLabel: LocalizedString;
  blurb: LocalizedString;
};

/**
 * Official gaming / platform integration partners shown on Home, About, Providers.
 * Wording must stay partnership/integration — never ownership or “licensed by studio”.
 */
export const officialPartners: OfficialPartner[] = [
  {
    id: "pragmatic-play",
    name: "Pragmatic Play",
    href: "/providers/pragmatic-play",
    logo: "/images/providers/pragmatic-play.png",
    category: "multi",
    categoryLabel: { en: "Slots & Live", zh: "老虎机・真人" },
    blurb: {
      en: "High-frequency slot releases and polished live tables available through TPOWER platform integration.",
      zh: "高频上新的老虎机与真人桌，经 TPOWER 平台对接供马来西亚玩家使用。",
    },
  },
  {
    id: "pg-soft",
    name: "PG Soft",
    href: "/providers/pg-soft",
    logo: "/images/providers/pg-soft.png",
    category: "slots",
    categoryLabel: { en: "Mobile Slots", zh: "手游老虎机" },
    blurb: {
      en: "Mobile-first cascading slots with culturally familiar themes — a staple studio on TPOWER.",
      zh: "手机优先连消老虎机，题材贴近亚洲玩家，是 TPOWER 大厅常驻合作工作室。",
    },
  },
  {
    id: "evolution",
    name: "Evolution",
    href: "/providers/evolution",
    logo: "/images/providers/evolution.png",
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Broadcast-grade baccarat, blackjack and game shows via official live-casino partnership.",
      zh: "广播级百家乐、二十一点与游戏秀，通过官方真人视讯合作接入。",
    },
  },
  {
    id: "jili",
    name: "JILI",
    href: "/providers/jili",
    logo: "/images/providers/jili.png",
    category: "multi",
    categoryLabel: { en: "Slots & Arcade", zh: "老虎机・街机" },
    blurb: {
      en: "Fast-paced Asian slots and arcade-style titles supported as a TPOWER integration partner.",
      zh: "节奏明快的亚洲老虎机与街机风作品，作为 TPOWER 对接合作厂商上线。",
    },
  },
  {
    id: "jdb",
    name: "JDB",
    href: null,
    logo: "/images/providers/jdb.png",
    category: "fishing",
    categoryLabel: { en: "Fishing & Slots", zh: "捕鱼・老虎机" },
    blurb: {
      en: "Fishing shooters and feature-led slots available among supported game providers on TPOWER.",
      zh: "捕鱼机与特色老虎机，同属 TPOWER 支持的游戏供应商目录。",
    },
  },
  {
    id: "spadegaming",
    name: "Spadegaming",
    href: "/providers/spadegaming",
    logo: "/images/providers/spadegaming.png",
    category: "multi",
    categoryLabel: { en: "Slots & Fishing", zh: "老虎机・捕鱼" },
    blurb: {
      en: "Southeast Asia–tuned slots and fishing lobbies curated for Malaysia evening play.",
      zh: "面向东南亚习惯的老虎机与捕鱼大厅，适合马来西亚晚间手机场次。",
    },
  },
  {
    id: "sexy-gaming",
    name: "Sexy Gaming",
    href: "/providers/sexy-gaming",
    logo: "/images/providers/sexy-gaming.png",
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Intimate live baccarat rooms delivered through TPOWER live-casino partner studios.",
      zh: "偏近距离互动的真人百家乐厅，经 TPOWER 真人合作工作室接入。",
    },
  },
  {
    id: "dream-gaming",
    name: "Dream Gaming",
    href: "/providers/dream-gaming",
    logo: "/images/providers/dream-gaming.png",
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Multi-table baccarat production for players who prefer dense live lobbies.",
      zh: "多桌百家乐制作，适合喜欢密集真人大厅的玩家。",
    },
  },
  {
    id: "microgaming",
    name: "Microgaming",
    href: "/providers/microgaming",
    logo: "/images/providers/microgaming.png",
    category: "slots",
    categoryLabel: { en: "Slots", zh: "老虎机" },
    blurb: {
      en: "Legacy progressive and video-slot catalogue available via platform partnership.",
      zh: "经典累进与视频老虎机目录，通过平台合作关系开放游玩。",
    },
  },
  {
    id: "playn-go",
    name: "Play’n GO",
    href: "/providers/playn-go",
    logo: "/images/providers/playn-go.png",
    category: "slots",
    categoryLabel: { en: "Slots", zh: "老虎机" },
    blurb: {
      en: "Character-driven video slots with clear feature rules on the TPOWER lobby.",
      zh: "角色感强、特色规则清楚的视频老虎机，已接入 TPOWER 大厅。",
    },
  },
  {
    id: "spribe",
    name: "Spribe",
    href: "/providers/spribe",
    logo: "/images/providers/spribe.png",
    category: "crash",
    categoryLabel: { en: "Crash & Instant", zh: "爆点・即时" },
    blurb: {
      en: "Crash and instant-win formats for short mobile sessions on TPOWER.",
      zh: "爆点与即时玩法，适合 TPOWER 短时手机场次。",
    },
  },
  {
    id: "habanero",
    name: "Habanero",
    href: "/providers/habanero",
    logo: "/providers/habanero.png",
    category: "slots",
    categoryLabel: { en: "Slots", zh: "老虎机" },
    blurb: {
      en: "Feature-rich video slots from a long-standing Asia-facing studio partner.",
      zh: "功能丰富的视频老虎机，来自深耕亚洲市场的长期合作工作室。",
    },
  },
  {
    id: "sbo",
    name: "SBO",
    href: "/providers/sbo",
    logo: "/images/providers/sbo.png",
    category: "sports",
    categoryLabel: { en: "Sports", zh: "体育博彩" },
    blurb: {
      en: "Sportsbook markets and in-play coverage through TPOWER sports integration.",
      zh: "体育盘口与滚球覆盖，经 TPOWER 体育对接呈现。",
    },
  },
  {
    id: "playtech",
    name: "Playtech",
    href: null,
    logo: "/images/providers/playtech.png",
    category: "multi",
    categoryLabel: { en: "Slots & Live", zh: "老虎机・真人" },
    blurb: {
      en: "Established European studio content among supported providers on TPOWER.",
      zh: "成熟的欧洲工作室内容，同属 TPOWER 支持供应商之一。",
    },
  },
  {
    id: "cq9",
    name: "CQ9",
    href: null,
    logo: "/providers/cq9.png",
    category: "slots",
    categoryLabel: { en: "Slots & Arcade", zh: "老虎机・街机" },
    blurb: {
      en: "Arcade-leaning slots and fish titles listed among TPOWER partner studios.",
      zh: "偏街机节奏的老虎机与捕鱼类作品，列入 TPOWER 合作工作室。",
    },
  },
  {
    id: "sa-gaming",
    name: "SA Gaming",
    href: null,
    logo: "/providers/sa-gaming.png",
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Asian live baccarat production available as a platform integration partner.",
      zh: "亚洲真人百家乐制作，以平台对接合作形式提供。",
    },
  },
  {
    id: "wm-casino",
    name: "WM Casino",
    href: null,
    logo: null,
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Classic live-table branding recognised across Malaysia live lobbies.",
      zh: "马来西亚真人大厅常见的经典真人桌品牌。",
    },
  },
  {
    id: "netent",
    name: "NetEnt",
    href: null,
    logo: "/providers/netent.png",
    category: "slots",
    categoryLabel: { en: "Slots", zh: "老虎机" },
    blurb: {
      en: "Premium European slot production among studios available on TPOWER.",
      zh: "高端欧洲老虎机制作，属于 TPOWER 可玩工作室目录。",
    },
  },
  {
    id: "yggdrasil",
    name: "Yggdrasil",
    href: null,
    logo: null,
    category: "slots",
    categoryLabel: { en: "Slots", zh: "老虎机" },
    blurb: {
      en: "Innovation-led video slots from a Nordic studio in the partner catalogue.",
      zh: "北欧工作室主导的创新视频老虎机，收录于合作目录。",
    },
  },
  {
    id: "asia-gaming",
    name: "Asia Gaming",
    href: null,
    logo: "/images/providers/asia-gaming.png",
    category: "live-casino",
    categoryLabel: { en: "Live Casino", zh: "真人视讯" },
    blurb: {
      en: "Regional live and lottery-style products supported for Malaysia players.",
      zh: "区域真人与彩票类产品，面向马来西亚玩家开放。",
    },
  },
];

export const officialPartnersCopy = {
  eyebrow: {
    en: "Platform integration partners",
    zh: "平台对接合作厂商",
  },
  title: {
    en: "Gaming Partners",
    zh: "游戏合作伙伴",
  },
  subtitle: {
    en: "TPOWER works with supported game providers and payment-ready lobbies — partnership and integration, not ownership of provider brands.",
    zh: "TPOWER 与支持的游戏供应商及可支付大厅对接——关系是合作与集成，并非拥有厂商品牌。",
  },
  viewAll: {
    en: "View all providers",
    zh: "查看全部供应商",
  },
  partnershipNote: {
    en: "Provider names and logos remain the property of their respective owners. TPOWER offers access through official platform integrations.",
    zh: "厂商名称与标识归各自权利人所有。TPOWER 通过官方平台对接提供游玩入口。",
  },
} as const;
