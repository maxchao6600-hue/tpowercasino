import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authorityAbout: AuthorityPageContent = {
  id: "about",
  path: "/about",
  schemaType: "AboutPage",
  atmosphere: "about",
  metaTitle: {
    en: "About TPOWER | Official Malaysia Online Platform",
    zh: "关于TPOWER｜TPOWER线上博彩官方平台介绍",
  },
  metaDescription: {
    en: "Company identity, Malaysia product philosophy, and how TPOWER teams coordinate games, payments, VIP, and support under one official brand.",
    zh: "认识 TPOWER线上博彩：公司定位、马来西亚产品哲学，以及游戏、支付、VIP 与客服如何在同一官方品牌下协同运作。",
  },
  heroTitle: {
    en: "About TPOWER",
    zh: "关于 TPOWER线上博彩",
  },
  heroSubtitle: {
    en: "Who we are, why Malaysia sits at the centre of the product, and how teams keep web, app, and support aligned.",
    zh: "我们是谁、为何以马来西亚为核心场景，以及网页、APP 与客服如何保持同一标准。",
  },
  introduction: {
    en: `TPOWER is the official brand behind a Malaysia-focused online entertainment platform. This About page exists so adults evaluating the site can see company identity, product philosophy, and operating habits in one place — before they open the lobby, fund an account, or download the app.

We organise slots, live tables, sports markets, fishing titles, and specialty games under a single product surface. The point is not volume for its own sake. The point is a coherent journey: discover a title on [[/games|Games]], understand the studio on [[/providers|Providers]], fund through documented [[/payment-methods|payment methods]], and resolve questions through [[/contact|Support Center]] without hopping between disconnected brands.

Malaysia is the design centre of gravity. Local payment familiarity, evening mobile sessions, and English/Chinese support are treated as baseline requirements. Product copy, cashier states, and help articles are written for that context rather than adapted as an afterthought.

Company narrative stays factual. We describe what players can do on official URLs, what controls exist for adult play, and which hubs explain security, fairness, and privacy. We do not lean on unverifiable global rankings. Trust comes from matching published language to product behaviour across registration, login, deposits, withdrawals, VIP, and support.

Teams coordinate deliberately. Product, payments, VIP operations, support, and editorial share one brand voice so [[/news|Newsroom]] updates and [[/blog|Knowledge Center]] guides stay aligned with how the cashier and lobby actually behave. When something changes — a payment rail, an app build, a promotion rule — the official site is the place players should check first.

We also treat onboarding as part of identity. A player who lands on About should be able to answer three questions quickly: Is this the official brand? Is it built for Malaysia usage patterns I recognise? Where do I go next without guessing? Those answers should be available without opening a third-party forum. That is why authority pages, product hubs, and support sit in one information architecture instead of isolated campaign microsites.

Long-term trust is operational. Peak-hour lobby stability, readable withdrawal states, calm bilingual agents, and responsible-play controls that remain visible after registration all reinforce the same company story. If any of those surfaces contradict this page, the correct fix is to align product and copy — not to amplify louder slogans.

If you are new here, continue with [[/why-choose-tpower|Why Choose TPOWER]] for differentiators, [[/register|Register]] to open an adult account, or [[/download|Download]] for official app guidance. Policy depth lives on [[/security|Platform Security]], [[/fair-gaming|Fair Gaming]], [[/responsible-gaming|Responsible Gaming]], and related authority pages linked below.

Operational transparency includes saying what we will not do. We will not sell guaranteed wins, we will not ask players to fund through undocumented side channels, and we will not treat responsible-play tools as optional decoration. Those refusals are part of company identity as much as the lobby catalogue.

Partnerships with studios are judged for mobile performance during Malaysia peak hours, rule clarity inside the client, and supportability when a player asks a mechanic question. Provider pages exist so adults can see the supply chain of entertainment before they stake. Affiliate messaging must match official terms rather than invent parallel promises.

Adults evaluating TPOWER should also notice what is missing: fabricated global crowns, pressure to deposit through strangers, and support theatre that demands remote control. Absence of those patterns is part of the company story. When you move from this page into Games, Payments, or Support Center, the same refusal list should still hold.
`,
    zh: `TPOWER线上博彩 是面向马来西亚成年玩家的官方平台品牌。本页集中说明公司定位、产品哲学与协作方式，方便你在进入大厅、入金或下载 APP 前先核对「这是谁、怎么做事」。

我们把老虎机、真人视讯、体育、捕鱼与特色玩法放在同一套产品表面。重点不是堆数量，而是旅程连贯：在 [[/games|游戏大厅]] 发现游戏，在 [[/providers|游戏供应商]] 了解厂商，按 [[/payment-methods|支付方式]] 完成资金操作，有问题走 [[/contact|客服中心]]，而不是在多个互不相关的品牌之间跳转。

马来西亚是设计重心。本地支付习惯、晚间手机使用、中英双语支持，都按基础能力建设，而不是事后补翻译。文案、收银台状态与帮助文章都按这个场景书写。

公司表述保持事实导向：说明玩家能在官方网址完成什么、成年娱乐有哪些控制工具，以及安全、公平、隐私分别在哪些专页展开。我们不依赖无法核实的全球排名。信任来自公开说法与产品行为一致——注册、登录、存款、提现、VIP 与客服同一套标准。

团队刻意协同。产品、支付、VIP、客服与编辑共用同一品牌语气，让 [[/news|新闻室]] 与 [[/blog|知识中心]] 的内容和大厅、收银台真实行为对齐。支付通道、APP 版本或优惠规则有变更时，请优先查官网。

我们也把开户体验视为身份的一部分。读完「关于我们」，玩家应能快速回答三件事：这是不是官方品牌？是不是按我认得的大马使用习惯来建？下一步去哪不必瞎猜？这些答案不该依赖第三方论坛。因此权威页、产品页与客服放在同一信息架构里，而不是割裂的活动小站。

长期信任靠运营兑现。高峰大厅稳定、提现状态可读、冷静的双语客服，以及注册后仍可见的负责任控制，都在强化同一公司叙事。若任何表面与本页矛盾，正确做法是对齐产品与文案，而不是把口号喊得更大声。

新访客可继续阅读 [[/why-choose-tpower|为什么选择TPOWER]]，或前往 [[/register|注册]]、[[/download|APP下载]]。政策深度见 [[/security|平台安全]]、[[/fair-gaming|公平游戏]]、[[/responsible-gaming|负责任博彩]] 及其他权威专页。

运营透明也包括说清楚我们不会做什么：不贩卖保证赢、不要求玩家走未成文侧边入金、不把负责任工具当可选装饰。这些拒绝与大厅目录一样属于公司身份。

与厂商合作会看马来西亚高峰手机表现、客户端规则是否清楚，以及机制问题是否可支持。供应商页让成年玩家在下注意前看清娱乐供给链。联盟话术应匹配官方条款，而不是另造平行承诺。

评估 TPOWER线上博彩 时也应注意缺少什么：编造的全球第一、逼你向陌生人入金、以及要求远程控制的客服表演。缺少这些模式，本身就是公司故事的一部分。从本页进入游戏、支付或客服中心时，同一份拒绝清单仍应成立。
`,
  },
  stats: [
    {
      value: { en: "1", zh: "1" },
      label: { en: "Official brand surface", zh: "统一官方品牌入口" },
    },
    {
      value: { en: "MY", zh: "MY" },
      label: { en: "Product design focus", zh: "产品设计聚焦大马" },
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
    en: "What shapes the TPOWER company story",
    zh: "塑造 TPOWER 公司叙事的要素",
  },
  features: [
    {
      icon: "building",
      title: {
        en: "Single official identity",
        zh: "单一官方身份",
      },
      body: {
        en: "Web, app, cashier, and support present as one brand — not a patchwork of white-label skins.",
        zh: "网页、APP、收银台与客服呈现同一品牌，而不是拼凑式白标皮肤。",
      },
    },
    {
      icon: "globe",
      title: {
        en: "Malaysia usage patterns first",
        zh: "优先马来西亚使用习惯",
      },
      body: {
        en: "Local rails, evening mobile peaks, and bilingual help drive roadmap priority.",
        zh: "本地支付、晚间手机高峰与双语协助，决定路线图优先级。",
      },
    },
    {
      icon: "users",
      title: {
        en: "Cross-team coordination",
        zh: "跨团队协同",
      },
      body: {
        en: "Product, payments, VIP, support, and editorial share escalation paths and brand voice.",
        zh: "产品、支付、VIP、客服与编辑共用升级路径与品牌语气。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Published authority hubs",
        zh: "成文权威专页",
      },
      body: {
        en: "Security, fairness, privacy, AML/KYC education, and responsible play sit in a linked cluster.",
        zh: "安全、公平、隐私、AML/KYC 教育与负责任博彩形成可互跳的专页集群。",
      },
    },
    {
      icon: "zap",
      title: {
        en: "Lobby-to-cashier continuity",
        zh: "大厅到收银台连贯",
      },
      body: {
        en: "Game discovery, funding, and VIP pathways are designed as one journey, not separate microsites.",
        zh: "找游戏、入金与 VIP 路径按同一旅程设计，而不是互不相关的小站。",
      },
    },
    {
      icon: "heart",
      title: {
        en: "Adult entertainment with controls",
        zh: "可控制的成年娱乐",
      },
      body: {
        en: "Age restriction and responsible tools are part of brand identity, not fine print only.",
        zh: "年龄限制与负责任工具属于品牌身份，而不只是小字条款。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Company identity on the official platform",
        zh: "官方平台上的公司身份",
      },
      body: {
        en: `TPOWER presents itself as an official destination for adult online entertainment in Malaysia. That identity has practical consequences: one homepage, one registration flow, one download guidance path, and one support desk players should treat as authoritative.

Company identity is visible in navigation and in how pages cross-link. From About you can reach product hubs such as [[/games|Games]] and [[/vip|VIP]], operational hubs such as [[/payment-methods|Payments]] and [[/download|Download]], and trust hubs such as [[/security|Security]] and [[/customer-commitment|Customer Commitment]]. The site is structured so brand understanding and product action stay connected.

We describe TPOWER as a platform operator coordinating licensed studio content, local payment expectations, and bilingual service — not as a generic “casino template” with interchangeable claims. Studio partnerships are curated and explained on provider pages so players know who builds the titles they open.

Identity also means refusing unofficial shortcuts. Renamed mirrors, cold outreach asking for remote access, and “agent-only” deposit instructions outside the cashier create account risk. Official identity is the combination of this website’s URLs, the documented app path, and the Support Center — not a message on a random chat app.

When players ask “is this the real TPOWER?”, the answer should be checkable: bookmark the official site, use [[/login|Login]] and [[/register|Register]] on that domain, and open support only through published channels. Company identity is strongest when it is boringly consistent.

Identity also shows up in how we refuse fragmented agent brands. If a name, logo, or cashier instruction does not match the official site, treat it as non-authoritative. Keeping one bookmark and one support entry point reduces phishing surface area over a year of play.

Company identity is also a retention habit. Players who return months later should still recognise the same URLs, the same download guidance, and the same support refusal to harvest passwords. Longevity of identity is how phishing campaigns lose leverage.
`,
        zh: `TPOWER线上博彩 以马来西亚成年线上娱乐的官方目的地自居。这个身份带来具体后果：一个首页、一套注册流程、一条下载指引、一个应被视为权威的客服台。

公司身份体现在导航与互链。从「关于我们」可到达 [[/games|游戏大厅]]、[[/vip|VIP]] 等产品页，[[/payment-methods|支付方式]]、[[/download|下载]] 等操作页，以及 [[/security|平台安全]]、[[/customer-commitment|客户承诺]] 等信任页。站点结构把「认识品牌」与「采取行动」连在一起。

我们把自己定位为协调厂商内容、本地支付预期与双语服务的平台运营方，而不是口号可随意替换的模板站。厂商合作经过筛选，并在供应商页说明，让玩家知道打开的游戏由谁制作。

身份也意味着拒绝非官方捷径。改名镜像、要求远程控制的陌生联系、收银台外的「仅限代理」入金指示，都会带来账户风险。官方身份=本站网址 + 成文 APP 路径 + 客服中心，而不是某个聊天软件里的一句自称。

当有人问「这是不是真的 TPOWER？」答案应可核对：收藏官网、在该域名使用 [[/login|登录]] 与 [[/register|注册]]、只走公开客服通道。公司身份最有力的时候，是它稳定到近乎无聊。

身份也体现在拒绝碎片化代理品牌。若名称、Logo 或收银台指示与官网不符，请视为无权威。长期只用一个收藏入口与一个客服入口，能缩小钓鱼面。

公司身份也是一种留存习惯。数月后回来的玩家仍应认出同一网址、同一下载指引，以及客服同样拒绝收割密码。身份的长期稳定，是钓鱼活动失去杠杆的方式。
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
        en: "Why Malaysia sits at the centre of the product",
        zh: "为何产品以马来西亚为中心",
      },
      body: {
        en: `Malaysia relevance is not a slogan on this page — it is a product constraint. Payment familiarity shapes the cashier. Evening mobile usage shapes performance priorities. Bilingual support shapes how help articles and live agents explain the same issue in English and Chinese without contradicting each other.

Players in Malaysia often compare platforms on practical criteria: Can I recognise the deposit method? Does the app install path look official? Will support understand a cashier screenshot in my language? TPOWER designs for those questions. Category hubs — slots, live casino, sports, fishing — explain entertainment styles before funding decisions, and promotions keep claim conditions near the offer copy.

Peak-hour behaviour matters. When many players are on mobile after work, lobby load, table stability, and readable error states become trust signals. Product teams treat those moments as first-class scenarios rather than edge cases.

Local context also informs responsible messaging. Adult-only access, deposit discipline, and clear help paths are written for the same audience that uses DuitNow-style rails and e-wallets in daily life. See [[/responsible-gaming|Responsible Gaming]] for control tools and [[/payment-methods|payment methods]] for funding orientation.

Choosing Malaysia as the centre does not mean ignoring quality elsewhere in the stack. It means studio curation, VIP pathways, and newsroom updates are judged by how well they serve players who live and bank here. That focus is why About TPOWER leads with local product philosophy rather than abstract global claims.

Designing for Malaysia also means respecting bilingual households and mixed-language support cases. An agent and a player should point at the same on-screen label in English or Chinese. Shared vocabulary is a product requirement, not a translation afterthought.

Malaysia-centred design shows up in cashier vocabulary, evening performance priorities, and bilingual help articles that do not contradict each other. If a Chinese guide and an English guide describe different deposit states for the same screen, that is a defect — not a localisation flourish.
`,
        zh: `「马来西亚相关」在本页不是口号，而是产品约束。支付习惯塑造收银台；晚间手机使用塑造性能优先级；双语客服要求同一问题的中英解释不能互相打架。

大马玩家常按实用标准比较平台：存款方式认不认得？APP 安装路径像不像官方？客服能不能看懂我语言里的收银台截图？TPOWER线上博彩 按这些问题设计。老虎机、真人、体育、捕鱼等分类页先讲清玩法再谈入金；优惠文案旁会附领取条件。

高峰行为很重要。许多人下班后用手机时，大厅加载、桌台稳定与可读错误状态，本身就是信任信号。产品团队把这些时刻当一等场景，而不是边角案例。

本地语境也影响负责任表述。仅限成年、存款自律与清楚求助路径，面向的就是日常使用本地转账与电子钱包的同一批人。控制工具见 [[/responsible-gaming|负责任博彩]]，资金导向见 [[/payment-methods|支付方式]]。

以马来西亚为中心，不是忽视技术栈其他部分的质量，而是用「是否服务好在这里生活与银行往来的玩家」来评判厂商筛选、VIP 路径与新闻更新。因此「关于我们」先讲本地产品哲学，而不是抽象全球口号。

为大马设计也意味着尊重双语家庭与混合语言客服。中英对话都应能指向同一屏幕标签。共用词汇是产品要求，不是翻译补丁。

以马来西亚为中心的设计，体现在收银台词汇、晚间性能优先级，以及互不打架的双语帮助文章。若中英攻略对同一屏幕描述不同存款状态，那是缺陷——不是本地化花样。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "Malaysia-centred TPOWER product design",
        zh: "以马来西亚为中心的产品设计",
      },
      reverse: true,
    },
    {
      title: {
        en: "Product philosophy: clarity over theatre",
        zh: "产品哲学：清楚优于表演",
      },
      body: {
        en: `Our product philosophy is simple to state and hard to fake: clarity over theatre. Registration should say what information is required and why. The cashier should show states a player can act on. Promotions should place conditions next to the headline benefit. VIP should explain tiers without forcing players to reverse-engineer rules from screenshots in group chats.

Clarity shows up in information architecture. Authority pages explain trust topics; product hubs execute entertainment and funding; [[/faq|FAQ]] and the blog cover how-to detail without replacing live product prompts. Players should always know the next official URL to open.

We avoid exaggerated promises about outcomes. Entertainment products involve variance. Fair-gaming and provider pages explain how rules and studio standards work; they do not invent guaranteed RTP theatre. Security pages explain TLS, session hygiene, and phishing patterns; they do not claim magical invulnerability.

Philosophy also covers tone. Support language stays calm. Newsroom updates prefer precision over hype. Affiliate and partner messaging must match official terms on [[/promotions|Promotions]] and related policy pages. When product behaviour and published language diverge, the fix is to align them — not to paper over the gap with louder marketing.

Adults comparing platforms can use this philosophy as a checklist: Are journeys readable on web and app? Are policies linked from onboarding? Can I reach a human through [[/contact|official support]] without sharing a password? Those questions matter more than decorative badges.

Clarity philosophy extends to outcomes. Entertainment includes variance. Education may explain categories and controls; it must not invent certainty. When product and marketing disagree, product truth wins and marketing is corrected.

Product philosophy also governs what Newsroom and Knowledge Center are allowed to claim. Editorial independence from hype is not a separate hobby; it is how About TPOWER stays true after marketing seasons change.
`,
        zh: `产品哲学说起来简单、做起来难：清楚优于表演。注册应说明要什么资料、为什么要；收银台应显示玩家能据此行动的状态；优惠应把条件放在利益标题旁边；VIP 应讲清层级，而不是逼玩家从群聊截图反推规则。

清楚体现在信息架构。权威页解释信任议题；产品页承接娱乐与资金；[[/faq|常见问题]] 与博客覆盖操作细节，但不替代产品内实时提示。玩家应随时知道下一步该打开哪个官方网址。

我们避免夸大结果承诺。娱乐产品存在波动。公平游戏与供应商页说明规则与厂商标准如何运作，不编造保证型 RTP 表演。安全页说明传输加密、会话卫生与钓鱼模式，不宣称神奇无敌。

哲学也包括语气。客服措辞冷静；新闻更新宁可精确也不炒作；联盟话术必须符合 [[/promotions|优惠专区]] 与相关政策。当产品行为与公开表述不一致，正确做法是对齐两者，而不是用更大声的营销遮盖。

成年玩家比较平台时，可用这套哲学当清单：网页与 APP 旅程好不好读？开户路径有没有链到政策？能否在不交出密码的前提下通过 [[/contact|官方客服]] 找到人？这些问题比装饰性徽章更重要。

清楚哲学延伸到结果表述。娱乐包含波动。教育可解释品类与控制，不能发明确定性。产品与营销不一致时，以产品为准并修正营销。

产品哲学也约束新闻室与知识中心能声称什么。相对炒作的编辑独立不是业余爱好，而是「关于TPOWER」在营销季节更替后仍能成立的原因。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "TPOWER product philosophy clarity",
        zh: "TPOWER 产品哲学：清楚",
      },
      reverse: false,
    },
    {
      title: {
        en: "How teams coordinate behind the brand",
        zh: "品牌背后的团队如何协作",
      },
      body: {
        en: `Players experience one brand; internally several disciplines keep that brand coherent. Product owns lobby and journey structure. Payments owns cashier rails and status clarity. VIP operations own tier communication and escalation etiquette. Support owns channel hours, case handling, and security hygiene at the desk. Editorial owns newsroom accuracy and guide usefulness.

Coordination means shared vocabulary. A deposit state called one thing in the app should not be called something else in a help article. A promotion rule published on the offer page should not be contradicted by a social caption. When incidents occur, communication prefers clarity over speed-theatre: accurate timestamps, affected surfaces, and next official update location.

Security reviews sit beside feature launches. Responsible gaming tools remain visible rather than buried. Affiliate messaging is checked against official terms. These habits sound administrative, but they are how company identity survives contact with real player traffic.

If you want to see the coordination from the outside, follow a thread across pages: start here, open [[/why-choose-tpower|Why Choose TPOWER]], skim [[/security|Platform Security]], then test the journey through [[/games|Games]] and [[/contact|Support Center]]. The brand should feel like one organisation answering you — because that is how the teams are asked to work.

For ongoing changes, watch [[/news|Newsroom]]. For how-to depth, use [[/blog|Knowledge Center]]. For account-specific issues, bring clear details to official support and never share passwords or one-time codes outside those channels.

From the outside, coordination looks like continuity from About to VIP to Support Center. From the inside, it looks like shared launch checklists, shared escalation trees, and a shared refusal to improvise policy in chat.

Team coordination includes incident humility. When something breaks, clarity beats performative speed. Players should learn what happened, what is affected, and where the next official update will appear — usually Newsroom or Support Center — without chasing rumours.
`,
        zh: `玩家感受到的是一个品牌；内部则由多个职能共同维持一致。产品负责大厅与旅程结构；支付负责通道与状态可读；VIP 负责层级沟通与升级礼仪；客服负责通道时段、个案处理与台席安全卫生；编辑负责新闻准确性与攻略实用性。

协同意味着共用词汇。APP 里一种存款状态，帮助文章不能换个叫法；优惠页公布的规则，社交文案不能唱反调。发生事故时，沟通宁可清楚也不做表演式加速：准确时间、影响范围、下一则官方更新放在哪里。

安全评审与功能上线并行；负责任工具保持可见；联盟话术对照官方条款核对。这些习惯听起来像行政，却是公司身份在真实流量下仍站得住的原因。

若想从外部观察协同，可串一条路径：本页 → [[/why-choose-tpower|为什么选择TPOWER]] → [[/security|平台安全]] → 再实测 [[/games|游戏大厅]] 与 [[/contact|客服中心]]。品牌应像同一个组织在回答你——因为团队被要求这样协作。

持续变更看 [[/news|新闻室]]；操作深度看 [[/blog|知识中心]]；账户个案请带清楚资料走官方客服，切勿在非官方渠道提供密码或一次性验证码。

从外部看，协同是从关于我们到 VIP 再到客服中心的连贯。从内部看，是共用上线清单、升级树，以及拒绝在聊天里即兴发明政策。

团队协同包括事故时的谦逊。出问题时，清楚胜过表演式加速。玩家应知道发生了什么、影响什么、下一则官方更新在哪里——通常是新闻室或客服中心——而不必追谣言。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "TPOWER team coordination",
        zh: "TPOWER 团队协作",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "A practical path to understand TPOWER",
    zh: "认识 TPOWER 的实用路径",
  },
  timeline: [
    {
      title: {
        en: "Read company identity and philosophy",
        zh: "先读公司身份与哲学",
      },
      body: {
        en: "Use this About page to see who we are and how Malaysia shapes the product.",
        zh: "用本页了解我们是谁，以及马来西亚如何塑造产品。",
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
    en: "Signals that reinforce company credibility",
    zh: "强化公司可信度的信号",
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
        en: "Studio disclosure on Providers",
        zh: "供应商页披露厂商",
      },
      body: {
        en: "Players can see which studios sit behind lobby titles before they play.",
        zh: "开玩前可在供应商页看到大厅游戏背后的厂商。",
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
        en: "What is TPOWER as a company brand?",
        zh: "TPOWER 作为公司品牌指什么？",
      },
      answer: {
        en: "TPOWER is the official Malaysia-focused platform brand covering games, payments, VIP, download guidance, newsroom updates, and support under one identity. Start at the homepage, then use Games, Providers, and Support Center for next steps. That identity should feel identical whether you arrive from web search, an app session, or a support thread.",
        zh: "TPOWER线上博彩 是面向马来西亚的官方平台品牌，在同一身份下覆盖游戏、支付、VIP、下载指引、新闻更新与客服。请从官网首页开始，再进入游戏大厅、供应商与客服中心。无论你从搜索、APP 会话还是客服线程进入，这种身份感受应一致。",
      },
    },
    {
      question: {
        en: "Why does the About page emphasise Malaysia?",
        zh: "关于我们为何强调马来西亚？",
      },
      answer: {
        en: "Payment familiarity, evening mobile usage, and bilingual support are treated as core product requirements. The website and journeys are designed around those patterns rather than generic global copy. Eligibility details remain those shown during registration and related policy pages.",
        zh: "本地支付习惯、晚间手机使用与双语支持被当作核心产品要求。网站与旅程按这些模式设计，而不是套用泛全球文案。资格细节仍以注册及政策页显示为准。",
      },
    },
    {
      question: {
        en: "How do I confirm I am on the official TPOWER site?",
        zh: "如何确认自己在 TPOWER 官网？",
      },
      answer: {
        en: "Bookmark this domain, use Register/Login only here, follow Download guidance for APK/app installs, and open support only via the Support Center. Avoid renamed mirrors and remote-control requests. If anything feels off, stop and re-enter from a typed or bookmarked official URL.",
        zh: "请收藏本域名，只在此注册/登录，按下载指引安装 APP/APK，并只通过客服中心联系支持。避开改名镜像与远程控制要求。若感觉不对，停下并用手输或收藏的官方网址重新进入。",
      },
    },
    {
      question: {
        en: "How do product, support, and editorial stay aligned?",
        zh: "产品、客服与编辑如何保持一致？",
      },
      answer: {
        en: "Teams share brand voice, escalation paths, and vocabulary for cashier states and promotion rules. News and guides are expected to match live product behaviour; gaps are fixed by alignment, not louder claims. When gaps appear, the fix is alignment across teams rather than louder claims.",
        zh: "各团队共用品牌语气、升级路径，以及收银台状态与优惠规则的词汇。新闻与攻略应对齐线上产品行为；有落差时靠对齐修复，而不是加大宣传。出现落差时，应靠跨团队对齐修复，而不是加大宣传。",
      },
    },
    {
      question: {
        en: "Where should I read about games and studios?",
        zh: "游戏与厂商应去哪里了解？",
      },
      answer: {
        en: "Use the Games lobby for discovery and Providers for studio context. Category pages explain entertainment styles; individual titles remain subject to in-product rules. In-product rules remain primary for any single title you open.",
        zh: "用游戏大厅发现内容，用供应商页了解厂商。分类页说明玩法风格；具体规则以产品内展示为准。你打开的任何单款游戏，仍以产品内规则为准。",
      },
    },
    {
      question: {
        en: "Does About replace legal or policy pages?",
        zh: "关于我们能否替代法律或政策页？",
      },
      answer: {
        en: "No. About explains company identity and philosophy. Binding terms, privacy notices, and detailed controls live on their dedicated pages and in-product disclosures. Always prefer the dedicated legal or policy URL when decisions depend on binding text.",
        zh: "不能。本页说明公司身份与哲学。具约束力的条款、隐私告知与详细控制工具，以专页及产品内披露为准。若决定依赖有约束力文本，请优先打开对应法律或政策网址。",
      },
    },
    {
      question: {
        en: "How does TPOWER talk about responsible play on this page?",
        zh: "本页如何谈及负责任娱乐？",
      },
      answer: {
        en: "We state an adult-only stance and point to Responsible Gaming for limits, reminders, timeouts, and exclusion pathways. Support can help apply controls through official channels. Support can help apply controls; they will not ask for passwords while doing so.",
        zh: "我们表明仅限成年，并指向负责任博彩专页了解限额、提醒、冷静期与排除路径。需要协助时可通过官方客服启用控制工具。客服可协助启用控制，过程中不会索要密码。",
      },
    },
    {
      question: {
        en: "What should I open after reading About?",
        zh: "读完关于我们下一步看什么？",
      },
      answer: {
        en: "Compare Why Choose TPOWER, skim Security and Fair Gaming, then continue to Register, Games, Download, or Contact depending on your goal. Choose the next hub based on your goal: trust, play, fund, or contact.",
        zh: "可对照「为什么选择TPOWER」，浏览平台安全与公平游戏，再按目标前往注册、游戏大厅、下载或客服。按目标选择下一站：信任、开玩、入金或联系客服。",
      },
    },
  ],
  relatedTitle: {
    en: "Continue exploring official TPOWER pages",
    zh: "继续浏览 TPOWER 官方页面",
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
    en: "Register as an adult player, download the official app path, or ask Support Center a Malaysia-focused question.",
    zh: "以成年玩家身份注册、按官方路径下载 APP，或向客服中心提出马来西亚场景相关问题。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
