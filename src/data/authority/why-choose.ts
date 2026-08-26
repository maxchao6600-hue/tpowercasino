import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authorityWhyChoose: AuthorityPageContent = {
  id: "why-choose",
  path: "/why-choose-tpower",
  schemaType: "WebPage",
  atmosphere: "about",
  metaTitle: {
    en: "Why Choose TPOWER Malaysia | Platform, Partners, Payments & Support",
    zh: "为什么选择TPOWER｜TPOWER线上博彩平台、合作伙伴、支付与客服",
  },
  metaDescription: {
    en: "Why choose TPOWER in Malaysia: one platform, official gaming partners, clear payments, VIP, promotions, support, security, responsible play, and official APK download.",
    zh: "为什么选择TPOWER线上博彩：统一平台、官方游戏合作伙伴、清楚支付、VIP、优惠、客服、安全、负责任博彩与官方 APK 下载。",
  },
  heroTitle: {
    en: "Why Choose TPOWER",
    zh: "为什么选择 TPOWER线上博彩",
  },
  heroSubtitle: {
    en: "Platform, partners, payments, VIP, and support you can inspect — not unverifiable ranking theatre.",
    zh: "可检查的平台、合作伙伴、支付、VIP 与客服——而不是无法核实的排名表演。",
  },
  introduction: {
    en: `Choosing an online platform is less about slogans and more about friction. Can you fund without guessing? Do partners and studios stay disclosed? Is VIP readable? Is the app path official? Will support answer in a language you use?

TPOWER differentiates on inspectability. [[/games|Games]] organises entertainment; [[/providers|Providers]] names official gaming partners and supported game providers; [[/payment-methods|payment methods]] document rails Malaysia players recognise; [[/vip|VIP]] describes progression without rumour-only tiers.

Mobile installs stay boring on purpose. [[/download|Download]] and [[/apk|APK]] steer adults toward official builds. Support and education sit beside conversion via [[/contact|Support Center]], [[/faq|FAQ]], and [[/blog|Knowledge Center]]. Offers keep conditions near benefits on [[/promotions|Promotions]].

Compare this page with [[/about|About TPOWER]] for entity identity, then open [[/security|Platform Security]] and [[/responsible-gaming|Responsible Gaming]] for trust depth. The differentiator is fewer surprises between what we publish and what you encounter after [[/register|Register]].
`,
    zh: `选平台关键不在口号，而在摩擦：入金要不要猜？合作伙伴与厂商是否披露？VIP 好不好读？APP 路径是否官方？客服用不用你的语言？

TPOWER线上博彩 的差异化在于可检查。[[/games|游戏大厅]] 组织内容；[[/providers|游戏供应商]] 点名官方游戏合作伙伴与支持的供应商；[[/payment-methods|支付方式]] 写明大马玩家认得的通道；[[/vip|VIP]] 说明进阶，而不靠传闻解码层级。

手机安装故意保持无聊。[[/download|APP下载]] 与 [[/apk|APK]] 引导成年玩家走官方包。客服与教育与转化并列：[[/contact|客服中心]]、[[/faq|常见问题]]、[[/blog|知识中心]]。[[/promotions|优惠专区]] 把条件放在利益旁边。

请对照 [[/about|关于TPOWER]] 了解实体身份，再用 [[/security|平台安全]] 与 [[/responsible-gaming|负责任博彩]] 检验信任深度。差异化不是更大声的营销，而是公开说法与 [[/register|注册]] 之后的体验少意外。
`,
  },
  stats: [
    {
      value: { en: "0", zh: "0" },
      label: {
        en: "Tolerance for fake ranking theatre",
        zh: "对虚假排名表演零容忍",
      },
    },
    {
      value: { en: "2", zh: "2" },
      label: {
        en: "Primary support languages",
        zh: "主要客服语言",
      },
    },
    {
      value: { en: "VIP", zh: "VIP" },
      label: {
        en: "Documented tier pathways",
        zh: "成文层级路径",
      },
    },
    {
      value: { en: "APK", zh: "APK" },
      label: {
        en: "Official mobile install focus",
        zh: "官方手机安装导向",
      },
    },
  ],
  featuresTitle: {
    en: "Differentiators adults actually compare",
    zh: "成年玩家真正会比较的差异点",
  },
  features: [
    {
      icon: "check",
      title: {
        en: "Readable cashier expectations",
        zh: "可读的收银台预期",
      },
      body: {
        en: "Payment pages and in-product states aim to reduce “where did my deposit go?” ambiguity.",
        zh: "支付页与产品内状态尽量减少「钱去哪了」的模糊地带。",
      },
    },
    {
      icon: "users",
      title: {
        en: "Partners disclosed, not owned",
        zh: "合作伙伴可查、非所有权",
      },
      body: {
        en: "Official gaming partners and platform integration partners appear on Providers as partnerships.",
        zh: "官方游戏合作伙伴与平台对接合作伙伴以合作关系出现在供应商页。",
      },
    },
    {
      icon: "badge",
      title: {
        en: "VIP without mystery cults",
        zh: "VIP 不做神秘社群",
      },
      body: {
        en: "Tier language lives on the VIP hub so progression is not rumour-driven.",
        zh: "层级说明放在 VIP 专页，进阶不靠传闻驱动。",
      },
    },
    {
      icon: "zap",
      title: {
        en: "Official APK and app paths",
        zh: "官方 APK 与 APP 路径",
      },
      body: {
        en: "Download and APK guidance keep installs verifiable and away from mirrored packages.",
        zh: "下载与 APK 指引让安装可核对，远离镜像包装。",
      },
    },
    {
      icon: "eye",
      title: {
        en: "Conditions next to offers",
        zh: "条件紧贴优惠",
      },
      body: {
        en: "Promotion copy keeps claim rules nearby instead of hiding them three taps away.",
        zh: "优惠文案把领取规则放在旁边，而不是藏在三次点击之外。",
      },
    },
    {
      icon: "shield",
      title: {
        en: "Trust hubs before hype",
        zh: "信任专页先于炒作",
      },
      body: {
        en: "Security, responsible tools, and bilingual support are linked as seriously as the lobby.",
        zh: "安全、负责任工具与双语客服的链接权重，不亚于大厅入口。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Platform",
        zh: "平台",
      },
      body: {
        en: `One official platform means web, app, cashier, and help share the same brand vocabulary. Adults should not chase three names across ads, chats, and the lobby.

Start discovery in [[/games|Games]], fund through documented rails, and keep account actions on official URLs. Entity context lives on [[/about|About TPOWER]] so partnership and product claims stay connected.

If a tipster offers a shortcut that skips the published hubs, treat that as a failed differentiator test — not a feature.
`,
        zh: `统一官方平台意味着网页、APP、收银台与协助共用同一品牌词汇。成年玩家不该在广告、聊天与大厅之间追逐三个名字。

从 [[/games|游戏大厅]] 发现内容，按成文通道入金，账户操作留在官方网址。实体语境在 [[/about|关于TPOWER]]，让合作与产品说法保持连接。

若跟单者提供跳过公开专页的捷径，请当作失败的差异化测试——不是功能。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TPOWER unified official platform",
        zh: "TPOWER 统一官方平台",
      },
      reverse: false,
    },
    {
      title: {
        en: "Providers",
        zh: "游戏供应商",
      },
      body: {
        en: `Supported game providers and official gaming partners are disclosed on [[/providers|Providers]]. Platform integration partners supply titles we host for adult play — we describe partnerships and integrations, not studio ownership or invented awards.

Cross-check lobby titles in [[/games|Games]] against provider pages so you know who builds what before you stake. Mechanic questions should stay answerable from published partner context.

Affiliate captions that invent licenses or “exclusive ownership” of a studio are not TPOWER differentiators — leave that conversation.
`,
        zh: `支持的游戏供应商与官方游戏合作伙伴在 [[/providers|游戏供应商]] 披露。平台对接合作伙伴提供我们供成年玩家使用的作品——我们描述合作与对接，不声称拥有工作室，也不编造奖项。

在 [[/games|游戏大厅]] 发现的标题，请对照供应商页，弄清谁制作什么再下注意。机制问题应从公开合作背景可回答。

联盟文案若编造牌照或「独家拥有」某工作室，那不是 TPOWER 差异化——请离开对话。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "TPOWER providers and gaming partners",
        zh: "TPOWER 供应商与游戏合作伙伴",
      },
      reverse: true,
    },
    {
      title: {
        en: "Payments",
        zh: "支付方式",
      },
      body: {
        en: `For many players, the first stress test is funding — not the hero banner. [[/payment-methods|Payment methods]] document Malaysia-oriented rails and expect in-product statuses to be actionable.

If a third party offers a “faster unofficial rail,” treat it as a risk signal. Withdrawals follow the same clarity culture: identifiers for reconciliation, never passwords. See [[/aml-kyc|AML & KYC]] when matching expectations matter.

Phishing often impersonates cashier urgency. Prefer documented paths on [[/security|Platform Security]] over panic links.
`,
        zh: `对许多玩家，第一场压力测试是入金，不是英雄区横幅。[[/payment-methods|支付方式]] 说明面向马来西亚的通道，并要求产品内状态可据以行动。

若第三方推销「更快的非官方通道」，请当作风险信号。提现同样要清楚：对账用识别信息，从不要密码。涉及匹配预期时见 [[/aml-kyc|AML与KYC]]。

钓鱼常伪装成收银台紧迫感。请优先 [[/security|平台安全]] 上的成文路径，而不是恐慌链接。
`,
      },
      imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
      imageAlt: {
        en: "Malaysia payment clarity on TPOWER",
        zh: "TPOWER 马来西亚支付清楚度",
      },
      reverse: false,
    },
    {
      title: {
        en: "VIP",
        zh: "VIP",
      },
      body: {
        en: `VIP programmes fail when rules live only in host chat history. Read [[/vip|VIP]] so tier logic is clear before you rely on host conversations. Hosts still help with service; published orientation prevents mystery rules.

Quiet players who never join tipster groups should still understand progression from the VIP hub. Fog rewards loud intermediaries; clarity rewards readers.

VIP continuity should match the same brand on web and app — another reason to keep installs on official [[/download|Download]] paths.
`,
        zh: `当 VIP 规则只活在接待聊天记录里，俱乐部就失败了。先读 [[/vip|VIP]] 弄清层级逻辑，再依赖接待对话。接待仍提供服务；公开导向避免神秘规则。

从不加入跟单群的安静玩家，仍应从 VIP 专页理解进阶。迷雾奖励大声中间人；清楚奖励会阅读的玩家。

VIP 连贯应在网页与 APP 上认出同一品牌——这也是安装只走官方 [[/download|下载]] 的原因之一。
`,
      },
      imageSrc: "/images/promotions/tpower-vip-rewards.webp",
      imageAlt: {
        en: "TPOWER VIP documented pathways",
        zh: "TPOWER VIP 成文路径",
      },
      reverse: true,
    },
    {
      title: {
        en: "Promotions",
        zh: "优惠",
      },
      body: {
        en: `Serious platforms keep claim conditions next to headline benefits. [[/promotions|Promotions]] is the source of truth over social captions. When captions conflict with the offer page, the offer page wins.

Inspect promotions with the same seriousness as payments. Conditions next to benefits are how adults avoid bonus disputes — not a killjoy detail.

A promotion claimed on mobile should match the same rules shown on the offer page. Continuity across surfaces is the differentiator versus noisy urgency machines.
`,
        zh: `认真平台把领取条件放在利益标题旁边。[[/promotions|优惠专区]] 是相对社交文案的真相来源。文案与优惠页冲突时，以优惠页为准。

用与支付同样认真的态度检查优惠。利益旁的条件是成年人避免优惠争议的方式——不是扫兴细节。

手机领取的优惠应与优惠页规则一致。跨表面连贯，才是相对嘈杂紧迫感机器的差异化。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "TPOWER promotions with clear conditions",
        zh: "TPOWER 条件清楚的优惠",
      },
      reverse: false,
    },
    {
      title: {
        en: "Support",
        zh: "客服支持",
      },
      body: {
        en: `A differentiator only holds if players can recover when something goes wrong. [[/contact|Support Center]] provides human help; [[/faq|FAQ]] covers repeated questions; [[/blog|Knowledge Center]] covers walkthroughs.

Official agents ask for identifiers, never account secrets. Remote-control theatre pitched as speed is a risk signal. Response standards sit on [[/customer-commitment|Customer Commitment]].

Bilingual Malaysia journeys describe the same cashier vocabulary in English and Chinese — ask agents to point at the on-screen label you both can see.
`,
        zh: `差异化只有在出问题时玩家仍能恢复，才站得住。[[/contact|客服中心]] 提供人工协助；[[/faq|常见问题]] 覆盖重复提问；[[/blog|知识中心]] 提供步骤。

官方人员只要识别信息，从不要账户机密。被吹成速度的远程控制表演是风险信号。响应标准见 [[/customer-commitment|客户承诺]]。

马来西亚双语旅程用同一套收银台词汇说明问题——请客服指向你们双方都能看到的屏幕标签。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "TPOWER bilingual official support",
        zh: "TPOWER 双语官方客服",
      },
      reverse: true,
    },
    {
      title: {
        en: "Security",
        zh: "平台安全",
      },
      body: {
        en: `Security differentiators are operational: stay on official URLs, recognise fake cashiers, and keep session hygiene. Open [[/security|Platform Security]] before you trust panic payment links from strangers.

Cross-check fairness language on [[/fair-gaming|Fair Gaming]] and partner context on [[/providers|Providers]] when studio claims matter. Screenshots from unofficial chats are not evidence.

Choosing TPOWER includes choosing boring security habits — they reduce malware tickets and phishing leverage over a year of play.
`,
        zh: `安全差异化是可操作的：留在官方网址、识别假收银台、保持会话卫生。在相信陌生人发来的恐慌支付链接前，先打开 [[/security|平台安全]]。

涉及厂商说法时，交叉核对 [[/fair-gaming|公平游戏]] 与 [[/providers|供应商]]。非官方聊天里的截图不是证据。

选择 TPOWER线上博彩 也包括选择无聊的安全习惯——长期能减少恶意软件工单与钓鱼杠杆。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "TPOWER platform security habits",
        zh: "TPOWER 平台安全习惯",
      },
      reverse: false,
    },
    {
      title: {
        en: "Responsible Gaming",
        zh: "负责任博彩",
      },
      body: {
        en: `Adult-only access and play controls are part of why the platform deserves long-term attention. [[/responsible-gaming|Responsible Gaming]] documents limits, reminders, timeouts, and exclusion pathways.

Support can help apply controls through official channels without harvesting passwords. Entertainment includes variance — education may explain categories and controls; it must not invent certainty.

If a competitor buries responsible tools or treats them as optional decoration, that is already a comparison score against TPOWER.
`,
        zh: `仅限成年与娱乐控制，是平台是否值得长期关注的一部分。[[/responsible-gaming|负责任博彩]] 写明限额、提醒、冷静期与排除路径。

客服可通过官方通道协助启用控制，且不收割密码。娱乐包含波动——教育可解释品类与控制，不能发明确定性。

若对手把负责任工具藏起来或当可选装饰，这已经是相对 TPOWER线上博彩 的比较分。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TPOWER responsible gaming controls",
        zh: "TPOWER 负责任博彩控制",
      },
      reverse: true,
    },
    {
      title: {
        en: "APK Download",
        zh: "APK 下载",
      },
      body: {
        en: `Unofficial packages are a common compromise vector. Keep installs boring: follow [[/download|Download]] for general guidance and [[/apk|APK]] for Android packaging notes.

Avoid third-party file hosts, Telegram “helpers,” and random drive links. Excitement around sideloaded packages is usually unpaid risk. Session hygiene after install still follows [[/security|Platform Security]].

Mobile-first evening sessions only stay trustworthy when the package source is verifiable. That inspectability is a core Why Choose TPOWER criterion.
`,
        zh: `非官方包装是常见被入侵路径。让安装保持无聊：一般指引看 [[/download|下载]]，安卓包装说明看 [[/apk|APK]]。

避开第三方文件站、Telegram「代装」与网盘链接。围绕侧载包装的兴奋，通常是未计酬风险。安装后的会话卫生仍遵循 [[/security|平台安全]]。

晚间手机优先的体验，只有在包装来源可核时时才可信。这种可检查性，是「为什么选择TPOWER」的核心标准之一。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "TPOWER official APK download path",
        zh: "TPOWER 官方 APK 下载路径",
      },
      reverse: false,
    },
  ],
  timelineTitle: {
    en: "How to pressure-test Why Choose TPOWER",
    zh: "如何压力测试「为什么选择TPOWER」",
  },
  timeline: [
    {
      title: {
        en: "List your comparison criteria",
        zh: "列出你的比较标准",
      },
      body: {
        en: "Platform, partners, payments, VIP, promotions, support, security, responsible play, APK trust.",
        zh: "平台、合作伙伴、支付、VIP、优惠、客服、安全、负责任博彩、APK 可信度。",
      },
    },
    {
      title: {
        en: "Open the matching TPOWER hubs",
        zh: "打开对应的 TPOWER 专页",
      },
      body: {
        en: "Games, Providers, Payments, VIP, Promotions, Support Center, Security, Responsible Gaming, Download/APK.",
        zh: "游戏、供应商、支付、VIP、优惠、客服中心、安全、负责任博彩、下载/APK。",
      },
    },
    {
      title: {
        en: "Reject unofficial shortcuts",
        zh: "拒绝非官方捷径",
      },
      body: {
        en: "Ignore mirrored APKs, panic payment links, and agents asking for remote control.",
        zh: "忽略镜像 APK、恐慌支付链接，以及要求远程控制的代理。",
      },
    },
    {
      title: {
        en: "Validate with one official action",
        zh: "用一次官方行动验证",
      },
      body: {
        en: "Register, explore Games, or contact support with a precise, password-free case.",
        zh: "注册、浏览游戏，或在不提供密码的前提下向客服提精确个案。",
      },
    },
  ],
  trustTitle: {
    en: "Proof points behind the differentiators",
    zh: "支撑差异化的证明点",
  },
  trustItems: [
    {
      title: {
        en: "Payment methods documented",
        zh: "支付方式成文可查",
      },
      body: {
        en: "Malaysia-oriented rails are explained on a dedicated hub, not only in ads.",
        zh: "面向大马的通道在专页说明，而不是只出现在广告里。",
      },
    },
    {
      title: {
        en: "Partners listed on Providers",
        zh: "合作伙伴列于供应商页",
      },
      body: {
        en: "Official gaming partners and supported providers are disclosed as integrations.",
        zh: "官方游戏合作伙伴与支持的供应商以对接合作方式披露。",
      },
    },
    {
      title: {
        en: "VIP hub before host chat",
        zh: "先有 VIP 专页再有接待聊天",
      },
      body: {
        en: "Tier orientation is published so progression is not rumour-only.",
        zh: "层级导向公开，进阶不只靠传闻。",
      },
    },
    {
      title: {
        en: "Official download and APK guidance",
        zh: "官方下载与 APK 指引",
      },
      body: {
        en: "Install paths steer players away from casual APK mirrors.",
        zh: "安装路径引导玩家远离随意 APK 镜像。",
      },
    },
    {
      title: {
        en: "Promotion conditions nearby",
        zh: "优惠条件就近展示",
      },
      body: {
        en: "Offer pages keep claim rules adjacent to benefits.",
        zh: "优惠页把领取规则放在利益旁边。",
      },
    },
    {
      title: {
        en: "Support refuses password harvest",
        zh: "客服拒绝收割密码",
      },
      body: {
        en: "Official agents ask for identifiers, never account secrets.",
        zh: "官方人员只要识别信息，从不要账户机密。",
      },
    },
  ],
  faqTitle: {
    en: "Why Choose TPOWER — FAQ",
    zh: "为什么选择TPOWER — 常见问题",
  },
  faqs: [
    {
      question: {
        en: "What makes TPOWER different from flashy competitors?",
        zh: "TPOWER线上博彩 与花哨竞争对手有何不同？",
      },
      answer: {
        en: "We compete on inspectable platform hubs: payments, disclosed partners, documented VIP, official APK/app installs, bilingual support, and linked security/responsible-play pages — not unverifiable ranking theatre.",
        zh: "我们拼的是可检查的平台专页：支付、披露的合作伙伴、成文 VIP、官方 APK/APP 安装、双语客服，以及可互链的安全/负责任专页——而不是无法核实的排名表演。",
      },
    },
    {
      question: {
        en: "How should I compare payment experience?",
        zh: "应如何比较支付体验？",
      },
      answer: {
        en: "Check whether rails are documented, statuses are actionable, and support can reconcile cases without asking for passwords. Start with the payment methods hub and Security guidance on phishing cashiers.",
        zh: "看通道是否成文、状态是否可据以行动、客服能否在不索要密码的情况下对账。从支付方式专页与安全页的钓鱼收银台指引开始。",
      },
    },
    {
      question: {
        en: "Does TPOWER own its game studios?",
        zh: "TPOWER 是否拥有游戏工作室？",
      },
      answer: {
        en: "No. Games come from official gaming partners and platform integration partners — supported game providers. Providers discloses those relationships without inventing ownership.",
        zh: "不拥有。游戏来自官方游戏合作伙伴与平台对接合作伙伴——即支持的游戏供应商。供应商页披露这些关系，不编造所有权。",
      },
    },
    {
      question: {
        en: "Is VIP worth reading before I join?",
        zh: "加入前有必要读 VIP 说明吗？",
      },
      answer: {
        en: "Yes. Read the VIP hub so tier logic is clear before you rely on host conversations. Published orientation should precede host-dependent folklore.",
        zh: "有必要。先读 VIP 专页弄清层级逻辑，再依赖接待对话。公开导向应先于依赖接待的传说。",
      },
    },
    {
      question: {
        en: "Why emphasise official APK/app paths?",
        zh: "为何强调官方 APK/APP 路径？",
      },
      answer: {
        en: "Unofficial packages are a common compromise vector. Download and APK guidance exist to keep installs boring and verifiable.",
        zh: "非官方包装是常见被入侵路径。下载与 APK 指引的目的，是让安装过程无聊且可核对。",
      },
    },
    {
      question: {
        en: "Do promotions hide wagering rules?",
        zh: "优惠会不会藏打码规则？",
      },
      answer: {
        en: "Offer pages are written to keep conditions near benefits. Always treat the promotion page as source of truth over social captions.",
        zh: "优惠页会把条件放在利益附近。请以优惠页为准，而不是社交文案。",
      },
    },
    {
      question: {
        en: "Can I get help in Chinese and English?",
        zh: "能否获得中英协助？",
      },
      answer: {
        en: "Yes. Support and education are designed for bilingual Malaysia journeys describing the same product states.",
        zh: "可以。客服与教育面向马来西亚双语旅程，并用同一套产品状态词汇说明。",
      },
    },
    {
      question: {
        en: "What is the fastest way to validate this page?",
        zh: "验证本页最快的方式是什么？",
      },
      answer: {
        en: "Pick one criterion — platform, partners, payments, VIP, support, or APK — open the matching hub, then complete one official action and see if behaviour matches the copy.",
        zh: "选一个标准——平台、合作伙伴、支付、VIP、客服或 APK——打开对应专页，完成一次官方动作，看行为是否与文案一致。",
      },
    },
  ],
  relatedTitle: {
    en: "Pages that prove the differentiators",
    zh: "用来证明差异化的页面",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/about",
      label: { en: "About TPOWER", zh: "关于TPOWER" },
    },
    {
      href: "/vip",
      label: { en: "VIP Club", zh: "VIP俱乐部" },
    },
    {
      href: "/payment-methods",
      label: { en: "Payment Methods", zh: "支付方式" },
    },
    {
      href: "/customer-commitment",
      label: { en: "Customer Commitment", zh: "客户承诺" },
    },
    {
      href: "/security",
      label: { en: "Platform Security", zh: "平台安全" },
    },
  ]),
  ctaTitle: {
    en: "Choose the clearer official path",
    zh: "选择更清楚的官方路径",
  },
  ctaDescription: {
    en: "Register, review payments and VIP, or download via the official mobile guidance.",
    zh: "立即注册、查看支付与 VIP，或按官方手机指引下载。",
  },
  ctaImage: "/images/cta/tpower-lobby-cta.webp",
};
