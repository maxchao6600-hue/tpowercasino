import {
  writeIntent,
  P,
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
  compareRow,
  CTA,
  LOBBY,
} from "./lib/intent-write.mjs";

const H = (n) => `/images/intent/heroes/${n}.webp`;
const NEWS = "/images/news/tpower-live-casino-tables.webp";
const PROMO = "/images/promotions/tpower-promotions-hero.webp";

function baseFaqs(topicEn, topicZh, extras = []) {
  return [
    faq(`What is ${topicEn}?`, `${topicZh}是什么？`, `This official landing explains ${topicEn} for Malaysia TPOWER players with process clarity and safe next steps.`, `本官方着陆页为马来西亚 TPOWER 玩家清楚说明${topicZh}与安全下一步。`),
    faq(`Is this the live product page?`, `这是现场产品页吗？`, `It is the search-intent authority page; live lobbies/forms keep separate interactive routes.`, `这是搜索意图权威页；现场大厅/表单保留独立交互路由。`),
    faq(`How do I stay safe?`, `如何保持安全？`, `Use official navigation, refuse chat shortcuts, and contact Support Center with evidence when needed.`, `使用官方导航，拒绝聊天捷径，需要时带证据联系客服中心。`),
    faq(`Does Responsible Gaming apply?`, `负责任博彩适用吗？`, `Yes — always. Education pages are not chase invitations.`, `是——始终适用。教育页不是追损邀请。`),
    ...extras,
  ];
}

function pack(cfg) {
  writeIntent(cfg.file, cfg.exportName, {
    id: cfg.id,
    path: cfg.path,
    heroImage: H(cfg.hero),
    schemaExtra: cfg.schemaExtra || "none",
    primaryCtaHref: cfg.cta || "/register",
    metaTitle: cfg.metaTitle,
    metaDescription: cfg.metaDescription,
    heroTitle: cfg.heroTitle,
    heroSubtitle: cfg.heroSubtitle,
    introduction: P(cfg.introEn, cfg.introZh),
    stats: cfg.stats,
    benefitsTitle: cfg.benefitsTitle,
    benefits: cfg.benefits,
    howToTitle: cfg.howToTitle,
    howToDescription: cfg.howToDescription,
    howToSteps: cfg.howToSteps,
    sections: cfg.sections,
    comparisonTitle: cfg.comparisonTitle,
    comparisonHeaders: cfg.comparisonHeaders,
    comparisonRows: cfg.comparisonRows,
    timelineTitle: cfg.timelineTitle,
    timeline: cfg.timeline,
    trustTitle: cfg.trustTitle,
    trustItems: cfg.trustItems,
    faqTitle: cfg.faqTitle,
    faqs: cfg.faqs,
    relatedTitle: { en: "Related guides", zh: "相关指南" },
    extraLinks: [],
    ctaTitle: cfg.ctaTitle,
    ctaDescription: cfg.ctaDescription,
  });
}

const commonTrust = (a, b, c, d, e, f) => [
  trust(a[0], a[1], a[2], a[3]),
  trust(b[0], b[1], b[2], b[3]),
  trust(c[0], c[1], c[2], c[3]),
  trust(d[0], d[1], d[2], d[3]),
  trust(e[0], e[1], e[2], e[3]),
  trust(f[0], f[1], f[2], f[3]),
];

const tl = (steps) =>
  steps.map(([te, tz, be, bz]) => timeline(te, tz, be, bz));

