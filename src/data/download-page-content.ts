import type { LocalizedString } from "@/types";

export type DownloadIconKey =
  | "zap"
  | "wallet"
  | "gamepad"
  | "store"
  | "headphones"
  | "crown"
  | "shield"
  | "gauge"
  | "smartphone"
  | "apple"
  | "monitor"
  | "check"
  | "lock"
  | "virus"
  | "server"
  | "bell"
  | "rocket"
  | "star"
  | "download"
  | "refresh"
  | "alert"
  | "battery"
  | "wifi"
  | "users";

export const downloadMeta = {
  version: "3.2.1",
  apkSize: "48.6 MB",
  updatedAt: { en: "20 July 2026", zh: "2026年7月20日" },
  androidMin: "Android 8.0+",
  iosMin: "iOS 14.0+",
  downloadsLabel: { en: "100,000+", zh: "100,000+" },
  installTime: { en: "~2 minutes", zh: "约 2 分钟" },
  sha256: "A3F2…9C1E (verify on APK page)",
};

export const downloadWhyFeatures: Array<{
  id: string;
  icon: DownloadIconKey;
  title: LocalizedString;
  summary: LocalizedString;
  body: LocalizedString;
  image: string;
  benefits: LocalizedString[];
}> = [
  {
    id: "fast-install",
    icon: "zap",
    title: {
      en: "Fast Official Install",
      zh: "官方快速安装",
    },
    summary: {
      en: "TPower Download keeps the path short: choose Android or iOS, follow official prompts, and reach a signed-in lobby in roughly two minutes without hunting third-party mirrors.",
      zh: "TPOWER官方APP下载路径很短：选好 Android 或 iOS，按官方提示操作，大约两分钟就能进入已登录大厅，不必到处找第三方镜像。",
    },
    body: {
      en: `Speed only matters when the source is trustworthy. The TPOWER App install flow is designed for Malaysia players who want a calm TPower Download experience rather than a scavenger hunt across forums. You start on this page, pick your platform, and continue through documented Android APK or iOS pathways. The package size stays modest so mid-range phones finish quickly on mobile data. After install, the same credentials from registration unlock the lobby, cashier, and promotions without rebuilding your profile. That continuity is why an official Malaysia Casino App pathway beats improvised sideloading advice. Keep bookmarks to the Download and APK pages so future updates remain intentional.`,
      zh: `只有来源可信，速度才有意义。TPOWER官方APP 的安装流程，面向想要稳妥下载体验的马来西亚玩家，而不是在论坛里到处翻链接。你从本页开始，选系统，再按记录好的 Android APK 或 iOS 路径继续。安装包体积克制，中端手机用流量也能较快装完。装好后沿用注册账号，大厅、收银与优惠一次打通，不必重建资料。这也是官方马来西亚博彩APP路径，胜过临时侧载建议的原因。请收藏下载页与 APK 页，日后更新才走得清楚。`,
    },
    image: "/images/download/features/fast-install.webp",
    benefits: [
      {
        en: "Documented Android and iOS entry points",
        zh: "Android 与 iOS 入口写清楚",
      },
      {
        en: "Typical install under two minutes",
        zh: "一般约两分钟完成安装",
      },
      {
        en: "Same account after first login",
        zh: "首次登录后沿用同一账号",
      },
    ],
  },
  {
    id: "local-payments",
    icon: "wallet",
    title: {
      en: "Local Payment Flows",
      zh: "本地支付流程",
    },
    summary: {
      en: "The TPOWER App surfaces Malaysian bank and e-wallet rails inside a readable cashier, so deposits and withdrawals feel familiar instead of like a foreign checkout form.",
      zh: "TPOWER官方APP 在清晰收银界面呈现马来西亚银行与电子钱包通道，存款与提现更像本地习惯，而不是陌生的海外结账表单。",
    },
    body: {
      en: `A Malaysia Casino App earns trust when money movement looks local. Inside the TPOWER App, cashier screens emphasise supported Malaysian methods, clear statuses, and the same ownership rules that protect withdrawals on the website. You still verify beneficiary details, but you do it on a screen sized for one-handed review. Push-friendly progress states reduce the urge to refresh endlessly. Pair the app cashier with the Payment Methods guide before your first larger deposit so you understand cut-off windows and naming requirements. Fast install is useless if the first cashout stalls on mismatched details — the app makes those checks easier to see, not easier to skip.`,
      zh: `马来西亚博彩APP 是否靠谱，关键看资金流程是否本地化。TPOWER官方APP 的收银页突出支持的马来西亚方式、清楚状态，以及与网站一致的出款归属规则。你仍要核对收款人资料，但界面按单手阅读设计。进度状态更直观，减少不停刷新的焦虑。首次较大存款前，请搭配支付方式说明，了解银行窗口与姓名要求。装得再快，若第一次提现因资料不符卡住也没用——APP 是让核对更容易看见，而不是更容易跳过。`,
    },
    image: "/images/download/features/local-payments.webp",
    benefits: [
      {
        en: "Malaysia-oriented cashier layout",
        zh: "面向马来西亚的收银布局",
      },
      {
        en: "Readable deposit and withdrawal states",
        zh: "存款与提现状态清晰可读",
      },
      {
        en: "Aligned with website ownership rules",
        zh: "与网站归属规则一致",
      },
    ],
  },
  {
    id: "full-lobby",
    icon: "gamepad",
    title: {
      en: "Full Lobby on Mobile",
      zh: "手机完整大厅",
    },
    summary: {
      en: "Slots, live casino, sports, fishing, and promotions stay organised in the TPOWER App so the Malaysia Casino App experience mirrors the desktop catalogue without endless unstructured scrolling.",
      zh: "老虎机、真人视讯、体育、捕鱼与优惠在 TPOWER官方APP 里分类清楚，马来西亚博彩APP 体验对齐桌面目录，不用在无结构列表里无限翻。",
    },
    body: {
      en: `Players searching TPower App usually want the real lobby, not a stripped demo. The official client keeps category shelves readable: slots for paced sessions, live tables for hosted evenings, sports for scheduled markets, and fishing or crash formats when you want shorter rounds. Provider attribution remains visible so you know which studio powers a title before you commit stake. Promotions appear as a managed hub rather than a flashing sticker wall. That structure is what turns a generic Android install into a credible Malaysia Casino App. Use the Games and Providers pages on this site to pre-plan favourites, then open the same titles inside the installed TPOWER App.`,
      zh: `搜 TPOWER App 的玩家，要的是真正大厅，不是精简演示。官方客户端保持分类清楚：老虎机适合节奏型娱乐，真人桌适合有主持的晚间，体育适合赛程市场，捕鱼或爆点适合短局。厂商标注仍可见，下注前就知道工作室来源。优惠以受管理专区呈现，而不是满屏贴纸。这样结构才把普通 Android 安装变成可信的马来西亚博彩APP。可先在本站游戏与厂商页规划收藏，再在已安装的 TPOWER官方APP 打开同一批游戏。`,
    },
    image: "/images/download/features/full-lobby.webp",
    benefits: [
      {
        en: "Category shelves match site logic",
        zh: "分类货架与网站逻辑一致",
      },
      {
        en: "Provider names stay visible",
        zh: "厂商名称保持可见",
      },
      {
        en: "Promotions hub without clutter",
        zh: "优惠专区不堆砌干扰",
      },
    ],
  },
  {
    id: "apk-clarity",
    icon: "store",
    title: {
      en: "Clear APK Guidance",
      zh: "APK 指引清楚",
    },
    summary: {
      en: "TPower APK guidance explains permissions, package size, and official sourcing so Android users can install with eyes open instead of guessing from chat-group filenames.",
      zh: "TPOWER APK 指引说明权限、包体积与官方来源，让 Android 用户睁眼安装，而不是靠聊天群文件名瞎猜。",
    },
    body: {
      en: `TPower APK is one of the highest-intent phrases around mobile install. This Download page and the dedicated APK page treat that intent with honesty: you learn what the package is for, which Android versions are supported, and why renamed mirrors are a security risk. The published size and version string help you confirm you received the expected build. SHA256 verification belongs on the APK journey for players who want cryptographic reassurance. After install, never enter credentials on lookalike pages — return to official login inside the app or via documented site routes. Clear APK education is part of EEAT for any serious Malaysia Casino App brand.`,
      zh: `TPOWER APK 是手机安装里意图最高的词之一。本下载页与专属 APK 页如实说明：安装包用途、支持的 Android 版本，以及改名镜像为何危险。公开的体积与版本号，方便你确认拿到的是预期构建。需要密码学核验的玩家，可在 APK 流程核对 SHA256。装好后，切勿在仿冒页输入账号——请回 APP 内官方登录或本站记录入口。清楚的 APK 教育，是认真马来西亚博彩APP 品牌 EEAT 的一部分。`,
    },
    image: "/images/download/features/apk-guidance.webp",
    benefits: [
      {
        en: "Version and size published openly",
        zh: "版本与体积公开可查",
      },
      {
        en: "Warns against renamed mirrors",
        zh: "提醒远离改名镜像",
      },
      {
        en: "Pairs with dedicated APK page",
        zh: "与专属 APK 页互相配合",
      },
    ],
  },
  {
    id: "support-ready",
    icon: "headphones",
    title: {
      en: "Support When Install Stalls",
      zh: "安装卡住有人帮",
    },
    summary: {
      en: "If permissions, storage, or network blocks appear, TPOWER support routes and troubleshooting notes give you a next step instead of leaving you stuck on a blank installer screen.",
      zh: "若权限、存储或网络卡住，TPOWER 客服路径与排障说明会给你下一步，而不是让你停在空白安装界面。",
    },
    body: {
      en: `Install friction is normal on Android when unknown-source toggles or storage limits intervene. The TPOWER Download experience anticipates those moments with troubleshooting cards, FAQ depth, and Contact pathways that expect precise error timing. Tell support your device model, OS version, and whether you used the official APK route. Do not accept community “patched” files as a workaround — that trades a temporary install for long-term account risk. iOS users usually need network stability and up-to-date system versions more than obscure toggles. Either way, official help keeps the Malaysia Casino App journey recoverable.`,
      zh: `Android 上遇到未知来源开关或存储不足，安装卡顿很常见。TPOWER下载页用排障卡片、详细 FAQ 与联系客服路径应对这些情况，并希望你提供准确出错时间。请告知机型、系统版本，以及是否走官方 APK。不要接受社群“破解包”当捷径——一时装上，长期危及账户。iOS 用户更多需要稳定网络与足够新的系统，而不是冷门开关。无论如何，官方协助让马来西亚博彩APP 旅程可恢复。`,
    },
    image: "/images/download/features/support.webp",
    benefits: [
      {
        en: "Troubleshooting mapped to real errors",
        zh: "排障对应真实报错",
      },
      {
        en: "Official Contact escalation path",
        zh: "官方客服升级路径",
      },
      {
        en: "Rejects patched third-party files",
        zh: "拒绝第三方破解文件",
      },
    ],
  },
  {
    id: "vip-mobile",
    icon: "crown",
    title: {
      en: "VIP Ready on the Go",
      zh: "出门也能用 VIP",
    },
    summary: {
      en: "Higher-tier players can review cashback timing, host messages, and priority cashier cues inside the TPOWER App without waiting for a desktop session.",
      zh: "高等级玩家可在 TPOWER官方APP 查看返水节奏、管家消息与优先收银提示，不必等坐回电脑。",
    },
    body: {
      en: `VIP value is wasted if it only lives on a desktop bookmark. The TPOWER App keeps eligible members closer to host communications, reward calendars, and priority withdrawal awareness while commuting or travelling within Malaysia. You still read terms before opting into campaigns, and Responsible Gaming tools remain available. Mobile VIP is about continuity: the same tier logic, the same contribution rules, and the same expectation that faster review rewards organised accounts. Combine the VIP page education on this site with in-app alerts so you never chase a promotion you do not understand. Premium leisure should feel portable, not pressured.`,
      zh: `若 VIP 只活在电脑书签里，价值就打折。TPOWER官方APP 让合资格会员在通勤或马来西亚境内出行时，也能贴近管家沟通、奖励日历与优先提现提醒。领取活动前仍要读条款，负责任博彩工具依然可用。手机 VIP 讲的是连续性：同一套等级逻辑、同一套贡献规则，以及“资料整齐才换来更快审核”的同一期待。把本站 VIP 页说明与 APP 内提醒结合，避免追自己没搞懂的优惠。高端休闲应该可随身，而不是被催促。`,
    },
    image: "/images/download/features/vip.webp",
    benefits: [
      {
        en: "Host and reward cues on mobile",
        zh: "管家与奖励提示可在手机看",
      },
      {
        en: "Same tier rules as desktop",
        zh: "等级规则与桌面一致",
      },
      {
        en: "Pairs with Responsible Gaming tools",
        zh: "可搭配负责任博彩工具",
      },
    ],
  },
  {
    id: "secure-session",
    icon: "shield",
    title: {
      en: "Session Security Habits",
      zh: "会话安全习惯",
    },
    summary: {
      en: "Official install plus disciplined login hygiene protects the TPOWER App account better than any decorative “secure” badge on an unverified download page.",
      zh: "官方安装加上自律登录习惯，比不明下载页上的装饰性“安全”徽章更能保护 TPOWER App 账户。",
    },
    body: {
      en: `Security for a Malaysia Casino App is mostly operational discipline. Download only from documented TPOWER routes, confirm version strings, and avoid credential entry on cloned websites. Use device lock screens, refuse shared-family logins on personal wallets, and sign out on borrowed phones. The app itself supports a safer posture when paired with Security and FAQ guidance on this site. If something feels off after an update, pause deposits and verify through Contact before continuing. TPower Download is the start of a trust chain — every later cashout depends on that first honest install.`,
      zh: `马来西亚博彩APP 的安全，多半是操作纪律。只从记录在案的 TPOWER 路径下载，核对版本号，避免在仿冒站输入账号。开启锁屏，别在个人钱包账号上共用家人登录，借用手机记得登出。APP 搭配本站安全说明与 FAQ，姿态更稳。若更新后感觉异常，先暂停存款，通过客服核实再继续。TPOWER下载是信任链的起点——之后每一次提现，都依赖第一次诚实的安装。`,
    },
    image: "/images/download/features/security.webp",
    benefits: [
      {
        en: "Official-only download discipline",
        zh: "只走官方下载纪律",
      },
      {
        en: "Credential hygiene reminders",
        zh: "账号密码卫生提醒",
      },
      {
        en: "Escalation before risky deposits",
        zh: "风险存款前先升级核实",
      },
    ],
  },
  {
    id: "performance",
    icon: "gauge",
    title: {
      en: "Performance Tuned for Phones",
      zh: "针对手机调校性能",
    },
    summary: {
      en: "The TPOWER App targets stable lobby navigation, efficient battery use, and readable live streams on common Malaysian mid-range devices rather than demo-only flagship phones.",
      zh: "TPOWER官方APP 面向马来西亚常见中端机，追求大厅浏览稳定、耗电克制、真人画面可读，而不是只在旗舰演示机上好看。",
    },
    body: {
      en: `Performance claims mean little without device reality. TPOWER App testing priorities include Android 8.0+ handsets and iOS 14.0+ devices that Malaysia players actually carry. Lobby transitions should feel snappy on Wi-Fi and tolerable on busy mobile networks. Live casino streams adapt when bandwidth dips; slots keep UI chrome light so artwork remains the focus. Background update checks are paced to avoid draining battery overnight. If a title feels heavy, close unused apps and switch networks before blaming the whole client. A credible Malaysia Casino App optimises for everyday phones, not marketing screenshots alone.`,
      zh: `没有真实机型，性能口号没有意义。TPOWER App 优先覆盖马来西亚玩家常带的 Android 8.0+ 与 iOS 14.0+ 设备。大厅切换在 Wi-Fi 上要利落，在繁忙移动网络上也要可接受。真人视讯在带宽下降时会调整；老虎机界面轻量，让画面主导。后台更新检查节奏克制，避免整夜耗电。若某款游戏偏重，先关掉闲置应用并切换网络，再判断是否客户端问题。可信的马来西亚博彩APP 为日常手机优化，而不只为营销截图。`,
    },
    image: "/images/download/features/performance.webp",
    benefits: [
      {
        en: "Mid-range device focus",
        zh: "聚焦中端设备体验",
      },
      {
        en: "Adaptive live streaming behaviour",
        zh: "真人串流可自适应",
      },
      {
        en: "Battery-aware update checks",
        zh: "更新检查顾及耗电",
      },
    ],
  },
];

