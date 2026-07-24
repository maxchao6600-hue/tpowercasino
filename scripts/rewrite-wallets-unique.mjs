import fs from "node:fs";
import path from "node:path";
import {
  renderPage,
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
} from "./lib/payment-page-factory.mjs";

const dir = path.join(process.cwd(), "src/data/payments-center");
const CTA = "/images/cta/tpower-join-cta.webp";
const NEWS = "/images/news/tpower-duitnow-ewallet-tips.webp";

function write(file, exportName, data) {
  fs.writeFileSync(path.join(dir, file), renderPage(exportName, data));
  console.log("rewrote", file);
}
function P(en, zh) {
  return { en: en.join("\n\n"), zh: zh.join("\n\n") };
}

write("touch-n-go.ts", "paymentTouchNGo", {
  id: "touch-n-go",
  path: "/touch-n-go",
  heroImage: "/images/payments/heroes/touch-n-go.webp",
  metaTitle: {
    en: "TPOWER Touch 'n Go eWallet | Mobile Deposit Guide",
    zh: "TPower Touch 'n Go电子钱包｜手机存款指南",
  },
  metaDescription: {
    en: "Official TPOWER Touch 'n Go guide: wallet balance checks, mobile confirmation, PIN hygiene, cashier flow, and safer TnG deposits for Malaysia players.",
    zh: "TPOWER线上博彩官方 Touch 'n Go 指南：钱包余额检查、手机确认、PIN 卫生、收银台流程与更安全的大马 TnG 存款。",
  },
  heroTitle: {
    en: "TPOWER Touch 'n Go eWallet",
    zh: "TPOWER线上博彩 Touch 'n Go电子钱包",
  },
  heroSubtitle: {
    en: "Wallet-native funding for players who already keep MYR in TnG.",
    zh: "已把马币放在 TnG 的玩家的钱包原生入金。",
  },
  introduction: P(
    [
      `Touch 'n Go on TPOWER is a wallet-native story. Commuters, parking regulars, and mobile-first adults already trust TnG for daily spend. This guide explains how that trust should transfer into the official cashier — without rewriting GrabPay’s balance narrative or FPX’s bank checkout narrative.`,
      `GrabPay depth: [[/grabpay|GrabPay Payments]]. Banking depth: [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/online-banking|Online Banking]]. Shared deposit logic: [[/deposit-guide|Deposit Guide]]. Map: [[/payment-methods|Payment Methods]].`,
      `Before you tap TnG in cashier, open the Touch 'n Go app and confirm balance. Mid-flow insufficient balance is the most common “my money vanished” illusion when nothing actually left the wallet.`,
      `PIN and biometric approvals stay inside TnG. [[/contact|Support Center]] will not ask for your wallet PIN. Anyone who does is running a [[/payment-security|Payment Security]] incident, not a deposit.`,
      `Mobile networks drop. If confirmation dies mid-way, check TnG transaction history before starting a second deposit. Parallel wallet attempts create support noise. Timing mindset: [[/instant-deposit|Instant Deposit]].`,
      `Install TPOWER only via [[/download|Download]]. Mirrored APKs that overlay a fake TnG cashier are account-takeover tools. Pair with [[/security|Platform Security]].`,
      `Budget with [[/responsible-gaming|Responsible Gaming]]. Check [[/promotions|Promotions]] for wallet eligibility. Prepare payouts with [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]]. Keep [[/login|Login]], [[/register|Register]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]] linked.`,
      `TnG authority is tactile: balance first, official cashier second, wallet approval third, cashier credit fourth. Skip any step and the night gets noisy.`,
      `Refuse “TnG reload agents” who ask you to transfer to their wallet so they can “credit TPOWER.” That is not Touch 'n Go on TPOWER; that is a proxy risk.`,
    ],
    [
      `TPOWER 上的 Touch 'n Go 是钱包原生故事。通勤者、常停车的人、手机优先成年人已信任 TnG 日常消费。本指南说明该信任应如何转入官方收银台——不重写 GrabPay 余额叙事或 FPX 银行结账叙事。`,
      `GrabPay 深度：[[/grabpay|GrabPay支付]]。银行深度：[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/online-banking|网上银行]]。共用存款逻辑：[[/deposit-guide|存款指南]]。地图：[[/payment-methods|支付方式]]。`,
      `在收银台点 TnG 前，打开 Touch 'n Go APP 确认余额。流程中余额不足，是最常见的「钱消失了」错觉——其实钱包并未扣款。`,
      `PIN 与生物识别批准留在 TnG 内。[[/contact|客服中心]] 不会要钱包 PIN。任何人索要都是 [[/payment-security|支付安全]] 事故，不是存款。`,
      `移动网络会断。若确认中途死亡，开第二笔前先查 TnG 交易历史。平行钱包尝试制造客服噪音。时效心态：[[/instant-deposit|即时存款]]。`,
      `TPOWER 只经 [[/download|下载]] 安装。覆盖假 TnG 收银台的镜像 APK 是盗号工具。搭配 [[/security|平台安全]]。`,
      `用 [[/responsible-gaming|负责任博彩]] 预算。查 [[/promotions|优惠专区]] 钱包资格。用 [[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]] 准备出金。保留 [[/login|登录]]、[[/register|注册]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]。`,
      `TnG 权威是触觉性的：先余额、再官方收银台、再钱包批准、再收银台入账。跳过任一步，夜晚就会吵。`,
      `拒绝要你转到他们钱包再「帮你入 TPOWER」的「TnG 代充」。那不是 TPOWER 上的 Touch 'n Go；那是代理风险。`,
    ],
  ),
  stats: [
    { vEn: "Balance", vZh: "余额", lEn: "Check TnG funds before cashier", lZh: "收银台前检查 TnG 资金" },
    { vEn: "PIN", vZh: "PIN", lEn: "Wallet secrets never enter chat", lZh: "钱包机密从不进入聊天" },
    { vEn: "Mobile", vZh: "手机", lEn: "Stable data through confirmation", lZh: "确认期间稳定数据" },
    { vEn: "History", vZh: "历史", lEn: "Read TnG history before retry", lZh: "重试前阅读 TnG 历史" },
  ],
  benefitsTitle: { en: "Why Touch 'n Go works on TPOWER nights", zh: "为何 Touch 'n Go 适合 TPOWER 夜晚" },
  benefits: [
    feature("wallet", "Phone-first funding", "手机优先入金", "No laptop required when TnG already holds your balance.", "TnG 已有余额时无需笔记本。"),
    feature("zap", "Quick confirmation UX", "快速确认体验", "Familiar wallet approvals shorten the path to credit.", "熟悉的钱包批准缩短入账路径。"),
    feature("shield", "Clear anti-proxy rules", "清楚的反代理规则", "Official TnG never means paying a stranger’s wallet first.", "官方 TnG 从不意味着先付陌生人钱包。"),
    feature("eye", "Transaction history truth", "交易历史真相", "TnG history settles “did it debit?” arguments quickly.", "TnG 历史快速结算「是否扣款」争论。"),
    feature("lock", "PIN boundary", "PIN 边界", "Approvals stay in Touch 'n Go — not in casino DMs.", "批准留在 Touch 'n Go——不在博彩私信。"),
    feature("check", "Supportable labels", "可支持标签", "Saying “Touch 'n Go” + time + amount helps Support Center.", "说明「Touch 'n Go」+时间+金额帮助客服中心。"),
  ],
  howToTitle: { en: "How to deposit with Touch 'n Go on TPOWER", zh: "如何在 TPOWER 用 Touch 'n Go 存款" },
  howToDescription: {
    en: "Wallet-first steps emphasising balance checks and PIN privacy.",
    zh: "强调余额检查与 PIN 隐私的钱包优先步骤。",
  },
  howToSteps: [
    howTo("Confirm TnG balance", "确认 TnG 余额", "Top up TnG via official Touch 'n Go channels if needed.", "若需要，经 Touch 'n Go 官方渠道充值。"),
    howTo("Login to official TPOWER", "登录官方 TPOWER", "Web or Download app — not mirrored packages.", "网页或下载 APP——不是镜像包。"),
    howTo("Select Touch 'n Go in cashier", "在收银台选择 Touch 'n Go", "Only when listed for your session.", "仅当会话列出时。"),
    howTo("Approve inside TnG", "在 TnG 内批准", "Use PIN/biometric in the wallet app only.", "只在钱包 APP 使用 PIN/生物识别。"),
    howTo("Verify cashier credit", "核对收银台入账", "Confirm completed before opening games.", "开游戏前确认完成。"),
    howTo("Escalate with wallet context", "带钱包语境升级", "If stuck, send time, amount, and Touch 'n Go label to Support Center.", "若卡住，向客服发送时间、金额与 Touch 'n Go 标签。"),
  ],
  sections: [
    section(
      "Balance-first discipline unique to wallets",
      "钱包特有的余额优先纪律",
      `Bank rails often fail on maintenance. Wallet rails often fail on empty balances. Checking TnG before cashier prevents the most common false emergency.

If you must reload TnG, reload inside Touch 'n Go’s own ecosystem — not via a casino chat agent offering “TnG credit packages.”`,
      `银行通道常因维护失败。钱包通道常因余额空失败。收银台前检查 TnG 可防止最常见的假紧急。

若必须给 TnG 充值，在 Touch 'n Go 自己的生态内充——不是经博彩聊天代理推销「TnG 入账套餐」。`,
      "/images/payments/heroes/touch-n-go.webp",
      false,
    ),
    section(
      "Dropped mobile confirmations",
      "中断的手机确认",
      `LRT tunnels and parking basements kill wallet confirmations. When that happens, open TnG history. Debited? Wait for cashier. Not debited? Restart one clean attempt.

Instant Deposit covers the urge to mash retry. This page covers the wallet evidence that makes retry safe.`,
      `LRT 隧道与停车场地库会杀死钱包确认。发生时打开 TnG 历史。已扣款？等收银台。未扣款？重开一笔干净尝试。

即时存款覆盖狂按重试的冲动。本页覆盖让重试变安全的钱包证据。`,
      NEWS,
      true,
    ),
    section(
      "TnG vs GrabPay — why separate pages exist",
      "TnG vs GrabPay——为何分专页",
      `Both are e-wallets; both are not interchangeable essays. TnG habits around parking and transit differ from GrabPay habits around rides and food. Separate authority pages prevent thin duplicate landings and help search intent land correctly.`,
      `两者都是电子钱包；两者不是可互换散文。TnG 围绕停车与通勤的习惯，不同于 GrabPay 围绕出行与餐饮的习惯。分开权威页防止单薄重复着陆，并帮助搜索意图正确落地。`,
      "/images/payments/heroes/grabpay.webp",
      false,
    ),
    section(
      "After TnG credit",
      "TnG 入账之后",
      `Play within budget. If depositing for promotions, confirm wallet eligibility. For cashouts later, keep identity consistent. Payment Security remains the threat page whenever someone invents a TnG shortcut.`,
      `按预算游玩。为优惠存款时确认钱包资格。日后提款保持身份一致。每当有人发明 TnG 捷径，支付安全仍是威胁专页。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "Touch 'n Go deposit timeline", zh: "Touch 'n Go 存款时间线" },
  timeline: [
    timeline("Balance", "余额", "Confirm TnG funds.", "确认 TnG 资金。"),
    timeline("Cashier", "收银台", "Select Touch 'n Go officially.", "官方选择 Touch 'n Go。"),
    timeline("Approve", "批准", "PIN/biometric inside TnG.", "在 TnG 内 PIN/生物识别。"),
    timeline("Credit", "入账", "Cashier completed — then play.", "收银台完成—再游玩。"),
  ],
  securityTitle: { en: "Touch 'n Go security checklist", zh: "Touch 'n Go 安全清单" },
  securityItems: [
    trust("No wallet PIN sharing", "不分享钱包 PIN", "Ever — including “VIP hosts.”", "永远——包括「VIP 接待」。"),
    trust("No reload agents", "无代充", "Top up TnG via official wallet channels only.", "只经官方钱包渠道给 TnG 充值。"),
    trust("Official TPOWER app only", "仅官方 TPOWER APP", "Download hub path — reject mirrored APKs.", "下载中心路径—拒绝镜像 APK。"),
    trust("History before retry", "重试前看历史", "Prevent duplicate wallet debits.", "防止重复钱包扣款。"),
    trust("Stable signal", "稳定信号", "Start TnG deposits where data holds.", "在数据稳定处开始 TnG 存款。"),
    trust("Support with labels", "带标签找客服", "Method name Touch 'n Go + time + amount.", "方式名 Touch 'n Go +时间+金额。"),
  ],
  faqTitle: { en: "Touch 'n Go FAQ", zh: "Touch 'n Go 常见问题" },
  faqs: [
    faq("How do I deposit with Touch 'n Go on TPOWER?", "如何在 TPOWER 用 Touch 'n Go 存款？", "Confirm TnG balance, login officially, select Touch 'n Go in cashier, approve in TnG, verify credit.", "确认 TnG 余额，官方登录，收银台选择 Touch 'n Go，在 TnG 批准，核对入账。"),
    faq("Why did my TnG deposit fail?", "为什么 TnG 存款失败？", "Insufficient balance, network drop, cancelled approval, or temporary unavailability. Check TnG history before retrying.", "余额不足、网络中断、取消批准或暂时不可用。重试前查 TnG 历史。"),
    faq("Can I pay a person’s TnG for TPOWER credit?", "可以付到某人的 TnG 换 TPOWER 入账吗？", "No. Official credit starts in the TPOWER cashier only.", "不可以。官方入账只从 TPOWER 收银台开始。"),
    faq("Is Touch 'n Go the same as GrabPay on TPOWER?", "TPOWER 上 Touch 'n Go 等于 GrabPay 吗？", "No. Separate guides exist because habits and failure modes differ.", "不等于。因习惯与失败模式不同而分专页。"),
    faq("Does TnG work in the TPOWER app?", "TPOWER APP 上 TnG 可用吗？", "When listed in the app cashier — install only via Download.", "当 APP 收银台列出时——只经下载安装。"),
    faq("Are promotions eligible with TnG?", "用 TnG 能参加优惠吗？", "Sometimes. Confirm on Promotions before depositing for an offer.", "有时可以。为活动存款前在优惠专区确认。"),
    faq("What if cashier is pending after TnG success?", "TnG 成功后收银台待处理怎么办？", "Wait briefly, then contact Support Center with time, amount, and Touch 'n Go as method.", "稍等，再向客服提供时间、金额，并说明方式为 Touch 'n Go。"),
    faq("Where next?", "下一步？", "Payment Methods, Deposit Guide, GrabPay page, Payment Security.", "支付方式、存款指南、GrabPay 页、支付安全。"),
  ],
  relatedTitle: { en: "Related wallet & payment pages", zh: "相关钱包与支付页面" },
  extraLinks: [],
  ctaTitle: { en: "Fund with Touch 'n Go officially", zh: "用官方 Touch 'n Go 入金" },
  ctaDescription: {
    en: "Check balance, login, approve inside TnG, and verify cashier credit before you play.",
    zh: "检查余额、登录、在 TnG 内批准，开玩前核对收银台入账。",
  },
});

write("grabpay.ts", "paymentGrabPay", {
  id: "grabpay",
  path: "/grabpay",
  heroImage: "/images/payments/heroes/grabpay.webp",
  metaTitle: {
    en: "TPOWER GrabPay Payments | E-Wallet Deposit Guide",
    zh: "TPower GrabPay支付｜电子钱包存款指南",
  },
  metaDescription: {
    en: "Official TPOWER GrabPay Payments guide: balance-funded deposits, Grab confirmation flow, anti-proxy habits, and safer GrabPay funding for Malaysia players.",
    zh: "TPOWER线上博彩官方 GrabPay 支付指南：余额入金、Grab 确认流程、反代理习惯，以及大马玩家更安全的 GrabPay 入金。",
  },
  heroTitle: { en: "TPOWER GrabPay Payments", zh: "TPOWER线上博彩 GrabPay支付" },
  heroSubtitle: {
    en: "Use the GrabPay balance you already spend on rides and food — on official TPOWER rails only.",
    zh: "用你已在出行与餐饮花费的 GrabPay 余额——仅限官方 TPOWER 通道。",
  },
  introduction: P(
    [
      `TPOWER GrabPay Payments targets players whose liquid MYR already sits in GrabPay. The mental model is balance-funded entertainment top-ups after a normal day of Grab use — not a clone of Touch 'n Go parking culture and not a bank checkout lecture.`,
      `TnG guide: [[/touch-n-go|Touch 'n Go]]. Banking guides: [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/online-banking|Online Banking]]. Deposit theory: [[/deposit-guide|Deposit Guide]]. Hub: [[/payment-methods|Payment Methods]].`,
      `Open Grab and confirm GrabPay balance before cashier. If balance is short, reload inside Grab’s own channels. “GrabPay agent reload for casino” chats are proxies, not methods — see [[/payment-security|Payment Security]].`,
      `Complete confirmation inside Grab’s flow after selecting GrabPay in the official cashier ([[/login|Login]] / [[/download|Download]]). Never send GrabPay to a personal phone number that claims to be TPOWER finance.`,
      `If Grab shows success and cashier pending, wait a short window, then escalate to [[/contact|Support Center]] with time and amount. Do not double-pay. Timing frame: [[/instant-deposit|Instant Deposit]].`,
      `Responsible spend still applies ([[/responsible-gaming|Responsible Gaming]]). Bonus eligibility: [[/promotions|Promotions]]. Payouts: [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]]. Cluster: [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/register|Register]].`,
      `GrabPay authority on TPOWER is lifestyle continuity: the same wallet, a different official merchant surface, zero personal intermediaries.`,
      `Riders who tip in GrabPay already understand balance discipline. Bring that discipline to deposits and you avoid most false emergencies.`,
      `When GrabPay is missing from cashier, ask Support Center — do not accept a personal GrabPay number as a substitute rail.`,
    ],
    [
      `「TPOWER GrabPay支付」面向流动马币已在 GrabPay 的玩家。心智模型是平常使用 Grab 之后的余额娱乐充值——不是 Touch 'n Go 停车文化的克隆，也不是银行结账讲义。`,
      `TnG 指南：[[/touch-n-go|Touch 'n Go]]。银行指南：[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/online-banking|网上银行]]。存款理论：[[/deposit-guide|存款指南]]。中心：[[/payment-methods|支付方式]]。`,
      `收银台前打开 Grab 确认 GrabPay 余额。若不足，在 Grab 自己的渠道充值。「赌场 GrabPay 代充」聊天是代理，不是方式——见 [[/payment-security|支付安全]]。`,
      `在官方收银台选择 GrabPay 后（[[/login|登录]] / [[/download|下载]]），在 Grab 流程内完成确认。切勿向声称是 TPOWER 财务的私人手机号发送 GrabPay。`,
      `若 Grab 显示成功而收银台待处理，先等短窗口，再向 [[/contact|客服中心]] 提供时间与金额升级。不要双付。时效框架：[[/instant-deposit|即时存款]]。`,
      `负责任花费仍适用（[[/responsible-gaming|负责任博彩]]）。红利资格：[[/promotions|优惠专区]]。出金：[[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]]。集群：[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/register|注册]]。`,
      `TPOWER 上的 GrabPay 权威是生活连续：同一个钱包、不同的官方商户表面、零私人中介。`,
      `已在 GrabPay 给小费的骑手已懂余额纪律。把纪律带到存款，就能避开多数假紧急。`,
      `当收银台缺少 GrabPay，问客服中心——不要接受私人 GrabPay 号码作为替代通道。`,
    ],
  ),
  stats: [
    { vEn: "Balance", vZh: "余额", lEn: "GrabPay funds checked before start", lZh: "开始前检查 GrabPay 资金" },
    { vEn: "Grab UI", vZh: "Grab界面", lEn: "Confirmations finish inside Grab", lZh: "确认在 Grab 内完成" },
    { vEn: "No DM", vZh: "无私信", lEn: "Never pay personal GrabPay numbers", lZh: "绝不付到私人 GrabPay 号" },
    { vEn: "Verify", vZh: "核对", lEn: "Cashier credit before play", lZh: "开玩前收银台入账" },
  ],
  benefitsTitle: { en: "Why GrabPay fits TPOWER players", zh: "为何 GrabPay 适合 TPOWER 玩家" },
  benefits: [
    feature("wallet", "Lifestyle balance reuse", "生活方式余额复用", "MYR already in GrabPay can fund official cashier top-ups.", "已在 GrabPay 的马币可为官方收银台充值。"),
    feature("zap", "Familiar Grab confirmation", "熟悉的 Grab 确认", "You finish inside an app you open daily.", "在你每日打开的 APP 内完成。"),
    feature("shield", "Anti-number-sharing clarity", "反分享号码清楚", "Official GrabPay is not a phone number in Telegram.", "官方 GrabPay 不是 Telegram 里的手机号。"),
    feature("eye", "Clear success/pending split", "清楚成功/待处理分割", "Grab success then cashier credit — two checkpoints.", "Grab 成功再收银台入账——两个检查点。"),
    feature("building", "Backup when banks sleep", "银行休眠时的备用", "Wallet rails can save evenings during IB maintenance.", "网银维护时钱包通道可挽救夜晚。"),
    feature("check", "Clean support labels", "干净客服标签", "“GrabPay” + time + amount is enough to start a case.", "「GrabPay」+时间+金额足以启动个案。"),
  ],
  howToTitle: { en: "How to pay with GrabPay on TPOWER", zh: "如何在 TPOWER 使用 GrabPay 支付" },
  howToDescription: {
    en: "Balance-first GrabPay steps on the official cashier.",
    zh: "官方收银台上余额优先的 GrabPay 步骤。",
  },
  howToSteps: [
    howTo("Check GrabPay balance", "检查 GrabPay 余额", "Reload inside Grab if needed — not via chat agents.", "若需要在 Grab 内充值——不是经聊天代理。"),
    howTo("Open official TPOWER cashier", "打开官方 TPOWER 收银台", "Login on real domain or Download app.", "在真实域名或下载 APP 登录。"),
    howTo("Select GrabPay", "选择 GrabPay", "Only when listed for your account.", "仅当账户列出时。"),
    howTo("Confirm inside Grab", "在 Grab 内确认", "Complete GrabPay approval in Grab’s UI.", "在 Grab 界面完成 GrabPay 批准。"),
    howTo("Verify TPOWER credit", "核对 TPOWER 入账", "Cashier completed before games.", "开游戏前收银台完成。"),
    howTo("Support if divergent", "不一致则找客服", "Send time, amount, GrabPay method label.", "发送时间、金额、GrabPay 方式标签。"),
  ],
  sections: [
    section(
      "Balance-funded deposits vs proxy phone numbers",
      "余额入金 vs 代理手机号",
      `Real GrabPay on TPOWER spends your GrabPay balance through a merchant session. Fake GrabPay is “send to this number.” If the instruction is a phone number in chat, it is not GrabPay Payments on TPOWER.

That single distinction prevents most GrabPay-related losses we see described in support narratives across the industry.`,
      `TPOWER 上真正的 GrabPay 通过商户会话花费你的 GrabPay 余额。假 GrabPay 是「发到这个号码」。若指示是聊天里的手机号，那就不是 TPOWER 上的 GrabPay 支付。

这一区别能防止行业客服叙事里常见的多数 GrabPay 相关损失。`,
      "/images/payments/heroes/grabpay.webp",
      false,
    ),
    section(
      "When GrabPay is the smart backup rail",
      "何时 GrabPay 是聪明备用通道",
      `Bank maintenance nights are when GrabPay shines for players who already keep wallet float. Compare on Payment Methods before panic. Do not discover GrabPay for the first time while an FPX OTP is expiring.`,
      `银行维护夜，对已保留钱包浮存的玩家，GrabPay 会发光。恐慌前先在支付方式比较。不要在 FPX OTP 即将过期时第一次发现 GrabPay。`,
      NEWS,
      true,
    ),
    section(
      "GrabPay and promotional fine print",
      "GrabPay 与优惠细则",
      `Some offers exclude wallets. If you are depositing for a headline bonus, read Promotions first. A GrabPay deposit that misses eligibility wastes both balance and mood.`,
      `有些活动排除钱包。若为标题红利存款，先读优惠专区。不符合资格的 GrabPay 存款既浪费余额也浪费心情。`,
      "/images/payments/heroes/payment-methods.webp",
      false,
    ),
    section(
      "Cluster links after GrabPay fluency",
      "熟悉 GrabPay 后的集群链接",
      `Return to TnG if that is your other wallet. Use Deposit Guide for shared logic, Payment Security for threats, Fast Withdrawal when cashing out, and Deposit & Withdrawal FAQ for rapid answers.`,
      `若另一钱包是 TnG 就回到 TnG。共用逻辑用存款指南，威胁用支付安全，出金用快速提款，快速答案用存提款 FAQ。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "GrabPay payment timeline", zh: "GrabPay 支付时间线" },
  timeline: [
    timeline("Balance", "余额", "Confirm GrabPay funds.", "确认 GrabPay 资金。"),
    timeline("Select", "选择", "Choose GrabPay in cashier.", "在收银台选择 GrabPay。"),
    timeline("Confirm", "确认", "Approve inside Grab.", "在 Grab 内批准。"),
    timeline("Credit", "入账", "Verify cashier completed.", "核对收银台完成。"),
  ],
  securityTitle: { en: "GrabPay security checklist", zh: "GrabPay 安全清单" },
  securityItems: [
    trust("No personal GrabPay numbers", "无私人 GrabPay 号码", "Chat numbers are not official rails.", "聊天号码不是官方通道。"),
    trust("Reload inside Grab only", "只在 Grab 内充值", "Reject casino chat reload agents.", "拒绝博彩聊天代充。"),
    trust("Official app path", "官方 APP 路径", "Install TPOWER via Download only.", "只经下载安装 TPOWER。"),
    trust("One pending GrabPay", "一笔待处理 GrabPay", "No double confirmation while pending.", "待处理时不双确认。"),
    trust("Secrets stay in Grab", "机密留在 Grab", "No PIN/OTP sharing with agents.", "不与客服分享 PIN/OTP。"),
    trust("Evidence for support", "客服证据", "Time + amount + GrabPay label.", "时间+金额+GrabPay 标签。"),
  ],
  faqTitle: { en: "GrabPay Payments FAQ", zh: "GrabPay 支付常见问题" },
  faqs: [
    faq("How do TPOWER GrabPay payments work?", "TPower GrabPay 支付如何运作？", "Confirm GrabPay balance, select GrabPay in official cashier, approve in Grab, verify cashier credit.", "确认 GrabPay 余额，在官方收银台选择 GrabPay，在 Grab 批准，核对收银台入账。"),
    faq("Can I GrabPay a personal number for credit?", "可以 GrabPay 到私人号码入账吗？", "No. That is not an official TPOWER payment method.", "不可以。那不是官方支付方式。"),
    faq("Why is GrabPay pending?", "为什么 GrabPay 待处理？", "Short reconciliation after Grab success can occur. Escalate with evidence if it persists.", "Grab 成功后可能出现短对账。若持续，带证据升级。"),
    faq("Is GrabPay better than Touch 'n Go?", "GrabPay 比 Touch 'n Go 更好吗？", "Better is whichever wallet you already fund and can complete tonight.", "更好的是你今晚已充值且能完成的那个钱包。"),
    faq("Do bonuses allow GrabPay?", "优惠允许 GrabPay 吗？", "Sometimes. Check Promotions eligible methods.", "有时。查看优惠适用方式。"),
    faq("Does GrabPay work on the app?", "APP 上 GrabPay 可用吗？", "When listed — install via Download only.", "列出时可用——只经下载安装。"),
    faq("What should I tell Support Center?", "应向客服中心说什么？", "Local time, amount, and that the method was GrabPay.", "本地时间、金额，以及方式为 GrabPay。"),
    faq("Where next?", "下一步？", "Payment Methods, Touch 'n Go guide, Deposit Guide, Payment Security.", "支付方式、Touch 'n Go 指南、存款指南、支付安全。"),
  ],
  relatedTitle: { en: "Related GrabPay & payment pages", zh: "相关 GrabPay 与支付页面" },
  extraLinks: [],
  ctaTitle: { en: "Pay with GrabPay on official TPOWER", zh: "在官方 TPOWER 使用 GrabPay 支付" },
  ctaDescription: {
    en: "Check balance, select GrabPay in cashier, confirm inside Grab, and verify credit before you play.",
    zh: "检查余额，在收银台选择 GrabPay，在 Grab 内确认，开玩前核对入账。",
  },
});
