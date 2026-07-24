import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authoritySupportCenter: AuthorityPageContent = {
  id: "support-center",
  path: "/contact",
  schemaType: "ContactPage",
  atmosphere: "contact",
  metaTitle: {
    en: "Support Center | Channels, Prep, Hours & Safe Contact",
    zh: "客服中心｜通道、准备、时段与安全联系",
  },
  metaDescription: {
    en: "Official TPOWER support channels, what to prepare before contact, hours orientation, and why agents never need your password.",
    zh: "TPOWER线上博彩 官方客服通道、联系前准备、时段导向，以及客服为何从不需要你的密码。",
  },
  heroTitle: {
    en: "Support Center",
    zh: "TPOWER线上博彩 客服中心",
  },
  heroSubtitle: {
    en: "Official channels, smarter prep, safer conversations — passwords stay yours.",
    zh: "官方通道、更聪明的准备、更安全的对话——密码只属于你。",
  },
  introduction: {
    en: `Support Center is the official doorway for Malaysia players who need human help with TPOWER accounts, payments, downloads, VIP questions, or responsible-play controls. If a stranger messages first claiming to be support, slow down and come here instead.

Channels may include live chat, email, on-site forms, and FAQ deflection for common how-tos. Exact widgets and hours can evolve; treat on-page channel listings and in-product entry points as live truth. This authority page teaches how to use those channels well.

Preparation saves rounds. Bring account identifiers, timestamps, transaction references, game IDs when relevant, and screenshots that omit passwords. Read [[/faq|FAQ]] and [[/blog|Knowledge Center]] first for self-serve steps when the issue is generic.

Security of support is non-negotiable. Official agents never need your password, PIN, or remote-desktop access. Pair this page with [[/security|Platform Security]], [[/customer-commitment|Customer Commitment]], [[/aml-kyc|AML & KYC]], and [[/responsible-gaming|Responsible Gaming]] depending on your case type.

Support Center quality is a player skill as much as a desk skill. Adults who arrive with a clean timeline get clearer answers. Adults who arrive with passwords ready to paste get steered back to security basics — because that instinct is how takeovers happen.

Use this page as the habit loop: self-serve when possible, prepare evidence, initiate officially, stay on one thread, escalate cleanly if stuck. That loop is how Malaysia players turn a frustrating cashier moment into a resolvable case.

Make Support Center your default reflex. Not search ads, not group admins, not cold DMs. The reflex takes a week to build and prevents years of account grief. This page is the training ground for that reflex.

Support Center is where policy becomes a conversation. Security rules become “we will never ask for your password.” Responsible Gaming becomes “tell me which control you need.” AML/KYC education becomes “here is the official upload checklist.” Customer Commitment becomes “here is your case reference and next update.”

Treat the desk as a professional service. Arrive with a timeline. Stay on one thread. Use bilingual help without inventing vocabulary. Escalate cleanly when stuck. Report impersonators. Never install files from people who messaged you first.

Hours and queues are real. Peak Malaysia evenings can be busy. Fast acknowledgement and clear next steps matter more than theatrical instant miracles. If you use the wait to prepare better evidence, you accelerate your own resolution. If you open five incomplete chats, you decelerate it.

Practise one clean support contact while nothing is wrong. Open Support Center, find the channels, read the prep tips, and bookmark the page. Muscle memory built on a calm day is what you will need on a chaotic night. Do not wait for a stolen account to learn where the official door is.

When a real case arrives, lead with the outcome you need and the evidence you have. “Withdrawal pending since time T, reference R, screenshot attached without secrets” is a complete opening. Agents can work with that. Novels without references cannot.

If someone contacts you first, end that thread. Start here. Report the impersonation. The highest-leverage security rule on this page is also the simplest customer-service rule: you initiate from the official desk, or you assume risk.

Revisit Support Center whenever a stranger messages first or a cashier state confuses you. The reflex is the product: initiate officially, prepare a linear evidence pack, never share passwords, stay on one thread, escalate cleanly if stuck. Practise finding the channels on a calm day so chaotic nights do not depend on search ads. That is how Malaysia players turn stress into resolvable cases on TPOWER without feeding impersonators.

Bookmark Support Center now, before you need it — calm-day bookmarks beat chaotic-night search ads every time for Malaysia players on TPOWER.

Official initiation is the whole security of support — bookmark this official desk before a chaotic night forces a risky search-ad gamble.

Bookmark this official desk now — calm-day bookmarks beat chaotic-night search ads for every Malaysia player on TPOWER.

Save this contact URL in your browser now so the next urgent message cannot redirect you to a mirror.

A final contact habit: bookmark this desk, prepare evidence before you type, initiate yourself, and treat stranger-first outreach as hostile until proven official. That habit is the security of support.

You initiate contact, you prepare evidence, you never share passwords — that is official support on TPOWER.
`,
    zh: `客服中心是马来西亚玩家就 TPOWER线上博彩 账户、支付、下载、VIP 问题或负责任控制寻求人工协助的官方门口。若陌生人先发消息自称客服，请先减速，改从这里进入。

通道可能包括即时聊天、邮件、站内表单，以及把常见操作导流到 FAQ。具体控件与时段可能调整；请以页面上的通道列表与产品内入口为现场真相。本权威页教你如何用好这些通道。

准备能减少来回。带上账户识别信息、时间戳、交易参考、相关时的游戏编号，以及去掉密码的截图。若问题通用，先读 [[/faq|常见问题]] 与 [[/blog|知识中心]] 自助。

客服安全不可商量。官方人员从不需要你的密码、PIN 或远程桌面。按个案类型搭配 [[/security|平台安全]]、[[/customer-commitment|客户承诺]]、[[/aml-kyc|AML与KYC]]、[[/responsible-gaming|负责任博彩]]。

客服中心质量既是台席能力，也是玩家技能。带着干净时间线到来的成年人，更容易得到清楚答案；准备把密码粘贴出去的人，会被导回安全基础——因为那种直觉正是盗号路径。

请把本页当成习惯闭环：能自助先自助、准备证据、官方发起、留在一条线程、卡住再干净升级。大马玩家靠这个闭环，把令人挫败的收银台时刻变成可解决的个案。

让客服中心成为你的默认反射。不是搜索广告，不是群管理员，不是陌生私信。反射花一周养成，却能避免多年账户悲剧。本页就是训练场。

客服中心是政策变成对话的地方。安全规则变成「我们永远不会要你的密码」。负责任博彩变成「告诉我你需要哪项控制」。AML/KYC 教育变成「这是官方上传清单」。客户承诺变成「这是你的个案参考号与下次更新」。

把台席当作专业服务。带着时间线到来。留在一条线程。使用双语协助时不要自创词汇。卡住时干净升级。举报假冒者。绝不安装先联系你的人发来的文件。

时段与排队是真实的。大马晚间高峰可能忙碌。迅速确认与清楚的下一步，胜过表演式瞬时奇迹。若你用等待准备更好证据，你就加速自己的解决；若你开五条不完整聊天，你就减速。

在没事时练习一次干净的客服联系。打开客服中心，找到通道，阅读准备提示，收藏页面。平静日练出的肌肉记忆，才是混乱夜你需要的。不要等账户被盗才学习官方门口在哪。

真正个案到来时，先说明你需要的结果与你有的证据。「提现自时间 T 起待处理，参考号 R，附不含机密截图」就是完整开场。客服能据此工作。没有参考号的长篇故事不能。

若有人先联系你，结束该线程。从这里开始。举报假冒。本页杠杆最高的安全规则，也是最简单的客服规则：由你从官方台席发起，否则假设有风险。

每当陌生人先发消息或收银台状态让你困惑时，重访客服中心。反射就是产品：官方发起、准备线性证据包、永不分享密码、留在一条线程、卡住再干净升级。在平静日练习找通道，混乱夜才不必依赖搜索广告。大马玩家靠这样把压力变成可解决个案，而不喂养假冒者。

现在就收藏客服中心，而不是等到需要时——对 TPOWER线上博彩 的大马玩家而言，平静日的收藏每次都胜过混乱夜的搜索广告。

官方发起就是客服安全的全部关键——在混乱夜逼你赌搜索广告之前，先收藏这个台席。

现在就收藏这个官方台席——对 TPOWER线上博彩 的每位大马玩家，平静日收藏都胜过混乱夜搜索广告。

现在就把本联系网址存进浏览器，好让下一则紧迫消息无法把你导向镜像站。

最后一个联系习惯：收藏本台席、输入前准备证据、由自己发起，并把陌生人先联系当作敌意直到证明官方。这习惯就是客服安全。

由你发起、由你准备、永不分享密码——那才是官方客服。
`,
  },
  stats: [
    {
      value: { en: "LIVE", zh: "即时" },
      label: {
        en: "Official live channels",
        zh: "官方即时通道",
      },
    },
    {
      value: { en: "PREP", zh: "准备" },
      label: {
        en: "Faster with evidence packs",
        zh: "证据包越全越快",
      },
    },
    {
      value: { en: "PWD×", zh: "禁密" },
      label: {
        en: "Never share passwords here",
        zh: "此处永不分享密码",
      },
    },
    {
      value: { en: "EN/ZH", zh: "中/英" },
      label: {
        en: "Bilingual desk orientation",
        zh: "双语台席导向",
      },
    },
  ],
  featuresTitle: {
    en: "What the Support Center is built to do",
    zh: "客服中心要完成的事",
  },
  features: [
    {
      icon: "users",
      title: {
        en: "Human help on official rails",
        zh: "官方轨道上的人工协助",
      },
      body: {
        en: "Chat, email, and forms that create records — not random social aliases.",
        zh: "能留下记录的聊天、邮件与表单——不是随机社交马甲。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Prep checklists before you type",
        zh: "输入前的准备清单",
      },
      body: {
        en: "Identifiers, times, references, and clean screenshots speed outcomes.",
        zh: "识别信息、时间、参考号与干净截图加快结果。",
      },
    },
    {
      icon: "lock",
      title: {
        en: "Password-free conversations",
        zh: "无密码对话",
      },
      body: {
        en: "Agents authenticate association without harvesting account secrets.",
        zh: "客服核验关联时不收割账户机密。",
      },
    },
    {
      icon: "zap",
      title: {
        en: "Hours and channel orientation",
        zh: "时段与通道导向",
      },
      body: {
        en: "Check live listings on this contact surface for current availability.",
        zh: "请在本联系页查看当前可用通道与时段。",
      },
    },
    {
      icon: "heart",
      title: {
        en: "Responsible-play intake",
        zh: "负责任请求受理",
      },
      body: {
        en: "Limits, timeouts, and exclusion requests are treated with dignity.",
        zh: "限额、冷静期与排除请求被有尊严地对待。",
      },
    },
    {
      icon: "shield",
      title: {
        en: "Impersonation resistance",
        zh: "抵御假冒",
      },
      body: {
        en: "You initiate contact from here; cold outreach is a warning flag.",
        zh: "由你从这里发起联系；陌生来讯是警报信号。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Official channels versus lookalike traps",
        zh: "官方通道对比仿冒陷阱",
      },
      body: {
        en: `Official channels are the ones you open from this Support Center surface, from logged-in product menus, or from bookmarked TPOWER URLs. Lookalike traps arrive as cold Telegram/WhatsApp messages, mirrored sites, or “VIP hosts” who refuse to meet you on the recorded desk.

If someone needs you to leave the official thread to finish a case, treat that as a security event. Real escalations stay on official rails under [[/customer-commitment|Customer Commitment]]. Fake agents push you to APK sideloads, remote control, or password collection — patterns covered on [[/security|Platform Security]].

FAQ and blog content can resolve many how-tos without a ticket. Use them for deposit vocabulary, download orientation, and general product education, then return here when the case is account-specific.

Bookmark this page. Search ads under pressure are how phishing cashiers win.

Channel authenticity is binary. Either you opened it from official navigation, or you should assume risk. Almost-official mirrors are how credentials leak. When in doubt, type the site address and walk to Support Center again.

If you manage family members’ adult accounts with consent, still keep one official thread per account and never share passwords between people “for convenience.” Convenience is how controls and security both collapse.

Practise finding channels on a calm day. Muscle memory built without panic is what you need on a chaotic night when an account feels wrong.

Practise finding official channels on a calm day before a chaotic night needs them.

Whenever a stranger messages first, end that thread and initiate from this Support Center page with a prepared evidence pack.
`,
        zh: `官方通道是你从本客服中心表面、已登录产品菜单，或已收藏的 TPOWER 网址打开的那些。仿冒陷阱则以陌生 Telegram/WhatsApp 消息、镜像站，或拒绝在留痕台席与你会面的「VIP 接待」出现。

若有人要你离开官方线程才能办完个案，请当作安全事件。真正的升级留在官方轨道，见 [[/customer-commitment|客户承诺]]。假客服会推你去侧载 APK、远程控制或交出密码——模式见 [[/security|平台安全]]。

FAQ 与博客能在不开工单的情况下解决许多操作问题。用它们学习存款词汇、下载导向与一般产品教育；账户个案再回到这里。

请收藏本页。压力下点搜索广告，是钓鱼收银台的获胜方式。

通道真伪是二元的。要么你从官方导航打开，要么应假设有风险。几乎官方的镜像是凭证泄露路径。不确定时，手输网址再走一次客服中心。

若你在知情同意下协助家人的成年账户，仍请每账户保持一条官方线程，并且绝不「图方便」在人之间分享密码。方便正是控制与安全一起崩塌的原因。

在平静日练习找通道。没有恐慌时练出的肌肉记忆，才是账户感觉不对的混乱夜你需要的。

在混乱夜需要之前，先在平静日练习找官方通道。

每当陌生人先发消息，结束该线程，并从本客服中心页带着准备好的证据包发起。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "Official TPOWER support channels",
        zh: "TPOWER 官方客服通道",
      },
      reverse: false,
    },
    {
      title: {
        en: "Prepare before contact: evidence that helps",
        zh: "联系前准备：真正有用的证据",
      },
      body: {
        en: `Helpful evidence is specific. Include the account identifier support recognises, approximate times in your local timezone, amounts, payment rail names from [[/payment-methods|payment methods]], error text, and game or table IDs for mechanic questions per [[/fair-gaming|Fair Gaming]].

Unhelpful evidence is secret-laden. Crop out passwords, full card numbers, and one-time codes. If a screenshot shows a code, invalidate it and request a new one only through official login flows — never paste codes into chat.

For verification cases, read [[/aml-kyc|AML & KYC]] so you know matching expectations before uploading. For privacy rights requests, read [[/privacy-and-data-protection|Privacy & Data Protection]] and the [[/privacy-policy|Privacy Policy]].

One clean packet beats five fragmented messages. Agents can investigate faster when the timeline is linear.

Evidence packs should anticipate clarifying questions. Include what you already tried, exact error strings, and whether the issue reproduces on web versus app. That context prevents circular troubleshooting.

Preparation includes emotional preparation. Write the timeline before you open chat. Anger first, facts later, produces slower investigations.

Lead with outcome and evidence: pending since time T, reference R, cropped screenshot. Agents can work. Novels without references cannot.

Lead with outcome, time, reference, and cropped screenshot — novels without IDs fail.
`,
        zh: `有用证据要具体。包含客服认得的账户识别信息、你本地时区的大致时间、金额、[[/payment-methods|支付方式]] 上的通道名、错误文本，以及按 [[/fair-gaming|公平游戏]] 处理机制问题时的游戏或桌号。

无用证据是塞满机密的。裁掉密码、完整卡号与一次性验证码。若截图里有验证码，作废它并只通过官方登录流程重取——绝不把验证码粘到聊天里。

核验个案请先读 [[/aml-kyc|AML与KYC]]，了解匹配预期再上传。隐私权利请求请读 [[/privacy-and-data-protection|隐私与数据保护]] 与 [[/privacy-policy|隐私政策]]。

一份干净材料包胜过五条碎片消息。时间线线性时，客服调查更快。

证据包应预判澄清问题。写明你已尝试什么、精确错误字符串，以及问题在网页与 APP 是否可复现。这些语境能避免循环排障。

准备也包括情绪准备。开聊天前先写时间线。先愤怒后事实，只会让调查更慢。

先说明结果与证据：自时间 T 起待处理，参考号 R，裁切截图。客服能工作。没有参考号的长篇不能。

先说明结果、时间、参考号与裁切截图——没有编号的长篇会失败。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "Preparing evidence for support",
        zh: "为客服准备证据",
      },
      reverse: true,
    },
    {
      title: {
        en: "Hours, bilingual desk, and what “fast” means",
        zh: "时段、双语台席，以及「快」的含义",
      },
      body: {
        en: `Hours are published where channels are listed on this contact experience and may differ by channel. Peak Malaysia evenings can mean queues. “Fast” in a healthy desk means prompt acknowledgement and clear next steps — not skipping investigation to invent an answer.

Bilingual orientation means you can seek help in English or Chinese. Product vocabulary should match across languages so a deposit state is not renamed mid-case. If something is unclear, ask the agent to point to the on-screen label you both see.

Live chat suits urgent blockers; email/forms suit longer evidence packs. FAQ deflection is not dismissal — it is routing simple how-tos away from queues so complex cases get human time.

If you need responsible-play controls quickly, say that in the first message. Those requests follow dignity standards linked from [[/responsible-gaming|Responsible Gaming]].

Hours orientation respects queue reality. Peak times create waits; status updates still matter. If you submitted a form, keep the reference. Re-opening five chats with incomplete context slows your own case.

When queues are long, use the wait to gather better screenshots and references. Idle frustration without preparation wastes the moment an agent becomes available.

Use queue time to improve evidence, not to open five incomplete chats. Preparation during waits accelerates your own resolution.

Hours and queues are part of honesty with Malaysia evening peaks. Waiting can happen; acknowledgement and clear next steps still matter. Use waits to crop secrets from screenshots, linearise your timeline, and decide whether FAQ already answers a how-to. Five incomplete chats decelerate you; one complete packet accelerates you. If a stranger messages first during the wait, ignore them and stay on the official thread you started. Urgency from outside the desk is a warning light, not a shortcut.

Queue time is preparation time; incomplete parallel chats decelerate your own case.
`,
        zh: `时段公布在本联系体验的通道列表旁，且可能因通道而异。马来西亚晚间高峰可能排队。健康台席里的「快」意味着迅速确认与清楚的下一步——而不是跳过调查编造答案。

双语导向意味着你可用英文或中文求助。产品词汇应跨语言一致，避免存款状态在个案中途改名。若不清楚，请客服指向你们双方都能看到的屏幕标签。

即时聊天适合紧急阻断；邮件/表单适合更长证据包。导流到 FAQ 不是打发——而是把简单操作移出队列，让复杂个案获得人工时间。

若需尽快启用负责任控制，请在第一条消息说明。此类请求遵循 [[/responsible-gaming|负责任博彩]] 链接的尊严标准。

时段导向尊重排队现实。高峰会等待；状态更新仍重要。若已提交表单，保留参考号。用五段不完整语境重开聊天，只会拖慢你自己的个案。

排队很长时，用等待收集更好的截图与参考号。没有准备的空等愤怒，会浪费客服一空出来的时刻。

用排队时间改善证据，而不是开五条不完整聊天。等待中的准备能加速你自己的解决。

时段与排队也是对大马晚间高峰的诚实。等待可能发生；确认与清楚的下一步仍重要。用等待从截图裁掉机密、把时间线线性化，并判断 FAQ 是否已回答操作问题。五条不完整聊天让你减速；一份完整材料包让你加速。若等待期间陌生人先发消息，忽略他们并留在你发起的官方线程。来自台席外的紧迫感是警示灯，不是捷径。

排队时间就是准备时间；不完整的平行聊天会拖慢你自己的个案。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Support hours and bilingual service",
        zh: "客服时段与双语服务",
      },
      reverse: false,
    },
    {
      title: {
        en: "Security of support: never share passwords",
        zh: "客服安全：永不分享密码",
      },
      body: {
        en: `The highest-value rule on this page: never share passwords, PINs, or one-time codes with anyone claiming to help — including people who sound exactly like support. Official TPOWER agents work without those secrets.

Remote-control requests are disqualifying. So are “install this APK to verify chat.” Return to [[/download|Download]] only for official installs, and report impersonators through the real desk.

If you already exposed a secret, change the password on the official [[/login|Login]] flow from a trusted device, then open a case describing what happened — without sending the new password in the same chat.

Support security also protects privacy files. Upload KYC images only via instructed official paths. Customer Commitment and Privacy hubs explain how sensitive cases should be handled end to end.

The never-share-passwords rule is absolute even when you feel desperate about a withdrawal. Desperation is exactly what impersonators script for. Official agents have other ways to verify association — use them.

Security of support is a community good. Reporting impersonators protects the next player. Keep the real desk informed without forwarding your secrets to anyone.

If someone messages first, end it and start here. Reporting impersonators is a community good. You initiate from the official desk, or you assume risk.

Make the Support Center reflex automatic: stranger messages first → end thread → open this page → prepare evidence → initiate officially → never share passwords → stay on one thread → escalate cleanly if stuck. Practise the path on a calm day. Use bilingual help without inventing vocabulary. Report impersonators as a community good. Queue time is preparation time. That is the entire customer-service security curriculum for Malaysia players on TPOWER — simple, repeatable, and hostile to urgency theatre.

Stranger-first contact ends immediately; you restart from this official desk every time.
`,
        zh: `本页最有价值的规则：永不向任何自称协助者分享密码、PIN 或一次性验证码——包括听起来完全像客服的人。官方 TPOWER 客服不需要那些机密也能工作。

远程控制要求直接出局。「安装这个 APK 验证聊天」同样。官方安装只回 [[/download|下载]]，并通过真正台席举报假冒者。

若你已暴露机密，请在可信设备上通过官方 [[/login|登录]] 流程改密，再开个案描述经过——不要在同一聊天发送新密码。

客服安全也保护隐私文件。KYC 图像只按指示的官方路径上传。客户承诺与隐私专页说明敏感个案应如何端到端处理。

永不分享密码的规则，即使在提现焦虑时也绝对成立。焦虑正是假冒者编写的剧本点。官方客服有其他方式核验关联——请用那些方式。

客服安全是公共品。举报假冒者能保护下一位玩家。让真正台席知情，同时不要把机密转发给任何人。

若有人先发消息，结束它并从这里开始。举报假冒是公共品。由你从官方台席发起，否则假设有风险。

让客服中心反射自动化：陌生人先发消息 → 结束线程 → 打开本页 → 准备证据 → 官方发起 → 永不分享密码 → 留在一条线程 → 卡住再干净升级。在平静日练习路径。使用双语协助时不要自创词汇。举报假冒作为公共品。排队时间就是准备时间。这就是大马玩家在 TPOWER线上博彩 上的全部客服安全课程——简单、可重复，且敌视紧迫感表演。

陌生人先联系就立刻结束；每次都从本官方台席重新开始。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "Support security password rule",
        zh: "客服安全密码规则",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "A clean contact sequence",
    zh: "干净的联系顺序",
  },
  timeline: [
    {
      title: {
        en: "Self-serve if the issue is generic",
        zh: "通用问题先自助",
      },
      body: {
        en: "Check FAQ and Knowledge Center walkthroughs first.",
        zh: "先查看常见问题与知识中心步骤。",
      },
    },
    {
      title: {
        en: "Assemble a password-free evidence pack",
        zh: "组装无密码证据包",
      },
      body: {
        en: "Identifiers, times, references, cropped screenshots.",
        zh: "识别信息、时间、参考号、裁切后的截图。",
      },
    },
    {
      title: {
        en: "Open an official channel from this page",
        zh: "从本页打开官方通道",
      },
      body: {
        en: "Ignore cold outreach; you initiate from Support Center.",
        zh: "忽略陌生来讯；由你从客服中心发起。",
      },
    },
    {
      title: {
        en: "Stay on one thread through resolution or escalation",
        zh: "在解决或升级前留在同一线程",
      },
      body: {
        en: "Ask for status; escalate per Customer Commitment if stuck.",
        zh: "索取状态；卡住时按客户承诺升级。",
      },
    },
  ],
  trustTitle: {
    en: "Support Center trust rules",
    zh: "客服中心信任规则",
  },
  trustItems: [
    {
      title: {
        en: "You start the conversation here",
        zh: "对话由你从这里开始",
      },
      body: {
        en: "Cold DMs claiming urgency are treated as hostile until proven official.",
        zh: "声称紧迫的陌生私信在证明官方前视为敌意。",
      },
    },
    {
      title: {
        en: "Zero password collection",
        zh: "零密码收集",
      },
      body: {
        en: "Any password ask means leave the conversation.",
        zh: "任何索要密码的对话都应离开。",
      },
    },
    {
      title: {
        en: "Prep improves outcomes",
        zh: "准备改善结果",
      },
      body: {
        en: "Evidence packs reduce clarification loops.",
        zh: "证据包减少澄清来回。",
      },
    },
    {
      title: {
        en: "Hours shown beside channels",
        zh: "时段展示在通道旁",
      },
      body: {
        en: "Live contact listings beat rumours about availability.",
        zh: "线上联系列表优于关于可用性的传闻。",
      },
    },
    {
      title: {
        en: "Dignity for control requests",
        zh: "控制请求保持尊严",
      },
      body: {
        en: "Responsible-play asks are first-class tickets.",
        zh: "负责任请求是一等工单。",
      },
    },
    {
      title: {
        en: "Linked escalation standards",
        zh: "联动升级标准",
      },
      body: {
        en: "Customer Commitment defines fair next steps when cases stall.",
        zh: "个案停滞时，客户承诺定义公平的下一步。",
      },
    },
  ],
  faqTitle: {
    en: "Support Center FAQ",
    zh: "客服中心常见问题",
  },
  faqs: [
    {
      question: {
        en: "How do I contact official TPOWER support?",
        zh: "如何联系 TPOWER 官方客服？",
      },
      answer: {
        en: "Use the channels listed on this Support Center page or in-product official menus. Do not trust cold messages that ask you to move elsewhere. Initiate contact yourself whenever a stranger messages first.",
        zh: "使用本客服中心页面或产品内官方菜单列出的通道。不要信任要求你转到别处的陌生消息。只要陌生人先发消息，就由你自己发起联系。",
      },
    },
    {
      question: {
        en: "What should I prepare before chatting?",
        zh: "聊天前应准备什么？",
      },
      answer: {
        en: "Account identifiers, times, amounts/references, relevant game IDs, and screenshots with secrets cropped out. Linear timelines beat fragmented chat bombs and help agents investigate without circular questions.",
        zh: "账户识别信息、时间、金额/参考号、相关游戏编号，以及裁掉机密的截图。线性时间线胜过碎片聊天轰炸，并帮助客服在无循环提问的情况下调查。",
      },
    },
    {
      question: {
        en: "Will agents ask for my password?",
        zh: "客服会要密码吗？",
      },
      answer: {
        en: "No. Official agents never need passwords, PINs, or remote control. Leave any conversation that demands them. Remote-control asks are automatic disqualifiers even when withdrawals feel urgent.",
        zh: "不会。官方客服从不需要密码、PIN 或远程控制。遇到索要者请立刻离开对话。即使提现显得紧迫，远程控制要求也自动出局。",
      },
    },
    {
      question: {
        en: "Where do I see support hours?",
        zh: "在哪里查看客服时段？",
      },
      answer: {
        en: "Check the live channel listings on this contact experience. Hours can differ by channel and may change; on-page listings beat rumours. On-page listings override unofficial hours charts circulating in groups.",
        zh: "查看本联系体验上的通道列表。时段可能因通道而异且会调整；以页面列表为准，不要信传闻。页面列表覆盖群里流传的非官方时段表。",
      },
    },
    {
      question: {
        en: "Can I get help in Chinese?",
        zh: "能否获得中文协助？",
      },
      answer: {
        en: "Yes. The desk is oriented for English and Chinese Malaysia players describing the same product states. Request the language you need at the start of the thread so routing is clean.",
        zh: "可以。台席面向中英马来西亚玩家，并用同一套产品状态描述问题。在线程开头就提出你需要的语言，以便干净分派。",
      },
    },
    {
      question: {
        en: "What if my issue is a how-to, not an account dispute?",
        zh: "若只是操作问题而非账户争议呢？",
      },
      answer: {
        en: "Start with FAQ and Knowledge Center. Return to Support Center when you need account-specific investigation. Self-serve first keeps the desk free for account-specific work that truly needs a human.",
        zh: "先从常见问题与知识中心开始。需要账户级调查时再回客服中心。先自助能让台席留给真正需要人工的账户级工作。",
      },
    },
    {
      question: {
        en: "How do I request a deposit limit or timeout?",
        zh: "如何申请存款限额或冷静期？",
      },
      answer: {
        en: "Say so clearly in your first official message and review Responsible Gaming. Agents should handle these requests with dignity. Lead with the control you need applied so routing is immediate.",
        zh: "在第一条官方消息中清楚说明，并阅读负责任博彩。客服应以尊严处理此类请求。先说明你需要启用的控制，以便立刻分派。",
      },
    },
    {
      question: {
        en: "Someone messaged me first claiming to be support — what now?",
        zh: "有人先联系我并自称客服——怎么办？",
      },
      answer: {
        en: "Do not share secrets or install their files. Open a thread yourself from this Support Center and report the impersonation. Preserve screenshots of the impersonation for the real desk without forwarding codes.",
        zh: "不要分享机密或安装其文件。请自己从本客服中心开线程，并举报假冒。为真正台席保留假冒截图，但不要转发验证码。",
      },
    },
  ],
  relatedTitle: {
    en: "Pages to open before or during support",
    zh: "联系客服前或过程中可打开的页面",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/customer-commitment",
      label: { en: "Customer Commitment", zh: "客户承诺" },
    },
    {
      href: "/security",
      label: { en: "Platform Security", zh: "平台安全" },
    },
    {
      href: "/responsible-gaming",
      label: { en: "Responsible Gaming", zh: "负责任博彩" },
    },
    {
      href: "/aml-kyc",
      label: { en: "AML & KYC", zh: "AML与KYC" },
    },
    {
      href: "/faq",
      label: { en: "FAQ", zh: "常见问题" },
    },
  ]),
  ctaTitle: {
    en: "Contact official support the safe way",
    zh: "用安全方式联系官方客服",
  },
  ctaDescription: {
    en: "Prepare your evidence pack, open an official channel from this page, and never share a password.",
    zh: "准备好证据包，从本页打开官方通道，并且永不分享密码。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
