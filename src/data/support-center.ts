import type { LocalizedString } from "@/types";

export type SupportCategoryId =
  | "login"
  | "register"
  | "deposit"
  | "withdrawal"
  | "promotion"
  | "download"
  | "vip"
  | "affiliate"
  | "verification"
  | "responsible"
  | "other";

export type SupportSearchItem = {
  id: string;
  kind: "blog" | "faq" | "category" | "news" | "download";
  title: LocalizedString;
  description: LocalizedString;
  href: string;
  keywords: string[];
  category?: SupportCategoryId;
};

export const supportTrustBadges: LocalizedString[] = [
  { en: "Official Support", zh: "官方客服" },
  { en: "Malaysia Team", zh: "马来西亚团队" },
  { en: "Secure Communication", zh: "安全沟通" },
  { en: "Fast Response", zh: "快速响应" },
];

export const supportQuickChips: Array<{
  label: LocalizedString;
  query: string;
  category?: SupportCategoryId;
}> = [
  { label: { en: "TPOWER Login", zh: "TPOWER登录" }, query: "login", category: "login" },
  { label: { en: "TPOWER Register", zh: "TPOWER注册" }, query: "register", category: "register" },
  { label: { en: "Deposit", zh: "存款" }, query: "deposit", category: "deposit" },
  { label: { en: "Withdrawal", zh: "提现" }, query: "withdrawal", category: "withdrawal" },
  { label: { en: "VIP", zh: "VIP" }, query: "vip", category: "vip" },
  { label: { en: "Promotion", zh: "优惠" }, query: "promotion", category: "promotion" },
  { label: { en: "Download", zh: "下载" }, query: "download", category: "download" },
  {
    label: { en: "Responsible Gaming", zh: "负责任博彩" },
    query: "responsible",
    category: "responsible",
  },
  {
    label: { en: "Verification", zh: "账户验证" },
    query: "verification",
    category: "verification",
  },
];

export const supportHubCards: Array<{
  id: SupportCategoryId;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  guideHref?: string;
  faqId: string;
}> = [
  {
    id: "login",
    title: { en: "Login Issues", zh: "登录问题" },
    description: {
      en: "Can't sign in to TPOWER? Reset paths and official login checks.",
      zh: "无法登录 TPOWER？官方登录检查与找回路径。",
    },
    icon: "log-in",
    guideHref: "/blog/tpower-login-guide",
    faqId: "faq-login",
  },
  {
    id: "register",
    title: { en: "Register Account", zh: "注册账户" },
    description: {
      en: "Create your TPOWER account with accurate Malaysia details.",
      zh: "用准确的马来西亚资料创建 TPOWER 账号。",
    },
    icon: "user-plus",
    guideHref: "/blog/how-to-register-tpower",
    faqId: "faq-register",
  },
  {
    id: "deposit",
    title: { en: "Deposit Help", zh: "存款协助" },
    description: {
      en: "TPOWER deposit help for DuitNow, e-wallets, and banking windows.",
      zh: "DuitNow、电子钱包与银行窗口的 TPOWER 存款协助。",
    },
    icon: "wallet",
    guideHref: "/blog/how-to-deposit-tpower",
    faqId: "faq-deposit",
  },
  {
    id: "withdrawal",
    title: { en: "Withdrawal Help", zh: "提现协助" },
    description: {
      en: "Name matching, status checks, and TPOWER withdrawal assistance.",
      zh: "姓名核对、状态查询与 TPOWER 提现协助。",
    },
    icon: "banknote",
    guideHref: "/blog/how-to-withdraw-tpower",
    faqId: "faq-withdraw",
  },
  {
    id: "promotion",
    title: { en: "Promotion Questions", zh: "优惠疑问" },
    description: {
      en: "Welcome, reload, and cashback terms before you opt in.",
      zh: "欢迎礼、续存与返水——领取前先看清条款。",
    },
    icon: "gift",
    guideHref: "/promotions",
    faqId: "faq-vip",
  },
  {
    id: "download",
    title: { en: "Download APK", zh: "下载 APK" },
    description: {
      en: "Official TPOWER Download and safe Android APK install steps.",
      zh: "官方 TPOWER下载与安全 Android APK 安装步骤。",
    },
    icon: "download",
    guideHref: "/blog/how-to-download-tpower",
    faqId: "faq-download",
  },
  {
    id: "vip",
    title: { en: "VIP Support", zh: "VIP 支持" },
    description: {
      en: "Host coverage, tier questions, and discreet VIP support.",
      zh: "管家时段、等级疑问与低调 VIP 支持。",
    },
    icon: "crown",
    guideHref: "/blog/vip-service-without-noise",
    faqId: "faq-vip",
  },
  {
    id: "affiliate",
    title: { en: "Affiliate Program", zh: "代理合作" },
    description: {
      en: "Partnership enquiries for the official TPOWER affiliate desk.",
      zh: "官方 TPOWER 代理合作咨询。",
    },
    icon: "handshake",
    guideHref: "/contact",
    faqId: "faq-login",
  },
];