export const downloadInstallSteps: Array<{
  id: string;
  title: LocalizedString;
  body: LocalizedString;
  image: string;
}> = [
  {
    id: "download-apk",
    title: {
      en: "Download APK",
      zh: "下载 APK",
    },
    body: {
      en: "Start on the official TPower Download or APK page. Confirm version 3.2.1 and the ~48.6 MB size, then download only from documented TPOWER routes — never from chat-group mirrors or renamed files.",
      zh: "从官方 TPOWER下载或 APK 页开始。确认版本 3.2.1 与约 48.6 MB 体积，只从记录在案的 TPOWER 路径下载——绝不使用聊天群镜像或改名文件。",
    },
    image: "/images/download/install/step-01-download-apk.webp",
  },
  {
    id: "allow-unknown",
    title: {
      en: "Allow Unknown Sources",
      zh: "允许未知来源",
    },
    body: {
      en: "On Android, enable install permission only for the browser or Files app you used with the official package. After install, tighten unknown-source access again so the exception stays temporary and intentional.",
      zh: "在 Android 上，只为你下载官方包时使用的浏览器或文件应用开启安装权限。装完后再次收紧未知来源，让例外保持短暂且有意。",
    },
    image: "/images/download/install/step-02-allow-unknown.webp",
  },
  {
    id: "install",
    title: {
      en: "Install",
      zh: "安装",
    },
    body: {
      en: "Open the package, approve the installer, and wait for completion. If the icon is missing, re-check storage permissions or re-download from the official path rather than searching random marketplaces.",
      zh: "打开安装包、批准安装程序并等待完成。若找不到图标，先查存储权限或从官方路径重下，不要去陌生应用市场乱搜。",
    },
    image: "/images/download/install/step-03-install.webp",
  },
  {
    id: "login",
    title: {
      en: "Login",
      zh: "登录",
    },
    body: {
      en: "Open the TPOWER App and sign in with the same account from registration. Complete any recommended security checks, then confirm cashier readiness before your first mobile deposit.",
      zh: "打开 TPOWER App，用注册时同一账号登录。完成建议的安全检查，并在首次手机存款前确认收银就绪。",
    },
    image: "/images/download/install/step-04-login.webp",
  },
  {
    id: "welcome-bonus",
    title: {
      en: "Claim Welcome Bonus",
      zh: "领取欢迎礼",
    },
    body: {
      en: "Review welcome offer terms inside Promotions — wagering, contribution, and expiry — then opt in only if the structure fits your game mix. Set Responsible Gaming limits before you play through any bonus.",
      zh: "在优惠里先看欢迎礼条款——流水、贡献与到期——结构符合你的玩法再领取。用任何红利娱乐前，先设置负责任限额。",
    },
    image: "/images/download/install/step-05-welcome-bonus.webp",
  },
];

export const downloadCompatibilityRows: Array<{
  id: string;
  label: LocalizedString;
  android: LocalizedString;
  iphone: LocalizedString;
  tablet: LocalizedString;
  desktop: LocalizedString;
}> = [
  {
    id: "ram",
    label: { en: "RAM", zh: "内存" },
    android: { en: "3 GB minimum, 4 GB+ recommended", zh: "最低 3 GB，建议 4 GB+" },
    iphone: { en: "3 GB class devices and newer", zh: "约 3 GB 级别及以上机型" },
    tablet: { en: "4 GB+ for smoother multitasking", zh: "建议 4 GB+ 更顺畅多任务" },
    desktop: { en: "Not required — use mobile web or app", zh: "非必须 — 可用手机网页或 APP" },
  },
  {
    id: "storage",
    label: { en: "Storage", zh: "存储空间" },
    android: { en: "150 MB free (APK ~48.6 MB + cache)", zh: "预留 150 MB（APK 约 48.6 MB + 缓存）" },
    iphone: { en: "150 MB free for install and cache", zh: "预留 150 MB 安装与缓存" },
    tablet: { en: "200 MB free recommended", zh: "建议预留 200 MB" },
    desktop: { en: "Browser cache only for web play", zh: "网页娱乐仅需浏览器缓存" },
  },
  {
    id: "network",
    label: { en: "Network", zh: "网络" },
    android: { en: "Stable 4G/5G or Wi-Fi", zh: "稳定 4G/5G 或 Wi-Fi" },
    iphone: { en: "Stable 4G/5G or Wi-Fi", zh: "稳定 4G/5G 或 Wi-Fi" },
    tablet: { en: "Wi-Fi preferred for live streams", zh: "真人串流建议 Wi-Fi" },
    desktop: { en: "Broadband for desktop web lobby", zh: "桌面网页大厅建议宽带" },
  },
  {
    id: "supported-os",
    label: { en: "Supported OS", zh: "支持系统" },
    android: { en: "Android 8.0+", zh: "Android 8.0+" },
    iphone: { en: "iOS 14.0+", zh: "iOS 14.0+" },
    tablet: { en: "Android 8.0+ / iPadOS 14.0+", zh: "Android 8.0+ / iPadOS 14.0+" },
    desktop: { en: "Modern Chromium/Safari/Firefox", zh: "现代 Chromium/Safari/Firefox" },
  },
  {
    id: "recommended-version",
    label: { en: "Recommended Version", zh: "建议版本" },
    android: { en: "TPOWER App 3.2.1 (latest APK)", zh: "TPOWER App 3.2.1（最新 APK）" },
    iphone: { en: "TPOWER App 3.2.1 via official iOS path", zh: "经官方 iOS 路径的 3.2.1" },
    tablet: { en: "Match phone build 3.2.1", zh: "与手机同版 3.2.1" },
    desktop: { en: "Latest site experience in browser", zh: "浏览器使用最新网站体验" },
  },
];
export const downloadSecurityPoints: Array<{
  id: string;
  icon: DownloadIconKey;
  title: LocalizedString;
  body: LocalizedString;
}> = [
  {
    id: "official-only",
    icon: "check",
    title: { en: "Official Sources Only", zh: "只走官方来源" },
    body: {
      en: "Obtain the TPOWER App or TPower APK exclusively through documented Download and APK pages. Community mirrors, renamed zip files, and “faster mirror” links break the trust chain before you even open the lobby.",
      zh: "只通过记录在案的下载页与 APK 页获取 TPOWER App 或 TPOWER APK。社群镜像、改名压缩包和所谓“更快镜像”会在你还没进大厅前就打断信任链。",
    },
  },
  {
    id: "lock-screen",
    icon: "lock",
    title: { en: "Device Lock Hygiene", zh: "设备锁屏习惯" },
    body: {
      en: "Protect the installed Malaysia Casino App with a PIN, biometric lock, or strong pattern. A borrowed unlocked phone is a faster account risk than most malware myths.",
      zh: "用 PIN、生物识别或强图案保护已安装的博彩APP。未锁屏的借用手机，往往比多数恶意软件传闻更快造成账户风险。",
    },
  },
  {
    id: "no-patched",
    icon: "virus",
    title: { en: "Refuse Patched Packages", zh: "拒绝破解安装包" },
    body: {
      en: "Patched or “mod” APK files may claim unlimited bonuses while harvesting credentials. If install instructions diverge from TPOWER documentation, stop and re-check the official APK page.",
      zh: "破解或所谓“mod”APK 常以无限优惠为饵窃取账号。若安装说明与 TPOWER 文档不符，请停止并回到官方 APK 页核对。",
    },
  },
  {
    id: "tls-path",
    icon: "server",
    title: { en: "Encrypted Product Paths", zh: "加密产品通道" },
    body: {
      en: "After a clean install, keep sessions on official product endpoints. Avoid captive-portal Wi-Fi tricks that insert fake login pages between you and the real TPOWER App.",
      zh: "干净安装后，会话留在官方产品端点。避开会插入假登录页的 captive portal 公共 Wi-Fi 套路。",
    },
  },
  {
    id: "permission-scope",
    icon: "shield",
    title: { en: "Minimal Permission Scope", zh: "权限范围最小化" },
    body: {
      en: "Grant only the install and runtime permissions the official client requests for core features. Extra accessibility or overlay permissions demanded by unofficial loaders are a red flag.",
      zh: "只授予官方客户端为核心功能申请的安装与运行时权限。非官方加载器额外索取无障碍或悬浮窗权限，是危险信号。",
    },
  },
  {
    id: "update-discipline",
    icon: "refresh",
    title: { en: "Update From the Same Channel", zh: "从同一渠道更新" },
    body: {
      en: "When version 3.2.1 is superseded, return to the same TPower Download channel. Mixing an official first install with a random update file reintroduces supply-chain risk.",
      zh: "当 3.2.1 被新版本取代时，请回到同一 TPOWER下载渠道。先官方安装、后随机更新文件，会把供应链风险重新带回来。",
    },
  },
  {
    id: "alert-clones",
    icon: "alert",
    title: { en: "Spot Clone Domains", zh: "识别仿冒域名" },
    body: {
      en: "Before entering passwords, read the domain carefully. Lookalike spellings and urgent “reinstall now” SMS campaigns often target Malaysia Casino App users during busy sports weekends.",
      zh: "输入密码前仔细看域名。形近拼写和紧急“马上重装”短信，常在体育热门周末针对马来西亚博彩APP 用户。",
    },
  },
  {
    id: "support-verify",
    icon: "headphones",
    title: { en: "Verify Through Official Support", zh: "经官方客服核实" },
    body: {
      en: "If a download link arrives from a stranger, ask Contact to confirm whether TPOWER is distributing a new build. Never send OTPs or full passwords to anyone claiming to be a host.",
      zh: "若陌生人发来下载链接，先通过客服确认 TPOWER 是否在发新包。切勿把 OTP 或完整密码发给自称管家的人。",
    },
  },
];

