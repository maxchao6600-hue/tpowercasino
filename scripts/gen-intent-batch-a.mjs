/**
 * Generates remaining Sprint 3 intent pages (all except tpower-login).
 * Each page has unique intros/sections/FAQs — no shared body templates across topics.
 */
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
const NEWS = "/images/news/tpower-platform-performance-update.webp";

function baseFaqs(topicEn, topicZh, extras = []) {
  return [
    faq(
      `What is ${topicEn} on TPOWER?`,
      `TPOWER 上的${topicZh}是什么？`,
      `${topicEn} on this landing explains official process, benefits, and safe next steps for Malaysia players — then links into the live product surface.`,
      `本着陆页上的${topicZh}说明官方流程、好处与安全下一步，并链到现场产品表面。`,
    ),
    faq(
      `Is this page the same as the product lobby?`,
      `本页等于产品大厅吗？`,
      `No. This is the search-intent authority page. Product lobbies and forms keep their own routes for interaction.`,
      `不等。这是搜索意图权威页。产品大厅与表单保留各自交互路由。`,
    ),
    faq(
      `How do I start safely?`,
      `如何安全开始？`,
      `Use official navigation only, avoid chat shortcuts, and open Support Center with evidence if something fails.`,
      `只使用官方导航，避开聊天捷径；失败时带证据打开客服中心。`,
    ),
    faq(
      `Does Responsible Gaming still apply?`,
      `负责任博彩仍适用吗？`,
      `Always. Landings educate; they do not encourage chase behaviour.`,
      `始终适用。着陆页做教育，不鼓励追损。`,
    ),
    ...extras,
  ];
}