// MOBILE APP
pack({
  file: "mobile-app.ts",
  exportName: "intentMobileApp",
  id: "mobile-app",
  path: "/mobile-app",
  hero: "mobile-app",
  schemaExtra: "SoftwareApplication",
  cta: "/download",
  metaTitle: {
    en: "TPOWER Mobile App | Official Malaysia Casino App Guide",
    zh: "TPower手机APP｜官方马来西亚博彩应用指南",
  },
  metaDescription: {
    en: "TPOWER Mobile App guide: lobby on phone, secure install paths, login continuity, payments on mobile, and responsible play habits.",
    zh: "TPOWER线上博彩手机APP指南：手机大厅、安全安装路径、登录连续、手机支付与负责任游玩习惯。",
  },
  heroTitle: { en: "TPOWER Mobile App", zh: "TPOWER线上博彩 手机APP" },
  heroSubtitle: {
    en: "Carry the official lobby — with the same account rules as desktop, and stricter install discipline.",
    zh: "携带官方大厅——与桌面同一账户规则，安装纪律更严。",
  },
  introEn: [
    `TPOWER Mobile App is the product-experience landing for phone play. Install mechanics deepen on [[/download|Download]] and [[/tpower-apk|APK]]. This page owns why mobile matters: session quality, notification hygiene, and refusing unofficial “light apps.”`,
    `The app is not a different brand. Login follows [[/tpower-login|Login]]; signup follows [[/tpower-register|Register]]. Payments still use [[/payment-methods|Payment Center]] rails.`,
    `Battery-saving modes and aggressive cleaners can kill cashier confirmations mid-OTP. Stable network beats “instant” superstition — see [[/instant-deposit|Instant Deposit]].`,
    `Promotions on mobile still have terms ([[/tpower-promotions|Promotions]], [[/welcome-bonus|Welcome Bonus]]). Touch screens do not erase wagering math.`,
    `Responsible Gaming reminders belong on the lock screen of your habits: session timers, deposit budgets, logout on shared phones.`,
    `Chinese searchers for TPower 手机APP / 下载 get MY Chinese guidance focused on official platform mobility.`,
    `VIP on mobile is still VIP on [[/vip|VIP]] — not a private APK from a host.`,
    `When the app misbehaves, Support Center wants device model and steps — not TeamViewer.`,
  ],
  introZh: [
    `「TPower手机APP」是手机游玩的产品体验着陆页。安装机制在 [[/download|下载]] 与 [[/tpower-apk|APK]] 加深。本页说明手机为何重要：会话质量、通知卫生、拒绝非官方「轻量APP」。`,
    `APP 不是另一个品牌。登录跟 [[/tpower-login|登录]]；注册跟 [[/tpower-register|注册]]。支付仍用 [[/payment-methods|支付中心]] 通道。`,
    `省电模式与激进清理会在 OTP 中途杀死收银台确认。稳定网络胜过「即时」迷信——见 [[/instant-deposit|即时存款]]。`,
    `手机上的优惠仍有条款（[[/tpower-promotions|优惠]]、[[/welcome-bonus|迎新奖金]]）。触摸屏不会抹掉流水数学。`,
    `负责任博彩提醒属于你习惯的锁屏：场次计时、存款预算、共用手机登出。`,
    `搜索 TPower 手机APP / 下载的中文用户获得聚焦官方平台移动性的大马中文指引。`,
    `手机上的 VIP 仍是 [[/vip|VIP]] 上的 VIP——不是接待发来的私人 APK。`,
    `APP 异常时，客服中心要设备型号与步骤——不要 TeamViewer。`,
  ],
  stats: [
    { vEn: "One ID", vZh: "同账户", lEn: "Same account as web", lZh: "与网页同一账户" },
    { vEn: "Official", vZh: "官方", lEn: "Install via Download/APK only", lZh: "只经下载/APK 安装" },
    { vEn: "Cashier", vZh: "收银台", lEn: "Full payment rails on mobile", lZh: "手机完整支付通道" },
    { vEn: "Logout", vZh: "登出", lEn: "Shared-phone discipline", lZh: "共用手机纪律" },
  ],
  benefitsTitle: { en: "Mobile app advantages on TPOWER", zh: "TPOWER 手机APP优势" },
  benefits: [
    feature("smartphone", "Lobby in pocket", "口袋大厅", "Games and account tools without desktop.", "无需桌面即可游戏与账户工具。"),
    feature("zap", "Faster return sessions", "更快回访场次", "Resume play after commute with less friction.", "通勤后更少摩擦继续玩。"),
    feature("shield", "Official-only installs", "仅官方安装", "Clear contrast vs chat APKs.", "与聊天 APK 清楚对照。"),
    feature("wallet", "Mobile payments", "手机支付", "FPX/DuitNow/wallets in official cashier.", "官方收银台内 FPX/DuitNow/钱包。"),
    feature("bell" in {} ? "check" : "check", "Notification hygiene", "通知卫生", "Treat urgent push copies from strangers as hostile.", "把陌生人紧迫推送文案当敌意。"),
    feature("heart", "Responsible mobile habits", "负责任手机习惯", "Timers and budgets travel with you.", "计时与预算随身。"),
  ].map((f, i) => (i === 4 ? feature("eye", "Notification hygiene", "通知卫生", "Treat urgent push copies from strangers as hostile.", "把陌生人紧迫推送文案当敌意。") : f)),
  howToTitle: { en: "How to use the TPOWER Mobile App", zh: "如何使用 TPower 手机APP" },
  howToDescription: { en: "From official install to intentional mobile play.", zh: "从官方安装到有意识的手机游玩。" },
  howToSteps: [
    howTo("Open Download hub", "打开下载中心", "Choose the path for your device.", "选择适合你设备的路径。"),
    howTo("Install officially", "官方安装", "Follow APK or store guidance as documented.", "按文档遵循 APK 或商店指引。"),
    howTo("Login", "登录", "Use your real account privately.", "私下使用真实账户。"),
    howTo("Enable only needed permissions", "只开需要的权限", "Reject odd extra asks.", "拒绝奇怪额外索取。"),
    howTo("Fund via cashier", "经收银台入金", "Payment Center rails only.", "仅支付中心通道。"),
    howTo("Play with limits", "限额游玩", "Set a session plan before the first spin/bet.", "第一轮前设定场次计划。"),
  ],
  sections: [
    section("App experience vs browser", "APP 体验 vs 浏览器", `Apps reduce tab clutter; browsers reduce install risk. Both are official when opened from real domains/packages. Pick based on your device trust model.`, `APP 减少标签杂乱；浏览器减少安装风险。从真域名/包装打开时两者都官方。按设备信任模型选择。`, H("mobile-app"), false),
    section("Mobile phishing styles", "手机钓鱼风格", `Overlay apps, fake update prompts, and “VIP light clients” target mobile users specifically. Keep Platform Security and Payment Security bookmarked.`, `覆盖层 APP、假更新提示与「VIP 轻客户端」专门针对手机用户。收藏平台安全与支付安全。`, NEWS, true),
    section("Games on mobile", "手机上的游戏", `Slots, live casino, sports, fishing, crash, and lottery landings explain categories; the Games lobby lists titles. Mobile does not invent new unofficial studios.`, `老虎机、真人、体育、捕鱼、爆点与彩票着陆页解释品类；游戏大厅列出游戏。手机不发明非官方厂商。`, LOBBY, false),
    section("Cluster for mobile intent", "手机意图集群", `APK, Download, Login, Register, Payments, Promotions, VIP, Support, Responsible Gaming.`, `APK、下载、登录、注册、支付、优惠、VIP、客服、负责任博彩。`, CTA, true),
  ],
  comparisonTitle: { en: "Official app vs “light VIP app”", zh: "官方APP vs「轻量VIP APP」" },
  comparisonHeaders: [
    { en: "Item", zh: "项目" },
    { en: "Official Mobile App", zh: "官方手机APP" },
    { en: "Unofficial light app", zh: "非官方轻量APP" },
  ],
  comparisonRows: [
    compareRow("Source", "来源", "Download/APK hub", "下载/APK 中心", "Host chat file", "接待聊天文件"),
    compareRow("Account", "账户", "Your real login", "你的真登录", "Often shared/controlled", "常被共享/控制"),
    compareRow("Payments", "支付", "Official cashier", "官方收银台", "Personal account asks", "要私人账户"),
    compareRow("Risk", "风险", "Documented", "有文档", "Account takeover common", "盗号常见"),
  ],
  timelineTitle: { en: "Mobile app timeline", zh: "手机APP时间线" },
  timeline: tl([
    ["Install", "安装", "Official Download/APK path.", "官方下载/APK 路径。"],
    ["Login", "登录", "Same account as web.", "与网页同一账户。"],
    ["Fund", "入金", "Cashier rails.", "收银台通道。"],
    ["Play", "游玩", "Within responsible limits.", "在负责任限额内。"],
  ]),
  trustTitle: { en: "Mobile trust checklist", zh: "手机信任清单" },
  trustItems: commonTrust(
    ["Official installs", "官方安装", "No chat APKs.", "无聊天 APK。"],
    ["Screen lock", "锁屏", "Protect idle devices.", "保护闲置设备。"],
    ["Logout shared", "共用登出", "Borrowed phones end sessions.", "外借手机结束会话。"],
    ["Cashier only", "仅收银台", "No personal mobile transfers.", "无私人手机转账。"],
    ["Update carefully", "谨慎更新", "Official prompts only.", "仅官方提示。"],
    ["Report fakes", "举报假APP", "Support Center + evidence.", "客服中心+证据。"],
  ),
  faqTitle: { en: "Mobile App FAQ", zh: "手机APP常见问题" },
  faqs: baseFaqs("TPOWER Mobile App", "TPower手机APP", [
    faq("Where do I get the app?", "去哪里获取APP？", "Use Download and APK guidance on this official site.", "使用本官网的下载与 APK 指引。"),
    faq("Is mobile balance separate?", "手机余额分开吗？", "No — same account wallet as web when logged into the official app.", "不——登录官方APP时与网页同一钱包。"),
    faq("Can I use promotions on mobile?", "手机能用优惠吗？", "Yes when eligible — read Promotions terms the same as desktop.", "符合资格时可以——与桌面一样阅读优惠条款。"),
    faq("iOS vs Android?", "iOS vs 安卓？", "Follow the path shown on Download for your device family.", "按下载页显示的设备路径。"),
  ]),
  ctaTitle: { en: "Install the official TPOWER app path", zh: "安装官方 TPOWER APP 路径" },
  ctaDescription: {
    en: "Open Download, install safely, login with your real account, and play within your plan.",
    zh: "打开下载，安全安装，用真实账户登录，按计划游玩。",
  },
});

