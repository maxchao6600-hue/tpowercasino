/**
 * Generates src/data/homepage-seo.ts with long-form pillar content.
 * Run: node scripts/build-homepage-seo.mjs
 */
import fs from "node:fs";
import path from "node:path";

const L = (en, zh) => ({ en, zh });

const blocks = [
  {
    id: "what-is",
    title: L("What is TPOWER Online Casino?", "什么是 TPOWER Online Casino？"),
    paragraphs: [
      L(
        "TPOWER Online Casino is a Malaysia-focused digital entertainment platform that brings slots, live tables, sports markets, and specialty games into one coherent product experience. When people search for TPOWER, they are usually looking for a clear explanation of what the platform offers, how accounts work, and which pages to open next. This homepage is designed as that central guide: a topical authority page for TPOWER Casino Malaysia rather than a thin brochure.",
        "TPOWER Online Casino 是面向马来西亚的数字娱乐平台，将老虎机、真人桌、体育盘口与特色游戏整合为连贯的产品体验。当人们搜索 TPOWER 时，通常希望清楚了解平台提供什么、账户如何运作，以及下一步应打开哪些页面。本首页即作为该中心指南：面向 TPOWER Casino Malaysia 的主题权威页，而非单薄宣传册。",
      ),
      L(
        "The official TPOWER website organises the player journey around practical destinations. New visitors can move from orientation into [[/register|TPOWER Register]], returning players can open [[/login|TPOWER Login]], and mobile users can follow [[/download|TPOWER Download]] or [[/apk|TPOWER APK]] guidance. Category hubs such as [[/games|Games]], [[/slots|Slots]], [[/live-casino|Live Casino]], and [[/sports|Sports]] explain entertainment styles before a player commits funds.",
        "官方 TPOWER 网站围绕实用去向组织玩家旅程。新访客可从概览进入 [[/register|TPOWER 注册]]，回访玩家可打开 [[/login|TPOWER 登录]]，移动用户可跟随 [[/download|TPOWER 下载]] 或 [[/apk|TPOWER APK]] 指引。[[/games|游戏]]、[[/slots|老虎机]]、[[/live-casino|真人娱乐]] 与 [[/sports|体育]] 等分类中心会在玩家投入资金前说明娱乐风格。",
      ),
      L(
        "TPOWER is presented here with an emphasis on clarity, local payment familiarity, bilingual support, and responsible adult entertainment. The platform is not described with exaggerated global rankings. Instead, this guide explains structure: providers, promotions, VIP pathways, security posture, and the editorial pages that keep TPOWER Malaysia information fresh and accountable.",
        "此处呈现的 TPOWER 强调清晰度、本地支付熟悉度、双语支持与负责任的成年娱乐。平台不以夸张的全球排名来描述。本指南说明结构：供应商、优惠、VIP 路径、安全姿态，以及保持 TPOWER 马来西亚信息新鲜且可问责的编辑页面。",
      ),
      L(
        "Think of this page as the TPOWER Guide hub: a single place to understand the brand keyword TPOWER, then branch into product actions and educational articles without losing context.",
        "请将本页视为 TPOWER 指南中心：在一个地方理解品牌关键词 TPOWER，然后在不丢失上下文的情况下分支到产品动作与教育文章。",
      ),
      L(
        "From a search perspective, TPOWER is a brand query with high commercial intent. People who type the keyword often want confirmation that they have reached the right destination, then a short path into Login, Register, Download, or Payments. By answering those intents on one pillar page—and linking deeply into supporting URLs—this homepage strengthens topical authority for TPOWER Online Casino Malaysia without inventing awards or unverifiable rankings.",
        "从搜索角度看，TPOWER 是带有高商业意图的品牌查询。输入该关键词的人通常希望确认自己到达了正确目的地，然后快速进入登录、注册、下载或支付。通过在一个支柱页上回答这些意图——并深度链接到支持 URL——本首页在不为编造奖项或无法核实排名的情况下，强化 TPOWER Online Casino Malaysia 的主题权威。",
      ),
    ],
    relatedLinks: [
      { href: "/about", label: L("About TPOWER", "关于 TPOWER") },
      { href: "/games", label: L("Browse games", "浏览游戏") },
      { href: "/faq", label: L("FAQ", "常见问题") },
    ],
  },
  {
    id: "why-malaysia",
    title: L("Why TPOWER Malaysia is Popular", "为何 TPOWER 马来西亚受欢迎"),
    paragraphs: [
      L(
        "Interest in TPOWER Malaysia often comes from players who want a product that matches local habits: recognised payment rails, English and Chinese support, and mobile-first access during evening peak hours. Popularity in search terms does not require hype. It requires useful answers about deposits, withdrawals, game categories, and how to reach the lobby safely through official channels.",
        "对 TPOWER 马来西亚的兴趣，往往来自希望产品贴合本地习惯的玩家：可识别的支付通道、中英文支持，以及晚间高峰时段的移动优先访问。搜索热度不需要炒作，而需要关于存款、提款、游戏分类，以及如何通过官方渠道安全进入大厅的有用答案。",
      ),
      L(
        "On this site, Malaysia relevance is reinforced through [[/payment-methods|Payment Methods]], bilingual [[/contact|Contact]] routes, and guides that walk through register, login, and app install steps. Players comparing options can review [[/promotions|TPOWER Promotions]], check [[/providers|TPOWER Providers]], and read [[/news|News]] for platform updates without leaving the TPOWER topic cluster.",
        "在本站，马来西亚相关性通过 [[/payment-methods|支付方式]]、双语 [[/contact|联系]] 路径，以及注册、登录与应用安装指南得到强化。比较选项的玩家可查看 [[/promotions|TPOWER 优惠]]、检查 [[/providers|TPOWER 供应商]]，并阅读 [[/news|新闻]] 了解平台更新，而无需离开 TPOWER 主题集群。",
      ),
      L(
        "Another reason TPOWER remains searchable is information architecture. Clean URLs, unique page titles, FAQ blocks, and internal links between the homepage, blog guides, and product hubs help both users and search engines understand that TPOWER Online Casino is a coherent destination for Malaysia players—not a scattered set of keyword pages.",
        "TPOWER 保持可搜索性的另一原因是信息架构。干净的 URL、独特页面标题、FAQ 区块，以及首页、博客指南与产品中心之间的内链，帮助用户与搜索引擎理解：TPOWER Online Casino 是面向马来西亚玩家的连贯目的地——而非零散的关键词页面集合。",
      ),
      L(
        "Local peak-hour behaviour also shapes product expectations. Many Malaysia players browse on mobile after work, switch between slots and live tables during the same evening, and expect cashier states that remain readable on smaller screens. The TPOWER platform documentation on this site therefore treats mobile install pages, payment explainers, and category hubs as equal parts of the Malaysia experience—not secondary footnotes.",
        "本地高峰行为也塑造产品预期。许多马来西亚玩家下班后在手机上浏览，同一晚在老虎机与真人桌之间切换，并期望收银台状态在较小屏幕上仍然可读。因此本站上的 TPOWER 平台文档将移动安装页、支付说明与分类中心视为马来西亚体验的同等组成部分——而不是次要脚注。",
      ),
    ],
    relatedLinks: [
      { href: "/payment-methods", label: L("Payment methods", "支付方式") },
      { href: "/contact", label: L("Contact support", "联系支持") },
      { href: "/news", label: L("Latest news", "最新新闻") },
    ],
  },
  {
    id: "register",
    title: L("How to Register a TPOWER Account", "如何注册 TPOWER 账户"),
    paragraphs: [
      L(
        "TPOWER Register is the formal start of the account journey. Eligible adults should begin on the [[/register|registration guide page]], where expectations around identity accuracy, contact verification, and responsible play are explained before any deposit. Accurate details matter because they protect the account and reduce friction later during withdrawals.",
        "TPOWER 注册是账户旅程的正式起点。符合资格的成年人应先从 [[/register|注册指南页]] 开始，该页在任何存款前说明身份准确性、联系方式验证与负责任娱乐的期望。准确资料很重要，因为它保护账户，并在日后提款时减少摩擦。",
      ),
      L(
        "For a step-by-step walkthrough, open the blog article [[/blog/how-to-register-tpower|How to register TPOWER]]. That guide complements the register page with practical sequencing: create credentials, confirm contact channels, review terms, and only then explore [[/promotions|TPOWER Bonus]] offers or [[/payment-methods|deposit options]]. Registration is not a race; it is a controlled onboarding path.",
        "如需逐步流程，请打开博客文章 [[/blog/how-to-register-tpower|如何注册 TPOWER]]。该指南补充注册页的实用顺序：创建凭证、确认联系渠道、审阅条款，然后才探索 [[/promotions|TPOWER 红利]] 优惠或 [[/payment-methods|存款选项]]。注册不是竞赛，而是受控的入门路径。",
      ),
      L(
        "After registration, many players immediately look for TPOWER Login and mobile install instructions. Keep those journeys linked: return to [[/login|Login]] when you already have an account, or continue to [[/download|Download]] if you prefer the TPOWER App experience on Android or iOS.",
        "注册后，许多玩家会立即寻找 TPOWER 登录与移动安装说明。请保持这些旅程相连：若已有账户请返回 [[/login|登录]]；若更偏好 Android 或 iOS 上的 TPOWER App 体验，则继续前往 [[/download|下载]]。",
      ),
      L(
        "Registration quality also affects later TPOWER Withdrawal success. Matching bank or e-wallet ownership to the account profile reduces unnecessary review cycles. Before you create credentials, skim [[/terms|Terms]], [[/privacy|Privacy]], and [[/responsible-gaming|Responsible Gaming]] so consent and safer-play expectations are understood up front.",
        "注册质量也会影响日后 TPOWER 提款是否顺利。使银行或电子钱包归属与账户资料一致，可减少不必要的审核循环。创建凭证前，请浏览 [[/terms|条款]]、[[/privacy|隐私]] 与 [[/responsible-gaming|负责任博彩]]，以便事先理解同意与更安全娱乐的预期。",
      ),
    ],
    relatedLinks: [
      { href: "/register", label: L("Register guide", "注册指南") },
      {
        href: "/blog/how-to-register-tpower",
        label: L("Registration walkthrough", "注册流程文章"),
      },
      { href: "/login", label: L("Login next", "下一步登录") },
    ],
  },
  {
    id: "login",
    title: L("How to Login to TPOWER", "如何登录 TPOWER"),
    paragraphs: [
      L(
        "TPOWER Login is one of the highest-intent actions on the platform. Use the [[/login|login guide]] for the official orientation path, then follow [[/blog/tpower-login-guide|the TPOWER login guide]] if you need troubleshooting context such as credential hygiene, session security, or what to do when access fails.",
        "TPOWER 登录是平台上意图最高的动作之一。请使用 [[/login|登录指南]] 了解官方导向路径；若需要凭证安全、会话保护或访问失败应对等排障上下文，请跟随 [[/blog/tpower-login-guide|TPOWER 登录指南]]。",
      ),
      L(
        "A healthy login habit on TPOWER Casino Malaysia includes using official bookmarks only, avoiding third-party APK mirrors, and confirming that support requests go through [[/contact|Contact]] or documented help channels. If you are new, complete [[/register|registration]] first. If you already play on mobile, pair login with the [[/download|TPOWER App]] so sessions stay consistent across devices.",
        "在 TPOWER Casino Malaysia 上保持健康的登录习惯包括：仅使用官方书签、避免第三方 APK 镜像，并确认支持请求通过 [[/contact|联系]] 或已记录的帮助渠道进行。若您是新用户，请先完成 [[/register|注册]]。若您已在移动端游玩，请将登录与 [[/download|TPOWER App]] 配对，使会话跨设备保持一致。",
      ),
      L(
        "Login is also the gateway to personalised areas such as promotions activation, VIP messaging, and cashier history. After signing in through the product, return to this site for evergreen education: [[/faq|FAQ]], [[/promotions|Promotions]], and [[/responsible-gaming|Responsible Gaming]] remain useful even for experienced players.",
        "登录也是进入个性化区域的门户，例如优惠激活、VIP 消息与收银台历史。通过产品登录后，仍可回到本站获取常青教育：即使对资深玩家，[[/faq|常见问题]]、[[/promotions|优惠]] 与 [[/responsible-gaming|负责任博彩]] 仍然有用。",
      ),
      L(
        "If login fails after a password reset or device change, do not improvise with community shortcuts. Re-check the official URL, confirm you are not on a cloned page, and escalate through documented [[/contact|support]] with the exact error timing. That approach protects both the account and the integrity of TPOWER Login as a trusted entry point.",
        "若在密码重置或更换设备后登录失败，请不要用社区捷径临时应付。请重新核对官方 URL，确认您不在仿冒页面上，并通过已记录的 [[/contact|支持]] 提供确切错误时间进行升级。该做法同时保护账户，以及作为可信入口的 TPOWER 登录的完整性。",
      ),
    ],
    relatedLinks: [
      { href: "/login", label: L("Login guide", "登录指南") },
      {
        href: "/blog/tpower-login-guide",
        label: L("Detailed login article", "详细登录文章"),
      },
      { href: "/faq", label: L("Account FAQ", "账户常见问题") },
    ],
  },
  {
    id: "download",
    title: L("How to Download TPOWER App", "如何下载 TPOWER App"),
    paragraphs: [
      L(
        "TPOWER Download covers the official path to the TPOWER App for Android and iOS. Start at the [[/download|Download page]], which explains platform choice, install expectations, and how desktop visitors can use a QR path to continue on a phone. The companion article [[/blog/how-to-download-tpower|How to download TPOWER]] adds a practical checklist for first-time installs.",
        "TPOWER 下载覆盖 Android 与 iOS 上 TPOWER App 的官方路径。请从 [[/download|下载页面]] 开始，该页说明平台选择、安装预期，以及桌面访客如何通过二维码路径在手机上继续。配套文章 [[/blog/how-to-download-tpower|如何下载 TPOWER]] 为首次安装提供实用清单。",
      ),
      L(
        "Mobile quality is part of why players search for the TPOWER App. A calm lobby, readable cashier states, and stable category browsing matter as much as raw game count. For product context beyond installation, read [[/blog/tpower-mobile-app|TPOWER mobile app]]. Always prefer documented official channels over unverified file shares.",
        "移动体验质量是玩家搜索 TPOWER App 的原因之一。冷静的大厅、可读的收银台状态与稳定的分类浏览，与单纯的游戏数量同样重要。除安装之外的产品背景，请阅读 [[/blog/tpower-mobile-app|TPOWER 移动应用]]。请始终优先选择已记录的官方渠道，而非未经验证的文件分享。",
      ),
      L(
        "If Android package guidance is what you need, continue to the [[/apk|TPOWER APK]] section below and the dedicated APK page. After install, return to [[/login|TPOWER Login]] with the same account you created through [[/register|Register]].",
        "若您需要 Android 安装包指引，请继续阅读下方 [[/apk|TPOWER APK]] 部分与专属 APK 页面。安装后，使用您通过 [[/register|注册]] 创建的同一账户返回 [[/login|TPOWER 登录]]。",
      ),
    ],
    relatedLinks: [
      { href: "/download", label: L("Download page", "下载页面") },
      { href: "/apk", label: L("APK guidance", "APK 指引") },
      {
        href: "/blog/tpower-mobile-app",
        label: L("Mobile app overview", "移动应用概览"),
      },
    ],
  },
  {
    id: "apk",
    title: L("TPOWER APK Installation Guide", "TPOWER APK 安装指南"),
    paragraphs: [
      L(
        "TPOWER APK searches usually mean a player wants Android package clarity: where to obtain an install file safely, what permissions mean, and how the package relates to the official app experience. Use the [[/apk|APK guidance page]] for honest install orientation, then cross-check steps in [[/blog/how-to-download-tpower|the download guide]].",
        "搜索 TPOWER APK 通常表示玩家希望弄清 Android 安装包：如何安全获取安装文件、权限意味着什么，以及安装包与官方应用体验的关系。请使用 [[/apk|APK 指引页]] 获取诚实的安装导向，并在 [[/blog/how-to-download-tpower|下载指南]] 中交叉核对步骤。",
      ),
      L(
        "Treat APK installation as a security decision. Prefer official TPOWER paths documented on this website, avoid renamed mirrors, and confirm you are not entering credentials on lookalike pages. After installation, sign in through the product and keep educational bookmarks to [[/security|Security]], [[/faq|FAQ]], and [[/contact|Contact]] for later support.",
        "请将 APK 安装视为安全决策。优先使用本站记录的官方 TPOWER 路径，避免更名镜像，并确认不要在仿冒页面输入凭证。安装后通过产品登录，并保留指向 [[/security|安全]]、[[/faq|常见问题]] 与 [[/contact|联系]] 的教育书签以便日后支持。",
      ),
      L(
        "APK guidance on this marketing site is informational. It does not replace the live product’s own install prompts. When in doubt, start from [[/download|TPOWER Download]] and the [[/blog/tpower-mobile-app|mobile app article]] before changing device install permissions.",
        "本营销站点上的 APK 指引仅供信息参考，不能替代实时产品自身的安装提示。如有疑虑，请在更改设备安装权限之前，先从 [[/download|TPOWER 下载]] 与 [[/blog/tpower-mobile-app|移动应用文章]] 开始。",
      ),
    ],
    relatedLinks: [
      { href: "/apk", label: L("APK page", "APK 页面") },
      { href: "/download", label: L("Download hub", "下载中心") },
      { href: "/security", label: L("Security overview", "安全概览") },
    ],
  },
  {
    id: "casino-games",
    title: L("TPOWER Casino Games", "TPOWER 娱乐场游戏"),
    paragraphs: [
      L(
        "TPOWER Casino games are organised so players can choose by style instead of scrolling endless unstructured grids. The [[/games|Games hub]] introduces the catalogue logic, while dedicated shelves cover [[/slots|slots]], [[/live-casino|live casino]], [[/sports|sports]], fishing, lottery, poker, arcade, and crash formats. This structure helps TPOWER Online Casino stay understandable for first-time Malaysia visitors.",
        "TPOWER 娱乐场游戏的组织方式，使玩家可按风格选择，而不是在无结构的网格中无限滚动。[[/games|游戏中心]] 介绍目录逻辑，而专属货架覆盖 [[/slots|老虎机]]、[[/live-casino|真人娱乐]]、[[/sports|体育]]、捕鱼、彩票、扑克、街机与爆点格式。该结构帮助 TPOWER Online Casino 对马来西亚首次访客保持可理解。",
      ),
      L(
        "Curation matters more than inflated counts. The TPOWER platform emphasises readable category pages, provider attribution, and links into [[/providers|provider profiles]] so players know which studio powers a title before they register. From games, you can also move into [[/promotions|promotions]] that may apply to selected categories, always checking terms first.",
        "精选比膨胀数量更重要。TPOWER 平台强调可读的分类页、供应商归属，以及指向 [[/providers|供应商资料]] 的链接，使玩家在注册前知道作品由哪个工作室驱动。从游戏区也可进入可能适用于特定分类的 [[/promotions|优惠]]，并始终先查看条款。",
      ),
      L(
        "If you are exploring TPOWER as a complete casino destination, combine the games map with payment readiness on [[/payment-methods|Payment Methods]] and safer-play planning on [[/responsible-gaming|Responsible Gaming]]. Entertainment value improves when bankroll rules are decided before the first session.",
        "若您将 TPOWER 作为完整娱乐场目的地来探索，请将游戏地图与 [[/payment-methods|支付方式]] 上的支付准备，以及 [[/responsible-gaming|负责任博彩]] 上的更安全娱乐规划结合起来。在第一场开始前定好资金规则，娱乐价值会更高。",
      ),
      L(
        "The same map also supports SEO clarity. When someone searches TPOWER Casino, the homepage can explain the full catalogue shape, then hand off to specialised URLs for slots, live, and sports. That hub-and-spoke model is how a brand pillar page earns relevance without stuffing every keyword into a single paragraph.",
        "同一张地图也支持 SEO 清晰度。当有人搜索 TPOWER Casino 时，首页可以解释完整目录形态，再交接给老虎机、真人与体育的专属 URL。这种中心辐射模型，正是品牌支柱页在不把每个关键词塞进同一段文字的情况下赢得相关性的方式。",
      ),
    ],
    relatedLinks: [
      { href: "/games", label: L("All games", "全部游戏") },
      { href: "/slots", label: L("Slots", "老虎机") },
      { href: "/live-casino", label: L("Live casino", "真人娱乐") },
      { href: "/sports", label: L("Sports", "体育") },
    ],
  },
  {
    id: "slots",
    title: L("TPOWER Slot Games", "TPOWER 老虎机游戏"),
    paragraphs: [
      L(
        "TPOWER Slot searches usually point to players who want video slots with clear themes, mobile performance, and known providers. Open [[/slots|TPOWER Slot Games]] to understand how the shelf is framed, then deepen studio context on pages such as Pragmatic Play and PG Soft inside [[/providers|Providers]].",
        "搜索 TPOWER Slot 的玩家通常希望找到主题清晰、移动性能良好且供应商知名的视频老虎机。请打开 [[/slots|TPOWER 老虎机游戏]] 了解货架如何呈现，再在 [[/providers|供应商]] 中深入 Pragmatic Play 与 PG Soft 等工作室背景。",
      ),
      L(
        "Slot sessions on the TPOWER platform should still follow entertainment budgeting. Use [[/blog/how-to-deposit-tpower|deposit guidance]] only after limits are clear, and review any [[/promotions|TPOWER Bonus]] wagering rules before opting into slot-related offers. Specialty formats nearby—arcade and crash—remain separate shelves so players are not forced into a single tempo.",
        "在 TPOWER 平台上的老虎机会话仍应遵循娱乐预算。仅在限额明确后使用 [[/blog/how-to-deposit-tpower|存款指引]]，并在选择加入老虎机相关优惠前审阅任何 [[/promotions|TPOWER 红利]] 流水规则。附近的街机与爆点等特色格式保持独立货架，以免玩家被单一节奏束缚。",
      ),
      L(
        "For discovery beyond one title, rotate between the slots category, provider landings, and [[/blog|Blog]] education articles. That pattern builds topical understanding of TPOWER Casino without relying on repetitive keyword blocks.",
        "若要超越单一作品进行发现，可在老虎机分类、供应商落地页与 [[/blog|博客]] 教育文章之间轮换。该模式能建立对 TPOWER Casino 的主题理解，而无需依赖重复的关键词堆砌。",
      ),
      L(
        "Players who prefer longer sessions should also watch battery, data, and session timers. The TPOWER App and browser lobby both benefit from deliberate breaks. Pair slot play with [[/responsible-gaming|responsible gaming]] tools so entertainment remains optional leisure rather than an obligation.",
        "偏好较长会话的玩家还应关注电量、流量与会话计时。TPOWER App 与浏览器大厅都受益于有意识的休息。请将老虎机游玩与 [[/responsible-gaming|负责任博彩]] 工具配对，使娱乐保持为可选取的休闲，而不是义务。",
      ),
    ],
    relatedLinks: [
      { href: "/slots", label: L("Slots category", "老虎机分类") },
      { href: "/providers", label: L("Slot providers", "老虎机供应商") },
      { href: "/promotions", label: L("Slot-related offers", "相关优惠") },
    ],
  },
  {
    id: "live",
    title: L("TPOWER Live Casino", "TPOWER 真人娱乐"),
    paragraphs: [
      L(
        "TPOWER Live Casino centres on studio-driven tables such as baccarat, blackjack, roulette, and selected game shows. The [[/live-casino|Live Casino page]] explains the experience for Malaysia evening peak hours, while provider pages for Evolution and related live studios expand topical depth under [[/providers|TPOWER Providers]].",
        "TPOWER 真人娱乐以演播驱动的桌台为中心，例如百家乐、二十一点、轮盘与精选游戏秀。[[/live-casino|真人娱乐页面]] 说明面向马来西亚晚间高峰的体验，而 Evolution 及相关真人工作室的供应商页则在 [[/providers|TPOWER 供应商]] 下扩展主题深度。",
      ),
      L(
        "Live play rewards patience and table selection more than speed clicking. Before entering a cashier for live sessions, confirm your account path via [[/login|Login]] or [[/register|Register]], and review [[/payment-methods|deposit methods]] that match your bank or e-wallet. News about table capacity can appear in [[/news|TPOWER News]].",
        "真人娱乐更奖励耐心与选桌，而非快速连点。进入真人会话的收银台之前，请通过 [[/login|登录]] 或 [[/register|注册]] 确认账户路径，并审阅与您的银行或电子钱包匹配的 [[/payment-methods|存款方式]]。关于桌台容量的消息可能出现在 [[/news|TPOWER 新闻]]。",
      ),
      L(
        "As with every TPOWER Casino Malaysia vertical, live entertainment should stay optional and budgeted. Pair live sessions with [[/responsible-gaming|responsible gaming]] tools whenever intensity rises beyond comfort.",
        "与 TPOWER Casino Malaysia 的每个垂直品类一样，真人娱乐应保持可选取并有预算。当强度超出舒适范围时，请将真人会话与 [[/responsible-gaming|负责任博彩]] 工具配对。",
      ),
    ],
    relatedLinks: [
      { href: "/live-casino", label: L("Live casino hub", "真人娱乐中心") },
      { href: "/providers", label: L("Live providers", "真人供应商") },
      { href: "/news", label: L("Platform news", "平台新闻") },
    ],
  },
  {
    id: "sports",
    title: L("TPOWER Sportsbook", "TPOWER 体育博彩"),
    paragraphs: [
      L(
        "TPOWER Sportsbook interest usually focuses on football-first markets and mobile readability. Visit [[/sports|Sports]] for the category overview, then use provider context where sports presentation is powered by specialised market partners listed under [[/providers|Providers]].",
        "对 TPOWER Sportsbook 的兴趣通常集中在足球优先盘口与移动可读性。请访问 [[/sports|体育]] 了解分类概览，并在 [[/providers|供应商]] 下查看由专业盘口合作方驱动的体育呈现背景。",
      ),
      L(
        "Sports betting on the TPOWER platform should be approached with the same account discipline as casino play: verified details, clear deposit sources, and pre-set limits. Educational paths include [[/blog/how-to-deposit-tpower|deposit tips]], [[/blog/how-to-withdraw-tpower|withdrawal tips]], and safer-play reminders on [[/responsible-gaming|Responsible Gaming]].",
        "在 TPOWER 平台上进行体育博彩，应与娱乐场游玩采用同样的账户纪律：已验证资料、清晰存款来源与预设限额。教育路径包括 [[/blog/how-to-deposit-tpower|存款提示]]、[[/blog/how-to-withdraw-tpower|提款提示]]，以及 [[/responsible-gaming|负责任博彩]] 上的更安全娱乐提醒。",
      ),
      L(
        "When major fixtures drive traffic to TPOWER Malaysia, this homepage remains the orientation layer. From here, jump to sports, promotions that may include sports-related offers, or [[/vip|VIP]] if host-assisted service is part of your tier pathway.",
        "当重要赛事为 TPOWER 马来西亚带来流量时，本首页仍是导向层。您可从这里跳到体育、可能包含体育相关优惠的促销，或在管家协助服务属于您的等级路径时前往 [[/vip|VIP]]。",
      ),
    ],
    relatedLinks: [
      { href: "/sports", label: L("Sportsbook category", "体育分类") },
      { href: "/promotions", label: L("Current promotions", "当前优惠") },
      { href: "/vip", label: L("VIP club", "VIP 俱乐部") },
    ],
  },
  {
    id: "promotions",
    title: L("TPOWER Promotions and Bonuses", "TPOWER 优惠与红利"),
    paragraphs: [
      L(
        "TPOWER Promotions and TPOWER Bonus queries should lead to readable terms, not headline theatre. The [[/promotions|Promotions hub]] surfaces welcome, reload, cashback, VIP, and seasonal offers with summaries and expiry context. Always open the detail page before opting in.",
        "关于 TPOWER 优惠与 TPOWER 红利的查询，应导向可读条款，而非标题表演。[[/promotions|优惠中心]] 展示欢迎、再存、返水、VIP 与季节性优惠，并提供摘要与到期上下文。选择加入前请务必打开详情页。",
      ),
      L(
        "Bonus value depends on wagering contribution, eligible games, and timing. A TPOWER Bonus that looks generous can still be a poor fit if slots contribution, live exclusions, or maximum cashout rules are ignored. Use this homepage as the map, then verify details on promotion pages and related [[/blog|Blog]] explainers.",
        "红利价值取决于流水贡献、合资格游戏与时间窗口。即使看起来丰厚的 TPOWER 红利，若忽略老虎机贡献、真人排除或最高兑付规则，仍可能并不合适。请以本首页为地图，再在优惠页面与相关 [[/blog|博客]] 说明中核实细节。",
      ),
      L(
        "Promotions connect tightly to money movement. After reviewing an offer, check [[/payment-methods|deposit methods]], read [[/blog/how-to-deposit-tpower|how to deposit into TPOWER]], and keep [[/responsible-gaming|responsible gaming]] limits active so bonuses never override personal controls.",
        "优惠与资金流动紧密相连。审阅优惠后，请检查 [[/payment-methods|存款方式]]，阅读 [[/blog/how-to-deposit-tpower|如何向 TPOWER 存款]]，并保持 [[/responsible-gaming|负责任博彩]] 限额启用，使红利永远不会覆盖个人控制。",
      ),
      L(
        "Seasonal calendars and VIP-linked rewards may change more often than evergreen guides. When an offer updates, prefer the live [[/promotions|Promotions]] listing and [[/news|News]] notes over screenshots shared elsewhere. That habit keeps TPOWER Promotions research accurate and reduces disputes caused by outdated terms.",
        "季节性日历与 VIP 关联奖励的变化频率，可能高于常青指南。当优惠更新时，请优先查看实时 [[/promotions|优惠]] 列表与 [[/news|新闻]] 说明，而不是别处分享的截图。该习惯能保持 TPOWER 优惠研究准确，并减少因过时条款引起的争议。",
      ),
    ],
    relatedLinks: [
      { href: "/promotions", label: L("All promotions", "全部优惠") },
      { href: "/vip", label: L("VIP rewards", "VIP 奖励") },
      { href: "/register", label: L("New player path", "新玩家路径") },
    ],
  },
  {
    id: "deposit",
    title: L("TPOWER Deposit Methods", "TPOWER 存款方式"),
    paragraphs: [
      L(
        "TPOWER Deposit intent is practical: which local rails work, what minimums to expect, and how to avoid mismatched beneficiary details. Start with [[/payment-methods|Payment Methods]], then follow [[/blog/how-to-deposit-tpower|How to deposit into TPOWER]] for a sequenced checklist covering e-wallets, FPX-style banking, and verification readiness.",
        "TPOWER 存款意图非常务实：哪些本地通道可用、预期最低限额是多少，以及如何避免收款资料不匹配。请从 [[/payment-methods|支付方式]] 开始，再跟随 [[/blog/how-to-deposit-tpower|如何向 TPOWER 存款]] 获取涵盖电子钱包、FPX 类银行与验证准备的顺序清单。",
      ),
      L(
        "Deposits on TPOWER Online Casino should match the verified account name wherever required. That discipline protects withdrawals later. If a method is temporarily unavailable, use [[/contact|Contact]] or [[/faq|FAQ]] rather than unofficial payment agents.",
        "在 TPOWER Online Casino 上的存款，应在要求时与已验证账户姓名一致。该纪律能保护日后的提款。若某方式暂时不可用，请使用 [[/contact|联系]] 或 [[/faq|常见问题]]，而不是非官方支付中介。",
      ),
      L(
        "After funding, players often jump to [[/games|games]] or [[/promotions|promotions]]. Pause first: confirm the cashier confirmation state, note any pending checks, and ensure your entertainment budget for the session is already decided.",
        "入金后，玩家往往会跳到 [[/games|游戏]] 或 [[/promotions|优惠]]。请先停顿：确认收银台确认状态，留意任何待处理检查，并确保本场娱乐预算已经决定。",
      ),
      L(
        "Deposit education belongs on the same topical map as Login and Register because funding is rarely the first click for a new visitor. Most people land on TPOWER, confirm legitimacy, create or open an account, then move money. Keeping those steps linked reduces drop-off and improves the usefulness of this homepage as a Malaysia-facing guide.",
        "存款教育应与登录、注册位于同一主题地图，因为对新访客而言，入金很少是第一次点击。大多数人先到达 TPOWER、确认可信度、创建或打开账户，然后才转移资金。保持这些步骤相连可减少流失，并提升本首页作为面向马来西亚指南的实用性。",
      ),
    ],
    relatedLinks: [
      { href: "/payment-methods", label: L("Payment methods", "支付方式") },
      {
        href: "/blog/how-to-deposit-tpower",
        label: L("Deposit guide", "存款指南"),
      },
      { href: "/faq", label: L("Payments FAQ", "支付常见问题") },
    ],
  },
  {
    id: "withdrawal",
    title: L("TPOWER Withdrawal Process", "TPOWER 提款流程"),
    paragraphs: [
      L(
        "TPOWER Withdrawal searches reflect a trust question: how funds leave the platform after play. Read [[/blog/how-to-withdraw-tpower|How to withdraw from TPOWER]] together with [[/payment-methods|Payment Methods]] so expectations around verification, beneficiary matching, and banking windows are clear before you request a payout.",
        "搜索 TPOWER 提款反映的是信任问题：游玩后资金如何离开平台。请将 [[/blog/how-to-withdraw-tpower|如何从 TPOWER 提款]] 与 [[/payment-methods|支付方式]] 一起阅读，以便在申请出款前清楚验证、受益人匹配与银行窗口等预期。",
      ),
      L(
        "Withdrawal speed on TPOWER Casino Malaysia depends on account standing, completed checks, and the chosen payout rail—not on slogan promises. VIP tiers may receive priority review as explained on [[/vip|VIP]], but every player benefits from clean KYC and consistent payment ownership details.",
        "TPOWER Casino Malaysia 的提款速度取决于账户状态、已完成检查与所选出款通道——而非口号承诺。[[/vip|VIP]] 说明更高等级可能获得优先审核，但每位玩家都能从完整 KYC 与一致的支付归属资料中受益。",
      ),
      L(
        "If a withdrawal is delayed, use [[/contact|Contact]] with precise timestamps and method details. Avoid sharing passwords or one-time codes with anyone claiming to accelerate payouts outside official support.",
        "若提款延迟，请通过 [[/contact|联系]] 提供精确时间戳与方式细节。不要向任何声称可在官方支持之外加速出款的人分享密码或一次性验证码。",
      ),
    ],
    relatedLinks: [
      {
        href: "/blog/how-to-withdraw-tpower",
        label: L("Withdrawal guide", "提款指南"),
      },
      { href: "/payment-methods", label: L("Payout methods", "出款方式") },
      { href: "/contact", label: L("Contact support", "联系支持") },
    ],
  },
  {
    id: "vip",
    title: L("TPOWER VIP Programme", "TPOWER VIP 计划"),
    paragraphs: [
      L(
        "TPOWER VIP is structured for discretion and escalating service rather than public scarcity pressure. The [[/vip|VIP Club page]] outlines tier progression and host-assisted benefits for higher levels, including improved reward calendars and priority operational attention where applicable.",
        "TPOWER VIP 的结构强调低调与递进服务，而非公开的稀缺压力。[[/vip|VIP 俱乐部页面]] 概述等级进阶与更高等级的管家协助权益，包括适用情况下的优化奖励日历与优先运营关注。",
      ),
      L(
        "VIP relevance still depends on consistent eligible activity and healthy account standing. Players should not chase tiers at the expense of responsible limits. Combine VIP reading with [[/promotions|promotions]] terms and [[/responsible-gaming|responsible gaming]] controls so rewards never become a reason to override personal rules.",
        "VIP 相关性仍取决于持续的合资格活动与良好账户状态。玩家不应以牺牲负责任限额为代价追逐等级。请将 VIP 阅读与 [[/promotions|优惠]] 条款及 [[/responsible-gaming|负责任博彩]] 控制结合起来，使奖励永远不会成为覆盖个人规则的理由。",
      ),
      L(
        "For lifestyle and service updates that affect hosts or tier coverage, watch [[/news|News]]. For foundational account access, VIP members still use the same [[/login|Login]] and [[/download|App]] pathways as everyone else.",
        "影响管家或等级覆盖的生活方式与服务更新，请关注 [[/news|新闻]]。在基础账户访问方面，VIP 会员仍与其他所有人一样使用相同的 [[/login|登录]] 与 [[/download|应用]] 路径。",
      ),
    ],
    relatedLinks: [
      { href: "/vip", label: L("VIP Club", "VIP 俱乐部") },
      { href: "/promotions", label: L("VIP-related offers", "VIP 相关优惠") },
      { href: "/news", label: L("VIP and platform news", "VIP 与平台新闻") },
    ],
  },
  {
    id: "providers",
    title: L("TPOWER Game Providers", "TPOWER 游戏供应商"),
    paragraphs: [
      L(
        "TPOWER Providers are a core EEAT signal: players deserve to know which studios supply mathematics, live studios, and specialty formats. Browse the [[/providers|Providers hub]] for landings that introduce catalogues, features, compatibility notes, and FAQs for names such as Pragmatic Play, PG Soft, Evolution, JILI, and others listed on the official TPOWER website map.",
        "TPOWER 供应商是核心 EEAT 信号：玩家理应知道哪些工作室提供数学模型、真人演播与特色格式。请浏览 [[/providers|供应商中心]]，查看介绍目录、特色、兼容说明与常见问题的落地页，涵盖 Pragmatic Play、PG Soft、Evolution、JILI 以及官方 TPOWER 网站地图上列出的其他名称。",
      ),
      L(
        "Provider transparency supports trust better than anonymous game grids. From a provider page you can return to [[/slots|Slots]] or [[/live-casino|Live Casino]], open related studios, and continue into [[/games|Games]] without losing the topical thread around TPOWER Online Casino.",
        "供应商透明度比匿名游戏网格更能支撑信任。从供应商页可返回 [[/slots|老虎机]] 或 [[/live-casino|真人娱乐]]，打开相关工作室，并继续进入 [[/games|游戏]]，而不丢失围绕 TPOWER Online Casino 的主题线索。",
      ),
      L(
        "When evaluating a new title, check the provider page first, then confirm whether any [[/promotions|promotion]] excludes that studio, and only then deposit through documented [[/payment-methods|methods]]. That sequence is how informed TPOWER Malaysia players reduce avoidable friction.",
        "评估新作品时，请先查看供应商页，再确认是否有 [[/promotions|优惠]] 排除该工作室，然后才通过已记录的 [[/payment-methods|方式]] 存款。这一顺序正是知情的 TPOWER 马来西亚玩家减少可避免摩擦的方式。",
      ),
    ],
    relatedLinks: [
      { href: "/providers", label: L("All providers", "全部供应商") },
      { href: "/games", label: L("Games catalogue", "游戏目录") },
      { href: "/about", label: L("About the platform", "关于平台") },
    ],
  },
  {
    id: "why-choose",
    title: L("Why Players Choose TPOWER", "玩家为何选择 TPOWER"),
    paragraphs: [
      L(
        "Players choose TPOWER for a combination of organised game shelves, Malaysia-relevant payments, bilingual help routes, mobile install documentation, and promotions that publish terms before activation. The platform’s public site emphasises orientation pages—Login, Register, Download, FAQ—so the journey is legible before money moves.",
        "玩家选择 TPOWER，是因为有组织的游戏货架、与马来西亚相关的支付、双语帮助路径、移动安装文档，以及在激活前公布条款的优惠。平台的公开站点强调导向页——登录、注册、下载、常见问题——使资金流动前的旅程清晰可读。",
      ),
      L(
        "Choice should still be comparative and cautious. Use [[/about|About]], [[/security|Security]], [[/privacy|Privacy]], and [[/editorial-policy|Editorial Policy]] to judge how the brand communicates. Then validate operational paths on [[/payment-methods|payments]], [[/vip|VIP]], and [[/contact|support]] rather than relying on social media rumours.",
        "选择仍应保持比较与谨慎。请使用 [[/about|关于]]、[[/security|安全]]、[[/privacy|隐私]] 与 [[/editorial-policy|编辑政策]] 判断品牌如何沟通。然后在 [[/payment-methods|支付]]、[[/vip|VIP]] 与 [[/contact|支持]] 上验证运营路径，而不是依赖社交媒体传言。",
      ),
      L(
        "This homepage exists to make that comparison easier. It is the pillar that connects TPOWER Guide content, product hubs, and news so searchers landing on TPOWER can navigate with intent instead of guesswork.",
        "本首页的存在是为了让这种比较更容易。它是连接 TPOWER 指南内容、产品中心与新闻的支柱，使落到 TPOWER 的搜索者能够带着意图导航，而不是猜测。",
      ),
    ],
    relatedLinks: [
      { href: "/about", label: L("About TPOWER", "关于 TPOWER") },
      { href: "/security", label: L("Security", "安全") },
      { href: "/contact", label: L("Talk to support", "联系支持") },
    ],
  },
  {
    id: "security",
    title: L("TPOWER Security", "TPOWER 安全"),
    paragraphs: [
      L(
        "TPOWER Security content explains how account access, transport protection, and suspicious-activity monitoring are framed for players. Read the [[/security|Security page]] for posture details, and treat login hygiene as part of everyday use: official URLs only, unique passwords, and careful handling of one-time codes.",
        "TPOWER 安全内容说明账户访问、传输保护与可疑活动监控如何向玩家呈现。请阅读 [[/security|安全页面]] 了解姿态细节，并将登录卫生视为日常使用的一部分：仅使用官方 URL、独特密码，并谨慎处理一次性验证码。",
      ),
      L(
        "Security also intersects with downloads. Prefer [[/download|official download]] and [[/apk|APK guidance]] documented here, and avoid community files that request unnecessary permissions. If something looks wrong during cashier use, pause and contact [[/contact|support]] rather than skip verification steps.",
        "安全也与下载相交。请优先使用此处记录的 [[/download|官方下载]] 与 [[/apk|APK 指引]]，并避免要求不必要权限的社区文件。若在收银台使用中出现异常，请暂停并通过 [[/contact|支持]] 联系，而不是跳过验证步骤。",
      ),
      L(
        "Transparent security language is an EEAT requirement for a TPOWER Guide that aims to rank for competitive brand queries. Claims without explanation erode trust; linked explanations on dedicated pages strengthen it.",
        "对希望在竞争品牌查询中排名的 TPOWER 指南而言，透明的安全表述是 EEAT 要求。没有解释的主张会侵蚀信任；在专属页面上的链接解释则会强化信任。",
      ),
    ],
    relatedLinks: [
      { href: "/security", label: L("Security page", "安全页面") },
      { href: "/login", label: L("Secure login habits", "安全登录习惯") },
      { href: "/faq", label: L("Security FAQ", "安全常见问题") },
    ],
  },
  {
    id: "privacy",
    title: L("TPOWER Privacy and Data Practices", "TPOWER 隐私与数据实践"),
    paragraphs: [
      L(
        "Privacy is part of why adult players evaluate TPOWER Malaysia carefully. The [[/privacy|Privacy Policy]] describes what categories of information may be processed for account operation, support, and compliance needs. Pair that reading with [[/cookies|Cookie Policy]] to understand site measurement and preference storage on the marketing website.",
        "隐私是成年玩家谨慎评估 TPOWER 马来西亚的原因之一。[[/privacy|隐私政策]] 说明为账户运营、支持与合规需求可能处理哪些信息类别。请将该阅读与 [[/cookies|Cookie 政策]] 配对，以了解营销网站上的测量与偏好存储。",
      ),
      L(
        "Data practices should stay aligned with account ownership: keep profile details accurate, limit credential sharing, and use [[/contact|Contact]] for privacy-related requests when the policy provides a channel. Editorial pages do not replace legal documents; they point you to them.",
        "数据实践应与账户归属保持一致：保持资料准确、限制凭证分享，并在政策提供渠道时通过 [[/contact|联系]] 提出隐私相关请求。编辑页面不能替代法律文件；它们指引您前往这些文件。",
      ),
      L(
        "For a full legal set, also review [[/terms|Terms and Conditions]]. Together, privacy, cookies, terms, and security pages form the compliance backbone behind the TPOWER Online Casino public experience.",
        "如需完整法律集合，也请审阅 [[/terms|条款与条件]]。隐私、Cookie、条款与安全页面共同构成 TPOWER Online Casino 公开体验背后的合规骨架。",
      ),
    ],
    relatedLinks: [
      { href: "/privacy", label: L("Privacy policy", "隐私政策") },
      { href: "/cookies", label: L("Cookie policy", "Cookie 政策") },
      { href: "/terms", label: L("Terms", "条款") },
    ],
  },
  {
    id: "responsible",
    title: L("Responsible Gaming at TPOWER", "TPOWER 的负责任博彩"),
    paragraphs: [
      L(
        "Responsible Gaming at TPOWER is non-negotiable infrastructure. The [[/responsible-gaming|Responsible Gaming page]] explains adult-only access, budgeting mindset, deposit limits, reality checks, time-outs, and self-exclusion pathways. Entertainment on TPOWER Casino should remain optional paid leisure—not a financial plan.",
        "TPOWER 的负责任博彩是不可妥协的基础设施。[[/responsible-gaming|负责任博彩页面]] 说明仅限成人访问、预算心态、存款限额、现实提醒、冷静期与自我排除路径。TPOWER Casino 上的娱乐应保持为可选取的付费休闲——而不是财务计划。",
      ),
      L(
        "If promotions, sports fixtures, or live tables increase intensity, return to controls before increasing stakes. Support via [[/contact|Contact]] can help route safer-play requests. FAQ entries on [[/faq|FAQ]] also answer common control questions without marketing language.",
        "若优惠、体育赛事或真人桌提高了强度，请在提高注码之前先回到控制工具。通过 [[/contact|联系]] 的支持可帮助引导更安全娱乐请求。[[/faq|常见问题]] 中的条目也以非营销语言回答常见控制问题。",
      ),
      L(
        "Search visibility for TPOWER means little if player wellbeing is ignored. This pillar page therefore keeps responsible gaming adjacent to register, deposit, and bonus sections—exactly where decision pressure often appears.",
        "若忽视玩家福祉，TPOWER 的搜索可见度便毫无意义。因此本支柱页将负责任博彩放在注册、存款与红利部分附近——恰恰是决策压力经常出现的位置。",
      ),
    ],
    relatedLinks: [
      {
        href: "/responsible-gaming",
        label: L("Responsible gaming", "负责任博彩"),
      },
      { href: "/faq", label: L("Helpful FAQ", "实用常见问题") },
      { href: "/contact", label: L("Ask for help", "寻求帮助") },
    ],
  },
  {
    id: "editorial",
    title: L(
      "TPOWER Editorial Policy and Content Freshness",
      "TPOWER 编辑政策与内容新鲜度",
    ),
    paragraphs: [
      L(
        "EEAT for TPOWER Guide content depends on editorial discipline. The [[/editorial-policy|Editorial Policy]] explains how articles and news are reviewed, how product changes trigger updates, and how promotional independence is handled so education is not confused with temporary offers.",
        "TPOWER 指南内容的 EEAT 取决于编辑纪律。[[/editorial-policy|编辑政策]] 说明文章与新闻如何审阅、产品变更如何触发更新，以及如何处理优惠独立性，使教育内容不与临时优惠混淆。",
      ),
      L(
        "Content freshness is visible through updated timestamps on [[/blog|Blog]] and [[/news|News]] items, plus ongoing platform notes about cashier, lobby, or live capacity changes. When a guide mentions Login, Download, or Payments, internal links keep readers on canonical destinations instead of outdated screenshots alone.",
        "内容新鲜度通过 [[/blog|博客]] 与 [[/news|新闻]] 条目的更新时间戳，以及关于收银台、大厅或真人容量变化的持续平台说明得以体现。当指南提到登录、下载或支付时，内链将读者留在规范目的地，而不是仅依赖过时截图。",
      ),
      L(
        "Provider transparency and legal clarity complete the trust stack: [[/providers|Providers]], [[/security|Security]], [[/privacy|Privacy]], [[/terms|Terms]], and [[/about|About]] should be read as a set. That is how a homepage earns authority for the keyword TPOWER without inventing awards or unverifiable superlatives.",
        "供应商透明度与法律清晰度补全信任栈：应将 [[/providers|供应商]]、[[/security|安全]]、[[/privacy|隐私]]、[[/terms|条款]] 与 [[/about|关于]] 作为一套来阅读。这正是首页在不为 TPOWER 关键词编造奖项或无法核实的最高级表述的情况下赢得权威的方式。",
      ),
      L(
        "If you are researching TPOWER for the first time, treat this homepage as the index and the linked pages as evidence. Authority is built by consistent facts across Login, Register, Download, Promotions, Payments, Providers, VIP, Security, and Responsible Gaming—not by a single marketing sentence repeated on every URL.",
        "若您是首次研究 TPOWER，请将本首页视为索引，将链接页面视为证据。权威来自登录、注册、下载、优惠、支付、供应商、VIP、安全与负责任博彩之间一致的事实——而不是在每个 URL 上重复同一句营销话术。",
      ),
    ],
    relatedLinks: [
      {
        href: "/editorial-policy",
        label: L("Editorial policy", "编辑政策"),
      },
      { href: "/blog", label: L("Latest guides", "最新指南") },
      { href: "/news", label: L("Latest news", "最新新闻") },
    ],
  },
];

