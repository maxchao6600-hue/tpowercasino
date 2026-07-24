import type { CategorySeoContent } from "@/types";

export const categorySeoContent: CategorySeoContent[] = [
  {
    path: "/slots",
    category: "slots",
    metaTitle: { en: "TPOWER Slots Malaysia", zh: "TPOWER 老虎机｜PG电子热门推荐" },
    metaDescription: {
      en: "Play curated TPOWER slots from PG Soft, Pragmatic Play and more. Mobile-first titles, FAQs, and responsible play tips for Malaysia.",
      zh: "TPOWER线上博彩 精选 PG电子、Pragmatic Play 等热门老虎机，手机畅玩，附常见问题与理性博彩提示，适合马来西亚玩家。",
    },
    intro: {
      en: "TPOWER Slots focuses on readable mathematics, mobile performance, and studios players already trust. Instead of dumping thousands of low-signal titles into the lobby, we curate slots from providers such as PG Soft, Pragmatic Play, Habanero, and Play'n GO so every session starts with clarity.",
      zh: "TPOWER 老虎机专区只上架口碑好、手机跑得顺的电子游戏。PG电子、Pragmatic Play、Habanero、Play'n GO 等厂商精选入库，规则清楚、RTP 好查，开局不用猜。",
    },
    benefits: [
      { en: "Mobile-first slot performance", zh: "手机优先，晚间高峰也流畅" },
      { en: "Clear feature and rule presentation", zh: "特色玩法与规则一目了然" },
      { en: "Curated provider quality", zh: "严选一线游戏厂商" },
      { en: "Responsible play reminders nearby", zh: "理性博彩提醒随手可及" },
    ],
    gameTypes: [
      { en: "Cascading slots", zh: "连消类老虎机" },
      { en: "Classic video slots", zh: "经典视频老虎机" },
      { en: "Feature-buy and bonus-style titles where offered", zh: "支持购免费旋转等特色玩法" },
    ],
    responsibleNote: {
      en: "Slots are entertainment. Set deposit limits before long sessions and visit Responsible Gaming if you need control tools.",
      zh: "老虎机是娱乐，不是赚钱工具。长时间游玩前请设好存款上限；需要限额或冷静期，可到负责任博彩页面设置。",
    },
    faqs: [
      {
        question: { en: "Which slot providers are on TPOWER?", zh: "TPOWER 有哪些老虎机厂商？" },
        answer: {
          en: "Popular options include PG Soft, Pragmatic Play, Habanero, Microgaming, Play'n GO, JILI, and Spadegaming.",
          zh: "热门厂商包括 PG电子、Pragmatic Play、Habanero、Microgaming、Play'n GO、JILI 和 Spadegaming，可在厂商页面查看详细介绍。",
        },
      },
      {
        question: { en: "Can I play TPOWER slots on mobile?", zh: "TPOWER 老虎机可以用手机玩吗？" },
        answer: {
          en: "Yes. Slots are curated for mobile web and the TPOWER app.",
          zh: "可以。老虎机针对手机网页和 TPOWER APP 优化，通勤或晚上用手机都能顺畅开转。",
        },
      },
    ],
    relatedPaths: [
      { href: "/providers/pg-soft", label: { en: "PG Soft", zh: "PG电子" } },
      { href: "/providers/pragmatic-play", label: { en: "Pragmatic Play", zh: "Pragmatic Play" } },
      { href: "/blog/tpower-mobile-app", label: { en: "Mobile app guide", zh: "手机APP攻略" } },
      { href: "/promotions", label: { en: "Promotions", zh: "查看优惠" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/live-casino",
    category: "live-casino",
    metaTitle: { en: "TPOWER Live Casino", zh: "TPOWER 真人视讯｜百家乐直播桌台" },
    metaDescription: {
      en: "TPOWER Live Casino Malaysia with Evolution, Sexy Gaming and Dream Gaming. Tables, FAQs, and peak-hour tips.",
      zh: "TPOWER 真人视讯娱乐城，Evolution、Sexy Gaming、Dream Gaming 直播桌台齐全，附高峰时段贴士与常见问题。",
    },
    intro: {
      en: "TPOWER Live Casino brings studio-grade tables to Malaysia players who want baccarat, blackjack, and game shows without noisy lobby theatre. Evolution anchors the catalogue, while Sexy Gaming and Dream Gaming expand live choice.",
      zh: "TPOWER 真人视讯为马来西亚玩家带来演播级桌台：百家乐、二十一点、游戏秀，画面干净不闹场。Evolution 是主力，Sexy Gaming 和 Dream Gaming 提供更多桌型选择。",
    },
    benefits: [
      { en: "Broadcast-focused live studios", zh: "专业直播棚，画面稳定清晰" },
      { en: "Peak-hour capacity awareness", zh: "高峰时段桌台容量提示" },
      { en: "Multiple live providers", zh: "多家真人厂商同台竞技" },
      { en: "Mobile stream readability", zh: "手机流量也能看清牌面" },
    ],
    gameTypes: [
      { en: "Baccarat", zh: "百家乐" },
      { en: "Blackjack", zh: "二十一点" },
      { en: "Game shows", zh: "真人游戏秀" },
    ],
    responsibleNote: {
      en: "Live sessions can move quickly. Use time reminders and limits from Responsible Gaming.",
      zh: "真人局节奏快，容易一坐就久。建议开启时间提醒和存款限额，理性控制每局时长。",
    },
    faqs: [
      {
        question: { en: "Who provides TPOWER live tables?", zh: "TPOWER 真人视讯是哪些厂商提供？" },
        answer: {
          en: "Evolution is central, with Sexy Gaming and Dream Gaming available for additional live formats.",
          zh: "以 Evolution 为核心，另有 Sexy Gaming 和 Dream Gaming 提供更多百家乐及特色真人玩法。",
        },
      },
    ],
    relatedPaths: [
      { href: "/providers/evolution", label: { en: "Evolution", zh: "Evolution 真人" } },
      { href: "/providers/sexy-gaming", label: { en: "Sexy Gaming", zh: "Sexy Gaming" } },
      { href: "/blog/tpower-login-guide", label: { en: "Login guide", zh: "登录教程" } },
      { href: "/vip", label: { en: "VIP", zh: "VIP 会员" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/sports",
    category: "sports",
    metaTitle: { en: "TPOWER Sports Malaysia", zh: "TPOWER 体育博彩｜足球篮球盘口" },
    metaDescription: {
      en: "Follow TPOWER Sports markets powered by SBO — football, basketball, clear odds, FAQs for Malaysia players.",
      zh: "TPOWER 体育博彩由 SBO 驱动，足球篮球盘口清晰，滚球顺畅，马来西亚玩家常见问题一并解答。",
    },
    intro: {
      en: "TPOWER Sports keeps odds presentation clear and football-first, with basketball and regional markets for Malaysian fans. The experience prioritises readability on mobile over cluttered bet builders.",
      zh: "TPOWER 体育博彩以足球为主，篮球和本地热门赛事同样齐全。赔率展示简洁，手机上看盘不费劲，比复杂串关界面更实用。",
    },
    benefits: [
      { en: "Football-first market depth", zh: "足球盘口深度领先" },
      { en: "Clear mobile odds UI", zh: "手机赔率界面清爽易读" },
      { en: "Regional sports coverage", zh: "覆盖本地球迷关注赛事" },
      { en: "Transparent payment pairing", zh: "入金出金流程透明配套" },
    ],
    gameTypes: [
      { en: "Football", zh: "足球" },
      { en: "Basketball", zh: "篮球" },
      { en: "Regional favourites", zh: "本地热门赛事" },
    ],
    responsibleNote: {
      en: "Treat sports betting as paid entertainment. Never chase a bad beat with money you need elsewhere.",
      zh: "体育博彩是付费娱乐，别用生活费去追一场输掉的注。设定预算，输了就停，别硬追。",
    },
    faqs: [
      {
        question: { en: "Which sportsbook powers TPOWER?", zh: "TPOWER 体育博彩用哪家平台？" },
        answer: {
          en: "SBO Sports is the primary sports provider listed on TPOWER.",
          zh: "TPOWER 体育博彩主要由 SBO Sports 提供，足球篮球等主流盘口均可在此查看。",
        },
      },
    ],
    relatedPaths: [
      { href: "/providers/sbo", label: { en: "SBO Sports", zh: "SBO 体育" } },
      { href: "/payment-methods", label: { en: "Payment methods", zh: "支付方式" } },
      { href: "/blog/how-to-deposit-tpower", label: { en: "Deposit guide", zh: "存款教程" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/fishing",
    category: "fishing",
    metaTitle: { en: "TPOWER Fishing Games", zh: "TPOWER 捕鱼游戏｜JILI 热门推荐" },
    metaDescription: {
      en: "Play TPOWER fishing games from JILI, JDB and Spadegaming. Arcade rooms, FAQs, and mobile tips for Malaysia.",
      zh: "TPOWER 捕鱼游戏收录 JILI、JDB、Spadegaming 热门厅，街机多人对战，手机操作顺畅，马来西亚玩家攻略齐全。",
    },
    intro: {
      en: "TPOWER Fishing gathers arcade-style multiplayer rooms with progressive targets and mobile-ready controls. Providers such as JILI, JDB, and Spadegaming cover the formats Malaysian players recognise.",
      zh: "TPOWER 捕鱼专区汇集街机风多人厅：Boss 战、连击奖励、触控好上手。JILI、JDB、Spadegaming 等厂商覆盖马来西亚玩家最熟悉的捕鱼玩法。",
    },
    benefits: [
      { en: "Arcade multiplayer energy", zh: "街机多人对战，气氛热闹" },
      { en: "Familiar Asian fishing formats", zh: "亚洲经典捕鱼玩法齐全" },
      { en: "Mobile-first controls", zh: "触控操作，手机专优" },
      { en: "Curated rooms, not clutter", zh: "精选房间，不乱堆游戏" },
    ],
    gameTypes: [
      { en: "Multiplayer fishing", zh: "多人同房捕鱼" },
      { en: "Boss encounter rooms", zh: "Boss 挑战房" },
    ],
    responsibleNote: {
      en: "Arcade pace can encourage rapid replay. Set session reminders before you start.",
      zh: "捕鱼节奏快，容易一局接一局。开玩前先设好时限提醒，别玩到停不下来。",
    },
    faqs: [
      {
        question: { en: "Are fishing games available on the app?", zh: "TPOWER APP 能玩捕鱼游戏吗？" },
        answer: {
          en: "Yes. Fishing titles are available through mobile web and the TPOWER app experience.",
          zh: "可以。捕鱼游戏支持手机网页和 TPOWER APP，下载官方客户端后换房更顺。",
        },
      },
    ],
    relatedPaths: [
      { href: "/providers/jili", label: { en: "JILI", zh: "JILI 捕鱼" } },
      { href: "/providers/jdb", label: { en: "JDB", zh: "JDB 捕鱼" } },
      { href: "/download", label: { en: "Download app", zh: "立即下载" } },
      { href: "/blog/how-to-download-tpower", label: { en: "Download guide", zh: "下载安装教程" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/lottery",
    category: "lottery",
    metaTitle: { en: "TPOWER Lottery Games", zh: "TPOWER 彩票游戏｜数字开奖娱乐" },
    metaDescription: {
      en: "Explore TPOWER lottery and number-draw games with transparent cycles, FAQs, and responsible play guidance.",
      zh: "TPOWER 彩票与数字开奖游戏，开奖周期透明、规则清楚，附理性博彩指引与常见问题。",
    },
    intro: {
      en: "TPOWER Lottery focuses on number games and draw-style entertainment with readable rules and clear result timing. The category is built for players who want structured draws rather than noisy jackpot theatre.",
      zh: "TPOWER 彩票专区主打数字选号和定时开奖，规则写得明白、结果时间固定。适合喜欢规律开奖、不想被夸张头奖广告干扰的玩家。",
    },
    benefits: [
      { en: "Transparent draw cycles", zh: "开奖周期公开透明" },
      { en: "Readable number-game rules", zh: "选号规则简单好懂" },
      { en: "Calm presentation", zh: "界面简洁不吵不闹" },
      { en: "Mobile-friendly layouts", zh: "手机布局友好易操作" },
    ],
    gameTypes: [
      { en: "Number picks", zh: "数字选号" },
      { en: "Daily draw formats", zh: "每日定时开奖" },
    ],
    responsibleNote: {
      en: "Draw games should stay optional entertainment. Never treat results as income planning.",
      zh: "彩票是可选娱乐，别把开奖结果当收入计划。小额玩玩可以，别超出娱乐预算。",
    },
    faqs: [
      {
        question: { en: "Are lottery results instant?", zh: "TPOWER 彩票开奖是即时的吗？" },
        answer: {
          en: "Timing depends on each title's published draw cycle. Rules are shown in the game interface.",
          zh: "视各款游戏公布的开奖周期而定，具体规则和时间在游戏界面里都有说明。",
        },
      },
    ],
    relatedPaths: [
      { href: "/games", label: { en: "All games", zh: "全部游戏" } },
      { href: "/promotions", label: { en: "Promotions", zh: "查看优惠" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
      { href: "/responsible-gaming", label: { en: "Responsible gaming", zh: "负责任博彩" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/poker",
    category: "poker",
    metaTitle: { en: "TPOWER Poker & Tables", zh: "TPOWER 扑克桌游｜策略牌桌精选" },
    metaDescription: {
      en: "Discover TPOWER poker-inspired and table classics with clear rules, FAQs, and links to live tables.",
      zh: "TPOWER 扑克风格与经典桌游，规则清晰，可衔接真人视讯桌台，附常见问题解答。",
    },
    intro: {
      en: "TPOWER table experiences include poker-inspired formats and classic tables for players who want structured decisions rather than pure pace games. Live blackjack and related tables are available through Live Casino providers.",
      zh: "TPOWER 桌游区收录扑克风格和经典牌桌，适合喜欢动脑、讲究策略的玩家。真人二十一点等桌台可在真人视讯厂商页面找到。",
    },
    benefits: [
      { en: "Structured table decision making", zh: "策略决策，节奏可控" },
      { en: "Clear rule surfaces", zh: "牌桌规则界面清楚" },
      { en: "Live table pathways", zh: "可跳转真人视讯桌台" },
      { en: "Desktop and mobile access", zh: "电脑手机都能玩" },
    ],
    gameTypes: [
      { en: "Poker-inspired formats", zh: "扑克风格玩法" },
      { en: "Blackjack tables", zh: "二十一点桌" },
    ],
    responsibleNote: {
      en: "Table games reward patience. Keep bankroll rules fixed before you sit.",
      zh: "桌游比老虎机更考验耐心。入座前先定好本局预算，别边玩边加码。",
    },
    faqs: [
      {
        question: { en: "Where are live tables listed?", zh: "真人牌桌在哪里找？" },
        answer: {
          en: "Open Live Casino or provider pages such as Evolution for live table inventories.",
          zh: "进入真人视讯专区，或打开 Evolution 等厂商页面，即可查看完整真人桌台列表。",
        },
      },
    ],
    relatedPaths: [
      { href: "/live-casino", label: { en: "Live Casino", zh: "真人视讯" } },
      { href: "/providers/evolution", label: { en: "Evolution", zh: "Evolution" } },
      { href: "/games", label: { en: "Games", zh: "进入游戏大厅" } },
      { href: "/blog/tpower-login-guide", label: { en: "Login guide", zh: "登录教程" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/arcade",
    category: "arcade",
    metaTitle: { en: "TPOWER Arcade Games", zh: "TPOWER 街机游戏｜快节奏特色玩法" },
    metaDescription: {
      en: "Browse TPOWER arcade and specialty games including fast formats from JILI and Spribe with FAQs.",
      zh: "TPOWER 街机与特色游戏，JILI、Spribe 快节奏玩法齐全，短局娱乐，附常见问题。",
    },
    intro: {
      en: "TPOWER Arcade covers specialty and instant-style entertainment for short sessions. Titles from JILI and Spribe emphasise pace and transparent round structure.",
      zh: "TPOWER 街机区适合短时间娱乐：JILI、Spribe 等特色厂商，回合快、结果透明，通勤或休息空档来几局刚好。",
    },
    benefits: [
      { en: "Short-session design", zh: "短局设计，随时开玩" },
      { en: "Transparent round feedback", zh: "每局结果反馈即时" },
      { en: "Mobile specialty performance", zh: "手机特色游戏流畅运行" },
      { en: "Complementary to slots and live", zh: "与老虎机、真人互补搭配" },
    ],
    gameTypes: [
      { en: "Instant specialty games", zh: "即时特色小游戏" },
      { en: "Arcade-leaning formats", zh: "街机风格玩法" },
    ],
    responsibleNote: {
      en: "Fast rounds can stack quickly. Use deposit limits before arcade sessions.",
      zh: "快回合容易连开好几局。街机游玩前请先设好存款上限，控制总花费。",
    },
    faqs: [
      {
        question: { en: "Is arcade the same as crash?", zh: "街机和爆点游戏一样吗？" },
        answer: {
          en: "They overlap. Crash has its own page for multiplier-round titles, while Arcade covers broader specialty formats.",
          zh: "有重叠但不完全相同。爆点游戏有独立专区，主打倍率回合；街机区覆盖更广的特色快玩法。",
        },
      },
    ],
    relatedPaths: [
      { href: "/crash", label: { en: "Crash games", zh: "爆点游戏" } },
      { href: "/providers/spribe", label: { en: "Spribe", zh: "Spribe" } },
      { href: "/providers/jili", label: { en: "JILI", zh: "JILI" } },
      { href: "/download", label: { en: "Download", zh: "立即下载" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
  {
    path: "/crash",
    category: "crash",
    metaTitle: { en: "TPOWER Crash Games", zh: "TPOWER 爆点游戏｜倍率回合专区" },
    metaDescription: {
      en: "Play TPOWER crash games with transparent multiplier rounds from JILI and Spribe. FAQs and responsible tips included.",
      zh: "TPOWER 爆点游戏，JILI、Spribe 倍率回合透明可查，附常见问题与理性博彩提示。",
    },
    intro: {
      en: "TPOWER Crash Games are built around short multiplier rounds with transparent curves. The category suits players who want fast specialty sessions with readable outcomes.",
      zh: "TPOWER 爆点专区主打短倍率回合，曲线公开、结果好读。适合喜欢快节奏、想自己决定何时收手的玩家。",
    },
    benefits: [
      { en: "Transparent multiplier presentation", zh: "倍率曲线公开透明" },
      { en: "Short round rhythm", zh: "短回合，节奏紧凑" },
      { en: "Lightweight mobile play", zh: "手机轻量，加载快" },
      { en: "Specialty provider depth", zh: "特色厂商深度收录" },
    ],
    gameTypes: [
      { en: "Crash multiplier rounds", zh: "爆点倍率回合" },
      { en: "Instant specialty variants", zh: "即时特色变体" },
    ],
    responsibleNote: {
      en: "Crash rounds are volatile by design. Decide an exit rule before the first round.",
      zh: "爆点波动大是设计使然。第一局开始前先定好收手规则，别凭感觉硬追倍率。",
    },
    faqs: [
      {
        question: { en: "Which providers offer crash on TPOWER?", zh: "TPOWER 爆点游戏有哪些厂商？" },
        answer: {
          en: "JILI and Spribe are primary specialty providers listed for crash-style play.",
          zh: "主要是 JILI 和 Spribe 两家特色厂商，可在各自页面查看热门爆点游戏。",
        },
      },
    ],
    relatedPaths: [
      { href: "/arcade", label: { en: "Arcade", zh: "街机游戏" } },
      { href: "/providers/spribe", label: { en: "Spribe", zh: "Spribe" } },
      { href: "/providers/jili", label: { en: "JILI", zh: "JILI" } },
      { href: "/responsible-gaming", label: { en: "Responsible gaming", zh: "负责任博彩" } },
      { href: "/register", label: { en: "Register", zh: "立即注册" } },
    ],
  },
];

export function getCategorySeo(path: string): CategorySeoContent | undefined {
  return categorySeoContent.find((item) => item.path === path);
}
