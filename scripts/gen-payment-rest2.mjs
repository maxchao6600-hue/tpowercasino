import fs from "node:fs";
import path from "node:path";
import {
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
  renderPage,
} from "./lib/payment-page-factory.mjs";

const dir = path.join(process.cwd(), "src/data/payments-center");
const CTA = "/images/cta/tpower-join-cta.webp";
const NEWS = "/images/news/tpower-duitnow-ewallet-tips.webp";

function write(file, exportName, data) {
  fs.writeFileSync(path.join(dir, file), renderPage(exportName, data));
  console.log("wrote", file);
}
function paras(en, zh) {
  return { en: en.join("\n\n"), zh: zh.join("\n\n") };
}

write("fast-withdrawal.ts", "paymentFastWithdrawal", {
  id: "fast-withdrawal",
  path: "/fast-withdrawal",
  heroImage: "/images/payments/heroes/fast-withdrawal.webp",
  metaTitle: {
    en: "TPOWER Fast Withdrawal | Payout Speed Guide",
    zh: "TPower快速提款｜出金速度指南",
  },
  metaDescription: {
    en: "TPOWER Fast Withdrawal guide: what speeds payouts up, what slows them down, banking windows, KYC timing, and how to request clean cashouts in Malaysia.",
    zh: "TPOWER线上博彩快速提款指南：什么加速出金、什么拖慢、银行窗口、KYC 时机，以及如何在大马申请干净出金。",
  },
  heroTitle: { en: "TPOWER Fast Withdrawal", zh: "TPOWER线上博彩 快速提款" },
  heroSubtitle: {
    en: "Operational speed for payouts — prepared players move faster than urgent ones.",
    zh: "出金的运营速度——有准备的玩家比紧迫的玩家更快。",
  },
  introduction: paras(
    [
      `TPOWER Fast Withdrawal explains payout speed without pretending banks vanish. Fast means prepared identity, matching destinations, clear wagering state, and submitting one clean request during normal windows — not paying strangers for “priority release.”`,
      `Process depth lives on the [[/withdrawal-guide|Withdrawal Guide]]. Deposit speed lives on [[/instant-deposit|Instant Deposit]]. Method maps live on [[/payment-methods|Payment Methods]]. This page owns the commercial intent around TPOWER Fast Withdrawal keywords and the habits that make targets realistic.`,
      `Before you chase minutes, finish KYC if prompted ([[/aml-kyc|AML & KYC]]), confirm bonus state on [[/promotions|Promotions]], and ensure bank details match your registered name. Most “slow withdrawal” stories begin days earlier with mismatched deposits from the [[/deposit-guide|Deposit Guide]] era.`,
      `After submit, track cashier status. Banking cut-offs can add time after TPOWER releases funds. Escalate via [[/contact|Support Center]] with references — never via remote-control APKs pitched as “withdrawal unlock tools” ([[/payment-security|Payment Security]], [[/security|Platform Security]]).`,
      `Fast cashouts are also responsible endings. Use [[/responsible-gaming|Responsible Gaming]] when the right move is stopping. VIP hosts on [[/vip|VIP]] can clarify service context; they will not sell personal fee unlocks.`,
      `Continue with [[/login|Login]], [[/register|Register]], [[/download|Download]], [[/blog/how-to-withdraw-tpower|withdrawal blog]], [[/news|News]], [[/faq|FAQ]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].`,
    ],
    [
      `「TPOWER快速提款」说明出金速度，但不假装银行消失。快意味着身份已准备、收款匹配、流水状态清楚、在正常窗口提交一笔干净申请——不是向陌生人付「优先放款」。`,
      `流程深度在 [[/withdrawal-guide|提款指南]]。存款速度在 [[/instant-deposit|即时存款]]。通道地图在 [[/payment-methods|支付方式]]。本页拥有 TPower 快速提款关键词的商业意图，以及让目标变现实的习惯。`,
      `追分钟前，若被提示先完成 KYC（[[/aml-kyc|AML与KYC]]），在 [[/promotions|优惠专区]] 确认红利状态，并确保银行资料匹配注册姓名。多数「提款慢」故事几天前就从 [[/deposit-guide|存款指南]] 时期的不匹配存款开始。`,
      `提交后跟踪收银台状态。TPOWER 放款后银行截点仍可能加时。经 [[/contact|客服中心]] 带参考号升级——绝不用「提款解锁工具」推销的远程控制 APK（[[/payment-security|支付安全]]、[[/security|平台安全]]）。`,
      `快速出金也是负责任的结束。该停时用 [[/responsible-gaming|负责任博彩]]。[[/vip|VIP]] 接待可澄清服务语境；不会出售私人费用解锁。`,
      `继续：[[/login|登录]]、[[/register|注册]]、[[/download|下载]]、[[/blog/how-to-withdraw-tpower|提款攻略]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/deposit-withdrawal-faq|存提款常见问题]]。`,
    ],
  ),
  stats: [
    { vEn: "Prepare", vZh: "准备", lEn: "KYC + matching details before rush hour", lZh: "高峰前完成 KYC + 匹配资料" },
    { vEn: "1 req", vZh: "1笔", lEn: "One clean request beats stacks", lZh: "一笔干净申请胜过堆叠" },
    { vEn: "Window", vZh: "窗口", lEn: "Banking cut-offs still apply after release", lZh: "放款后银行截点仍适用" },
    { vEn: "0 fee", vZh: "0费", lEn: "No personal unlock fees — ever", lZh: "从无私人解锁费" },
  ],
  benefitsTitle: { en: "What actually accelerates TPOWER withdrawals", zh: "真正加速 TPower 提款的因素" },
  benefits: [
    feature("badge", "Early verification", "提早核验", "KYC done in daylight beats KYC at midnight panic.", "白天完成的 KYC 胜过午夜恐慌 KYC。"),
    feature("banknote", "Matching destinations", "匹配收款方", "Same identity as deposits reduces review loops.", "与存款同一身份减少复核循环。"),
    feature("file", "Clear bonus state", "清楚红利状态", "Knowing wagering status prevents failed requests.", "知道流水状态可避免失败申请。"),
    feature("zap", "Normal windows", "正常窗口", "Submitting during healthy banking hours helps posting speed.", "在健康银行时段提交有助入账速度。"),
    feature("eye", "Status patience", "状态耐心", "Reading processing correctly avoids destructive duplicates.", "正确阅读处理中可避免破坏性重复。"),
    feature("shield", "Official escalation", "官方升级", "Support with references is faster than rumour channels.", "带参考号的客服比谣言渠道更快。"),
  ],
  howToTitle: { en: "How to request a faster withdrawal", zh: "如何申请更快提款" },
  howToDescription: {
    en: "A speed-oriented payout checklist grounded in preparation.",
    zh: "以准备为基础的速度导向出金清单。",
  },
  howToSteps: [
    howTo("Clear eligibility", "理清资格", "Confirm withdrawable balance vs locked bonus funds.", "确认可提余额 vs 锁定红利。"),
    howTo("Confirm destination match", "确认收款匹配", "Bank/wallet details must match registered identity.", "银行/钱包资料必须匹配注册身份。"),
    howTo("Finish KYC if flagged", "如被标记完成 KYC", "Upload only via official AML & KYC / Support paths.", "只经官方 AML 与 KYC / 客服路径上传。"),
    howTo("Submit one request", "提交一笔申请", "Enter the amount once; do not stack while processing.", "金额只输一次；处理中勿堆叠。"),
    howTo("Monitor cashier + bank", "监控收银台+银行", "Allow banking windows after TPOWER release.", "TPOWER 放款后预留银行窗口。"),
    howTo("Escalate with structure", "结构化升级", "Contact Support Center with time, amount, destination mask.", "向客服提供时间、金额、收款掩码。"),
  ],
  sections: [
    section(
      "Fast is a preparation story",
      "快是一个准备故事",
      `Players who verify early, deposit from matching sources, and understand promotions experience Fast Withdrawal as ordinary. Players who invent urgency after a mismatched week experience it as drama.

This page refuses “pay RM20 to unlock.” That is not speed; that is theft theatre.`,
      `提早核验、从匹配来源存款、理解优惠的玩家，会把快速提款体验为平常。不匹配一周后才制造紧迫的玩家，会体验为戏剧。

本页拒绝「付 RM20 解锁」。那不是速度；那是盗窃剧本。`,
      "/images/payments/heroes/fast-withdrawal.webp",
      false,
    ),
    section(
      "What slows payouts (even when TPOWER is ready)",
      "什么拖慢出金（即使 TPOWER 已就绪）",
      `Bank holidays, cut-offs, incorrect account numbers, and unfinished wagering slow posting. Fast Withdrawal targets assume normal conditions.

If cashier shows completed but bank not yet posted, wait a reasonable window before escalating — then escalate with evidence, not with a second request.`,
      `银行假日、截点、错误账号与未完成流水都会拖慢入账。快速提款目标假定正常条件。

若收银台显示完成但银行尚未入账，合理窗口后再升级——然后带证据升级，而不是第二笔申请。`,
      "/images/payments/heroes/withdrawal-guide.webp",
      true,
    ),
    section(
      "Relationship to Instant Deposit",
      "与即时存款的关系",
      `Inbound speed and outbound speed are cousins, not twins. Instant Deposit optimises funding attempts; Fast Withdrawal optimises payout preparation. Together they cover commercial timing intent without merging into one thin page.`,
      `入金速度与出金速度是表亲，不是双胞胎。即时存款优化入金尝试；快速提款优化出金准备。二者共同覆盖商业时效意图，而不合并成单薄一页。`,
      "/images/payments/heroes/instant-deposit.webp",
      false,
    ),
    section(
      "Cluster links for payout speed seekers",
      "出金速度追求者的集群链接",
      `Withdrawal Guide, Payment Methods, Payment Security, Deposit & Withdrawal FAQ, Support Center, Responsible Gaming, VIP, Blog, News, and FAQ complete the journey after you understand Fast Withdrawal.`,
      `提款指南、支付方式、支付安全、存提款 FAQ、客服中心、负责任博彩、VIP、博客、新闻与 FAQ，在你理解快速提款后完成旅程。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "Fast withdrawal timeline", zh: "快速提款时间线" },
  timeline: [
    timeline("Prepare", "准备", "KYC, matching details, clear bonus state.", "KYC、匹配资料、清楚红利状态。"),
    timeline("Request", "申请", "One clean cashier withdrawal.", "一笔干净收银台提款。"),
    timeline("Release", "放款", "TPOWER completes eligible release steps.", "TPOWER 完成合格放款步骤。"),
    timeline("Post", "入账", "Bank/wallet posts within its window.", "银行/钱包在其窗口内入账。"),
  ],
  securityTitle: { en: "Fast withdrawal security checklist", zh: "快速提款安全清单" },
  securityItems: [
    trust("No unlock fees", "无解锁费", "Personal payments to release cashouts are scams.", "付钱给私人以放款是诈骗。"),
    trust("No remote APK tools", "无远程 APK 工具", "Withdrawal unlock apps are takeover tools.", "提款解锁 APP 是盗号工具。"),
    trust("OTP private", "OTP 私密", "Bank OTPs are never for chat agents.", "银行 OTP 从不给聊天客服。"),
    trust("One processing request", "一次处理一笔", "Stacks create delay, not speed.", "堆叠制造延迟，不是速度。"),
    trust("Official document paths", "官方证件路径", "KYC only through official upload surfaces.", "KYC 只经官方上传表面。"),
    trust("End shared sessions", "结束共用会话", "Log out after large cashout requests on borrowed phones.", "外借手机大额出金后请登出。"),
  ],
  faqTitle: { en: "Fast Withdrawal FAQ", zh: "快速提款常见问题" },
  faqs: [
    faq("Is TPOWER Fast Withdrawal guaranteed timing?", "TPower 快速提款保证时效吗？", "It describes operational targets under normal conditions. Reviews and bank windows can still add time.", "它描述正常条件下的运营目标。复核与银行窗口仍可能加时。"),
    faq("How do I make withdrawals faster?", "如何让提款更快？", "Verify early, match bank names, clear wagering, submit one clean request in normal windows.", "提早核验、匹配银行姓名、理清流水、在正常窗口提交一笔干净申请。"),
    faq("Why is my withdrawal slow?", "为什么提款慢？", "Common causes: mismatch, KYC pending, bonus locks, bank cut-offs, or review of unusual patterns.", "常见原因：不匹配、KYC 待审、红利锁定、银行截点或异常模式复核。"),
    faq("Can I pay for priority withdrawal?", "可以付费优先提款吗？", "Not through personal accounts. Official paths never require stranger fees.", "不能通过私人账户。官方路径从不要求陌生人费用。"),
    faq("Does VIP get faster withdrawals?", "VIP 提款更快吗？", "VIP may improve service context; it does not replace compliance or banking reality.", "VIP 可能改善服务语境；不能取代合规或银行现实。"),
    faq("What if cashier completed but bank empty?", "收银台完成但银行没到？", "Wait a reasonable banking window, then contact Support Center with references.", "等待合理银行窗口，再带参考号联系客服中心。"),
    faq("Is Fast Withdrawal different from the Withdrawal Guide?", "快速提款与提款指南有何不同？", "Yes. Withdrawal Guide owns full process; Fast Withdrawal owns speed habits and expectations.", "不同。提款指南拥有完整流程；快速提款拥有速度习惯与预期。"),
    faq("Where is the FAQ hub?", "FAQ 中心在哪？", "Deposit & Withdrawal FAQ aggregates rapid answers across funding and payouts.", "存提款常见问题汇总入金与出金的快速答案。"),
  ],
  relatedTitle: { en: "Related payout pages", zh: "相关出金页面" },
  extraLinks: [],
  ctaTitle: { en: "Cash out prepared — not panicked", zh: "有准备地出金—不要恐慌" },
  ctaDescription: {
    en: "Login, confirm matching details, and submit one clean withdrawal on official TPOWER.",
    zh: "登录，确认匹配资料，在官方 TPOWER 提交一笔干净提款。",
  },
});

write("payment-security.ts", "paymentSecurityPage", {
  id: "payment-security",
  path: "/payment-security",
  heroImage: "/images/payments/heroes/payment-security.webp",
  metaTitle: {
    en: "TPOWER Payment Security | Cashier Safety & Phishing Defence",
    zh: "TPower支付安全｜收银台安全与防钓鱼",
  },
  metaDescription: {
    en: "TPOWER Payment Security: official cashier hygiene, deposit/withdrawal phishing patterns, OTP rules, fake agent rails, and how to escalate safely.",
    zh: "TPOWER线上博彩支付安全：官方收银台卫生、存提款钓鱼模式、OTP 规则、假代理通道，以及如何安全升级。",
  },
  heroTitle: { en: "TPOWER Payment Security", zh: "TPOWER线上博彩 支付安全" },
  heroSubtitle: {
    en: "Defend the money moment — deposits, withdrawals, and every urgent message that imitates them.",
    zh: "守住资金时刻——存款、提款，以及一切模仿它们的紧迫消息。",
  },
  introduction: paras(
    [
      `TPOWER Payment Security is the money-threat page. Platform Security covers broader account hygiene; this page zooms into cashier language, fake rails, OTP theft, and “priority deposit/withdrawal” scams that target Malaysia players specifically.`,
      `Official funding always starts after [[/login|Login]] on real domains or [[/download|Download]] apps, then the cashier listed on [[/payment-methods|Payment Methods]]. Anything that begins with a personal account number in Telegram is not a TPOWER payment method.`,
      `Deposit phishing often says your top-up failed and needs a “repair transfer.” Withdrawal phishing often says cashout is locked until you pay an unlock fee or install a remote app. Both fail the official test. Process truth lives on [[/deposit-guide|Deposit Guide]] and [[/withdrawal-guide|Withdrawal Guide]].`,
      `OTP and banking passwords are never for agents. Support Center at [[/contact|Support Center]] will ask for timestamps and references — not secrets. Document uploads follow [[/aml-kyc|AML & KYC]] and [[/privacy-and-data-protection|Privacy & Data Protection]] paths only.`,
      `Keep [[/responsible-gaming|Responsible Gaming]] in view: scammers exploit chase emotions. VIP claims on [[/vip|VIP]] never require private payment channels. Continue learning via [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/instant-deposit|Instant Deposit]], [[/fast-withdrawal|Fast Withdrawal]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].`,
      `Payment Security exists so TPOWER Payment keywords include trust, not only rails. Speed pages mean nothing if the first click was a mirrored cashier.`,
    ],
    [
      `「TPOWER支付安全」是资金威胁专页。平台安全覆盖更广账户卫生；本页聚焦收银台话术、假通道、OTP 盗窃，以及专门针对大马玩家的「优先存/提款」骗局。`,
      `官方入金始终在真实域名 [[/login|登录]] 或 [[/download|下载]] APP 之后，再进入 [[/payment-methods|支付方式]] 列出的收银台。任何从 Telegram 私人账号开始的，都不是 TPOWER 支付方式。`,
      `存款钓鱼常说充值失败需要「修复转账」。提款钓鱼常说出金被锁，除非你付解锁费或安装远程 APP。二者都通不过官方测试。流程真相在 [[/deposit-guide|存款指南]] 与 [[/withdrawal-guide|提款指南]]。`,
      `OTP 与网银密码从不给客服。[[/contact|客服中心]] 会要时间戳与参考号——不要机密。证件上传只走 [[/aml-kyc|AML与KYC]] 与 [[/privacy-and-data-protection|隐私与数据保护]] 路径。`,
      `把 [[/responsible-gaming|负责任博彩]] 放在视野里：骗子利用追损情绪。[[/vip|VIP]] 说法从不需要私人支付通道。续学 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/instant-deposit|即时存款]]、[[/fast-withdrawal|快速提款]]、[[/deposit-withdrawal-faq|存提款常见问题]]。`,
      `支付安全的存在，是为了让 TPower 支付关键词包含信任，而不只是通道。若第一次点击已是镜像收银台，速度页毫无意义。`,
    ],
  ),
  stats: [
    { vEn: "0", vZh: "0", lEn: "Bank passwords requested by real agents", lZh: "真客服索要网银密码次数" },
    { vEn: "Cashier", vZh: "收银台", lEn: "Only official start for funding rails", lZh: "入金通道唯一官方起点" },
    { vEn: "Pause", vZh: "停顿", lEn: "Default response to urgent money DMs", lZh: "对紧迫资金私信的默认反应" },
    { vEn: "Evidence", vZh: "证据", lEn: "Timestamps beat panic narratives", lZh: "时间戳胜过恐慌叙事" },
  ],
  benefitsTitle: { en: "Payment security habits that matter", zh: "真正重要的支付安全习惯" },
  benefits: [
    feature("lock", "Secret boundary", "机密边界", "OTP/PIN/passwords never leave provider apps into chat.", "OTP/PIN/密码从不离开提供方 APP 进入聊天。"),
    feature("eye", "URL discipline", "网址纪律", "Type official domain before cashier actions.", "收银台动作前输入官方域名。"),
    feature("shield", "Rail authenticity", "通道真实性", "Personal accounts in DMs are not listed methods.", "私信私人账户不是列出的方式。"),
    feature("zap", "Urgency scepticism", "紧迫怀疑", "Panic language is a phishing feature, not a service feature.", "恐慌话术是钓鱼功能，不是服务功能。"),
    feature("users", "Official support only", "仅官方客服", "Initiate from Support Center navigation.", "从客服中心导航发起。"),
    feature("file", "Evidence culture", "证据文化", "Save times, amounts, rails before escalating.", "升级前保存时间、金额、通道。"),
  ],
  howToTitle: { en: "How to stay safe during TPOWER payments", zh: "TPower 支付期间如何保持安全" },
  howToDescription: {
    en: "A defensive sequence for deposit and withdrawal moments.",
    zh: "面向存提款时刻的防御步骤。",
  },
  howToSteps: [
    howTo("Confirm official surface", "确认官方表面", "Bookmark Login/Home; avoid message deep links under pressure.", "收藏登录/首页；压力下避开消息深链。"),
    howTo("Open cashier from navigation", "从导航打开收银台", "Start deposits/withdrawals inside the logged-in product.", "在已登录产品内启动存/提款。"),
    howTo("Refuse personal account instructions", "拒绝私人账户指示", "If a human sends bank details in chat, stop.", "若有人在聊天发送银行资料，停下。"),
    howTo("Keep OTP private", "OTP 保持私密", "Enter codes only in bank/wallet apps.", "只在银行/钱包 APP 输入验证码。"),
    howTo("Verify statuses officially", "官方核对状态", "Trust cashier states over group screenshots.", "信任收银台状态而非群截图。"),
    howTo("Escalate without secrets", "不交机密升级", "Contact Support Center with references only.", "只带参考号联系客服中心。"),
  ],
  sections: [
    section(
      "Deposit phishing patterns in Malaysia chats",
      "大马聊天中的存款钓鱼模式",
      `Classic lines include failed deposit repair, limited-time personal QR, and “agent FPX faster than cashier.” Official response: reopen Payment Methods, Deposit Guide, and Support Center. Never repair by paying a stranger.

If you already sent money to a personal account, collect evidence and contact Support Center and your bank guidance paths — do not send a second “completion” payment.`,
      `经典话术包括失败存款修复、限时私人 QR、「代理 FPX 比收银台快」。官方反应：重开支付方式、存款指南与客服中心。绝不通过付钱给陌生人修复。

若已向私人账户打款，收集证据并联系客服中心与银行指引路径——不要再发第二笔「补完」款。`,
      "/images/payments/heroes/payment-security.webp",
      false,
    ),
    section(
      "Withdrawal unlock scams",
      "提款解锁骗局",
      `Unlock fees, remote APKs, and fake VIP hosts prey on players waiting for cashouts. Fast Withdrawal and Withdrawal Guide explain real acceleration: preparation, not payments to strangers.

If someone demands an OTP “to release withdrawal,” they are attacking your bank, not helping TPOWER.`,
      `解锁费、远程 APK 与假 VIP 接待捕食等待出金的玩家。快速提款与提款指南解释真正加速：准备，而不是付钱给陌生人。

若有人要 OTP「以放行提款」，他们在攻击你的银行，不是在帮 TPOWER。`,
      "/images/payments/heroes/fast-withdrawal.webp",
      true,
    ),
    section(
      "Shared devices, public Wi-Fi, and cashier sessions",
      "共用设备、公共 Wi-Fi 与收银台会话",
      `Large deposits and withdrawals deserve trusted networks and private screens. End sessions on borrowed phones. Do not save banking passwords in café browsers.

App installs only via Download. Mirrored APK cashiers are a Payment Security incident waiting to happen.`,
      `大额存提款值得可信网络与私密屏幕。外借手机请结束会话。不要在咖啡馆浏览器保存网银密码。

APP 只经下载安装。镜像 APK 收银台是等待发生的支付安全事故。`,
      "/images/payments/heroes/deposit-guide.webp",
      false,
    ),
    section(
      "How Payment Security links the cluster",
      "支付安全如何连接集群",
      `Every method page should end in safer behaviour. This page is the shared defensive spine for FPX, DuitNow, wallets, online banking, instant deposit, and fast withdrawal intents — without replacing their unique mechanics.`,
      `每个方式页都应导向更安全行为。本页是 FPX、DuitNow、钱包、网上银行、即时存款与快速提款意图的共用防御脊梁——但不取代其独特机制。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "Safe payment decision timeline", zh: "安全支付决策时间线" },
  timeline: [
    timeline("Pause", "停顿", "Urgent money message arrives — stop.", "紧迫资金消息到来—停下。"),
    timeline("Verify surface", "核实表面", "Open official TPOWER via bookmark/navigation.", "经收藏/导航打开官方 TPOWER。"),
    timeline("Act officially", "官方行动", "Use cashier rails or Support Center only.", "只用收银台通道或客服中心。"),
    timeline("Report", "举报", "Send evidence of impersonation when relevant.", "相关时提交假冒证据。"),
  ],
  securityTitle: { en: "Non-negotiable payment rules", zh: "不可妥协的支付规则" },
  securityItems: [
    trust("No personal deposit accounts", "无私人存款账户", "Ever.", "永远。"),
    trust("No withdrawal unlock fees", "无提款解锁费", "Ever.", "永远。"),
    trust("No OTP sharing", "不分享 OTP", "Ever.", "永远。"),
    trust("No remote-control apps for cashouts", "无远程控制出金 APP", "Ever.", "永远。"),
    trust("Official Support Center only", "仅官方客服中心", "Initiate from site navigation.", "从站点导航发起。"),
    trust("One pending money action", "一次一个资金动作", "Don’t stack panic duplicates.", "不要堆叠恐慌重复。"),
  ],
  faqTitle: { en: "Payment Security FAQ", zh: "支付安全常见问题" },
  faqs: [
    faq("Will TPOWER ask for my bank password?", "TPOWER 会要网银密码吗？", "No. Official agents never need banking passwords or wallet PINs.", "不会。官方客服从不需要网银密码或钱包 PIN。"),
    faq("Someone sent a personal account for deposit — real?", "有人发私人账户存款——是真的吗？", "Not an official method. Use cashier rails only and report via Support Center.", "不是官方方式。只用收银台通道并通过客服中心举报。"),
    faq("What is a withdrawal unlock scam?", "什么是提款解锁骗局？", "A demand for fees, OTPs, or remote apps to “release” a cashout. Official withdrawals don’t work that way.", "要求费用、OTP 或远程 APP 以「放行」出金。官方提款不是那样运作。"),
    faq("How do I verify I’m on the real cashier?", "如何确认在真收银台？", "Arrive via official domain/app navigation after login — not via urgent message links.", "登录后经官方域名/APP 导航到达——不是紧迫消息链接。"),
    faq("What evidence should I save?", "应保存什么证据？", "Local time, amount, method name, references, and impersonation screenshots if relevant.", "本地时间、金额、方式名、参考号，以及相关假冒截图。"),
    faq("Is Payment Security the same as Platform Security?", "支付安全等于平台安全吗？", "Related. Platform Security is broader; Payment Security focuses on money-moment threats.", "相关。平台安全更广；支付安全聚焦资金时刻威胁。"),
    faq("Can VIP hosts take payments privately?", "VIP 接待可私下收款吗？", "No. VIP service does not create personal payment rails.", "不可以。VIP 服务不创造私人支付通道。"),
    faq("Where do I get help after a suspected scam?", "怀疑诈骗后去哪求助？", "Support Center immediately; also follow your bank’s guidance for unauthorised transfers.", "立即找客服中心；并遵循银行对未授权转账的指引。"),
  ],
  relatedTitle: { en: "Related trust & payment pages", zh: "相关信任与支付页面" },
  extraLinks: [{ href: "/security", label: { en: "Platform Security", zh: "平台安全" } }],
  ctaTitle: { en: "Move money only on official rails", zh: "只在官方通道移动资金" },
  ctaDescription: {
    en: "Login on the real site, use cashier methods, and contact Support Center with evidence — never secrets.",
    zh: "在真网站登录，使用收银台方式，带证据联系客服中心——绝不交机密。",
  },
});

