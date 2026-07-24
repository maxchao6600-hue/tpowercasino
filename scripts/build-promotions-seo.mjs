/**
 * Generates src/data/promotions-seo.ts with long-form promotions pillar content.
 * Run: node scripts/build-promotions-seo.mjs
 */
import fs from "node:fs";
import path from "node:path";

const L = (en, zh) => ({ en, zh });

const blocks = [
  {
    id: "what-are",
    title: L(
      "What Are TPOWER Promotions?",
      "什么是 TPOWER 优惠？",
    ),
    paragraphs: [
      L(
        "TPOWER Promotions are the structured reward pathways published for Malaysia players on the official TPOWER website. Instead of treating offers as decorative banners, this hub explains how a TPOWER Bonus works, which player journeys it supports, and which pages to open next—Register, Login, Download, Games, Providers, VIP, Responsible Gaming, News, and Blog.",
        "TPOWER 优惠是官方 TPOWER 网站为马来西亚玩家公布的结构化奖励路径。本中心不把优惠当作装饰横幅，而是说明 TPOWER 红利如何运作、支持哪些玩家旅程，以及下一步应打开哪些页面——注册、登录、下载、游戏、供应商、VIP、负责任博彩、新闻与博客。",
      ),
      L(
        "When people search for TPOWER Promotions Malaysia, they usually want three answers quickly: what is currently available, what terms matter before opting in, and how to claim safely through official channels. This page is built as the topical authority landing page for those intents. It connects evergreen education with live offer cards so the keyword TPOWER Promotions maps to useful navigation rather than thin brochure copy.",
        "当人们搜索 TPOWER 马来西亚优惠时，通常希望快速得到三个答案：当前有哪些可用、选择加入前哪些条款重要，以及如何通过官方渠道安全领取。本页即作为这些意图的主题权威落地页。它将常青教育与实时优惠卡片连接起来，使关键词 TPOWER Promotions 映射到有用导航，而不是单薄宣传文案。",
      ),
      L(
        "A TPOWER Bonus can take several shapes: a TPOWER Welcome Bonus for first-time funding, reload boosts for returning players, TPOWER Cashback for net-loss recovery windows, TPOWER VIP Promotions for tiered discretion, and seasonal boosts tied to published calendars. Each category below links into detail pages where overview, eligibility, bonus details, terms, how-to-claim steps, and FAQ content expand the decision.",
        "TPOWER 红利可以有多种形态：面向首次入金的 TPOWER 欢迎红利、面向回访玩家的充值加速、面向净亏损恢复窗口的 TPOWER 返水、面向分级低调服务的 TPOWER VIP 促销，以及绑定已公布日历的季节加速。以下每个分类都会链接到详情页，在概览、资格、红利细节、条款、领取步骤与常见问题中扩展决策信息。",
      ),
      L(
        "Authority for promotional search queries is earned by clarity. This guide avoids unverifiable “best bonus in the world” claims. It focuses on platform structure, Malaysia payment familiarity, mobile claim paths, provider-aware game contribution, and responsible entertainment controls that should stay active while any TPOWER Bonus is running.",
        "促销类搜索查询的权威来自清晰度。本指南避免无法核实的“全球最佳红利”主张。它聚焦平台结构、马来西亚支付熟悉度、移动领取路径、感知供应商的游戏贡献，以及在任何 TPOWER 红利进行期间都应保持启用的负责任娱乐控制。",
      ),
      L(
        "Think of the promotions listing as inventory and this long-form section as interpretation. Inventory answers “what is live.” Interpretation answers “how should a Malaysia player judge TPOWER Promotions before depositing.” Both layers are required for a page that wants to rank for commercial brand-plus-offer queries without becoming a thin affiliate template.",
        "可将优惠列表视为库存，将本长文部分视为解读。库存回答“当前有什么”。解读回答“马来西亚玩家在存款前应如何判断 TPOWER 优惠”。想要在商业品牌+优惠查询中排名、又不沦为单薄联盟模板的页面，两层都不可少。",
      ),
    ],
  },
  {
    id: "malaysia",
    title: L(
      "Why TPOWER Malaysia Promotions Matter",
      "为何 TPOWER 马来西亚优惠很重要",
    ),
    paragraphs: [
      L(
        "TPOWER Malaysia Promotions matter because local players evaluate offers through local constraints: familiar deposit rails, bilingual support, evening mobile sessions, and withdrawal ownership matching. A promotion that ignores those realities creates friction even if the headline percentage looks attractive. This hub therefore keeps [[/payment-methods|Payment Methods]], [[/register|Register]], [[/login|Login]], and [[/download|Download]] inside the same topical map as the offers themselves.",
        "TPOWER 马来西亚优惠之所以重要，是因为本地玩家通过本地约束评估优惠：熟悉的存款通道、双语支持、晚间移动会话，以及提款归属匹配。即使标题百分比看起来诱人，忽略这些现实的优惠仍会造成摩擦。因此本中心将 [[/payment-methods|支付方式]]、[[/register|注册]]、[[/login|登录]] 与 [[/download|下载]] 与优惠本身放在同一主题地图中。",
      ),
      L(
        "Search demand around TPOWER Promotions also reflects comparison behaviour. Players want to know whether a Welcome Bonus, cashback window, or VIP reward is the better fit for their current stage. Publishing category filters, expiry labels, minimum deposit guidance, and short summaries on each card reduces guesswork. Detail pages then deepen eligibility and claim steps without forcing every visitor to contact support first.",
        "围绕 TPOWER 优惠的搜索需求也反映比较行为。玩家希望知道欢迎红利、返水窗口或 VIP 奖励哪一个更适合当前阶段。在每张卡片上公布分类筛选、到期标签、最低存款指引与简短摘要，可减少猜测。详情页再深化资格与领取步骤，而不强迫每位访客先联系支持。",
      ),
      L(
        "Malaysia relevance is reinforced through editorial freshness. When an offer window changes, [[/news|News]] and the live promotions listing should stay aligned. When educational context is needed—deposit sequencing, app install, responsible limits—the [[/blog|Blog]] and [[/responsible-gaming|Responsible Gaming]] pages provide durable guidance that outlives any single campaign.",
        "马来西亚相关性通过编辑新鲜度得到强化。当优惠窗口变化时，[[/news|新闻]] 与实时优惠列表应保持一致。当需要教育上下文——存款顺序、应用安装、负责任限额——[[/blog|博客]] 与 [[/responsible-gaming|负责任博彩]] 页面提供比任何单一活动更持久的指导。",
      ),
      L(
        "Local peak-hour behaviour also shapes how TPOWER Malaysia Promotions should be presented. Players often compare a Welcome Bonus and cashback on a phone between work and evening entertainment. That means expiry labels, minimum deposit notes, and short summaries must remain scannable. Decorative urgency that hides terms fails both user trust and search quality standards.",
        "本地高峰行为也塑造 TPOWER 马来西亚优惠应如何呈现。玩家常常在下班与晚间娱乐之间用手机比较欢迎红利与返水。这意味着到期标签、最低存款说明与简短摘要必须保持可扫描。隐藏条款的装饰性紧迫感，既损害用户信任，也不符合搜索质量标准。",
      ),
    ],
  },
  {
    id: "welcome",
    title: L(
      "Understanding the TPOWER Welcome Bonus",
      "理解 TPOWER 欢迎红利",
    ),
    paragraphs: [
      L(
        "The TPOWER Welcome Bonus is usually the first commercial decision a new player makes after registration. It should be evaluated as an onboarding package: first qualifying deposit, published wagering, contribution by game type, and a completion window. Open the [[/promotions/welcome-package|Welcome Package]] detail for overview, eligibility, bonus details, terms, and how-to-claim steps before you fund an account.",
        "TPOWER 欢迎红利通常是新玩家注册后的第一个商业决策。它应被评估为入门礼包：首次合资格存款、已公布流水、按游戏类型的贡献，以及完成窗口。在为账户入金前，请打开 [[/promotions/welcome-package|欢迎礼包]] 详情查看概览、资格、红利细节、条款与领取步骤。",
      ),
      L(
        "A strong welcome offer is not defined by the largest possible percentage alone. Fit matters more: whether you prefer [[/slots|slots]], [[/live-casino|live casino]], or [[/sports|sports]]; whether your bankroll can complete wagering comfortably; and whether payment ownership details are ready for later withdrawal. Pair the welcome path with [[/register|TPOWER Register]] guidance and [[/blog/how-to-deposit-tpower|deposit education]] so the first session starts cleanly.",
        "强有力的欢迎优惠并不只由尽可能大的百分比定义。匹配度更重要：您更偏好 [[/slots|老虎机]]、[[/live-casino|真人娱乐]] 还是 [[/sports|体育]]；您的资金是否能舒适完成流水；以及支付归属资料是否已为日后提款准备就绪。请将欢迎路径与 [[/register|TPOWER 注册]] 指引及 [[/blog/how-to-deposit-tpower|存款教育]] 配对，使第一场干净开始。",
      ),
      L(
        "After claiming, keep the same official bookmarks for [[/login|Login]] and the [[/download|TPOWER App]]. Returning through unofficial mirrors to “protect a bonus” is a common security mistake. The welcome package should increase clarity about TPOWER Online Casino—not introduce urgency that overrides [[/responsible-gaming|responsible gaming]] limits.",
        "领取后，请为 [[/login|登录]] 与 [[/download|TPOWER App]] 保留相同的官方书签。通过非官方镜像返回以“保护红利”是常见安全错误。欢迎礼包应增加对 TPOWER Online Casino 的清晰度——而不是引入覆盖 [[/responsible-gaming|负责任博彩]] 限额的紧迫感。",
      ),
      L(
        "If you are still choosing between creating an account and waiting, read the Welcome Package detail first, then the Register guide. That order prevents depositing into the wrong offer state. A TPOWER Welcome Bonus only helps when the opt-in, deposit, and eligible-game sequence is understood before money moves.",
        "若您仍在创建账户与等待之间选择，请先阅读欢迎礼包详情，再阅读注册指南。该顺序可避免存入错误的优惠状态。只有在资金流动前理解选择加入、存款与合资格游戏顺序时，TPOWER 欢迎红利才真正有帮助。",
      ),
    ],
  },
  {
    id: "cashback",
    title: L(
      "How TPOWER Cashback Works",
      "TPOWER 返水如何运作",
    ),
    paragraphs: [
      L(
        "TPOWER Cashback is a different product logic from a Welcome Bonus. Instead of front-loading value on a first deposit, cashback evaluates net losses across a qualifying period for eligible games and returns a published percentage according to the method shown at opt-in. Review [[/promotions/cashback-calm|Calm Cashback]] for calculation expectations, mild wagering notes, and payout windows.",
        "TPOWER 返水与欢迎红利是不同的产品逻辑。它不是在首次存款时前置价值，而是在合资格周期内评估合资格游戏的净亏损，并按选择加入时显示的方法返还已公布百分比。请审阅 [[/promotions/cashback-calm|冷静返水]] 以了解计算预期、轻度流水说明与派发窗口。",
      ),
      L(
        "Cashback appeals to players who want a calmer reward rhythm. It still requires discipline: entertainment budgets should be set before the period begins, and [[/responsible-gaming|Responsible Gaming]] tools should remain active. Cashback is not insurance against chasing losses; it is a structured consolation mechanism inside TPOWER Promotions.",
        "返水吸引希望拥有更冷静奖励节奏的玩家。它仍需要纪律：娱乐预算应在周期开始前设定，且 [[/responsible-gaming|负责任博彩]] 工具应保持启用。返水不是追损的保险；它是 TPOWER 优惠体系内的结构化安慰机制。",
      ),
      L(
        "Because contribution and eligible categories affect outcomes, provider awareness helps. Browse [[/providers|TPOWER Providers]] and the [[/games|Games]] hub so you understand which shelves typically drive promotional contribution. Then keep cashier readiness via [[/payment-methods|Payment Methods]] if you plan to withdraw cashback after any mild wagering completes.",
        "由于贡献与合资格分类会影响结果，供应商认知很有帮助。请浏览 [[/providers|TPOWER 供应商]] 与 [[/games|游戏]] 中心，了解哪些货架通常驱动优惠贡献。若计划在轻度流水完成后提取返水，请通过 [[/payment-methods|支付方式]] 保持收银台准备就绪。",
      ),
    ],
  },
  {
    id: "vip",
    title: L(
      "TPOWER VIP Promotions and Tier Rewards",
      "TPOWER VIP 促销与等级奖励",
    ),
    paragraphs: [
      L(
        "TPOWER VIP Promotions reward consistency with discretion. Public flash clutter is not the design goal. Instead, tier calendars, celebration gestures, and host-managed boosts are communicated according to VIP standing. Start with the [[/vip|VIP Club]] overview, then read [[/promotions/vip-accelerated|VIP Accelerated Rewards]] for how accelerated offers are framed on this site.",
        "TPOWER VIP 促销以低调方式奖励持续性。公开闪烁杂讯不是设计目标。相反，等级日历、庆典礼遇与管家管理加速按 VIP 状态沟通。请从 [[/vip|VIP 俱乐部]] 概览开始，再阅读 [[/promotions/vip-accelerated|VIP 加速奖励]]，了解本站如何呈现加速优惠。",
      ),
      L(
        "VIP value still depends on healthy account standing, verified payment ownership, and personal limits. A host offer that looks generous can be a poor fit if it encourages stake sizes outside your plan. Combine VIP reading with [[/promotions|all promotions]], [[/responsible-gaming|safer-play controls]], and support via [[/contact|Contact]] when you need clarification that should not travel through social rumours.",
        "VIP 价值仍取决于良好账户状态、已验证支付归属与个人限额。看起来丰厚的管家优惠，若鼓励超出计划的注码，仍可能并不合适。请将 VIP 阅读与 [[/promotions|全部优惠]]、[[/responsible-gaming|更安全娱乐控制]]，以及在需要澄清时通过 [[/contact|联系]] 寻求支持结合起来——澄清不应依赖社交传言。",
      ),
      L(
        "From an SEO topical perspective, VIP content strengthens the TPOWER Bonus cluster by covering high-intent loyalty queries without separating them from the main promotions hub. Internal links between VIP, cashback, reload, and welcome pages help search engines and users understand that TPOWER Malaysia Promotions is one coherent system.",
        "从 SEO 主题角度看，VIP 内容通过覆盖高意图忠诚查询、同时不与主优惠中心割裂，强化了 TPOWER 红利集群。VIP、返水、充值与欢迎页面之间的内链，帮助搜索引擎与用户理解：TPOWER 马来西亚优惠是一个连贯系统。",
      ),
    ],
  },
  {
    id: "reload-seasonal",
    title: L(
      "Reload Boosts and Seasonal TPOWER Bonus Campaigns",
      "充值加速与季节性 TPOWER 红利活动",
    ),
    paragraphs: [
      L(
        "Reload boosts such as [[/promotions/weekly-reload|Weekly Reload Boost]] serve returning players who already completed onboarding. They usually open on a weekday schedule, require a minimum deposit, and publish a maximum bonus cap. That predictability is intentional: TPOWER Promotions should be plannable, not only impulsive.",
        "诸如 [[/promotions/weekly-reload|每周充值加速]] 的充值加速服务已完成入门的回访玩家。它们通常在工作日时间表开启，要求最低存款，并公布最高红利上限。这种可预期性是有意的：TPOWER 优惠应当可规划，而不仅仅是冲动性的。",
      ),
      L(
        "Seasonal campaigns like [[/promotions/merdeka-seasonal|Merdeka Seasonal Boost]] add time-boxed celebration value. Hard expiry dates matter. If you are evaluating a seasonal TPOWER Bonus, confirm the window is still open on the listing card, read contribution rules, and finish wagering before the published end date. Expired seasonal progress is generally not reinstated.",
        "诸如 [[/promotions/merdeka-seasonal|独立日季节加速]] 的季节活动增加限时庆典价值。硬性到期日很重要。若您正在评估季节性 TPOWER 红利，请确认列表卡片上的窗口仍然开放，阅读贡献规则，并在公布结束日前完成流水。已过期的季节进度通常不可恢复。",
      ),
      L(
        "Both reload and seasonal offers should stay connected to the same account hygiene as welcome and cashback: official [[/login|Login]], verified [[/payment-methods|deposit rails]], and clearer game choice through [[/games|Games]] and [[/providers|Providers]]. When fixtures or live tables are part of a seasonal theme, also review [[/sports|Sports]] or [[/live-casino|Live Casino]] category expectations.",
        "充值与季节优惠都应与欢迎、返水保持相同的账户卫生：官方 [[/login|登录]]、已验证的 [[/payment-methods|存款通道]]，以及通过 [[/games|游戏]] 与 [[/providers|供应商]] 更清晰地选择游戏。当赛事或真人桌成为季节主题的一部分时，也请审阅 [[/sports|体育]] 或 [[/live-casino|真人娱乐]] 分类预期。",
      ),
    ],
  },
  {
    id: "how-to-claim",
    title: L(
      "How to Claim a TPOWER Bonus Safely",
      "如何安全领取 TPOWER 红利",
    ),
    paragraphs: [
      L(
        "Claiming a TPOWER Bonus safely is a sequence, not a single click. Start with official orientation pages: [[/register|Register]] for new accounts, [[/login|Login]] for existing ones, and [[/download|Download]] or [[/apk|APK]] if you prefer the mobile app. Never enter credentials on lookalike domains shared in chats.",
        "安全领取 TPOWER 红利是一个序列，而不是一次点击。请从官方导向页开始：新账户用 [[/register|注册]]，现有账户用 [[/login|登录]]，若偏好移动应用则用 [[/download|下载]] 或 [[/apk|APK]]。切勿在聊天分享的仿冒域名上输入凭证。",
      ),
      L(
        "Next, open the relevant promotion detail, read overview and eligibility, then confirm bonus details and terms. Opt in before the qualifying deposit whenever the offer requires it. Use documented [[/payment-methods|Payment Methods]] and keep beneficiary names matched to your verified profile so later withdrawals are smoother.",
        "接下来，打开相关优惠详情，阅读概览与资格，再确认红利细节与条款。只要优惠要求，就在合资格存款前选择加入。使用已记录的 [[/payment-methods|支付方式]]，并保持收款姓名与已验证资料一致，以便日后提款更顺畅。",
      ),
      L(
        "Finally, play only on eligible games and track wagering progress inside the product. If something looks wrong—missing opt-in, unexpected contribution, delayed cashback—pause and use [[/contact|Contact]] or [[/faq|FAQ]] rather than third-party “agents.” Educational articles in the [[/blog|Blog]] can help with deposit and withdrawal sequencing after the bonus period.",
        "最后，仅在合资格游戏中游玩，并在产品内跟踪流水进度。若出现异常——缺少选择加入、意外贡献、返水延迟——请暂停并使用 [[/contact|联系]] 或 [[/faq|常见问题]]，而不是第三方“中介”。[[/blog|博客]] 中的教育文章可在红利期后帮助理清存款与提款顺序。",
      ),
      L(
        "A practical claim checklist for TPOWER Promotions Malaysia looks like this: confirm the offer is still active, confirm you are eligible, confirm the minimum deposit, confirm contribution rules for your preferred games, then deposit through an official rail. Skipping any step is how players create support tickets that could have been avoided with a slower read of the detail page.",
        "针对 TPOWER 马来西亚优惠的实用领取清单如下：确认优惠仍然有效、确认您符合资格、确认最低存款、确认您偏好游戏的贡献规则，然后通过官方通道存款。跳过任何一步，往往会导致本可通过更仔细阅读详情页而避免的支持工单。",
      ),
    ],
  },
  {
    id: "terms-rg",
    title: L(
      "Terms, Contribution Rules, and Responsible Gaming",
      "条款、贡献规则与负责任博彩",
    ),
    paragraphs: [
      L(
        "Every serious TPOWER Bonus decision ends in the terms. Wagering multipliers, game contribution, maximum cashout, expiry, and country eligibility determine real value. This promotions hub surfaces short terms on cards and fuller terms on detail pages so you can compare before activation. Live cashier panels remain the final source when an offer is updated for fairness or compliance.",
        "每一个严肃的 TPOWER 红利决策都以条款结束。流水倍数、游戏贡献、最高兑付、到期日与国家资格决定真实价值。本优惠中心在卡片上展示简短条款，在详情页展示更完整条款，便于您在激活前比较。当优惠因公平或合规更新时，实时收银台面板仍是最终来源。",
      ),
      L(
        "Contribution rules are where many players miscalculate. Slots may contribute differently from live tables or sports markets. Before opting into a TPOWER Welcome Bonus or reload boost, check whether your preferred category is fully eligible. Use [[/games|Games]] and [[/providers|Providers]] to understand catalogue shape, then keep expectations honest.",
        "贡献规则是许多玩家算错的地方。老虎机对真人桌或体育盘口的贡献可能不同。在选择加入 TPOWER 欢迎红利或充值加速之前，请检查您偏好的分类是否完全合资格。使用 [[/games|游戏]] 与 [[/providers|供应商]] 了解目录形态，并保持诚实预期。",
      ),
      L(
        "Responsible gaming is part of promotional integrity. Limits, reality checks, time-outs, and self-exclusion pathways on [[/responsible-gaming|Responsible Gaming]] should stay available while offers are active. A promotion is successful when it remains optional paid leisure—not when it pushes stake sizes beyond comfort. That standard protects both players and the long-term credibility of TPOWER Promotions Malaysia.",
        "负责任博彩是优惠诚信的一部分。[[/responsible-gaming|负责任博彩]] 上的限额、现实提醒、冷静期与自我排除路径应在优惠有效期间保持可用。当优惠保持为可选取的付费休闲时才算成功——而不是把注码推到舒适范围之外。该标准同时保护玩家与 TPOWER 马来西亚优惠的长期可信度。",
      ),
      L(
        "If a TPOWER Bonus ever conflicts with your personal limits, the limit wins. Decline the offer, reduce stakes, or take a break. Promotional calendars exist to add optional value—not to redefine how much entertainment spend is acceptable for your household budget.",
        "若某项 TPOWER 红利与您的个人限额冲突，限额优先。拒绝该优惠、降低注码，或休息片刻。优惠日历的存在是为了增加可选价值——而不是重新定义您的家庭预算可接受多少娱乐支出。",
      ),
    ],
  },
  {
    id: "mobile",
    title: L(
      "Claiming Promotions on the TPOWER App",
      "在 TPOWER App 上领取优惠",
    ),
    paragraphs: [
      L(
        "Many Malaysia players claim TPOWER Promotions on mobile during evening peak hours. The [[/download|Download]] page and [[/apk|APK]] guidance explain official install paths for the TPOWER App. After install, use the same account credentials from [[/register|Register]] / [[/login|Login]] so promotion progress stays attached to one verified profile.",
        "许多马来西亚玩家在晚间高峰通过移动端领取 TPOWER 优惠。[[/download|下载]] 页面与 [[/apk|APK]] 指引说明 TPOWER App 的官方安装路径。安装后，请使用与 [[/register|注册]] / [[/login|登录]] 相同的账户凭证，使优惠进度附着于同一个已验证资料。",
      ),
      L(
        "Mobile claim quality depends on readable cashier states, stable category browsing, and clear opt-in panels. If a promotion card looks different on app versus web, trust the live terms shown at activation and confirm through [[/contact|support]] when needed. Avoid community APK mirrors that request unnecessary permissions or harvest one-time codes.",
        "移动领取质量取决于可读的收银台状态、稳定的分类浏览与清晰的选择加入面板。若应用与网页上的优惠卡片看起来不同，请以激活时显示的实时条款为准，并在需要时通过 [[/contact|支持]] 确认。避免要求不必要权限或窃取一次性验证码的社区 APK 镜像。",
      ),
      L(
        "For product education beyond installation, read mobile-focused articles in the [[/blog|Blog]] and platform notes in [[/news|News]]. Those resources keep the promotions topic cluster fresh while the listing page remains the conversion-oriented centre for TPOWER Bonus discovery.",
        "除安装之外的产品教育，请阅读 [[/blog|博客]] 中的移动主题文章与 [[/news|新闻]] 中的平台说明。这些资源保持优惠主题集群新鲜，而列表页则继续作为发现 TPOWER 红利的转化导向中心。",
      ),
      L(
        "Once the TPOWER App is installed, keep promotional notifications optional and review every new offer inside the Promotions hub before depositing. Push urgency should never replace reading eligibility, contribution, and expiry on the official TPOWER website mirror of the same campaign.",
        "安装 TPOWER App 后，请将优惠通知保持为可选，并在存款前于优惠中心审阅每一项新优惠。推送紧迫感永远不应取代在官方 TPOWER 网站对应活动页上阅读资格、贡献与到期信息。",
      ),
    ],
  },
  {
    id: "authority",
    title: L(
      "How This Page Builds Topical Authority for TPOWER Promotions",
      "本页如何为 TPOWER 优惠建立主题权威",
    ),
    paragraphs: [
      L(
        "This landing page is designed as a pillar for the keyword family around TPOWER Promotions, TPOWER Bonus, TPOWER Welcome Bonus, TPOWER Cashback, TPOWER VIP Promotions, and TPOWER Malaysia Promotions. It does that by combining offer inventory, claim education, internal links, FAQ schema, and honest operational language—not by repeating the same phrase in every sentence.",
        "本落地页被设计为围绕 TPOWER Promotions、TPOWER Bonus、TPOWER Welcome Bonus、TPOWER Cashback、TPOWER VIP Promotions 与 TPOWER Malaysia Promotions 关键词族的支柱。它通过组合优惠库存、领取教育、内链、FAQ schema 与诚实的运营语言来实现——而不是在每句话重复同一短语。",
      ),
      L(
        "Each promotion detail page extends the pillar with Offer-oriented structured data, eligibility, bonus details, terms, how-to-claim steps, related offers, and a register CTA. Together, the hub and spokes create a coherent graph: players can enter from search, compare categories, open a detail URL, then continue into Register, Login, Download, Games, Providers, VIP, Responsible Gaming, News, or Blog without losing context.",
        "每个优惠详情页以面向 Offer 的结构化数据、资格、红利细节、条款、领取步骤、相关优惠与注册 CTA 扩展该支柱。中心与辐条共同形成连贯图谱：玩家可从搜索进入、比较分类、打开详情 URL，再继续进入注册、登录、下载、游戏、供应商、VIP、负责任博彩、新闻或博客，而不丢失上下文。",
      ),
      L(
        "Content freshness and editorial accountability complete EEAT for promotional topics. When terms change, update the listing and detail copy. When players need safer-play reminders, keep Responsible Gaming adjacent to bonus CTAs. When studios affect contribution, keep Providers transparent. That is how TPOWER Promotions earns durable relevance for Malaysia searchers who want substance over hype.",
        "内容新鲜度与编辑问责补全促销主题的 EEAT。当条款变化时，更新列表与详情文案。当玩家需要更安全娱乐提醒时，将负责任博彩放在红利 CTA 附近。当工作室影响贡献时，保持供应商透明。这正是 TPOWER 优惠为希望实质多于炒作的马来西亚搜索者赢得持久相关性的方式。",
      ),
      L(
        "If you are comparing options right now, use the filters above, open the offer that matches your stage, and only then move money. The strongest outcome for any TPOWER Bonus is a decision you still understand after the session ends.",
        "若您现在正在比较选项，请使用上方筛选，打开匹配您阶段的优惠，然后再转移资金。对任何 TPOWER 红利而言，最强结果是一场结束后您仍然理解的决定。",
      ),
      L(
        "For ongoing research, bookmark this hub beside [[/vip|VIP]], [[/payment-methods|Payment Methods]], and [[/responsible-gaming|Responsible Gaming]]. Together they form the practical triangle around every TPOWER Bonus: loyalty context, money movement, and player controls. That triangle is what separates a premium promotions landing page from a generic coupon grid.",
        "若需持续研究，请将本中心与 [[/vip|VIP]]、[[/payment-methods|支付方式]] 与 [[/responsible-gaming|负责任博彩]] 一并收藏。它们共同构成每个 TPOWER 红利周围的实用三角：忠诚上下文、资金流动与玩家控制。正是该三角把高端优惠落地页与普通优惠券网格区分开来。",
      ),
      L(
        "Return here whenever a new seasonal window opens or a VIP host mentions an accelerated reward. The official TPOWER Promotions Malaysia page should remain your first verification step before any deposit tied to a TPOWER Bonus. Clear terms always come first.",
        "每当新的季节窗口开启，或 VIP 管家提到加速奖励时，请回到这里。在任何与 TPOWER 红利相关的存款之前，官方 TPOWER 马来西亚优惠页应始终是您的第一步核实。清晰条款始终优先。",
      ),
    ],
  },
];