export const downloadPerformancePoints: Array<{
  id: string;
  icon: DownloadIconKey;
  title: LocalizedString;
  body: LocalizedString;
}> = [
  {
    id: "lobby-speed",
    icon: "rocket",
    title: { en: "Snappy Lobby Navigation", zh: "大厅切换利落" },
    body: {
      en: "Category shelves and search stay responsive on mid-range Android and recent iPhones so browsing the Malaysia Casino App does not feel like waiting on a desktop remote session.",
      zh: "在中端 Android 与较新 iPhone 上，分类货架与搜索保持跟手，马来西亚博彩APP 浏览不应像远程操作桌面那样等待。",
    },
  },
  {
    id: "stream-adapt",
    icon: "wifi",
    title: { en: "Adaptive Live Streams", zh: "真人串流自适应" },
    body: {
      en: "Live casino video quality adjusts when mobile networks congest, prioritising playable continuity over maximum resolution that freezes mid-hand.",
      zh: "移动网络拥塞时，真人视讯画质会调整，优先保证可玩连续性，而不是一味最高分辨率导致半局卡死。",
    },
  },
  {
    id: "battery-aware",
    icon: "battery",
    title: { en: "Battery-Aware Background Work", zh: "后台顾及耗电" },
    body: {
      en: "Update checks and notification sync are paced to reduce overnight drain, which matters for players who keep the TPOWER App installed for daily cashback reminders.",
      zh: "更新检查与通知同步节奏克制，降低整夜耗电——对为每日返水提醒而常驻安装 TPOWER App 的玩家很重要。",
    },
  },
  {
    id: "cache-light",
    icon: "gauge",
    title: { en: "Light Cache Footprint", zh: "缓存占用克制" },
    body: {
      en: "Artwork caching balances revisit speed against storage pressure on 64 GB phones still common across Malaysia. Clear cache from system settings if storage warnings appear.",
      zh: "素材缓存在回访速度与存储压力间取平衡，照顾马来西亚仍常见的 64 GB 手机。出现存储警告时可在系统设置清理缓存。",
    },
  },
  {
    id: "stable-cashier",
    icon: "wallet",
    title: { en: "Stable Cashier Screens", zh: "收银页稳定" },
    body: {
      en: "Deposit and withdrawal views favour clarity under imperfect networks so you can confirm amounts and beneficiary names without UI jitter during critical taps.",
      zh: "存款与提现界面在网络不佳时仍强调清晰，关键点击时能确认金额与收款人姓名，减少界面抖动。",
    },
  },
  {
    id: "notify-timely",
    icon: "bell",
    title: { en: "Timely Status Notifications", zh: "状态通知及时" },
    body: {
      en: "Optional alerts help you notice cashier progress and promotion windows without forcing constant manual refreshes that waste data and battery.",
      zh: "可选提醒帮你留意收银进度与优惠窗口，不必不停手动刷新浪费流量与电量。",
    },
  },
];
export const downloadFaqs: Array<{
  question: LocalizedString;
  answer: LocalizedString;
}> = [
  {
    question: {
      en: "What is TPower Download and where should I start?",
      zh: "TPOWER下载是什么？应该从哪里开始？",
    },
    answer: {
      en: "TPower Download is the official orientation hub for installing the TPOWER App on Android or iOS. Start on this page to compare platforms, review version 3.2.1 details, and choose either the APK route or the iOS path. Avoid third-party mirrors. After install, sign in with your registered account and set Responsible Gaming limits before depositing.",
      zh: "TPOWER下载是安装 TPOWER官方APP（Android 或 iOS）的官方指引中心。请从本页比较系统、查看 3.2.1 版本信息，再选择 APK 或 iOS 路径。避开第三方镜像。装好后用已注册账号登录，存款前先设置负责任限额。",
    },
  },
  {
    question: {
      en: "Is the TPOWER App available for Android and iOS?",
      zh: "TPOWER App 支持 Android 和 iOS 吗？",
    },
    answer: {
      en: "Yes. The Malaysia Casino App experience covers Android 8.0+ and iOS 14.0+. Android players typically use the documented TPower APK pathway; iOS players follow the official iOS install instructions published beside this Download guide. Feature parity focuses on lobby access, cashier flows, promotions, and support entry points on both platforms.",
      zh: "支持。马来西亚博彩APP 体验覆盖 Android 8.0+ 与 iOS 14.0+。Android 玩家通常走记录好的 TPOWER APK 路径；iOS 玩家按本下载指南旁的官方 iOS 安装说明操作。两边都强调大厅、收银、优惠与客服入口的功能对齐。",
    },
  },
  {
    question: {
      en: "What is TPower APK and is it safe?",
      zh: "TPOWER APK 是什么？安全吗？",
    },
    answer: {
      en: "TPower APK is the Android application package used when an official sideload path is required. Safety depends on source: only download from TPOWER APK documentation on this site, verify version and size (about 48.6 MB for the current build), and refuse renamed files from chats. Pair install discipline with Security guidance and never enter passwords on clone sites.",
      zh: "TPOWER APK 是在需要官方侧载路径时使用的 Android 安装包。安不安全取决于来源：只从本站 TPOWER APK 说明下载，核对版本与体积（当前约 48.6 MB），拒绝聊天里的改名文件。安装纪律请搭配安全说明，切勿在仿冒站输入密码。",
    },
  },
  {
    question: {
      en: "How long does TPOWER App install usually take?",
      zh: "安装 TPOWER App 通常要多久？",
    },
    answer: {
      en: "Most Malaysia players finish in about two minutes on a stable connection once the correct platform path is chosen. Slower mobile data, low storage, or extra Android permission prompts can extend that window. If progress stalls beyond several minutes, check storage free space, switch to Wi-Fi, and confirm you are still on the official Download or APK page.",
      zh: "选对系统路径且网络稳定时，多数马来西亚玩家大约两分钟完成。流量偏慢、存储不足或 Android 额外权限提示可能延长。若超过数分钟仍无进展，请检查剩余空间、改连 Wi-Fi，并确认仍在官方下载或 APK 页。",
    },
  },
  {
    question: {
      en: "Do I need to register before downloading the app?",
      zh: "下载 APP 前一定要先注册吗？",
    },
    answer: {
      en: "You can install first, but you need an account to use cashier and personalised promotions. Many players register on the website, then install the TPOWER App and log in with the same credentials. Eligible adults only. Accurate profile details later reduce withdrawal friction, so treat registration quality as part of the Download journey.",
      zh: "可以先安装，但要用收银与个人化优惠仍需账号。很多人先在网站注册，再装 TPOWER App 用同一凭证登录。仅限合资格成年人。资料填准能减少日后提现摩擦，所以注册质量也是下载旅程的一部分。",
    },
  },
  {
    question: {
      en: "Why does Android ask for unknown sources permission?",
      zh: "为什么 Android 会要求未知来源权限？",
    },
    answer: {
      en: "Android protects devices by blocking installs outside its default store flow. When you use an official TPower APK path, the system may ask you to allow installation from the browser or files app you used. Enable it temporarily for that source, complete install, then tighten permissions again. Never keep unknown sources open for every app on the phone.",
      zh: "Android 默认阻止商店外安装以保护设备。走官方 TPOWER APK 时，系统可能要求允许你使用的浏览器或文件应用安装。仅为该来源临时开启，装完再收紧。不要让手机对所有应用长期开放未知来源。",
    },
  },
  {
    question: {
      en: "How do I verify I downloaded the correct APK build?",
      zh: "如何确认下载的是正确 APK 版本？",
    },
    answer: {
      en: "Compare the published version (3.2.1), approximate size (48.6 MB), and update date on the APK page with the file you received. Players who want cryptographic assurance should follow the SHA256 verification note shown in download metadata. If names look altered or the size differs wildly, discard the file and restart from the official TPower APK page.",
      zh: "把 APK 页公开的版本（3.2.1）、约 48.6 MB 体积与更新日期，与你拿到的文件对照。需要密码学确认的玩家，请按下载元数据中的 SHA256 说明核验。若文件名被改或体积差很多，丢弃后从官方 TPOWER APK 页重来。",
    },
  },
  {
    question: {
      en: "Can I use the same account on phone and desktop?",
      zh: "手机和电脑能用同一账号吗？",
    },
    answer: {
      en: "Yes. The TPOWER App shares account identity with the website experience. Log in with the same credentials after install. Avoid simultaneous sensitive cashier actions on two devices if you are unsure which session is active. If you suspect a shared password leak, change credentials through official recovery channels and contact support.",
      zh: "可以。TPOWER App 与网站共用账户身份。装好后用同一凭证登录。若不确定哪边会话有效，避免两台设备同时做敏感收银操作。若怀疑密码泄露，请经官方找回流程改密并联系客服。",
    },
  },
  {
    question: {
      en: "Does the Malaysia Casino App support local payments?",
      zh: "马来西亚博彩APP 支持本地支付吗？",
    },
    answer: {
      en: "The cashier inside the TPOWER App is oriented toward Malaysian bank and e-wallet habits documented on the Payment Methods page. Always match beneficiary ownership to your profile. Processing windows still depend on banking partners. Read method notes before your first larger deposit so mobile convenience does not skip verification basics.",
      zh: "TPOWER App 内收银面向支付方式页记录的马来西亚银行与电子钱包习惯。收款归属须与资料一致。处理窗口仍取决于银行合作方。首次较大存款前先读各方式说明，别因手机方便而跳过核验基本功。",
    },
  },
  {
    question: {
      en: "What should I do if the install fails halfway?",
      zh: "安装到一半失败怎么办？",
    },
    answer: {
      en: "Free up storage, confirm network stability, and re-download from the official path rather than resuming a partial mystery file. On Android, revisit install permission for the correct source app. On iOS, update the system and retry on Wi-Fi. If errors persist, note the exact message time and contact official support with your device model.",
      zh: "先腾出存储、确认网络稳定，并从官方路径重新下载，不要续传来路不明的半截文件。Android 请重查正确来源应用的安装权限；iOS 请更新系统并在 Wi-Fi 重试。若仍失败，记下准确报错时间，连同机型联系官方客服。",
    },
  },
  {
    question: {
      en: "Is TPOWER App free to download?",
      zh: "TPOWER App 下载收费吗？",
    },
    answer: {
      en: "The official client is offered at no purchase price through documented TPOWER channels. You may still use mobile data during download, and later deposits are separate from install cost. Be suspicious of sites charging for the APK itself — that pattern often signals unofficial redistribution.",
      zh: "经记录在案的 TPOWER 渠道，官方客户端不收取购买费用。下载可能消耗流量，之后存款与安装费用无关。若有网站对 APK 本身收费，请提高警惕——这常是非官方二次分发信号。",
    },
  },
  {
    question: {
      en: "How do promotions work inside the app?",
      zh: "APP 里的优惠怎么运作？",
    },
    answer: {
      en: "Promotions appear in a managed hub with terms you should read before opting in. Wagering, contribution, and expiry still apply exactly as on the website. The app makes offers easier to notice; it does not remove responsibility to understand rules. Cross-check the Promotions pages on this site when an offer looks unusually aggressive.",
      zh: "优惠出现在受管理专区，领取前请读条款。流水、贡献与到期与网站完全一致。APP 让优惠更好发现，但不等于可以不理解规则。若某优惠看起来异常激进，请回本站优惠页交叉核对。",
    },
  },
  {
    question: {
      en: "Can VIP members manage benefits on mobile?",
      zh: "VIP 会员能在手机管理权益吗？",
    },
    answer: {
      en: "Eligible VIP players can stay closer to host messages, reward timing, and priority cashier awareness inside the TPOWER App. Tier rules and contribution logic remain the same as desktop education on the VIP page. Mobile access is continuity, not a loophole — Responsible Gaming tools still apply.",
      zh: "合资格 VIP 可在 TPOWER App 更贴近管家消息、奖励节奏与优先收银提醒。等级规则与贡献逻辑与 VIP 页的桌面说明相同。手机只是连续使用，不是漏洞——负责任博彩工具依然适用。",
    },
  },
  {
    question: {
      en: "Why is my live casino stream lagging on mobile data?",
      zh: "为什么用流量看真人视讯会卡？",
    },
    answer: {
      en: "Live video is sensitive to congestion and signal handoffs. Switch to Wi-Fi when possible, close bandwidth-heavy background apps, and allow the client to adapt quality. If only one title fails while the lobby is fine, retry that table after a short pause. Persistent multi-title failure may indicate a device thermal throttle or outdated OS build.",
      zh: "真人视频对拥塞与基站切换敏感。尽量改 Wi-Fi，关掉耗流量后台，并允许客户端调整画质。若只有某一桌卡而大厅正常，稍候重试该桌。若多款同时持续失败，可能是设备过热降频或系统过旧。",
    },
  },
  {
    question: {
      en: "How do I update the TPOWER App safely?",
      zh: "如何安全更新 TPOWER App？",
    },
    answer: {
      en: "Return to the same official TPower Download or APK channel used for the first install. Confirm the new version string before replacing the build. Avoid “update packs” sent as chat attachments. After updating, re-open the app, sign in, and verify cashier pages still look familiar before making a large deposit.",
      zh: "回到首次安装使用的同一官方 TPOWER下载或 APK 渠道。替换构建前确认新版本号。拒绝聊天附件里的“更新包”。更新后重新打开、登录，并在大额存款前确认收银页外观仍熟悉。",
    },
  },
  {
    question: {
      en: "What devices are recommended for the best experience?",
      zh: "怎样的设备体验较好？",
    },
    answer: {
      en: "Aim for Android 8.0+ or iOS 14.0+ with at least 3–4 GB RAM and roughly 150 MB free storage. Mid-range phones common in Malaysia handle lobby browsing well; live streams prefer stable Wi-Fi. Very old OS builds may install but will miss stability fixes included in current guidance.",
      zh: "建议 Android 8.0+ 或 iOS 14.0+，内存至少 3–4 GB，并预留约 150 MB 空间。马来西亚常见中端机足够流畅浏览大厅；真人串流更推荐稳定 Wi-Fi。过旧系统或许能装，但可能缺少现行说明中的稳定性修复。",
    },
  },
  {
    question: {
      en: "Does downloading the app change withdrawal rules?",
      zh: "下载 APP 会改变提现规则吗？",
    },
    answer: {
      en: "No. Ownership matching, verification, and banking windows remain the same whether you use the website or the TPOWER App. The app mainly improves visibility of statuses on the go. Clean KYC and consistent beneficiary names still determine how smoothly reviews move — mobile convenience cannot override compliance basics.",
      zh: "不会。无论网站还是 TPOWER App，归属核对、验证与银行窗口规则相同。APP 主要让你出门也能看清状态。KYC 整齐与收款姓名一致，仍决定审核顺不顺——手机方便不能凌驾合规基本要求。",
    },
  },
  {
    question: {
      en: "What if I receive an SMS telling me to reinstall immediately?",
      zh: "收到短信叫我立刻重装怎么办？",
    },
    answer: {
      en: "Treat urgent reinstall messages as suspicious until confirmed through official Contact channels. Do not tap shortened links in the SMS. Open your bookmarked TPOWER Download page manually if you need to check for a real update. Phishing often spikes around sports events when Malaysia Casino App traffic rises.",
      zh: "在经官方客服确认前，把紧急重装短信视为可疑。不要点短信里的短链。若需查是否真有更新，请手动打开已收藏的 TPOWER下载页。体育赛事期间流量升高，钓鱼也常跟着增加。",
    },
  },
  {
    question: {
      en: "Can tablets run the TPOWER App?",
      zh: "平板能跑 TPOWER App 吗？",
    },
    answer: {
      en: "Many Android tablets on 8.0+ and iPadOS 14.0+ class devices can run the client when storage and network requirements are met. Layout remains phone-first in spirit, scaled for larger screens. For live casino, prefer Wi-Fi. If a tablet build is unavailable for your OS variant, use the mobile web lobby as a temporary bridge.",
      zh: "许多 Android 8.0+ 平板与 iPadOS 14.0+ 级别设备，在存储与网络达标时可运行客户端。布局仍偏手机优先，再放大到更大屏幕。真人视讯建议 Wi-Fi。若你的系统变体暂无平板构建，可先用手机网页大厅过渡。",
    },
  },
  {
    question: {
      en: "How is the TPOWER App different from mobile web?",
      zh: "TPOWER App 和手机网页有什么不同？",
    },
    answer: {
      en: "Mobile web works in the browser without installing a package. The TPOWER App adds a dedicated icon, often smoother lobby transitions, and optional notifications for cashier or promotion cues. Account rules stay identical. Choose the app when you want a habitual Malaysia Casino App shortcut; use mobile web when you cannot install yet.",
      zh: "手机网页在浏览器使用，不必装包。TPOWER App 提供独立图标、往往更顺的大厅切换，以及可选的收银或优惠通知。账户规则完全一样。想要习惯性的博彩APP 快捷入口就选 APP；暂时无法安装时用手机网页。",
    },
  },
  {
    question: {
      en: "Where can I read more about safer play after installing?",
      zh: "安装后去哪里了解更安全的娱乐方式？",
    },
    answer: {
      en: "Open the Responsible Gaming page for deposit limits, cool-off options, and healthier session habits. Pair that with Security and FAQ articles if you need operational hygiene tips. Installing the TPOWER App should make controls easier to reach — not easier to ignore when emotions run high after a losing streak.",
      zh: "请打开负责任博彩页，了解存款限额、冷静选项与更健康的娱乐节奏。若需操作卫生提示，可搭配安全说明与 FAQ。安装 TPOWER App 应让控制更好找——而不是在连亏情绪下更好忽略。",
    },
  },
  {
    question: {
      en: "Who should I contact if the official download link looks broken?",
      zh: "官方下载链接异常该联系谁？",
    },
    answer: {
      en: "Use the Contact page and describe the exact URL you opened, device OS, time of failure, and any on-screen error text. Do not accept replacement APK files from social media strangers while you wait. Support can confirm whether a temporary CDN issue exists or whether you landed on a lookalike domain.",
      zh: "请走联系客服页，说明你打开的准确网址、系统、失败时间与屏幕错误文字。等待期间不要接受社交媒体陌生人发来的替代 APK。客服可确认是临时 CDN 问题，还是你进了形近域名。",
    },
  },
];
export const downloadTroubleshooting: Array<{
  id: string;
  title: LocalizedString;
  body: LocalizedString;
  fix: LocalizedString;
}> = [
  {
    id: "blocked-install",
    title: {
      en: "Android blocks the package",
      zh: "Android 拦截安装包",
    },
    body: {
      en: "The system may refuse sideloaded installs until you allow the specific browser or files app that fetched the official TPower APK.",
      zh: "在允许下载官方 TPOWER APK 的浏览器或文件应用之前，系统可能拒绝侧载安装。",
    },
    fix: {
      en: "Enable install permission only for that source app, retry once, then disable broader unknown-source access.",
      zh: "仅为该来源应用开启安装权限，重试一次，再收紧更广的未知来源访问。",
    },
  },
  {
    id: "storage-full",
    title: {
      en: "Not enough storage",
      zh: "存储空间不足",
    },
    body: {
      en: "Even a 48.6 MB APK needs extra room for unpacking and first-launch cache, especially on 64 GB phones packed with photos and chat media.",
      zh: "即使 APK 约 48.6 MB，解压与首次缓存仍需额外空间，尤其是塞满照片与聊天媒体的 64 GB 手机。",
    },
    fix: {
      en: "Free at least 150 MB, clear bulky downloads, then re-download from the official path.",
      zh: "腾出至少 150 MB，清理大型下载，再从官方路径重新下载。",
    },
  },
  {
    id: "corrupt-file",
    title: {
      en: "Install says the file is corrupt",
      zh: "提示安装文件损坏",
    },
    body: {
      en: "Interrupted transfers or renamed chat attachments often produce incomplete packages that Android cannot parse.",
      zh: "传输中断或聊天里改名的附件，常造成 Android 无法解析的不完整安装包。",
    },
    fix: {
      en: "Delete the bad file, confirm size near 48.6 MB after a fresh official download, and install again on Wi-Fi.",
      zh: "删除坏文件，经官方重新下载后确认体积接近 48.6 MB，并在 Wi-Fi 下重装。",
    },
  },
  {
    id: "icon-missing",
    title: {
      en: "App installed but icon missing",
      zh: "装了却找不到图标",
    },
    body: {
      en: "Some launchers hide new icons in a work profile, dual-app folder, or require a manual page refresh after install.",
      zh: "部分桌面会把新图标藏进工作资料夹、分身文件夹，或需要安装后手动刷新页面。",
    },
    fix: {
      en: "Search device app drawer for TPOWER, check dual-app settings, or reboot once after a successful install.",
      zh: "在应用列表搜索 TPOWER，检查应用分身设置，或在成功安装后重启一次。",
    },
  },
  {
    id: "login-loop",
    title: {
      en: "Login loops after opening the app",
      zh: "打开 APP 后登录死循环",
    },
    body: {
      en: "Clock skew, aggressive VPN routes, or stale credentials after a password reset can bounce sessions before the lobby loads.",
      zh: "时间不准、过激 VPN 路由，或改密后的旧凭证，可能在大厅加载前把会话弹回。",
    },
    fix: {
      en: "Set automatic date/time, try a clean network without unknown VPN, reset password via official recovery, then retry.",
      zh: "开启自动日期时间，换不含不明 VPN 的干净网络，经官方流程重置密码后再试。",
    },
  },
  {
    id: "slow-lobby",
    title: {
      en: "Lobby feels extremely slow",
      zh: "大厅极度卡顿",
    },
    body: {
      en: "Thermal throttling, low RAM with many background chats, or congested mobile data can stall category shelves even when the APK itself is fine.",
      zh: "过热降频、后台聊天占满内存，或移动网络拥塞，都可能拖慢分类货架，即使 APK 本身没问题。",
    },
    fix: {
      en: "Close background apps, cool the phone, switch to Wi-Fi, and reopen the TPOWER App before reinstalling.",
      zh: "关掉后台、给手机降温、改连 Wi-Fi，先重开 TPOWER App，再考虑重装。",
    },
  },
  {
    id: "cashier-timeout",
    title: {
      en: "Cashier pages time out",
      zh: "收银页超时",
    },
    body: {
      en: "Payment endpoints need a stable path; captive portal Wi-Fi or flaky roaming can interrupt deposit forms mid-submit.",
      zh: "支付端点需要稳定通路；captive portal Wi-Fi 或不稳漫游，可能在提交中途打断存款表单。",
    },
    fix: {
      en: "Complete captive portal login first, retry on another network, and confirm you are inside the official app — not a browser clone tab.",
      zh: "先完成 portal 登录，换网络重试，并确认你在官方 APP 内，而不是浏览器仿冒标签页。",
    },
  },
  {
    id: "ios-outdated",
    title: {
      en: "iOS install path rejects the device",
      zh: "iOS 安装路径提示设备不符",
    },
    body: {
      en: "Builds aligned to iOS 14.0+ will refuse significantly older systems that lack required runtime APIs.",
      zh: "面向 iOS 14.0+ 的构建会拒绝明显过旧、缺少必要运行时接口的系统。",
    },
    fix: {
      en: "Update iOS when Apple still supports your device, or use the mobile web lobby until hardware can meet the minimum.",
      zh: "若设备仍获 Apple 支持请更新 iOS；否则先用手机网页大厅，直到硬件满足最低要求。",
    },
  },
  {
    id: "update-conflict",
    title: {
      en: "Update fails over an old install",
      zh: "覆盖旧版本更新失败",
    },
    body: {
      en: "Signature mismatches occur when an unofficial older package is later replaced by an official newer APK from a different signing lineage.",
      zh: "若旧包来自非官方，再用不同签名体系的官方新 APK 覆盖，就会出现签名不匹配。",
    },
    fix: {
      en: "Uninstall the untrusted build after backing out of open bets, then perform a clean official TPower Download install.",
      zh: "在结束未完成注单后卸载不可信构建，再进行一次干净的官方 TPOWER下载安装。",
    },
  },
];

