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

const pages = [
  {
    file: "fpx-deposit.ts",
    exportName: "paymentFpxDeposit",
    id: "fpx-deposit",
    path: "/fpx-deposit",
    hero: "fpx-deposit.webp",
    metaTitle: {
      en: "TPOWER FPX Deposit | Online Banking Checkout Guide",
      zh: "TPower FPX存款｜网银结账入金指南",
    },
    metaDescription: {
      en: "Official TPOWER FPX Deposit guide: bank checkout flow, OTP discipline, maintenance realism, status checks, and Malaysia FPX deposit habits.",
      zh: "TPOWER线上博彩官方 FPX 存款指南：银行结账流程、OTP 纪律、维护现实、状态核对与大马 FPX 入金习惯。",
    },
    heroTitle: { en: "TPOWER FPX Deposit", zh: "TPOWER线上博彩 FPX存款" },
    heroSubtitle: {
      en: "Fund with the bank checkout Malaysians already recognise — inside the official cashier only.",
      zh: "用大马人已熟悉的银行结账入金——仅限官方收银台内。",
    },
    intro: paras(
      [
        `TPOWER FPX Deposit is the dedicated guide for players who prefer online banking checkout rails. FPX is not a vague “bank transfer.” It is a structured redirect or in-app confirmation journey where your bank authenticates the payment, then the cashier waits for a success signal.`,
        `This page owns FPX-specific intent. For general funding logic see the [[/deposit-guide|Deposit Guide]]. For comparing all rails see [[/payment-methods|Payment Methods]]. For DuitNow-style real-time transfers see [[/duitnow-deposit|DuitNow Deposit]]. Do not expect this page to repeat withdrawal theory — that lives on the [[/withdrawal-guide|Withdrawal Guide]].`,
        `Begin with [[/login|Login]] on the official domain or [[/download|Download]] app. Open cashier → FPX → choose your bank → approve with bank credentials/OTP inside the bank surface. TPOWER will not ask you to paste bank passwords into chat. Anyone who does fails [[/payment-security|Payment Security]].`,
        `Maintenance is part of FPX reality. Banks take windows. If your bank app is offline, switch to a documented backup such as [[/touch-n-go|Touch 'n Go]] or [[/grabpay|GrabPay Payments]] rather than paying a personal account “agent FPX.”`,
        `Amount discipline still applies. Budget via [[/responsible-gaming|Responsible Gaming]] before you open FPX. Bonus hunters should confirm FPX eligibility on [[/promotions|Promotions]]. VIP claims that need special FPX to personal accounts are hostile until [[/vip|VIP]] and [[/contact|Support Center]] say otherwise on official URLs.`,
        `After bank success, watch cashier status. Short pending windows happen. Escalate with time, amount, bank name, and reference to Support Center — not with duplicate panic deposits. Pair with [[/instant-deposit|Instant Deposit]] for timing expectations without treating every FPX night as identical.`,
        `Name matching still matters for later [[/fast-withdrawal|Fast Withdrawal]] outcomes. Fund from accounts aligned with your identity per [[/aml-kyc|AML & KYC]]. Keep learning via [[/blog/how-to-deposit-tpower|deposit blog guide]], [[/news|News]], and [[/faq|FAQ]].`,
      ],
      [
        `「TPOWER FPX存款」专页面向偏好网银结账通道的玩家。FPX 不是模糊的「银行转账」，而是结构化跳转或 APP 内确认旅程：由你的银行认证付款，再由收银台等待成功信号。`,
        `本页拥有 FPX 专属意图。一般入金逻辑见 [[/deposit-guide|存款指南]]。比较全部通道见 [[/payment-methods|支付方式]]。DuitNow 风格实时转账见 [[/duitnow-deposit|DuitNow存款]]。不要指望本页重复提款理论——那在 [[/withdrawal-guide|提款指南]]。`,
        `从官方域名 [[/login|登录]] 或 [[/download|下载]] APP 开始。打开收银台 → FPX → 选择银行 → 在银行界面用凭证/OTP 批准。TPOWER 不会要你把网银密码贴进聊天。任何人这样做都通不过 [[/payment-security|支付安全]]。`,
        `维护是 FPX 现实的一部分。银行会有窗口。若银行 APP 离线，改用已说明的备用如 [[/touch-n-go|Touch 'n Go]] 或 [[/grabpay|GrabPay支付]]，而不是向私人账户付「代理 FPX」。`,
        `金额纪律仍适用。打开 FPX 前用 [[/responsible-gaming|负责任博彩]] 做预算。追红利者应在 [[/promotions|优惠专区]] 确认 FPX 是否适用。需要向私人账户做特殊 FPX 的 VIP 说法，在 [[/vip|VIP]] 与 [[/contact|客服中心]] 于官方网址确认前视为敌意。`,
        `银行成功后看收银台状态。短待处理窗口会发生。向客服中心升级时带时间、金额、银行名与参考号——不要用重复恐慌存款。搭配 [[/instant-deposit|即时存款]] 理解时效预期，但不要假定每个 FPX 夜晚完全一样。`,
        `姓名匹配仍影响日后 [[/fast-withdrawal|快速提款]]。按 [[/aml-kyc|AML与KYC]] 从与身份对齐的账户入金。继续学习见 [[/blog/how-to-deposit-tpower|存款攻略]]、[[/news|新闻室]]、[[/faq|常见问题]]。`,
      ],
    ),
    stats: [
      { vEn: "FPX", vZh: "FPX", lEn: "Bank-authenticated checkout rail", lZh: "银行认证结账通道" },
      { vEn: "OTP", vZh: "OTP", lEn: "Approvals stay inside your bank app", lZh: "批准留在你的银行 APP 内" },
      { vEn: "Backup", vZh: "备用", lEn: "Switch rails during bank maintenance", lZh: "银行维护时切换通道" },
      { vEn: "Official", vZh: "官方", lEn: "Cashier start — never chat account numbers", lZh: "从收银台开始—绝无聊天账号" },
    ],
    benefitsTitle: { en: "Why players choose TPOWER FPX", zh: "玩家为何选择 TPower FPX" },
    topic: "FPX",
  },
  {
    file: "duitnow-deposit.ts",
    exportName: "paymentDuitnowDeposit",
    id: "duitnow-deposit",
    path: "/duitnow-deposit",
    hero: "duitnow-deposit.webp",
    metaTitle: {
      en: "TPOWER DuitNow Deposit | Real-Time Transfer Guide",
      zh: "TPower DuitNow存款｜实时转账入金指南",
    },
    metaDescription: {
      en: "Official TPOWER DuitNow Deposit guide for Malaysia: real-time transfer habits, references, status checks, limits mindset, and safer DuitNow funding.",
      zh: "TPOWER线上博彩官方 DuitNow 存款指南：实时转账习惯、参考号、状态核对、限额思路与更安全的 DuitNow 入金。",
    },
    heroTitle: { en: "TPOWER DuitNow Deposit", zh: "TPOWER线上博彩 DuitNow存款" },
    heroSubtitle: {
      en: "Use Malaysia’s everyday real-time transfer culture — through the official cashier path.",
      zh: "使用大马日常实时转账文化——走官方收银台路径。",
    },
    intro: paras(
      [
        `TPOWER DuitNow Deposit focuses on real-time transfer behaviour Malaysians already practise between bank apps. DuitNow intent is different from FPX checkout intent: you are often pushing a transfer with identifiers the cashier expects, then waiting for near real-time acknowledgement.`,
        `Keep FPX learning on [[/fpx-deposit|FPX Deposit]] and wallet learning on [[/touch-n-go|Touch 'n Go]] / [[/grabpay|GrabPay Payments]]. This page will not recycle those checkout stories. General deposit psychology stays on the [[/deposit-guide|Deposit Guide]]; the map stays on [[/payment-methods|Payment Methods]].`,
        `Always initiate from the official cashier after [[/login|Login]]. Copy destination details only from the cashier screen for that session. Chat messages that paste “DuitNow QR for TPOWER credit” to a personal wallet are not official — see [[/payment-security|Payment Security]].`,
        `References matter. Save transfer references when the bank app shows them. If cashier pending persists, [[/contact|Support Center]] resolves faster with references than with screenshots of unrelated chats.`,
        `DuitNow speed feels instant on good nights. It is still subject to bank-side pauses. Read [[/instant-deposit|Instant Deposit]] for expectation framing. For payouts later, keep destination identity aligned via [[/withdrawal-guide|Withdrawal Guide]] and [[/aml-kyc|AML & KYC]].`,
        `Budget before transfer size. [[/responsible-gaming|Responsible Gaming]] exists so real-time rails do not become real-time chase. Check [[/promotions|Promotions]] if depositing for an offer. Install apps only via [[/download|Download]]. Escalate via Support; learn via [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]].`,
      ],
      [
        `「TPOWER DuitNow存款」聚焦大马人已在银行 APP 之间练习的实时转账行为。DuitNow 意图不同于 FPX 结账意图：你往往按收银台期望的识别信息推送转账，再等待接近实时的确认。`,
        `FPX 学习留在 [[/fpx-deposit|FPX存款]]，钱包学习留在 [[/touch-n-go|Touch 'n Go]] / [[/grabpay|GrabPay支付]]。本页不回收那些结账故事。一般存款心理在 [[/deposit-guide|存款指南]]；地图在 [[/payment-methods|支付方式]]。`,
        `请在 [[/login|登录]] 后从官方收银台发起。只从当次收银台屏幕复制收款资料。聊天粘贴「TPOWER 入账用 DuitNow QR」到私人钱包的，不是官方——见 [[/payment-security|支付安全]]。`,
        `参考号很重要。银行 APP 显示时请保存。若收银台持续待处理，[[/contact|客服中心]] 有参考号时比无关聊天截图更快解决。`,
        `顺利的夜晚 DuitNow 感觉秒到，但仍受银行侧停顿影响。时效预期见 [[/instant-deposit|即时存款]]。日后提款请经 [[/withdrawal-guide|提款指南]] 与 [[/aml-kyc|AML与KYC]] 保持收款身份对齐。`,
        `转账金额前先预算。[[/responsible-gaming|负责任博彩]] 存在，是为了不让实时通道变成实时追损。为活动存款先查 [[/promotions|优惠专区]]。APP 只经 [[/download|下载]] 安装。升级走客服；学习走 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]。`,
      ],
    ),
    stats: [
      { vEn: "Real-time", vZh: "实时", lEn: "Everyday Malaysia transfer culture", lZh: "大马日常转账文化" },
      { vEn: "Reference", vZh: "参考号", lEn: "Keep bank references for support", lZh: "为客服保留银行参考号" },
      { vEn: "Cashier", vZh: "收银台", lEn: "Copy details only from live cashier", lZh: "只从现场收银台复制资料" },
      { vEn: "Align", vZh: "对齐", lEn: "Matching identity helps later payouts", lZh: "身份匹配有助日后提款" },
    ],
    benefitsTitle: { en: "Why TPOWER DuitNow fits Malaysia nights", zh: "为何 TPower DuitNow 适合大马夜晚" },
    topic: "DuitNow",
  },
  {
    file: "touch-n-go.ts",
    exportName: "paymentTouchNGo",
    id: "touch-n-go",
    path: "/touch-n-go",
    hero: "touch-n-go.webp",
    metaTitle: {
      en: "TPOWER Touch 'n Go eWallet | Mobile Deposit Guide",
      zh: "TPower Touch 'n Go电子钱包｜手机存款指南",
    },
    metaDescription: {
      en: "Official TPOWER Touch 'n Go eWallet guide: mobile top-ups, wallet balance checks, OTP hygiene, cashier flow, and safer TnG deposits in Malaysia.",
      zh: "TPOWER线上博彩官方 Touch 'n Go 电子钱包指南：手机充值、余额检查、OTP 卫生、收银台流程与更安全的大马 TnG 存款。",
    },
    heroTitle: {
      en: "TPOWER Touch 'n Go eWallet",
      zh: "TPOWER线上博彩 Touch 'n Go电子钱包",
    },
    heroSubtitle: {
      en: "Phone-native funding for players who already live in the TnG wallet.",
      zh: "已生活在 TnG 钱包里的玩家的手机原生入金。",
    },
    intro: paras(
      [
        `Touch 'n Go on TPOWER is for wallet-first Malaysia players. This page is not a generic e-wallet essay and not a GrabPay twin. TnG habits — balance checks, wallet PIN/OTP, mobile network stability — deserve their own authority narrative around TPOWER Touch 'n Go deposits.`,
        `Compare other wallets on [[/grabpay|GrabPay Payments]]. Banking rails stay on [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], and [[/online-banking|Online Banking]]. Shared deposit logic remains on the [[/deposit-guide|Deposit Guide]]; the catalogue remains [[/payment-methods|Payment Methods]].`,
        `Open the official cashier after [[/login|Login]] or via [[/download|Download]]. Choose Touch 'n Go only when the cashier lists it. Confirm wallet balance before you start so mid-flow failures do not feel like “lost money.”`,
        `Protect wallet secrets. TPOWER support will not ask for your TnG PIN. Phishing that imitates “wallet verify for casino credit” is covered on [[/payment-security|Payment Security]] and [[/security|Platform Security]].`,
        `Mobile data drops kill wallet confirmations. Stay on stable connectivity until the wallet shows success, then confirm cashier credit before spinning. Timing mindset: [[/instant-deposit|Instant Deposit]]. Payout preparation: [[/withdrawal-guide|Withdrawal Guide]].`,
        `Keep entertainment intentional with [[/responsible-gaming|Responsible Gaming]]. Check [[/promotions|Promotions]] for wallet eligibility. Use [[/contact|Support Center]] with time, amount, and “Touch 'n Go” as the method label. Continue reading on [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/vip|VIP]].`,
      ],
      [
        `TPOWER 上的 Touch 'n Go 面向钱包优先的大马玩家。本页不是泛泛电子钱包散文，也不是 GrabPay 双胞胎。TnG 习惯——余额检查、钱包 PIN/OTP、移动网络稳定——值得围绕 TPower Touch 'n Go 存款写独立权威叙事。`,
        `其他钱包比较见 [[/grabpay|GrabPay支付]]。银行通道见 [[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/online-banking|网上银行]]。共用存款逻辑在 [[/deposit-guide|存款指南]]；目录在 [[/payment-methods|支付方式]]。`,
        `[[/login|登录]] 后或经 [[/download|下载]] 打开官方收银台。仅当收银台列出时选择 Touch 'n Go。开始前确认钱包余额，避免流程中失败被误当成「钱丢了」。`,
        `保护钱包机密。TPOWER 客服不会要你的 TnG PIN。模仿「赌场入账钱包验证」的钓鱼见 [[/payment-security|支付安全]] 与 [[/security|平台安全]]。`,
        `移动数据中断会杀死钱包确认。保持稳定连接直到钱包显示成功，再确认收银台入账后开玩。时效心态见 [[/instant-deposit|即时存款]]。出金准备见 [[/withdrawal-guide|提款指南]]。`,
        `用 [[/responsible-gaming|负责任博彩]] 保持娱乐有意识。查 [[/promotions|优惠专区]] 是否适用钱包。向 [[/contact|客服中心]] 说明时间、金额与方式「Touch 'n Go」。续读 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]。`,
      ],
    ),
    stats: [
      { vEn: "TnG", vZh: "TnG", lEn: "Wallet-native Malaysia funding", lZh: "钱包原生的大马入金" },
      { vEn: "Balance", vZh: "余额", lEn: "Check wallet funds before cashier start", lZh: "启动收银台前检查钱包余额" },
      { vEn: "Mobile", vZh: "手机", lEn: "Stable data until wallet confirms", lZh: "钱包确认前保持稳定网络" },
      { vEn: "PIN", vZh: "PIN", lEn: "Never share wallet PIN with agents", lZh: "绝不向客服分享钱包 PIN" },
    ],
    benefitsTitle: { en: "Benefits of Touch 'n Go on TPOWER", zh: "在 TPOWER 使用 Touch 'n Go 的好处" },
    topic: "Touch 'n Go",
  },
  {
    file: "grabpay.ts",
    exportName: "paymentGrabPay",
    id: "grabpay",
    path: "/grabpay",
    hero: "grabpay.webp",
    metaTitle: {
      en: "TPOWER GrabPay Payments | E-Wallet Deposit Guide",
      zh: "TPower GrabPay支付｜电子钱包存款指南",
    },
    metaDescription: {
      en: "Official TPOWER GrabPay Payments guide: balance-funded deposits, mobile confirmation, cashier statuses, and safer GrabPay habits for Malaysia players.",
      zh: "TPOWER线上博彩官方 GrabPay 支付指南：余额入金、手机确认、收银台状态，以及大马玩家更安全的 GrabPay 习惯。",
    },
    heroTitle: { en: "TPOWER GrabPay Payments", zh: "TPOWER线上博彩 GrabPay支付" },
    heroSubtitle: {
      en: "Deposit with the GrabPay balance you already use for daily life — on official TPOWER rails only.",
      zh: "用你日常生活已在用的 GrabPay 余额入金——仅限官方 TPOWER 通道。",
    },
    intro: paras(
      [
        `TPOWER GrabPay Payments is written for players whose money already sits in GrabPay. The intent is GrabPay-specific: balance sufficiency, Grab confirmation UX, and refusing fake “GrabPay agent top-up” chats. It is not a copy of the Touch 'n Go page with names swapped.`,
        `TnG depth stays on [[/touch-n-go|Touch 'n Go]]. Banking depth stays on [[/fpx-deposit|FPX Deposit]] and [[/duitnow-deposit|DuitNow Deposit]]. Shared funding theory stays on the [[/deposit-guide|Deposit Guide]]. Catalogue: [[/payment-methods|Payment Methods]].`,
        `Login officially, open cashier, select GrabPay when listed, confirm inside Grab’s flow, then verify cashier credit. Never send GrabPay to a personal phone number that claims to be TPOWER finance. That fails [[/payment-security|Payment Security]].`,
        `If GrabPay balance is short, top up GrabPay first using Grab’s own channels — not a stranger’s “reload for casino.” Insufficient balance mid-flow is a common confusion source.`,
        `After success, play within budget ([[/responsible-gaming|Responsible Gaming]]). For timing talk see [[/instant-deposit|Instant Deposit]]. For cashouts see [[/withdrawal-guide|Withdrawal Guide]] and [[/fast-withdrawal|Fast Withdrawal]]. Support: [[/contact|Support Center]]. App installs: [[/download|Download]]. Offers: [[/promotions|Promotions]]. Cluster learning: [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/vip|VIP]], [[/aml-kyc|AML & KYC]].`,
      ],
      [
        `「TPOWER GrabPay支付」写给资金已在 GrabPay 的玩家。意图专属于 GrabPay：余额是否足够、Grab 确认体验、拒绝假「GrabPay 代理充值」聊天。它不是把 Touch 'n Go 页换名复制。`,
        `TnG 深度在 [[/touch-n-go|Touch 'n Go]]。银行深度在 [[/fpx-deposit|FPX存款]] 与 [[/duitnow-deposit|DuitNow存款]]。共用入金理论在 [[/deposit-guide|存款指南]]。目录：[[/payment-methods|支付方式]]。`,
        `官方登录，打开收银台，列出时选择 GrabPay，在 Grab 流程内确认，再核对收银台入账。切勿向声称是 TPOWER 财务的私人手机号发 GrabPay。那通不过 [[/payment-security|支付安全]]。`,
        `若 GrabPay 余额不足，先用 Grab 自己的渠道充值——不是陌生人的「赌场代充」。流程中余额不足是常见困惑来源。`,
        `成功后按预算游玩（[[/responsible-gaming|负责任博彩]]）。时效见 [[/instant-deposit|即时存款]]。出金见 [[/withdrawal-guide|提款指南]] 与 [[/fast-withdrawal|快速提款]]。客服：[[/contact|客服中心]]。安装：[[/download|下载]]。优惠：[[/promotions|优惠专区]]。集群学习：[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]、[[/aml-kyc|AML与KYC]]。`,
      ],
    ),
    stats: [
      { vEn: "GrabPay", vZh: "GrabPay", lEn: "Everyday wallet balance funding", lZh: "日常钱包余额入金" },
      { vEn: "Confirm", vZh: "确认", lEn: "Finish inside Grab’s official flow", lZh: "在 Grab 官方流程内完成" },
      { vEn: "No DM", vZh: "无私信", lEn: "Never pay personal GrabPay numbers", lZh: "绝不付到私人 GrabPay 号码" },
      { vEn: "Check", vZh: "核对", lEn: "Cashier credit before you play", lZh: "开玩前核对收银台入账" },
    ],
    benefitsTitle: { en: "Why GrabPay works for TPOWER players", zh: "为何 GrabPay 适合 TPOWER 玩家" },
    topic: "GrabPay",
  },
];