export const supportStatusItems: Array<{
  id: string;
  label: LocalizedString;
  status: LocalizedString;
}> = [
  {
    id: "website",
    label: { en: "Website", zh: "官网" },
    status: { en: "Operational", zh: "正常运行" },
  },
  {
    id: "login",
    label: { en: "Login", zh: "登录" },
    status: { en: "Operational", zh: "正常运行" },
  },
  {
    id: "deposit",
    label: { en: "Deposit", zh: "存款" },
    status: { en: "Operational", zh: "正常运行" },
  },
  {
    id: "withdrawal",
    label: { en: "Withdrawal", zh: "提现" },
    status: { en: "Operational", zh: "正常运行" },
  },
  {
    id: "promotions",
    label: { en: "Promotions", zh: "优惠" },
    status: { en: "Operational", zh: "正常运行" },
  },
];

export type SupportMethodHref =
  | "whatsapp"
  | "telegram"
  | "facebook"
  | "instagram"
  | "threads"
  | "email"
  | "faq";

export const supportMethodCards: Array<{
  id: string;
  title: LocalizedString;
  availability: LocalizedString;
  response: LocalizedString;
  description: LocalizedString;
  cta: LocalizedString;
  href: SupportMethodHref;
  icon: string;
}> = [
  {
    id: "whatsapp",
    title: { en: "WhatsApp Customer Service", zh: "WhatsApp 客服" },
    availability: { en: "Daily support desk", zh: "每日客服台" },
    response: { en: "Typically within 15 minutes", zh: "一般 15 分钟内" },
    description: {
      en: "Message the official TPOWER Malaysia support desk on WhatsApp.",
      zh: "通过官方 WhatsApp 联系 TPOWER 马来西亚客服台。",
    },
    cta: { en: "Chat on WhatsApp", zh: "打开 WhatsApp" },
    href: "whatsapp",
    icon: "message-circle",
  },
  {
    id: "telegram",
    title: { en: "Telegram Customer Service", zh: "Telegram 客服" },
    availability: { en: "Daily support desk", zh: "每日客服台" },
    response: { en: "Typically within 15 minutes", zh: "一般 15 分钟内" },
    description: {
      en: "Reach official TPOWER customer service on Telegram.",
      zh: "通过官方 Telegram 联系 TPOWER 客服。",
    },
    cta: { en: "Open Telegram", zh: "打开 Telegram" },
    href: "telegram",
    icon: "send",
  },
  {
    id: "facebook",
    title: { en: "Facebook", zh: "Facebook 官方主页" },
    availability: { en: "Official page", zh: "官方主页" },
    response: { en: "Follow for updates", zh: "关注最新动态" },
    description: {
      en: "Visit the official TPOWER Facebook page for news and announcements.",
      zh: "访问 TPOWER Facebook 官方主页，获取新闻与公告。",
    },
    cta: { en: "Open Facebook", zh: "打开 Facebook" },
    href: "facebook",
    icon: "facebook",
  },
  {
    id: "instagram",
    title: { en: "Instagram", zh: "Instagram 官方主页" },
    availability: { en: "Official page", zh: "官方主页" },
    response: { en: "Follow for updates", zh: "关注最新动态" },
    description: {
      en: "Follow the official TPOWER Instagram for promotions and highlights.",
      zh: "关注 TPOWER Instagram 官方主页，查看优惠与精彩内容。",
    },
    cta: { en: "Open Instagram", zh: "打开 Instagram" },
    href: "instagram",
    icon: "instagram",
  },
  {
    id: "threads",
    title: { en: "Threads", zh: "Threads 官方主页" },
    availability: { en: "Official page", zh: "官方主页" },
    response: { en: "Follow for updates", zh: "关注最新动态" },
    description: {
      en: "Follow the official TPOWER Threads account for the latest posts.",
      zh: "关注 TPOWER Threads 官方主页，查看最新动态。",
    },
    cta: { en: "Open Threads", zh: "打开 Threads" },
    href: "threads",
    icon: "threads",
  },
  {
    id: "email",
    title: { en: "Email Support", zh: "邮件客服" },
    availability: { en: "24/7 intake", zh: "全天受理" },
    response: { en: "Usually within a few hours", zh: "通常数小时内" },
    description: {
      en: "Detailed TPOWER account, deposit, and withdrawal cases with attachments.",
      zh: "可附资料的 TPOWER 账户、存款与提现详细个案。",
    },
    cta: { en: "Email support", zh: "发送邮件" },
    href: "email",
    icon: "mail",
  },
  {
    id: "faq",
    title: { en: "FAQ Center", zh: "常见问题中心" },
    availability: { en: "Always available", zh: "随时可查" },
    response: { en: "Instant self-help", zh: "即时自助" },
    description: {
      en: "Browse official TPOWER help answers before opening a ticket.",
      zh: "开单前先浏览官方 TPOWER 帮助答案。",
    },
    cta: { en: "Browse FAQ", zh: "浏览 FAQ" },
    href: "faq",
    icon: "circle-help",
  },
];

