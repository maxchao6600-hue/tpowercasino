import type { GameCategory, Provider } from "@/types";

/** Filter chips on the Providers hub (subset of GameCategory + all). */
export type ProviderFilterId =
  | "all"
  | "slots"
  | "live-casino"
  | "sports"
  | "fishing"
  | "crash"
  | "arcade";

export const providerFilterIds: ProviderFilterId[] = [
  "all",
  "slots",
  "live-casino",
  "sports",
  "fishing",
  "crash",
  "arcade",
];

function providerFaqs(
  name: string,
): Provider["faqs"] {
  return [
    {
      question: {
        en: `Are ${name} games fair on TPOWER?`,
        zh: `${name} 在 TPOWER 公平吗？`,
      },
      answer: {
        en: `Yes. ${name} titles retain the provider's published rules and mathematics. TPOWER does not alter game outcomes.`,
        zh: `公平。${name} 游戏沿用厂商官方规则与数学模型，TPOWER 不会改动任何开奖或牌局结果。`,
      },
    },
    {
      question: {
        en: `Can I play ${name} on mobile at TPOWER?`,
        zh: `TPOWER 手机能玩 ${name} 吗？`,
      },
      answer: {
        en: `Most ${name} titles on TPOWER are optimised for modern mobile browsers and the TPOWER app experience.`,
        zh: `可以。TPOWER 上多数 ${name} 游戏已针对手机浏览器和官方 APP 优化，通勤路上也能顺畅游玩。`,
      },
    },
    {
      question: {
        en: `Where can I find popular ${name} titles?`,
        zh: `${name} 热门游戏在 TPOWER 哪里找？`,
      },
      answer: {
        en: `Browse the provider page below, or open the Games catalogue and filter by category to discover featured ${name} experiences.`,
        zh: `可浏览下方 ${name} 厂商页面，或进入游戏大厅按品类筛选，查看精选热门作品。`,
      },
    },
  ];
}