export const downloadAppBenefits: Array<{
  id: string;
  icon: DownloadIconKey;
  title: LocalizedString;
  body: LocalizedString;
}> = [
  {
    id: "one-tap",
    icon: "smartphone",
    title: { en: "One-Tap Return to Lobby", zh: "一键回到大厅" },
    body: {
      en: "A home-screen icon beats retyping URLs on busy days. The TPOWER App keeps your Malaysia Casino App entry habitual and harder to spoof than random search results.",
      zh: "主屏图标胜过忙碌时重打网址。TPOWER App 让马来西亚博彩APP 入口成为习惯，也比随机搜索结果更难被仿冒。",
    },
  },
  {
    id: "push-cues",
    icon: "bell",
    title: { en: "Optional Status Alerts", zh: "可选状态提醒" },
    body: {
      en: "Notifications can surface cashier progress or promotion windows so you are not glued to manual refresh cycles that waste battery.",
      zh: "通知可提示收银进度或优惠窗口，不必紧盯手动刷新浪费电量。",
    },
  },
  {
    id: "stable-chrome",
    icon: "monitor",
    title: { en: "Dedicated UI Chrome", zh: "独立界面框架" },
    body: {
      en: "App navigation is tuned for thumb reach and category switching, reducing the clutter that browser toolbars add on small phones.",
      zh: "APP 导航按拇指可达与分类切换调校，减少小屏上浏览器工具栏带来的杂乱。",
    },
  },
  {
    id: "faster-reentry",
    icon: "zap",
    title: { en: "Faster Session Re-entry", zh: "更快重回会话" },
    body: {
      en: "Returning players often reach the lobby quicker than cold browser starts, especially after clearing site cookies for privacy hygiene.",
      zh: "回访玩家往往比冷启动浏览器更快进大厅，尤其在为隐私清理网站 cookie 之后。",
    },
  },
  {
    id: "cashier-focus",
    icon: "wallet",
    title: { en: "Cashier Clarity On the Go", zh: "出门也看清收银" },
    body: {
      en: "Deposit and withdrawal states stay readable while commuting, helping you confirm amounts before leaving a train platform Wi-Fi bubble.",
      zh: "通勤时存款与提现状态仍可读，方便你在离开车站 Wi-Fi 范围前确认金额。",
    },
  },
  {
    id: "promo-hub",
    icon: "star",
    title: { en: "Managed Promo Discovery", zh: "受管理的优惠发现" },
    body: {
      en: "Offers sit in a structured hub with terms still mandatory to read — convenience without pretending rules disappeared.",
      zh: "优惠放在有结构的专区，条款仍必须阅读——提供方便，却不假装规则消失。",
    },
  },
  {
    id: "vip-continuity",
    icon: "crown",
    title: { en: "VIP Continuity Mobile-First", zh: "VIP 连续体验偏手机" },
    body: {
      en: "Hosts, cashback timing, and priority cues travel with you, matching VIP page education instead of inventing a separate mobile rulebook.",
      zh: "管家、返水节奏与优先提示随身可达，对齐 VIP 页说明，而不是另造一套手机规则。",
    },
  },
  {
    id: "security-posture",
    icon: "shield",
    title: { en: "Stronger Install Posture", zh: "更强的安装姿态" },
    body: {
      en: "When you only ever install from TPower Download and APK docs, your supply chain stays auditable — something casual mobile-web bookmarks cannot guarantee alone.",
      zh: "若你始终只从 TPOWER下载与 APK 文档安装，供应链可追溯——单靠随手收藏的手机网页无法保证这一点。",
    },
  },
];