const faqs = [
  {
    question: L(
      "How do I complete TPOWER Login safely?",
      "如何安全完成 TPOWER 登录？",
    ),
    answer: L(
      "For TPOWER Login, start on the official Login guide on this website, bookmark only trusted TPOWER URLs, and follow the detailed TPOWER login article in the Blog for credential hygiene. Never share one-time codes with anyone claiming to be support outside documented Contact channels. If you do not have an account yet, complete TPOWER Register first.",
      "完成 TPOWER 登录时，请从本站官方登录指南开始，仅收藏可信的 TPOWER URL，并跟随博客中的详细 TPOWER 登录文章做好凭证卫生。切勿向任何声称是支持、却不在已记录联系渠道内的人分享一次性验证码。若尚无账户，请先完成 TPOWER 注册。",
    ),
  },
  {
    question: L(
      "What should I know before TPOWER Register?",
      "TPOWER 注册前应了解什么？",
    ),
    answer: L(
      "TPOWER Register is for eligible adults who can provide accurate personal details for verification and later TPOWER Withdrawal requests. Read the registration guide page and the How to register TPOWER blog walkthrough, then review Responsible Gaming and Payment Methods before making a TPOWER Deposit.",
      "TPOWER 注册面向能够提供准确个人资料以供验证与日后 TPOWER 提款的符合资格成年人。请阅读注册指南页与博客中的如何注册 TPOWER 流程，并在进行 TPOWER 存款前审阅负责任博彩与支付方式。",
    ),
  },
  {
    question: L(
      "Where can I find TPOWER Download for the official app?",
      "在哪里可以找到官方应用的 TPOWER 下载？",
    ),
    answer: L(
      "Open the TPOWER Download page for Android and iOS orientation, then use the How to download TPOWER and TPOWER mobile app guides for install checklists. Prefer those official paths over unverified file shares, then return to TPOWER Login with your registered account.",
      "请打开 TPOWER 下载页面了解 Android 与 iOS 导向，再使用如何下载 TPOWER 与 TPOWER 移动应用指南获取安装清单。请优先使用这些官方路径，而非未经验证的文件分享，然后使用已注册账户返回 TPOWER 登录。",
    ),
  },
  {
    question: L(
      "Is TPOWER APK the same as the official TPOWER App?",
      "TPOWER APK 与官方 TPOWER App 相同吗？",
    ),
    answer: L(
      "TPOWER APK guidance on this site explains Android package installation considerations and points to official TPOWER App orientation pages. Always treat package sources carefully, follow the APK page plus Download guides, and sign in only after you trust the install path.",
      "本站的 TPOWER APK 指引说明 Android 安装包注意事项，并指向官方 TPOWER App 导向页面。请始终谨慎对待安装包来源，遵循 APK 页面与下载指南，并在信任安装路径后再登录。",
    ),
  },
  {
    question: L(
      "Is TPOWER Malaysia focused on local players?",
      "TPOWER 马来西亚是否聚焦本地玩家？",
    ),
    answer: L(
      "Yes. TPOWER Malaysia positioning emphasises local payment familiarity, bilingual English and Chinese support, and guides written for Malaysian player journeys across TPOWER Login, Register, Download, Deposit, Withdrawal, Promotions, and VIP.",
      "是的。TPOWER 马来西亚定位强调本地支付熟悉度、中英文双语支持，以及为马来西亚玩家在 TPOWER 登录、注册、下载、存款、提款、优惠与 VIP 旅程中撰写的指南。",
    ),
  },
  {
    question: L(
      "How do TPOWER Promotions and TPOWER Bonus offers work?",
      "TPOWER 优惠与 TPOWER 红利如何运作？",
    ),
    answer: L(
      "Open the TPOWER Promotions hub to compare welcome, reload, cashback, VIP, and seasonal offers. Read wagering, contribution, and expiry terms on each detail page before opting in so a TPOWER Bonus matches your game mix—slots, live casino, or sports—and your entertainment budget.",
      "请打开 TPOWER 优惠中心比较欢迎、再存、返水、VIP 与季节性优惠。在选择加入前阅读每个详情页上的流水、贡献与到期条款，使 TPOWER 红利匹配您的游戏组合（老虎机、真人娱乐或体育）与娱乐预算。",
    ),
  },
  {
    question: L(
      "Which TPOWER Deposit methods are commonly used?",
      "常用的 TPOWER 存款方式有哪些？",
    ),
    answer: L(
      "For TPOWER Deposit, Payment Methods outlines local rails such as bank transfer pathways, FPX-style options, and popular e-wallets depending on availability. Follow the deposit blog guide for sequencing and keep beneficiary details matched to your verified TPOWER account before you request a later withdrawal.",
      "对于 TPOWER 存款，支付方式概述银行转账路径、FPX 类选项与热门电子钱包等本地通道（视可用性而定）。请跟随存款博客指南完成顺序操作，并在日后申请提款前保持收款资料与已验证的 TPOWER 账户一致。",
    ),
  },
  {
    question: L(
      "How does the TPOWER Withdrawal process work?",
      "TPOWER 提款流程如何运作？",
    ),
    answer: L(
      "The TPOWER Withdrawal process depends on verification status, matching payout ownership, and banking windows. Read the withdrawal guide, confirm Payment Methods expectations, and contact support with precise details if a request needs follow-up. VIP members may receive priority review where applicable, but every account benefits from clean KYC.",
      "TPOWER 提款流程取决于验证状态、匹配的出款归属与银行窗口。请阅读提款指南，确认支付方式预期，若请求需要跟进，请向支持提供精确细节。VIP 会员在适用情况下可能获得优先审核，但每个账户都能从完整 KYC 中受益。",
    ),
  },
  {
    question: L(
      "Where can I play TPOWER Slot and Live Casino games?",
      "在哪里可以游玩 TPOWER 老虎机与真人娱乐？",
    ),
    answer: L(
      "Use the TPOWER Slot and Live Casino category pages for orientation, then explore TPOWER Providers for studio context such as Pragmatic Play, PG Soft, and Evolution. The Games hub links these shelves together for TPOWER Online Casino browsing.",
      "请使用 TPOWER 老虎机与真人娱乐分类页进行导向，再通过 TPOWER 供应商页了解 Pragmatic Play、PG Soft 与 Evolution 等工作室背景。游戏中心将这些货架连接在一起，便于浏览 TPOWER Online Casino。",
    ),
  },
  {
    question: L(
      "Does TPOWER include a sportsbook?",
      "TPOWER 是否包含体育博彩？",
    ),
    answer: L(
      "Yes. The Sports category covers TPOWER Sportsbook-style markets with a football-first emphasis and mobile readability. Review Responsible Gaming and payment readiness before wagering on fixtures, and check TPOWER Promotions for any sports-related offers with published terms.",
      "是的。体育分类覆盖偏 TPOWER Sportsbook 风格的盘口，强调足球优先与移动可读性。在对赛事下注前，请审阅负责任博彩与支付准备，并检查 TPOWER 优惠中是否有公布条款的体育相关优惠。",
    ),
  },
  {
    question: L(
      "What is included in the TPOWER VIP programme?",
      "TPOWER VIP 计划包含什么？",
    ),
    answer: L(
      "The TPOWER VIP Club page explains tiered benefits and host-assisted service for higher levels. TPOWER VIP rewards still require healthy account standing and should be combined with personal deposit limits and clear TPOWER Bonus or promotion terms.",
      "TPOWER VIP 俱乐部页面说明分级权益与更高等级的管家协助服务。TPOWER VIP 奖励仍需要良好账户状态，并应与个人存款限额及清晰的 TPOWER 红利或优惠条款结合。",
    ),
  },
];