export const providers: Provider[] = [
  {
    id: "pragmatic-play",
    slug: "pragmatic-play",
    name: "Pragmatic Play",
    description: {
      en: "High-RTP video slots, live casino tables, and near-daily releases — Pragmatic Play is built for players who want polished math and peak-hour stability on TPOWER.",
      zh: "高人气老虎机、真人视讯与高频上新——Pragmatic Play 适合看重数学模型与晚间高峰稳定性的 TPOWER 玩家。",
    },
    introduction: {
      en: "Pragmatic Play is one of the most requested studios on TPOWER Casino Malaysia. Players come for polished slot mathematics, frequent feature drops, and live tables that stay stable during peak evening hours. On TPOWER, Pragmatic titles are curated for mobile performance first — so sessions feel smooth on mid-range devices as well as flagship phones.",
      zh: "Pragmatic Play 是 TPOWER线上博彩 最常点的厂商之一。玩家冲着精致的老虎机数学、频繁的特色功能，以及晚上高峰仍稳定的真人桌而来。TPOWER 优先收录手机跑得顺的版本，中端机也能流畅开转。",
    },
    features: [
      { en: "High-performing video slots with clear feature rules", zh: "热门视频老虎机，特色规则清楚" },
      { en: "Live casino tables with dependable broadcast quality", zh: "真人视讯桌台，直播画质稳定" },
      { en: "Mobile-optimised lobbies for Malaysian networks", zh: "针对本地网络优化的手机大厅" },
      { en: "Transparent RTP presentation where published", zh: "有公布时透明展示 RTP 数据" },
    ],
    gameTypes: [
      { en: "Slots", zh: "老虎机" },
      { en: "Live casino", zh: "真人视讯" },
      { en: "Game shows", zh: "真人游戏秀" },
    ],
    compatibility: {
      en: "Desktop browsers, mobile web, and the TPOWER app.",
      zh: "支持电脑浏览器、手机网页和 TPOWER 官方 APP。",
    },
    logo: "/images/providers/pragmatic-play.png",
    categories: ["slots", "live-casino"],
    popularGameIds: ["tp-19267","tp-20094","tp-19951"],
    faqs: providerFaqs("Pragmatic Play"),
    featured: true,
    metaTitle: {
      en: "Pragmatic Play on TPOWER",
      zh: "Pragmatic Play｜TPOWER 热门老虎机与真人",
    },
    metaDescription: {
      en: "Play Pragmatic Play slots and live casino on TPOWER Malaysia. Discover popular titles, features, mobile compatibility, and FAQs.",
      zh: "在 TPOWER官网 玩 Pragmatic Play 老虎机与真人视讯，查热门游戏、特色玩法、手机兼容与常见问题。",
    },
  },
  {
    id: "pg-soft",
    slug: "pg-soft",
    name: "PG Soft",
    description: {
      en: "Mobile-first slots with beautiful animation and story-driven gameplay — PG Soft is the studio Malaysia players open first on phones.",
      zh: "手机优先老虎机，动画精致、故事感强——PG电子 是许多马来西亚玩家手机上最先点开的官方厂商。",
    },
    introduction: {
      en: "PG Soft powers many of TPOWER's most played mobile slots. The studio is known for cascading mechanics, culturally resonant themes, and interfaces that feel native on phones. Malaysian players often start with Mahjong-inspired titles before exploring the wider PG Soft catalogue on TPOWER.",
      zh: "PG电子 驱动着 TPOWER 许多最常玩的手游老虎机。连消机制、亚洲文化主题、手机原生感界面都是招牌。马来西亚玩家往往从麻将风热门款起步，再探索更多 PG 目录。",
    },
    features: [
      { en: "Mobile-first slot UX", zh: "手机优先的老虎机体验" },
      { en: "Cascading and cluster-style mechanics", zh: "连消与集群式特色玩法" },
      { en: "Culturally familiar Asian themes", zh: "亚洲玩家熟悉的文化主题" },
      { en: "Lightweight assets for smoother loads", zh: "资源轻量，加载更顺畅" },
    ],
    gameTypes: [{ en: "Slots", zh: "老虎机" }],
    compatibility: {
      en: "Optimised for mobile web and the TPOWER app; desktop supported.",
      zh: "针对手机网页和 TPOWER APP 优化，电脑端同样支持。",
    },
    logo: "/images/providers/pg-soft.png",
    categories: ["slots"],
    popularGameIds: [
      "seed-pg-soft-fortune-tiger",
      "seed-pg-soft-mahjong-ways-2",
      "seed-pg-soft-mahjong-ways",
    ],
    faqs: providerFaqs("PG Soft"),
    featured: true,
    metaTitle: { en: "PG Soft Games on TPOWER", zh: "PG电子｜TPOWER 热门手游老虎机" },
    metaDescription: {
      en: "Explore PG Soft slots on TPOWER Casino Malaysia — mobile-first titles, popular games, features, and player FAQs.",
      zh: "TPOWER线上博彩 PG电子 专区：手游热门老虎机、特色玩法、人气作品与玩家常见问题。",
    },
  },
  {
    id: "evolution",
    slug: "evolution",
    name: "Evolution",
    description: {
      en: "Professional dealers, immersive baccarat, and cinematic game shows — Evolution sets the live casino production standard on TPOWER.",
      zh: "专业荷官、沉浸式百家乐与电影级游戏秀——Evolution 是 TPOWER 真人视讯制作的标杆。",
    },
    introduction: {
      en: "Evolution remains the reference standard for live casino production. On TPOWER, Evolution tables cover baccarat, blackjack, and cinematic game shows with broadcast quality designed for evening peak demand in Malaysia.",
      zh: "Evolution 仍是真人视讯的行业标杆。在 TPOWER，Evolution 桌台涵盖百家乐、二十一点和电影级游戏秀，直播品质针对马来西亚晚间高峰优化。",
    },
    features: [
      { en: "Cinematic live studio production", zh: "电影级真人演播制作" },
      { en: "Baccarat, blackjack, and game shows", zh: "百家乐、二十一点、游戏秀齐全" },
      { en: "Peak-hour capacity planning", zh: "高峰时段桌台容量规划" },
      { en: "Clear table rules and seat states", zh: "桌规与座位状态清晰可读" },
    ],
    gameTypes: [
      { en: "Live casino", zh: "真人视讯" },
      { en: "Table games", zh: "桌游" },
    ],
    compatibility: {
      en: "Desktop and mobile browsers with stable broadband recommended.",
      zh: "支持电脑与手机浏览器，建议使用稳定宽带或 Wi-Fi。",
    },
    logo: "/images/providers/evolution.png",
    categories: ["live-casino", "table"],
    popularGameIds: [
      "seed-evolution-crazy-time",
      "seed-evolution-lightning-roulette",
      "seed-evolution-lightning-baccarat",
    ],
    faqs: providerFaqs("Evolution"),
    featured: true,
    metaTitle: { en: "Evolution Live Casino TPOWER", zh: "Evolution 真人视讯｜TPOWER 直播桌台" },
    metaDescription: {
      en: "Play Evolution live casino on TPOWER Malaysia — baccarat, game shows, features, compatibility, and FAQs.",
      zh: "TPOWER Evolution 真人视讯：百家乐、游戏秀、特色桌台、设备兼容与常见问题。",
    },
  },
  {
    id: "jili",
    slug: "jili",
    name: "JILI",
    description: {
      en: "Asian slots, fishing rooms, and crash-style rounds engineered for short, high-energy mobile sessions.",
      zh: "亚洲风老虎机、捕鱼厅与爆点回合——专为短局、高节奏的手机开玩设计。",
    },
    introduction: {
      en: "JILI brings pace. On TPOWER, JILI titles suit players who prefer short rounds, fishing action, and crash-style specialty games without a cluttered lobby experience.",
      zh: "JILI 主打快。在 TPOWER，JILI 适合喜欢短回合、捕鱼对战和爆点类玩法的玩家，大厅精选不杂乱。",
    },
    features: [
      { en: "Fast specialty and fishing titles", zh: "快节奏特色与捕鱼游戏" },
      { en: "Crash-style session rhythm", zh: "爆点式紧凑回合节奏" },
      { en: "Clear onboarding for new players", zh: "新手上手指引清楚" },
      { en: "Strong mobile responsiveness", zh: "手机响应速度快" },
    ],
    gameTypes: [
      { en: "Slots", zh: "老虎机" },
      { en: "Fishing", zh: "捕鱼" },
      { en: "Crash", zh: "爆点" },
    ],
    compatibility: {
      en: "Mobile-first with full desktop support on TPOWER.",
      zh: "手机优先，TPOWER 电脑端完整支持。",
    },
    logo: "/images/providers/jili.png",
    categories: ["slots", "fishing", "crash"],
    popularGameIds: ["tp-6940","tp-6930","tp-6914"],
    faqs: providerFaqs("JILI"),
    featured: true,
    metaTitle: { en: "JILI Games on TPOWER", zh: "JILI 游戏｜TPOWER 捕鱼老虎机爆点" },
    metaDescription: {
      en: "Discover JILI slots, fishing, and crash games on TPOWER Casino Malaysia with features, popular titles, and FAQs.",
      zh: "TPOWER JILI 专区：热门老虎机、捕鱼厅、爆点游戏，特色玩法与常见问题一览。",
    },
  },
  {
    id: "jdb",
    slug: "jdb",
    name: "JDB",
    description: {
      en: "Arcade-energy fishing rooms and approachable Asian slots — built for multiplayer pace on mobile.",
      zh: "街机感捕鱼厅与上手简单的亚洲老虎机——多人节奏强，手机开玩顺手。",
    },
    introduction: {
      en: "JDB is recognised across Asia for fishing rooms and arcade-leaning slots. TPOWER lists JDB for players who want energetic multiplayer fishing and approachable slot themes with clear controls.",
      zh: "JDB 在亚洲以捕鱼厅和街机风老虎机闻名。TPOWER 收录 JDB，服务想要多人捕鱼对战、上手简单、操作清楚的玩家。",
    },
    features: [
      { en: "Arcade-style fishing rooms", zh: "街机风多人捕鱼厅" },
      { en: "Approachable slot themes", zh: "主题好懂，新手友好" },
      { en: "Multiplayer energy without lobby clutter", zh: "多人热闹，大厅不杂乱" },
      { en: "Mobile-ready controls", zh: "触控操作，手机专优" },
    ],
    gameTypes: [
      { en: "Fishing", zh: "捕鱼" },
      { en: "Slots", zh: "老虎机" },
    ],
    compatibility: {
      en: "Best on mobile web and app; desktop supported.",
      zh: "手机网页和 APP 体验最佳，电脑端同样可用。",
    },
    logo: "/images/providers/jdb.png",
    categories: ["fishing", "slots"],
    popularGameIds: ["tp-7146","tp-7520","tp-11749"],
    faqs: providerFaqs("JDB"),
    featured: true,
    metaTitle: { en: "JDB on TPOWER Casino", zh: "JDB｜TPOWER 捕鱼与老虎机" },
    metaDescription: {
      en: "Play JDB fishing and slots on TPOWER Malaysia. Learn features, game types, compatibility, and FAQs.",
      zh: "TPOWER JDB 专区：热门捕鱼厅与老虎机，玩法特色、设备兼容与常见问题。",
    },
  },
  {
    id: "sexy-baccarat",
    slug: "sexy-gaming",
    name: "Sexy Gaming",
    description: {
      en: "Familiar Asian live baccarat streams with multi-table browsing and phone-friendly broadcast quality.",
      zh: "本地玩家熟悉的亚洲真人百家乐，多桌切换方便，手机直播画质稳定。",
    },
    introduction: {
      en: "Sexy Gaming (AE Sexy) focuses on live baccarat streams that many Malaysian players already recognise. TPOWER presents these tables with clear seating states and stable video so sessions stay readable on phones.",
      zh: "Sexy Gaming（AE Sexy）专注许多马来西亚玩家已认识的真人百家乐直播。TPOWER 以清晰座位状态和稳定画面呈现，手机上看牌面也轻松。",
    },
    features: [
      { en: "Live baccarat focus", zh: "主打真人百家乐" },
      { en: "Multi-table browsing", zh: "多桌切换浏览方便" },
      { en: "Stable mobile streams", zh: "手机直播稳定流畅" },
      { en: "Familiar Asian live formats", zh: "亚洲玩家熟悉的真人格式" },
    ],
    gameTypes: [
      { en: "Live casino", zh: "真人视讯" },
      { en: "Baccarat", zh: "百家乐" },
    ],
    compatibility: {
      en: "Mobile and desktop browsers; stable connection recommended.",
      zh: "支持手机与电脑浏览器，建议保持网络稳定。",
    },
    logo: "/images/providers/ae-sexy.png",
    categories: ["live-casino", "table"],
    popularGameIds: ["tp-2649","tp-2648","tp-2646"],
    faqs: providerFaqs("Sexy Gaming"),
    metaTitle: { en: "Sexy Gaming on TPOWER", zh: "Sexy Gaming 真人百家乐｜TPOWER" },
    metaDescription: {
      en: "Enjoy Sexy Gaming live baccarat on TPOWER Malaysia — features, popular tables, compatibility, and FAQs.",
      zh: "TPOWER Sexy Gaming 真人百家乐：热门桌台、直播特色、设备兼容与常见问题。",
    },
  },
  {
    id: "dream-gaming",
    slug: "dream-gaming",
    name: "Dream Gaming",
    description: {
      en: "Southeast Asia–style live baccarat with clear table UI — a regional complement to Evolution on TPOWER.",
      zh: "东南亚风格真人百家乐，牌桌界面清楚——在 TPOWER 与 Evolution 形成区域互补。",
    },
    introduction: {
      en: "Dream Gaming serves players who want straightforward live baccarat with regional production style. On TPOWER, Dream Gaming complements Evolution and Sexy Gaming so live fans have meaningful choice without a noisy lobby.",
      zh: "Dream Gaming 服务想要直接、东南亚本地风格真人百家乐的玩家。在 TPOWER，它与 Evolution、Sexy Gaming 互补，让真人爱好者有更多桌型可选，大厅也不吵。",
    },
    features: [
      { en: "Regional live baccarat production", zh: "区域风格真人百家乐" },
      { en: "Clear table interfaces", zh: "牌桌界面简洁清楚" },
      { en: "Complementary live catalogue depth", zh: "与主流真人厂商互补" },
      { en: "Mobile stream support", zh: "支持手机直播观看" },
    ],
    gameTypes: [{ en: "Live casino", zh: "真人视讯" }],
    compatibility: {
      en: "Desktop and mobile browsers on TPOWER.",
      zh: "TPOWER 电脑与手机浏览器均可使用。",
    },
    logo: "/images/providers/dream-gaming.png",
    categories: ["live-casino"],
    popularGameIds: [
      "seed-dream-gaming-dg-baccarat-1",
      "seed-dream-gaming-dg-speed-baccarat",
      "seed-dream-gaming-dg-roulette",
    ],
    faqs: providerFaqs("Dream Gaming"),
    metaTitle: { en: "Dream Gaming TPOWER", zh: "Dream Gaming 真人视讯｜TPOWER" },
    metaDescription: {
      en: "Discover Dream Gaming live casino tables on TPOWER Malaysia with features, compatibility, and FAQs.",
      zh: "TPOWER Dream Gaming 真人视讯桌台：玩法特色、设备兼容与常见问题。",
    },
  },
  {
    id: "microgaming",
    slug: "microgaming",
    name: "Microgaming",
    description: {
      en: "Legacy slot depth with classic and modern titles — curated on TPOWER for readable rules, not catalogue spam.",
      zh: "老牌老虎机目录深厚，经典与现代并存——TPOWER 精选上架，重规则清楚不堆量。",
    },
    introduction: {
      en: "Microgaming brings catalogue depth. TPOWER selects Microgaming titles that remain readable and performant, favouring clarity over an inflated library dump.",
      zh: "Microgaming 胜在目录深度。TPOWER 只精选规则清楚、运行稳定的作品，不为了数量而堆库。",
    },
    features: [
      { en: "Deep slot heritage", zh: "深厚老虎机品牌底蕴" },
      { en: "Classic and modern formats", zh: "经典与现代玩法并存" },
      { en: "Curated listing on TPOWER", zh: "TPOWER 严选上架" },
      { en: "Desktop and mobile support", zh: "电脑手机双端支持" },
    ],
    gameTypes: [{ en: "Slots", zh: "老虎机" }],
    compatibility: {
      en: "Desktop and mobile web on TPOWER.",
      zh: "TPOWER 电脑与手机网页均可游玩。",
    },
    logo: "/images/providers/microgaming.png",
    categories: ["slots"],
    popularGameIds: [
      "seed-microgaming-immortal-romance",
      "seed-microgaming-thunderstruck-ii",
      "seed-microgaming-mega-moolah",
    ],
    faqs: providerFaqs("Microgaming"),
    metaTitle: { en: "Microgaming on TPOWER", zh: "Microgaming 老虎机｜TPOWER 精选" },
    metaDescription: {
      en: "Explore curated Microgaming slots on TPOWER Casino Malaysia — features, game types, and FAQs.",
      zh: "TPOWER Microgaming 精选老虎机：玩法特色、游戏类型与常见问题。",
    },
  },
  {
    id: "playn-go",
    slug: "playn-go",
    name: "Play'n GO",
    description: {
      en: "Inventive slot mechanics and thematic storytelling for players who want variety beyond lobby staples.",
      zh: "创新老虎机机制与强主题叙事，给想换口味、不甘只玩大厅常客的玩家。",
    },
    introduction: {
      en: "Play'n GO is valued for inventive slot systems and strong thematic storytelling. TPOWER lists Play'n GO for players who want variety beyond the most repeated lobby staples.",
      zh: "Play'n GO 以创新老虎机机制和强主题叙事著称。TPOWER 收录该厂商，给想换口味、不想只玩大厅常客的玩家里更多选择。",
    },
    features: [
      { en: "Inventive slot mechanics", zh: "创新老虎机特色机制" },
      { en: "Strong thematic presentation", zh: "主题呈现有故事感" },
      { en: "Curated, not cluttered, listing", zh: "精选上架，不杂乱堆砌" },
      { en: "Cross-device play", zh: "跨设备无缝游玩" },
    ],
    gameTypes: [{ en: "Slots", zh: "老虎机" }],
    compatibility: {
      en: "Mobile and desktop browsers supported.",
      zh: "支持手机与电脑浏览器。",
    },
    logo: "/images/providers/playn-go.png",
    categories: ["slots"],
    popularGameIds: [
      "seed-playn-go-book-of-dead",
      "seed-playn-go-reactoonz",
      "seed-playn-go-moon-princess",
    ],
    faqs: providerFaqs("Play'n GO"),
    metaTitle: { en: "Play'n GO on TPOWER", zh: "Play'n GO 老虎机｜TPOWER" },
    metaDescription: {
      en: "Play curated Play'n GO slots on TPOWER Malaysia. See features, compatibility, and FAQs.",
      zh: "TPOWER Play'n GO 精选老虎机：特色玩法、设备兼容与常见问题。",
    },
  },
  {
    id: "spribe",
    slug: "spribe",
    name: "Spribe",
    description: {
      en: "Crash and instant games with transparent multiplier curves — ideal for short, readable mobile rounds.",
      zh: "爆点与即时游戏，倍率曲线透明——适合短局、自己掌控收手的手机开玩。",
    },
    introduction: {
      en: "Spribe specialises in instant and crash-style games with transparent multiplier curves. On TPOWER, Spribe complements JILI crash titles for players who want short, readable specialty sessions.",
      zh: "Spribe 专注倍率透明的即时与爆点类游戏。在 TPOWER，它与 JILI 爆点作品互补，适合喜欢短局、想自己掌控收手的玩家。",
    },
    features: [
      { en: "Transparent crash-style rounds", zh: "爆点回合，倍率公开透明" },
      { en: "Instant game formats", zh: "即时特色游戏格式" },
      { en: "Lightweight mobile performance", zh: "手机轻量，运行流畅" },
      { en: "Clear session rhythm", zh: "回合节奏清楚可控" },
    ],
    gameTypes: [
      { en: "Crash", zh: "爆点" },
      { en: "Arcade", zh: "街机" },
    ],
    compatibility: {
      en: "Excellent on mobile; desktop fully supported.",
      zh: "手机表现优秀，电脑端完整支持。",
    },
    logo: "/images/providers/spribe.png",
    categories: ["crash", "arcade"],
    popularGameIds: [
      "seed-spribe-aviator",
      "seed-spribe-crash-x",
      "seed-spribe-plinko",
    ],
    faqs: providerFaqs("Spribe"),
    featured: true,
    metaTitle: { en: "Spribe Games on TPOWER", zh: "Spribe 爆点游戏｜TPOWER" },
    metaDescription: {
      en: "Discover Spribe crash and instant games on TPOWER Malaysia — features, compatibility, and FAQs.",
      zh: "TPOWER Spribe 专区：热门爆点与即时游戏，特色玩法、设备兼容与常见问题。",
    },
  },
  {
    id: "spadegaming",
    slug: "spadegaming",
    name: "Spadegaming",
    description: {
      en: "Asia-focused slots and fishing rooms with theme density Malaysian players recognise and return to.",
      zh: "亚洲主题老虎机与捕鱼厅，本地玩家熟悉的风格密度，回头率高。",
    },
    introduction: {
      en: "Spadegaming is a familiar name for Malaysian players seeking fishing and slot variety with Asian theme density. TPOWER curates Spadegaming for quality sessions rather than catalogue inflation.",
      zh: "想找亚洲主题丰富的捕鱼和老虎机，马来西亚玩家对 Spadegaming 并不陌生。TPOWER 精选上架，重质量不重数量。",
    },
    features: [
      { en: "Asia-focused themes", zh: "亚洲文化主题浓郁" },
      { en: "Fishing and slots coverage", zh: "捕鱼与老虎机双线覆盖" },
      { en: "Familiar regional formats", zh: "本地玩家熟悉的玩法格式" },
      { en: "Mobile-ready delivery", zh: "手机端交付流畅" },
    ],
    gameTypes: [
      { en: "Slots", zh: "老虎机" },
      { en: "Fishing", zh: "捕鱼" },
    ],
    compatibility: {
      en: "Desktop and mobile on TPOWER.",
      zh: "TPOWER 电脑与手机均可游玩。",
    },
    logo: "/images/providers/spadegaming.png",
    categories: ["slots", "fishing"],
    popularGameIds: ["tp-13129","tp-13127","tp-13146"],
    faqs: providerFaqs("Spadegaming"),
    featured: true,
    metaTitle: { en: "Spadegaming on TPOWER", zh: "Spadegaming｜TPOWER 捕鱼老虎机" },
    metaDescription: {
      en: "Play Spadegaming slots and fishing on TPOWER Malaysia. Features, popular titles, and FAQs included.",
      zh: "TPOWER Spadegaming 专区：热门捕鱼厅与老虎机，特色玩法与常见问题。",
    },
  },
  {
    id: "habanero",
    slug: "habanero",
    name: "Habanero",
    description: {
      en: "Clear-rule slots with consistent math models — built for players who value clarity over spectacle.",
      zh: "规则直截了当的老虎机，数学模型稳定——适合重视清楚规则多于花哨表演的玩家。",
    },
    introduction: {
      en: "Habanero offers straightforward slot experiences with readable rules. TPOWER includes Habanero for players who value clarity and consistent mathematics over spectacle.",
      zh: "Habanero 提供规则直截了当的老虎机体验。TPOWER 收录该厂商，服务重视清楚规则和稳定数学、不追求花哨表演的玩家。",
    },
    features: [
      { en: "Clear rule presentation", zh: "规则说明清楚易懂" },
      { en: "Consistent math models", zh: "数学模型稳定一致" },
      { en: "Diverse theme range", zh: "主题种类多样" },
      { en: "Reliable mobile play", zh: "手机游玩稳定可靠" },
    ],
    gameTypes: [{ en: "Slots", zh: "老虎机" }],
    compatibility: {
      en: "Desktop and mobile browsers.",
      zh: "支持电脑与手机浏览器。",
    },
    logo: null,
    categories: ["slots"],
    popularGameIds: [
      "seed-habanero-hot-hot-summer",
      "seed-habanero-koi-gate",
      "seed-habanero-fa-cai-shen",
    ],
    faqs: providerFaqs("Habanero"),
    metaTitle: { en: "Habanero Slots on TPOWER", zh: "Habanero 老虎机｜TPOWER" },
    metaDescription: {
      en: "Browse Habanero slots on TPOWER Casino Malaysia — clear rules, features, and FAQs for informed play.",
      zh: "TPOWER Habanero 老虎机：规则清楚、特色玩法与常见问题，帮你理性选游戏。",
    },
  },
  {
    id: "sbo",
    slug: "sbo",
    name: "SBO Sports",
    description: {
      en: "Football-first sports markets with basketball and regional favourites — clear odds for mobile decision-making.",
      zh: "足球优先体育盘口，兼篮球与本地热门赛事——赔率清楚，手机上也好做决定。",
    },
    introduction: {
      en: "SBO Sports powers TPOWER's sportsbook experience with football-first markets and regional coverage Malaysian fans expect. Odds presentation stays clear so decisions remain readable on mobile.",
      zh: "SBO Sports 驱动 TPOWER 体育博彩体验，以足球盘口为主，覆盖马来西亚球迷关注的区域赛事。赔率展示简洁，手机上看盘做决定都轻松。",
    },
    features: [
      { en: "Football-first market depth", zh: "足球盘口深度领先" },
      { en: "Basketball and regional sports", zh: "篮球与本地热门体育" },
      { en: "Clear odds presentation", zh: "赔率界面清晰易读" },
      { en: "Mobile sports browsing", zh: "手机体育浏览顺畅" },
    ],
    gameTypes: [{ en: "Sports", zh: "体育博彩" }],
    compatibility: {
      en: "Mobile and desktop sportsbook views on TPOWER.",
      zh: "TPOWER 手机与电脑体育页面均可使用。",
    },
    logo: "/images/providers/sbo.png",
    categories: ["sports"],
    popularGameIds: [
      "seed-sbo-football-markets",
      "seed-sbo-premier-league-hub",
      "seed-sbo-nba-markets",
    ],
    faqs: providerFaqs("SBO Sports"),
    featured: true,
    metaTitle: { en: "SBO Sports on TPOWER", zh: "SBO 体育博彩｜TPOWER 足球盘口" },
    metaDescription: {
      en: "Follow SBO Sports markets on TPOWER Malaysia — football, basketball, features, and FAQs.",
      zh: "TPOWER SBO 体育博彩：足球篮球盘口、特色功能与常见问题。",
    },
  },
];

