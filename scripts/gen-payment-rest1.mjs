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

write("online-banking.ts", "paymentOnlineBanking", {
  id: "online-banking",
  path: "/online-banking",
  heroImage: "/images/payments/heroes/online-banking.webp",
  metaTitle: {
    en: "TPOWER Online Banking | Bank Transfer & IB Habits",
    zh: "TPower网上银行｜银行转账与网银习惯",
  },
  metaDescription: {
    en: "TPOWER Online Banking guide: internet banking habits, transfer references, maintenance windows, OTP discipline, and safer bank-funded deposits in Malaysia.",
    zh: "TPOWER线上博彩网上银行指南：网银习惯、转账参考号、维护窗口、OTP 纪律，以及更安全的大马银行入金。",
  },
  heroTitle: { en: "TPOWER Online Banking", zh: "TPOWER线上博彩 网上银行" },
  heroSubtitle: {
    en: "Bank-app discipline for players who fund TPOWER the way they pay serious bills.",
    zh: "像缴重要账单一样，用网银纪律为 TPOWER 入金。",
  },
  introduction: paras(
    [
      `TPOWER Online Banking is the authority page for internet-banking mindsets — not a duplicate of FPX checkout marketing and not a DuitNow twin. Online banking here means the broader habit set: logging into your bank safely, reading maintenance notices, copying references carefully, and refusing chat-based account numbers that pretend to be “manual IB deposits.”`,
      `FPX-specific checkout lives on [[/fpx-deposit|FPX Deposit]]. Real-time push culture lives on [[/duitnow-deposit|DuitNow Deposit]]. Wallets live on [[/touch-n-go|Touch 'n Go]] and [[/grabpay|GrabPay Payments]]. Shared deposit theory: [[/deposit-guide|Deposit Guide]]. Catalogue: [[/payment-methods|Payment Methods]].`,
      `Always begin from the official cashier after [[/login|Login]]. If the cashier shows bank details for a session, treat them as session-bound. Do not reuse yesterday’s screenshot from a group chat. That pattern fails [[/payment-security|Payment Security]].`,
      `OTP and secure-plus devices stay in your bank’s world. TPOWER will not ask you to forward SMS codes. [[/security|Platform Security]] explains why urgency around “IB unlock” is hostile.`,
      `Maintenance windows are normal. When your bank is offline, switch to a documented backup rail instead of unofficial agents. Timing expectations: [[/instant-deposit|Instant Deposit]]. Payouts later: [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]].`,
      `Budget with [[/responsible-gaming|Responsible Gaming]]. Confirm offers on [[/promotions|Promotions]]. Install only via [[/download|Download]]. Escalate via [[/contact|Support Center]] with bank name, time, amount, and reference. Keep [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/vip|VIP]], [[/register|Register]] in the journey.`,
    ],
    [
      `「TPOWER网上银行」是网银心态的权威页——不是 FPX 结账营销的复制，也不是 DuitNow 双胞胎。这里的网上银行指更广的习惯：安全登录银行、阅读维护通知、仔细复制参考号、拒绝伪装「手动网银存款」的聊天账号。`,
      `FPX 专属结账在 [[/fpx-deposit|FPX存款]]。实时推送文化在 [[/duitnow-deposit|DuitNow存款]]。钱包在 [[/touch-n-go|Touch 'n Go]] 与 [[/grabpay|GrabPay支付]]。共用存款理论：[[/deposit-guide|存款指南]]。目录：[[/payment-methods|支付方式]]。`,
      `请在 [[/login|登录]] 后从官方收银台开始。若收银台显示当次银行资料，视为会话绑定。不要复用群聊里昨天的截图。该模式通不过 [[/payment-security|支付安全]]。`,
      `OTP 与 secure-plus 设备留在银行世界。TPOWER 不会要你转发短信验证码。[[/security|平台安全]] 解释为何围绕「网银解锁」的紧迫感是敌意。`,
      `维护窗口正常。银行离线时，切换已说明备用通道，而不是非官方代理。时效预期：[[/instant-deposit|即时存款]]。日后提款：[[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]]。`,
      `用 [[/responsible-gaming|负责任博彩]] 预算。在 [[/promotions|优惠专区]] 确认活动。只经 [[/download|下载]] 安装。向 [[/contact|客服中心]] 升级时带银行名、时间、金额与参考号。旅程中保留 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]、[[/register|注册]]。`,
    ],
  ),
  stats: [
    { vEn: "IB", vZh: "网银", lEn: "Internet banking habit set", lZh: "网上银行习惯集" },
    { vEn: "Window", vZh: "窗口", lEn: "Respect bank maintenance reality", lZh: "尊重银行维护现实" },
    { vEn: "Ref", vZh: "参考", lEn: "Transfer references for support", lZh: "供客服用的转账参考号" },
    { vEn: "OTP", vZh: "OTP", lEn: "Codes never forwarded to agents", lZh: "验证码从不转发给客服" },
  ],
  benefitsTitle: { en: "Online banking strengths on TPOWER", zh: "TPOWER 网上银行的优势" },
  benefits: [
    feature("building", "Bank-grade familiarity", "银行级熟悉度", "You reuse the same careful posture as bill payments.", "复用与缴账单相同的谨慎姿态。"),
    feature("file", "Reference discipline", "参考号纪律", "Saved references make Support Center cases solvable.", "保存的参考号让客服个案可解。"),
    feature("lock", "OTP boundary", "OTP 边界", "Authentication stays inside your bank — not in casino chat.", "认证留在银行内——不在博彩聊天。"),
    feature("eye", "Maintenance awareness", "维护意识", "Knowing windows prevents panic switching to unofficial rails.", "了解窗口可避免恐慌切到非官方通道。"),
    feature("shield", "Session-bound details", "会话绑定资料", "Cashier instructions beat recycled group screenshots.", "收银台指示胜过回收的群截图。"),
    feature("check", "Identity continuity", "身份连续", "Banking from matching names helps later withdrawals.", "从匹配姓名的银行入金有助日后提款。"),
  ],
  howToTitle: { en: "How to fund via online banking on TPOWER", zh: "如何在 TPOWER 用网上银行入金" },
  howToDescription: {
    en: "A careful IB-oriented deposit sequence for Malaysia players.",
    zh: "面向大马玩家的谨慎网银入金步骤。",
  },
  howToSteps: [
    howTo("Login to TPOWER officially", "官方登录 TPOWER", "Use official domain or Download app — not search ads under pressure.", "使用官方域名或下载 APP——不要在压力下点搜索广告。"),
    howTo("Open cashier banking option", "打开收银台银行选项", "Select the online banking / bank transfer style option shown live.", "选择现场显示的网上银行/银行转账类选项。"),
    howTo("Copy session details carefully", "仔细复制会话资料", "Enter amounts and references exactly as cashier instructs for this attempt.", "金额与参考号严格按当次收银台指示。"),
    howTo("Approve inside your bank app", "在银行 APP 内批准", "Complete IB login and OTP on your bank surface only.", "只在银行表面完成网银登录与 OTP。"),
    howTo("Verify cashier credit", "核对收银台入账", "Confirm completed status before launching games.", "开游戏前确认完成状态。"),
    howTo("Support with bank references", "带银行参考号找客服", "If pending persists, contact Support Center with time, amount, bank, reference.", "若持续待处理，向客服提供时间、金额、银行、参考号。"),
  ],
  sections: [
    section(
      "Internet banking vs chat “manual deposit”",
      "网上银行 vs 聊天「手动存款」",
      `Real online banking on TPOWER is mediated by the cashier. Fake manual deposit is a person sending you an account number over chat. The first produces reconciliable signals; the second produces screenshots and arguments.

If someone says online banking is “down so use this personal Maybank/CIMB account,” treat it as hostile until Support Center confirms on official channels. Payment Methods will never list random personal accounts as rails.`,
      `TPOWER 上真正的网上银行由收银台中介。假手动存款是有人在聊天发账号。前者产生可对账信号；后者产生截图与争吵。

若有人说网上银行「挂了所以用这个私人 Maybank/CIMB 账户」，在客服中心于官方渠道确认前视为敌意。支付方式永远不会把随机私人账户列为通道。`,
      "/images/payments/heroes/online-banking.webp",
      false,
    ),
    section(
      "Maintenance, cut-offs, and calm switching",
      "维护、截点与冷静切换",
      `Banks publish maintenance. Players who read notices waste less money on failed attempts. When IB is unavailable, switch to DuitNow or an e-wallet you already documented — not to a stranger.

Cut-offs also affect how soon you see credit after unusual hours. Instant Deposit explains expectation framing without promising every 3 a.m. attempt is identical.`,
      `银行会公布维护。阅读通知的玩家更少把钱浪费在失败尝试上。网银不可用时，切换到你已记录的 DuitNow 或电子钱包——不是陌生人。

截点也影响非常规时段入账可见速度。即时存款解释预期框架，但不承诺每个凌晨 3 点尝试都一样。`,
      NEWS,
      true,
    ),
    section(
      "References, evidence, and withdrawals later",
      "参考号、证据与日后提款",
      `Save transfer references. They are the difference between a 10-minute support case and a day of ambiguity. Align banking identity with AML & KYC so Withdrawal Guide requests do not stall on name mismatch.

Online banking players often fund larger amounts. Larger patterns can trigger verification earlier — completing it calmly is part of banking maturity, not an insult.`,
      `保存转账参考号。它们决定客服个案是 10 分钟还是一天模糊。将银行身份与 AML 与 KYC 对齐，避免提款指南申请卡在姓名不符。

网银玩家常入金较大。较大模式可能更早触发核验——平静完成是银行成熟度的一部分，不是侮辱。`,
      "/images/payments/heroes/withdrawal-guide.webp",
      false,
    ),
    section(
      "Cluster position for TPOWER Banking intent",
      "TPower 银行意图的集群位置",
      `This page captures TPOWER Banking / online banking commercial intent. Cross-link to Payment Security for phishing, Deposit & Withdrawal FAQ for rapid answers, and Fast Withdrawal for payout speed talk after you finish playing.`,
      `本页承接 TPower 银行/网上银行商业意图。交叉链接支付安全谈钓鱼、存提款 FAQ 谈快速答案、快速提款谈玩完后的出金速度。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "Online banking deposit timeline", zh: "网上银行存款时间线" },
  timeline: [
    timeline("Prepare", "准备", "Check bank app health and your budget.", "检查银行 APP 健康与预算。"),
    timeline("Instruct", "指示", "Read live cashier banking instructions.", "阅读现场收银台银行指示。"),
    timeline("Transfer", "转账", "Complete IB approval with OTP in bank app.", "在银行 APP 用 OTP 完成网银批准。"),
    timeline("Reconcile", "对账", "Confirm cashier credit; save references if delayed.", "确认收银台入账；延迟则保存参考号。"),
  ],
  securityTitle: { en: "Online banking security checklist", zh: "网上银行安全清单" },
  securityItems: [
    trust("No forwarded OTP", "不转发 OTP", "SMS or token codes stay on your device.", "短信或令牌验证码留在你的设备。"),
    trust("No personal IB accounts", "无私人网银账户", "Chat account numbers are not online banking methods.", "聊天账号不是网上银行方式。"),
    trust("Bookmark official TPOWER", "收藏官方 TPOWER", "Avoid search-ad mirrors before banking.", "网银前避开搜索广告镜像。"),
    trust("One transfer attempt", "一次转账尝试", "Confirm debit status before repeating.", "重复前先确认扣款状态。"),
    trust("Trusted network", "可信网络", "Prefer controlled networks for large IB deposits.", "大额网银存款优先可控网络。"),
    trust("Support with bank refs", "带银行参考找客服", "References beat emotional urgency.", "参考号胜过情绪紧迫。"),
  ],
  faqTitle: { en: "Online Banking FAQ", zh: "网上银行常见问题" },
  faqs: [
    faq("What is TPOWER Online Banking?", "什么是 TPower 网上银行？", "It is funding via internet banking habits through the official cashier — not personal accounts shared in chat.", "经官方收银台用网银习惯入金——不是聊天分享的私人账户。"),
    faq("Is online banking the same as FPX?", "网上银行等于 FPX 吗？", "Related but not identical. FPX has a dedicated checkout guide; this page covers broader IB discipline and manual-style risks.", "相关但不完全相同。FPX 有专属结账指南；本页覆盖更广网银纪律与手动式风险。"),
    faq("What if my bank is under maintenance?", "若银行维护怎么办？", "Wait or switch to another documented rail such as DuitNow or an e-wallet — not an agent account.", "等待或切换到 DuitNow、电子钱包等已说明通道——不是代理账户。"),
    faq("Do I need a transfer reference?", "需要转账参考号吗？", "When the flow uses references, copy them exactly and save them for Support Center.", "当流程使用参考号时，精确复制并为客服保存。"),
    faq("Can support ask for my IB password?", "客服可以要网银密码吗？", "No. Official TPOWER never needs your bank login password.", "不可以。官方 TPOWER 从不需要你的银行登录密码。"),
    faq("How does this affect withdrawals?", "这对提款有何影响？", "Depositing from matching bank identity usually smooths later payouts on the Withdrawal Guide.", "从匹配银行身份存款通常让日后提款指南出金更顺。"),
    faq("Is online banking available on the app?", "APP 上有网上银行吗？", "When listed in the app cashier, yes — same official rules as web.", "当 APP 收银台列出时有——与网页同一官方规则。"),
    faq("Where else should I read?", "还应读哪些？", "Payment Methods, Payment Security, Deposit Guide, and Deposit & Withdrawal FAQ.", "支付方式、支付安全、存款指南与存提款常见问题。"),
  ],
  relatedTitle: { en: "Related banking guides", zh: "相关银行指南" },
  extraLinks: [],
  ctaTitle: { en: "Bank carefully on official TPOWER", zh: "在官方 TPOWER 谨慎网银入金" },
  ctaDescription: {
    en: "Login, follow live cashier banking instructions, and keep OTP inside your bank app.",
    zh: "登录，遵循现场收银台银行指示，并把 OTP 留在银行 APP 内。",
  },
});

write("instant-deposit.ts", "paymentInstantDeposit", {
  id: "instant-deposit",
  path: "/instant-deposit",
  heroImage: "/images/payments/heroes/instant-deposit.webp",
  metaTitle: {
    en: "TPOWER Instant Deposit | Speed Expectations & Habits",
    zh: "TPower即时存款｜速度预期与习惯",
  },
  metaDescription: {
    en: "TPOWER Instant Deposit guide: what “instant” means in practice, rail choice for speed, pending windows, and how to avoid duplicate panic top-ups.",
    zh: "TPOWER线上博彩即时存款指南：「即时」实务含义、为速度选通道、待处理窗口，以及如何避免重复恐慌充值。",
  },
  heroTitle: { en: "TPOWER Instant Deposit", zh: "TPOWER线上博彩 即时存款" },
  heroSubtitle: {
    en: "Honest speed: how to aim for fast credit without treating every bank night as identical.",
    zh: "诚实的速度：如何追求快速入账，而不把每个银行夜晚当成完全一样。",
  },
  introduction: paras(
    [
      `TPOWER Instant Deposit is about timing expectations — not a secret rail that bypasses banking. “Instant” in Malaysia consumer language usually means “fast after provider success.” It does not mean “immune to maintenance, OTP failure, or reconciliation windows.”`,
      `This page owns speed intent. Method mechanics stay on [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], and [[/online-banking|Online Banking]]. Process fundamentals stay on the [[/deposit-guide|Deposit Guide]]. The map stays on [[/payment-methods|Payment Methods]].`,
      `To aim for speed: use a healthy provider app, stable network, correct amount first try, and a rail you already control. Avoid switching mid-OTP. Avoid parallel duplicate deposits while pending — that is the opposite of instant, because support must untangle two signals.`,
      `When bank success and cashier pending diverge, wait a short window, then use [[/contact|Support Center]] with evidence. Do not invent unofficial “priority credit” payments. That fails [[/payment-security|Payment Security]].`,
      `Speed without budget is still a bad session. Pair with [[/responsible-gaming|Responsible Gaming]]. Bonus impatience is not a reason to ignore [[/promotions|Promotions]] terms. App path: [[/download|Download]]. Payout counterpart mindset: [[/fast-withdrawal|Fast Withdrawal]].`,
      `Keep [[/login|Login]], [[/register|Register]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/aml-kyc|AML & KYC]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]] linked for a complete journey.`,
    ],
    [
      `「TPOWER即时存款」讲时效预期——不是绕过银行的秘密通道。大马消费语境里的「即时」通常指「提供方成功后很快」。它不表示「免疫维护、OTP 失败或对账窗口」。`,
      `本页拥有速度意图。通道机制在 [[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]]、[[/online-banking|网上银行]]。流程基础在 [[/deposit-guide|存款指南]]。地图在 [[/payment-methods|支付方式]]。`,
      `追求速度：使用健康的提供方 APP、稳定网络、第一次就输对金额、选择你已控制的通道。避免 OTP 中途切换。避免待处理时平行重复存款——那与即时相反，因为客服必须拆两信号。`,
      `当银行成功与收银台待处理不一致，先等短窗口，再带证据找 [[/contact|客服中心]]。不要发明非官方「优先入账」付款。那通不过 [[/payment-security|支付安全]]。`,
      `没有预算的速度仍是坏场次。搭配 [[/responsible-gaming|负责任博彩]]。红利急躁不是忽略 [[/promotions|优惠专区]] 条款的理由。APP 路径：[[/download|下载]]。出金对应心态：[[/fast-withdrawal|快速提款]]。`,
      `保留 [[/login|登录]]、[[/register|注册]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/aml-kyc|AML与KYC]]、[[/deposit-withdrawal-faq|存提款常见问题]] 以构成完整旅程。`,
    ],
  ),
  stats: [
    { vEn: "Fast", vZh: "快", lEn: "After provider success on healthy rails", lZh: "健康通道上提供方成功之后" },
    { vEn: "1x", vZh: "1次", lEn: "One clean attempt beats duplicates", lZh: "一笔干净尝试胜过重复" },
    { vEn: "Net", vZh: "网络", lEn: "Stable connection through OTP", lZh: "OTP 期间保持稳定连接" },
    { vEn: "Honest", vZh: "诚实", lEn: "Speed targets ≠ zero bank queues", lZh: "速度目标≠零银行队列" },
  ],
  benefitsTitle: { en: "Habits that actually make deposits faster", zh: "真正让存款更快的习惯" },
  benefits: [
    feature("zap", "Familiar rail first", "先用熟悉通道", "The rail you can finish beats an unfamiliar “faster” rumour.", "你能完成的通道胜过陌生的「更快」谣言。"),
    feature("check", "Correct amount once", "一次输对金额", "Typos force restarts that destroy speed.", "打错字导致重开，摧毁速度。"),
    feature("globe", "Stable connectivity", "稳定连接", "Dropped OTP sessions feel like lost money when nothing debited.", "OTP 中断在未扣款时仍像钱丢了。"),
    feature("eye", "Status literacy", "状态素养", "Knowing pending vs completed stops panic duplicates.", "分清待处理与已完成可停止恐慌重复。"),
    feature("shield", "Official only", "仅官方", "Chat priority credit is slow and unsafe.", "聊天优先入账又慢又不安全。"),
    feature("wallet", "Pre-check balances", "预查余额", "Wallet/bank funds ready before cashier start.", "启动收银台前准备好钱包/银行资金。"),
  ],
  howToTitle: { en: "How to aim for instant-style credit", zh: "如何追求即时风格入账" },
  howToDescription: {
    en: "A speed-oriented checklist that still respects banking reality.",
    zh: "仍尊重银行现实的速度导向清单。",
  },
  howToSteps: [
    howTo("Preflight provider apps", "预检提供方 APP", "Update bank/wallet apps and confirm balances before opening cashier.", "打开收银台前更新银行/钱包 APP 并确认余额。"),
    howTo("Pick a known rail", "选择已知通道", "Choose FPX, DuitNow, or wallet you successfully used before.", "选择你曾成功使用的 FPX、DuitNow 或钱包。"),
    howTo("Submit one clean amount", "提交一笔干净金额", "Enter budgeted amount carefully; avoid editing mid-flow casually.", "仔细输入预算金额；避免随意中途改数。"),
    howTo("Stay through confirmation", "确认期间留下", "Do not background the app during OTP unless you intend to cancel.", "除非打算取消，OTP 期间不要把 APP 切到后台。"),
    howTo("Wait briefly on pending", "待处理时稍等", "Allow a short reconciliation window before retrying.", "重试前允许短对账窗口。"),
    howTo("Escalate once with evidence", "带证据升级一次", "Contact Support Center with time, amount, method — not five duplicates.", "向客服中心提供时间、金额、方式——不是五笔重复。"),
  ],
  sections: [
    section(
      "What instant does and does not mean",
      "即时意味着什么、不意味着什么",
      `Instant Deposit marketing elsewhere often overpromises. TPOWER’s stance is operational honesty: many Malaysia rails credit quickly after success signals, and players should prepare for the nights when they do not.

Instant is also a player skill. Prepared balances, familiar rails, and single attempts outperform frantic switching across four methods in four minutes.`,
      `别处的即时存款营销常过度承诺。TPOWER 的立场是运营诚实：许多大马通道在成功信号后快速入账，玩家也应为不如此的夜晚做准备。

即时也是玩家技能。准备好的余额、熟悉通道与单次尝试，胜过四分钟内慌乱切换四种方式。`,
      "/images/payments/heroes/instant-deposit.webp",
      false,
    ),
    section(
      "Duplicate deposits: the speed killer",
      "重复存款：速度杀手",
      `The most common anti-pattern is depositing again while the first is pending because a friend said “just send once more.” That creates two bank signals and one confused cashier state.

If you must retry, confirm no debit occurred, or wait for support guidance. Deposit Guide and Payment Security both warn against panic doubles for good reason.`,
      `最常见反模式是第一笔仍待处理时再存一次，因为朋友说「再发一次就好」。这会造成两个银行信号与一个混乱收银台状态。

若必须重试，先确认无扣款，或等待客服指引。存款指南与支付安全都有理由警告恐慌双存。`,
      NEWS,
      true,
    ),
    section(
      "Choosing rails when you care about speed",
      "在意速度时如何选通道",
      `Use the Payment Methods hub to compare. On a given night, the fastest rail is the healthy one. A “slow” familiar wallet can beat a “fast” bank under maintenance.

Instant Deposit does not replace method pages; it teaches you to pick and finish.`,
      `用支付方式中心比较。某个夜晚，最快的通道是健康的那条。「慢」但熟悉的钱包，可以胜过维护中的「快」银行。

即时存款不取代方式专页；它教你选择并完成。`,
      "/images/payments/heroes/payment-methods.webp",
      false,
    ),
    section(
      "After fast credit: play and cash out with intention",
      "快速入账之后：有意识地玩与出金",
      `Fast deposits should not automatically become fast chase. Responsible Gaming tools still apply. When ending, Fast Withdrawal and Withdrawal Guide cover the outbound timing story.`,
      `快速存款不应自动变成快速追损。负责任博彩工具仍适用。结束时，快速提款与提款指南覆盖出金时效故事。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "Instant-oriented deposit timeline", zh: "即时导向存款时间线" },
  timeline: [
    timeline("Preflight", "预检", "Apps healthy, balance ready, budget set.", "APP 健康、余额就绪、预算设定。"),
    timeline("Single submit", "单次提交", "One cashier attempt on a known rail.", "在已知通道上一次收银台尝试。"),
    timeline("Confirm", "确认", "Finish provider OTP without interruption.", "不中断地完成提供方 OTP。"),
    timeline("Verify", "核对", "Cashier completed — then play.", "收银台完成—再游玩。"),
  ],
  securityTitle: { en: "Instant deposit security checklist", zh: "即时存款安全清单" },
  securityItems: [
    trust("No priority personal fees", "无优先私人费用", "Speed never requires paying a stranger.", "速度从不需要付钱给陌生人。"),
    trust("No parallel pending deposits", "无平行待处理存款", "One in-flight deposit at a time.", "同一时间只有一笔进行中存款。"),
    trust("Official cashier start", "官方收银台启动", "Message links claiming faster instant rails are suspect.", "声称更快即时通道的消息链接可疑。"),
    trust("Evidence over rumour", "证据优于谣言", "Support needs timestamps, not group chat myths.", "客服需要时间戳，不是群聊神话。"),
    trust("OTP privacy", "OTP 隐私", "Never share codes to “speed up credit.”", "绝不分享验证码以「加速入账」。"),
    trust("Budget lock", "预算锁定", "Instant funding still obeys session limits.", "即时入金仍服从场次限额。"),
  ],
  faqTitle: { en: "Instant Deposit FAQ", zh: "即时存款常见问题" },
  faqs: [
    faq("Is TPOWER Instant Deposit a separate payment method?", "TPower 即时存款是单独支付方式吗？", "No. It is a speed-expectation guide that sits above rails like FPX, DuitNow, and e-wallets.", "不是。它是位于 FPX、DuitNow、电子钱包等通道之上的速度预期指南。"),
    faq("Why wasn’t my deposit instant?", "为什么我的存款不是即时？", "Provider queues, maintenance, network drops, OTP failure, or short reconciliation windows can add time.", "提供方队列、维护、网络中断、OTP 失败或短对账窗口都可能增加时间。"),
    faq("Should I deposit twice to force instant credit?", "应存两次逼即时入账吗？", "No. Duplicates create harder support cases and can slow you down.", "不应。重复会造成更难的客服个案并拖慢你。"),
    faq("Which rail is fastest?", "哪条通道最快？", "The healthy familiar rail tonight. Compare options on Payment Methods.", "今晚健康且熟悉的那条。在支付方式比较选项。"),
    faq("Does instant deposit skip KYC?", "即时存款能跳过 KYC 吗？", "No. Verification rules still apply when required for risk or payouts.", "不能。需要风控或提款时核验规则仍适用。"),
    faq("Can promotions promise instant credit?", "优惠能承诺即时入账吗？", "Offers may have deposit rules, but banking reality still applies. Read Promotions terms.", "活动可能有存款规则，但银行现实仍适用。请读优惠条款。"),
    faq("How do I get help on a slow deposit?", "存款变慢如何求助？", "Contact Support Center with time, amount, and method after a short wait.", "短等待后向客服中心提供时间、金额与方式。"),
    faq("What is the payout counterpart page?", "出金对应页是什么？", "Fast Withdrawal, plus the Withdrawal Guide for process depth.", "快速提款，加上提款指南的流程深度。"),
  ],
  relatedTitle: { en: "Related speed & funding pages", zh: "相关速度与入金页面" },
  extraLinks: [],
  ctaTitle: { en: "Fund fast — stay official", zh: "快速入金—保持官方" },
  ctaDescription: {
    en: "Login, use one clean attempt on a familiar Malaysia rail, and verify cashier credit before you play.",
    zh: "登录，在熟悉的大马通道上干净尝试一次，开玩前核对收银台入账。",
  },
});

console.log("batch online+instant done");