export const downloadChangelog: Array<{
  version: string;
  date: LocalizedString;
  notes: LocalizedString[];
}> = [
  {
    version: "3.2.1",
    date: { en: "20 July 2026", zh: "2026年7月20日" },
    notes: [
      {
        en: "Improved cashier status readability on mid-range Android devices.",
        zh: "提升中端 Android 上收银状态可读性。",
      },
      {
        en: "Stabilised live lobby transitions after background resume.",
        zh: "优化从后台回到前台后的大厅切换稳定性。",
      },
      {
        en: "Clarified first-launch permission copy for official APK installs.",
        zh: "澄清官方 APK 首次启动权限文案。",
      },
    ],
  },
  {
    version: "3.1.4",
    date: { en: "28 June 2026", zh: "2026年6月28日" },
    notes: [
      {
        en: "Reduced unnecessary background polling to save battery overnight.",
        zh: "减少不必要后台轮询，降低整夜耗电。",
      },
      {
        en: "Fixed rare promotion-card flicker on slower 4G networks.",
        zh: "修复较慢 4G 下偶发优惠卡片闪烁。",
      },
      {
        en: "Updated help deep-links to Contact and FAQ destinations.",
        zh: "更新帮助深链至客服与 FAQ 目的页。",
      },
    ],
  },
  {
    version: "3.0.9",
    date: { en: "2 June 2026", zh: "2026年6月2日" },
    notes: [
      {
        en: "Introduced adaptive bitrate behaviour for selected live tables.",
        zh: "为部分真人桌引入自适应码率行为。",
      },
      {
        en: "Hardened update-channel messaging against lookalike domains.",
        zh: "强化更新渠道提示，降低形近域名风险。",
      },
      {
        en: "Minor VIP badge alignment fixes on compact phone widths.",
        zh: "修正窄屏手机上 VIP 徽章对齐小问题。",
      },
    ],
  },
  {
    version: "2.9.5",
    date: { en: "10 May 2026", zh: "2026年5月10日" },
    notes: [
      {
        en: "Expanded Malaysian payment method labels inside cashier screens.",
        zh: "扩展收银页内马来西亚支付方式标签。",
      },
      {
        en: "Improved session recovery after brief network drops.",
        zh: "改善短暂断网后的会话恢复。",
      },
      {
        en: "Accessibility contrast polish on primary CTA buttons.",
        zh: "优化主 CTA 按钮对比度，提升无障碍可读性。",
      },
    ],
  },
];

export const downloadReviews: Array<{
  id: string;
  name: string;
  device: LocalizedString;
  rating: number;
  quote: LocalizedString;
}> = [
  {
    id: "amir",
    name: "Amir",
    device: { en: "Android 13 · Redmi", zh: "Android 13 · Redmi" },
    rating: 5,
    quote: {
      en: "TPower APK from the official page installed cleanly on my Redmi. Cashier statuses are clearer than mobile web when I am on LRT Wi-Fi.",
      zh: "从官方页下的 TPOWER APK 在我 Redmi 上一次装好。搭 LRT 用 Wi-Fi 时，收银状态比手机网页更清楚。",
    },
  },
  {
    id: "siti",
    name: "Siti",
    device: { en: "iPhone 13 · iOS 17", zh: "iPhone 13 · iOS 17" },
    rating: 5,
    quote: {
      en: "I wanted a proper Malaysia Casino App icon, not another bookmark. Login felt familiar and promotions still showed terms before I tapped in.",
      zh: "我想要真正的马来西亚博彩APP 图标，而不是又一个书签。登录很熟悉，优惠仍在我点进去前显示条款。",
    },
  },
  {
    id: "daniel",
    name: "Daniel",
    device: { en: "Android 12 · Samsung A52", zh: "Android 12 · Samsung A52" },
    rating: 4,
    quote: {
      en: "Live tables adapt when my data dips after work. Not flawless on congested 4G, but better than freezing at full resolution.",
      zh: "下班后流量变差时真人桌会调整。拥塞 4G 不是完美，但比死撑最高画质卡死好。",
    },
  },
  {
    id: "huiying",
    name: "Hui Ying",
    device: { en: "iPhone 12 · iOS 16", zh: "iPhone 12 · iOS 16" },
    rating: 5,
    quote: {
      en: "VIP cashback reminders on the TPOWER App help me plan evenings without camping on the desktop site all day.",
      zh: "TPOWER App 的 VIP 返水提醒帮我规划晚间，不必整天挂在电脑网站。",
    },
  },
  {
    id: "raj",
    name: "Raj",
    device: { en: "Android 14 · Pixel", zh: "Android 14 · Pixel" },
    rating: 4,
    quote: {
      en: "Appreciated the SHA256 note on the APK page. Takes an extra minute, but I sleep better than using chat-group files.",
      zh: "很认可 APK 页的 SHA256 说明。多花一分钟，比用聊天群文件睡得着。",
    },
  },
  {
    id: "farah",
    name: "Farah",
    device: { en: "Android 11 · Oppo", zh: "Android 11 · Oppo" },
    rating: 5,
    quote: {
      en: "Support helped when unknown sources confused me. Official TPower Download steps were clearer than forum screenshots.",
      zh: "被未知来源搞混时客服有帮上忙。官方 TPOWER下载步骤比论坛截图清楚。",
    },
  },
];

export const downloadStats: Array<{
  id: string;
  value: string;
  label: LocalizedString;
}> = [
  {
    id: "downloads",
    value: "100,000+",
    label: { en: "App downloads", zh: "APP 下载量" },
  },
  {
    id: "rating",
    value: "4.8/5",
    label: { en: "Average player rating", zh: "玩家平均评分" },
  },
  {
    id: "install-time",
    value: "~2 min",
    label: { en: "Typical install time", zh: "典型安装时长" },
  },
  {
    id: "apk-size",
    value: "48.6 MB",
    label: { en: "Current APK size", zh: "当前 APK 体积" },
  },
  {
    id: "version",
    value: "3.2.1",
    label: { en: "Latest app version", zh: "最新 APP 版本" },
  },
  {
    id: "platforms",
    value: "2",
    label: { en: "Platforms · Android & iOS", zh: "平台 · Android 与 iOS" },
  },
  {
    id: "support",
    value: "24/7",
    label: { en: "Support availability", zh: "客服可用时段" },
  },
];