function buildBenefits(topic) {
  const t = topic;
  return [
    feature("wallet", `${t} inside official cashier`, `官方收银台内的${t}`, `Start ${t} only from logged-in TPOWER cashier options.`, `只从已登录 TPOWER 收银台选项启动 ${t}。`),
    feature("shield", "Secrets stay in provider apps", "机密留在提供方 APP", `Bank or wallet OTPs never belong in TPOWER chat threads.`, `银行或钱包 OTP 从不属于 TPOWER 聊天线程。`),
    feature("zap", "Familiar Malaysia UX", "熟悉的大马体验", `You reuse habits you already trust for bills and transfers.`, `复用你已为账单与转账信任的习惯。`),
    feature("eye", "Status after provider success", "提供方成功后的状态", `Provider success plus cashier completed is the full story.`, `提供方成功加上收银台完成才是完整故事。`),
    feature("check", "Evidence for edge cases", "边界个案的证据", `Time, amount, and ${t} label speed up Support Center.`, `时间、金额与 ${t} 标签加快客服中心处理。`),
    feature("building", "Backup planning", "备用计划", `When ${t} is unavailable, switch to another documented rail.`, `${t} 不可用时，切换到另一条已说明通道。`),
  ];
}

function buildHowTo(topic, zhTopic) {
  return [
    howTo("Login officially", "官方登录", `Open TPOWER via official web or Download app, then login.`, `经官方网页或下载 APP 打开 TPOWER 并登录。`),
    howTo(`Select ${topic}`, `选择${zhTopic}`, `Choose ${topic} in cashier only when listed for your account.`, `仅当账户列出时在收银台选择 ${zhTopic}。`),
    howTo("Enter planned amount", "输入计划金额", `Use a budgeted amount; confirm minimums shown live.`, `使用已预算金额；确认现场显示的最低额。`),
    howTo("Approve in provider UI", "在提供方界面批准", `Complete OTP/PIN inside bank or wallet — never in chat.`, `在银行或钱包内完成 OTP/PIN——绝不在聊天中。`),
    howTo("Confirm cashier credit", "确认收银台入账", `Return to cashier and verify completed balance before games.`, `回到收银台确认完成余额后再开游戏。`),
    howTo("Escalate with labels", "带标签升级", `If needed, contact Support Center naming ${topic}, time, and amount.`, `如需要，向客服中心说明 ${zhTopic}、时间与金额。`),
  ];
}