// ---------- REGISTER ----------
writeIntent("tpower-register.ts", "intentTpowerRegister", {
  id: "tpower-register",
  path: "/tpower-register",
  heroImage: H("tpower-register"),
  schemaExtra: "none",
  primaryCtaHref: "/register",
  metaTitle: {
    en: "TPOWER Register | Official Sign-Up Guide Malaysia",
    zh: "TPower注册｜马来西亚官方注册指南",
  },
  metaDescription: {
    en: "Official TPOWER Register guide: account creation steps, identity tips, welcome bonus readiness, phishing defence, and safer first deposits.",
    zh: "TPOWER线上博彩官方注册指南：开户步骤、身份提示、迎新准备、防钓鱼与更安全的首次存款。",
  },
  heroTitle: { en: "TPOWER Register", zh: "TPOWER线上博彩 注册" },
  heroSubtitle: {
    en: "Create an official account with clear steps — before bonuses, before deposits, before play.",
    zh: "用清楚步骤创建官方账户——在优惠、存款与游玩之前。",
  },
  introduction: P(
    [
      `TPOWER Register targets adults ready to create an official Malaysia account. The interactive form is at [[/register|Register]]. This landing owns education: why official signup beats agent “accounts,” what to prepare, and how registration connects to [[/welcome-bonus|Welcome Bonus]] without rushing terms.`,
      `Registration is not login. Login education lives on [[/tpower-login|TPOWER Login]]. Confusing the two creates people who paste passwords into the wrong form under urgency.`,
      `Use accurate details aligned with later [[/payment-methods|payments]] and withdrawals. Nickname creativity is fine in display contexts; banking identity is not a place for aliases. See [[/aml-kyc|AML & KYC]] early if you plan larger play.`,
      `After register, install only via [[/download|Download]] / [[/tpower-apk|APK]] / [[/mobile-app|Mobile App]]. Fake “register APKs” are takeover tools.`,
      `Read [[/tpower-promotions|Promotions]] and [[/responsible-gaming|Responsible Gaming]] before your first deposit. [[/deposit-guide|Deposit Guide]] explains funding. [[/contact|Support Center]] helps when forms error — without password sharing.`,
      `Chinese readers searching TPower 注册 get independently written MY Chinese guidance focused on official platform trust, not casino slang spam.`,
      `VIP pitches that ask you to register through a personal link demanding prepaid fees are not official. Register on the real site, then evaluate VIP on [[/vip|VIP]].`,
      `This page answers TPOWER Register intent with process authority: prepare, signup officially, verify contact channels, read offers, fund intentionally, play within limits.`,
    ],
    [
      `「TPower注册」面向准备创建马来西亚官方账户的成年人。交互表单在 [[/register|注册]]。本着陆页拥有教育：为何官方注册胜过代理「开户」、准备什么，以及注册如何在不赶条款的情况下连接 [[/welcome-bonus|迎新奖金]]。`,
      `注册不是登录。登录教育在 [[/tpower-login|TPower登录]]。混淆二者会让人在紧迫下把密码贴进错误表单。`,
      `使用与日后 [[/payment-methods|支付]] 与提款对齐的准确资料。显示昵称可以有创意；银行身份不是用化名的地方。若计划较大游玩，尽早看 [[/aml-kyc|AML与KYC]]。`,
      `注册后只经 [[/download|下载]] / [[/tpower-apk|APK]] / [[/mobile-app|手机APP]] 安装。假「注册 APK」是盗号工具。`,
      `首次存款前读 [[/tpower-promotions|优惠]] 与 [[/responsible-gaming|负责任博彩]]。[[/deposit-guide|存款指南]] 说明入金。表单出错时 [[/contact|客服中心]] 可协助——不分享密码。`,
      `搜索 TPower 注册的中文读者获得独立撰写的大马中文指引，聚焦官方平台信任，而非赌场黑话堆砌。`,
      `要求你经私人链接注册并预付费的 VIP 推销不是官方。在真网站注册，再在 [[/vip|VIP]] 评估。`,
      `本页以流程权威回答 TPower 注册意图：准备、官方注册、核实联系渠道、阅读优惠、有意识入金、限额内游玩。`,
    ],
  ),
  stats: [
    { vEn: "Official", vZh: "官方", lEn: "Signup only on real TPOWER forms", lZh: "只在真 TPOWER 表单注册" },
    { vEn: "Match", vZh: "匹配", lEn: "Details aligned for later payouts", lZh: "资料对齐以便日后提款" },
    { vEn: "Bonus", vZh: "优惠", lEn: "Read terms before first deposit", lZh: "首次存款前先读条款" },
    { vEn: "Safe", vZh: "安全", lEn: "No prepaid “agent registration”", lZh: "无预付「代理注册」" },
  ],
  benefitsTitle: { en: "Benefits of registering the official way", zh: "官方注册的好处" },
  benefits: [
    feature("badge", "Own your account", "拥有自己的账户", "You control login — not an agent intermediary.", "你控制登录——不是代理中介。"),
    feature("gift", "Clean bonus path", "干净优惠路径", "Official offers attach to official accounts.", "官方优惠附着官方账户。"),
    feature("banknote", "Smoother withdrawals later", "日后提款更顺", "Matching identity reduces payout friction.", "身份匹配减少出金摩擦。"),
    feature("shield", "Phishing resistance", "抗钓鱼", "You learn the real domain at signup time.", "注册时就学会真域名。"),
    feature("smartphone", "App continuity", "APP 连续", "Same account on Download/APK installs.", "下载/APK 安装同一账户。"),
    feature("heart", "Responsible start", "负责任开始", "Limits and tools available from day one.", "第一天起就有限额与工具。"),
  ],
  howToTitle: { en: "How to register on TPOWER", zh: "如何在 TPOWER 注册" },
  howToDescription: {
    en: "Official account creation sequence for Malaysia players.",
    zh: "大马玩家的官方开户顺序。",
  },
  howToSteps: [
    howTo("Open official Register", "打开官方注册", "Use the real site navigation to [[/register|Register]].", "用真网站导航打开 [[/register|注册]]。"),
    howTo("Enter accurate details", "输入准确资料", "Use information you can support during verification.", "使用核验时能支撑的信息。"),
    howTo("Secure your password", "保护密码", "Unique password — not your email password.", "独立密码——不要用邮箱密码。"),
    howTo("Confirm contact channels", "确认联系渠道", "Ensure you can receive official recovery messages.", "确保能收到官方找回消息。"),
    howTo("Read offers before funding", "入金前读优惠", "Open Promotions / Welcome Bonus terms first.", "先打开优惠/迎新条款。"),
    howTo("Enter lobby intentionally", "有意识进入大厅", "Login, then Games or Payments — not chase mode.", "登录，再进游戏或支付——不是追损模式。"),
  ],
  sections: [
    section("Agent registration myths", "代理注册迷思", `Paying someone to “open TPOWER for you” usually means they keep control. Official Register keeps the account yours. If a chat demands prepaid fees to register, leave.`, `付钱让人「帮你开 TPOWER」通常意味着对方保留控制。官方注册让账户属于你。若聊天要求预付注册费，离开。`, H("tpower-register"), false),
    section("Registration and first-week bonuses", "注册与首周优惠", `Welcome offers are optional. Register first, understand wagering, then deposit if you still want the offer. Free Credit and Cashback pages explain related intents without replacing terms on the promotions lobby.`, `迎新优惠是可选的。先注册、理解流水，仍想要再存款。免费信用与现金回馈页解释相关意图，不取代优惠大厅条款。`, H("welcome-bonus"), true),
    section("From register to first deposit", "从注册到首次存款", `Deposit Guide and Payment Methods turn signup into funded play. Skip personal-account deposits. Payment Security protects the money moment after registration enthusiasm.`, `存款指南与支付方式把注册变成已入金游玩。跳过私人账户存款。支付安全保护注册热情后的资金时刻。`, CTA, false),
    section("Cluster for new accounts", "新账户集群", `Login landing, Mobile App, APK, Promotions, VIP, Responsible Gaming, Support, Blog, News — and the live Register form when you are ready to act.`, `登录着陆页、手机APP、APK、优惠、VIP、负责任博彩、客服、博客、新闻——准备行动时再到现场注册表单。`, LOBBY, true),
  ],
  comparisonTitle: { en: "Official register vs agent signup", zh: "官方注册 vs 代理开户" },
  comparisonHeaders: [
    { en: "Topic", zh: "主题" },
    { en: "Official", zh: "官方" },
    { en: "Agent pattern", zh: "代理模式" },
  ],
  comparisonRows: [
    compareRow("Control", "控制权", "You hold login", "你持有登录", "Someone else may hold access", "他人可能持有访问"),
    compareRow("Fees", "费用", "No prepaid register fee", "无预付注册费", "Often demands transfer first", "常要求先转账"),
    compareRow("Bonuses", "优惠", "Official promotions terms", "官方优惠条款", "Verbal promises, hard to audit", "口头承诺，难审计"),
    compareRow("Support", "客服", "Support Center", "客服中心", "Depends on the agent’s mood", "取决于代理心情"),
  ],
  timelineTitle: { en: "Registration timeline", zh: "注册时间线" },
  timeline: [
    timeline("Prepare", "准备", "Decide details and password strategy.", "决定资料与密码策略。"),
    timeline("Register", "注册", "Complete official form.", "完成官方表单。"),
    timeline("Orient", "定向", "Read promotions and responsible tools.", "阅读优惠与负责任工具。"),
    timeline("Fund", "入金", "Deposit via Payment Center if ready.", "准备好则经支付中心存款。"),
  ],
  trustTitle: { en: "Register trust checklist", zh: "注册信任清单" },
  trustItems: [
    trust("Official form only", "仅官方表单", "No chat-based account creation.", "无基于聊天的开户。"),
    trust("Unique password", "独立密码", "Never reuse email passwords.", "永不复用邮箱密码。"),
    trust("Accurate banking name", "准确银行姓名", "Helps withdrawals later.", "有助日后提款。"),
    trust("Read before bonus deposit", "红利存款前先读", "Terms beat headlines.", "条款胜过标题。"),
    trust("Official apps only", "仅官方 APP", "Download hub path.", "下载中心路径。"),
    trust("Support without fees", "无费用客服", "Help does not require prepaid tips.", "帮助不要求预付小费。"),
  ],
  faqTitle: { en: "TPOWER Register FAQ", zh: "TPower 注册常见问题" },
  faqs: baseFaqs("TPOWER Register", "TPower注册", [
    faq("Where is the register form?", "注册表单在哪？", "At /register on the official site or app.", "在官网或 APP 的 /register。"),
    faq("Can I register through an agent?", "可以通过代理注册吗？", "You should register officially yourself to keep control.", "应自己官方注册以保持控制。"),
    faq("Do I get a welcome bonus automatically?", "会自动获得迎新奖金吗？", "Depends on live offers and terms — read Welcome Bonus / Promotions first.", "取决于现场活动与条款——先读迎新/优惠。"),
    faq("What after registration?", "注册之后做什么？", "Login, explore Games, consider Mobile App, fund via Payment Center if ready.", "登录、探索游戏、考虑手机APP，准备好则经支付中心入金。"),
  ]),
  relatedTitle: { en: "Related signup resources", zh: "相关注册资源" },
  extraLinks: [],
  ctaTitle: { en: "Create your official TPOWER account", zh: "创建你的官方 TPOWER 账户" },
  ctaDescription: {
    en: "Open Register on the real site, protect your password, and read offers before your first deposit.",
    zh: "在真网站打开注册，保护密码，首次存款前阅读优惠。",
  },
});

