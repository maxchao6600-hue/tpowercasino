import {
  writeIntent,
  P,
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
  compareRow,
  CTA,
  LOBBY,
} from "./lib/intent-write.mjs";

const H = (name) => `/images/intent/heroes/${name}.webp`;

writeIntent("tpower-login.ts", "intentTpowerLogin", {
  id: "tpower-login",
  path: "/tpower-login",
  heroImage: H("tpower-login"),
  schemaExtra: "none",
  primaryCtaHref: "/login",
  metaTitle: {
    en: "TPOWER Login | Official Sign-In Guide for Malaysia",
    zh: "TPower登录｜马来西亚官方登录指南",
  },
  metaDescription: {
    en: "Official TPOWER Login guide: secure sign-in steps, password hygiene, phishing defence, app vs web login, and how to recover access safely.",
    zh: "TPOWER线上博彩官方登录指南：安全登录步骤、密码卫生、防钓鱼、APP与网页登录差异，以及如何安全找回访问。",
  },
  heroTitle: { en: "TPOWER Login", zh: "TPOWER线上博彩 登录" },
  heroSubtitle: {
    en: "Sign in on official surfaces only — calm steps, phishing resistance, and clearer recovery paths.",
    zh: "只在官方表面登录——步骤冷静、抗钓鱼，找回路径更清楚。",
  },
  introduction: P(
    [
      `TPOWER Login is the search-intent authority page for adults who need to sign into the official Malaysia platform safely. It is not the interactive form itself — that lives at [[/login|Login]] — and it is not a register explainer. Those intents belong on [[/tpower-register|TPOWER Register]] and the account form at [[/register|Register]].`,
      `Login failures in Malaysia often come from mirrored links, expired sessions, wrong locale bookmarks, or passwords reused from email breaches. This page teaches official-domain discipline before you type a secret. Pair it with [[/security|Platform Security]] and [[/payment-security|Payment Security]] when money language appears in the same message as “login now.”`,
      `Web login and [[/mobile-app|Mobile App]] / [[/tpower-apk|APK]] login should feel like one product identity. If a package asks for permissions that have nothing to do with play, stop and return to [[/download|Download]]. Install hygiene is login hygiene.`,
      `After a successful TPOWER Login, most players either open [[/games|Games]], check [[/tpower-promotions|Promotions]], or fund via [[/payment-methods|Payment Center]]. Keep [[/responsible-gaming|Responsible Gaming]] nearby if sessions tend to run long after sign-in.`,
      `Password reset and lockout stories belong with Support Center evidence: approximate time, device, and whether you landed from a message link. Never share OTP codes with chat agents. [[/contact|Support Center]] will not ask for your password.`,
      `VIP hosts on [[/vip|VIP]] may help with service context after login — they do not need your credentials. Anyone demanding a remote-control app to “fix login” is hostile.`,
      `This page exists so TPOWER Login keywords resolve to official process clarity: bookmark, verify domain, sign in, end shared sessions, escalate without secrets. Commercial intent without doorway spam.`,
      `Chinese and English readers get independently written guidance. Malaysian Chinese players searching TPower 登录 should feel a local official voice — not a translated paragraph stack.`,
      `When login works, treat the session as valuable. Log out on borrowed phones. Prefer trusted networks for password changes. Re-open this guide whenever an urgent SMS claims your account will close unless you click.`,
    ],
    [
      `「TPower登录」是需要安全进入马来西亚官方平台的成年人搜索意图权威页。它不是交互表单本身——表单在 [[/login|登录]]——也不是注册说明。那些意图属于 [[/tpower-register|TPower注册]] 与 [[/register|注册]] 表单。`,
      `大马登录失败常见于镜像链接、过期会话、错误书签，或与邮箱共用的密码泄露。本页在你输入机密前教授官方域名纪律。当同一条消息把「立刻登录」与资金话术绑在一起时，请搭配 [[/security|平台安全]] 与 [[/payment-security|支付安全]]。`,
      `网页登录与 [[/mobile-app|手机APP]] / [[/tpower-apk|APK]] 登录应像同一产品身份。若安装包索取与游玩无关的权限，停下并回到 [[/download|下载]]。安装卫生就是登录卫生。`,
      `成功 TPower 登录后，多数玩家会打开 [[/games|游戏大厅]]、查看 [[/tpower-promotions|优惠]]，或经 [[/payment-methods|支付中心]] 入金。若登录后场次容易过长，把 [[/responsible-gaming|负责任博彩]] 放在附近。`,
      `重置密码与锁定故事应带客服证据：大致时间、设备、是否从消息链接进入。切勿与聊天客服分享 OTP。[[/contact|客服中心]] 不会要你的密码。`,
      `[[/vip|VIP]] 接待可在登录后提供服务语境——不需要你的凭证。任何要求远程控制 APP「修复登录」的人都是敌意。`,
      `本页存在，是为了让 TPower 登录关键词落到官方流程清楚：收藏、核实域名、登录、结束共用会话、不交机密升级。商业意图，但不是门口垃圾页。`,
      `中英文读者获得独立撰写的指引。搜索 TPower 登录的大马中文玩家应感到本地官方语气——不是翻译段落堆叠。`,
      `登录成功后，把会话当值钱。外借手机请登出。改密优先可信网络。每当紧迫短信声称不点就关户，重开本指南。`,
    ],
  ),
  stats: [
    { vEn: "Official", vZh: "官方", lEn: "Domain-first before any password", lZh: "输入密码前先确认域名" },
    { vEn: "0", vZh: "0", lEn: "Password requests from real agents", lZh: "真客服索要密码次数" },
    { vEn: "Web/App", vZh: "网页/APP", lEn: "One identity across surfaces", lZh: "多表面同一身份" },
    { vEn: "Logout", vZh: "登出", lEn: "End sessions on shared devices", lZh: "共用设备结束会话" },
  ],
  benefitsTitle: { en: "Why a dedicated TPOWER Login guide matters", zh: "为何需要独立的 TPower 登录指南" },
  benefits: [
    feature("lock", "Secret boundary", "机密边界", "Passwords and OTPs stay on official forms only.", "密码与 OTP 只留在官方表单。"),
    feature("shield", "Phishing contrast", "钓鱼对照", "Learn how fake login pages imitate urgency.", "学会假登录页如何模仿紧迫感。"),
    feature("smartphone", "App vs web clarity", "APP与网页清楚", "Same account rules whether you use browser or app.", "无论浏览器或 APP，同一账户规则。"),
    feature("eye", "Session discipline", "会话纪律", "Know when to end a session after play.", "知道游玩后何时结束会话。"),
    feature("users", "Support without secrets", "不交机密的客服", "Escalate lockouts with evidence, never credentials.", "用证据升级锁定，绝不交凭证。"),
    feature("check", "Faster recovery mindset", "更快找回心态", "Structured steps beat panic clicking.", "结构化步骤胜过恐慌乱点。"),
  ],
  howToTitle: { en: "How to complete a safe TPOWER Login", zh: "如何完成安全的 TPower 登录" },
  howToDescription: {
    en: "Official sign-in sequence for Malaysia players on web or app.",
    zh: "大马玩家在网页或 APP 上的官方登录顺序。",
  },
  howToSteps: [
    howTo("Open an official surface", "打开官方表面", "Use a bookmark or type the official domain; avoid message deep links under pressure.", "使用收藏或输入官方域名；压力下避开消息深链。"),
    howTo("Confirm you are not on a mirror", "确认不是镜像", "Check spelling and certificate cues before the password field.", "在密码字段前检查拼写与证书线索。"),
    howTo("Sign in on the Login form", "在登录表单登录", "Open [[/login|Login]] and enter credentials privately.", "打开 [[/login|登录]] 并私下输入凭证。"),
    howTo("Prefer app installs from Download", "优先从下载安装 APP", "If using mobile packages, only follow [[/download|Download]] / [[/tpower-apk|APK]] guidance.", "若使用手机安装包，只遵循 [[/download|下载]] / [[/tpower-apk|APK]] 指引。"),
    howTo("Enter the lobby intentionally", "有意识进入大厅", "After login, choose Games, Promotions, or Payments on purpose.", "登录后有意识选择游戏、优惠或支付。"),
    howTo("End shared sessions", "结束共用会话", "Log out on borrowed phones; change password if a device was risky.", "外借手机登出；若设备有风险则改密。"),
  ],
  sections: [
    section(
      "Official Login vs mirrored “fix your account” pages",
      "官方登录 vs 镜像「修复账户」页",
      `Mirrored pages copy logos and urgency. The tell is usually the domain, the permission ask, or a request to install a helper APK mid-login. TPOWER Login guidance is simple: initiate from navigation you trust, not from a panic SMS.

If you already typed a password on a suspect page, change it on the real domain, then contact Support Center with time and channel. Do not “confirm” anything else the mirror requests.`,
      `镜像页复制 Logo 与紧迫感。线索通常是域名、权限索取，或登录中途要求安装助手 APK。TPower 登录指引很简单：从你信任的导航发起，而不是恐慌短信。

若已在可疑页输入密码，在真域名改密，再向客服中心提供时间与通道。不要再「确认」镜像要求的任何事。`,
      H("tpower-login"),
      false,
    ),
    section(
      "Web session, app session, and password managers",
      "网页会话、APP 会话与密码管理器",
      `Password managers help if the saved origin is the official domain. Saving credentials against a phishing origin teaches the manager to autocomplete the wrong place next time.

App sessions should be treated like browser sessions on shared tablets. Biometric unlock on your phone is fine; handing an unlocked phone to a friend after login is not.`,
      `若保存的来源是官方域名，密码管理器有帮助。把凭证存到钓鱼来源，会教管理器下次自动填错地方。

共用平板上的 APP 会话应像浏览器会话一样对待。自己手机上的生物识别解锁没问题；登录后把未锁手机交给朋友不行。`,
      H("mobile-app"),
      true,
    ),
    section(
      "After login: money, promotions, and responsibility",
      "登录后：资金、优惠与责任",
      `Login is a doorway, not a strategy. Decide whether you are depositing ([[/deposit-guide|Deposit Guide]]), browsing offers ([[/welcome-bonus|Welcome Bonus]], [[/cashback|Cashback]]), or simply checking results. Responsible Gaming tools matter most right after a successful sign-in — when dopamine is highest.`,
      `登录是门口，不是策略。决定你是要存款（[[/deposit-guide|存款指南]]）、浏览优惠（[[/welcome-bonus|迎新奖金]]、[[/cashback|现金回馈]]），还是只查看结果。负责任博彩工具在成功登录后最重要——多巴胺最高的时候。`,
      CTA,
      false,
    ),
    section(
      "Cluster links for account access intent",
      "账户访问意图的集群链接",
      `Continue to [[/tpower-register|Register landing]], [[/tpower-apk|APK]], [[/mobile-app|Mobile App]], Payment Center, Support Center, Blog, and News. Functional forms remain at /login and /register for the actual interaction.`,
      `继续到 [[/tpower-register|注册着陆页]]、[[/tpower-apk|APK]]、[[/mobile-app|手机APP]]、支付中心、客服中心、博客与新闻。实际交互表单仍在 /login 与 /register。`,
      LOBBY,
      true,
    ),
  ],
  comparisonTitle: {
    en: "Safe login vs risky login patterns",
    zh: "安全登录 vs 风险登录模式",
  },
  comparisonHeaders: [
    { en: "Factor", zh: "因素" },
    { en: "Official TPOWER Login", zh: "官方 TPower 登录" },
    { en: "Risky pattern", zh: "风险模式" },
  ],
  comparisonRows: [
    compareRow("Entry point", "入口", "Bookmark / typed domain / app from Download", "收藏/手输域名/下载中心 APP", "SMS deep link with urgency", "带紧迫感的短信深链"),
    compareRow("Secrets", "机密", "Only on official form", "只在官方表单", "Shared with chat “agent”", "与聊天「客服」分享"),
    compareRow("Install asks", "安装要求", "None during login", "登录期间无", "Remote APK to “fix login”", "远程 APK「修复登录」"),
    compareRow("After success", "成功后", "Lobby with intention", "有意识进大厅", "Immediate chase deposit via personal account", "立刻经私人账户追损存款"),
  ],
  timelineTitle: { en: "TPOWER Login timeline", zh: "TPower 登录时间线" },
  timeline: [
    timeline("Verify", "核实", "Confirm official surface.", "确认官方表面。"),
    timeline("Sign in", "登录", "Use the Login form privately.", "私下使用登录表单。"),
    timeline("Choose", "选择", "Open Games, Promotions, or Payments.", "打开游戏、优惠或支付。"),
    timeline("Close", "收束", "Log out on shared devices.", "共用设备登出。"),
  ],
  trustTitle: { en: "Login trust checklist", zh: "登录信任清单" },
  trustItems: [
    trust("No password sharing", "不分享密码", "Real support never needs it.", "真客服从不需要。"),
    trust("No OTP forwarding", "不转发 OTP", "Codes stay on your device.", "验证码留在你的设备。"),
    trust("Official installs only", "仅官方安装", "Download / APK guidance only.", "只走下载/APK 指引。"),
    trust("Bookmark discipline", "收藏纪律", "Beat search-ad mirrors.", "胜过搜索广告镜像。"),
    trust("Evidence for lockouts", "锁定用证据", "Time + device for Support Center.", "时间+设备给客服中心。"),
    trust("Responsible afterglow", "登录后的责任", "Sign-in is not a cue to chase.", "登录不是追损信号。"),
  ],
  faqTitle: { en: "TPOWER Login FAQ", zh: "TPower 登录常见问题" },
  faqs: [
    faq("How do I login to TPOWER?", "如何登录 TPOWER？", "Open the official site or app, go to Login, enter your credentials, and avoid message deep links when anxious.", "打开官网或 APP，进入登录，输入凭证；焦虑时避开消息深链。"),
    faq("Why is my TPOWER Login failing?", "为什么 TPower 登录失败？", "Wrong password, expired session, network issues, or a mirrored page. Confirm domain, retry once, then contact Support Center with evidence.", "密码错误、会话过期、网络问题或镜像页。确认域名，重试一次，再带证据联系客服。"),
    faq("Is the login page the same as this guide?", "登录页等于本指南吗？", "No. This is the SEO/education landing; the interactive form is at /login.", "不等。这是 SEO/教育着陆页；交互表单在 /login。"),
    faq("Can I login on the APK?", "可以在 APK 登录吗？", "Yes when installed via official APK/Download guidance — same account, same anti-phishing rules.", "经官方 APK/下载指引安装后可以——同一账户、同一防钓鱼规则。"),
    faq("Will TPOWER ask for my password in chat?", "TPOWER 会在聊天要密码吗？", "No. Never share passwords or OTPs with anyone claiming to be support.", "不会。绝不与声称客服的人分享密码或 OTP。"),
    faq("What should I do after a phishing login?", "钓鱼登录后怎么办？", "Change password on the official domain, end other sessions if available, contact Support Center, pause funding.", "在官方域名改密，结束其他会话，联系客服，暂停入金。"),
    faq("Does VIP need my login?", "VIP 需要我的登录吗？", "No. VIP helps with service — never with credentials.", "不需要。VIP 协助服务——从不索要凭证。"),
    faq("Where next after login education?", "学完登录下一步？", "Register landing if you need an account, Mobile App / APK for installs, Payment Center for funding.", "需要账户则看注册着陆页，安装看手机 APP/APK，入金看支付中心。"),
  ],
  relatedTitle: { en: "Related account & access guides", zh: "相关账户与访问指南" },
  extraLinks: [],
  ctaTitle: { en: "Sign in on official TPOWER", zh: "在官方 TPOWER 登录" },
  ctaDescription: {
    en: "Open the Login form on a trusted surface, keep secrets private, and enter the lobby with intention.",
    zh: "在可信表面打开登录表单，机密保密，有意识进入大厅。",
  },
});

console.log("login done");