function buildSections(p) {
  const t = p.topic;
  const hero = `/images/payments/heroes/${p.hero}`;
  return [
    section(
      `${t} flow on the official cashier`,
      `官方收银台上的 ${t} 流程`,
      `The ${t} journey always begins on TPOWER’s logged-in cashier. You are not looking for a random QR in a social feed. Session-specific details, when shown, should be treated as single-use instructions for that attempt.

Mid-flow cancellations happen when OTP times out or networks drop. Check whether your bank or wallet actually debited before restarting. Restarting blindly creates duplicate credits that are harder to unwind.

After provider success, give the cashier a short window to reflect credit. Refresh official UI rather than opening a second ${t} attempt immediately.`,
      `${t} 旅程始终从 TPOWER 已登录收银台开始。你不是在社交信息流里找随机 QR。若显示会话专属资料，应视为当次尝试的一次性指示。

OTP 超时或网络中断会导致中途取消。重新开始前先确认银行或钱包是否已扣款。盲目重开会造成更难处理的重复入账。

提供方成功后，给收银台短窗口反映入账。刷新官方界面，而不是立刻开第二笔 ${t}。`,
      hero,
      false,
    ),
    section(
      `Failure modes unique to ${t} nights`,
      `${t} 夜晚特有的失败模式`,
      `Provider maintenance, insufficient balance, and mismatched identity data are the boring causes of most pain. Exciting rumours are usually wrong.

If ${t} is missing from cashier, it may be temporarily unavailable for your account or region window — ask Support Center rather than accepting a chat workaround.

Promotions may exclude ${t}. Read offer terms before depositing solely for bonus math.`,
      `提供方维护、余额不足与身份资料不匹配，是多数痛苦的无聊原因。刺激谣言通常是错的。

若收银台缺少 ${t}，可能是账户或地区窗口暂时不可用——问客服中心，而不是接受聊天变通。

优惠可能排除 ${t}。仅为红利数学存款前先读活动条款。`,
      NEWS,
      true,
    ),
    section(
      "Security around money language",
      "资金话术周边的安全",
      `Attackers imitate ${t} urgency because it works. “Your ${t} deposit failed — pay this personal account to restore” is a classic pattern. Official recovery is Support Center + official cashier, never personal accounts.

Pair this guide with Payment Security and Platform Security. End sessions on shared phones after funding.`,
      `攻击者模仿 ${t} 紧迫感，因为有效。「你的 ${t} 存款失败—付此私人账户恢复」是经典模式。官方恢复是客服中心+官方收银台，绝非私人账户。

请搭配支付安全与平台安全。入金后在共用手机上结束会话。`,
      "/images/payments/heroes/payment-security.webp",
      false,
    ),
    section(
      "Where this rail sits in the cluster",
      "本通道在集群中的位置",
      `Return to Payment Methods to compare. Use Deposit Guide for shared funding logic and Withdrawal Guide when cashing out. Instant Deposit and Fast Withdrawal set timing expectations. Deposit & Withdrawal FAQ captures rapid answers.

Register, Login, Download, VIP, Promotions, Responsible Gaming, Blog, News, and FAQ remain one tap away for a complete commercial journey.`,
      `回到支付方式作比较。共用入金逻辑用存款指南，出金用提款指南。即时存款与快速提款设定时效预期。存提款 FAQ 收纳快速答案。

注册、登录、下载、VIP、优惠、负责任博彩、博客、新闻与 FAQ 仍一键可达，构成完整商业旅程。`,
      CTA,
      true,
    ),
  ];
}