const faqs = [
  {
    question: L(
      "What are TPOWER Promotions?",
      "什么是 TPOWER 优惠？",
    ),
    answer: L(
      "TPOWER Promotions are the official reward offers for Malaysia players, including welcome packages, reload boosts, cashback, VIP rewards, and seasonal campaigns. Each offer publishes summary terms on this hub and fuller details on its promotion page.",
      "TPOWER 优惠是面向马来西亚玩家的官方奖励，包括欢迎礼包、充值加速、返水、VIP 奖励与季节活动。每项优惠在本中心公布摘要条款，并在其优惠页提供更完整细节。",
    ),
  },
  {
    question: L(
      "How does the TPOWER Welcome Bonus work?",
      "TPOWER 欢迎红利如何运作？",
    ),
    answer: L(
      "The TPOWER Welcome Bonus is for eligible new verified accounts. Opt in through Promotions, make the qualifying first deposit using official Payment Methods, then complete published wagering on eligible games before withdrawing under normal rules.",
      "TPOWER 欢迎红利面向符合资格的新验证账户。通过优惠选择加入，使用官方支付方式完成合资格首次存款，再在合资格游戏上完成已公布流水，然后按常规规则提款。",
    ),
  },
  {
    question: L(
      "What is TPOWER Cashback?",
      "什么是 TPOWER 返水？",
    ),
    answer: L(
      "TPOWER Cashback returns a published percentage of net losses over a qualifying period for eligible games. Calculation method, mild wagering, and payout windows are shown when you opt in on the Calm Cashback page.",
      "TPOWER 返水在合资格周期内对合资格游戏的净亏损返还已公布百分比。计算方式、轻度流水与派发窗口会在您于冷静返水页面选择加入时显示。",
    ),
  },
  {
    question: L(
      "Who can access TPOWER VIP Promotions?",
      "谁可以获得 TPOWER VIP 促销？",
    ),
    answer: L(
      "TPOWER VIP Promotions are for active VIP tier members in good standing. Public programme context is on the VIP Club page, while many accelerated rewards are host-managed and tier-specific.",
      "TPOWER VIP 促销面向状态良好的有效 VIP 等级会员。公开计划背景在 VIP 俱乐部页面，而许多加速奖励由管家管理且按等级区分。",
    ),
  },
  {
    question: L(
      "How do I claim a TPOWER Bonus on mobile?",
      "如何在手机上领取 TPOWER 红利？",
    ),
    answer: L(
      "Install through official TPOWER Download or APK guidance, sign in with your registered account, open Promotions, opt in, and deposit through documented methods. Avoid unofficial file shares and lookalike login pages.",
      "通过官方 TPOWER 下载或 APK 指引安装，使用已注册账户登录，打开优惠、选择加入，并通过已记录方式存款。避免非官方文件分享与仿冒登录页。",
    ),
  },
  {
    question: L(
      "Do TPOWER Malaysia Promotions require a minimum deposit?",
      "TPOWER 马来西亚优惠是否要求最低存款？",
    ),
    answer: L(
      "Most deposit-linked offers show a minimum deposit on the card and detail page. Cashback-style offers may not add an extra minimum beyond normal play. Always confirm the live threshold at opt-in.",
      "大多数与存款相关的优惠会在卡片与详情页显示最低存款。返水类优惠可能除正常游玩外不增加额外最低额。请始终以选择加入时的实时门槛为准。",
    ),
  },
  {
    question: L(
      "Can I combine a Welcome Bonus with reload or VIP offers?",
      "我可以将欢迎红利与充值或 VIP 优惠叠加吗？",
    ),
    answer: L(
      "Conflicting offers are usually not combinable. Welcome packages are typically once per player, while reload and VIP offers follow their own eligibility. Read each offer’s terms before opting in.",
      "冲突优惠通常不可叠加。欢迎礼包通常每位玩家一次，而充值与 VIP 优惠遵循各自资格。选择加入前请阅读每项优惠的条款。",
    ),
  },
  {
    question: L(
      "Where can I read full terms for a TPOWER Bonus?",
      "在哪里可以阅读 TPOWER 红利的完整条款？",
    ),
    answer: L(
      "Open the individual promotion detail page for overview, eligibility, bonus details, terms, and how-to-claim steps. The live promotions panel inside the product remains authoritative if terms are updated.",
      "请打开单个优惠详情页查看概览、资格、红利细节、条款与领取步骤。若条款更新，产品内的实时优惠面板仍具权威性。",
    ),
  },
  {
    question: L(
      "How do game providers affect promotional wagering?",
      "游戏供应商如何影响优惠流水？",
    ),
    answer: L(
      "Contribution can vary by game category and sometimes by studio rules published with the offer. Use the Games and Providers hubs to understand catalogue structure before choosing where to play a TPOWER Bonus.",
      "贡献可能因游戏分类而异，有时也因优惠公布的工作室规则而异。在选择用 TPOWER 红利游玩之前，请使用游戏与供应商中心了解目录结构。",
    ),
  },
  {
    question: L(
      "What should I do if a promotion does not credit?",
      "若优惠未到账我该怎么办？",
    ),
    answer: L(
      "Confirm you opted in before the qualifying action, verify deposit details, and contact official support with timestamps. Do not share passwords or one-time codes with anyone outside documented Contact channels.",
      "确认您在合资格动作前已选择加入，核实存款细节，并向官方支持提供时间戳。不要向已记录联系渠道之外的任何人分享密码或一次性验证码。",
    ),
  },
  {
    question: L(
      "Are TPOWER Promotions available after I download the app?",
      "下载 App 后是否仍可使用 TPOWER 优惠？",
    ),
    answer: L(
      "Yes. Promotions attach to your verified account, not only to desktop browsing. After Download, sign in and use the same Promotions hub pathways, then keep Responsible Gaming limits active.",
      "可以。优惠附着于您的已验证账户，而不仅限于桌面浏览。下载后请登录并使用相同的优惠中心路径，同时保持负责任博彩限额启用。",
    ),
  },
  {
    question: L(
      "How often are TPOWER Promotions updated?",
      "TPOWER 优惠多久更新一次？",
    ),
    answer: L(
      "Evergreen offers may run on long windows, while seasonal and reload campaigns use published schedules. Check this listing, promotion detail pages, and News for changes rather than relying on old screenshots.",
      "常青优惠可能有较长窗口，而季节与充值活动使用已公布时间表。请查看本列表、优惠详情页与新闻了解变更，而不是依赖旧截图。",
    ),
  },
];