const guideLinks = [
  {
    href: "/blog/tpower-login-guide",
    label: L("TPOWER login guide", "TPOWER 登录指南"),
  },
  {
    href: "/blog/how-to-register-tpower",
    label: L("How to register TPOWER", "如何注册 TPOWER"),
  },
  {
    href: "/blog/how-to-download-tpower",
    label: L("How to download TPOWER", "如何下载 TPOWER"),
  },
  {
    href: "/blog/tpower-mobile-app",
    label: L("TPOWER mobile app", "TPOWER 移动应用"),
  },
  {
    href: "/blog/how-to-deposit-tpower",
    label: L("How to deposit into TPOWER", "如何向 TPOWER 存款"),
  },
  {
    href: "/blog/how-to-withdraw-tpower",
    label: L("How to withdraw from TPOWER", "如何从 TPOWER 提款"),
  },
];

const hubLinks = [
  { href: "/login", label: L("Login", "登录") },
  { href: "/register", label: L("Register", "注册") },
  { href: "/download", label: L("Download", "下载") },
  { href: "/apk", label: L("APK", "APK") },
  { href: "/promotions", label: L("Promotions", "优惠") },
  { href: "/games", label: L("Games", "游戏") },
  { href: "/slots", label: L("Slots", "老虎机") },
  { href: "/live-casino", label: L("Live casino", "真人娱乐") },
  { href: "/sports", label: L("Sports", "体育") },
  { href: "/providers", label: L("Providers", "供应商") },
  { href: "/vip", label: L("VIP", "VIP") },
  { href: "/payment-methods", label: L("Payment methods", "支付方式") },
  { href: "/faq", label: L("FAQ", "常见问题") },
  { href: "/news", label: L("News", "新闻") },
  { href: "/blog", label: L("Blog", "博客") },
  { href: "/contact", label: L("Contact", "联系") },
  { href: "/security", label: L("Security", "安全") },
  { href: "/privacy", label: L("Privacy", "隐私") },
  {
    href: "/responsible-gaming",
    label: L("Responsible gaming", "负责任博彩"),
  },
  {
    href: "/editorial-policy",
    label: L("Editorial policy", "编辑政策"),
  },
];