function buildFaqs(topic, zhTopic) {
  return [
    faq(`How do I deposit with ${topic} on TPOWER?`, `如何在 TPOWER 用 ${zhTopic} 存款？`, `Login, open cashier, select ${topic} when listed, approve in the provider app, then confirm cashier credit before playing.`, `登录，打开收银台，列出时选择 ${zhTopic}，在提供方 APP 批准，再确认收银台入账后开玩。`),
    faq(`Is ${topic} instant on TPOWER?`, `TPOWER 上 ${zhTopic} 是即时的吗？`, `Often fast after provider success, but bank or wallet queues can add short waits. See Instant Deposit for expectation framing.`, `提供方成功后通常很快，但银行或钱包队列可能增加短等待。时效预期见即时存款。`),
    faq(`Can I ${topic} to a personal account for credit?`, `可以 ${zhTopic} 到私人账户入账吗？`, `No. Official credit paths start in the TPOWER cashier only.`, `不可以。官方入账路径只从 TPOWER 收银台开始。`),
    faq(`What if cashier stays pending after ${topic} success?`, `若 ${zhTopic} 成功后收银台仍待处理？`, `Wait a short window, then contact Support Center with time, amount, and ${topic} as method.`, `先等短窗口，再向客服中心提供时间、金额，并说明方式为 ${zhTopic}。`),
    faq(`Does ${topic} work in the TPOWER app?`, `${zhTopic} 在 TPOWER APP 可用吗？`, `When listed in the app cashier, yes — install only via Download and use the same anti-phishing rules.`, `当 APP 收银台列出时可用——只经下载安装，并遵守同一防钓鱼规则。`),
    faq(`Are bonuses eligible with ${topic}?`, `用 ${zhTopic} 能拿优惠吗？`, `Sometimes. Confirm eligible methods on Promotions before depositing for an offer.`, `有时可以。为活动存款前在优惠专区确认适用方式。`),
    faq(`What should I never share during a ${topic} deposit?`, `${zhTopic} 存款时绝不能分享什么？`, `Bank/wallet passwords, OTPs, and PINs. Official agents will not request them.`, `银行/钱包密码、OTP 与 PIN。官方客服不会索要。`),
    faq(`Where next after learning ${topic}?`, `学完 ${zhTopic} 下一步去哪？`, `Payment Methods hub, Deposit Guide, Payment Security, and Deposit & Withdrawal FAQ.`, `支付方式中心、存款指南、支付安全，以及存提款常见问题。`),
  ];
}

