import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authorityEditorial: AuthorityPageContent = {
  id: "editorial",
  path: "/editorial-policy",
  schemaType: "WebPage",
  atmosphere: "security",
  metaTitle: {
    en: "Editorial Policy | Accuracy, Corrections & Independence",
    zh: "编辑政策｜准确性、更正与独立性",
  },
  metaDescription: {
    en: "How the TPOWER newsroom approaches accuracy, corrections, source discipline, and independence from promo hype.",
    zh: "TPOWER线上博彩 新闻室如何处理准确性、更正、来源纪律，以及相对优惠炒作的独立性。",
  },
  heroTitle: {
    en: "Editorial Policy",
    zh: "TPOWER线上博彩 编辑政策",
  },
  heroSubtitle: {
    en: "News and guides should inform — not invent outcomes or launder hype as fact.",
    zh: "新闻与攻略应提供信息——不编造结果，也不把炒作洗成事实。",
  },
  introduction: {
    en: `Editorial Policy explains how TPOWER’s [[/news|Newsroom]] and [[/blog|Knowledge Center]] aim to write for Malaysia adults: accurate enough to act on, clear about sources, willing to correct, and independent enough that promotion calendars do not quietly rewrite facts.

Players use articles to learn deposit steps, understand product changes, and compare entertainment categories. When editorial copy exaggerates fairness, invents rankings, or hides conditions, it becomes a trust liability. This policy exists to prevent that failure mode.

Independence from promo hype does not mean the newsroom ignores promotions. It means offer pages on [[/promotions|Promotions]] remain the source of truth for conditions, while articles may explain how to claim without inventing extra benefits.

Corrections are a feature. If a guide is wrong, updating it with a visible note beats silent edits that leave screenshots circulating forever. Source discipline prefers primary product surfaces — cashiers, official download paths, provider pages — over anonymous chat lore.

Read this policy beside [[/fair-gaming|Fair Gaming]], [[/security|Platform Security]], and [[/about|About TPOWER]] for how editorial coordinates with product and support without becoming a marketing ventriloquist.

Editorial Policy is how TPOWER keeps educational content from becoming a second, sloppier product. Guides that drift from the cashier create support debt. News that invents urgency creates phishing-like fear even when no attacker is involved.

Writers and editors prefer links to living hubs over hard-coded figures that rot. Readers should treat offer pages and in-product UI as higher authority when conflicts appear — and report those conflicts so we can correct.

Readers can help enforce Editorial Policy. When a guide drifts from the live cashier, report it. When a news post invents urgency, ask for the product change it references. Audience scrutiny is part of how accuracy survives.

Editorial trust compounds slowly and breaks quickly. One accurate deposit guide can prevent dozens of tickets. One invented ranking claim can stain every future article. That asymmetry is why Editorial Policy privileges corrections, primary sources, and independence from promo hype over clever headlines.

Writers should write for action: after reading, can an adult complete a step on an official URL without improvising? Editors should reject copy that requires a tipster to decode. Readers should report drift between articles and live product so corrections can land before screenshots fossilise.

Chinese and English pieces may differ in rhythm and SEO intent while sharing operational facts. That is deliberate bilingual architecture, not sloppy translation. What must not differ is the refusal list: no guaranteed RTP theatre, no password instructions, no publishing of private KYC files, no silent contradiction of Promotions conditions.

Read Newsroom and Knowledge Center with an editorial eye. Ask: what can I do after this article? Which official hub does it link? Does it invent benefits the Promotions page does not grant? Does it speak about fairness with restraint? Does it tell me to avoid passwords and unofficial APKs? Those questions are how readers enforce Editorial Policy without being editors.

When you find drift, report it with URL and corrected reference. You are not complaining; you are participating in accuracy. Support Center can route editorial corrections without demanding secrets. Visible corrections then protect the next reader who arrives from an old screenshot.

Independent Chinese and English writing should still agree on operational facts. If they disagree about a cashier state, that is a defect to fix — not a cultural flourish. Bilingual architecture means independent voice, shared truth.

Revisit Editorial Policy when an article makes you want to act immediately. Ask whether the action lives on an official hub, whether benefits match Promotions, whether fairness language stayed restrained, and whether any line asks you to trust an unofficial APK or password instruction. If the article fails those checks, report the drift via Support Center before you fund on emotion. Accuracy is a reader–newsroom partnership, not a spectator sport.

Keep Editorial Policy beside Newsroom and Knowledge Center so every article can be checked against the same accuracy reflex before you act on emotion.

Accuracy compounds when Malaysia readers help report drift between articles and live product hubs on TPOWER.

Keep Editorial Policy beside Newsroom so every urge to act can be checked against accuracy before emotion funds a session.

Check one article against Promotions and Fair Gaming before you let urgency rewrite your funding plan.

A final reading habit: before acting on any article, check the linked official hub and the Promotions or Fair Gaming page it implies. If the article cannot survive that check, report it — do not fund on it.

Link living hubs, reject invented rankings, correct in public — that is newsroom trust.
`,
    zh: `「编辑政策」说明 TPOWER线上博彩 的 [[/news|新闻室]] 与 [[/blog|知识中心]] 如何为马来西亚成年读者写作：准确到可据以行动、来源清楚、愿意更正，并足够独立，不让优惠档期悄悄改写事实。

玩家用文章学习存款步骤、理解产品变更、比较娱乐品类。当编辑文案夸大公平、编造排名或藏条件，就会变成信任负债。本政策用来防止这种失败。

相对优惠炒作保持独立，不等于新闻室无视优惠。意思是 [[/promotions|优惠专区]] 的优惠页仍是条件的事实来源；文章可说明如何领取，但不发明额外利益。

更正是功能。若攻略有误，用可见说明更新，胜过静默修改却让截图永远流传。来源纪律优先产品主表面——收银台、官方下载路径、供应商页——而不是匿名聊天传说。

请搭配 [[/fair-gaming|公平游戏]]、[[/security|平台安全]]、[[/about|关于TPOWER]] 阅读，了解编辑如何与产品、客服协同，而不沦为营销的口技表演。

编辑政策用来避免教育内容变成第二套更潦草的产品。偏离收银台的攻略会制造客服债务；编造紧迫感的新闻即使没有攻击者，也会制造类似钓鱼的恐惧。

写作者与编辑优先链接到持续维护的专页，而不是写死会腐烂的数字。读者在冲突时应以优惠页与产品内 UI 为更高权威——并回报冲突以便我们更正。

读者可以帮助执行编辑政策。当攻略偏离线上收银台，请回报；当新闻发明紧迫感，请要求它引用的产品变更。读者审视，是准确性得以存活的方式之一。

编辑信任累积很慢、破裂很快。一篇准确存款攻略能少掉几十张工单；一句编造的排名说法能玷污以后每篇文章。这种不对称，正是编辑政策把更正、一手来源、相对优惠炒作独立，放在聪明标题之上的原因。

写作者应为行动而写：读完后，成年人能否在官方网址完成步骤而不即兴发挥？编辑应拒绝需要跟单者才能解码的文案。读者应回报文章与线上产品的落差，好让更正在截图化石化之前落地。

中英稿件可在节奏与 SEO 意图上不同，同时共享运营事实。这是刻意的双语架构，不是潦草翻译。不能不同的是拒绝清单：不做保证 RTP 表演、不做密码指示、不发布私密 KYC 文件、不静默与优惠条件打架。

用编辑的眼睛读新闻室与知识中心。问：读完我能做什么？它链到哪个官方专页？它是否发明优惠页未授予的利益？谈公平是否克制？是否告诉我避开密码与非官方 APK？这些问题让读者在不当编辑的情况下执行编辑政策。

发现落差时，带网址与正确参照回报。你不是在抱怨；你是在参与准确性。客服中心可转交编辑更正且不索要机密。可见更正随后保护拿着旧截图到来的下一位读者。

独立的中英写作仍应在运营事实上一致。若对收银台状态说法不一致，那是要修的缺陷——不是文化花样。双语架构意味着独立声音、共享真相。

当一篇文章让你想立刻行动时，重访编辑政策。问行动是否落在官方专页、利益是否匹配优惠专区、公平语言是否克制、是否有任何句子要你相信非官方 APK 或密码指示。若文章未通过这些检查，先通过客服中心回报落差，再情绪入金。准确性是读者与新闻室的伙伴关系，不是旁观运动。

把编辑政策与新闻室、知识中心放在一起，好让每篇文章在你情绪行动前都能用同一准确性反射核对。

当大马读者协助回报文章与线上产品专页的落差时，准确性会在 TPOWER线上博彩 上累积。

把编辑政策放在新闻室旁边，好让每次行动冲动都能在情绪入金前先过准确性检查。

在让紧迫感改写入金计划前，先用优惠专区与公平游戏核对一篇文章。

最后一个阅读习惯：按任何文章行动前，核对它链接的官方专页，以及它暗示的优惠或公平游戏页。若文章经不起核对，请回报——不要据此入金。

链接活专页、拒绝编造排名、公开更正——那才是新闻室信任。
`,
  },
  stats: [
    {
      value: { en: "FIX", zh: "更正" },
      label: {
        en: "Corrections welcomed",
        zh: "欢迎更正",
      },
    },
    {
      value: { en: "SRC", zh: "来源" },
      label: {
        en: "Primary sources preferred",
        zh: "优先一手来源",
      },
    },
    {
      value: { en: "SEP", zh: "分离" },
      label: {
        en: "Promo pages own conditions",
        zh: "条件以优惠页为准",
      },
    },
    {
      value: { en: "NO#1", zh: "拒第一" },
      label: {
        en: "No invented ranking theatre",
        zh: "不编造排名表演",
      },
    },
  ],
  featuresTitle: {
    en: "Newsroom standards that shape every article",
    zh: "塑造每篇文章的新闻室标准",
  },
  features: [
    {
      icon: "check",
      title: {
        en: "Actionable accuracy",
        zh: "可行动的准确性",
      },
      body: {
        en: "Steps should match what players see on official web and app journeys.",
        zh: "步骤应匹配玩家在官方网页与 APP 旅程中所见。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Visible corrections",
        zh: "可见更正",
      },
      body: {
        en: "Material errors get updated with clear notes rather than silent rewrites only.",
        zh: "重大错误以清楚说明更新，而不是只靠静默改写。",
      },
    },
    {
      icon: "eye",
      title: {
        en: "Hype independence",
        zh: "相对炒作独立",
      },
      body: {
        en: "Articles must not invent benefits that offer pages do not grant.",
        zh: "文章不得发明优惠页未授予的利益。",
      },
    },
    {
      icon: "globe",
      title: {
        en: "Source hierarchy",
        zh: "来源层级",
      },
      body: {
        en: "Product UI, official hubs, and named studios outrank anonymous lore.",
        zh: "产品界面、官方专页与具名厂商高于匿名传说。",
      },
    },
    {
      icon: "scale",
      title: {
        en: "Fairness language restraint",
        zh: "公平语言克制",
      },
      body: {
        en: "No guaranteed RTP session promises dressed up as journalism.",
        zh: "不做伪装成新闻的保证型 RTP 场次承诺。",
      },
    },
    {
      icon: "users",
      title: {
        en: "Bilingual intent, not literal clones",
        zh: "双语意图，而非逐句克隆",
      },
      body: {
        en: "English and Chinese pieces serve local search intent independently when both exist.",
        zh: "若同时存在中英稿件，各自服务本地搜索意图，而非逐句克隆。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Accuracy standards for news and guides",
        zh: "新闻与攻略的准确性标准",
      },
      body: {
        en: `Accuracy means a player following a guide should not hit a dead end that the article denied existed. Login, deposit, download, and VIP explainers must be checked against live official surfaces: [[/login|Login]], [[/payment-methods|Payments]], [[/download|Download]], [[/vip|VIP]].

Numbers require care. Support hours, minimums, and promotion figures change. When a figure is time-sensitive, articles should point to the live page rather than hard-coding values that rot. Newsroom updates about performance or lobby changes should timestamp what shifted.

Screenshots need labelling when UI may change. Outdated images without notes create support load and player frustration. Editors should prefer evergreen structure with links to hubs that stay maintained.

Accuracy also forbids inventing studio certifications or “government seals” the Providers page does not support. If we cannot source it, we do not publish it as fact.

Accuracy includes naming uncertainty. If a rail is rolling out gradually, say so. If a UI screenshot may change, label it. False precision is still inaccuracy when it misleads action.

Writers should prefer reversible claims: link to Payments rather than hard-coding a rail list that will rot. Editors should reject irreversible hype that cannot be walked back cleanly.

Ask of every article: what action can I take on an official URL afterward? If the answer is only “feel hyped,” the piece failed Editorial Policy in spirit.

If an article only creates hype without an official next URL, it failed the action test.

Whenever an article creates urgency, check Promotions and the live product hub it implies before you fund on emotion.
`,
        zh: `准确意味着玩家按攻略操作时，不应撞上文章否认存在的死胡同。登录、存款、下载、VIP 说明必须对照线上官方表面核对：[[/login|登录]]、[[/payment-methods|支付方式]]、[[/download|下载]]、[[/vip|VIP]]。

数字需要谨慎。客服时段、最低额、优惠数字会变。时效性强的数字应指向线上页面，而不是写死会腐烂的值。关于性能或大厅变更的新闻应标注什么变了。

UI 可能变化时，截图需要标注。无说明的过期图像会制造客服负担与玩家挫败。编辑应偏好常青结构，并链接到持续维护的专页。

准确性也禁止编造供应商页并不支持的厂商认证或「政府印章」。找不到来源，就不作为事实发布。

准确性包括标明不确定。若某通道逐步上线，就如实说；若 UI 截图可能变化，就标注。虚假精确在误导行动时，仍是不准确。

写作者应偏好可逆说法：链到支付方式，而不是写死会腐烂的通道清单。编辑应拒绝无法干净撤回的不可逆炒作。

对每篇文章问：之后我能在官方网址采取什么行动？若答案只是「感到兴奋」，该文在精神上未通过编辑政策。

若文章只制造兴奋却没有官方下一步网址，就未通过行动测试。

每当文章制造紧迫感，先核对优惠专区与它暗示的线上产品专页，再情绪入金。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "Editorial accuracy standards",
        zh: "编辑准确性标准",
      },
      reverse: false,
    },
    {
      title: {
        en: "Corrections culture and reader reports",
        zh: "更正文化与读者回报",
      },
      body: {
        en: `Corrections are how newsrooms stay adult. When a material error appears — wrong step order, obsolete rail name, misstated condition — update the article and note what changed when the error could mislead action.

Readers can report issues via [[/contact|Support Center]]. Provide the article URL, the incorrect line, and the correct official reference if known. You will not be asked for a password to submit an editorial correction.

Silent edits may still happen for typos; material substance needs visibility. Leaving viral wrong screenshots unchallenged is how misinformation outlives the fix.

Support and editorial coordinate when a wrong guide generates ticket spikes. Fixing the page is part of [[/customer-commitment|Customer Commitment]] in spirit: reduce repeat harm, not only close one ticket.

Corrections culture needs reader partnership. A precise report with URL and corrected reference is more useful than a vague “this is wrong” comment. Support routes those reports without demanding passwords.

Corrections should be discoverable. A note at the top of an updated guide helps readers who arrive from old screenshots months later.

Report drift with URL and corrected reference. You are participating in accuracy, not nagging. Visible corrections protect readers who arrive from old screenshots.

Precise drift reports with corrected references are how readers participate in accuracy.
`,
        zh: `更正是新闻室保持成熟的方式。出现重大错误时——步骤顺序错误、过时通道名、条件说错——请更新文章；若错误可能误导行动，注明改了什么。

读者可通过 [[/contact|客服中心]] 回报问题。提供文章网址、错误句子，以及已知的正确官方参照。提交编辑更正不会被要求提供密码。

错别字仍可静默修改；实质内容需要可见性。放任错误截图继续病毒传播，是误信息活得比修复更久的原因。

当错误攻略引发工单高峰时，客服与编辑应协同。修页面在精神上属于 [[/customer-commitment|客户承诺]]：减少重复伤害，而不只是关掉一张工单。

更正文化需要读者协作。带网址与正确参照的精确回报，比一句含糊的「这是错的」更有用。客服转交这些回报时不会索要密码。

更正应可被发现。在更新攻略顶部加说明，能帮助数月后仍拿着旧截图到来的读者。

带网址与正确参照回报落差。你是在参与准确性，不是在唠叨。可见更正保护拿着旧截图到来的读者。

带正确参照的精确落差回报，是读者参与准确性的方式。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Corrections and reader reports",
        zh: "更正与读者回报",
      },
      reverse: true,
    },
    {
      title: {
        en: "Independence from promo hype",
        zh: "相对优惠炒作保持独立",
      },
      body: {
        en: `Promotion teams create offers; editorial explains the platform. Those roles collaborate, but editorial must not launder hype. If an offer pays 50% with conditions, a guide must not imply 100% with a wink. The [[/promotions|Promotions]] page owns conditions.

Independence also blocks fake urgency journalism: “last minute secret RTP boost this hour only,” unless a real, dated newsroom product change exists. Fair Gaming already rejects guaranteed return theatre; editorial will not smuggle it back as a tip.

Sponsored framing, if any, must be obvious. Ordinary news and guides should read as information, not disguised affiliate bait. Ranking claims need evidence or they stay unpublished.

When VIP or payment stories appear, they should teach orientation — pointing to [[/vip|VIP]] and Payments — not invent private host promises.

Independence from hype also protects VIP and payment storytelling. Service promise language must match Customer Commitment and Support Center reality. Editorial will not invent response-time guarantees the desk did not publish.

Independence from promo hype includes calendar discipline. Not every offer needs a breathless article. Sometimes the Promotions page is enough.

Source hierarchy keeps scams out of the knowledge graph and keeps Newsroom useful. Primary official hubs beat anonymous lore. Named studio materials via Providers beat tipster screenshots. Careful general-concept explainers beat insider toggle myths. Stolen documents, private support transcripts, and KYC selfies are never sources — they are harms that violate Privacy & Data Protection and this Editorial Policy together. When readers enforce that hierarchy by reporting drift, accuracy compounds; when they ignore it, screenshots fossilise falsehoods for months.

Not every offer needs a breathless article; Promotions pages can stand alone.
`,
        zh: `优惠团队创造优惠；编辑解释平台。角色协作，但编辑不能洗白炒作。若优惠是附条件的 50%，攻略不能眨眼暗示 100%。条件归属 [[/promotions|优惠专区]] 页面。

独立也挡住假紧迫新闻：「本小时限时秘密 RTP 提升」——除非真有注明日期的新闻室产品变更。公平游戏已拒绝保证回报表演；编辑不会把它当秘籍偷运回来。

若存在赞助表述，必须一目了然。普通新闻与攻略应读起来像信息，而不是伪装的联盟诱饵。排名说法需要证据，否则不发布。

当出现 VIP 或支付故事时，应教导向——指向 [[/vip|VIP]] 与支付——而不是发明私下接待承诺。

相对炒作独立也保护 VIP 与支付叙述。服务承诺语言必须匹配客户承诺与客服中心现实。编辑不会发明台席未公布的响应时间保证。

相对优惠炒作的独立也包括档期纪律。不是每个优惠都需要一篇喘不过气的文章。有时优惠专区页面就够了。

不是每个优惠都需要喘不过气的文章。有时优惠专区页面就够了。档期纪律是相对炒作独立的一部分。

来源层级把骗局挡在知识图谱外，并让新闻室保持有用。一手官方专页胜过匿名传说。经供应商具名的厂商材料胜过跟单截图。谨慎的一般概念解释胜过内线开关迷思。被盗文件、私密客服记录与 KYC 自拍永远不是来源——它们是同时违反隐私与数据保护及本编辑政策的伤害。当读者靠回报落差执行该层级，准确性会累积；当他们忽略时，截图会让谬误化石化数月。

不是每个优惠都需要喘不过气的文章；优惠专区可以独立成立。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "Editorial independence from hype",
        zh: "编辑相对炒作的独立",
      },
      reverse: false,
    },
    {
      title: {
        en: "Sources, privacy, and what we refuse to publish",
        zh: "来源、隐私与我们拒绝发布的内容",
      },
      body: {
        en: `Source hierarchy is simple. Primary: official product UI and TPOWER hubs. Secondary: named studio materials via [[/providers|Providers]]. Tertiary: reputable public explainers of general concepts (for example what RNG means). Rejected: anonymous screenshots claiming insider toggles, stolen ID images, or private support transcripts.

Privacy restraint matters. Editorial will not publish player documents, complaint chat logs, or verification selfies as “proof content.” See [[/privacy-and-data-protection|Privacy & Data Protection]] and the [[/privacy-policy|Privacy Policy]].

We refuse content that instructs underage play, encourages evasion of responsible controls, or teaches phishing. Security explainers may describe patterns at a high level without providing exploit recipes.

Chinese and English pieces, when both exist, are written for their audiences rather than mirrored sentence-by-sentence — consistent with the site’s bilingual SEO architecture — while facts about the product remain aligned.

Source refusal lists exist to keep scams out of the knowledge graph. Insider RTP toggles, stolen documents, and private transcripts are not exclusive scoops. They are hazards we will not amplify.

Source hygiene also protects staff. Publishing private transcripts or KYC images would harm players and violate the privacy stack this newsroom is supposed to respect.

Independent Chinese and English voice still requires shared operational facts. Cashier-state contradictions are defects to fix, not cultural flourish.

Editorial Policy succeeds when readers, writers, and support share one accuracy reflex. Writers link living hubs. Editors reject invented rankings and RTP unlocker tips. Readers report drift with URLs. Support routes corrections without harvesting secrets. Promotions pages keep owning conditions. Fair Gaming keeps owning restraint about outcomes. Privacy keeps personal files out of spectacle. That shared reflex is how Newsroom and Knowledge Center stay useful for Malaysia adults instead of becoming a second, sloppier product.

Independent bilingual voice still requires shared cashier-state facts across languages.
`,
        zh: `来源层级很简单。一手：官方产品界面与 TPOWER 专页。二手：经 [[/providers|供应商]] 具名的厂商材料。三手：解释一般概念的可靠公开资料（例如 RNG 是什么）。拒绝：声称内部开关的匿名截图、被盗证件图，或私密客服记录。

隐私克制很重要。编辑不会把玩家文件、投诉聊天或核验自拍当「证明内容」发布。见 [[/privacy-and-data-protection|隐私与数据保护]] 与 [[/privacy-policy|隐私政策]]。

我们拒绝指导未成年游玩、鼓励逃避负责任控制，或教授钓鱼的内容。安全说明可高层次描述模式，不提供利用配方。

若中英稿件同时存在，会按各自受众撰写而非逐句镜像——符合站点双语 SEO 架构——同时产品事实保持对齐。

拒绝来源清单用来把骗局挡在知识图谱外。内线 RTP 开关、被盗文件、私密记录不是独家猛料，而是我们不会放大的危害。

来源卫生也保护员工。发布私密记录或 KYC 图像会伤害玩家，并违反新闻室应尊重的隐私组合。

独立的中英声音仍要求共享运营事实。收银台状态矛盾是要修的缺陷，不是文化花样。

当读者、写作者与客服共享同一准确性反射时，编辑政策就成功了。写作者链接持续维护的专页。编辑拒绝编造排名与 RTP 解锁秘籍。读者带网址回报落差。客服转交更正且不收割机密。优惠页继续拥有条件。公平游戏继续克制谈结果。隐私继续把个人文件挡在奇观外。这种共享反射，让新闻室与知识中心对大马成年人保持有用，而不是变成第二套更潦草的产品。

独立双语声音仍要求跨语言共享收银台状态事实。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "Editorial sources and refusals",
        zh: "编辑来源与拒绝事项",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "How an article should be produced",
    zh: "一篇文章应如何产出",
  },
  timeline: [
    {
      title: {
        en: "Define the reader job",
        zh: "定义读者任务",
      },
      body: {
        en: "What decision or step should an adult complete after reading?",
        zh: "成年读者读完后应完成什么决定或步骤？",
      },
    },
    {
      title: {
        en: "Verify against official surfaces",
        zh: "对照官方表面核实",
      },
      body: {
        en: "Check live pages, cashiers, download paths, or provider notes.",
        zh: "核对线上页面、收银台、下载路径或供应商说明。",
      },
    },
    {
      title: {
        en: "Separate facts from offers",
        zh: "把事实与优惠分开",
      },
      body: {
        en: "Link Promotions for conditions; do not invent benefits.",
        zh: "条件链到优惠专区；不发明利益。",
      },
    },
    {
      title: {
        en: "Publish ready to correct",
        zh: "带着可更正心态发布",
      },
      body: {
        en: "Monitor feedback; update material errors with visible notes.",
        zh: "关注反馈；对重大错误做可见更新。",
      },
    },
  ],
  trustTitle: {
    en: "Editorial trust markers",
    zh: "编辑信任标记",
  },
  trustItems: [
    {
      title: {
        en: "Newsroom + Knowledge Center scope",
        zh: "新闻室 + 知识中心范围",
      },
      body: {
        en: "Policy covers both timely updates and evergreen guides.",
        zh: "政策同时覆盖时效更新与常青攻略。",
      },
    },
    {
      title: {
        en: "Offer-page supremacy for conditions",
        zh: "条件以优惠页为最高",
      },
      body: {
        en: "Articles explain; promotions pages bind.",
        zh: "文章解释；优惠页约束。",
      },
    },
    {
      title: {
        en: "Correction pathway via support",
        zh: "经客服的更正路径",
      },
      body: {
        en: "Readers can report errors without password theatre.",
        zh: "读者可在不做密码表演的前提下回报错误。",
      },
    },
    {
      title: {
        en: "No guaranteed outcome journalism",
        zh: "不做保证结果式新闻",
      },
      body: {
        en: "Fairness and variance language stays honest.",
        zh: "公平与波动语言保持诚实。",
      },
    },
    {
      title: {
        en: "Privacy-safe storytelling",
        zh: "隐私安全的叙述",
      },
      body: {
        en: "No publishing of KYC images or private transcripts.",
        zh: "不发布 KYC 图像或私密记录。",
      },
    },
    {
      title: {
        en: "Product-aligned bilingual facts",
        zh: "与产品对齐的双语事实",
      },
      body: {
        en: "Independent wording, shared operational truth.",
        zh: "措辞独立，运营事实共享。",
      },
    },
  ],
  faqTitle: {
    en: "Editorial Policy FAQ",
    zh: "编辑政策常见问题",
  },
  faqs: [
    {
      question: {
        en: "What content does this policy cover?",
        zh: "本政策覆盖哪些内容？",
      },
      answer: {
        en: "Newsroom updates and Knowledge Center guides on the official TPOWER site, including bilingual pieces when both exist. Product hubs linked from articles should match what you see live; report drift when they do not.",
        zh: "官网新闻室更新与知识中心攻略，包括同时存在的双语稿件。文章链接的产品专页应与你线上所见一致；不一致时请回报落差。",
      },
    },
    {
      question: {
        en: "Are promotion articles allowed to add extra benefits?",
        zh: "优惠类文章能否增加额外利益？",
      },
      answer: {
        en: "No. Conditions and benefits are owned by the Promotions pages. Articles may explain claiming steps without inventing perks. Claim steps may be editorial; benefit math stays on Promotions as source of truth.",
        zh: "不能。条件与利益归属优惠专区页面。文章可说明领取步骤，但不发明额外好处。领取步骤可以是编辑内容；利益计算仍以优惠专区为事实来源。",
      },
    },
    {
      question: {
        en: "How do I report a mistake in an article?",
        zh: "如何举报文章中的错误？",
      },
      answer: {
        en: "Contact Support Center with the URL, the incorrect statement, and a correct official reference if you have one. Do not send passwords. Precise reports shorten correction cycles for everyone.",
        zh: "联系客服中心并提供网址、错误陈述，以及你掌握的正确官方参照。不要发送密码。精确回报能为所有人缩短更正周期。",
      },
    },
    {
      question: {
        en: "Will you publish “#1 platform” claims without evidence?",
        zh: "没有证据会发布「第一平台」说法吗？",
      },
      answer: {
        en: "No. Invented ranking theatre is rejected. Claims need supportable sourcing or they stay unpublished. Ask for sourcing when a ranking claim appears without evidence in any article or caption.",
        zh: "不会。编造的排名表演会被拒绝。说法需要可支撑来源，否则不发布。若任何文章或文案出现无证据的排名说法，请来源说明。",
      },
    },
    {
      question: {
        en: "Can guides promise RTP unlocks?",
        zh: "攻略能否承诺 RTP 解锁？",
      },
      answer: {
        en: "No. That contradicts Fair Gaming standards and is treated as harmful misinformation. Report unlocker content referencing TPOWER via Support Center and stick to official Download paths only.",
        zh: "不能。这与公平游戏标准相悖，并被视为有害误信息。通过客服中心举报挂着 TPOWER 名义的解锁内容，并只走官方下载路径。",
      },
    },
    {
      question: {
        en: "Do Chinese articles literally translate English ones?",
        zh: "中文文章是否逐句翻译英文？",
      },
      answer: {
        en: "No. When both exist, they are written for independent local intent while keeping product facts aligned. Facts align; sentence rhythm and SEO intent may differ by language on purpose.",
        zh: "不是。若两者都存在，会按独立本地意图撰写，同时保持产品事实对齐。事实对齐；句式节奏与 SEO 意图可因语言而有意不同。",
      },
    },
    {
      question: {
        en: "Will the newsroom publish my KYC documents as a story?",
        zh: "新闻室会把我的 KYC 文件写成故事吗？",
      },
      answer: {
        en: "No. Privacy restraint forbids using player verification files or private support transcripts as content. Privacy restraint is part of editorial ethics, not only something left to legal pages.",
        zh: "不会。隐私克制禁止把玩家核验文件或私密客服记录当作内容。隐私克制是编辑伦理的一部分，不只属于法律页。",
      },
    },
    {
      question: {
        en: "Where should I read product truth if an article conflicts?",
        zh: "若文章与产品冲突，应以何处为准？",
      },
      answer: {
        en: "Prefer live official product pages and hubs. Report the conflict so editorial can correct the article. File a correction report so the article can be fixed for others who arrive later from old screenshots.",
        zh: "以线上官方产品页与专页为准。请回报冲突，以便编辑更正文章。提交更正回报，好让文章为之后拿着旧截图到来的其他读者被修好。",
      },
    },
  ],
  relatedTitle: {
    en: "Reading destinations under this policy",
    zh: "本政策下的阅读目的地",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/news",
      label: { en: "Newsroom", zh: "新闻室" },
    },
    {
      href: "/blog",
      label: { en: "Knowledge Center", zh: "知识中心" },
    },
    {
      href: "/fair-gaming",
      label: { en: "Fair Gaming", zh: "公平游戏" },
    },
    {
      href: "/promotions",
      label: { en: "Promotions", zh: "优惠专区" },
    },
    {
      href: "/about",
      label: { en: "About TPOWER", zh: "关于TPOWER" },
    },
  ]),
  ctaTitle: {
    en: "Read updates written to be corrected if wrong",
    zh: "阅读「写错了就会更正」的更新",
  },
  ctaDescription: {
    en: "Visit the Newsroom or Knowledge Center, or tell Support Center if a guide conflicts with the live product.",
    zh: "前往新闻室或知识中心；若攻略与线上产品冲突，请告知客服中心。",
  },
  ctaImage: "/images/cta/tpower-lobby-cta.webp",
};
