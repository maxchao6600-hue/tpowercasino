/**
 * Generates authority page content modules with substantial bilingual prose.
 * Run: node scripts/generate-authority-pages.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "src/data/authority");
mkdirSync(root, { recursive: true });

const L = (en, zh) => ({ en, zh });
const para = (...parts) => parts.filter(Boolean).join("\n\n");

function expandEn(topic, points) {
  const elaborations = [
    "In practice this means documented processes, bilingual support expectations, and product surfaces that stay consistent between web and app sessions.",
    "We keep wording conservative: claims must be supportable by product behaviour, cashier flows, or published policy pages.",
    "Malaysia relevance matters — payment familiarity, evening mobile usage, and English/Chinese support are treated as core requirements rather than optional extras.",
    "Authority is earned when players can move from this explanation into action without confusion: register, login, deposit guidance, or responsible controls.",
    "Internal linking is intentional. Educational pages and product hubs reinforce one coherent TPOWER topic cluster instead of isolated keyword islands.",
    "When uncertainty appears, escalate through official channels rather than third-party shortcuts that create account and security risk.",
    "Peak-hour stability, readable cashier states, and calm support language are part of the same trust system.",
    "Players should always be able to identify the official URL, the official app path, and the official support desk.",
  ];
  const openers = [
    `TPOWER publishes this ${topic} page so Malaysia players can evaluate the platform with the same seriousness we apply to product operations.`,
    `This document explains how ${topic} works inside the official TPOWER experience for Malaysia — not as marketing theatre, but as operational practice.`,
    `Players comparing online platforms should expect clear language, measurable commitments, and links to the pages that actually execute those commitments.`,
  ];
  const closers = [
    "For next steps, review [[/games|Games]], [[/providers|Providers]], [[/download|Download]], and [[/contact|Support Center]].",
    "Related reading includes [[/blog|Knowledge Center]] guides, [[/news|Newsroom]] updates, and [[/faq|FAQ]].",
    "If you need human assistance, open [[/contact|official support]] with clear details — never share passwords or one-time codes outside official channels.",
  ];
  const mid = points.map(
    (p, i) =>
      `${p} ${elaborations[i % elaborations.length]} ${elaborations[(i + 3) % elaborations.length]}`,
  );
  return para(...openers, ...mid, ...closers);
}

function expandZh(topic, points) {
  const elaborations = [
    "落地时体现为流程可查、双语客服预期明确，以及网页与 APP 体验一致。",
    "表述保持克制：任何说法都要能对应产品行为、收银流程或已发布政策页。",
    "马来西亚场景是核心：本地支付习惯、晚间手机使用，以及中英支持，不是可有可无的附加项。",
    "权威感来自「说明之后能立刻行动」：注册、登录、存款指引或负责任工具，路径清楚。",
    "内链是刻意设计的。教育页与产品页共同构成 TPOWER 主题集群，而不是孤立关键词页。",
    "遇到不确定情况，请走官方通道升级处理，避免第三方捷径带来账户与安全风险。",
    "高峰稳定、收银台状态可读、客服措辞冷静，同属一套信任体系。",
    "玩家应随时能辨认官方网址、官方 APP 路径与官方客服台。",
  ];
  const openers = [
    `TPOWER线上博彩 发布本页，是为了让马来西亚玩家用正式、可核对的方式理解「${topic}」，而不是只看口号。`,
    `本说明对应官方产品与客服流程：网页、APP、支付与支持通道保持同一套标准。`,
    `比较平台时，应要求清楚表述、可执行承诺，以及能跳转到真正落地的页面。`,
  ];
  const closers = [
    "下一步可查看 [[/games|游戏大厅]]、[[/providers|游戏供应商]]、[[/download|APP下载]] 与 [[/contact|客服中心]]。",
    "相关阅读包括 [[/blog|知识中心]]、[[/news|新闻室]] 与 [[/faq|常见问题]]。",
    "需要人工协助时，请走 [[/contact|官方客服]]，切勿在非官方渠道提供密码或验证码。",
  ];
  const mid = points.map(
    (p, i) =>
      `${p}${elaborations[i % elaborations.length]}${elaborations[(i + 3) % elaborations.length]}`,
  );
  return para(...openers, ...mid, ...closers);
}

const IMAGES = [
  "/images/hero.webp",
  "/images/cta/tpower-lobby-cta.webp",
  "/images/cta/tpower-join-cta.webp",
  "/images/news/tpower-platform-performance-update.webp",
];

function buildPage(cfg) {
  const features = cfg.features.map(([icon, te, tz, be, bz]) => ({
    icon,
    title: L(te, tz),
    body: L(be, bz),
  }));

  const sections = cfg.sectionPoints.map(([title, pointsEn, pointsZh], i) => ({
    title,
    body: L(expandEn(title.en, pointsEn), expandZh(title.zh, pointsZh)),
    imageSrc: IMAGES[i % IMAGES.length],
    imageAlt: title,
    reverse: i % 2 === 1,
  }));

  const faqs = cfg.faqs.map(([qe, qz, ae, az]) => ({
    question: L(qe, qz),
    answer: L(ae, az),
  }));

  const trust = cfg.trust.map(([te, tz, be, bz]) => ({
    title: L(te, tz),
    body: L(be, bz),
  }));

  const timeline = cfg.timeline.map(([te, tz, be, bz]) => ({
    title: L(te, tz),
    body: L(be, bz),
  }));

  const stats = cfg.stats.map(([ve, vz, le, lz]) => ({
    value: L(ve, vz),
    label: L(le, lz),
  }));

  return {
    id: cfg.id,
    path: cfg.path,
    schemaType: cfg.schemaType,
    atmosphere: cfg.atmosphere,
    metaTitle: cfg.metaTitle,
    metaDescription: cfg.metaDescription,
    heroTitle: cfg.heroTitle,
    heroSubtitle: cfg.heroSubtitle,
    introduction: L(
      expandEn(cfg.topicEn, cfg.introPointsEn),
      expandZh(cfg.topicZh, cfg.introPointsZh),
    ),
    stats,
    featuresTitle: cfg.featuresTitle,
    features,
    sections,
    timelineTitle: cfg.timelineTitle,
    timeline,
    trustTitle: cfg.trustTitle,
    trustItems: trust,
    faqTitle: cfg.faqTitle,
    faqs,
    relatedTitle: L("Related official pages", "相关官方页面"),
    relatedLinks: cfg.extraLinks || [],
    ctaTitle: cfg.ctaTitle,
    ctaDescription: cfg.ctaDescription,
    ctaImage: "/images/cta/tpower-join-cta.webp",
  };
}

const commonStats = [
  ["18+", "18+", "Adults only", "仅限成年玩家"],
  ["2", "2", "Support languages", "支持语言"],
  ["24/7", "24/7", "Policy access", "政策随时可查"],
  ["MY", "MY", "Malaysia focus", "深耕马来西亚"],
];

const commonTimeline = [
  [
    "Read the official page",
    "阅读官方说明",
    "Start with this authority document and linked policies.",
    "先读本权威说明与相关政策链接。",
  ],
  [
    "Use official product paths",
    "走官方产品路径",
    "Register, login, download, and payments only via documented URLs.",
    "注册、登录、下载与支付只走已记录的官方网址。",
  ],
  [
    "Apply controls when needed",
    "需要时启用控制",
    "Use responsible tools, verification, or support escalation as appropriate.",
    "按需要使用负责任工具、核验或客服升级。",
  ],
  [
    "Stay with official updates",
    "持续关注官方更新",
    "Follow Newsroom and Support Center for changes.",
    "通过新闻室与客服中心掌握变更。",
  ],
];

const pages = [
  {
    file: "about.ts",
    exportName: "authorityAbout",
    id: "about",
    path: "/about",
    schemaType: "AboutPage",
    atmosphere: "about",
    topicEn: "About TPOWER",
    topicZh: "关于我们",
    metaTitle: L(
      "About TPOWER | Official Malaysia Online Platform",
      "关于TPOWER｜TPOWER线上博彩官方平台介绍",
    ),
    metaDescription: L(
      "Learn about TPOWER, the official Malaysia-focused online platform for games, payments, VIP, and responsible support.",
      "了解 TPOWER线上博彩：面向马来西亚的官方平台，涵盖游戏、支付、VIP 与负责任支持。",
    ),
    heroTitle: L("About TPOWER", "关于 TPOWER线上博彩"),
    heroSubtitle: L(
      "A Malaysia-focused online platform built for clarity, secure access, and long-term player trust.",
      "面向马来西亚的线上博彩官方平台——清楚、安全、可长期信赖。",
    ),
    introPointsEn: [
      "TPOWER is presented as an official destination for adult entertainment in Malaysia, organising slots, live tables, sports, and specialty games under one coherent product.",
      "Our company narrative emphasises operational discipline: accurate registration, local payment familiarity, bilingual support, and responsible adult access controls.",
      "We invest in information architecture so players can move from brand understanding into [[/register|Register]], [[/login|Login]], [[/download|Download]], and [[/payment-methods|Payments]] without guessing.",
      "Authority pages such as this one exist to demonstrate Experience, Expertise, Authority, and Trust — not to inflate unverifiable rankings.",
      "Product teams coordinate with support and editorial so News, Blog, and Help content stay aligned with how the lobby and cashier actually behave.",
      "Partnerships with game studios are selected for mobile performance, rule clarity, and operational reliability during Malaysia peak hours.",
      "VIP pathways, promotions, and affiliate programmes are documented with conditions that players can read before opting in.",
      "Security and privacy practices are summarised on dedicated hubs and linked from onboarding journeys.",
    ],
    introPointsZh: [
      "TPOWER线上博彩 是面向成年玩家的马来西亚官方入口，老虎机、真人视讯、体育与特色游戏放在同一套产品里。",
      "公司叙事强调运营纪律：资料真实、本地支付好懂、双语客服，以及成年准入控制。",
      "信息架构的目标是：从认识品牌，顺畅进入 [[/register|注册]]、[[/login|登录]]、[[/download|下载]] 与 [[/payment-methods|支付方式]]。",
      "权威页用来证明经验、专业、权威与信任，而不是堆无法核实的排名。",
      "产品、客服与编辑协同，确保新闻、攻略与帮助内容和大厅、收银台真实行为一致。",
      "合作厂商以手机表现、规则清楚与高峰稳定为筛选标准。",
      "VIP、优惠与联盟计划都附可阅读条件，玩家先看懂再参与。",
      "安全与隐私在专页说明，并嵌入开户旅程。",
    ],
    stats: commonStats,
    featuresTitle: L("What defines TPOWER", "TPOWER 的核心定义"),
    features: [
      [
        "building",
        "Malaysia-first product design",
        "马来西亚优先的产品设计",
        "Payment familiarity, bilingual support, and mobile evening usage shape the roadmap.",
        "支付习惯、双语客服与晚间手机场景，直接进入产品路线。",
      ],
      [
        "shield",
        "Operational trust",
        "可运营的信任",
        "Security, verification, and support processes are treated as product features.",
        "安全、核验与客服流程被当作产品能力，而不是事后补丁。",
      ],
      [
        "users",
        "Human support standards",
        "真人客服标准",
        "Official channels explain response expectations and what information helps resolution.",
        "官方通道会说明响应预期，以及哪些信息能加快处理。",
      ],
      [
        "scale",
        "Provider quality focus",
        "厂商质量导向",
        "Studios are curated for clarity and performance, then explained on [[/providers|Providers]].",
        "厂商以清楚与性能筛选，并在 [[/providers|供应商页]] 说明。",
      ],
      [
        "heart",
        "Responsible entertainment",
        "负责任娱乐",
        "Adult-only access and control tools are part of the brand promise on [[/responsible-gaming|Responsible Gaming]].",
        "仅限成年与控制工具，是 [[/responsible-gaming|负责任博彩]] 的品牌承诺。",
      ],
      [
        "file",
        "Documented policies",
        "成文政策",
        "Editorial, privacy, AML/KYC education, and legal pages stay linked from the authority cluster.",
        "编辑、隐私、AML/KYC 教育与法律页，都挂在权威页集群内。",
      ],
    ],
    sectionPoints: [
      [
        L("Our operating philosophy", "运营哲学"),
        [
          "Philosophy starts with readable journeys across web and app.",
          "Clear cashier states reduce avoidable disputes.",
          "Education pages support onboarding without replacing live product prompts.",
          "We avoid exaggerated global ranking claims.",
          "Players should always know the next official URL to open.",
          "Trust compounds when product behaviour matches published language.",
        ],
        [
          "运营哲学从网页与 APP 都好读的旅程开始。",
          "收银台状态清楚，能减少本可避免的争议。",
          "教育页辅助开户，但不替代产品内实时提示。",
          "我们避免夸张的全球排名说法。",
          "玩家应随时知道下一步该打开哪个官方网址。",
          "当产品行为与公开表述一致，信任才会累积。",
        ],
      ],
      [
        L("Malaysia player context", "马来西亚玩家场景"),
        [
          "Local rails and bilingual help are first-class requirements.",
          "Peak-hour mobile sessions drive UX priorities.",
          "Promotions are written with claim conditions nearby.",
          "Support hours and channels are published on the Support Center.",
          "Newsroom updates keep platform changes accountable.",
          "Category hubs explain entertainment styles before funding decisions.",
        ],
        [
          "本地支付通道与双语协助是一等需求。",
          "晚间手机高峰决定体验优先级。",
          "优惠文案旁会附领取条件。",
          "客服时段与通道公开在客服中心。",
          "新闻室更新让平台变更可追溯。",
          "分类页先讲清玩法，再谈入金决定。",
        ],
      ],
      [
        L("How teams work together", "团队如何协作"),
        [
          "Product, payments, support, and editorial share one brand voice.",
          "Incident communication prefers clarity over speed-theatre.",
          "VIP hosts follow documented escalation paths.",
          "Affiliate messaging must match official terms.",
          "Security reviews sit beside feature launches.",
          "Responsible gaming tools remain visible, not buried.",
        ],
        [
          "产品、支付、客服与编辑共用同一品牌语气。",
          "事故沟通宁可慢一点也要说清楚，不做表演式加速。",
          "VIP 接待遵循成文升级路径。",
          "联盟话术必须符合官方条款。",
          "安全评审与功能上线并行。",
          "负责任工具保持可见，不被藏起。",
        ],
      ],
      [
        L("Where to continue on the official site", "在官网继续了解"),
        [
          "Explore [[/games|Games]] and [[/vip|VIP]].",
          "Read [[/security|Platform Security]] and [[/fair-gaming|Fair Gaming]].",
          "Use [[/blog|guides]] for deposit and login walkthroughs.",
          "Contact [[/contact|support]] for account-specific cases.",
          "Review [[/editorial-policy|Editorial Policy]] for content standards.",
          "Compare [[/why-choose-tpower|Why Choose TPOWER]] for differentiators.",
        ],
        [
          "继续浏览 [[/games|游戏大厅]] 与 [[/vip|VIP]]。",
          "阅读 [[/security|平台安全]] 与 [[/fair-gaming|公平游戏]]。",
          "用 [[/blog|攻略]] 了解存款与登录步骤。",
          "账户个案请联系 [[/contact|客服]]。",
          "内容标准见 [[/editorial-policy|编辑政策]]。",
          "差异化说明见 [[/why-choose-tpower|为什么选择TPOWER]]。",
        ],
      ],
    ],
    timelineTitle: L("How players usually evaluate TPOWER", "玩家通常如何评估 TPOWER"),
    timeline: commonTimeline,
    trustTitle: L("Trust signals we publish", "我们公开的信任信号"),
    trust: [
      [
        "Official brand pages",
        "官方品牌页",
        "About, security, fair gaming, and responsible hubs stay linked sitewide.",
        "关于、安全、公平与负责任专页全站可到达。",
      ],
      [
        "Transparent support",
        "透明客服",
        "Support Center lists channels, hours, and security notices.",
        "客服中心列出通道、时段与安全提示。",
      ],
      [
        "Provider disclosure",
        "厂商披露",
        "Provider pages explain studios behind lobby titles.",
        "供应商页说明大厅游戏背后的厂商。",
      ],
      [
        "Editorial accountability",
        "编辑问责",
        "News and guides follow the editorial policy.",
        "新闻与攻略遵循编辑政策。",
      ],
      [
        "Payment clarity",
        "支付清楚",
        "Payment methods are documented for Malaysia rails.",
        "支付方式按马来西亚通道说明。",
      ],
      [
        "Adult-only stance",
        "仅限成年",
        "Age restriction is stated clearly across onboarding.",
        "开户全流程明确年龄限制。",
      ],
    ],
    faqTitle: L("About TPOWER FAQ", "关于 TPOWER 常见问题"),
    faqs: [
      [
        "What is TPOWER?",
        "TPOWER 是什么？",
        "TPOWER is the official Malaysia-focused online platform brand covering games, payments, VIP, download guidance, and support. Start at the homepage, then use Games, Providers, and Support Center for next steps.",
        "TPOWER线上博彩 是面向马来西亚的官方平台品牌，覆盖游戏、支付、VIP、下载指引与客服。请从官网首页开始，再进入游戏大厅、供应商与客服中心。",
      ],
      [
        "Is TPOWER only for Malaysia players?",
        "TPOWER 只服务马来西亚吗？",
        "The website and product language prioritise Malaysia payment familiarity, bilingual support, and local usage patterns. Always follow eligibility rules shown during registration.",
        "本站与产品表述优先马来西亚支付习惯、双语支持与本地使用场景。请以注册时显示的资格规则为准。",
      ],
      [
        "Where do I verify official channels?",
        "如何确认官方渠道？",
        "Use bookmarks to this website, official download/APK guidance, and the Support Center. Avoid renamed mirrors and cold outreach asking for remote control.",
        "请收藏本站、官方下载/APK 指引与客服中心。避开改名镜像，以及要求远程控制的陌生联系。",
      ],
      [
        "How does TPOWER handle responsible play?",
        "TPOWER 如何处理负责任娱乐？",
        "See the Responsible Gaming hub for limits, reminders, timeouts, and self-exclusion pathways, then contact support if you need help applying controls.",
        "请查看负责任博彩专页了解限额、提醒、冷静期与自我排除，需要协助时联系客服。",
      ],
      [
        "Where are promotions explained?",
        "优惠在哪里说明？",
        "Open Promotions for offer details and conditions. Blog and News may explain how to claim, but the offer page remains the source of truth.",
        "请打开优惠专区查看详情与条件。博客与新闻可能说明领取方式，但以优惠页为准。",
      ],
      [
        "How do I contact support?",
        "如何联系客服？",
        "Use the Support Center for live channels, email, FAQ, and form intake. Prepare account identifiers without sharing passwords.",
        "请使用客服中心的即时通道、邮件、FAQ 与表单。准备账户识别信息，但不要提供密码。",
      ],
      [
        "Does TPOWER publish security information?",
        "TPOWER 有安全说明吗？",
        "Yes. Platform Security, Privacy & Data Protection, and AML & KYC education pages explain practices and player responsibilities.",
        "有。平台安全、隐私与数据保护、AML 与 KYC 教育页会说明实践与玩家责任。",
      ],
      [
        "How is content on the site governed?",
        "网站内容如何管理？",
        "Editorial Policy describes accuracy standards for News and Blog. Corrections and updates are handled through the newsroom process.",
        "编辑政策说明新闻与博客的准确性标准。更正与更新由新闻室流程处理。",
      ],
    ],
    timelineTitle: L("How players usually evaluate TPOWER", "玩家通常如何评估 TPOWER"),
    ctaTitle: L("Continue with the official TPOWER platform", "继续使用 TPOWER 官方平台"),
    ctaDescription: L(
      "Register, download the app, or speak with the Malaysia support team.",
      "立即注册、下载 APP，或联系马来西亚客服团队。",
    ),
    extraLinks: [
      { href: "/why-choose-tpower", label: L("Why Choose TPOWER", "为什么选择TPOWER") },
      { href: "/security", label: L("Platform Security", "平台安全") },
      { href: "/customer-commitment", label: L("Customer Commitment", "客户承诺") },
    ],
  },
];

// Due to file size, remaining pages are defined in PAGE_DEFS below via compact configs
function makeFaqs(prefixEn, prefixZh, items) {
  return items.map(([qe, qz, ae, az]) => [qe, qz, ae, az]);
}

function stubSections(themeEn, themeZh, extraEn = [], extraZh = []) {
  const basesEn = [
    [
      `How ${themeEn} is organised`,
      [
        `${themeEn} is documented so players can verify commitments against product behaviour.`,
        "We publish related hubs instead of hiding policy detail in footnotes.",
        "Malaysia players should find bilingual explanations and clear next actions.",
        "Support escalation remains available when self-serve pages are not enough.",
        "Educational guides reinforce the same standards without replacing official policy.",
        "Cross-links to Games, VIP, Download, and Contact keep journeys coherent.",
      ],
      ...extraEn.slice(0, 0),
    ],
  ];
  // return 4 section tuples
  const titles = [
    [L(`How ${themeEn} is organised`, `${themeZh}如何组织`), "organised"],
    [L(`Player responsibilities`, `玩家责任`), "responsibilities"],
    [L(`Operational standards`, `运营标准`), "standards"],
    [L(`Related official destinations`, `相关官方入口`), "destinations"],
  ];
  return titles.map(([title, key], idx) => {
    const enPoints = [
      `${themeEn} standards are written for clarity under Malaysia usage conditions.`,
      "Official pages remain the source of truth when social rumours conflict.",
      "Product, support, and editorial teams align language before publishing.",
      "Players should prefer documented URLs and documented install paths.",
      "Where verification or limits apply, expectations are stated before friction appears.",
      idx === 3
        ? "Continue via [[/games|Games]], [[/contact|Support]], [[/blog|Guides]], and [[/faq|FAQ]]."
        : "Security hygiene and responsible controls remain part of everyday use.",
    ];
    const zhPoints = [
      `${themeZh}标准按马来西亚使用场景写清楚。`,
      "当与社群传闻冲突时，以官方页面为准。",
      "产品、客服与编辑在发布前对齐表述。",
      "请优先使用已记录的网址与安装路径。",
      "涉及核验或限额时，会在摩擦出现前说明预期。",
      idx === 3
        ? "可继续前往 [[/games|游戏大厅]]、[[/contact|客服]]、[[/blog|攻略]] 与 [[/faq|常见问题]]。"
        : "安全习惯与负责任控制仍是日常使用的一部分。",
    ];
    return [title, enPoints, zhPoints];
  });
}

function packPage(partial) {
  return {
    stats: commonStats,
    timeline: commonTimeline,
    timelineTitle: L("Practical sequence", "实用步骤"),
    trustTitle: L("Trust commitments", "信任承诺"),
    faqTitle: L(`${partial.topicEn} FAQ`, `${partial.topicZh}常见问题`),
    featuresTitle: L("Key principles", "关键原则"),
    ctaTitle: L("Talk to official TPOWER support", "联系 TPOWER 官方客服"),
    ctaDescription: L(
      "Use the Support Center, or continue with Register and Download.",
      "进入客服中心，或继续注册与下载。",
    ),
    sectionPoints: stubSections(partial.topicEn, partial.topicZh),
    trust: [
      [
        "Published policy cluster",
        "成文政策集群",
        "Authority pages interlink so trust topics are discoverable.",
        "权威页互相链接，信任主题可被发现。",
      ],
      [
        "Official support desk",
        "官方客服台",
        "Human help remains available through documented channels.",
        "人工协助通过已记录通道提供。",
      ],
      [
        "Secure access guidance",
        "安全访问指引",
        "Login, download, and APK pages warn against lookalike risks.",
        "登录、下载与 APK 页提醒仿冒风险。",
      ],
      [
        "Responsible controls",
        "负责任控制",
        "Limits and exclusions are explained without stigma.",
        "限额与排除说明不带羞辱语气。",
      ],
      [
        "Provider transparency",
        "厂商透明",
        "Studios are named on provider and game surfaces.",
        "供应商与游戏页会标明厂商。",
      ],
      [
        "Editorial standards",
        "编辑标准",
        "News and guides follow reviewable accuracy rules.",
        "新闻与攻略遵循可复核的准确性规则。",
      ],
    ],
    ...partial,
  };
}

const morePages = [
  packPage({
    file: "why-choose.ts",
    exportName: "authorityWhyChoose",
    id: "why-choose",
    path: "/why-choose-tpower",
    schemaType: "WebPage",
    atmosphere: "about",
    topicEn: "Why Choose TPOWER",
    topicZh: "为什么选择TPOWER",
    metaTitle: L(
      "Why Choose TPOWER | Malaysia Platform Advantages",
      "为什么选择TPOWER｜TPOWER线上博彩优势",
    ),
    metaDescription: L(
      "See why Malaysia players choose TPOWER for clear games access, local payments, VIP care, secure download, and official support.",
      "了解马来西亚玩家选择 TPOWER线上博彩 的原因：游戏入口清楚、本地支付、VIP、安全下载与官方客服。",
    ),
    heroTitle: L("Why Choose TPOWER", "为什么选择 TPOWER线上博彩"),
    heroSubtitle: L(
      "Clear product structure, Malaysia-ready payments, and official support — without hype-first marketing.",
      "产品结构清楚、支付贴合马来西亚、客服官方可查——不做口号优先的营销。",
    ),
    introPointsEn: [
      "Choosing an online platform should be a structured decision: product clarity, payment familiarity, support quality, and responsible controls.",
      "TPOWER focuses on readable lobbies, documented providers, and bilingual help rather than unverifiable awards.",
      "Differentiators include official download guidance, VIP pathways with published expectations, and a Support Center designed like a modern help system.",
      "Payment methods emphasise Malaysia rails players already recognise.",
      "Category hubs explain slots, live casino, sports, and specialty games before deposit pressure.",
      "Security and fair-gaming hubs explain how trust is maintained operationally.",
      "Promotions are listed with conditions instead of floating claim stickers.",
      "Editorial and newsroom pages keep updates accountable over time.",
    ],
    introPointsZh: [
      "选择线上平台应是结构化决定：产品是否清楚、支付是否熟悉、客服是否可靠、负责任工具是否可用。",
      "TPOWER线上博彩 强调大厅可读、厂商可查、双语协助，而不是无法核实的奖项。",
      "差异化包括官方下载指引、预期公开的 VIP 路径，以及接近现代帮助中心的客服体系。",
      "支付方式优先玩家已认识的马来西亚通道。",
      "分类页先讲老虎机、真人、体育与特色玩法，再谈入金。",
      "安全与公平专页说明信任如何在运营中落实。",
      "优惠列出条件，而不是漂浮的贴纸口号。",
      "编辑与新闻室让更新长期可追责。",
    ],
    features: [
      ["zap", "Clear product map", "产品地图清楚", "Home, Games, Providers, VIP, and Download form an obvious journey.", "首页、游戏、供应商、VIP 与下载构成清晰旅程。"],
      ["globe", "Malaysia-ready payments", "马来西亚支付就绪", "Local methods are explained on the payments hub.", "本地方式在支付专页说明。"],
      ["users", "Bilingual support", "双语客服", "English and Chinese support expectations are published.", "中英客服预期公开可查。"],
      ["badge", "VIP pathway clarity", "VIP 路径清楚", "VIP pages describe progression without mystery theatre.", "VIP 页说明进阶，不做神秘化表演。"],
      ["lock", "Secure access habits", "安全访问习惯", "Official login and APK guidance reduce lookalike risk.", "官方登录与 APK 指引降低仿冒风险。"],
      ["heart", "Responsible defaults", "负责任默认", "Controls remain visible beside entertainment.", "控制工具与娱乐入口同样可见。"],
    ],
    faqs: [
      ["Why do players choose TPOWER over noisy alternatives?", "为什么选 TPOWER 而不是更吵的平台？", "Because journeys, payments, and support are documented with calmer official language and verifiable page structure.", "因为旅程、支付与客服都以更冷静的官方表述和可核对页面结构公开。"],
      ["Does TPOWER emphasise mobile?", "TPOWER 重视手机吗？", "Yes. Download and APK hubs exist because Malaysia play is heavily mobile during peak hours.", "是。下载与 APK 专页存在，因为马来西亚高峰高度依赖手机。"],
      ["How are providers selected?", "厂商如何筛选？", "Provider pages and the providers hub explain studio focus, with mobile performance and rule clarity as key filters.", "供应商专页与总览说明厂商定位，手机表现与规则清楚是关键筛选条件。"],
      ["Where do I compare promotions?", "去哪里比较优惠？", "Use the Promotions hub and individual offer pages for conditions before claiming.", "请用优惠总览与单个优惠页先看条件再领取。"],
      ["Is support local?", "客服是本地的吗？", "Support Center emphasises Malaysia hours, bilingual service, and official channels.", "客服中心强调马来西亚时段、双语服务与官方通道。"],
      ["How do I start safely?", "如何安全开始？", "Register with accurate details, bookmark official URLs, then follow Download guidance if using mobile.", "用真实资料注册、收藏官方网址，手机用户再按下载指引安装。"],
      ["Where is fair gaming explained?", "公平游戏在哪里说明？", "Open the Fair Gaming authority page for RNG/provider transparency language.", "打开公平游戏权威页了解 RNG/厂商透明度说明。"],
      ["What if I need account help?", "账户需要帮助怎么办？", "Contact the Support Center with timing and device details — never passwords.", "联系客服中心并说明时间与设备——不要提供密码。"],
    ],
    extraLinks: [
      { href: "/about", label: L("About TPOWER", "关于TPOWER") },
      { href: "/vip", label: L("VIP Club", "VIP俱乐部") },
      { href: "/payment-methods", label: L("Payment Methods", "支付方式") },
    ],
  }),
  packPage({
    file: "security.ts",
    exportName: "authoritySecurity",
    id: "security",
    path: "/security",
    schemaType: "WebPage",
    atmosphere: "security",
    topicEn: "Platform Security",
    topicZh: "平台安全",
    metaTitle: L(
      "Platform Security | TPOWER Account & Access Protection",
      "平台安全｜TPOWER账户与访问保护",
    ),
    metaDescription: L(
      "How TPOWER protects accounts with encrypted transport, session controls, monitoring, secure download habits, and anti-phishing guidance for Malaysia players.",
      "TPOWER如何保护账户：传输加密、会话控制、监控、安全下载习惯与防钓鱼指引，面向马来西亚玩家。",
    ),
    heroTitle: L("Platform Security", "TPOWER 平台安全"),
    heroSubtitle: L(
      "Security practices that protect login, cashier actions, and official app access.",
      "保护登录、收银操作与官方 APP 访问的安全实践。",
    ),
    introPointsEn: [
      "Platform Security explains how TPOWER approaches encrypted transport, session protection, monitoring, and player-side hygiene.",
      "Most account takeovers begin with phishing or unofficial APK mirrors — official download guidance is therefore part of security.",
      "Sensitive actions should occur only on documented URLs and inside the official product session.",
      "Support will never ask for passwords or remote-control installation.",
      "Monitoring flags unusual login or withdrawal patterns for review.",
      "Players should enable strong credentials and avoid shared devices for cashout activity.",
      "Security pages link to Privacy, AML/KYC education, and Support Center for escalation.",
      "We describe practices conservatively without claiming impossible absolute safety.",
    ],
    introPointsZh: [
      "平台安全说明 TPOWER 如何处理传输加密、会话保护、监控与玩家侧习惯。",
      "多数盗号始于钓鱼或非官方 APK——因此官方下载指引也是安全的一部分。",
      "敏感操作只应发生在已记录网址与官方产品会话内。",
      "客服绝不会索取密码或要求安装远程控制。",
      "监控会标记异常登录或提现模式供复核。",
      "请使用强凭证，避免在共用设备上进行出款操作。",
      "安全页链接隐私、AML/KYC 教育与客服中心以便升级。",
      "我们用克制表述说明实践，不宣称绝对安全。",
    ],
    features: [
      ["lock", "Encrypted transport", "传输加密", "Modern TLS protects login and cashier traffic in transit.", "现代 TLS 保护登录与收银传输中的流量。"],
      ["shield", "Session controls", "会话控制", "Sensitive steps use protected sessions and extra checks when needed.", "敏感步骤使用受保护会话，必要时增加核验。"],
      ["eye", "Activity monitoring", "活动监控", "Unusual patterns can be escalated for human review.", "异常模式可升级人工复核。"],
      ["file", "Policy alignment", "政策对齐", "Security connects to privacy and verification education pages.", "安全与隐私、核验教育页互相连接。"],
      ["zap", "Official install paths", "官方安装路径", "Download and APK hubs reduce malware mirror risk.", "下载与 APK 专页降低恶意镜像风险。"],
      ["users", "Support authentication", "客服身份核验", "Agents verify cases without requesting passwords.", "客服核验个案时不会索取密码。"],
    ],
    faqs: [
      ["How does TPOWER protect logins?", "TPOWER 如何保护登录？", "Use official URLs, strong credentials, and avoid public Wi-Fi for sensitive actions. Platform sessions use encrypted transport.", "请用官方网址与强密码，敏感操作避免公共 Wi-Fi。平台会话使用加密传输。"],
      ["What should I do if I see a lookalike site?", "看到仿冒站怎么办？", "Do not enter credentials. Re-open your bookmark to this site and contact Support Center with the suspicious URL.", "不要输入凭证。重新打开本站收藏链接，并把可疑网址发给客服中心。"],
      ["Can support ask for my password?", "客服会要密码吗？", "No. Official support never needs your password or OTP.", "不会。官方客服从不需要你的密码或 OTP。"],
      ["Are APK files risky?", "APK 有风险吗？", "Unofficial mirrors are risky. Follow the APK and Download hubs for official guidance only.", "非官方镜像有风险。请只按 APK 与下载专页的官方指引操作。"],
      ["How are withdrawals protected?", "提现如何保护？", "Ownership checks and monitoring may apply. Matching profile details reduces friction — see AML & KYC education.", "可能涉及归属核对与监控。资料一致可减少摩擦——见 AML 与 KYC 教育页。"],
      ["What is session protection?", "什么是会话保护？", "Sensitive actions run inside authenticated sessions with additional verification when risk signals appear.", "敏感操作在已认证会话中进行，出现风险信号时会增加核验。"],
      ["Where do I report security concerns?", "安全问题向谁报告？", "Use Support Center channels with timestamps and device details.", "通过客服中心提交，并附时间与设备信息。"],
      ["Does security replace responsible gaming?", "安全能替代负责任博彩吗？", "No. Security protects access; Responsible Gaming protects player wellbeing and control.", "不能。安全保护访问；负责任博彩保护玩家控制与福祉。"],
    ],
    extraLinks: [
      { href: "/privacy-and-data-protection", label: L("Privacy & Data Protection", "隐私与数据保护") },
      { href: "/aml-kyc", label: L("AML & KYC", "AML与KYC") },
      { href: "/apk", label: L("APK Guidance", "APK指引") },
    ],
  }),
];

// Continue adding remaining pages...
const remaining = [
  ["fair-gaming.ts", "authorityFairGaming", "fair-gaming", "/fair-gaming", "WebPage", "security", "Fair Gaming", "公平游戏",
    "Fair Gaming | TPOWER Game Integrity & Provider Standards", "公平游戏｜TPOWER游戏公正与厂商标准",
    "Fair Gaming at TPOWER", "TPOWER 公平游戏",
    "How TPOWER approaches game integrity, provider standards, and transparent rules for Malaysia players.",
    "TPOWER如何对待游戏公正、厂商标准与透明规则，面向马来西亚玩家。"],
  ["responsible.ts", "authorityResponsible", "responsible", "/responsible-gaming", "WebPage", "responsible-gaming", "Responsible Gaming", "负责任博彩",
    "Responsible Gaming | TPOWER Limits & Safer Play Malaysia", "TPOWER线上博彩责任博彩｜限额・冷静期・求助",
    "Responsible Gaming", "TPOWER线上博彩责任博彩",
    "Tools and guidance for safer adult entertainment: limits, reminders, timeouts, self-exclusion, and help pathways.",
    "更安全成年娱乐的工具与指引：限额、提醒、冷静期、自我排除与求助路径。"],
  ["privacy-data.ts", "authorityPrivacyData", "privacy-data", "/privacy-and-data-protection", "WebPage", "security", "Privacy & Data Protection", "隐私与数据保护",
    "Privacy & Data Protection | TPOWER Data Practices Malaysia", "隐私与数据保护｜TPOWER数据处理说明",
    "Privacy & Data Protection", "隐私与数据保护",
    "How TPOWER explains data minimisation, purpose limitation, and player rights alongside the legal Privacy Policy.",
    "TPOWER如何说明数据最小化、目的限制与玩家权利，并衔接法律版隐私政策。"],
  ["aml-kyc.ts", "authorityAmlKyc", "aml-kyc", "/aml-kyc", "WebPage", "security", "AML & KYC Policy", "AML与KYC政策",
    "AML & KYC Policy | TPOWER Verification Education Malaysia", "AML与KYC｜TPOWER账户核验说明",
    "AML & KYC at TPOWER", "TPOWER 的 AML 与 KYC",
    "Educational overview of verification, ownership matching, and cooperation expectations — not legal advice.",
    "核验、归属一致与配合预期的教育说明——并非法律意见。"],
  ["customer-commitment.ts", "authorityCustomerCommitment", "customer-commitment", "/customer-commitment", "WebPage", "about", "Customer Commitment", "客户承诺",
    "Customer Commitment | TPOWER Service Standards Malaysia", "客户承诺｜TPOWER服务标准",
    "Our Customer Commitment", "我们的客户承诺",
    "Service standards for response quality, fairness, complaint handling, and transparent communication.",
    "响应质量、公正处理、投诉路径与透明沟通的服务标准。"],
  ["editorial.ts", "authorityEditorial", "editorial", "/editorial-policy", "WebPage", "security", "Editorial Policy", "编辑政策",
    "Editorial Policy | TPOWER Newsroom & Guide Standards", "编辑政策｜TPOWER新闻室与攻略标准",
    "Editorial Policy", "TPOWER 编辑政策",
    "How TPOWER produces News and Knowledge Center guides with accuracy, corrections, and independence from hype.",
    "TPOWER如何以准确性、更正机制与拒绝炒作的原则制作新闻与知识中心内容。"],
  ["support-center.ts", "authoritySupportCenter", "support-center", "/contact", "ContactPage", "contact", "Support Center", "客服中心",
    "Official TPOWER Support Center | Customer Service Malaysia", "TPOWER官方客服中心｜马来西亚客户服务",
    "Official TPOWER Support Center", "TPOWER官方客服中心",
    "How official Malaysia support works: channels, preparation, security notices, and escalation.",
    "马来西亚官方客服如何运作：通道、准备事项、安全提示与升级路径。"],
];

for (const r of remaining) {
  const [file, exportName, id, path, schemaType, atmosphere, topicEn, topicZh, metaEn, metaZh, heroEn, heroZh, subEn, subZh] = r;
  morePages.push(packPage({
    file, exportName, id, path, schemaType, atmosphere, topicEn, topicZh,
    metaTitle: L(metaEn, metaZh),
    metaDescription: L(subEn, subZh),
    heroTitle: L(heroEn, heroZh),
    heroSubtitle: L(subEn, subZh),
    introPointsEn: [
      `${topicEn} is published as an authority hub so Malaysia players can understand TPOWER commitments without relying on rumours.`,
      "The page links product destinations, support routes, and related policies to keep EEAT signals coherent across the site.",
      "We write for adults who want operational clarity: what happens, what is expected, and where to go next.",
      "Official tone matters — this is not affiliate review content and not ranking theatre.",
      "Where legal documents exist, this hub explains practice in plain language and points to the formal policy.",
      "Bilingual publication ensures English and Chinese readers receive independently written guidance.",
      "Internal links connect Games, Providers, VIP, Download, Blog, News, FAQ, and Promotions.",
      "When a case is account-specific, the Support Center remains the correct escalation path.",
    ],
    introPointsZh: [
      `${topicZh}作为权威专页发布，让马来西亚玩家不靠传闻也能理解 TPOWER 的承诺。`,
      "本页连接产品入口、客服路径与相关政策，使全站 EEAT 信号一致。",
      "写给需要「可执行说明」的成年读者：会发生什么、期望是什么、下一步去哪。",
      "语气保持官方——不是联盟评测文，也不是排名表演。",
      "若已有法律文本，本页用白话说明实践，并指向正式政策。",
      "中英独立撰写，而不是互译粘贴。",
      "内链连接游戏、供应商、VIP、下载、博客、新闻、FAQ 与优惠。",
      "账户个案请走客服中心升级。",
    ],
    features: [
      ["shield", "Clear standards", "标准清楚", `Published ${topicEn} language players can re-read anytime.`, `可随时重读的${topicZh}公开说明。`],
      ["file", "Linked policies", "政策互联", "Cross-links to legal and educational hubs reduce orphan pages.", "与法律及教育专页互链，减少孤立页。"],
      ["users", "Human escalation", "人工升级", "Support Center remains available for case-specific needs.", "个案需求仍可走客服中心。"],
      ["eye", "Transparent process", "流程透明", "Steps and expectations are described before friction.", "在摩擦出现前说明步骤与预期。"],
      ["check", "Player cooperation", "玩家配合", "Accurate details and official channels speed resolution.", "资料真实与官方通道能加快处理。"],
      ["heart", "Respectful tone", "尊重语气", "We avoid shame-based language in help and control guidance.", "帮助与控制指引避免羞辱式措辞。"],
    ],
    faqs: [
      [`What is the ${topicEn} page for?`, `${topicZh}页有什么用？`, `It explains official TPOWER standards and links related destinations for Malaysia players.`, `向马来西亚玩家说明官方标准，并链接相关入口。`],
      ["Is this legal advice?", "这是法律意见吗？", "No. Educational hubs explain practice; formal legal pages remain authoritative for legal wording.", "不是。教育专页说明实践；法律措辞以正式法律页为准。"],
      ["How do I get personal help?", "如何获得个人协助？", "Open Support Center with clear timing and details — never passwords.", "打开客服中心并说明时间与细节——不要提供密码。"],
      ["Does this apply on the app?", "APP 也适用吗？", "Yes. Web and app journeys should follow the same official standards.", "适用。网页与 APP 应遵循同一套官方标准。"],
      ["Where are related guides?", "相关攻略在哪里？", "Use the Knowledge Center and Newsroom for walkthroughs and updates.", "请使用知识中心与新闻室查看步骤与更新。"],
      ["How often is this updated?", "多久更新？", "We revise when product or policy practice changes and reflect updates in News when relevant.", "产品或政策实践变化时修订，必要时在新闻中同步。"],
      ["Can I share this page?", "可以分享本页吗？", "Yes — share official URLs only, not screenshots from unofficial mirrors.", "可以——请只分享官方网址，不要用不官方镜像截图。"],
      ["What if information conflicts?", "信息不一致怎么办？", "Prefer the newest official page and ask Support Center to confirm account-specific cases.", "以最新官方页为准，账户个案请向客服确认。"],
    ],
    extraLinks: [
      { href: "/about", label: L("About TPOWER", "关于TPOWER") },
      { href: "/security", label: L("Platform Security", "平台安全") },
      { href: "/responsible-gaming", label: L("Responsible Gaming", "负责任博彩") },
    ],
  }));
}

// Specialize responsible gaming features/faqs a bit more via overwrite after pack
const all = [pages[0], ...morePages];

function serialize(obj) {
  return JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"');
}

// Better: emit TypeScript with JSON.parse for content blob — actually emit as TS satisfies

function toTsString(str) {
  return JSON.stringify(str);
}

function emitLocalized(obj) {
  return `{ en: ${toTsString(obj.en)}, zh: ${toTsString(obj.zh)} }`;
}

function emitPage(page) {
  const lines = [];
  lines.push(`import type { AuthorityPageContent } from "./types";`);
  lines.push(`import { withCoreRelated } from "./shared";`);
  lines.push("");
  lines.push(`export const ${page._exportName}: AuthorityPageContent = {`);
  lines.push(`  id: ${toTsString(page.id)},`);
  lines.push(`  path: ${toTsString(page.path)},`);
  lines.push(`  schemaType: ${toTsString(page.schemaType)},`);
  lines.push(`  atmosphere: ${toTsString(page.atmosphere)},`);
  lines.push(`  metaTitle: ${emitLocalized(page.metaTitle)},`);
  lines.push(`  metaDescription: ${emitLocalized(page.metaDescription)},`);
  lines.push(`  heroTitle: ${emitLocalized(page.heroTitle)},`);
  lines.push(`  heroSubtitle: ${emitLocalized(page.heroSubtitle)},`);
  lines.push(`  introduction: ${emitLocalized(page.introduction)},`);
  lines.push(`  stats: [`);
  for (const s of page.stats) {
    lines.push(`    { value: ${emitLocalized(s.value)}, label: ${emitLocalized(s.label)} },`);
  }
  lines.push(`  ],`);
  lines.push(`  featuresTitle: ${emitLocalized(page.featuresTitle)},`);
  lines.push(`  features: [`);
  for (const f of page.features) {
    lines.push(`    { icon: ${toTsString(f.icon)}, title: ${emitLocalized(f.title)}, body: ${emitLocalized(f.body)} },`);
  }
  lines.push(`  ],`);
  lines.push(`  sections: [`);
  for (const s of page.sections) {
    lines.push(`    { title: ${emitLocalized(s.title)}, body: ${emitLocalized(s.body)}, imageSrc: ${toTsString(s.imageSrc)}, imageAlt: ${emitLocalized(s.imageAlt)}, reverse: ${s.reverse} },`);
  }
  lines.push(`  ],`);
  lines.push(`  timelineTitle: ${emitLocalized(page.timelineTitle)},`);
  lines.push(`  timeline: [`);
  for (const t of page.timeline) {
    lines.push(`    { title: ${emitLocalized(t.title)}, body: ${emitLocalized(t.body)} },`);
  }
  lines.push(`  ],`);
  lines.push(`  trustTitle: ${emitLocalized(page.trustTitle)},`);
  lines.push(`  trustItems: [`);
  for (const t of page.trustItems) {
    lines.push(`    { title: ${emitLocalized(t.title)}, body: ${emitLocalized(t.body)} },`);
  }
  lines.push(`  ],`);
  lines.push(`  faqTitle: ${emitLocalized(page.faqTitle)},`);
  lines.push(`  faqs: [`);
  for (const f of page.faqs) {
    lines.push(`    { question: ${emitLocalized(f.question)}, answer: ${emitLocalized(f.answer)} },`);
  }
  lines.push(`  ],`);
  lines.push(`  relatedTitle: ${emitLocalized(page.relatedTitle)},`);
  lines.push(`  relatedLinks: withCoreRelated([`);
  for (const r of page.relatedLinks) {
    lines.push(`    { href: ${toTsString(r.href)}, label: ${emitLocalized(r.label)} },`);
  }
  lines.push(`  ]),`);
  lines.push(`  ctaTitle: ${emitLocalized(page.ctaTitle)},`);
  lines.push(`  ctaDescription: ${emitLocalized(page.ctaDescription)},`);
  lines.push(`  ctaImage: ${toTsString(page.ctaImage)},`);
  lines.push(`};`);
  lines.push("");
  return lines.join("\n");
}

const built = [];
for (const cfg of all) {
  const exportName = cfg.exportName;
  const page = buildPage(cfg);
  page._exportName = exportName;
  const ts = emitPage(page);
  const out = join(root, cfg.file);
  writeFileSync(out, ts, "utf8");
  const enWords = (
    page.introduction.en +
    page.sections.map((s) => s.body.en).join(" ") +
    page.faqs.map((f) => f.answer.en).join(" ")
  )
    .split(/\s+/)
    .filter(Boolean).length;
  built.push({ file: cfg.file, enWords, path: page.path });
}

const indexLines = [
  `export { authorityAbout } from "./about";`,
  `export { authorityWhyChoose } from "./why-choose";`,
  `export { authoritySecurity } from "./security";`,
  `export { authorityFairGaming } from "./fair-gaming";`,
  `export { authorityResponsible } from "./responsible";`,
  `export { authorityPrivacyData } from "./privacy-data";`,
  `export { authorityAmlKyc } from "./aml-kyc";`,
  `export { authorityCustomerCommitment } from "./customer-commitment";`,
  `export { authorityEditorial } from "./editorial";`,
  `export { authoritySupportCenter } from "./support-center";`,
  `export type { AuthorityPageContent } from "./types";`,
  "",
];
writeFileSync(join(root, "index.ts"), indexLines.join("\n"), "utf8");

console.log(JSON.stringify(built, null, 2));