function esc(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function loc(obj) {
  return `{ en: ${JSON.stringify(obj.en)}, zh: ${JSON.stringify(obj.zh)} }`;
}

let out = `import type { LocalizedString } from "@/types";

export type HomepageSeoBlock = {
  id: string;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  relatedLinks?: { href: string; label: LocalizedString }[];
};

export const homepageSeoBlocks: HomepageSeoBlock[] = [
`;

for (const block of blocks) {
  out += `  {\n    id: ${JSON.stringify(block.id)},\n    title: ${loc(block.title)},\n    paragraphs: [\n`;
  for (const p of block.paragraphs) {
    out += `      ${loc(p)},\n`;
  }
  out += `    ],\n`;
  if (block.relatedLinks?.length) {
    out += `    relatedLinks: [\n`;
    for (const link of block.relatedLinks) {
      out += `      { href: ${JSON.stringify(link.href)}, label: ${loc(link.label)} },\n`;
    }
    out += `    ],\n`;
  }
  out += `  },\n`;
}
out += `];\n\nexport const homepageSeoFaqs = [\n`;
for (const faq of faqs) {
  out += `  {\n    question: ${loc(faq.question)},\n    answer: ${loc(faq.answer)},\n  },\n`;
}
out += `];\n\nexport const homepageGuideLinks = [\n`;
for (const link of guideLinks) {
  out += `  { href: ${JSON.stringify(link.href)}, label: ${loc(link.label)} },\n`;
}
out += `];\n\nexport const homepageHubLinks = [\n`;
for (const link of hubLinks) {
  out += `  { href: ${JSON.stringify(link.href)}, label: ${loc(link.label)} },\n`;
}
out += `];\n`;

const dest = path.join(process.cwd(), "src/data/homepage-seo.ts");
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

if (enWords < 2500) {
  console.error("FAIL: under 2500 words");
  process.exit(1);
}
if (enWords > 4000) {
  console.error("WARN: over 4000 words");
}