const hubLinks = [
  { href: "/register", label: L("Register", "注册") },
  { href: "/login", label: L("Login", "登录") },
  { href: "/download", label: L("Download", "下载") },
  { href: "/games", label: L("Games", "游戏") },
  { href: "/providers", label: L("Providers", "供应商") },
  { href: "/vip", label: L("VIP", "VIP") },
  { href: "/payment-methods", label: L("Payment methods", "支付方式") },
  {
    href: "/responsible-gaming",
    label: L("Responsible gaming", "负责任博彩"),
  },
  { href: "/news", label: L("News", "新闻") },
  { href: "/blog", label: L("Blog", "博客") },
  { href: "/faq", label: L("FAQ", "常见问题") },
  { href: "/contact", label: L("Contact", "联系") },
];

function loc(obj) {
  return `{ en: ${JSON.stringify(obj.en)}, zh: ${JSON.stringify(obj.zh)} }`;
}

let out = `import type { LocalizedString } from "@/types";

export type PromotionsSeoBlock = {
  id: string;
  title: LocalizedString;
  paragraphs: LocalizedString[];
};

export const promotionsSeoBlocks: PromotionsSeoBlock[] = [
`;

for (const block of blocks) {
  out += `  {\n    id: ${JSON.stringify(block.id)},\n    title: ${loc(block.title)},\n    paragraphs: [\n`;
  for (const p of block.paragraphs) {
    out += `      ${loc(p)},\n`;
  }
  out += `    ],\n  },\n`;
}

out += `];\n\nexport const promotionsSeoFaqs = [\n`;
for (const faq of faqs) {
  out += `  {\n    question: ${loc(faq.question)},\n    answer: ${loc(faq.answer)},\n  },\n`;
}
out += `];\n\nexport const promotionsHubLinks = [\n`;
for (const link of hubLinks) {
  out += `  { href: ${JSON.stringify(link.href)}, label: ${loc(link.label)} },\n`;
}
out += `];\n`;

const dest = path.join(process.cwd(), "src/data/promotions-seo.ts");
fs.writeFileSync(dest, out);

const enWords = blocks
  .flatMap((b) => b.paragraphs.map((p) => p.en))
  .join(" ")
  .replace(/\[\[\/[^\]|]+\|([^\]]+)\]\]/g, "$1")
  .trim()
  .split(/\s+/).length;

console.log("wrote", dest);
console.log("EN word count:", enWords);
console.log("sections:", blocks.length);
console.log("faqs:", faqs.length);

if (enWords < 2000) {
  console.error("FAIL: under 2000 words");
  process.exit(1);
}