// PROMOTIONS + WELCOME + FREE CREDIT + CASHBACK — compact unique packs
const promoPages = [
  {
    file: "tpower-promotions.ts",
    exportName: "intentTpowerPromotions",
    id: "tpower-promotions",
    path: "/tpower-promotions",
    hero: "tpower-promotions",
    cta: "/promotions",
    metaTitle: {
      en: "TPOWER Promotions | Official Offers Guide Malaysia",
      zh: "TPower优惠｜马来西亚官方优惠指南",
    },
    metaDescription: {
      en: "TPOWER Promotions landing: how offers work, wagering literacy, welcome vs cashback vs free credit, and how to claim safely on the official lobby.",
      zh: "TPOWER线上博彩优惠着陆页：优惠如何运作、流水素养、迎新/回馈/免费信用差异，以及如何在官方大厅安全领取。",
    },
    heroTitle: { en: "TPOWER Promotions", zh: "TPOWER线上博彩 优惠" },
    heroSubtitle: {
      en: "Read terms before you deposit for a headline — official offers, honest wagering, safer claims.",
      zh: "为标题存款前先读条款——官方优惠、诚实流水、更安全领取。",
    },
    angle: "hub",
  },
  {
    file: "welcome-bonus.ts",
    exportName: "intentWelcomeBonus",
    id: "welcome-bonus",
    path: "/welcome-bonus",
    hero: "welcome-bonus",
    cta: "/promotions",
    metaTitle: {
      en: "TPOWER Welcome Bonus | New Member Offer Guide",
      zh: "TPower迎新奖金｜新会员优惠指南",
    },
    metaDescription: {
      en: "TPOWER Welcome Bonus guide: eligibility, wagering expectations, common mistakes, and how new members claim official welcome offers.",
      zh: "TPOWER线上博彩迎新奖金指南：资格、流水预期、常见错误，以及新会员如何领取官方迎新优惠。",
    },
    heroTitle: { en: "TPOWER Welcome Bonus", zh: "TPOWER线上博彩 迎新奖金" },
    heroSubtitle: {
      en: "Start-of-journey offers explained without hype — eligibility first, deposit second.",
      zh: "旅程起点优惠不浮夸说明——先资格，后存款。",
    },
    angle: "welcome",
  },
  {
    file: "free-credit.ts",
    exportName: "intentFreeCredit",
    id: "free-credit",
    path: "/free-credit",
    hero: "free-credit",
    cta: "/promotions",
    metaTitle: {
      en: "TPOWER Free Credit | Official Credit Offer Guide",
      zh: "TPower免费信用｜官方信用优惠指南",
    },
    metaDescription: {
      en: "TPOWER Free Credit guide: what free credit means, limits and wagering, scam “free credit codes,” and official claim paths.",
      zh: "TPOWER线上博彩免费信用指南：免费信用含义、限额与流水、假「免费信用码」，以及官方领取路径。",
    },
    heroTitle: { en: "TPOWER Free Credit", zh: "TPOWER线上博彩 免费信用" },
    heroSubtitle: {
      en: "Understand free credit offers before you chase codes from strangers.",
      zh: "在追逐陌生人代码前，先理解免费信用优惠。",
    },
    angle: "free",
  },
  {
    file: "cashback.ts",
    exportName: "intentCashback",
    id: "cashback",
    path: "/cashback",
    hero: "cashback",
    cta: "/promotions",
    metaTitle: {
      en: "TPOWER Cashback | Loss Rebate Guide Malaysia",
      zh: "TPower现金回馈｜马来西亚返水指南",
    },
    metaDescription: {
      en: "TPOWER Cashback guide: how rebates work, timing expectations, eligible play, and how cashback differs from welcome bonuses.",
      zh: "TPOWER线上博彩现金回馈指南：返水如何运作、时效预期、适用游戏，以及回馈与迎新奖金的差异。",
    },
    heroTitle: { en: "TPOWER Cashback", zh: "TPOWER线上博彩 现金回馈" },
    heroSubtitle: {
      en: "Rebate literacy for players who want softer variance — not a licence to chase.",
      zh: "想要更柔和波动的玩家的返水素养——不是追损许可证。",
    },
    angle: "cashback",
  },
];