export const supportCategories: Array<{
  id: SupportCategoryId;
  label: LocalizedString;
}> = [
  { id: "login", label: { en: "Login", zh: "登录" } },
  { id: "register", label: { en: "Register", zh: "注册" } },
  { id: "deposit", label: { en: "Deposit", zh: "存款" } },
  { id: "withdrawal", label: { en: "Withdrawal", zh: "提现" } },
  { id: "promotion", label: { en: "Promotion", zh: "优惠" } },
  { id: "download", label: { en: "Download / APK", zh: "下载 / APK" } },
  { id: "vip", label: { en: "VIP", zh: "VIP" } },
  { id: "affiliate", label: { en: "Affiliate", zh: "代理" } },
  { id: "verification", label: { en: "Verification", zh: "验证" } },
  { id: "responsible", label: { en: "Responsible Gaming", zh: "负责任博彩" } },
  { id: "other", label: { en: "Other", zh: "其他" } },
];

export const supportFaqs: Array<{
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: SupportCategoryId;
}> = [
  {
    id: "faq-login",
    category: "login",
    question: {
      en: "How do I login to TPOWER?",
      zh: "如何登录 TPOWER？",
    },
    answer: {
      en: "Use only official TPOWER Login entry points on the website or app. Enter your registered email or mobile and password carefully. If autofill inserts an old password, clear it and type the current one. Still stuck? Open the TPOWER Login Guide or contact official support with your device model and exact error timing.",
      zh: "请只从官网或官方 APP 的 TPOWER登录入口进入。仔细输入注册邮箱/手机与密码。若浏览器自动填入旧密码，先清除再手动输入。仍无法登入？请阅读登录攻略，或向官方客服提供机型与准确报错时间。",
    },
  },
  {
    id: "faq-register",
    category: "register",
    question: {
      en: "How do I register on TPOWER?",
      zh: "如何注册 TPOWER？",
    },
    answer: {
      en: "Open the official Register page, use accurate personal details that match your payment identity, and confirm verification messages. Players must meet the platform age requirement. After registration, set Responsible Gaming limits before your first deposit.",
      zh: "打开官方注册页，填写与支付身份一致的真实资料，并完成验证信息。玩家须符合平台年龄要求。注册后、首次存款前，请先设置负责任博彩限额。",
    },
  },
  {
    id: "faq-deposit",
    category: "deposit",
    question: {
      en: "How do I deposit into TPOWER?",
      zh: "如何向 TPOWER 存款？",
    },
    answer: {
      en: "Sign in, open cashier, choose a supported Malaysia method, and follow on-screen beneficiary details exactly. Keep deposit sources consistent with your verified profile. Read the Deposit Guide and Payment Methods page if a transfer is pending longer than expected.",
      zh: "登录后打开收银台，选择支持的马来西亚方式，并严格按页面收款资料操作。充值来源需与已验证资料一致。若到账偏慢，请先阅读存款攻略与支付方式说明。",
    },
  },
  {
    id: "faq-withdraw",
    category: "withdrawal",
    question: {
      en: "How do I withdraw from TPOWER?",
      zh: "如何从 TPOWER 提现？",
    },
    answer: {
      en: "Withdrawals require matching beneficiary names and completed verification. Submit through the official cashier, then track status inside your account. Never share OTPs with strangers. The Withdrawal Guide explains common delays and ownership checks.",
      zh: "提现需要收款姓名一致并完成验证。请经官方收银台提交，并在账户内查看状态。切勿把 OTP 告诉陌生人。提现攻略说明常见延迟与归属核对。",
    },
  },
  {
    id: "faq-download",
    category: "download",
    question: {
      en: "How do I download TPOWER?",
      zh: "如何下载 TPOWER？",
    },
    answer: {
      en: "Start on the official TPOWER Download page. Android players follow the documented APK path; iOS players follow the published install instructions. Refuse renamed chat-group files. Pair install with the Download Guide for permissions and security checks.",
      zh: "请从官方 TPOWER下载页开始。Android 走记录好的 APK 路径；iOS 按公布的安装说明操作。拒绝聊天群改名文件。安装时请搭配下载攻略核验权限与安全要点。",
    },
  },
  {
    id: "faq-vip",
    category: "vip",
    question: {
      en: "How do I contact VIP support?",
      zh: "如何联系 VIP 客服？",
    },
    answer: {
      en: "Eligible VIP members can reach hosts through in-app or site pathways documented on the VIP page. For tier questions, use this Support Center with category VIP Support and include your registered contact details. Hosts will never ask you to install a mystery APK mid-chat.",
      zh: "合资格 VIP 会员可按 VIP 页记录的站内/APP 路径联系管家。等级疑问请在本支持中心选择 VIP 支持，并留下注册联系方式。管家绝不会在聊天中途要求安装神秘 APK。",
    },
  },
];

