import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authoritySecurity: AuthorityPageContent = {
  id: "security",
  path: "/security",
  schemaType: "WebPage",
  atmosphere: "security",
  metaTitle: {
    en: "Platform Security | TLS, Sessions, Phishing & APK Safety",
    zh: "平台安全｜传输加密、会话、防钓鱼与APK安全",
  },
  metaDescription: {
    en: "How TPOWER approaches transport security, phishing resistance, official APK paths, session hygiene, monitoring signals, and password discipline.",
    zh: "TPOWER线上博彩 如何看待传输安全、防钓鱼、官方 APK 路径、会话卫生、监控信号与密码纪律。",
  },
  heroTitle: {
    en: "Platform Security",
    zh: "TPOWER线上博彩 平台安全",
  },
  heroSubtitle: {
    en: "Practical defences for browsers, apps, and humans — without pretending risk is zero.",
    zh: "面向浏览器、APP 与真人的务实防护——不假装风险为零。",
  },
  introduction: {
    en: `Platform Security explains how TPOWER thinks about protecting accounts and sessions for Malaysia players who fund, play, and contact support online. Security is shared work: platform controls, plus habits you control — password discipline, phishing scepticism, and official install paths.

Transport security starts with TLS for web journeys. Players should see consistent official URLs when logging in, depositing, or opening [[/contact|Support Center]]. If a link arrives via SMS or chat with urgency and a misspelled domain, slow down. Fake cashiers thrive on panic.

Application security includes session handling and monitoring signals that look for unusual access patterns. We will not publish exploit detail. We will publish player-facing guidance: lock devices, avoid shared cafés for withdrawals, and end sessions on shared phones.

APK and app mirrors deserve special attention in Malaysia mobile culture. Only follow [[/download|Download]] guidance for installs. Renamed packages, “faster VIP APKs,” and permission-hungry clones are common account-takeover routes. If someone asks you to install a tool to “verify withdrawal,” stop and verify through official support instead.

Password hygiene remains foundational. Unique passwords, no reuse from email, and never sharing secrets with agents — official or fake — protect you more than any banner. Pair this page with [[/privacy-and-data-protection|Privacy & Data Protection]], [[/aml-kyc|AML & KYC]], and [[/customer-commitment|Customer Commitment]] for a complete trust picture.

Security communication stays conservative on purpose. We describe player-visible controls and habits without publishing attack recipes. That restraint helps adults deposit safely after work more than it helps adversaries.

Think of Platform Security as a shared checklist for every session — browser or app — especially when withdrawals, password changes, or KYC uploads are involved. Slow is safer than urgent when a message demands immediate action outside official navigation.

Treat every urgent payment message as hostile until the official site confirms otherwise. That single habit blocks a large share of account takeovers. Platform Security exists to make the habit explicit, teachable, and linked to Download, Support Center, and Privacy hubs.

Security is a chain of ordinary decisions. You choose a bookmark over a search ad. You refuse a remote-control app that promises to fix a withdrawal. You end a session on a borrowed phone. You rotate a password after a scare before you reopen the lobby. None of those decisions require technical brilliance; all of them require refusing urgency.

Attackers script urgency because it works against tired evening users. They imitate cashiers, VIP hosts, and KYC officers. They send APKs that look like updates. Platform Security cannot delete every hostile message on the internet, but it can teach a default posture: initiate contact from official navigation, never share secrets, and treat panic as a warning light.

Shared responsibility also means reporting. When you send Support Center a clear impersonation report — channel, approximate time, what was requested — you protect the next player. Security is communal even when accounts are individual.

Build a personal security ritual for TPOWER sessions. Before login: confirm the domain. Before deposit: confirm you opened Payments from navigation, not from a message. Before withdrawal: confirm you are not on public Wi-Fi you do not trust. Before install: confirm Download guidance. Before support: confirm you initiated the thread. Rituals sound heavy until the first time they stop a takeover.

Teach the ritual to adults who share your household devices. Most compromises in entertainment accounts are social, not cinematic zero-days. A cousin with a “helpful APK,” a colleague asking to “borrow the login,” a fake host asking for a code — those are the everyday battles Platform Security is written for.

When an incident happens anyway, sequence beats panic: secure the device, change the password on the official domain, open Support Center with times and identifiers, then pause funding until the case is understood. Skipping to “just one more deposit to recover” is how incidents become disasters.

Keep Platform Security open beside Download and Support Center whenever you change devices or hear an urgent payment rumour. Those three pages together form the practical defence kit for Malaysia mobile play on TPOWER.

A final security habit: before any urgent money action, reopen this page and the Support Center. If the action still makes sense after that pause, proceed on official URLs only. If it only made sense under panic, do not proceed.
`,
    zh: `「平台安全」说明 TPOWER线上博彩 如何看待账户与会话保护——面向会在线上入金、游戏并联系客服的马来西亚玩家。安全是共同工作：平台控制，加上你能掌控的习惯——密码纪律、钓鱼怀疑、官方安装路径。

传输安全从网页旅程的 TLS 开始。登录、存款或打开 [[/contact|客服中心]] 时应看到一致的官方网址。若短信或聊天用紧迫感塞来拼错域名的链接，请先停顿。假收银台靠恐慌生存。

应用安全包含会话处理，以及对异常访问模式的监控信号。我们不会公开利用细节，但会公开玩家侧指引：锁好设备、提现避开共享网吧、在共用手机上结束会话。

在大马手机文化里，APK 与 APP 镜像值得特别警惕。安装只跟 [[/download|APP下载]] 指引。改名包装、「更快 VIP 包」、索要夸张权限的克隆，是常见盗号路径。若有人要你安装工具「验证提现」，请停下并通过官方客服核实。

密码卫生仍是基础。独立密码、不与邮箱复用、绝不向真假客服泄露机密，往往比任何横幅都更保护你。请搭配 [[/privacy-and-data-protection|隐私与数据保护]]、[[/aml-kyc|AML与KYC]]、[[/customer-commitment|客户承诺]] 看完整信任图景。

安全沟通刻意保持克制。我们说明玩家可见的控制与习惯，不公开攻击配方。这种克制对下班后想安全入金的成年人更有益，对对手无益。

请把平台安全当成每次会话的共用清单——浏览器或 APP——尤其涉及提现、改密或 KYC 上传时。当有人要求你离开官方导航立刻行动，慢比急更安全。

把每条紧迫支付消息先当成敌意，直到官网确认相反。这一个习惯就能挡住很大一部分盗号。平台安全专页就是为了把习惯说清楚、可传授，并链到下载、客服与隐私专页。

安全是一连串普通决定。你选择收藏夹而不是搜索广告。你拒绝承诺修复提现的远程控制 APP。你在外借手机上结束会话。你在惊吓后先轮换密码再重开大厅。这些决定都不需要技术天才，但都需要拒绝紧迫感。

攻击者编写紧迫感，是因为它对疲惫的晚间用户有效。他们模仿收银台、VIP 接待与 KYC 人员。他们发送看起来像更新的 APK。平台安全无法删掉互联网上每一条敌意消息，但可以教会默认姿态：从官方导航发起联系、永不分享机密、把恐慌当警示灯。

共同责任也包括举报。当你向客服中心提交清楚的假冒报告——通道、大致时间、对方要求什么——你就保护了下一位玩家。即使账户是个人的，安全也是公共的。

为 TPOWER 会话建立个人安全仪式。登录前：确认域名。存款前：确认你从导航打开支付，而不是从消息。提现前：确认你不在不信任的公共 Wi-Fi。安装前：确认下载指引。联系客服前：确认由你发起线程。仪式听起来沉重，直到它们第一次挡住盗号。

把仪式教给共用设备的成年家人。娱乐账户多数失陷是社会性的，不是电影里的零日漏洞。拿着「有用 APK」的亲戚、要「借用登录」的同事、索要验证码的假接待——这些才是平台安全文所写的日常战役。

即使仍发生事故，顺序胜过恐慌：保护设备、在官方域名改密、带时间与识别信息打开客服中心，然后暂停入金直到弄清个案。跳到「再存一笔翻本」只会把事故变成灾难。

更换设备或听到紧迫支付谣言时，请把平台安全与下载、客服中心一起打开。这三页共同构成大马手机游玩的务实防护包。

最后一个安全习惯：任何紧迫资金动作前，重开本页与客服中心。若停顿之后动作仍说得通，只在官方网址继续。若只有恐慌时才说得通，就不要继续。
`,
  },
  stats: [
    {
      value: { en: "TLS", zh: "TLS" },
      label: {
        en: "Encrypted web transport baseline",
        zh: "网页传输加密基线",
      },
    },
    {
      value: { en: "0", zh: "0" },
      label: {
        en: "Password requests from real agents",
        zh: "真客服索要密码次数",
      },
    },
    {
      value: { en: "APK", zh: "APK" },
      label: {
        en: "Official install path only",
        zh: "仅官方安装路径",
      },
    },
    {
      value: { en: "24h", zh: "24小时" },
      label: {
        en: "Report suspicious access promptly",
        zh: "可疑访问请尽快回报",
      },
    },
  ],
  featuresTitle: {
    en: "Security layers players can recognise",
    zh: "玩家能感知的安全层次",
  },
  features: [
    {
      icon: "lock",
      title: {
        en: "TLS for official web journeys",
        zh: "官方网页旅程使用 TLS",
      },
      body: {
        en: "Login, cashier, and support pages should ride encrypted transport on official domains.",
        zh: "登录、收银台与客服页应在官方域名上走加密传输。",
      },
    },
    {
      icon: "eye",
      title: {
        en: "Phishing pattern awareness",
        zh: "识别钓鱼模式",
      },
      body: {
        en: "Urgency, misspelled domains, and remote-control requests are classic tells.",
        zh: "紧迫感、拼错域名、要求远程控制，都是典型信号。",
      },
    },
    {
      icon: "shield",
      title: {
        en: "Session discipline",
        zh: "会话纪律",
      },
      body: {
        en: "End sessions on shared devices; avoid saving passwords in public browsers.",
        zh: "共用设备请结束会话；避免在公共浏览器保存密码。",
      },
    },
    {
      icon: "zap",
      title: {
        en: "Monitoring for unusual access",
        zh: "异常访问监控",
      },
      body: {
        en: "Platform signals help spot abnormal logins; players should still report surprises quickly.",
        zh: "平台信号有助于发现异常登录；玩家仍应尽快回报异常。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Official APK/app guidance",
        zh: "官方 APK/APP 指引",
      },
      body: {
        en: "Download hub steers installs away from renamed mirrors and fake VIP packages.",
        zh: "下载中心引导安装远离改名镜像与假 VIP 包装。",
      },
    },
    {
      icon: "check",
      title: {
        en: "Password uniqueness",
        zh: "密码唯一性",
      },
      body: {
        en: "Unique credentials beat reused email passwords when breaches elsewhere occur.",
        zh: "别处泄露时，独立凭证优于与邮箱复用的密码。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Transport security and official URL discipline",
        zh: "传输安全与官方网址纪律",
      },
      body: {
        en: `TLS protects data in transit between your browser and official TPOWER web surfaces. That protection only helps if you are actually on the official site. Bookmark [[/login|Login]], [[/register|Register]], and the homepage rather than searching ad hoc under pressure.

URL discipline is a player skill. Check the domain before entering passwords or payment details. Hover or long-press links that claim “deposit failed — fix now.” Attackers imitate cashier language because it works. If uncertain, type the official address manually and open [[/payment-methods|Payments]] or Support Center from navigation.

Public Wi-Fi adds risk. Prefer trusted networks for withdrawals and password changes. Device lock screens matter when phones are borrowed. These habits sound basic because they are — and because most successful account takeovers still exploit basics.

Pair URL discipline with app discipline. Browser bookmarks do not protect you if you later install a malicious APK that overlays a fake login. Security is a chain; weak links cancel strong ones.

Transport security also depends on browser and OS hygiene: keep devices updated when practical, avoid unknown extensions that can read page content, and be sceptical of “security apps” that demand your TPOWER password.

Bookmark discipline beats search-ad discipline. Typing the official domain is slower for ten seconds and safer for ten months. Train that tradeoff until it feels automatic.

Make domain confirmation a finger habit before every password field. Ten seconds of checking prevents months of recovery work after a mirrored login page succeeds.

Domain confirmation before every password field is the cheapest takeover prevention available.

Whenever a message demands immediate funding outside official navigation, reopen Platform Security and Support Center before you type a single secret.
`,
        zh: `TLS 保护浏览器与 TPOWER线上博彩 官方网页之间的传输数据。只有当你真的在官网时，这项保护才有意义。请收藏 [[/login|登录]]、[[/register|注册]] 与首页，而不是在压力下临时搜索。

网址纪律是玩家技能。输入密码或支付资料前检查域名。对声称「存款失败—立刻修复」的链接先悬停或长按查看。攻击者模仿收银台话术，因为有效。不确定时，手动输入官方地址，并从导航打开 [[/payment-methods|支付方式]] 或客服中心。

公共 Wi-Fi 增加风险。提现与改密尽量用可信网络。手机外借时锁屏很重要。这些习惯听起来基础，因为它们本来就基础——而多数成功盗号仍在利用基础漏洞。

网址纪律还要配上 APP 纪律。若你随后安装了会叠假登录的恶意 APK，浏览器收藏也救不了你。安全是链条；弱环会抵消强环。

传输安全也依赖浏览器与系统卫生：可行时保持更新，避开能读页面的不明扩展，并怀疑要求你提供 TPOWER 密码的「安全 APP」。

收藏纪律胜过搜索广告纪律。手输官方域名慢十秒，却安全十个月。把这种取舍练到自动化。

在每个密码字段前，把域名确认变成手指习惯。十秒检查，能避免镜像登录页得手后数月的恢复工作。

每个密码字段前的域名确认，是最便宜的防盗号措施。

每当有消息要求你在官方导航外立刻入金，先重开平台安全与客服中心，再输入任何机密。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TLS and official URL security",
        zh: "TLS 与官方网址安全",
      },
      reverse: false,
    },
    {
      title: {
        en: "Phishing, social engineering, and fake support",
        zh: "钓鱼、社会工程与假客服",
      },
      body: {
        en: `Phishing against entertainment platforms rarely looks like obvious spam. It looks like a helpful agent, a payment reconciler, or a VIP host “verifying” your account. Real TPOWER support will not ask for your password, full card PAN, or remote-desktop control. Prepare identifiers as described on [[/contact|Support Center]], then stop if the conversation demands secrets.

Social engineering uses urgency and status. “Your withdrawal is stuck unless you install this.” “KYC failed — send codes now.” Slow the conversation. Open AML/KYC education on [[/aml-kyc|AML & KYC]] for legitimate verification expectations, and confirm channels from the Support Center — not from the inbound message alone.

Email and chat impersonation often copy logos poorly or perfectly. Do not trust logos. Trust the path you initiated from the official site. If you did not start the thread, be sceptical.

Report suspicious contacts through official support so patterns can be tracked. Do not forward one-time codes to anyone. Codes exist to prove you control the channel — giving them away proves the attacker does.

Phishing drills belong in everyday behaviour. If a message creates fear about locked funds, open Support Center yourself and ask. Fear is the payload; the malicious link is only delivery.

Fake support scripts reuse VIP language because status anxiety works. Real VIP hosts still will not ask for passwords. Status never overrides security standards.

Treat VIP-flavoured fear messages as high risk. Status language is cheap to forge; official Support Center initiation is not. Start the thread yourself every time.

VIP-flavoured fear messages are high risk precisely because status anxiety is easy to forge.
`,
        zh: `针对娱乐平台的钓鱼很少长得像明显垃圾信息。它长得像热心客服、支付对账员，或「正在核实」的 VIP 接待。真正的 TPOWER 客服不会要密码、完整卡号或远程桌面控制。请按 [[/contact|客服中心]] 准备识别信息；一旦对话索要机密，立刻停止。

社会工程利用紧迫感与身份。「不装这个提现就卡死。」「KYC 失败——马上发验证码。」请放慢对话。到 [[/aml-kyc|AML与KYC]] 了解正当核验预期，并从客服中心确认通道——不要只信来讯本身。

邮件与聊天假冒可能抄得很差或很像。不要信 Logo，要信你从官网主动打开的路径。若对话不是你发起的，请保持怀疑。

通过官方客服举报可疑联系，便于追踪模式。不要把一次性验证码转给任何人。验证码用来证明你控制通道——交出去等于证明攻击者控制。

防钓鱼应成为日常行为。若消息制造资金被锁的恐惧，请自己打开客服中心询问。恐惧才是载荷；恶意链接只是投送。

假客服剧本爱用 VIP 话术，因为身份焦虑有效。真正的 VIP 接待仍然不会要密码。身份永远不能覆盖安全标准。

把带 VIP 风味的恐惧消息当高风险。身份话术很容易伪造；从官方客服中心发起并不容易伪造。每次都由你自己开线程。

带 VIP 风味的恐惧消息高风险，正因为身份焦虑极易伪造。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Phishing and fake support awareness",
        zh: "防钓鱼与假客服识别",
      },
      reverse: true,
    },
    {
      title: {
        en: "APK mirrors, sessions, and monitoring signals",
        zh: "APK 镜像、会话与监控信号",
      },
      body: {
        en: `Unofficial APK mirrors are a Malaysia-relevant threat because sideloading is culturally common. Treat every non-official package as hostile until proven otherwise. Follow [[/download|Download]] only. If a package demands accessibility services or device-admin rights to “play slots,” uninstall and report.

Sessions should be intentional. Log out on shared devices. Do not leave withdrawal pages open on borrowed phones. If you see a login you do not recognise, change your password from a trusted device and contact support with times and approximate locations — still without sharing the new password in chat.

Monitoring signals on the platform side look for unusual access. They are not a substitute for player vigilance. Think of them as a second pair of eyes that still needs you to report anomalies quickly.

Combine APK caution with payment caution. Malware that reads SMS can intercept codes. Prefer official apps, updated OS patches when available, and scepticism toward “helper tools” promoted in unofficial groups.

Session monitoring is a backstop, not a babysitter. If you lend a phone, end the session. If you use a shared computer, do not store passwords. Platform signals cannot see a shoulder-surfer behind you.

APK caution includes permission literacy. Accessibility capture, SMS read access, and device admin rights are rarely required to play slots. Demand an explanation or refuse the install.

Permission literacy belongs next to APK literacy. If a package needs device-admin rights to open slots, uninstall and report. Entertainment does not require owning your phone.

Device-admin permissions are not a normal price of admission for playing slots on mobile.
`,
        zh: `非官方 APK 镜像对马来西亚特别相关，因为侧载在文化上更常见。把每个非官方包装先当成敌意，直到证明相反。只跟 [[/download|下载]] 指引。若包装为「玩老虎机」索要无障碍服务或设备管理员权限，请卸载并举报。

会话应出于有意。共用设备请登出。不要在外借手机上开着提现页。若看到不认识的登录，请在可信设备改密，并向客服提供时间与大致地点——仍不要在聊天里发送新密码。

平台侧监控信号用于发现异常访问。它不能替代玩家警觉。把它当作第二双眼睛，仍需要你尽快回报异常。

APK 谨慎还要配合支付谨慎。能读短信的恶意软件可截获验证码。优先官方 APP、在可行时更新系统补丁，并对非官方群推销的「辅助工具」保持怀疑。

会话监控是后盾，不是保姆。外借手机请结束会话；共用电脑不要保存密码。平台信号看不见身后的偷窥者。

APK 谨慎包括权限素养。无障碍捕获、读短信、设备管理员权限很少是玩老虎机所必需。要求解释，否则拒绝安装。

权限素养应与 APK 素养并列。若包装为打开老虎机需要设备管理员权限，请卸载并举报。娱乐不需要占领你的手机。

设备管理员权限不是手机玩老虎机的正常入场费。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "APK and session security practices",
        zh: "APK 与会话安全实践",
      },
      reverse: false,
    },
    {
      title: {
        en: "Password hygiene and how to get help safely",
        zh: "密码卫生与安全求助方式",
      },
      body: {
        en: `Password hygiene is unglamorous and decisive. Use a unique password for TPOWER. Avoid reuse from email or social networks. If a breach elsewhere might have exposed a reused secret, change it here promptly from the official site.

Never send passwords, PINs, or one-time codes to anyone claiming to be support, VIP, finance, or “security audit.” Official agents work from [[/contact|Support Center]] expectations: identifiers and screenshots that omit secrets.

If you suspect compromise, sequence matters: secure the device, change the password on the official domain, then open a support case with timeline details. Read [[/customer-commitment|Customer Commitment]] for escalation paths when you believe a case needs senior review.

Security also connects to privacy minimisation and fair complaint handling. Explore [[/privacy-and-data-protection|Privacy & Data Protection]] and keep entertainment within adult, controlled limits via [[/responsible-gaming|Responsible Gaming]]. Strong security habits make those other protections meaningful.

Password managers and unique credentials reduce blast radius when unrelated sites are breached. After suspected compromise, rotate the TPOWER password on the official domain first, then talk to support with a timeline.

After any scare, rebuild trust in order: device, password on official domain, Support Center timeline, then resume play only if you still want to. Skipping steps recreates the incident.

After any scare, delay the next deposit until the password change and support timeline are done. Recovering emotionally by funding again is how incidents become disasters.

Delay the next deposit until password rotation and the support timeline are complete.
`,
        zh: `密码卫生不性感，但决定性很强。为 TPOWER 使用独立密码，避免与邮箱或社交账号复用。若别处泄露可能波及复用机密，请尽快在官网修改。

切勿把密码、PIN 或一次性验证码发给任何自称客服、VIP、财务或「安全审计」的人。官方人员按 [[/contact|客服中心]] 预期工作：识别信息与不含机密的截图。

若怀疑失陷，顺序很重要：先保护设备，在官方域名改密，再带时间线开客服个案。若认为需要更高阶审阅，见 [[/customer-commitment|客户承诺]] 的升级路径。

安全也连接隐私最小化与公平投诉处理。可阅读 [[/privacy-and-data-protection|隐私与数据保护]]，并通过 [[/responsible-gaming|负责任博彩]] 把娱乐控制在成年可管理范围。有强的安全习惯，其他保护才有意义。

密码管理器与独立凭证能在无关网站泄露时缩小冲击面。怀疑失陷后，先在官方域名轮换密码，再带时间线联系客服。

任何惊吓后按顺序重建信任：设备、官方域名改密、客服中心时间线，若仍想玩再恢复。跳步只会重演事故。

任何惊吓后，先完成改密与客服时间线，再考虑下一次存款。靠再次入金来情绪复原，只会把事故变成灾难。

先完成改密与客服时间线，再考虑下一次存款。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "Password hygiene and safe support",
        zh: "密码卫生与安全客服",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "Secure habits for every session",
    zh: "每次会话的安全习惯",
  },
  timeline: [
    {
      title: {
        en: "Confirm you are on an official path",
        zh: "确认走在官方路径",
      },
      body: {
        en: "Use bookmarks or typed URLs; open Download only from the site for apps.",
        zh: "用收藏或手输网址；APP 只从网站进入下载指引。",
      },
    },
    {
      title: {
        en: "Authenticate with unique credentials",
        zh: "用独立凭证登录",
      },
      body: {
        en: "No reused email passwords; never type secrets into chat.",
        zh: "不复用邮箱密码；从不在聊天里输入机密。",
      },
    },
    {
      title: {
        en: "Treat urgency as a warning flag",
        zh: "把紧迫感当警报",
      },
      body: {
        en: "Slow down on panic cashiers, fake KYC, and remote-control asks.",
        zh: "对恐慌收银台、假 KYC、远程控制要求先减速。",
      },
    },
    {
      title: {
        en: "Report anomalies through Support Center",
        zh: "异常通过客服中心回报",
      },
      body: {
        en: "Share timeline and identifiers — not passwords or codes.",
        zh: "提供时间线与识别信息——不要密码或验证码。",
      },
    },
  ],
  trustTitle: {
    en: "Security commitments you can audit as a player",
    zh: "玩家可自行核对的安全承诺",
  },
  trustItems: [
    {
      title: {
        en: "Encrypted official web surfaces",
        zh: "官方网页表面加密",
      },
      body: {
        en: "Core journeys are designed for TLS-backed official domains.",
        zh: "核心旅程按支持 TLS 的官方域名设计。",
      },
    },
    {
      title: {
        en: "Published anti-phishing guidance",
        zh: "公开防钓鱼指引",
      },
      body: {
        en: "Players receive concrete tells for fake cashiers and fake agents.",
        zh: "向玩家提供假收银台与假客服的具体识别点。",
      },
    },
    {
      title: {
        en: "Download hub for install trust",
        zh: "以下载中心建立安装信任",
      },
      body: {
        en: "APK/app guidance is centralised instead of casual file sharing.",
        zh: "APK/APP 指引集中管理，而不是随意传文件。",
      },
    },
    {
      title: {
        en: "Agents never need your password",
        zh: "客服从不需要你的密码",
      },
      body: {
        en: "Support Center standards forbid secret collection.",
        zh: "客服中心标准禁止收集机密。",
      },
    },
    {
      title: {
        en: "Session and device hygiene education",
        zh: "会话与设备卫生教育",
      },
      body: {
        en: "Shared-device and public-network risks are stated plainly.",
        zh: "清楚说明共用设备与公共网络风险。",
      },
    },
    {
      title: {
        en: "Linked privacy and KYC education",
        zh: "联动隐私与 KYC 教育",
      },
      body: {
        en: "Security sits beside data minimisation and verification honesty pages.",
        zh: "安全与数据最小化、核验诚信专页并列。",
      },
    },
  ],
  faqTitle: {
    en: "Platform Security FAQ",
    zh: "平台安全常见问题",
  },
  faqs: [
    {
      question: {
        en: "Does TPOWER use encryption on the website?",
        zh: "TPOWER 网站是否使用加密？",
      },
      answer: {
        en: "Official web journeys are designed to use TLS. Always confirm you are on the official domain before entering credentials or payment details. If the certificate or domain looks wrong, stop before typing secrets — bookmark discipline beats search-ad urgency.",
        zh: "官方网页旅程按使用 TLS 设计。输入凭证或支付资料前，请确认自己在官方域名。若证书或域名看起来不对，输入机密前先停下——收藏纪律胜过搜索广告紧迫感。",
      },
    },
    {
      question: {
        en: "How do I spot a phishing cashier link?",
        zh: "如何识别钓鱼收银台链接？",
      },
      answer: {
        en: "Look for urgency, misspelled domains, and requests that bypass navigation you started yourself. Type the official URL and open Payments from the site menu instead. Panic language plus a shortened link is a classic delivery pair for fake cashiers.",
        zh: "留意紧迫感、拼错域名，以及绕过你主动导航的要求。改为手输官网并从站点菜单打开支付方式。恐慌话术加短链，是假收银台的经典投送组合。",
      },
    },
    {
      question: {
        en: "Will support ever ask for my password?",
        zh: "客服会不会要我的密码？",
      },
      answer: {
        en: "No. Official agents ask for identifiers and non-secret screenshots. Anyone asking for passwords, PINs, or remote control is not following TPOWER support standards. Report impersonators so patterns can be tracked across players.",
        zh: "不会。官方人员只要识别信息与不含机密的截图。任何索要密码、PIN 或远程控制的人，都不符合 TPOWER 客服标准。请举报假冒者，便于跨玩家追踪模式。",
      },
    },
    {
      question: {
        en: "Are third-party APKs safe if they look identical?",
        zh: "看起来一样的第三方 APK 安全吗？",
      },
      answer: {
        en: "No. Visual similarity is not authenticity. Use only Download guidance. Permission-hungry or renamed packages are high risk. Visual clones are cheap; cryptographic authenticity and official paths are not.",
        zh: "不安全。外观相似不等于真实。只使用下载指引。索要夸张权限或改名的包装风险很高。视觉克隆很便宜；密码学真实与官方路径并不便宜。",
      },
    },
    {
      question: {
        en: "What should I do after a suspicious login?",
        zh: "发现可疑登录后怎么办？",
      },
      answer: {
        en: "Secure your device, change the password on the official site, then contact Support Center with times and details — without sending the new password in chat. Include approximate location and device type when you report so review is faster.",
        zh: "先保护设备，在官网改密，再向客服中心提供时间与细节——不要在聊天中发送新密码。回报时附上大致地点与设备类型，审阅会更快。",
      },
    },
    {
      question: {
        en: "Is public Wi-Fi safe for withdrawals?",
        zh: "公共 Wi-Fi 提现安全吗？",
      },
      answer: {
        en: "Prefer trusted networks for withdrawals and password changes. Public Wi-Fi increases interception and device-sharing risks. Prefer mobile data over unknown café Wi-Fi for sensitive actions whenever practical.",
        zh: "提现与改密请优先可信网络。公共 Wi-Fi 增加拦截与设备共用风险。敏感操作在可行时优先用移动数据，而不是不明咖啡店 Wi-Fi。",
      },
    },
    {
      question: {
        en: "How does monitoring help my account?",
        zh: "监控如何帮助我的账户？",
      },
      answer: {
        en: "Platform signals can flag unusual access patterns, but you should still report surprises quickly so cases can be reviewed with your timeline. Monitoring complements your report — it does not replace it.",
        zh: "平台信号可标记异常访问模式，但你仍应尽快回报异常，以便结合你的时间线审阅个案。监控补充你的回报——不能替代回报。",
      },
    },
    {
      question: {
        en: "Where else should I read after Security?",
        zh: "读完安全页还应看什么？",
      },
      answer: {
        en: "Continue with Privacy & Data Protection, AML & KYC education, Support Center, and Customer Commitment for related trust topics. Read them in that order when rebuilding account confidence after a scare.",
        zh: "可继续阅读隐私与数据保护、AML与KYC 教育、客服中心与客户承诺等信任主题。惊吓后重建账户信心时，按该顺序阅读这些专页。",
      },
    },
  ],
  relatedTitle: {
    en: "Security-adjacent official destinations",
    zh: "与安全相邻的官方目的地",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/privacy-and-data-protection",
      label: {
        en: "Privacy & Data Protection",
        zh: "隐私与数据保护",
      },
    },
    {
      href: "/aml-kyc",
      label: { en: "AML & KYC", zh: "AML与KYC" },
    },
    {
      href: "/download",
      label: { en: "Download App", zh: "APP下载" },
    },
    {
      href: "/contact",
      label: { en: "Support Center", zh: "客服中心" },
    },
    {
      href: "/fair-gaming",
      label: { en: "Fair Gaming", zh: "公平游戏" },
    },
  ]),
  ctaTitle: {
    en: "Stay on official, encrypted paths",
    zh: "坚持走官方加密路径",
  },
  ctaDescription: {
    en: "Log in on the official site, download only via published guidance, or ask Support Center about a suspicious contact.",
    zh: "在官网登录、只按公开指引下载，或向客服中心询问可疑联系。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
