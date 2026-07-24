import type { LocalizedString } from "@/types";

export type HomepageSeoBlock = {
  id: string;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  relatedLinks?: { href: string; label: LocalizedString }[];
};

export const homepageSeoBlocks: HomepageSeoBlock[] = [
  {
    id: "what-is",
    title: { en: "What is TPOWER Online Casino?", zh: "TPOWER线上博彩是什么？" },
    paragraphs: [
      { en: "TPOWER Online Casino is a Malaysia-focused digital entertainment platform that brings slots, live tables, sports markets, and specialty games into one coherent product experience. When people search for TPOWER, they are usually looking for a clear explanation of what the platform offers, how accounts work, and which pages to open next. This homepage is designed as that central guide: a topical authority page for TPOWER Casino Malaysia rather than a thin brochure.", zh: "TPOWER线上博彩 是面向马来西亚玩家的线上娱乐平台，老虎机、真人视讯、体育博彩和特色游戏都在同一套系统里。搜 TPOWER 的人，多半想搞清楚平台有什么、账号怎么用、下一步该点哪里。本页就是 TPOWER官网 的总入口，帮你一次看懂，而不是薄薄一张宣传单。" },
      { en: "The official TPOWER website organises the player journey around practical destinations. New visitors can move from orientation into [[/register|TPOWER Register]], returning players can open [[/login|TPOWER Login]], and mobile users can follow [[/download|TPOWER Download]] or [[/apk|TPOWER APK]] guidance. Category hubs such as [[/games|Games]], [[/slots|Slots]], [[/live-casino|Live Casino]], and [[/sports|Sports]] explain entertainment styles before a player commits funds.", zh: "TPOWER官方平台 按实际用途安排页面：新玩家可从概览进入 [[/register|立即注册]]，老用户走 [[/login|登录账号]]，手机用户看 [[/download|APP下载]] 或 [[/apk|APK安装]] 指引。入金前可先逛 [[/games|游戏大厅]]、[[/slots|老虎机]]、[[/live-casino|真人视讯]] 和 [[/sports|体育博彩]]，了解各品类玩法。" },
      { en: "TPOWER is presented here with an emphasis on clarity, local payment familiarity, bilingual support, and responsible adult entertainment. The platform is not described with exaggerated global rankings. Instead, this guide explains structure: providers, promotions, VIP pathways, security posture, and the editorial pages that keep TPOWER Malaysia information fresh and accountable.", zh: "这里介绍 TPOWER 时，重点放在说明清楚、本地支付好懂、中英客服和理性娱乐。不会拿夸张的全球排名来吹。本指南会讲厂商布局、TPOWER优惠、VIP 通道、安全机制，以及让马来西亚玩家资讯保持更新的编辑内容。" },
      { en: "Think of this page as the TPOWER Guide hub: a single place to understand the brand keyword TPOWER, then branch into product actions and educational articles without losing context.", zh: "把本页当成 TPOWER 总攻略：在一个地方搞懂品牌，再顺畅跳到注册、下载、入金或攻略文章，不用来回找。" },
      { en: "From a search perspective, TPOWER is a brand query with high commercial intent. People who type the keyword often want confirmation that they have reached the right destination, then a short path into Login, Register, Download, or Payments. By answering those intents on one pillar page—and linking deeply into supporting URLs—this homepage strengthens topical authority for TPOWER Online Casino Malaysia without inventing awards or unverifiable rankings.", zh: "从搜索角度看，TPOWER 是高意图品牌词。输入关键词的人，先要确认进对官网，再快速找到登录、注册、下载或支付入口。本页集中回答这些需求，并深度链接各专题页，强化 TPOWER线上博彩 在马来西亚的主题权威，不靠假奖项或无法核实的排名。" },
    ],
    relatedLinks: [
      { href: "/about", label: { en: "About TPOWER", zh: "认识 TPOWER" } },
      { href: "/games", label: { en: "Browse games", zh: "浏览游戏大厅" } },
      { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
    ],
  },
  {
    id: "why-malaysia",
    title: { en: "Why TPOWER Malaysia is Popular", zh: "为什么马来西亚玩家选 TPOWER？" },
    paragraphs: [
      { en: "Interest in TPOWER Malaysia often comes from players who want a product that matches local habits: recognised payment rails, English and Chinese support, and mobile-first access during evening peak hours. Popularity in search terms does not require hype. It requires useful answers about deposits, withdrawals, game categories, and how to reach the lobby safely through official channels.", zh: "马来西亚玩家关注 TPOWER，多半因为它贴合本地习惯：熟悉的支付通道、中英双语客服，以及晚上高峰用手机就能进大厅。热度不靠炒作，而是存款、提现、游戏分类和官方入口这些实用问题有清楚答案。" },
      { en: "On this site, Malaysia relevance is reinforced through [[/payment-methods|Payment Methods]], bilingual [[/contact|Contact]] routes, and guides that walk through register, login, and app install steps. Players comparing options can review [[/promotions|TPOWER Promotions]], check [[/providers|TPOWER Providers]], and read [[/news|News]] for platform updates without leaving the TPOWER topic cluster.", zh: "本站通过 [[/payment-methods|支付方式]]、双语 [[/contact|联系客服]] 以及注册、登录、装 APP 的逐步说明，强化本地相关性。比较平台的玩家可查看 [[/promotions|TPOWER优惠]]、[[/providers|游戏厂商]] 和 [[/news|最新资讯]]，不用离开 TPOWER 主题内容。" },
      { en: "Another reason TPOWER remains searchable is information architecture. Clean URLs, unique page titles, FAQ blocks, and internal links between the homepage, blog guides, and product hubs help both users and search engines understand that TPOWER Online Casino is a coherent destination for Malaysia players—not a scattered set of keyword pages.", zh: "TPOWER 长期可被搜到，信息架构也是关键。URL 干净、标题独立、FAQ 完整，首页与博客、各产品页内链清晰，让用户和搜索引擎都知道：这是面向马来西亚玩家的完整 TPOWER线上博彩，不是零散关键词页。" },
      { en: "Local peak-hour behaviour also shapes product expectations. Many Malaysia players browse on mobile after work, switch between slots and live tables during the same evening, and expect cashier states that remain readable on smaller screens. The TPOWER platform documentation on this site therefore treats mobile install pages, payment explainers, and category hubs as equal parts of the Malaysia experience—not secondary footnotes.", zh: "本地高峰习惯也影响产品预期。不少玩家下班后用手机浏览，同一晚在老虎机和真人桌之间切换，收银台在小屏上也要好读。因此本站把 APP下载、支付说明和各分类页，都视为马来西亚体验的核心部分，不是附注。" },
    ],
    relatedLinks: [
      { href: "/payment-methods", label: { en: "Payment methods", zh: "支付方式" } },
      { href: "/contact", label: { en: "Contact support", zh: "联系客服" } },
      { href: "/news", label: { en: "Latest news", zh: "最新资讯" } },
    ],
  },
  {
    id: "register",
    title: { en: "How to Register a TPOWER Account", zh: "TPOWER怎么注册？" },
    paragraphs: [
      { en: "TPOWER Register is the formal start of the account journey. Eligible adults should begin on the [[/register|registration guide page]], where expectations around identity accuracy, contact verification, and responsible play are explained before any deposit. Accurate details matter because they protect the account and reduce friction later during withdrawals.", zh: "TPOWER注册 是开户第一步。符合资格的成年玩家请先看 [[/register|注册指南]]，入金前了解资料要填准、联系方式要验证、以及理性娱乐要求。资料真实，账户才安全，日后提现也更顺。" },
      { en: "For a step-by-step walkthrough, open the blog article [[/blog/how-to-register-tpower|How to register TPOWER]]. That guide complements the register page with practical sequencing: create credentials, confirm contact channels, review terms, and only then explore [[/promotions|TPOWER Bonus]] offers or [[/payment-methods|deposit options]]. Registration is not a race; it is a controlled onboarding path.", zh: "想看逐步流程，可打开 [[/blog/how-to-register-tpower|TPOWER注册教程]]。文章会带你：设账号、验证联系、看条款，再考虑 [[/promotions|首存优惠]] 或 [[/payment-methods|存款方式]]。注册不是抢快，是按步骤稳妥开户。" },
      { en: "After registration, many players immediately look for TPOWER Login and mobile install instructions. Keep those journeys linked: return to [[/login|Login]] when you already have an account, or continue to [[/download|Download]] if you prefer the TPOWER App experience on Android or iOS.", zh: "注册完，很多人马上找登录和手机安装说明。路径要连起来：已有账号回 [[/login|登录]]；想在 Android 或 iOS 用 TPOWER App，继续看 [[/download|下载页面]]。" },
      { en: "Registration quality also affects later TPOWER Withdrawal success. Matching bank or e-wallet ownership to the account profile reduces unnecessary review cycles. Before you create credentials, skim [[/terms|Terms]], [[/privacy|Privacy]], and [[/responsible-gaming|Responsible Gaming]] so consent and safer-play expectations are understood up front.", zh: "注册资料也会影响日后 TPOWER 提现。银行和电子钱包归属要和账户资料一致，审核才少来回。建账号前，建议浏览 [[/terms|条款]]、[[/privacy|隐私政策]] 和 [[/responsible-gaming|负责任博彩]]，事先搞懂同意事项和理性娱乐要求。" },
    ],
    relatedLinks: [
      { href: "/register", label: { en: "Register guide", zh: "注册指南" } },
      { href: "/blog/how-to-register-tpower", label: { en: "Registration walkthrough", zh: "注册教程" } },
      { href: "/login", label: { en: "Login next", zh: "下一步登录" } },
    ],
  },
  {
    id: "login",
    title: { en: "How to Login to TPOWER", zh: "TPOWER怎么登录？" },
    paragraphs: [
      { en: "TPOWER Login is one of the highest-intent actions on the platform. Use the [[/login|login guide]] for the official orientation path, then follow [[/blog/tpower-login-guide|the TPOWER login guide]] if you need troubleshooting context such as credential hygiene, session security, or what to do when access fails.", zh: "TPOWER登录 是平台上意图最高的动作之一。请先看 [[/login|登录指南]] 走官方入口；若遇到密码、会话或进不去等问题，可参考 [[/blog/tpower-login-guide|登录攻略]] 排查。" },
      { en: "A healthy login habit on TPOWER Casino Malaysia includes using official bookmarks only, avoiding third-party APK mirrors, and confirming that support requests go through [[/contact|Contact]] or documented help channels. If you are new, complete [[/register|registration]] first. If you already play on mobile, pair login with the [[/download|TPOWER App]] so sessions stay consistent across devices.", zh: "在 TPOWER线上博彩 养成好习惯：只收藏官方网址、别装第三方 APK 镜像、求助走 [[/contact|客服]] 或已记录的渠道。新用户先完成 [[/register|注册]]；已在手机玩的，登录配合 [[/download|TPOWER App]]，多设备会话才一致。" },
      { en: "Login is also the gateway to personalised areas such as promotions activation, VIP messaging, and cashier history. After signing in through the product, return to this site for evergreen education: [[/faq|FAQ]], [[/promotions|Promotions]], and [[/responsible-gaming|Responsible Gaming]] remain useful even for experienced players.", zh: "登录后还能进优惠激活、VIP 消息和收银记录等个人区域。产品里登入后，仍可回本站看常青内容：老手也常用 [[/faq|常见问题]]、[[/promotions|优惠专区]] 和 [[/responsible-gaming|负责任博彩]]。" },
      { en: "If login fails after a password reset or device change, do not improvise with community shortcuts. Re-check the official URL, confirm you are not on a cloned page, and escalate through documented [[/contact|support]] with the exact error timing. That approach protects both the account and the integrity of TPOWER Login as a trusted entry point.", zh: "改密码或换设备后进不去，别用社群捷径乱试。重新核对官方网址，确认不在仿冒页，再通过 [[/contact|客服]] 说明出错时间。这样保护账户，也维护 TPOWER 登录作为可信入口。" },
    ],
    relatedLinks: [
      { href: "/login", label: { en: "Login guide", zh: "登录指南" } },
      { href: "/blog/tpower-login-guide", label: { en: "Detailed login article", zh: "登录攻略" } },
      { href: "/faq", label: { en: "Account FAQ", zh: "账户常见问题" } },
    ],
  },
  {
    id: "download",
    title: { en: "How to Download TPOWER App", zh: "TPOWER怎么下载APP？" },
    paragraphs: [
      { en: "TPOWER Download covers the official path to the TPOWER App for Android and iOS. Start at the [[/download|Download page]], which explains platform choice, install expectations, and how desktop visitors can use a QR path to continue on a phone. The companion article [[/blog/how-to-download-tpower|How to download TPOWER]] adds a practical checklist for first-time installs.", zh: "TPOWER APP下载 覆盖 Android 和 iOS 官方路径。从 [[/download|下载页面]] 开始，了解系统选择、安装预期，以及电脑访客如何扫码继续在手机上装。配套文章 [[/blog/how-to-download-tpower|下载教程]] 为首次安装提供实用清单。" },
      { en: "Mobile quality is part of why players search for the TPOWER App. A calm lobby, readable cashier states, and stable category browsing matter as much as raw game count. For product context beyond installation, read [[/blog/tpower-mobile-app|TPOWER mobile app]]. Always prefer documented official channels over unverified file shares.", zh: "玩家搜 TPOWER App，往往也看重移动体验：大厅要稳、收银台要清楚、分类浏览要顺，不只是游戏数量。安装之外的产品背景，可看 [[/blog/tpower-mobile-app|手机版说明]]。请始终走官方记录渠道，别用不明文件分享。" },
      { en: "If Android package guidance is what you need, continue to the [[/apk|TPOWER APK]] section below and the dedicated APK page. After install, return to [[/login|TPOWER Login]] with the same account you created through [[/register|Register]].", zh: "若你需要 Android 安装包指引，继续看下方 [[/apk|TPOWER APK]] 和专属 APK 页。装好后，用 [[/register|注册]] 时同一账号回 [[/login|登录]]。" },
    ],
    relatedLinks: [
      { href: "/download", label: { en: "Download page", zh: "下载页面" } },
      { href: "/apk", label: { en: "APK guidance", zh: "APK 安装指引" } },
      { href: "/blog/tpower-mobile-app", label: { en: "Mobile app overview", zh: "手机版概览" } },
    ],
  },
  {
    id: "apk",
    title: { en: "TPOWER APK Installation Guide", zh: "TPOWER APK 怎么安装？" },
    paragraphs: [
      { en: "TPOWER APK searches usually mean a player wants Android package clarity: where to obtain an install file safely, what permissions mean, and how the package relates to the official app experience. Use the [[/apk|APK guidance page]] for honest install orientation, then cross-check steps in [[/blog/how-to-download-tpower|the download guide]].", zh: "搜 TPOWER APK 的玩家，通常想搞懂 Android 安装包：去哪安全下载、权限什么意思、和官方 App 体验有何关系。请看 [[/apk|APK 指引页]] 获取诚实安装说明，并在 [[/blog/how-to-download-tpower|下载教程]] 交叉核对步骤。" },
      { en: "Treat APK installation as a security decision. Prefer official TPOWER paths documented on this website, avoid renamed mirrors, and confirm you are not entering credentials on lookalike pages. After installation, sign in through the product and keep educational bookmarks to [[/security|Security]], [[/faq|FAQ]], and [[/contact|Contact]] for later support.", zh: "装 APK 是安全决策。优先用本站记录的 TPOWER 官方路径，避开改名镜像，别在仿冒页输入账号密码。安装后通过产品登录，并收藏 [[/security|安全说明]]、[[/faq|常见问题]] 和 [[/contact|联系客服]] 以便日后求助。" },
      { en: "APK guidance on this marketing site is informational. It does not replace the live product's own install prompts. When in doubt, start from [[/download|TPOWER Download]] and the [[/blog/tpower-mobile-app|mobile app article]] before changing device install permissions.", zh: "本营销站的 APK 指引仅供参考，不能替代产品内实时安装提示。有疑虑时，先查 [[/download|APP下载]] 和 [[/blog/tpower-mobile-app|手机版文章]]，再改设备安装权限。" },
    ],
    relatedLinks: [
      { href: "/apk", label: { en: "APK page", zh: "APK 页面" } },
      { href: "/download", label: { en: "Download hub", zh: "下载中心" } },
      { href: "/security", label: { en: "Security overview", zh: "安全说明" } },
    ],
  },
  {
    id: "casino-games",
    title: { en: "TPOWER Casino Games", zh: "TPOWER线上博彩有哪些游戏？" },
    paragraphs: [
      { en: "TPOWER Casino games are organised so players can choose by style instead of scrolling endless unstructured grids. The [[/games|Games hub]] introduces the catalogue logic, while dedicated shelves cover [[/slots|slots]], [[/live-casino|live casino]], [[/sports|sports]], fishing, lottery, poker, arcade, and crash formats. This structure helps TPOWER Online Casino stay understandable for first-time Malaysia visitors.", zh: "TPOWER线上博彩 按玩法分类，不用在无结构列表里无限翻。[[/games|游戏大厅]] 介绍目录逻辑，[[/slots|老虎机]]、[[/live-casino|真人视讯]]、[[/sports|体育博彩]]、捕鱼、彩票、扑克、街机和爆点各有专区。马来西亚新访客一眼就能看懂。" },
      { en: "Curation matters more than inflated counts. The TPOWER platform emphasises readable category pages, provider attribution, and links into [[/providers|provider profiles]] so players know which studio powers a title before they register. From games, you can also move into [[/promotions|promotions]] that may apply to selected categories, always checking terms first.", zh: "精选比堆数量更重要。TPOWER 强调分类页好读、厂商标注清楚，并链接 [[/providers|厂商介绍]]，注册前就知道游戏来自哪家工作室。从游戏区也可进可能适用特定品类的 [[/promotions|优惠]]，领取前先看条款。" },
      { en: "If you are exploring TPOWER as a complete casino destination, combine the games map with payment readiness on [[/payment-methods|Payment Methods]] and safer-play planning on [[/responsible-gaming|Responsible Gaming]]. Entertainment value improves when bankroll rules are decided before the first session.", zh: "若把 TPOWER 当完整官方平台来逛，请结合 [[/payment-methods|支付方式]] 的入金准备和 [[/responsible-gaming|负责任博彩]] 的预算规划。第一局开始前定好资金规则，玩起来更安心。" },
      { en: "The same map also supports SEO clarity. When someone searches TPOWER Casino, the homepage can explain the full catalogue shape, then hand off to specialised URLs for slots, live, and sports. That hub-and-spoke model is how a brand pillar page earns relevance without stuffing every keyword into a single paragraph.", zh: "同一张地图也利于搜索理解。有人搜 TPOWER Casino 时，首页先讲完整目录结构，再导向老虎机、真人和体育专题页。这种中心辐射模式，让品牌支柱页赢得相关性，又不必把每个关键词塞进一段。" },
    ],
    relatedLinks: [
      { href: "/games", label: { en: "All games", zh: "全部游戏" } },
      { href: "/slots", label: { en: "Slots", zh: "老虎机" } },
      { href: "/live-casino", label: { en: "Live casino", zh: "真人视讯" } },
      { href: "/sports", label: { en: "Sports", zh: "体育博彩" } },
    ],
  },
  {
    id: "slots",
    title: { en: "TPOWER Slot Games", zh: "TPOWER老虎机游戏推荐" },
    paragraphs: [
      { en: "TPOWER Slot searches usually point to players who want video slots with clear themes, mobile performance, and known providers. Open [[/slots|TPOWER Slot Games]] to understand how the shelf is framed, then deepen studio context on pages such as Pragmatic Play and PG Soft inside [[/providers|Providers]].", zh: "搜 TPOWER 老虎机的玩家，通常要主题清楚、手机跑得顺、厂商有名的电子游戏。先看 [[/slots|老虎机专区]] 了解上架逻辑，再到 [[/providers|游戏厂商]] 深入 Pragmatic Play、PG电子 等工作室背景。" },
      { en: "Slot sessions on the TPOWER platform should still follow entertainment budgeting. Use [[/blog/how-to-deposit-tpower|deposit guidance]] only after limits are clear, and review any [[/promotions|TPOWER Bonus]] wagering rules before opting into slot-related offers. Specialty formats nearby—arcade and crash—remain separate shelves so players are not forced into a single tempo.", zh: "在 TPOWER 玩老虎机，仍要按娱乐预算来。限额定好后再看 [[/blog/how-to-deposit-tpower|存款教程]]；领 [[/promotions|TPOWER优惠]] 前先查流水规则。附近街机和爆点保持独立专区，玩家不被单一节奏绑死。" },
      { en: "For discovery beyond one title, rotate between the slots category, provider landings, and [[/blog|Blog]] education articles. That pattern builds topical understanding of TPOWER Casino without relying on repetitive keyword blocks.", zh: "想发现更多款，可在老虎机专区、厂商页和 [[/blog|博客攻略]] 之间轮换浏览。这样建立对 TPOWER线上博彩 的主题理解，不用靠重复关键词堆砌。" },
      { en: "Players who prefer longer sessions should also watch battery, data, and session timers. The TPOWER App and browser lobby both benefit from deliberate breaks. Pair slot play with [[/responsible-gaming|responsible gaming]] tools so entertainment remains optional leisure rather than an obligation.", zh: "爱长时间转的玩家，也留意电量、流量和计时。TPOWER App 和浏览器大厅都该适时休息。搭配 [[/responsible-gaming|负责任博彩]] 工具，让老虎机保持可选休闲，而不是负担。" },
    ],
    relatedLinks: [
      { href: "/slots", label: { en: "Slots category", zh: "老虎机专区" } },
      { href: "/providers", label: { en: "Slot providers", zh: "老虎机厂商" } },
      { href: "/promotions", label: { en: "Slot-related offers", zh: "相关优惠" } },
    ],
  },
  {
    id: "live",
    title: { en: "TPOWER Live Casino", zh: "TPOWER真人视讯怎么玩？" },
    paragraphs: [
      { en: "TPOWER Live Casino centres on studio-driven tables such as baccarat, blackjack, roulette, and selected game shows. The [[/live-casino|Live Casino page]] explains the experience for Malaysia evening peak hours, while provider pages for Evolution and related live studios expand topical depth under [[/providers|TPOWER Providers]].", zh: "TPOWER真人视讯 以演播桌台为核心，包括百家乐、二十一点、轮盘和精选游戏秀。[[/live-casino|真人视讯专区]] 说明马来西亚晚间高峰体验，Evolution 等真人厂商页在 [[/providers|游戏厂商]] 下补充深度介绍。" },
      { en: "Live play rewards patience and table selection more than speed clicking. Before entering a cashier for live sessions, confirm your account path via [[/login|Login]] or [[/register|Register]], and review [[/payment-methods|deposit methods]] that match your bank or e-wallet. News about table capacity can appear in [[/news|TPOWER News]].", zh: "真人局更奖励耐心和选桌，不是狂点。进真人收银台前，先通过 [[/login|登录]] 或 [[/register|注册]] 确认账户路径，并核对与银行或电子钱包匹配的 [[/payment-methods|存款方式]]。桌台容量消息可能在 [[/news|平台资讯]] 出现。" },
      { en: "As with every TPOWER Casino Malaysia vertical, live entertainment should stay optional and budgeted. Pair live sessions with [[/responsible-gaming|responsible gaming]] tools whenever intensity rises beyond comfort.", zh: "和 TPOWER线上博彩 每个品类一样，真人娱乐应保持可选、有预算。强度超出舒适范围时，请搭配 [[/responsible-gaming|负责任博彩]] 工具。" },
    ],
    relatedLinks: [
      { href: "/live-casino", label: { en: "Live casino hub", zh: "真人视讯专区" } },
      { href: "/providers", label: { en: "Live providers", zh: "真人厂商" } },
      { href: "/news", label: { en: "Platform news", zh: "平台资讯" } },
    ],
  },
  {
    id: "sports",
    title: { en: "TPOWER Sportsbook", zh: "TPOWER体育博彩专区" },
    paragraphs: [
      { en: "TPOWER Sportsbook interest usually focuses on football-first markets and mobile readability. Visit [[/sports|Sports]] for the category overview, then use provider context where sports presentation is powered by specialised market partners listed under [[/providers|Providers]].", zh: "TPOWER体育博彩 的关注点通常是足球优先盘口和手机好读。先看 [[/sports|体育专区]] 了解分类，再到 [[/providers|游戏厂商]] 查看专业盘口合作方的呈现背景。" },
      { en: "Sports betting on the TPOWER platform should be approached with the same account discipline as casino play: verified details, clear deposit sources, and pre-set limits. Educational paths include [[/blog/how-to-deposit-tpower|deposit tips]], [[/blog/how-to-withdraw-tpower|withdrawal tips]], and safer-play reminders on [[/responsible-gaming|Responsible Gaming]].", zh: "在 TPOWER 玩体育，账户纪律要和线上博彩一样：资料已验证、入金来源清楚、限额先设好。可参考 [[/blog/how-to-deposit-tpower|存款攻略]]、[[/blog/how-to-withdraw-tpower|提现攻略]]，以及 [[/responsible-gaming|负责任博彩]] 的提醒。" },
      { en: "When major fixtures drive traffic to TPOWER Malaysia, this homepage remains the orientation layer. From here, jump to sports, promotions that may include sports-related offers, or [[/vip|VIP]] if host-assisted service is part of your tier pathway.", zh: "重大赛事为 TPOWER 马来西亚带来流量时，本首页仍是导向层。可从这里跳到体育、可能含体育条款的 TPOWER优惠，或需要管家服务的 [[/vip|VIP]] 通道。" },
    ],
    relatedLinks: [
      { href: "/sports", label: { en: "Sportsbook category", zh: "体育专区" } },
      { href: "/promotions", label: { en: "Current promotions", zh: "查看更多优惠" } },
      { href: "/vip", label: { en: "VIP club", zh: "VIP 俱乐部" } },
    ],
  },
  {
    id: "promotions",
    title: { en: "TPOWER Promotions and Bonuses", zh: "TPOWER有哪些优惠？" },
    paragraphs: [
      { en: "TPOWER Promotions and TPOWER Bonus queries should lead to readable terms, not headline theatre. The [[/promotions|Promotions hub]] surfaces welcome, reload, cashback, VIP, and seasonal offers with summaries and expiry context. Always open the detail page before opting in.", zh: "搜 TPOWER优惠 或红利，应该看到清楚条款，不是标题噱头。[[/promotions|优惠专区]] 展示欢迎礼、再存、返水、VIP 和季节性活动，附摘要和到期说明。领取前务必打开详情页。" },
      { en: "Bonus value depends on wagering contribution, eligible games, and timing. A TPOWER Bonus that looks generous can still be a poor fit if slots contribution, live exclusions, or maximum cashout rules are ignored. Use this homepage as the map, then verify details on promotion pages and related [[/blog|Blog]] explainers.", zh: "红利值不值，看流水贡献、合资格游戏和时间窗口。看起来丰厚的 TPOWER 优惠，若忽略老虎机贡献、真人排除或最高兑付规则，可能并不合适。以本页为地图，再到优惠页和 [[/blog|博客说明]] 核实细节。" },
      { en: "Promotions connect tightly to money movement. After reviewing an offer, check [[/payment-methods|deposit methods]], read [[/blog/how-to-deposit-tpower|how to deposit into TPOWER]], and keep [[/responsible-gaming|responsible gaming]] limits active so bonuses never override personal controls.", zh: "优惠和资金流动紧密相关。看完活动后，核对 [[/payment-methods|存款方式]]，阅读 [[/blog/how-to-deposit-tpower|入金教程]]，并保持 [[/responsible-gaming|负责任博彩]] 限额开启，别让红利覆盖个人控制。" },
      { en: "Seasonal calendars and VIP-linked rewards may change more often than evergreen guides. When an offer updates, prefer the live [[/promotions|Promotions]] listing and [[/news|News]] notes over screenshots shared elsewhere. That habit keeps TPOWER Promotions research accurate and reduces disputes caused by outdated terms.", zh: "季节性日历和 VIP 奖励变动可能比常青指南更频繁。优惠更新时，优先看实时 [[/promotions|优惠列表]] 和 [[/news|资讯]] 说明，别信别处截图。这样研究 TPOWER优惠 才准确，也减少因过时条款起争议。" },
    ],
    relatedLinks: [
      { href: "/promotions", label: { en: "All promotions", zh: "全部优惠" } },
      { href: "/vip", label: { en: "VIP rewards", zh: "VIP 奖励" } },
      { href: "/register", label: { en: "New player path", zh: "新玩家注册" } },
    ],
  },
  {
    id: "deposit",
    title: { en: "TPOWER Deposit Methods", zh: "TPOWER怎么充值？" },
    paragraphs: [
      { en: "TPOWER Deposit intent is practical: which local rails work, what minimums to expect, and how to avoid mismatched beneficiary details. Start with [[/payment-methods|Payment Methods]], then follow [[/blog/how-to-deposit-tpower|How to deposit into TPOWER]] for a sequenced checklist covering e-wallets, FPX-style banking, and verification readiness.", zh: "TPOWER充值 的问题很实际：哪些本地通道可用、最低多少、怎样避免收款资料不符。先看 [[/payment-methods|支付方式]]，再跟 [[/blog/how-to-deposit-tpower|入金教程]] 逐步完成电子钱包、FPX 类银行和验证准备。" },
      { en: "Deposits on TPOWER Online Casino should match the verified account name wherever required. That discipline protects withdrawals later. If a method is temporarily unavailable, use [[/contact|Contact]] or [[/faq|FAQ]] rather than unofficial payment agents.", zh: "在 TPOWER线上博彩 入金，要求时须与已验证账户姓名一致。这能保护日后提现。若某通道暂时不可用，请走 [[/contact|客服]] 或 [[/faq|常见问题]]，别找非官方中介。" },
      { en: "After funding, players often jump to [[/games|games]] or [[/promotions|promotions]]. Pause first: confirm the cashier confirmation state, note any pending checks, and ensure your entertainment budget for the session is already decided.", zh: "入金后，很多人马上跳 [[/games|游戏]] 或 [[/promotions|优惠]]。先停一下：确认收银台状态、留意待处理检查，并确保这局娱乐预算已定好。" },
      { en: "Deposit education belongs on the same topical map as Login and Register because funding is rarely the first click for a new visitor. Most people land on TPOWER, confirm legitimacy, create or open an account, then move money. Keeping those steps linked reduces drop-off and improves the usefulness of this homepage as a Malaysia-facing guide.", zh: "入金说明应和登录、注册在同一张主题地图里，因为新访客很少第一下就充钱。多数人先到 TPOWER、确认靠谱、开户或登录，再转账。步骤连起来，流失更少，本页作为马来西亚指南也更实用。" },
    ],
    relatedLinks: [
      { href: "/payment-methods", label: { en: "Payment methods", zh: "支付方式" } },
      { href: "/blog/how-to-deposit-tpower", label: { en: "Deposit guide", zh: "入金教程" } },
      { href: "/faq", label: { en: "Payments FAQ", zh: "支付常见问题" } },
    ],
  },
  {
    id: "withdrawal",
    title: { en: "TPOWER Withdrawal Process", zh: "TPOWER可以提现吗？" },
    paragraphs: [
      { en: "TPOWER Withdrawal searches reflect a trust question: how funds leave the platform after play. Read [[/blog/how-to-withdraw-tpower|How to withdraw from TPOWER]] together with [[/payment-methods|Payment Methods]] so expectations around verification, beneficiary matching, and banking windows are clear before you request a payout.", zh: "搜 TPOWER 提现，反映的是信任问题：玩完钱怎么出平台。请把 [[/blog/how-to-withdraw-tpower|提现教程]] 和 [[/payment-methods|支付方式]] 一起看，申请前先搞懂验证、收款人匹配和银行窗口。" },
      { en: "Withdrawal speed on TPOWER Casino Malaysia depends on account standing, completed checks, and the chosen payout rail—not on slogan promises. VIP tiers may receive priority review as explained on [[/vip|VIP]], but every player benefits from clean KYC and consistent payment ownership details.", zh: "TPOWER线上博彩 提现速度看账户状态、已完成审核和所选出款通道，不是看口号。[[/vip|VIP]] 说明更高等级可能优先审，但每位玩家都受益于完整 KYC 和一致的支付归属资料。" },
      { en: "If a withdrawal is delayed, use [[/contact|Contact]] with precise timestamps and method details. Avoid sharing passwords or one-time codes with anyone claiming to accelerate payouts outside official support.", zh: "若提现延迟，请通过 [[/contact|客服]] 提供准确时间和方式细节。别向声称能加速出款、却不在官方支持体系内的人分享密码或验证码。" },
    ],
    relatedLinks: [
      { href: "/blog/how-to-withdraw-tpower", label: { en: "Withdrawal guide", zh: "提现教程" } },
      { href: "/payment-methods", label: { en: "Payout methods", zh: "出款方式" } },
      { href: "/contact", label: { en: "Contact support", zh: "联系客服" } },
    ],
  },
  {
    id: "vip",
    title: { en: "TPOWER VIP Programme", zh: "TPOWER VIP 有什么好处？" },
    paragraphs: [
      { en: "TPOWER VIP is structured for discretion and escalating service rather than public scarcity pressure. The [[/vip|VIP Club page]] outlines tier progression and host-assisted benefits for higher levels, including improved reward calendars and priority operational attention where applicable.", zh: "TPOWER VIP 强调低调递进服务，不靠公开稀缺压力。[[/vip|VIP 俱乐部]] 说明等级进阶和更高等级的管家协助，包括更优奖励日历和适用情况下的优先运营关注。" },
      { en: "VIP relevance still depends on consistent eligible activity and healthy account standing. Players should not chase tiers at the expense of responsible limits. Combine VIP reading with [[/promotions|promotions]] terms and [[/responsible-gaming|responsible gaming]] controls so rewards never become a reason to override personal rules.", zh: "VIP 仍取决于持续合资格活跃和良好账户状态。别为冲等级牺牲理性限额。阅读 VIP 时，请结合 [[/promotions|优惠]] 条款和 [[/responsible-gaming|负责任博彩]] 控制，别让奖励成为覆盖个人规则的理由。" },
      { en: "For lifestyle and service updates that affect hosts or tier coverage, watch [[/news|News]]. For foundational account access, VIP members still use the same [[/login|Login]] and [[/download|App]] pathways as everyone else.", zh: "影响管家或等级覆盖的服务更新，请关注 [[/news|资讯]]。基础账户访问方面，VIP 会员仍和其他人一样走 [[/login|登录]] 和 [[/download|APP下载]] 路径。" },
    ],
    relatedLinks: [
      { href: "/vip", label: { en: "VIP Club", zh: "VIP 俱乐部" } },
      { href: "/promotions", label: { en: "VIP-related offers", zh: "VIP 专属优惠" } },
      { href: "/news", label: { en: "VIP and platform news", zh: "VIP 与平台资讯" } },
    ],
  },
  {
    id: "providers",
    title: { en: "TPOWER Game Providers", zh: "TPOWER合作游戏厂商有哪些？" },
    paragraphs: [
      { en: "TPOWER Providers are a core EEAT signal: players deserve to know which studios supply mathematics, live studios, and specialty formats. Browse the [[/providers|Providers hub]] for landings that introduce catalogues, features, compatibility notes, and FAQs for names such as Pragmatic Play, PG Soft, Evolution, JILI, and others listed on the official TPOWER website map.", zh: "TPOWER 游戏厂商 是核心信任信号：玩家有权知道哪家工作室提供数学模型、真人演播和特色玩法。浏览 [[/providers|厂商中心]]，查看 Pragmatic Play、PG电子、Evolution、JILI 及 TPOWER官网 地图上其他名称的目录、特色、兼容说明和常见问题。" },
      { en: "Provider transparency supports trust better than anonymous game grids. From a provider page you can return to [[/slots|Slots]] or [[/live-casino|Live Casino]], open related studios, and continue into [[/games|Games]] without losing the topical thread around TPOWER Online Casino.", zh: "厂商透明比匿名游戏列表更能建立信任。从厂商页可回 [[/slots|老虎机]] 或 [[/live-casino|真人视讯]]，打开相关工作室，再进 [[/games|游戏大厅]]，不丢失 TPOWER线上博彩 的主题线索。" },
      { en: "When evaluating a new title, check the provider page first, then confirm whether any [[/promotions|promotion]] excludes that studio, and only then deposit through documented [[/payment-methods|methods]]. That sequence is how informed TPOWER Malaysia players reduce avoidable friction.", zh: "评估新游戏时，先看厂商页，再确认 [[/promotions|优惠]] 是否排除该工作室，然后才通过 [[/payment-methods|官方方式]] 入金。知情的马来西亚玩家靠这个顺序减少不必要摩擦。" },
    ],
    relatedLinks: [
      { href: "/providers", label: { en: "All providers", zh: "全部厂商" } },
      { href: "/games", label: { en: "Games catalogue", zh: "游戏目录" } },
      { href: "/about", label: { en: "About the platform", zh: "关于平台" } },
    ],
  },
  {
    id: "why-choose",
    title: { en: "Why Players Choose TPOWER", zh: "为什么选 TPOWER线上博彩？" },
    paragraphs: [
      { en: "Players choose TPOWER for a combination of organised game shelves, Malaysia-relevant payments, bilingual help routes, mobile install documentation, and promotions that publish terms before activation. The platform's public site emphasises orientation pages—Login, Register, Download, FAQ—so the journey is legible before money moves.", zh: "玩家选 TPOWER，因为游戏分区清楚、支付贴合马来西亚、中英客服好找、APP下载 有完整说明，优惠也在激活前公布条款。公开站点强调登录、注册、下载、FAQ 等导向页，入金前旅程就看得懂。" },
      { en: "Choice should still be comparative and cautious. Use [[/about|About]], [[/security|Security]], [[/privacy|Privacy]], and [[/editorial-policy|Editorial Policy]] to judge how the brand communicates. Then validate operational paths on [[/payment-methods|payments]], [[/vip|VIP]], and [[/contact|support]] rather than relying on social media rumours.", zh: "选择仍应比较、谨慎。用 [[/about|关于我们]]、[[/security|安全]]、[[/privacy|隐私]] 和 [[/editorial-policy|编辑政策]] 判断品牌如何沟通。再到 [[/payment-methods|支付]]、[[/vip|VIP]] 和 [[/contact|客服]] 验证实际路径，别信社交媒体传言。" },
      { en: "This homepage exists to make that comparison easier. It is the pillar that connects TPOWER Guide content, product hubs, and news so searchers landing on TPOWER can navigate with intent instead of guesswork.", zh: "本首页就是让比较更容易。它是连接 TPOWER 攻略、产品中心和资讯的支柱，让搜 TPOWER 的人带着目的导航，不用瞎猜。" },
    ],
    relatedLinks: [
      { href: "/about", label: { en: "About TPOWER", zh: "认识 TPOWER" } },
      { href: "/security", label: { en: "Security", zh: "安全" } },
      { href: "/contact", label: { en: "Talk to support", zh: "联系客服" } },
    ],
  },
  {
    id: "security",
    title: { en: "TPOWER Security", zh: "TPOWER靠谱吗？安全吗？" },
    paragraphs: [
      { en: "TPOWER Security content explains how account access, transport protection, and suspicious-activity monitoring are framed for players. Read the [[/security|Security page]] for posture details, and treat login hygiene as part of everyday use: official URLs only, unique passwords, and careful handling of one-time codes.", zh: "TPOWER 安全内容说明账户访问、传输保护和可疑活动监控如何向玩家呈现。请读 [[/security|安全页面]] 了解细节，并把登录卫生当日常习惯：只用官方网址、独立密码、谨慎处理验证码。" },
      { en: "Security also intersects with downloads. Prefer [[/download|official download]] and [[/apk|APK guidance]] documented here, and avoid community files that request unnecessary permissions. If something looks wrong during cashier use, pause and contact [[/contact|support]] rather than skip verification steps.", zh: "安全也和下载相关。优先用本站记录的 [[/download|官方下载]] 和 [[/apk|APK 指引]]，避开要求多余权限的社区文件。收银台使用异常时，先暂停并联系 [[/contact|客服]]，别跳过验证步骤。" },
      { en: "Transparent security language is an EEAT requirement for a TPOWER Guide that aims to rank for competitive brand queries. Claims without explanation erode trust; linked explanations on dedicated pages strengthen it.", zh: "对想在竞争品牌词排名的 TPOWER 攻略而言，安全表述透明是信任要求。没解释的主张会损信任；专属页面上的链接说明会强化信任。" },
    ],
    relatedLinks: [
      { href: "/security", label: { en: "Security page", zh: "安全页面" } },
      { href: "/login", label: { en: "Secure login habits", zh: "安全登录习惯" } },
      { href: "/faq", label: { en: "Security FAQ", zh: "安全常见问题" } },
    ],
  },
  {
    id: "privacy",
    title: { en: "TPOWER Privacy and Data Practices", zh: "TPOWER隐私与资料怎么处理？" },
    paragraphs: [
      { en: "Privacy is part of why adult players evaluate TPOWER Malaysia carefully. The [[/privacy|Privacy Policy]] describes what categories of information may be processed for account operation, support, and compliance needs. Pair that reading with [[/cookies|Cookie Policy]] to understand site measurement and preference storage on the marketing website.", zh: "隐私是成年玩家谨慎评估 TPOWER 马来西亚的原因之一。[[/privacy|隐私政策]] 说明为账户运营、客服和合规可能处理哪些信息。搭配 [[/cookies|Cookie 政策]] 阅读，了解营销站的测量和偏好存储。" },
      { en: "Data practices should stay aligned with account ownership: keep profile details accurate, limit credential sharing, and use [[/contact|Contact]] for privacy-related requests when the policy provides a channel. Editorial pages do not replace legal documents; they point you to them.", zh: "资料实践应与账户归属一致：保持资料准确、少分享凭证，政策有渠道时通过 [[/contact|联系客服]] 提出隐私请求。编辑页不能替代法律文件，只是指引你去读。" },
      { en: "For a full legal set, also review [[/terms|Terms and Conditions]]. Together, privacy, cookies, terms, and security pages form the compliance backbone behind the TPOWER Online Casino public experience.", zh: "完整法律集合还包括 [[/terms|条款与条件]]。隐私、Cookie、条款和安全页面，共同构成 TPOWER线上博彩 公开体验背后的合规骨架。" },
    ],
    relatedLinks: [
      { href: "/privacy", label: { en: "Privacy policy", zh: "隐私政策" } },
      { href: "/cookies", label: { en: "Cookie policy", zh: "Cookie 政策" } },
      { href: "/terms", label: { en: "Terms", zh: "条款" } },
    ],
  },
  {
    id: "responsible",
    title: { en: "Responsible Gaming at TPOWER", zh: "TPOWER负责任博彩说明" },
    paragraphs: [
      { en: "Responsible Gaming at TPOWER is non-negotiable infrastructure. The [[/responsible-gaming|Responsible Gaming page]] explains adult-only access, budgeting mindset, deposit limits, reality checks, time-outs, and self-exclusion pathways. Entertainment on TPOWER Casino should remain optional paid leisure—not a financial plan.", zh: "TPOWER 负责任博彩 是不可妥协的基础。[[/responsible-gaming|负责任博彩页面]] 说明仅限成人、预算心态、存款限额、现实提醒、冷静期和自我排除。在 TPOWER线上博彩 的娱乐应保持可选付费休闲，不是财务计划。" },
      { en: "If promotions, sports fixtures, or live tables increase intensity, return to controls before increasing stakes. Support via [[/contact|Contact]] can help route safer-play requests. FAQ entries on [[/faq|FAQ]] also answer common control questions without marketing language.", zh: "若优惠、赛事或真人桌让强度升高，加注前先回到控制工具。通过 [[/contact|客服]] 可引导更安全娱乐请求。[[/faq|常见问题]] 也以非营销语气回答常见控制问题。" },
      { en: "Search visibility for TPOWER means little if player wellbeing is ignored. This pillar page therefore keeps responsible gaming adjacent to register, deposit, and bonus sections—exactly where decision pressure often appears.", zh: "若忽视玩家福祉，TPOWER 搜索可见度毫无意义。因此本支柱页把负责任博彩放在注册、入金和优惠旁边——决策压力常出现的位置。" },
    ],
    relatedLinks: [
      { href: "/responsible-gaming", label: { en: "Responsible gaming", zh: "负责任博彩" } },
      { href: "/faq", label: { en: "Helpful FAQ", zh: "实用常见问题" } },
      { href: "/contact", label: { en: "Ask for help", zh: "寻求帮助" } },
    ],
  },
  {
    id: "editorial",
    title: { en: "TPOWER Editorial Policy and Content Freshness", zh: "TPOWER内容怎么保持更新？" },
    paragraphs: [
      { en: "EEAT for TPOWER Guide content depends on editorial discipline. The [[/editorial-policy|Editorial Policy]] explains how articles and news are reviewed, how product changes trigger updates, and how promotional independence is handled so education is not confused with temporary offers.", zh: "TPOWER 攻略内容的信任度，取决于编辑纪律。[[/editorial-policy|编辑政策]] 说明文章和资讯如何审阅、产品变更如何触发更新，以及如何处理优惠独立性，避免教育内容与临时活动混淆。" },
      { en: "Content freshness is visible through updated timestamps on [[/blog|Blog]] and [[/news|News]] items, plus ongoing platform notes about cashier, lobby, or live capacity changes. When a guide mentions Login, Download, or Payments, internal links keep readers on canonical destinations instead of outdated screenshots alone.", zh: "内容新鲜度体现在 [[/blog|博客]] 和 [[/news|资讯]] 的更新时间戳，以及收银台、大厅或真人容量变化的持续说明。指南提到登录、下载或支付时，内链把读者留在规范页面，而不是只看过时截图。" },
      { en: "Provider transparency and legal clarity complete the trust stack: [[/providers|Providers]], [[/security|Security]], [[/privacy|Privacy]], [[/terms|Terms]], and [[/about|About]] should be read as a set. That is how a homepage earns authority for the keyword TPOWER without inventing awards or unverifiable superlatives.", zh: "厂商透明和法律清晰补全信任栈：[[/providers|游戏厂商]]、[[/security|安全]]、[[/privacy|隐私]]、[[/terms|条款]] 和 [[/about|关于]] 应成套阅读。首页正是这样在不为 TPOWER 编造奖项或无法核实最高级表述的情况下赢得权威。" },
      { en: "If you are researching TPOWER for the first time, treat this homepage as the index and the linked pages as evidence. Authority is built by consistent facts across Login, Register, Download, Promotions, Payments, Providers, VIP, Security, and Responsible Gaming—not by a single marketing sentence repeated on every URL.", zh: "若首次研究 TPOWER，把本首页当索引，链接页当证据。权威来自登录、注册、下载、优惠、支付、厂商、VIP、安全和负责任博彩之间一致的事实，不是在每个 URL 重复同一句营销话术。" },
    ],
    relatedLinks: [
      { href: "/editorial-policy", label: { en: "Editorial policy", zh: "编辑政策" } },
      { href: "/blog", label: { en: "Latest guides", zh: "最新攻略" } },
      { href: "/news", label: { en: "Latest news", zh: "最新资讯" } },
    ],
  },
];

export const homepageSeoFaqs = [
  {
    question: { en: "How do I complete TPOWER Login safely?", zh: "TPOWER怎么安全登录？" },
    answer: { en: "For TPOWER Login, start on the official Login guide on this website, bookmark only trusted TPOWER URLs, and follow the detailed TPOWER login article in the Blog for credential hygiene. Never share one-time codes with anyone claiming to be support outside documented Contact channels. If you do not have an account yet, complete TPOWER Register first.", zh: "安全登录请从本站官方登录指南开始，只收藏可信的 TPOWER 网址，并参考博客详细登录攻略做好密码和验证码管理。别向不在官方客服渠道的人分享验证码。还没账号的，先完成 TPOWER注册。" },
  },
  {
    question: { en: "What should I know before TPOWER Register?", zh: "TPOWER注册前要准备什么？" },
    answer: { en: "TPOWER Register is for eligible adults who can provide accurate personal details for verification and later TPOWER Withdrawal requests. Read the registration guide page and the How to register TPOWER blog walkthrough, then review Responsible Gaming and Payment Methods before making a TPOWER Deposit.", zh: "TPOWER注册 面向能提供真实资料、方便日后验证和提现的成年玩家。先看注册指南和博客注册教程，入金前再读负责任博彩和支付方式。" },
  },
  {
    question: { en: "Where can I find TPOWER Download for the official app?", zh: "TPOWER怎么下载APP？" },
    answer: { en: "Open the TPOWER Download page for Android and iOS orientation, then use the How to download TPOWER and TPOWER mobile app guides for install checklists. Prefer those official paths over unverified file shares, then return to TPOWER Login with your registered account.", zh: "打开 TPOWER APP下载 页了解 Android 和 iOS 指引，再用下载教程和手机版说明对照安装清单。优先走官方路径，别装不明包，然后用已注册账号登录。" },
  },
  {
    question: { en: "Is TPOWER APK the same as the official TPOWER App?", zh: "TPOWER APK 和官方 App 一样吗？" },
    answer: { en: "TPOWER APK guidance on this site explains Android package installation considerations and points to official TPOWER App orientation pages. Always treat package sources carefully, follow the APK page plus Download guides, and sign in only after you trust the install path.", zh: "本站 TPOWER APK 指引说明 Android 安装包注意事项，并指向官方 App 说明页。请谨慎对待安装来源，按 APK 页和下载教程操作，确认路径可信后再登录。" },
  },
  {
    question: { en: "Is TPOWER Malaysia focused on local players?", zh: "TPOWER是面向马来西亚玩家的吗？" },
    answer: { en: "Yes. TPOWER Malaysia positioning emphasises local payment familiarity, bilingual English and Chinese support, and guides written for Malaysian player journeys across TPOWER Login, Register, Download, Deposit, Withdrawal, Promotions, and VIP.", zh: "是的。TPOWER 马来西亚定位强调本地支付好懂、中英双语客服，以及覆盖登录、注册、下载、充值、提现、优惠和 VIP 的本地玩家指南。" },
  },
  {
    question: { en: "How do TPOWER Promotions and TPOWER Bonus offers work?", zh: "TPOWER有哪些优惠？怎么领？" },
    answer: { en: "Open the TPOWER Promotions hub to compare welcome, reload, cashback, VIP, and seasonal offers. Read wagering, contribution, and expiry terms on each detail page before opting in so a TPOWER Bonus matches your game mix—slots, live casino, or sports—and your entertainment budget.", zh: "打开 TPOWER优惠 专区比较欢迎礼、再存、返水、VIP 和季节性活动。领取前在详情页看流水、贡献和到期条款，让红利匹配你的玩法组合（老虎机、真人视讯或体育）和娱乐预算。" },
  },
  {
    question: { en: "Which TPOWER Deposit methods are commonly used?", zh: "TPOWER支持哪些充值方式？" },
    answer: { en: "For TPOWER Deposit, Payment Methods outlines local rails such as bank transfer pathways, FPX-style options, and popular e-wallets depending on availability. Follow the deposit blog guide for sequencing and keep beneficiary details matched to your verified TPOWER account before you request a later withdrawal.", zh: "TPOWER充值 常见有银行转账、FPX 类选项和主流电子钱包，视可用性而定。跟博客入金教程逐步操作，提现前保持收款资料与已验证 TPOWER 账户一致。" },
  },
  {
    question: { en: "How does the TPOWER Withdrawal process work?", zh: "TPOWER提现要多久？流程怎样？" },
    answer: { en: "The TPOWER Withdrawal process depends on verification status, matching payout ownership, and banking windows. Read the withdrawal guide, confirm Payment Methods expectations, and contact support with precise details if a request needs follow-up. VIP members may receive priority review where applicable, but every account benefits from clean KYC.", zh: "TPOWER 提现看验证状态、出款归属是否匹配和银行窗口。先看提现教程，确认支付方式预期；需跟进时联系客服并提供准确细节。VIP 可能优先审，但每个账户都受益于完整 KYC。" },
  },
  {
    question: { en: "Where can I play TPOWER Slot and Live Casino games?", zh: "TPOWER老虎机和真人视讯在哪玩？" },
    answer: { en: "Use the TPOWER Slot and Live Casino category pages for orientation, then explore TPOWER Providers for studio context such as Pragmatic Play, PG Soft, and Evolution. The Games hub links these shelves together for TPOWER Online Casino browsing.", zh: "先看 TPOWER 老虎机和真人视讯分类页，再到游戏厂商了解 Pragmatic Play、PG电子、Evolution 等背景。游戏大厅把这些专区连起来，方便浏览 TPOWER线上博彩。" },
  },
  {
    question: { en: "Does TPOWER include a sportsbook?", zh: "TPOWER有体育博彩吗？" },
    answer: { en: "Yes. The Sports category covers TPOWER Sportsbook-style markets with a football-first emphasis and mobile readability. Review Responsible Gaming and payment readiness before wagering on fixtures, and check TPOWER Promotions for any sports-related offers with published terms.", zh: "有的。体育专区覆盖足球优先、手机好读的盘口。对赛事下注前，先看负责任博彩和支付准备，并查 TPOWER优惠 是否有公布条款的体育相关活动。" },
  },
  {
    question: { en: "What is included in the TPOWER VIP programme?", zh: "TPOWER VIP怎么升？有什么好处？" },
    answer: { en: "The TPOWER VIP Club page explains tiered benefits and host-assisted service for higher levels. TPOWER VIP rewards still require healthy account standing and should be combined with personal deposit limits and clear TPOWER Bonus or promotion terms.", zh: "TPOWER VIP 俱乐部页说明分级权益和更高等级的管家服务。VIP 奖励仍要良好账户状态，并搭配个人存款限额和清楚的优惠条款。" },
  },
];

export const homepageGuideLinks = [
  { href: "/blog/tpower-login-guide", label: { en: "TPOWER login guide", zh: "TPOWER 登录攻略" } },
  { href: "/blog/how-to-register-tpower", label: { en: "How to register TPOWER", zh: "TPOWER 注册教程" } },
  { href: "/blog/how-to-download-tpower", label: { en: "How to download TPOWER", zh: "TPOWER 下载教程" } },
  { href: "/blog/tpower-mobile-app", label: { en: "TPOWER mobile app", zh: "TPOWER 手机版说明" } },
  { href: "/blog/how-to-deposit-tpower", label: { en: "How to deposit into TPOWER", zh: "TPOWER 入金教程" } },
  { href: "/blog/how-to-withdraw-tpower", label: { en: "How to withdraw from TPOWER", zh: "TPOWER 提现教程" } },
];

export const homepageHubLinks = [
  { href: "/login", label: { en: "Login", zh: "登录" } },
  { href: "/register", label: { en: "Register", zh: "立即注册" } },
  { href: "/download", label: { en: "Download", zh: "APP下载" } },
  { href: "/apk", label: { en: "APK", zh: "APK" } },
  { href: "/promotions", label: { en: "Promotions", zh: "领取优惠" } },
  { href: "/games", label: { en: "Games", zh: "游戏大厅" } },
  { href: "/slots", label: { en: "Slots", zh: "老虎机" } },
  { href: "/live-casino", label: { en: "Live casino", zh: "真人视讯" } },
  { href: "/sports", label: { en: "Sports", zh: "体育博彩" } },
  { href: "/providers", label: { en: "Providers", zh: "游戏厂商" } },
  { href: "/vip", label: { en: "VIP", zh: "VIP" } },
  { href: "/payment-methods", label: { en: "Payment methods", zh: "支付方式" } },
  { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  { href: "/news", label: { en: "News", zh: "最新资讯" } },
  { href: "/blog", label: { en: "Blog", zh: "博客攻略" } },
  { href: "/contact", label: { en: "Contact", zh: "联系客服" } },
  { href: "/security", label: { en: "Security", zh: "安全" } },
  { href: "/privacy", label: { en: "Privacy", zh: "隐私" } },
  { href: "/responsible-gaming", label: { en: "Responsible gaming", zh: "负责任博彩" } },
  { href: "/editorial-policy", label: { en: "Editorial policy", zh: "编辑政策" } },
];