for (const p of promoPages) {
  const isHub = p.angle === "hub";
  const isWelcome = p.angle === "welcome";
  const isFree = p.angle === "free";
  pack({
    ...p,
    schemaExtra: isHub ? "CollectionPage" : "none",
    introEn: isHub
      ? [
          `TPOWER Promotions is the offers-hub landing. The interactive catalogue remains at [[/promotions|Promotions]]. Child intents deepen on [[/welcome-bonus|Welcome Bonus]], [[/free-credit|Free Credit]], and [[/cashback|Cashback]].`,
          `Headline percentages without wagering literacy create regret. This page teaches how to read eligible games, max cashout rules, and time windows before you deposit for an offer.`,
          `Unofficial “promo codes” sold in chats are usually scams. Official offers appear on the promotions lobby and related news — not as prepaid code markets.`,
          `Connect promotions to [[/deposit-guide|Deposit Guide]] method eligibility and [[/responsible-gaming|Responsible Gaming]]. A bonus is not a reason to exceed budget.`,
          `VIP offers are still official-surface offers ([[/vip|VIP]]). Hosts do not invent private rebate math via personal accounts.`,
          `Chinese guidance for TPower 优惠 is independently written for MY search habits.`,
          `After reading, open the live promotions lobby to claim — this landing does not replace live terms.`,
          `Support Center helps with missing bonus credits using timestamps — not password shares.`,
        ]
      : isWelcome
        ? [
            `Welcome Bonus owns new-member offer intent. It does not duplicate the entire promotions catalogue. Read live terms on [[/promotions|Promotions]] after this education.`,
            `Eligibility usually requires a fresh official account from [[/tpower-register|Register]]. Agent-made accounts often fail claim logic.`,
            `Wagering is the main homework. Know which games contribute before you deposit solely for the welcome headline.`,
            `Welcome is not Free Credit and not Cashback — those landings explain different mechanics.`,
            `Deposit with matching identity so later withdrawals on [[/withdrawal-guide|Withdrawal Guide]] stay smooth.`,
            `Reject “pay me to unlock larger welcome.” That is not TPOWER.`,
            `Chinese TPower 迎新内容独立撰写，强调资格与流水，而非口号。`,
            `Responsible Gaming still applies on day one — especially on day one.`,
          ]
        : isFree
          ? [
              `Free Credit explains credit-style offers and the scams that misuse the phrase. Live claims stay on [[/promotions|Promotions]].`,
              `Free does not mean unrestricted cash. Wagering, game weights, and expiry windows still apply.`,
              `Stranger “free credit codes” that require a personal deposit first are classic fraud. Payment Security covers the pattern.`,
              `Differentiate Free Credit from Welcome Bonus and Cashback so you pick the landing that matches your question.`,
              `Mobile users see the same rules inside [[/mobile-app|Mobile App]] cashier claims.`,
              `Chinese TPower 免费信用指引聚焦识破假码与官方领取。`,
              `If credit is missing, Support Center needs time and offer name — not remote apps.`,
              `Budget still matters: free credit can still teach bad chase habits if unmanaged.`,
            ]
          : [
              `Cashback owns rebate intent: softer recovery math, not guaranteed profit. Live rebate rules sit on [[/promotions|Promotions]].`,
              `Cashback differs from welcome match offers. Do not expect both to stack unless terms say so.`,
              `Timing windows matter — weekly rebates are not instant slot refunds after every spin.`,
              `Eligible games and excluded titles change the effective rebate. Read before grinding the wrong lobby.`,
              `Cashback is not a reason to increase stakes. Responsible Gaming remains the frame.`,
              `Chinese TPower 现金回馈独立说明返水预期与误解。`,
              `VIP cashback talk still resolves on official terms, not private spreadsheets in chat.`,
              `Missing rebate cases need period timestamps for Support Center.`,
            ],
    introZh: isHub
      ? [
          `「TPower优惠」是优惠中心着陆页。交互目录仍在 [[/promotions|优惠]]。子意图在 [[/welcome-bonus|迎新奖金]]、[[/free-credit|免费信用]]、[[/cashback|现金回馈]] 加深。`,
          `没有流水素养的标题百分比制造后悔。本页教你在为活动存款前阅读适用游戏、最高提现与时间窗口。`,
          `聊天出售的非官方「优惠码」通常是骗局。官方优惠出现在优惠大厅与相关新闻——不是预付码市场。`,
          `把优惠连接到 [[/deposit-guide|存款指南]] 的方式资格与 [[/responsible-gaming|负责任博彩]]。红利不是超预算的理由。`,
          `VIP 优惠仍是官方表面优惠（[[/vip|VIP]]）。接待不经私人账户发明返水数学。`,
          `TPower 优惠的中文指引按大马搜索习惯独立撰写。`,
          `读完后打开现场优惠大厅领取——本着陆页不取代现场条款。`,
          `客服中心用时间戳协助缺失红利——不分享密码。`,
        ]
      : isWelcome
        ? [
            `迎新奖金拥有新会员优惠意图。它不复制整个优惠目录。教育后请到 [[/promotions|优惠]] 读现场条款。`,
            `资格通常需要来自 [[/tpower-register|注册]] 的全新官方账户。代理开的账户常无法领取。`,
            `流水是主要功课。仅为迎新标题存款前，弄清哪些游戏有贡献。`,
            `迎新不是免费信用，也不是现金回馈——那些着陆页解释不同机制。`,
            `用匹配身份存款，以便日后 [[/withdrawal-guide|提款指南]] 更顺。`,
            `拒绝「付钱解锁更大迎新」。那不是 TPOWER。`,
            `中文 TPower 迎新内容独立撰写，强调资格与流水，而非口号。`,
            `负责任博彩第一天就适用——尤其是第一天。`,
          ]
        : isFree
          ? [
              `免费信用解释信用类优惠与滥用该词的骗局。现场领取仍在 [[/promotions|优惠]]。`,
              `免费不代表无限制现金。流水、游戏权重与过期窗口仍适用。`,
              `要求先私人存款的陌生人「免费信用码」是经典诈骗。支付安全覆盖该模式。`,
              `区分免费信用与迎新、回馈，以便选择匹配问题的着陆页。`,
              `手机用户在 [[/mobile-app|手机APP]] 收银台领取时规则相同。`,
              `中文 TPower 免费信用指引聚焦识破假码与官方领取。`,
              `若信用缺失，客服中心需要时间与活动名——不要远程 APP。`,
              `预算仍重要：管理不善时，免费信用仍可能教会坏的追损习惯。`,
            ]
          : [
              `现金回馈拥有返水意图：更柔和的回补数学，不是保证盈利。现场规则在 [[/promotions|优惠]]。`,
              `回馈不同于迎新匹配优惠。除非条款说明，不要预期两者叠加。`,
              `时间窗口重要——每周返水不是每转之后的即时退款。`,
              `适用与排除游戏会改变有效返水。刷错大厅前先读。`,
              `回馈不是加注的理由。负责任博彩仍是框架。`,
              `中文 TPower 现金回馈独立说明预期与误解。`,
              `VIP 回馈仍以官方条款为准，不是聊天私人表格。`,
              `缺失返水个案需要周期时间戳给客服中心。`,
            ],
    stats: [
      { vEn: "Terms", vZh: "条款", lEn: "Live lobby is source of truth", lZh: "现场大厅是真相来源" },
      { vEn: "Wager", vZh: "流水", lEn: "Read contribution weights", lZh: "阅读贡献权重" },
      { vEn: "Official", vZh: "官方", lEn: "No chat-sold codes", lZh: "无聊天售码" },
      { vEn: "Budget", vZh: "预算", lEn: "Bonus ≠ exceed limits", lZh: "红利≠超越限额" },
    ],
    benefitsTitle: {
      en: isHub
        ? "How to use the promotions cluster"
        : isWelcome
          ? "Welcome bonus advantages when read correctly"
          : isFree
            ? "Free credit — when it helps"
            : "Cashback — when it helps",
      zh: isHub
        ? "如何使用优惠集群"
        : isWelcome
          ? "正确阅读时迎新奖金的优势"
          : isFree
            ? "免费信用——何时有帮助"
            : "现金回馈——何时有帮助",
    },
    benefits: [
      feature("gift", "Clearer offer choice", "更清楚的优惠选择", "Pick welcome, credit, or cashback intentionally.", "有意识选择迎新、信用或回馈。"),
      feature("file", "Terms literacy", "条款素养", "Wagering and eligibility before deposit.", "存款前弄清流水与资格。"),
      feature("shield", "Scam resistance", "抗骗", "Ignore prepaid code markets.", "忽略预付码市场。"),
      feature("eye", "Lobby verification", "大厅核实", "Confirm the offer still live.", "确认活动仍在线。"),
      feature("check", "Supportable claims", "可支持领取", "Timestamps help missing-credit cases.", "时间戳帮助缺失信用个案。"),
      feature("heart", "Responsible claiming", "负责任领取", "Offers inside budget plans.", "在预算计划内领取。"),
    ],
    howToTitle: {
      en: isHub ? "How to approach TPOWER promotions" : `How to approach ${p.heroTitle.en}`,
      zh: isHub ? "如何看待 TPower 优惠" : `如何看待${p.heroTitle.zh}`,
    },
    howToDescription: {
      en: "Education first, live lobby second, deposit third.",
      zh: "先教育，再现场大厅，最后存款。",
    },
    howToSteps: [
      howTo("Read this landing", "阅读本着陆页", "Understand the intent mechanics.", "理解意图机制。"),
      howTo("Open promotions lobby", "打开优惠大厅", "Verify live terms on /promotions.", "在 /promotions 核实现场条款。"),
      howTo("Check eligibility", "检查资格", "Account age, methods, game weights.", "账户年龄、方式、游戏权重。"),
      howTo("Deposit only if aligned", "对齐才存款", "Payment Center rails; planned amount.", "支付中心通道；计划金额。"),
      howTo("Track wagering", "跟踪流水", "Play eligible titles only.", "只玩适用游戏。"),
      howTo("Escalate with facts", "带事实升级", "Support Center if credit missing.", "信用缺失则找客服中心。"),
    ],
    sections: [
      section(
        isHub ? "Promotions hub vs child landings" : "How this offer type differs",
        isHub ? "优惠中心 vs 子着陆页" : "本优惠类型如何不同",
        isHub
          ? `Use child pages for deep intent. Use the lobby for claiming. Use this hub for orientation and internal links across the offer cluster.`
          : `Each offer type answers a different question. Visit sibling landings instead of forcing one page to explain every mechanic.`,
        isHub
          ? `用子页深挖意图。用大厅领取。用本中心做定向与优惠集群内链。`
          : `每种优惠回答不同问题。访问兄弟着陆页，而不是强迫一页解释所有机制。`,
        H(p.hero),
        false,
      ),
      section(
        "Wagering without panic",
        "不恐慌的流水",
        `Wagering is arithmetic, not punishment. If you dislike the number, skip the offer. Chasing a misunderstood bonus creates worse outcomes than declining it.`,
        `流水是算术，不是惩罚。若不喜欢那个数字，跳过优惠。追逐被误解的红利，结果往往比拒绝更糟。`,
        PROMO,
        true,
      ),
      section(
        "Payments and promotions",
        "支付与优惠",
        `Some methods may be excluded. Deposit Guide + Payment Methods prevent surprise ineligibility after you already funded.`,
        `某些方式可能被排除。存款指南+支付方式避免已入金后才发现不合格。`,
        CTA,
        false,
      ),
      section(
        "Cluster links",
        "集群链接",
        `Register, Login, Mobile App, VIP, Games, Responsible Gaming, Support, Blog, News, and sibling offer landings.`,
        `注册、登录、手机APP、VIP、游戏、负责任博彩、客服、博客、新闻与兄弟优惠着陆页。`,
        LOBBY,
        true,
      ),
    ],
    comparisonTitle: {
      en: "Offer types at a glance",
      zh: "优惠类型一览",
    },
    comparisonHeaders: [
      { en: "Type", zh: "类型" },
      { en: "Best for", zh: "适合" },
      { en: "Watch for", zh: "注意" },
    ],
    comparisonRows: [
      compareRow("Welcome", "迎新", "New official accounts", "新官方账户", "Wagering + eligible games", "流水+适用游戏"),
      compareRow("Free credit", "免费信用", "Credit-style trials", "信用式体验", "Fake chat codes", "假聊天码"),
      compareRow("Cashback", "回馈", "Softer variance", "更柔波动", "Timing windows", "时间窗口"),
      compareRow("Lobby promos", "大厅优惠", "Live catalogue", "现场目录", "Always re-read terms", "总是重读条款"),
    ],
    timelineTitle: { en: "Offer journey timeline", zh: "优惠旅程时间线" },
    timeline: tl([
      ["Learn", "学习", "Read landing + terms.", "读着陆页+条款。"],
      ["Verify", "核实", "Eligibility on lobby.", "大厅核实资格。"],
      ["Fund", "入金", "Official cashier if needed.", "需要则官方收银台。"],
      ["Clear", "完成", "Finish wagering rules.", "完成流水规则。"],
    ]),
    trustTitle: { en: "Promotions trust checklist", zh: "优惠信任清单" },
    trustItems: commonTrust(
      ["Official lobby only", "仅官方大厅", "No chat markets.", "无聊天市场。"],
      ["Terms before deposit", "存款前条款", "Read fully.", "完整阅读。"],
      ["Method eligibility", "方式资格", "Check exclusions.", "检查排除项。"],
      ["No unlock fees", "无解锁费", "Ever.", "永远。"],
      ["Budget first", "先预算", "Bonus inside plan.", "红利在计划内。"],
      ["Evidence for support", "客服证据", "Time + offer name.", "时间+活动名。"],
    ),
    faqTitle: {
      en: `${p.heroTitle.en} FAQ`,
      zh: `${p.heroTitle.zh}常见问题`,
    },
    faqs: baseFaqs(p.heroTitle.en, p.heroTitle.zh.replace("TPOWER线上博彩 ", ""), [
      faq("Where do I claim?", "去哪里领取？", "On the live Promotions lobby after reading terms.", "阅读条款后在现场优惠大厅。"),
      faq("Can terms change?", "条款会变吗？", "Live lobby terms override older screenshots.", "现场大厅条款覆盖旧截图。"),
      faq("Do I need to deposit?", "需要存款吗？", "Depends on the offer — welcome often yes; some credits differ. Read the specific terms.", "取决于活动——迎新常需要；某些信用不同。读具体条款。"),
      faq("Are chat codes real?", "聊天码是真的吗？", "Treat sold codes as hostile until official lobby shows them.", "在官方大厅显示前，把售卖码当敌意。"),
    ]),
    ctaTitle: {
      en: "Open official promotions next",
      zh: "下一步打开官方优惠",
    },
    ctaDescription: {
      en: "Take this literacy to the live Promotions lobby — claim only what you understand.",
      zh: "把这份素养带到现场优惠大厅——只领取你理解的。",
    },
  });
}

console.log("promo cluster done");