function categoryMatchesFilter(
  categories: GameCategory[],
  filter: ProviderFilterId,
): boolean {
  if (filter === "all") return true;
  if (filter === "live-casino") {
    return categories.some((c) => c === "live-casino" || c === "table");
  }
  return categories.includes(filter as GameCategory);
}

export function getProvidersByFilter(filter: ProviderFilterId): Provider[] {
  if (filter === "all") return providers;
  return providers.filter((provider) =>
    categoryMatchesFilter(provider.categories, filter),
  );
}

export function getProviderById(id: string): Provider | undefined {
  return providers.find((provider) => provider.id === id);
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find((provider) => provider.slug === slug);
}

export function getFeaturedProviders(): Provider[] {
  return providers.filter((provider) => provider.featured);
}

export function getRelatedProviders(slug: string, limit = 3): Provider[] {
  const current = getProviderBySlug(slug);
  if (!current) return providers.slice(0, limit);
  return providers
    .filter(
      (provider) =>
        provider.slug !== slug &&
        provider.categories.some((category) =>
          current.categories.includes(category),
        ),
    )
    .slice(0, limit);
}

/**
 * Catalogue ids/folders that map to a CMS provider record.
 * Keeps provider pages resilient when folder naming differs slightly.
 */
const PROVIDER_CATALOGUE_ALIASES: Record<string, string[]> = {
  "sexy-gaming": ["sexy-baccarat"],
  "sexy-baccarat": ["sexy-baccarat"],
  "dream-gaming": ["dg", "dream-gaming"],
};

export function getProviderCatalogueIds(provider: Provider): string[] {
  const extras = [
    ...(PROVIDER_CATALOGUE_ALIASES[provider.slug] ?? []),
    ...(PROVIDER_CATALOGUE_ALIASES[provider.id] ?? []),
  ];
  return [...new Set([provider.id, provider.slug, ...extras])];
}