export const supportGuideCards: Array<{
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
}> = [
  {
    slug: "tpower-login-guide",
    title: { en: "TPOWER Login Guide", zh: "TPOWER登录攻略" },
    description: {
      en: "Official walkthrough for web and app sign-in.",
      zh: "网页与 APP 官方登录步骤。",
    },
    image: "/blog/tpower-login-guide.webp",
  },
  {
    slug: "how-to-register-tpower",
    title: { en: "Register Guide", zh: "注册攻略" },
    description: {
      en: "Accurate registration for smoother payouts later.",
      zh: "资料填准，日后提现更顺。",
    },
    image: "/blog/how-to-register-tpower.webp",
  },
  {
    slug: "how-to-deposit-tpower",
    title: { en: "Deposit Guide", zh: "存款攻略" },
    description: {
      en: "Malaysia rails and cashier habits that protect funds.",
      zh: "马来西亚通道与保护资金的收银习惯。",
    },
    image: "/blog/how-to-deposit-tpower.webp",
  },
  {
    slug: "how-to-withdraw-tpower",
    title: { en: "Withdrawal Guide", zh: "提现攻略" },
    description: {
      en: "Ownership checks and status clarity before cashout.",
      zh: "出款前的归属核对与状态说明。",
    },
    image: "/blog/how-to-withdraw-tpower.webp",
  },
  {
    slug: "how-to-download-tpower",
    title: { en: "Download APK Guide", zh: "下载 APK 攻略" },
    description: {
      en: "Official TPOWER Download and APK safety steps.",
      zh: "官方下载与 APK 安全步骤。",
    },
    image: "/blog/how-to-download-tpower.webp",
  },
  {
    slug: "vip-service-without-noise",
    title: { en: "VIP Guide", zh: "VIP 攻略" },
    description: {
      en: "Quiet hosting, tiers, and premium continuity.",
      zh: "低调管家、等级与高端连续性。",
    },
    image: "/blog/vip.webp",
  },
];