write("deposit-withdrawal-faq.ts", "paymentDepositWithdrawalFaq", {
  id: "deposit-withdrawal-faq",
  path: "/deposit-withdrawal-faq",
  heroImage: "/images/payments/heroes/deposit-withdrawal-faq.webp",
  metaTitle: {
    en: "TPOWER Deposit & Withdrawal FAQ | Money Questions Answered",
    zh: "TPower存提款常见问题｜资金问答汇总",
  },
  metaDescription: {
    en: "TPOWER Deposit & Withdrawal FAQ: pending deposits, payout delays, limits, KYC, methods, bonuses, and links into the full payment cluster.",
    zh: "TPOWER线上博彩存提款常见问题：存款待处理、出金延迟、限额、KYC、方式、优惠，以及完整支付集群链接。",
  },
  heroTitle: {
    en: "Deposit & Withdrawal FAQ",
    zh: "TPOWER线上博彩 存提款常见问题",
  },
  heroSubtitle: {
    en: "Rapid answers for money moments — with deep guides one click away when you need more than a paragraph.",
    zh: "资金时刻的快速答案——需要超过一段时，深度指南一键可达。",
  },
  introduction: paras(
    [
      `The Deposit & Withdrawal FAQ is the rapid-answer hub for TPOWER money questions. It does not replace the Deposit Guide or Withdrawal Guide; it routes impatient questions to clear answers and then to the right authority page when depth is required.`,
      `Use this page when you need a quick status meaning, a yes/no on agent deposits, or a pointer to FPX, DuitNow, wallets, online banking, instant deposit, or fast withdrawal. Each answer stays unique to FAQ intent — short, direct, and linked.`,
      `For mechanics open [[/deposit-guide|Deposit Guide]], [[/withdrawal-guide|Withdrawal Guide]], [[/payment-methods|Payment Methods]], [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], [[/online-banking|Online Banking]], [[/instant-deposit|Instant Deposit]], [[/fast-withdrawal|Fast Withdrawal]], and [[/payment-security|Payment Security]].`,
      `Always act on official surfaces: [[/login|Login]], [[/register|Register]], [[/download|Download]], cashier, and [[/contact|Support Center]]. Keep [[/promotions|Promotions]], [[/responsible-gaming|Responsible Gaming]], [[/aml-kyc|AML & KYC]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], and [[/faq|FAQ]] nearby.`,
      `This hub strengthens EEAT for deposit and withdrawal commercial queries by answering like the official team: calm, specific, and allergic to unofficial shortcuts.`,
    ],
    [
      `「存提款常见问题」是 TPOWER 资金问题的快速答案中心。它不取代存款指南或提款指南；它把急躁问题导向清楚答案，并在需要深度时路由到正确权威页。`,
      `当你需要快速理解状态含义、代存是否可以，或指向 FPX、DuitNow、钱包、网上银行、即时存款、快速提款时，用本页。每条答案保持 FAQ 意图——短、直接、可点。`,
      `机制请打开 [[/deposit-guide|存款指南]]、[[/withdrawal-guide|提款指南]]、[[/payment-methods|支付方式]]、[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]]、[[/online-banking|网上银行]]、[[/instant-deposit|即时存款]]、[[/fast-withdrawal|快速提款]]、[[/payment-security|支付安全]]。`,
      `始终在官方表面行动：[[/login|登录]]、[[/register|注册]]、[[/download|下载]]、收银台与 [[/contact|客服中心]]。附近保留 [[/promotions|优惠]]、[[/responsible-gaming|负责任博彩]]、[[/aml-kyc|AML与KYC]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]。`,
      `本中心以官方团队口吻回答存提款商业查询——冷静、具体、排斥非官方捷径——从而强化 EEAT。`,
    ],
  ),
  stats: [
    { vEn: "Q&A", vZh: "问答", lEn: "Rapid money answers, deep links out", lZh: "快速资金答案，链出深度页" },
    { vEn: "Both", vZh: "双向", lEn: "Deposits and withdrawals in one hub", lZh: "存款与提款同一中心" },
    { vEn: "Official", vZh: "官方", lEn: "No agent-account workarounds endorsed", lZh: "不背书代理账户变通" },
    { vEn: "24/7", vZh: "全天", lEn: "Support Center for case-specific help", lZh: "个案帮助走客服中心" },
  ],
  benefitsTitle: { en: "Why use the money FAQ hub", zh: "为何使用资金 FAQ 中心" },
  benefits: [
    feature("zap", "Faster orientation", "更快定向", "Get a clear answer, then open the matching deep guide.", "先得清楚答案，再打开对应深度指南。"),
    feature("eye", "Status literacy", "状态素养", "Learn what pending/processing/completed imply.", "了解待处理/处理中/已完成含义。"),
    feature("shield", "Scam resistance", "抗骗", "FAQ answers explicitly reject unofficial rails.", "FAQ 答案明确拒绝非官方通道。"),
    feature("building", "Method routing", "方式路由", "Jump to FPX, DuitNow, wallets, or banking pages quickly.", "快速跳到 FPX、DuitNow、钱包或银行页。"),
    feature("banknote", "Payout clarity", "出金清楚", "Understand delay causes without drama.", "不带戏剧地理解延迟原因。"),
    feature("check", "Cluster completeness", "集群完整", "Every answer points into the payment topic cluster.", "每个答案都指向支付主题集群。"),
  ],
  howToTitle: { en: "How to use this FAQ effectively", zh: "如何有效使用本 FAQ" },
  howToDescription: {
    en: "A short path from question to official action.",
    zh: "从问题到官方行动的短路径。",
  },
  howToSteps: [
    howTo("Find your question type", "找到问题类型", "Deposit pending, payout delay, method choice, or security doubt.", "存款待处理、出金延迟、方式选择或安全疑虑。"),
    howTo("Read the short answer", "阅读短答案", "Use the FAQ response as the official default posture.", "把 FAQ 回答当作官方默认姿态。"),
    howTo("Open the deep guide", "打开深度指南", "Follow the linked authority page for full process.", "跟随链接的权威页看完整流程。"),
    howTo("Act on official cashier", "在官方收银台行动", "Login and use listed rails only.", "登录并只用列出的通道。"),
    howTo("Collect evidence if stuck", "卡住则收集证据", "Time, amount, method, references.", "时间、金额、方式、参考号。"),
    howTo("Contact Support Center", "联系客服中心", "Escalate with structure — not secrets.", "结构化升级——不交机密。"),
  ],
  sections: [
    section(
      "Deposit questions this hub prioritises",
      "本中心优先的存款问题",
      `Pending after bank success, minimums, agent deposits, bonus method eligibility, and app vs web differences dominate real searches. Answers here stay short; Deposit Guide and method pages carry the essays.

If your issue is speed psychology, Instant Deposit is the specialised page. If your issue is a specific rail, open that rail’s guide instead of forcing everything into FAQ length.`,
      `银行成功后仍待处理、最低额、代存、红利方式资格、APP 与网页差异，主导真实搜索。这里的答案保持短；长文由存款指南与方式页承担。

若问题是速度心理，即时存款是专页。若问题是特定通道，打开该通道指南，而不是把一切塞进 FAQ 长度。`,
      "/images/payments/heroes/deposit-withdrawal-faq.webp",
      false,
    ),
    section(
      "Withdrawal questions this hub prioritises",
      "本中心优先的提款问题",
      `Delays, name mismatch, KYC prompts, bonus locks, and unlock-fee scams dominate payout anxiety. Withdrawal Guide and Fast Withdrawal own depth; FAQ owns triage.

Never treat a FAQ answer as permission to use unofficial cashout brokers.`,
      `延迟、姓名不符、KYC 提示、红利锁定与解锁费骗局主导出金焦虑。深度由提款指南与快速提款拥有；FAQ 拥有分诊。

切勿把 FAQ 答案当成使用非官方出金中介的许可。`,
      "/images/payments/heroes/withdrawal-guide.webp",
      true,
    ),
    section(
      "Security questions belong here too",
      "安全问题也属于这里",
      `Money FAQ without security is incomplete. Payment Security answers the threat patterns; this hub repeats the non-negotiables in FAQ form so searchers landing on Q&A still hear them.`,
      `没有安全的资金 FAQ 不完整。支付安全回答威胁模式；本中心以 FAQ 形式重复不可妥协规则，让落到问答的搜索者仍能听到。`,
      "/images/payments/heroes/payment-security.webp",
      false,
    ),
    section(
      "After the FAQ: full cluster navigation",
      "FAQ 之后：完整集群导航",
      `Payment Methods remains the map. Guides remain the textbooks. Support Center remains the human path. Responsible Gaming remains the budget path. Together they make TPOWER’s payment ecosystem an authority cluster, not twelve thin landings.`,
      `支付方式仍是地图。指南仍是课本。客服中心仍是人工路径。负责任博彩仍是预算路径。它们共同让 TPOWER 支付生态成为权威集群，而不是十二个单薄着陆页。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "From FAQ to resolved money action", zh: "从 FAQ 到已解决资金动作" },
  timeline: [
    timeline("Ask", "提问", "Match your symptom to a FAQ item.", "把症状匹配到 FAQ 条目。"),
    timeline("Learn", "学习", "Open the linked deep guide if needed.", "需要时打开链接的深度指南。"),
    timeline("Act", "行动", "Use official cashier or Support Center.", "使用官方收银台或客服中心。"),
    timeline("Confirm", "确认", "Verify status; keep evidence if unresolved.", "核对状态；未解决则保留证据。"),
  ],
  securityTitle: { en: "FAQ security reminders", zh: "FAQ 安全提醒" },
  securityItems: [
    trust("No agent deposits", "无代存", "Not supported; not safe.", "不受支持；不安全。"),
    trust("No unlock fees", "无解锁费", "Not official; report them.", "非官方；请举报。"),
    trust("No OTP sharing", "不分享 OTP", "Repeated because it saves accounts.", "重复强调，因为能救账户。"),
    trust("Official apps only", "仅官方 APP", "Download hub path only.", "只走下载中心路径。"),
    trust("Evidence for support", "客服要证据", "Time + amount + method.", "时间+金额+方式。"),
    trust("Budget still applies", "预算仍适用", "FAQ speed ≠ chase permission.", "FAQ 速度≠追损许可。"),
  ],
  faqTitle: { en: "Deposit & Withdrawal questions", zh: "存提款问题" },
  faqs: [
    faq("Why is my TPOWER deposit pending?", "为什么 TPower 存款待处理？", "Short reconciliation after bank/wallet success is common. If it persists, contact Support Center with time, amount, and method — don’t duplicate blindly.", "银行/钱包成功后的短对账常见。若持续，向客服提供时间、金额与方式——不要盲目重复。"),
    faq("How long do TPOWER withdrawals take?", "TPower 提款要多久？", "Depends on eligibility, reviews, and bank windows. Prepare matching details and KYC early; see Fast Withdrawal and Withdrawal Guide.", "取决于资格、复核与银行窗口。提早准备匹配资料与 KYC；见快速提款与提款指南。"),
    faq("Can I deposit via an agent?", "可以通过代理存款吗？", "No. Official deposits use the cashier rails on Payment Methods only.", "不可以。官方存款只用支付方式上的收银台通道。"),
    faq("What payment methods does TPOWER support?", "TPOWER 支持哪些支付方式？", "Live options appear in cashier; guides cover FPX, DuitNow, Touch 'n Go, GrabPay, and online banking families.", "现场选项在收银台；指南覆盖 FPX、DuitNow、Touch 'n Go、GrabPay 与网上银行家族。"),
    faq("Why can’t I withdraw my full balance?", "为什么不能提全额余额？", "Bonus locks or unfinished wagering may reduce withdrawable amounts. Check Promotions terms.", "红利锁定或未完成流水可能减少可提金额。查看优惠条款。"),
    faq("Do I need KYC for withdrawals?", "提款需要 KYC 吗？", "Often for first or larger payouts. Complete AML & KYC via official paths.", "首次或较大出金时常需要。经官方路径完成 AML 与 KYC。"),
    faq("Is someone asking for a withdrawal fee legitimate?", "有人要提款费合法吗？", "No. Report via Support Center and read Payment Security.", "不合法。通过客服中心举报并阅读支付安全。"),
    faq("Where are the full guides?", "完整指南在哪里？", "Deposit Guide, Withdrawal Guide, method pages, Instant Deposit, Fast Withdrawal, Payment Security, and Payment Methods hub.", "存款指南、提款指南、方式页、即时存款、快速提款、支付安全与支付方式中心。"),
  ],
  relatedTitle: { en: "Continue into the payment cluster", zh: "继续进入支付集群" },
  extraLinks: [],
  ctaTitle: { en: "Got your answer — take official action", zh: "已有答案—采取官方行动" },
  ctaDescription: {
    en: "Login to the cashier or contact Support Center with evidence. Keep using official TPOWER payment pages only.",
    zh: "登录收银台或带证据联系客服中心。只继续使用官方 TPOWER 支付页面。",
  },
});

console.log("rest2 done");