// Helper to speed remaining pages with unique topic packs
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
    relatedTitle: cfg.relatedTitle,
    extraLinks: cfg.extraLinks || [],
    ctaTitle: cfg.ctaTitle,
    ctaDescription: cfg.ctaDescription,
  });
}

pack({
  file: "tpower-apk.ts",
  exportName: "intentTpowerApk",
  id: "tpower-apk",
  path: "/tpower-apk",
  hero: "tpower-apk",
  schemaExtra: "SoftwareApplication",
  cta: "/apk",
  metaTitle: {
    en: "TPOWER APK Download | Official Android Package Guide",
    zh: "TPower APK下载｜官方安卓安装包指南",
  },
  metaDescription: {
    en: "Official TPOWER APK guide: safe Android install steps, permission caution, fake package defence, and how APK relates to the mobile app.",
    zh: "TPOWER线上博彩官方 APK 指南：安全安卓安装步骤、权限谨慎、假包装防御，以及 APK 与手机 APP 的关系。",
  },
  heroTitle: { en: "TPOWER APK Download", zh: "TPOWER线上博彩 APK下载" },
  heroSubtitle: {
    en: "Android package guidance for players who install outside certain stores — official paths only.",
    zh: "面向在特定商店外安装的玩家的安卓包装指引——仅官方路径。",
  },
  introEn: [
    `TPOWER APK is the intent page for Android package downloads. The operational APK surface remains at [[/apk|APK]]; broader install culture sits on [[/download|Download]] and [[/mobile-app|Mobile App]]. This landing owns safety education for TPOWER APK searchers.`,
    `Fake VIP APKs and renamed packages are a top Malaysia mobile risk. If a chat sends an APK to “unlock withdrawal,” delete it. Real installs start from official navigation.`,
    `Permissions should match a gaming client — not SMS harvesting or obscure accessibility control. When unsure, stop and open [[/security|Platform Security]].`,
    `After install, login with the same account as web ([[/tpower-login|Login guide]]). Fund via [[/payment-methods|Payment Center]], not personal transfers.`,
    `APK users still read [[/responsible-gaming|Responsible Gaming]]. Speed of install is not a reason to skip limits.`,
    `Chinese intent around TPower 下载 / APK is rewritten for MY Chinese — official platform first, not scare-copy spam.`,
    `Compare APK vs store-style installs mentally: APK adds sideload steps; it does not add unofficial payment rails.`,
    `Support Center helps install errors with device model and screenshots — never with remote-control apps.`,
  ],
  introZh: [
    `「TPower APK」是安卓安装包下载意图页。操作面仍在 [[/apk|APK]]；更广安装文化在 [[/download|下载]] 与 [[/mobile-app|手机APP]]。本着陆页为搜索 TPOWER APK 的人提供安全教育。`,
    `假 VIP APK 与改名包装是大马手机顶级风险。若聊天发送 APK「解锁提款」，删除。真安装从官方导航开始。`,
    `权限应匹配游戏客户端——不是收割短信或隐晦无障碍控制。不确定时停下并打开 [[/security|平台安全]]。`,
    `安装后用与网页同一账户登录（[[/tpower-login|登录指南]]）。经 [[/payment-methods|支付中心]] 入金，不是私人转账。`,
    `APK 用户仍读 [[/responsible-gaming|负责任博彩]]。安装速度不是跳过限额的理由。`,
    `围绕 TPower 下载 / APK 的中文意图以大马中文重写——官方平台优先，不是恐吓文案堆砌。`,
    `在心里比较 APK 与商店式安装：APK 增加旁加载步骤；不加非官方支付通道。`,
    `客服中心用设备型号与截图协助安装错误——绝不用远程控制 APP。`,
  ],
  stats: [
    { vEn: "Official", vZh: "官方", lEn: "Only Download/APK hub packages", lZh: "仅下载/APK 中心包装" },
    { vEn: "Perms", vZh: "权限", lEn: "Reject SMS-harvest style asks", lZh: "拒绝收割短信式权限" },
    { vEn: "Same ID", vZh: "同账户", lEn: "Web and APK share account", lZh: "网页与 APK 共用账户" },
    { vEn: "No remote", vZh: "无远程", lEn: "No remote-control “install help”", lZh: "无远程控制「安装帮助」" },
  ],
  benefitsTitle: { en: "Why official TPOWER APK guidance matters", zh: "为何官方 TPower APK 指引重要" },
  benefits: [
    feature("smartphone", "Android path clarity", "安卓路径清楚", "Know when APK is relevant vs other install routes.", "知道何时需要 APK 及其他安装路线。"),
    feature("shield", "Fake package defence", "假包装防御", "Recognise renamed VIP APKs as hostile.", "把改名 VIP APK 当敌意识别。"),
    feature("lock", "Permission scepticism", "权限怀疑", "Unnecessary powers are a stop sign.", "不必要权限就是停止信号。"),
    feature("check", "Account continuity", "账户连续", "Same login after install.", "安装后同一登录。"),
    feature("zap", "Faster mobile sessions", "更快手机场次", "Local client when browser is inconvenient.", "浏览器不便时用本地客户端。"),
    feature("eye", "Update hygiene", "更新卫生", "Reinstall only from official guidance.", "只从官方指引重装。"),
  ],
  howToTitle: { en: "How to install the TPOWER APK safely", zh: "如何安全安装 TPower APK" },
  howToDescription: { en: "Sideload-aware steps for official Android packages.", zh: "面向官方安卓包装的旁加载步骤。" },
  howToSteps: [
    howTo("Open official APK/Download", "打开官方 APK/下载", "Start from site navigation — not chat files.", "从站点导航开始——不是聊天文件。"),
    howTo("Verify package source", "核实包装来源", "Confirm you are on official TPOWER guidance.", "确认你在官方 TPOWER 指引上。"),
    howTo("Review permissions", "审查权限", "Abort if asks look unrelated to play.", "若索取与游玩无关则中止。"),
    howTo("Install and open", "安装并打开", "Follow on-device prompts carefully.", "仔细跟随设备提示。"),
    howTo("Login officially", "官方登录", "Use your real account credentials privately.", "私下使用真实账户凭证。"),
    howTo("Disable unknown sources later", "随后关闭未知来源", "Tighten device settings after install when practical.", "安装后可行时收紧设备设置。"),
  ],
  sections: [
    section("APK vs Mobile App landing", "APK vs 手机APP着陆页", `Mobile App covers the product experience; APK covers Android package risk. Read both. Download remains the hub for install choices.`, `手机APP覆盖产品体验；APK 覆盖安卓包装风险。两页都读。下载仍是安装选择中心。`, H("tpower-apk"), false),
    section("Malware tells around “casino APKs”", "「博彩 APK」周边的恶意线索", `Urgent withdrawal unlock packages, double extension names, and requests for accessibility control are classic tells. Payment Security and Platform Security expand the defence story.`, `紧迫提款解锁包装、双扩展名、索取无障碍控制是经典线索。支付安全与平台安全扩展防御故事。`, NEWS, true),
    section("After APK: payments and play", "APK 之后：支付与游玩", `Use Payment Center rails. Open Games intentionally. Promotions still have terms. Responsible Gaming still applies on mobile.`, `使用支付中心通道。有意识打开游戏。优惠仍有条款。手机上负责任博彩仍适用。`, CTA, false),
    section("Cluster for install intent", "安装意图集群", `Download, Mobile App, Login, Register, Support, Security, Payment Center, VIP.`, `下载、手机APP、登录、注册、客服、安全、支付中心、VIP。`, LOBBY, true),
  ],
  comparisonTitle: { en: "Official APK vs chat APK", zh: "官方 APK vs 聊天 APK" },
  comparisonHeaders: [
    { en: "Check", zh: "检查" },
    { en: "Official", zh: "官方" },
    { en: "Chat file", zh: "聊天文件" },
  ],
  comparisonRows: [
    compareRow("Source", "来源", "Download/APK pages", "下载/APK 页", "Telegram stranger", "Telegram 陌生人"),
    compareRow("Purpose", "目的", "Play client", "游玩客户端", "Often “fix withdrawal”", "常为「修复提款」"),
    compareRow("Permissions", "权限", "Game-reasonable", "游戏合理", "SMS/accessibility grabs", "抓短信/无障碍"),
    compareRow("Support", "支持", "Support Center", "客服中心", "Vanishes after install", "安装后消失"),
  ],
  timelineTitle: { en: "APK install timeline", zh: "APK 安装时间线" },
  timeline: [
    timeline("Guide", "指引", "Open official APK page.", "打开官方 APK 页。"),
    timeline("Inspect", "检查", "Permissions and source.", "权限与来源。"),
    timeline("Install", "安装", "Complete on-device steps.", "完成设备步骤。"),
    timeline("Login", "登录", "Enter lobby safely.", "安全进入大厅。"),
  ],
  trustTitle: { en: "APK trust checklist", zh: "APK 信任清单" },
  trustItems: [
    trust("No chat APKs", "无聊天 APK", "Ever.", "永远。"),
    trust("Permission review", "权限审查", "Abort weird asks.", "奇怪索取就中止。"),
    trust("Same account", "同一账户", "No “APK-only VIP login.”", "无「仅 APK VIP 登录」。"),
    trust("Update from official", "官方更新", "Don’t sideload random updates.", "不要旁加载随机更新。"),
    trust("Secure device", "保护设备", "Screen lock after install.", "安装后锁屏。"),
    trust("Report fakes", "举报假包", "Tell Support Center with evidence.", "带证据告诉客服中心。"),
  ],
  faqTitle: { en: "TPOWER APK FAQ", zh: "TPower APK 常见问题" },
  faqs: baseFaqs("TPOWER APK", "TPower APK", [
    faq("Where do I download the official APK?", "去哪里下载官方 APK？", "Follow the APK and Download pages on this website only.", "只遵循本网站的 APK 与下载页。"),
    faq("Is APK the same as the iOS app?", "APK 等于 iOS APP 吗？", "APK is Android package guidance; iOS follows Download guidance separately.", "APK 是安卓包装指引；iOS 另循下载指引。"),
    faq("Why do fake APKs exist?", "为何存在假 APK？", "To steal accounts via overlays and permissions. Never install from chat.", "通过覆盖层与权限盗号。切勿从聊天安装。"),
    faq("Can I deposit in the APK?", "可以在 APK 里存款吗？", "Yes via official cashier rails after login — same Payment Center rules.", "登录后经官方收银台通道可以——同一支付中心规则。"),
  ]),
  relatedTitle: { en: "Related download resources", zh: "相关下载资源" },
  ctaTitle: { en: "Get the official TPOWER APK path", zh: "获取官方 TPower APK 路径" },
  ctaDescription: {
    en: "Open the APK page from official navigation, review permissions, and login with your real account.",
    zh: "从官方导航打开 APK 页，审查权限，并用真实账户登录。",
  },
});

console.log("batch register+apk done");