export const supportTimeline: Array<{
  id: string;
  title: LocalizedString;
  body: LocalizedString;
}> = [
  {
    id: "submit",
    title: { en: "Submit Request", zh: "提交请求" },
    body: {
      en: "Send details through the official TPOWER Support form, WhatsApp, or email.",
      zh: "经官方 TPOWER 支持表单、WhatsApp 或邮件提交细节。",
    },
  },
  {
    id: "review",
    title: { en: "Support Review", zh: "客服审核" },
    body: {
      en: "The Malaysia team reviews category, timestamps, and account ownership signals.",
      zh: "马来西亚团队核对分类、时间戳与账户归属信号。",
    },
  },
  {
    id: "reply",
    title: { en: "Official Reply", zh: "官方回复" },
    body: {
      en: "You receive a clear next step — never a demand for mystery APKs or OTPs.",
      zh: "你会收到清楚的下一步——绝不会索取神秘 APK 或 OTP。",
    },
  },
  {
    id: "resolved",
    title: { en: "Issue Resolved", zh: "问题解决" },
    body: {
      en: "Confirm the fix, keep Responsible Gaming tools active, and continue securely.",
      zh: "确认修复，保持负责任工具开启，并安全继续使用。",
    },
  },
];

export const supportTrustCards: Array<{
  id: string;
  title: LocalizedString;
  body: LocalizedString;
  icon: string;
}> = [
  {
    id: "official",
    title: { en: "Official TPOWER Support", zh: "官方 TPOWER 客服" },
    body: {
      en: "Every channel on this page belongs to the official TPOWER Support Center.",
      zh: "本页每个渠道都属于官方 TPOWER 支持中心。",
    },
    icon: "shield-check",
  },
  {
    id: "secure",
    title: { en: "Secure Communication", zh: "安全沟通" },
    body: {
      en: "We never ask for passwords or one-time codes through unofficial chats.",
      zh: "我们绝不会在非官方聊天索取密码或一次性验证码。",
    },
    icon: "lock",
  },
  {
    id: "local",
    title: { en: "Malaysia Local Team", zh: "马来西亚本地团队" },
    body: {
      en: "Bilingual help tuned to Malaysia banking windows and player habits.",
      zh: "贴合大马银行窗口与玩家习惯的中英双语协助。",
    },
    icon: "map-pin",
  },
  {
    id: "rg",
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    body: {
      en: "Limits and cool-offs stay available while we resolve account issues.",
      zh: "处理账户问题期间，限额与冷静期工具仍可使用。",
    },
    icon: "heart-handshake",
  },
  {
    id: "withdraw",
    title: { en: "Fast Withdrawal Assistance", zh: "快速提现协助" },
    body: {
      en: "Clear ownership checks help withdrawals move without confusion.",
      zh: "清楚的归属核对，让提现少走冤枉路。",
    },
    icon: "zap",
  },
  {
    id: "providers",
    title: { en: "Licensed Providers", zh: "持牌厂商" },
    body: {
      en: "Support questions stay aligned with the studios listed on Providers.",
      zh: "客服说明与厂商页列出的工作室保持一致。",
    },
    icon: "building-2",
  },
];