for (const p of pages) {
  const zhMap = {
    FPX: "FPX",
    DuitNow: "DuitNow",
    "Touch 'n Go": "Touch 'n Go",
    GrabPay: "GrabPay",
  };
  write(p.file, p.exportName, {
    id: p.id,
    path: p.path,
    heroImage: `/images/payments/heroes/${p.hero}`,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    heroTitle: p.heroTitle,
    heroSubtitle: p.heroSubtitle,
    introduction: p.intro,
    stats: p.stats,
    benefitsTitle: p.benefitsTitle,
    benefits: buildBenefits(p.topic),
    howToTitle: {
      en: `How to use ${p.topic} on TPOWER`,
      zh: `如何在 TPOWER 使用 ${zhMap[p.topic]}`,
    },
    howToDescription: {
      en: `Step-by-step ${p.topic} funding on the official cashier.`,
      zh: `官方收银台上的 ${zhMap[p.topic]} 入金步骤。`,
    },
    howToSteps: buildHowTo(p.topic, zhMap[p.topic]),
    sections: buildSections(p),
    timelineTitle: {
      en: `${p.topic} timeline`,
      zh: `${zhMap[p.topic]} 时间线`,
    },
    timeline: [
      timeline("Open", "打开", "Official login and cashier.", "官方登录与收银台。"),
      timeline("Select", "选择", `Choose ${p.topic}.`, `选择 ${zhMap[p.topic]}。`),
      timeline("Approve", "批准", "Confirm in provider app.", "在提供方 APP 确认。"),
      timeline("Credit", "入账", "Verify cashier completed status.", "核对收银台完成状态。"),
    ],
    securityTitle: {
      en: `${p.topic} security checklist`,
      zh: `${zhMap[p.topic]} 安全清单`,
    },
    securityItems: [
      trust("Cashier-origin only", "仅源自收银台", `Do not follow ${p.topic} instructions from DMs.`, `不要遵循私信里的 ${zhMap[p.topic]} 指示。`),
      trust("OTP privacy", "OTP 隐私", "Provider OTP stays in provider apps.", "提供方 OTP 留在提供方 APP。"),
      trust("No duplicate panic", "无重复恐慌", "One pending attempt at a time.", "一次只保留一笔待处理。"),
      trust("Stable network", "稳定网络", "Finish confirmation before switching apps randomly.", "随意切换 APP 前先完成确认。"),
      trust("Identity alignment", "身份对齐", "Fund from sources matching your registered name.", "从匹配注册姓名的来源入金。"),
      trust("Official support only", "仅官方客服", "Escalate via Support Center with references.", "经客服中心带参考号升级。"),
    ],
    faqTitle: { en: `${p.topic} FAQ`, zh: `${zhMap[p.topic]} 常见问题` },
    faqs: buildFaqs(p.topic, zhMap[p.topic]),
    relatedTitle: { en: "Related payment pages", zh: "相关支付页面" },
    extraLinks: [],
    ctaTitle: {
      en: `Deposit with ${p.topic} on official TPOWER`,
      zh: `在官方 TPOWER 使用 ${zhMap[p.topic]} 存款`,
    },
    ctaDescription: {
      en: `Register or login, select ${p.topic} in cashier, and keep Payment Security habits active.`,
      zh: `注册或登录，在收银台选择 ${zhMap[p.topic]}，并保持支付安全习惯。`,
    },
  });
}