export const downloadRelated: Array<{
  href: string;
  title: LocalizedString;
  description: LocalizedString;
}> = [
  {
    href: "/apk",
    title: { en: "TPower APK Guide", zh: "TPOWER APK 指引" },
    description: {
      en: "Deep-dive Android package steps, verification cues, and safer sideload habits.",
      zh: "深入 Android 安装包步骤、核验提示与更安全的侧载习惯。",
    },
  },
  {
    href: "/register",
    title: { en: "Register", zh: "注册" },
    description: {
      en: "Create your TPOWER account before or right after installing the official app.",
      zh: "在安装官方 APP 之前或之后，建立你的 TPOWER 账号。",
    },
  },
  {
    href: "/login",
    title: { en: "Login", zh: "登录" },
    description: {
      en: "Return to your lobby with the same credentials across phone and desktop.",
      zh: "用同一凭证在手机与电脑回到你的大厅。",
    },
  },
  {
    href: "/promotions",
    title: { en: "Promotions", zh: "优惠专区" },
    description: {
      en: "Compare welcome, reload, and cashback offers with terms still visible.",
      zh: "比较欢迎礼、充值礼与返水，条款仍然可见。",
    },
  },
  {
    href: "/vip",
    title: { en: "VIP Club", zh: "VIP 俱乐部" },
    description: {
      en: "Understand tier benefits you can monitor on the go inside the TPOWER App.",
      zh: "了解可在 TPOWER App 随身关注的等级权益。",
    },
  },
  {
    href: "/payment-methods",
    title: { en: "Payment Methods", zh: "支付方式" },
    description: {
      en: "Review Malaysian rails before your first in-app deposit or withdrawal.",
      zh: "首次 APP 内存款或提现前，先了解马来西亚支付通道。",
    },
  },
  {
    href: "/security",
    title: { en: "Security", zh: "安全说明" },
    description: {
      en: "Operational hygiene that pairs with official download discipline.",
      zh: "与官方下载纪律配套的操作卫生说明。",
    },
  },
  {
    href: "/responsible-gaming",
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    description: {
      en: "Set limits and cooler habits alongside mobile convenience.",
      zh: "在享受手机便利的同时设置限额与更冷静的习惯。",
    },
  },
  {
    href: "/faq",
    title: { en: "FAQ", zh: "常见问题" },
    description: {
      en: "Broader platform answers beyond install and APK topics.",
      zh: "安装与 APK 之外的更广平台问答。",
    },
  },
  {
    href: "/games",
    title: { en: "Games Lobby", zh: "游戏大厅" },
    description: {
      en: "Pre-plan slots, live, sports, and fishing favourites before opening the app.",
      zh: "打开 APP 前先规划老虎机、真人、体育与捕鱼收藏。",
    },
  },
  {
    href: "/contact",
    title: { en: "Contact Support", zh: "联系客服" },
    description: {
      en: "Escalate install errors with device model, OS, and exact failure timing.",
      zh: "携带机型、系统与准确失败时间升级安装问题。",
    },
  },
];