export const supportSearchCatalog: SupportSearchItem[] = [
  {
    id: "s-login",
    kind: "blog",
    title: { en: "TPOWER Login Guide", zh: "TPOWER登录攻略" },
    description: {
      en: "Official blog walkthrough for signing in.",
      zh: "官方登录步骤博客。",
    },
    href: "/blog/tpower-login-guide",
    keywords: ["login", "sign in", "登录", "tpower login"],
    category: "login",
  },
  {
    id: "s-register",
    kind: "blog",
    title: { en: "How to Register on TPOWER", zh: "TPOWER注册攻略" },
    description: {
      en: "Create an accurate TPOWER account.",
      zh: "准确创建 TPOWER 账号。",
    },
    href: "/blog/how-to-register-tpower",
    keywords: ["register", "sign up", "注册", "tpower register"],
    category: "register",
  },
  {
    id: "s-deposit",
    kind: "blog",
    title: { en: "How to Deposit into TPOWER", zh: "TPOWER存款攻略" },
    description: {
      en: "Malaysia deposit rails and cashier tips.",
      zh: "马来西亚存款通道与收银提示。",
    },
    href: "/blog/how-to-deposit-tpower",
    keywords: ["deposit", "duitnow", "存款", "tpower deposit"],
    category: "deposit",
  },
  {
    id: "s-withdraw",
    kind: "blog",
    title: { en: "How to Withdraw from TPOWER", zh: "TPOWER提现攻略" },
    description: {
      en: "Withdrawal ownership and status checks.",
      zh: "提现归属与状态核对。",
    },
    href: "/blog/how-to-withdraw-tpower",
    keywords: ["withdraw", "withdrawal", "提现", "tpower withdrawal"],
    category: "withdrawal",
  },
  {
    id: "s-download",
    kind: "download",
    title: { en: "TPOWER Download", zh: "TPOWER下载" },
    description: {
      en: "Official app and APK download hub.",
      zh: "官方 APP 与 APK 下载中枢。",
    },
    href: "/download",
    keywords: ["download", "apk", "app", "下载", "tpower download"],
    category: "download",
  },
  {
    id: "s-apk",
    kind: "download",
    title: { en: "TPOWER APK Guide", zh: "TPOWER APK 指南" },
    description: {
      en: "Android package safety and version checks.",
      zh: "Android 安装包安全与版本核对。",
    },
    href: "/apk",
    keywords: ["apk", "android", "install"],
    category: "download",
  },
  {
    id: "s-vip",
    kind: "blog",
    title: { en: "TPOWER VIP Guide", zh: "TPOWER VIP 攻略" },
    description: {
      en: "Hosting, tiers, and premium continuity.",
      zh: "管家、等级与高端连续性。",
    },
    href: "/blog/vip-service-without-noise",
    keywords: ["vip", "host", "会员"],
    category: "vip",
  },
  {
    id: "s-faq",
    kind: "faq",
    title: { en: "TPOWER FAQ Center", zh: "TPOWER常见问题" },
    description: {
      en: "Browse structured help answers.",
      zh: "浏览结构化帮助答案。",
    },
    href: "/faq",
    keywords: ["faq", "help", "常见问题"],
  },
  {
    id: "s-news",
    kind: "news",
    title: { en: "TPOWER Newsroom", zh: "TPOWER新闻室" },
    description: {
      en: "Official platform announcements.",
      zh: "官方平台公告。",
    },
    href: "/news",
    keywords: ["news", "update", "新闻", "维护"],
  },
  {
    id: "s-promo",
    kind: "category",
    title: { en: "TPOWER Promotions", zh: "TPOWER优惠" },
    description: {
      en: "Welcome, reload, and cashback hub.",
      zh: "欢迎礼、续存与返水专区。",
    },
    href: "/promotions",
    keywords: ["promotion", "bonus", "优惠", "返水"],
    category: "promotion",
  },
  {
    id: "s-rg",
    kind: "category",
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    description: {
      en: "Limits, cool-offs, and safer play tools.",
      zh: "限额、冷静期与更安全工具。",
    },
    href: "/responsible-gaming",
    keywords: ["responsible", "limit", "负责任"],
    category: "responsible",
  },
];
