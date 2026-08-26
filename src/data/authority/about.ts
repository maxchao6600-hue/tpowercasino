import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authorityAbout: AuthorityPageContent = {
  id: "about",
  path: "/about",
  schemaType: "AboutPage",
  atmosphere: "about",
  metaTitle: {
    en: "About TPOWER | Online Gaming Platform Malaysia",
    zh: "关于TPOWER｜TPOWER线上博彩官方平台介绍",
  },
  metaDescription: {
    en: "Learn who TPOWER is as an online gaming platform for Malaysia — official gaming partners, support, download guidance, and product coverage under one brand.",
    zh: "认识TPOWER线上博彩：面向马来西亚玩家的官方平台定位、游戏合作伙伴、客服与下载入口，以及统一品牌下的品类覆盖。",
  },
  heroTitle: {
    en: "About TPOWER",
    zh: "关于 TPOWER线上博彩",
  },
  heroSubtitle: {
    en: "A Malaysia-focused gaming platform with official partners, bilingual support, and a clear download hub.",
    zh: "面向马来西亚的线上博彩平台：官方游戏合作伙伴、双语客服，以及清晰的官方下载入口。",
  },
  introduction: {
    en: `TPOWER is an online gaming platform built for adult players in Malaysia. We bring slots, live tables, sports, fishing, and specialty titles onto one official surface — with payments, VIP, support, and app guidance kept under the same brand.

We work with official gaming partners and platform integration partners so the lobby stays curated and supportable. Studio names and context live on [[/providers|Providers]]; discovery starts in [[/games|Games]]. We describe these relationships as partnerships and integrations — not ownership of the studios behind the titles.

Malaysia shapes day-to-day product choices: familiar funding rails, evening mobile sessions, and English/Chinese help that describe the same screens. When something changes — a payment rail, an app build, a promotion rule — the official site is the place to check first.

This About page is the entity overview. For differentiators, open [[/why-choose-tpower|Why Choose TPOWER]]. For funding orientation, see [[/payment-methods|payment methods]]. For installs, use [[/download|Download]]. For human help, go to [[/contact|Support Center]].

Trust topics sit in linked hubs: [[/security|Platform Security]], [[/fair-gaming|Fair Gaming]], and [[/responsible-gaming|Responsible Gaming]]. Adult-only access and responsible controls are part of how we operate, not decorative footer copy.

If you are evaluating whether this is the official brand, bookmark this domain, use [[/register|Register]] and [[/login|Login]] only here, and ignore renamed mirrors or remote-control requests. Company identity is strongest when it stays consistent and verifiable.
`,
    zh: `TPOWER线上博彩 是面向马来西亚成年玩家的线上博彩平台。我们把老虎机、真人视讯、体育、捕鱼与特色玩法放在同一官方入口，支付、VIP、客服与 APP 指引共用同一品牌。

我们与官方游戏合作伙伴、平台对接合作伙伴协作，让大厅可筛选、可支持。厂商名称与背景在 [[/providers|游戏供应商]]；发现入口在 [[/games|游戏大厅]]。我们用合作与对接来描述关系——不是声称拥有这些工作室。

马来西亚决定日常产品取舍：熟悉的入金通道、晚间手机会话，以及能描述同一屏幕的中英协助。支付通道、APP 版本或优惠规则有变更时，请优先查官网。

本页是品牌实体总览。差异化见 [[/why-choose-tpower|为什么选择TPOWER]]；资金导向见 [[/payment-methods|支付方式]]；安装见 [[/download|APP下载]]；人工协助走 [[/contact|客服中心]]。

信任议题集中在互链专页：[[/security|平台安全]]、[[/fair-gaming|公平游戏]]、[[/responsible-gaming|负责任博彩]]。仅限成年与负责任控制属于运营方式，不是页脚装饰。

若要确认是否官方品牌：收藏本域名，只在此 [[/register|注册]] 与 [[/login|登录]]，忽略改名镜像与远程控制要求。公司身份最有力的时候，是它稳定且可核对。
`,
  },
  stats: [
    {
      value: { en: "1", zh: "1" },
      label: { en: "Official brand surface", zh: "统一官方品牌入口" },
    },
    {
      value: { en: "MY", zh: "MY" },
      label: { en: "Malaysia product focus", zh: "聚焦马来西亚场景" },
    },
    {
      value: { en: "EN/ZH", zh: "中/英" },
      label: { en: "Bilingual player journeys", zh: "双语玩家旅程" },
    },
    {
      value: { en: "5+", zh: "5+" },
      label: { en: "Core entertainment categories", zh: "核心娱乐品类" },
    },
  ],
  featuresTitle: {
    en: "What defines the TPOWER platform entity",
    zh: "构成 TPOWER线上博彩 平台实体的要素",
  },
  features: [
    {
      icon: "building",
      title: {
        en: "One official platform",
        zh: "统一官方平台",
      },
      body: {
        en: "Web, app, cashier, and support present as one brand — not a patchwork of white-label skins.",
        zh: "网页、APP、收银台与客服呈现同一品牌，而不是拼凑式白标皮肤。",
      },
    },
    {
      icon: "users",
      title: {
        en: "Official gaming partners",
        zh: "官方游戏合作伙伴",
      },
      body: {
        en: "Supported game providers and platform integration partners are disclosed on Providers — as partnerships, not studio ownership.",
        zh: "支持的游戏供应商与平台对接合作伙伴在供应商页披露——是合作关系，不是拥有工作室。",
      },
    },
    {
      icon: "globe",
      title: {
        en: "Built for Malaysia usage",
        zh: "按马来西亚习惯建设",
      },
      body: {
        en: "Local rails, evening mobile peaks, and bilingual help drive roadmap priority.",
        zh: "本地支付、晚间手机高峰与双语协助，决定路线图优先级。",
      },
    },
    {
      icon: "zap",
      title: {
        en: "Support and download hub",
        zh: "客服与下载入口",
      },
      body: {
        en: "Official support channels and download guidance keep installs and help verifiable.",
        zh: "官方客服通道与下载指引，让安装与求助可核对。",
      },
    },
    {
      icon: "shield",
      title: {
        en: "Security and adult controls",
        zh: "安全与成年控制",
      },
      body: {
        en: "Security hygiene and responsible-play tools sit in linked hubs next to the lobby.",
        zh: "安全卫生与负责任工具与大厅并列，放在可互链专页。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Broad category coverage",
        zh: "品类覆盖清晰",
      },
      body: {
        en: "Slots, live casino, sports, fishing, and specialty games stay discoverable under one lobby.",
        zh: "老虎机、真人、体育、捕鱼与特色玩法，在同一大厅可发现。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Who is TPOWER",
        zh: "认识TPOWER线上博彩",
      },
      body: {
        en: `TPOWER is the official brand behind a Malaysia-focused online gaming platform. Adults use one homepage, one registration flow, one download path, and one support desk that should be treated as authoritative.

From About you can reach product hubs such as [[/games|Games]] and [[/vip|VIP]], operational hubs such as [[/payment-methods|Payments]] and [[/download|Download]], and trust hubs such as [[/security|Security]] and [[/customer-commitment|Customer Commitment]]. Brand understanding and product action stay connected.

We operate as a platform coordinating entertainment, local payment expectations, and bilingual service. When players ask whether this is the real TPOWER, the check is practical: bookmark the official site, use [[/login|Login]] and [[/register|Register]] on that domain, and open support only through published channels.
`,
        zh: `TPOWER线上博彩 是面向马来西亚的官方线上博彩平台品牌。成年玩家应使用一个首页、一套注册流程、一条下载路径，以及一个权威客服台。

从「关于我们」可到达 [[/games|游戏大厅]]、[[/vip|VIP]] 等产品页，[[/payment-methods|支付方式]]、[[/download|下载]] 等操作页，以及 [[/security|平台安全]]、[[/customer-commitment|客户承诺]] 等信任页。认识品牌与采取行动连在一起。

我们以平台角色协调娱乐内容、本地支付预期与双语服务。若有人问「这是不是真的 TPOWER？」，核对方式很实际：收藏官网、在该域名使用 [[/login|登录]] 与 [[/register|注册]]、只走公开客服通道。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TPOWER official company identity",
        zh: "TPOWER 官方公司身份",
      },
      reverse: false,
    },
    {
      title: {
        en: "Our Gaming Partners",
        zh: "我们的游戏合作伙伴",
      },
      body: {
        en: `Entertainment on TPOWER comes through official gaming partners and platform integration partners. Titles in the lobby are supplied by supported game providers — independent studios whose games we integrate for adult play.

We do not invent licenses, awards, or ownership of those studios. Partnership wording stays precise: integration and support on our platform, disclosed on [[/providers|Providers]] so players can see who builds the titles they open.

Discovery still starts in [[/games|Games]]. Category pages explain entertainment styles; provider pages explain the supply chain. When a mechanic question arises, support can point back to the same partner context instead of improvising folklore.
`,
        zh: `TPOWER线上博彩 的娱乐内容来自官方游戏合作伙伴与平台对接合作伙伴。大厅里的作品由支持的游戏供应商提供——这些独立工作室的游戏经平台对接供成年玩家使用。

我们不编造牌照、奖项或对这些工作室的所有权。合作表述保持精确：是平台上的对接与支持，并在 [[/providers|游戏供应商]] 披露，让玩家知道打开的游戏由谁制作。

发现仍从 [[/games|游戏大厅]] 开始。分类页说明玩法风格；供应商页说明供给链。出现机制问题时，客服可回指同一合作背景，而不是即兴编传说。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "TPOWER gaming partners and providers",
        zh: "TPOWER 游戏合作伙伴与供应商",
      },
      reverse: true,
    },
    {
      title: {
        en: "Why Malaysian Players Choose TPOWER",
        zh: "为什么马来西亚玩家选择TPOWER",
      },
      body: {
        en: `Players in Malaysia often compare platforms on practical criteria: Can I recognise the deposit method? Does the app install path look official? Will support understand a cashier screenshot in my language?

TPOWER designs for those questions. Local payment familiarity shapes the cashier. Evening mobile usage shapes performance priorities. Bilingual support shapes help articles and live agents so English and Chinese explanations do not contradict each other.

Continue with [[/why-choose-tpower|Why Choose TPOWER]] for a fuller comparison checklist, or open [[/payment-methods|payment methods]] and [[/download|Download]] to inspect the journeys directly.
`,
        zh: `大马玩家常按实用标准比较平台：存款方式认不认得？APP 安装路径像不像官方？客服能不能看懂我语言里的收银台截图？

TPOWER线上博彩 按这些问题设计。本地支付习惯塑造收银台；晚间手机使用塑造性能优先级；双语客服要求同一问题的中英解释不能互相打架。

更完整的比较清单见 [[/why-choose-tpower|为什么选择TPOWER]]；也可直接打开 [[/payment-methods|支付方式]] 与 [[/download|下载]] 检查旅程。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Malaysia-centred TPOWER product design",
        zh: "以马来西亚为中心的产品设计",
      },
      reverse: false,
    },
    {
      title: {
        en: "Security & Responsible Gaming",
        zh: "安全与负责任博彩",
      },
      body: {
        en: `Security and responsible play are part of the platform entity, not optional fine print. [[/security|Platform Security]] covers session hygiene, phishing patterns, and how to stay on official URLs. [[/fair-gaming|Fair Gaming]] explains how rules and studio standards are framed without inventing guaranteed outcomes.

[[/responsible-gaming|Responsible Gaming]] documents limits, reminders, timeouts, and exclusion pathways for adult players. Age restriction is stated across onboarding. Support can help apply controls through official channels — and will never ask for passwords while doing so.

When product behaviour and published language diverge, the correct fix is alignment — not louder slogans. That discipline is how the brand stays credible after marketing seasons change.
`,
        zh: `安全与负责任娱乐属于平台实体，不是可选小字。[[/security|平台安全]] 说明会话卫生、钓鱼模式，以及如何留在官方网址。[[/fair-gaming|公平游戏]] 说明规则与厂商标准如何表述，不编造保证型结果。

[[/responsible-gaming|负责任博彩]] 写明限额、提醒、冷静期与排除路径。年龄限制贯穿开户。需要协助时可通过官方客服启用控制——过程中不会索要密码。

当产品行为与公开表述不一致，正确做法是对齐两者，而不是把口号喊得更大声。这是品牌在营销季节更替后仍站得住的原因。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "TPOWER security and responsible gaming",
        zh: "TPOWER 安全与负责任博彩",
      },
      reverse: true,
    },
    {
      title: {
        en: "Customer Support",
        zh: "官方客服支持",
      },
      body: {
        en: `Official support sits in [[/contact|Support Center]]. Agents share cashier vocabulary across English and Chinese so a deposit state is not renamed between languages. For repeated questions, use [[/faq|FAQ]]; for walkthroughs, use [[/blog|Knowledge Center]].

Preparation guidance is published upfront: bring identifiers and screenshots, never passwords or one-time codes outside official channels. Remote-control requests and “agent-only” deposit instructions outside the cashier are risk signals — not shortcuts.

Customer standards and escalation paths are summarised on [[/customer-commitment|Customer Commitment]]. Account-specific cases stay on official threads so phishing campaigns lose leverage.
`,
        zh: `官方客服在 [[/contact|客服中心]]。中英客服用同一套收银台词汇，避免同一种存款状态换个叫法。重复问题看 [[/faq|常见问题]]；操作步骤看 [[/blog|知识中心]]。

准备资料的指引事先公开：带识别信息与截图，切勿在非官方渠道提供密码或一次性验证码。远程控制要求、收银台外的「仅限代理」入金指示，都是风险信号——不是捷径。

响应与升级标准见 [[/customer-commitment|客户承诺]]。账户个案留在官方线程，钓鱼活动才会失去杠杆。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TPOWER official customer support",
        zh: "TPOWER 官方客服支持",
      },
      reverse: false,
    },
    {
      title: {
        en: "Platform Coverage",
        zh: "平台覆盖品类",
      },
      body: {
        en: `Platform coverage means one lobby spanning slots, live casino, sports, fishing, and specialty games — discoverable from [[/games|Games]] without hopping between disconnected brands. Provider context for supported game providers stays on [[/providers|Providers]].

Funding orientation lives on [[/payment-methods|Payments]]; progression on [[/vip|VIP]]; offers on [[/promotions|Promotions]]; mobile installs on [[/download|Download]]. Category hubs explain entertainment styles before funding decisions.

Coverage is curated for supportability during Malaysia peak hours, not volume for its own sake. When a title appears in the lobby, players should be able to find studio context, payment paths, and help without leaving the official information architecture.
`,
        zh: `平台覆盖指同一大厅跨越老虎机、真人视讯、体育、捕鱼与特色玩法——从 [[/games|游戏大厅]] 发现，而不必在互不相关的品牌之间跳转。支持的游戏供应商背景仍在 [[/providers|游戏供应商]]。

资金导向在 [[/payment-methods|支付方式]]；进阶在 [[/vip|VIP]]；优惠在 [[/promotions|优惠专区]]；手机安装在 [[/download|下载]]。分类页先讲清玩法，再谈入金。

覆盖按马来西亚高峰可支持性筛选，不是为堆数量。大厅出现某款游戏时，玩家应能在官方信息架构内找到厂商背景、支付路径与协助入口。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "TPOWER platform category coverage",
        zh: "TPOWER 平台品类覆盖",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "A practical path to understand TPOWER",
    zh: "认识 TPOWER线上博彩 的实用路径",
  },
  timeline: [
    {
      title: {
        en: "Read the platform entity overview",
        zh: "先读平台实体总览",
      },
      body: {
        en: "Use this About page to see who we are, how partners work, and how Malaysia shapes the product.",
        zh: "用本页了解我们是谁、合作伙伴如何运作，以及马来西亚如何塑造产品。",
      },
    },
    {
      title: {
        en: "Compare differentiators and trust hubs",
        zh: "对照差异化与信任专页",
      },
      body: {
        en: "Open Why Choose TPOWER, Security, Fair Gaming, and Responsible Gaming.",
        zh: "打开为什么选择TPOWER、平台安全、公平游戏与负责任博彩。",
      },
    },
    {
      title: {
        en: "Walk the official product journey",
        zh: "走官方产品旅程",
      },
      body: {
        en: "Register, explore Games and Providers, review Payments, then Download if you use mobile.",
        zh: "注册、浏览游戏与供应商、查看支付，若用手机再走下载指引。",
      },
    },
    {
      title: {
        en: "Keep updates and support official",
        zh: "更新与客服只认官方",
      },
      body: {
        en: "Follow Newsroom for changes; use Support Center for account cases.",
        zh: "变更看新闻室；账户个案走客服中心。",
      },
    },
  ],
  trustTitle: {
    en: "Signals that reinforce platform credibility",
    zh: "强化平台可信度的信号",
  },
  trustItems: [
    {
      title: {
        en: "Linked authority cluster",
        zh: "可互链的权威专页群",
      },
      body: {
        en: "About connects to security, fairness, privacy, AML/KYC education, and support standards.",
        zh: "关于我们连接安全、公平、隐私、AML/KYC 教育与客服标准。",
      },
    },
    {
      title: {
        en: "Partner disclosure on Providers",
        zh: "供应商页披露合作伙伴",
      },
      body: {
        en: "Players can see supported game providers and integration partners before they play.",
        zh: "开玩前可在供应商页看到支持的游戏供应商与对接合作伙伴。",
      },
    },
    {
      title: {
        en: "Bilingual onboarding paths",
        zh: "双语开户路径",
      },
      body: {
        en: "English and Chinese journeys share the same official destinations and rules.",
        zh: "中英旅程指向同一套官方目的地与规则。",
      },
    },
    {
      title: {
        en: "Newsroom accountability",
        zh: "新闻室可追责",
      },
      body: {
        en: "Platform changes are published where players can find them later.",
        zh: "平台变更发布在玩家事后仍找得到的位置。",
      },
    },
    {
      title: {
        en: "Support desk hygiene",
        zh: "客服台席卫生",
      },
      body: {
        en: "Official channels never ask for passwords; preparation guidance is published upfront.",
        zh: "官方通道从不索要密码；准备资料的指引事先公开。",
      },
    },
    {
      title: {
        en: "Adult-only brand stance",
        zh: "仅限成年的品牌立场",
      },
      body: {
        en: "Age restriction is stated across onboarding and responsible-play hubs.",
        zh: "年龄限制贯穿开户与负责任博彩专页。",
      },
    },
  ],
  faqTitle: {
    en: "About TPOWER — common questions",
    zh: "关于 TPOWER线上博彩 — 常见问题",
  },
  faqs: [
    {
      question: {
        en: "What is TPOWER as a platform brand?",
        zh: "TPOWER线上博彩 作为平台品牌指什么？",
      },
      answer: {
        en: "TPOWER is the official Malaysia-focused gaming platform brand covering games, payments, VIP, download guidance, newsroom updates, and support under one identity. Start at the homepage, then use Games, Providers, and Support Center for next steps.",
        zh: "TPOWER线上博彩 是面向马来西亚的官方平台品牌，在同一身份下覆盖游戏、支付、VIP、下载指引、新闻更新与客服。请从官网首页开始，再进入游戏大厅、供应商与客服中心。",
      },
    },
    {
      question: {
        en: "Does TPOWER own the game studios?",
        zh: "TPOWER 是否拥有这些游戏工作室？",
      },
      answer: {
        en: "No. Titles come from official gaming partners and platform integration partners — supported game providers whose games we integrate. See Providers for disclosure; we do not claim studio ownership.",
        zh: "不拥有。作品来自官方游戏合作伙伴与平台对接合作伙伴——即我们对接支持的游戏供应商。披露见供应商页；我们不声称拥有工作室。",
      },
    },
    {
      question: {
        en: "Why does the About page emphasise Malaysia?",
        zh: "关于我们为何强调马来西亚？",
      },
      answer: {
        en: "Payment familiarity, evening mobile usage, and bilingual support are treated as core product requirements. The website and journeys are designed around those patterns rather than generic global copy.",
        zh: "本地支付习惯、晚间手机使用与双语支持被当作核心产品要求。网站与旅程按这些模式设计，而不是套用泛全球文案。",
      },
    },
    {
      question: {
        en: "How do I confirm I am on the official TPOWER site?",
        zh: "如何确认自己在 TPOWER 官网？",
      },
      answer: {
        en: "Bookmark this domain, use Register/Login only here, follow Download guidance for APK/app installs, and open support only via the Support Center. Avoid renamed mirrors and remote-control requests.",
        zh: "请收藏本域名，只在此注册/登录，按下载指引安装 APP/APK，并只通过客服中心联系支持。避开改名镜像与远程控制要求。",
      },
    },
    {
      question: {
        en: "Where should I read about games and partners?",
        zh: "游戏与合作伙伴应去哪里了解？",
      },
      answer: {
        en: "Use the Games lobby for discovery and Providers for partner and studio context. Category pages explain entertainment styles; individual titles remain subject to in-product rules.",
        zh: "用游戏大厅发现内容，用供应商页了解合作伙伴与厂商背景。分类页说明玩法风格；具体规则以产品内展示为准。",
      },
    },
    {
      question: {
        en: "Does About replace legal or policy pages?",
        zh: "关于我们能否替代法律或政策页？",
      },
      answer: {
        en: "No. About explains platform identity and partnership framing. Binding terms, privacy notices, and detailed controls live on their dedicated pages and in-product disclosures.",
        zh: "不能。本页说明平台身份与合作表述。具约束力的条款、隐私告知与详细控制工具，以专页及产品内披露为准。",
      },
    },
    {
      question: {
        en: "How does TPOWER talk about responsible play on this page?",
        zh: "本页如何谈及负责任娱乐？",
      },
      answer: {
        en: "We state an adult-only stance and point to Responsible Gaming for limits, reminders, timeouts, and exclusion pathways. Support can help apply controls through official channels without asking for passwords.",
        zh: "我们表明仅限成年，并指向负责任博彩专页了解限额、提醒、冷静期与排除路径。需要协助时可通过官方客服启用控制，过程中不会索要密码。",
      },
    },
    {
      question: {
        en: "What should I open after reading About?",
        zh: "读完关于我们下一步看什么？",
      },
      answer: {
        en: "Compare Why Choose TPOWER, skim Security and Fair Gaming, then continue to Register, Games, Download, or Contact depending on your goal.",
        zh: "可对照「为什么选择TPOWER」，浏览平台安全与公平游戏，再按目标前往注册、游戏大厅、下载或客服。",
      },
    },
  ],
  relatedTitle: {
    en: "Continue exploring official TPOWER pages",
    zh: "继续浏览 TPOWER线上博彩 官方页面",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/why-choose-tpower",
      label: { en: "Why Choose TPOWER", zh: "为什么选择TPOWER" },
    },
    {
      href: "/security",
      label: { en: "Platform Security", zh: "平台安全" },
    },
    {
      href: "/customer-commitment",
      label: { en: "Customer Commitment", zh: "客户承诺" },
    },
    {
      href: "/editorial-policy",
      label: { en: "Editorial Policy", zh: "编辑政策" },
    },
  ]),
  ctaTitle: {
    en: "Meet the official TPOWER platform",
    zh: "进入 TPOWER线上博彩 官方平台",
  },
  ctaDescription: {
    en: "Register as an adult player, download via the official app path, or ask Support Center a Malaysia-focused question.",
    zh: "以成年玩家身份注册、按官方路径下载 APP，或向客服中心提出马来西亚场景相关问题。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