export const downloadNewsSlugs: string[] = [
  "platform-performance-update-july-2026",
  "vip-host-coverage-expanded",
  "duitnow-and-ewallet-tips",
  "new-live-casino-tables",
];
export const downloadSeoArticle: {
  title: LocalizedString;
  sections: Array<{ heading: LocalizedString; paragraphs: LocalizedString[] }>;
} = {
  title: {
    en: "TPower Download Guide: Official TPOWER App, TPower APK, and Malaysia Casino App Install Clarity",
    zh: "TPOWER下载完整指南：TPOWER官方APP、TPOWER APK 与马来西亚博彩APP 安装说明",
  },
  sections: [
    {
      heading: {
        en: "Why TPower Download Matters for Malaysia Players",
        zh: "为什么马来西亚玩家需要认真对待 TPOWER下载",
      },
      paragraphs: [
        {
          en: "TPower Download is more than a button. For Malaysia players comparing mobile options, it is the difference between a calm official install and a chaotic scavenger hunt across forums, messaging groups, and lookalike domains. The TPOWER App should arrive through documented channels that publish version strings, approximate package size, and platform minimums. When those signals are missing, you are no longer evaluating a Malaysia Casino App — you are gambling on the file itself before a single spin or bet is placed.",
          zh: "TPOWER下载不只是一个按钮。对比较手机方案的马来西亚玩家来说，它决定你是走冷静的官方安装，还是在论坛、聊天群和形近域名里大海捞针。TPOWER官方APP 应从公开版本号、大约体积与系统最低要求的记录渠道获取。缺少这些信号时，你评估的已不是马来西亚博彩APP，而是在开玩前先对文件本身冒险。",
        },
        {
          en: "Search intent around TPower Download, TPower App, and TPower APK usually clusters into practical questions: Is Android supported? Does iOS have a path? How long does install take? Are local payments available after login? This page answers those questions with operational detail rather than slogan stacks. You can move from orientation into [[/apk|TPower APK]], create an account via [[/register|Register]], or return through [[/login|Login]] once the client is on your home screen.",
          zh: "围绕 TPOWER下载、TPOWER App、TPOWER APK 的搜索，多半是实务问题：Android 行不行？iOS 有没有路径？要装多久？登录后能否本地支付？本页用可操作细节回答，而不是堆口号。你可以继续看 [[/apk|TPOWER APK]]，经 [[/register|注册]] 开户，或装好后走 [[/login|登录]] 回到大厅。",
        },
        {
          en: "EEAT for a download hub means showing process literacy. We explain why unknown-source prompts appear, why storage headroom matters beyond the raw 48.6 MB APK figure, and why urgent SMS reinstall campaigns deserve scepticism. We also connect install hygiene to later cashouts: mismatched names and skipped verification hurt withdrawals whether you play on desktop or inside the official app. Mobile convenience never overrides ownership rules documented on [[/payment-methods|Payment Methods]].",
          zh: "下载中枢的 EEAT，体现在懂流程。我们说明为何出现未知来源提示、为何除了约 48.6 MB 的 APK 还要预留存储，以及为何紧急重装短信值得怀疑。我们也把安装卫生连到日后提现：姓名不符、跳过验证，不论桌面还是官方 APP 都会拖慢出款。手机方便不能凌驾 [[/payment-methods|支付方式]] 记录的归属规则。",
        },
        {
          en: "Finally, TPower Download sits inside a wider official topic cluster. After install, explore [[/games|Games]], compare [[/promotions|Promotions]], review [[/vip|VIP]] continuity, and keep [[/responsible-gaming|Responsible Gaming]] tools active. The goal is a durable Malaysia Casino App habit built on clarity — not a one-time sideload that leaves you unsure which icon is trustworthy next month.",
          zh: "最后，TPOWER下载属于更广的官方主题集群。装好后可逛 [[/games|游戏大厅]]、比较 [[/promotions|优惠]]、了解 [[/vip|VIP]] 连续性，并保持 [[/responsible-gaming|负责任博彩]] 工具开启。目标是建立清楚、耐用的马来西亚博彩APP 习惯——而不是一次侧载后，下个月连哪个图标可信都不知道。",
        },
      ],
    },
    {
      heading: {
        en: "TPOWER App Versus Mobile Web: Choosing the Right Entry",
        zh: "TPOWER App 与手机网页：如何选入口",
      },
      paragraphs: [
        {
          en: "Mobile web remains useful when you cannot install yet, when you are on a borrowed device, or when you simply want to read guides before committing storage. The browser path does not require an APK and can open [[/faq|FAQ]] or educational articles quickly. However, habitual players often prefer the TPOWER App because a dedicated icon reduces phishing exposure from improvised search results and shortens re-entry into the lobby after busy workdays.",
          zh: "暂时不能安装、借用设备，或想先读指南再占存储时，手机网页仍然有用。浏览器路径不必 APK，也能快速打开 [[/faq|常见问题]] 或说明文章。但习惯性玩家往往更偏好 TPOWER App：独立图标减少临时搜索带来的钓鱼暴露，下班后重回大厅也更快。",
        },
        {
          en: "Feature expectations should stay honest. Account rules, promotion wagering, and withdrawal ownership checks are identical across surfaces. The app advantage is presentation and continuity: optional notifications, thumb-friendly navigation, and cashier statuses that remain readable while you commute. If a seller claims the APK secretly removes wagering, treat that as a malware-shaped lie. Official clients do not rewrite compliance for marketing theatre.",
          zh: "功能预期要诚实。账户规则、优惠流水与提现归属核对，在各入口一致。APP 的优势是呈现与连续：可选通知、拇指友好导航，以及通勤时仍可读的收银状态。若有人声称 APK 能偷偷取消流水，请当成恶意软件式谎言。官方客户端不会为营销表演改写合规。",
        },
        {
          en: "A practical decision rule helps. Choose TPower Download when you want a lasting Malaysia Casino App shortcut and can meet Android 8.0+ or iOS 14.0+ minimums. Stay on mobile web when storage is critically low or when you are still comparing providers on [[/providers|Providers]] before registering. Many players do both: research on the site, then install once they are ready to keep the icon.",
          zh: "可用一条实务规则：若你要长期马来西亚博彩APP 快捷方式，且满足 Android 8.0+ 或 iOS 14.0+，就走 TPOWER下载；存储极紧，或还在 [[/providers|游戏厂商]] 比较、尚未注册，可先留在手机网页。很多人两条都用：先在网站研究，准备好再安装图标。",
        },
      ],
    },
    {
      heading: {
        en: "Android Path: Understanding TPower APK Without Fear or Myths",
        zh: "Android 路径：不慌不神话地理解 TPOWER APK",
      },
      paragraphs: [
        {
          en: "TPower APK searches spike because Android distribution outside default stores is common for specialised entertainment clients in the region. An APK is simply a package format. Risk comes from untrusted redistribution, not from the letters A-P-K themselves. The official [[/apk|APK guidance page]] exists to separate those ideas with version 3.2.1 details, size expectations near 48.6 MB, and reminders to refuse renamed chat attachments.",
          zh: "TPOWER APK 搜索升高，是因为区域内专项娱乐客户端常在默认商店外分发。APK 只是一种包装格式。风险来自不可信二次分发，而不是 A-P-K 三个字母本身。官方 [[/apk|APK 指引页]] 用 3.2.1 版本信息、约 48.6 MB 体积预期，以及拒绝聊天改名附件的提醒，把这些概念分开。",
        },
        {
          en: "Permission literacy prevents panic. When Android asks to allow installs from the browser or files app you used, it is enforcing a boundary, not accusing you of wrongdoing. Enable the permission for that source, complete the official package install, then tighten unknown-source access again. Leaving every installer unlocked is how casual malware rides along with unrelated downloads later in the week.",
          zh: "懂权限才不会慌。Android 要求允许你使用的浏览器或文件应用安装时，是在设边界，不是指控你做错事。仅为该来源开启、完成官方包安装，再收紧未知来源。若所有安装器长期解锁，本周稍后不相干的下载就可能顺带带上恶意软件。",
        },
        {
          en: "Verification habits scale with your risk tolerance. Casual users can match version string, update date, and approximate size. More security-conscious players follow the SHA256 note referenced in download metadata and on the APK journey. Either way, abort if filenames look theatrical (“TPOWER_MOD_FAST”) or if a stranger demands remote desktop access to “help you install.” Official [[/contact|Contact]] support will ask for device facts, not full passwords.",
          zh: "核验习惯可按风险偏好调节。一般用户对照版本号、更新日期与大约体积即可；更谨慎者按下载元数据与 APK 流程中的 SHA256 说明核验。无论哪种，若文件名夸张（如“TPOWER_MOD_FAST”），或陌生人要求远程桌面“帮你装”，请立即停止。官方 [[/contact|客服]] 要的是设备事实，不是完整密码。",
        },
        {
          en: "After a clean Android install, open the TPOWER App, allow the first network check, and sign in with the account you created through [[/register|registration]]. If you still need orientation on game categories, skim [[/slots|Slots]] or [[/live-casino|Live Casino]] on the site first so your first mobile session has a plan. A Malaysia Casino App is easiest to enjoy when bankroll and category choices are decided before adrenaline climbs.",
          zh: "Android 干净安装后，打开 TPOWER App，允许首次联网检查，并用 [[/register|注册]] 账号登录。若仍需了解游戏分类，可先在网站浏览 [[/slots|老虎机]] 或 [[/live-casino|真人视讯]]，让首场手机娱乐有计划。资金与品类在情绪升高前先定好，马来西亚博彩APP 更好玩。",
        },
      ],
    },
    {
      heading: {
        en: "iOS Path: Stability, Updates, and Realistic Expectations",
        zh: "iOS 路径：稳定、更新与务实预期",
      },
      paragraphs: [
        {
          en: "iOS users evaluating TPower Download should focus on system currency and network stability more than obscure toggles. Builds aligned to iOS 14.0+ expect modern runtime capabilities. If your device can still receive Apple updates, apply them before blaming the client. If hardware is locked to an older unsupported system, mobile web may remain the safer bridge until you change devices.",
          zh: "iOS 用户看 TPOWER下载，应更关注系统是否够新、网络是否稳定，而不是冷门开关。面向 iOS 14.0+ 的构建需要较新的运行能力。设备若仍能接收 Apple 更新，请先更新再责怪客户端。若硬件锁在不受支持的旧系统，手机网页可当更安全的过渡，直到换机。",
        },
        {
          en: "Trust on iOS also means rejecting unrelated configuration profiles pushed by unofficial “helpers.” Stick to documented TPOWER instructions published with this Download hub. After install, the same login credentials unlock cashier and promotions. Pair the app with [[/security|Security]] reading if you share a household of devices and want clearer session hygiene rules.",
          zh: "iOS 上的信任，也包括拒绝非官方“帮手”推送的无关描述文件。请只跟本下载中枢记录的 TPOWER 说明。装好后同一登录凭证解锁收银与优惠。若家中多设备共用，可搭配 [[/security|安全说明]]，把会话卫生规则看清楚。",
        },
        {
          en: "Performance expectations should match mid-range realities. Live streams prefer Wi-Fi; sports markets tolerate brief latency better than high-motion video. Keep an eye on thermal throttling during long sessions in hot Malaysian climates — cooling the phone often restores smoothness faster than reinstalling. Reinstall is a last resort after network and storage basics are checked.",
          zh: "性能预期要对齐中端现实。真人串流更吃 Wi-Fi；体育盘口比高动态视频更能忍受短暂延迟。马来西亚炎热气候下长玩要注意过热降频——给手机降温，往往比重装更快恢复流畅。网络与存储基本项查完后，重装才是最后手段。",
        },
      ],
    },
    {
      heading: {
        en: "Security Habits That Protect Every Malaysia Casino App Session",
        zh: "保护每场马来西亚博彩APP 会话的安全习惯",
      },
      paragraphs: [
        {
          en: "Download security is a chain. The first link is source control: only TPower Download and the official APK documentation. The second link is device posture: lock screens, refusal to share wallet accounts casually, and signing out on borrowed phones. The third link is cognitive: scepticism toward urgent reinstall SMS, clone domains, and patched packages promising impossible bonuses. Break any link and later [[/security|Security]] advice becomes damage control.",
          zh: "下载安全是一条链。第一环是来源控制：只走 TPOWER下载与官方 APK 文档。第二环是设备姿态：锁屏、不随便共用钱包账号、借用手机要登出。第三环是认知：怀疑紧急重装短信、仿冒域名，以及承诺不可能优惠的破解包。任一环断裂，之后的 [[/security|安全说明]] 就变成事后补救。",
        },
        {
          en: "Credential hygiene deserves plain language. Your TPOWER password should not match important email passwords. OTPs are single-use and never for “verification agents” who message first. Hosts and support will not ask you to install a second mystery APK mid-chat. If someone claiming VIP authority pushes an off-channel file, pause and verify through [[/contact|Contact]] using your own bookmark — not their link.",
          zh: "凭证卫生要用白话。TPOWER 密码不应与重要邮箱相同。OTP 一次性使用，绝不给主动私信的“验证专员”。管家与客服不会在聊天中途要你再装一个神秘 APK。若有人自称 VIP 权威却推场外文件，请暂停，并用自己收藏的 [[/contact|客服]] 入口核实——不要点对方的链接。",
        },
        {
          en: "Update discipline closes the loop. When 3.2.1 is replaced, return to the same channel rather than accepting a “faster mirror.” Mixing an honest first install with a random later file reintroduces supply-chain risk precisely when you have balances and pending withdrawals. Keep educational bookmarks to [[/faq|FAQ]] and this Download page so future you does not rely on memory alone.",
          zh: "更新纪律把闭环收好。当 3.2.1 被取代，请回同一渠道，而不是接受“更快镜像”。先诚实安装、后随机更新，正好在你有余额与待处理提现时把供应链风险带回来。请收藏 [[/faq|常见问题]] 与本下载页，别只靠记忆。",
        },
        {
          en: "Responsible security also includes emotional brakes. After a losing streak, players sometimes chase unofficial “recovery tools.” That is when patched loaders spread. Use [[/responsible-gaming|Responsible Gaming]] limits before pain peaks, and treat install decisions as cold operational choices — never as revenge mechanics.",
          zh: "负责任的安全也包括情绪刹车。连亏后，有人会去找非官方“翻本工具”，破解加载器往往这时传播。请在痛苦升高前启用 [[/responsible-gaming|负责任博彩]] 限额，并把安装决策当成冷静的运营选择——绝不是报复机制。",
        },
      ],
    },
    {
      heading: {
        en: "Performance, Compatibility, and What Mid-Range Phones Can Expect",
        zh: "性能、兼容性，以及中端手机可期待什么",
      },
      paragraphs: [
        {
          en: "A credible Malaysia Casino App story talks about everyday devices, not only flagship demos. TPOWER App guidance lists Android 8.0+ and iOS 14.0+, recommends roughly 3–4 GB RAM, and asks for about 150 MB free when you include cache beyond the 48.6 MB package. Those numbers exist so you can self-qualify before wasting mobile data on a doomed install attempt.",
          zh: "可信的马来西亚博彩APP 叙事谈日常设备，而不只谈旗舰演示。TPOWER App 说明列出 Android 8.0+ 与 iOS 14.0+，建议约 3–4 GB 内存，并在 48.6 MB 安装包之外预留约 150 MB（含缓存）。这些数字是让你先自我评估，避免流量浪费在注定失败的安装上。",
        },
        {
          en: "Lobby navigation should feel snappy on Wi-Fi and acceptable on busy 4G. Live casino will adapt when bandwidth drops because frozen maximum resolution helps no one mid-hand. Slots keep UI chrome lighter so artwork leads. If everything is slow, check thermal state and background chat apps before concluding the client is broken. Reinstalling over a heat-throttled phone rarely fixes root causes.",
          zh: "大厅在 Wi-Fi 上应利落，在繁忙 4G 上应可接受。带宽下降时真人视讯会调整，因为半局卡在最高画质对谁都没好处。老虎机界面更轻，让画面主导。若全面变慢，先查过热与后台聊天占用，再断定客户端坏了。在已经降频的发烫手机上重装，很少能解决根因。",
        },
        {
          en: "Compatibility tables on this page cover RAM, storage, network, supported OS, and recommended version so households can compare an older Android handset against a newer iPhone honestly. Tablets may run the client when OS minimums are met, though layouts remain phone-first in spirit. Desktop users can keep using the browser lobby while phones handle on-the-go sessions — account identity stays shared.",
          zh: "本页兼容表覆盖内存、存储、网络、支持系统与建议版本，方便家庭如实比较旧 Android 与较新 iPhone。平板在满足系统最低要求时可运行，但布局精神仍偏手机优先。桌面用户可继续用浏览器大厅，手机负责随身会话——账户身份保持共用。",
        },
      ],
    },
    {
      heading: {
        en: "Payments, Promotions, and VIP Continuity After Install",
        zh: "安装后的支付、优惠与 VIP 连续体验",
      },
      paragraphs: [
        {
          en: "Install success is only the doorway. Real satisfaction shows up when deposits and withdrawals behave predictably. Read [[/payment-methods|Payment Methods]] before your first larger cashier action inside the TPOWER App. Match beneficiary names, understand banking windows, and keep deposit sources consistent. Mobile UI clarity helps you see statuses; it does not invent instant banks that ignore partner cut-offs.",
          zh: "安装成功只是门口。真正满意出现在存款与提现可预期之时。在 TPOWER App 做首次较大收银动作前，先读 [[/payment-methods|支付方式]]。核对收款姓名、了解银行窗口、保持充值来源一致。手机界面清晰帮你看状态，但不会发明无视合作方截止时间的“秒到银行”。",
        },
        {
          en: "Promotions inside the app still require literacy. Open terms for wagering, contribution, and expiry before opting in. Cross-check unusual claims against the public [[/promotions|Promotions]] hub on this site. The Malaysia Casino App should make offers discoverable, not mysterious. If an in-chat stranger promises a private APK bonus denser than published campaigns, walk away.",
          zh: "APP 内优惠同样需要识读力。领取前打开流水、贡献与到期条款。异常说法请对照本站公开 [[/promotions|优惠专区]]。马来西亚博彩APP 应让优惠可发现，而不是神秘化。若聊天陌生人承诺比公开活动更密的“私有 APK 彩金”，请离开。",
        },
        {
          en: "VIP members gain continuity rather than a separate physics engine. Host cues, cashback timing, and priority review awareness can travel with you in the TPOWER App, aligned with education on [[/vip|VIP]]. Higher tiers still reward organised accounts. Pair VIP excitement with Responsible Gaming limits so premium leisure stays leisure. Portable benefits should never become portable pressure.",
          zh: "VIP 得到的是连续性，不是另一套物理引擎。管家提示、返水节奏与优先审核感知可随 TPOWER App 同行，并与 [[/vip|VIP]] 页说明对齐。更高等级仍奖励资料整齐的账户。把 VIP 兴奋与负责任限额绑在一起，让高端休闲保持休闲。可随身的权益，不应变成可随身的压力。",
        },
      ],
    },
    {
      heading: {
        en: "Troubleshooting Mindset: Fix Causes, Not Symptoms",
        zh: "排障心态：修原因，不修表象",
      },
      paragraphs: [
        {
          en: "Most install failures cluster into storage, permission, network, or corrupt-file categories. The troubleshooting cards on this Download page map those patterns to concrete fixes: free 150 MB, allow the correct source app, switch to Wi-Fi, re-download instead of resuming a mystery partial file. Jumping straight to unofficial “repair APKs” usually worsens signature conflicts later.",
          zh: "多数安装失败可归入存储、权限、网络或文件损坏。本下载页排障卡片把这些模式映射到具体修复：腾出 150 MB、允许正确来源应用、改连 Wi-Fi、重新下载而不是续传神秘半截文件。一头扎进非官方“修复 APK”，往往让日后签名冲突更糟。",
        },
        {
          en: "Login loops after opening the client deserve systematic checks: automatic date/time, clean network without unknown VPNs, and credential resets through official recovery — not through comment-section wizards. Cashier timeouts frequently trace to captive portal Wi-Fi that never completed login. Finish the portal, confirm you are inside the real app, then retry once.",
          zh: "打开客户端后的登录死循环，值得系统排查：自动日期时间、不含不明 VPN 的干净网络，以及经官方找回改密——不是评论区向导。收银超时常常来自未完成登录的 captive portal Wi-Fi。先完成 portal，确认在真 APP 内，再重试一次。",
        },
        {
          en: "When self-fixes fail, escalate with precision. [[/contact|Contact]] support needs device model, OS version, exact timestamp, and whether you used the official APK route. Vague reports slow everyone down. While waiting, do not accept replacement packages from social media. Patience protects the same trust chain you built by choosing TPower Download in the first place.",
          zh: "自助无效时，精准升级。[[/contact|客服]] 需要机型、系统版本、准确时间戳，以及是否走官方 APK。含糊描述拖慢所有人。等待时不要接受社交媒体替代包。耐心保护的，正是你最初选择 TPOWER下载时建立的同一条信任链。",
        },
      ],
    },
    {
      heading: {
        en: "Building a Healthier Long-Term Mobile Habit",
        zh: "建立更健康的长期手机使用习惯",
      },
      paragraphs: [
        {
          en: "A Malaysia Casino App becomes part of daily rhythm quickly. That is useful for checking cashier progress and promotions — and risky if it becomes an always-on stress loop. Before notifications multiply, configure [[/responsible-gaming|Responsible Gaming]] deposit limits and cool-offs. Decide entertainment budgets in daylight hours, not only after midnight streams.",
          zh: "马来西亚博彩APP 很快会进入日常节奏。这对查看收银进度与优惠有用——若变成全天候压力循环则危险。在通知变多之前，先配置 [[/responsible-gaming|负责任博彩]] 存款限额与冷静选项。娱乐预算尽量在白天决定，而不是只在午夜串流之后。",
        },
        {
          en: "Combine app convenience with site education. Read [[/news|News]] for platform updates, browse [[/blog|Blog]] guides for process literacy, and revisit this TPower Download article when a friend asks how to install safely. Teaching others to refuse chat-group APKs is community hygiene that also protects your own environment from shared-family mistakes.",
          zh: "把 APP 便利与网站教育结合。看 [[/news|最新消息]] 了解平台更新，读 [[/blog|博彩攻略]] 提升流程识读，朋友问如何安全安装时重温这篇 TPOWER下载文章。教别人拒绝聊天群 APK，是社区卫生，也能减少家人共用设备时的失误波及你。",
        },
        {
          en: "Long-term trust is repetitive on purpose. Official sources, verified updates, readable cashier habits, VIP continuity without pressure, and responsible limits form a loop you can sustain. The TPOWER App is a tool for portable access to TPOWER online betting entertainment — not a shortcut around judgement. Keep the icon; keep the standards.",
          zh: "长期信任故意重复这些要点：官方来源、可核验更新、可读的收银习惯、没有压迫感的 VIP 连续，以及负责任限额，组成可维持的闭环。TPOWER官方APP 是随身进入 TPOWER线上博彩 的工具——不是绕过判断力的捷径。保留图标，也保留标准。",
        },
      ],
    },
    {
      heading: {
        en: "How Screenshots and Changelog Support Buyer Confidence",
        zh: "截图与更新日志如何建立信心",
      },
      paragraphs: [
        {
          en: "Premium download pages earn trust when they show what the product actually looks like after install. The TPOWER App screenshot set on this hub maps Lobby, Slots, Live Casino, Sports, Promotions, VIP, Deposit, and Withdrawal to real interface atmospheres rather than generic stock phones. That visual honesty helps Malaysia players decide whether the Malaysia Casino App matches the desktop catalogue they already researched on [[/games|Games]]. Screenshots are not decoration; they are pre-install orientation that reduces surprise churn in the first ten minutes.",
          zh: "高端下载页靠“装好后长什么样”建立信任。本中枢的 TPOWER App 截图把大厅、老虎机、真人视讯、体育、优惠、VIP、存款与提现对应到真实界面氛围，而不是通用库存手机图。视觉诚实帮助马来西亚玩家判断博彩APP 是否对齐他们已在 [[/games|游戏大厅]] 研究过的桌面目录。截图不是装饰，而是装前导览，减少前十分钟的意外流失。",
        },
        {
          en: "Changelog entries for 3.2.1 and earlier builds play a similar EEAT role. When players see notes about cashier readability, battery polling, adaptive live streams, and help deep-links, they understand that TPower Download is maintained as a product surface — not a static brochure. Version transparency also helps you detect fake update messages that invent version numbers never published here or on the [[/apk|APK]] page. If an SMS cites a build you cannot find in the changelog, treat it as hostile until [[/contact|Contact]] confirms otherwise.",
          zh: "3.2.1 与更早版本的更新日志承担类似 EEAT 角色。当玩家看到收银可读性、耗电轮询、自适应真人串流与帮助深链等说明，会明白 TPOWER下载 是持续维护的产品面，而不是静态宣传册。版本透明也帮你识别伪造更新短信——它们常编造此处或 [[/apk|APK]] 页从未公布的版本号。若短信引用你在日志里找不到的构建，在 [[/contact|客服]] 确认前请视为敌意信息。",
        },
        {
          en: "Reviews from Malaysia first-name testers on common Android and iPhone devices further ground expectations: mid-range Redmi and Samsung handsets, recent iPhones, and the reality that congested 4G is imperfect even when adaptive streaming helps. Star ratings should be read alongside qualitative notes, not as a substitute for your own storage and network checks. Confidence compounds when visuals, changelog, reviews, and official install steps all point to the same boring supply chain.",
          zh: "来自马来西亚常见 Android 与 iPhone 的名字评价，进一步锚定预期：中端 Redmi 与 Samsung、较新 iPhone，以及拥塞 4G 即使有自适应串流也不完美的现实。星级应连同文字一起看，不能替代你自己的存储与网络检查。当视觉、日志、评价与官方安装步骤都指向同一条无聊供应链时，信心才会叠加。",
        },
        {
          en: "Use those artefacts together. Glance at screenshots to confirm category coverage, skim the latest changelog before updating, and only then tap through TPower Download or TPower APK actions. If a third-party page shows mismatched artwork or invents features absent from [[/promotions|Promotions]] and [[/vip|VIP]] education, you have already found a reason to leave. Official storytelling is consistent across surfaces; counterfeit pages usually overpromise in one corner and underspecify in another.",
          zh: "请把这些材料一起用。先看截图确认品类覆盖，更新前浏览最新日志，再点击 TPOWER下载 或 TPOWER APK 动作。若第三方页展示对不上的画面，或编造 [[/promotions|优惠]] 与 [[/vip|VIP]] 说明里没有的功能，你已经找到离开的理由。官方叙事跨页面一致；仿冒页往往一角过度承诺、另一角含糊其辞。",
        },
      ],
    },
    {
      heading: {
        en: "Internal Linking Map for Ongoing Mobile Success",
        zh: "持续手机成功所需的内链地图",
      },
      paragraphs: [
        {
          en: "A strong TPower Download journey does not strand you on a single URL. After the icon is on your home screen, keep learning through the same official cluster that earned your install trust. [[/register|Register]] and [[/login|Login]] remain the identity pair. [[/payment-methods|Payment Methods]] and [[/security|Security]] protect money movement. [[/faq|FAQ]] answers edge cases that do not deserve a full article every time. This interlinking is deliberate SEO architecture and practical UX at once.",
          zh: "强的 TPOWER下载 旅程不会把你困在单一网址。图标上主屏后，请继续通过赢得你安装信任的同一官方集群学习。[[/register|注册]] 与 [[/login|登录]] 仍是身份配对。[[/payment-methods|支付方式]] 与 [[/security|安全说明]] 保护资金流动。[[/faq|常见问题]] 回答不必每次写成整篇文章的边缘情况。这种内链既是刻意的 SEO 架构，也是务实 UX。",
        },
        {
          en: "Category pages keep entertainment intentional. Open [[/slots|Slots]] when you want paced mobile sessions, [[/live-casino|Live Casino]] when you want hosted tables, and [[/sports|Sports]] when markets align with your evening schedule. Fishing, crash, and lottery shelves remain available through the broader [[/games|Games]] hub. Choosing a category before opening the TPOWER App reduces impulsive hopping that drains both bankroll and battery.",
          zh: "分类页让娱乐保持有意图。想要节奏型手机场次就打开 [[/slots|老虎机]]；想要有主持的桌子就打开 [[/live-casino|真人视讯]]；盘口对齐晚间行程时看 [[/sports|体育博彩]]。捕鱼、爆点与彩票仍可通过更广的 [[/games|游戏大厅]] 进入。打开 TPOWER App 前先选品类，能减少冲动跳转，同时省资金与电量。",
        },
        {
          en: "Promotions and VIP materials deserve the same slow reading habit on mobile that careful players already use on desktop. The app makes discovery faster; your judgement should not become faster than comprehension. When a campaign references contribution quirks, confirm details on [[/promotions|Promotions]] or ask through [[/contact|Contact]] before opting in from a phone notification. Speed without literacy is how mobile convenience turns expensive.",
          zh: "优惠与 VIP 材料在手机上值得保持与桌面同样的慢读习惯。APP 让发现更快；你的判断不该快过理解。当活动涉及贡献细节，请先在 [[/promotions|优惠]] 确认，或经 [[/contact|客服]] 询问，再根据手机通知领取。没有识读力的速度，会让手机便利变得昂贵。",
        },
        {
          en: "News and blog content close the literacy loop. Platform performance notes, host coverage updates, and payment tips published under [[/news|News]] explain why an app update might emphasise cashier stability one month and live tables the next. Process guides under [[/blog|Blog]] teach registration, login, and download checklists for friends who are earlier in the journey. Sharing official links — not APK binaries — is the safest way to help someone start TPower Download correctly.",
          zh: "新闻与攻略收束识读闭环。[[/news|最新消息]] 下的性能说明、管家覆盖更新与支付提示，解释为何某个月更新强调收银稳定、下个月强调真人桌。[[/blog|博彩攻略]] 下的流程指南，把注册、登录与下载清单教给旅程更早的朋友。分享官方链接——而不是 APK 二进制——才是帮人正确开始 TPOWER下载 的最安全方式。",
        },
        {
          en: "Keep [[/responsible-gaming|Responsible Gaming]] pinned beside the app icon in your mental model. Portable access is powerful; portable restraint is what keeps the Malaysia Casino App relationship healthy across months of sports calendars and promotion seasons. When limits, cool-offs, and support routes stay visible, TPOWER线上博彩 style mobile play remains entertainment with boundaries — the standard this Download hub is built to defend.",
          zh: "在心里把 [[/responsible-gaming|负责任博彩]] 钉在 APP 图标旁边。随身访问很有力量；随身克制才让马来西亚博彩APP 关系在数月赛程与优惠季中保持健康。当限额、冷静与客服路径保持可见，TPOWER线上博彩 风格的手机娱乐才是有边界的娱乐——这正是本下载中枢要守住的标准。",
        },
      ],
    },
    {
      heading: {
        en: "Step-By-Step Recap Before You Install",
        zh: "安装前逐步复盘",
      },
      paragraphs: [
        {
          en: "Confirm platform eligibility (Android 8.0+ or iOS 14.0+), free roughly 150 MB, and bookmark this Download page plus [[/apk|APK]] if you need Android packaging detail. Create or recover your account via [[/register|Register]] / [[/login|Login]]. Install only from official prompts, verify version 3.2.1 cues, and open the TPOWER App for a first network check.",
          zh: "确认系统资格（Android 8.0+ 或 iOS 14.0+），预留约 150 MB，收藏本下载页；需要 Android 包装细节再收藏 [[/apk|APK]]。经 [[/register|注册]] / [[/login|登录]] 建立或找回账号。只跟官方提示安装，核对 3.2.1 信号，打开 TPOWER App 做首次联网检查。",
        },
        {
          en: "Sign in, review cashier readiness using [[/payment-methods|Payment Methods]] knowledge, skim active [[/promotions|Promotions]] terms, and set Responsible Gaming controls before the first mobile deposit. If anything fails, use the troubleshooting section and [[/contact|Contact]] with precise device data. That sequence is the entire point of a premium TPower Download experience: clarity first, entertainment second, always on official rails.",
          zh: "登录后，用 [[/payment-methods|支付方式]] 知识检查收银就绪，浏览进行中的 [[/promotions|优惠]] 条款，并在首次手机存款前设置负责任控制。若有失败，使用排障章节，并以精确设备资料联系 [[/contact|客服]]。这套顺序正是高端 TPOWER下载体验的重点：先清楚，再娱乐，始终走官方轨道。",
        },
        {
          en: "If you remember only one paragraph, remember this: TPower Download, TPower APK, and the TPOWER App are trustworthy only when the supply chain stays boring — documented URLs, published sizes, predictable permissions, and sober support paths. Boring is good. Boring is how Malaysia players keep a Malaysia Casino App useful for months instead of regrettable for an afternoon.",
          zh: "若只记一段，请记这个：TPOWER下载、TPOWER APK 与 TPOWER官方APP 只有在供应链保持“无聊”时才可信——记录在案的网址、公开体积、可预期权限，以及冷静的客服路径。无聊是好事。无聊让马来西亚玩家把博彩APP 用上数月，而不是后悔一个下午。",
        },
      ],
    },
  ],
};
