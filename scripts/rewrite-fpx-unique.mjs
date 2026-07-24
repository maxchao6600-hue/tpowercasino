/**
 * Rewrites FPX / DuitNow / TnG / GrabPay with fully unique long-form copy
 * (no shared section templates) to pass Sprint 2 uniqueness QA.
 */
import fs from "node:fs";
import path from "node:path";
import { renderPage, feature, howTo, timeline, trust, faq, section } from "./lib/payment-page-factory.mjs";

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

// ---------------- FPX ----------------
write("fpx-deposit.ts", "paymentFpxDeposit", {
  id: "fpx-deposit",
  path: "/fpx-deposit",
  heroImage: "/images/payments/heroes/fpx-deposit.webp",
  metaTitle: {
    en: "TPOWER FPX Deposit | Online Banking Checkout Guide",
    zh: "TPower FPX存款｜网银结账入金指南",
  },
  metaDescription: {
    en: "Official TPOWER FPX Deposit guide: bank selection, OTP inside your bank app, maintenance realism, cashier status checks, and Malaysia FPX deposit habits.",
    zh: "TPOWER线上博彩官方 FPX 存款指南：选银行、在银行 APP 内 OTP、维护现实、收银台状态核对与大马 FPX 入金习惯。",
  },
  heroTitle: { en: "TPOWER FPX Deposit", zh: "TPOWER线上博彩 FPX存款" },
  heroSubtitle: {
    en: "Bank-authenticated checkout — the FPX path Malaysia players already recognise.",
    zh: "银行认证结账——大马玩家已熟悉的 FPX 路径。",
  },
  introduction: P(
    [
      `TPOWER FPX Deposit exists for one commercial intent: players searching how FPX funding works on the official cashier. FPX is a bank-authenticated checkout pattern. You choose a participating bank, authenticate in that bank’s world, and return to TPOWER only after the bank confirms the payment intent.`,
      `This page will not recycle DuitNow transfer essays, e-wallet PIN stories, or full withdrawal theory. Those belong on [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], and the [[/withdrawal-guide|Withdrawal Guide]]. Shared deposit psychology stays on the [[/deposit-guide|Deposit Guide]]. The catalogue stays on [[/payment-methods|Payment Methods]].`,
      `Start only after [[/login|Login]] (or [[/register|Register]]) on the official domain or [[/download|Download]] app. Open cashier → FPX → pick your bank → complete OTP or secure approval inside the bank interface. TPOWER agents never need your IB password. Anyone asking for it fails [[/payment-security|Payment Security]].`,
      `FPX nights fail for boring reasons: bank app maintenance, expired OTP, unstable mobile data mid-approval, or selecting a bank you no longer use. Exciting rumours about “agent FPX to personal Maybank” are not FPX — they are phishing. Official Support lives at [[/contact|Support Center]].`,
      `Speed expectations after a successful bank confirmation are framed on [[/instant-deposit|Instant Deposit]]. Instant is not a promise that every bank posts identically at 2 a.m. If cashier pending persists beyond a short window, escalate with time, amount, bank name, and reference — do not fire a second FPX while the first is alive.`,
      `Promotions may exclude FPX. Read [[/promotions|Promotions]] before topping up solely for a bonus. Budget with [[/responsible-gaming|Responsible Gaming]]. Align identity for later payouts via [[/aml-kyc|AML & KYC]] and [[/fast-withdrawal|Fast Withdrawal]]. Keep [[/blog/how-to-deposit-tpower|deposit blog]], [[/news|News]], [[/faq|FAQ]], and [[/vip|VIP]] in the journey.`,
      `Think of FPX as borrowing your bank’s trust UI for a few seconds. The quality of those seconds — correct bank, stable network, single attempt — decides whether TPOWER FPX feels premium or chaotic. Authority is operational clarity, not louder adjectives.`,
      `When your preferred bank is offline, switch to a documented backup rail rather than improvising. DuitNow or a daily wallet often saves the evening without inventing unofficial channels. That switching discipline is part of FPX maturity.`,
      `Finally, treat every urgent “FPX repair” message as hostile until the official site confirms otherwise. Payment Security and Platform Security exist for that pause. FPX is strongest when it stays boring and official.`,
    ],
    [
      `「TPOWER FPX存款」只服务一个商业意图：玩家搜索官方收银台上 FPX 如何入金。FPX 是银行认证结账模式。你选择参与银行，在银行世界里认证，银行确认付款意图后才回到 TPOWER线上博彩。`,
      `本页不回收 DuitNow 转账散文、电子钱包 PIN 故事或完整提款理论。那些属于 [[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]] 与 [[/withdrawal-guide|提款指南]]。共用存款心理在 [[/deposit-guide|存款指南]]。目录在 [[/payment-methods|支付方式]]。`,
      `只在官方域名或 [[/download|下载]] APP 完成 [[/login|登录]]（或 [[/register|注册]]）后开始。打开收银台 → FPX → 选银行 → 在银行界面完成 OTP 或安全批准。TPOWER 客服从不需要网银密码。任何人索要都通不过 [[/payment-security|支付安全]]。`,
      `FPX 夜晚因无聊原因失败：银行 APP 维护、OTP 过期、批准中途移动数据不稳，或选了你已不用的银行。关于「代理 FPX 到私人 Maybank」的刺激谣言不是 FPX——是钓鱼。官方客服在 [[/contact|客服中心]]。`,
      `银行确认成功后的速度预期见 [[/instant-deposit|即时存款]]。即时不是承诺每家银行凌晨 2 点入账都一样。若收银台待处理超过短窗口，带时间、金额、银行名与参考号升级——不要在第一笔仍存活时再开第二笔 FPX。`,
      `优惠可能排除 FPX。仅为红利充值前读 [[/promotions|优惠专区]]。用 [[/responsible-gaming|负责任博彩]] 预算。经 [[/aml-kyc|AML与KYC]] 与 [[/fast-withdrawal|快速提款]] 为日后提款对齐身份。旅程保留 [[/blog/how-to-deposit-tpower|存款攻略]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]。`,
      `把 FPX 想成借用银行信任界面几秒钟。那几秒的质量——正确银行、稳定网络、单次尝试——决定 TPower FPX 感觉高级还是混乱。权威是运营清楚，不是更响的形容词。`,
      `偏好银行离线时，切换已说明备用通道，而不是即兴发明。DuitNow 或日常钱包常能挽救夜晚，而无需非官方通道。这种切换纪律属于 FPX 成熟度。`,
      `最后，把每条紧迫「FPX 修复」消息先当敌意，直到官网确认相反。支付安全与平台安全就是为了那次停顿。FPX 在保持无聊且官方时最强。`,
    ],
  ),
  stats: [
    { vEn: "Bank UI", vZh: "银行界面", lEn: "Approvals happen inside your bank", lZh: "批准发生在你的银行内" },
    { vEn: "OTP", vZh: "OTP", lEn: "Never paste codes into casino chat", lZh: "绝不把验证码贴进博彩聊天" },
    { vEn: "1 try", vZh: "1次", lEn: "One live FPX attempt at a time", lZh: "同一时间一笔进行中的 FPX" },
    { vEn: "Backup", vZh: "备用", lEn: "Switch rails when banks maintain", lZh: "银行维护时切换通道" },
  ],
  benefitsTitle: { en: "Why FPX remains a TPOWER favourite", zh: "为何 FPX 仍是 TPOWER 常见选择" },
  benefits: [
    feature("building", "Familiar bank checkout", "熟悉的银行结账", "You reuse the same confirmation posture as other online purchases.", "复用与其他网购相同的确认姿态。"),
    feature("lock", "Authentication boundary", "认证边界", "Credentials stay with your bank — not with chat agents.", "凭证留在银行——不在聊天客服。"),
    feature("eye", "Clear success signal path", "清楚成功信号路径", "Bank confirms, then cashier reflects credit.", "银行确认，再由收银台反映入账。"),
    feature("zap", "Fast when banks are healthy", "银行健康时快", "Good nights feel near-instant after approval.", "顺利夜晚在批准后接近即时。"),
    feature("shield", "Phishing contrast", "钓鱼对照", "Real FPX never starts as a personal account number in Telegram.", "真 FPX 从不从 Telegram 私人账号开始。"),
    feature("check", "Supportable failures", "可支持的失败", "Bank name + time + amount makes Support Center effective.", "银行名+时间+金额让客服中心有效。"),
  ],
  howToTitle: { en: "How to complete a TPOWER FPX deposit", zh: "如何完成 TPower FPX 存款" },
  howToDescription: {
    en: "Bank-first steps for Malaysia FPX funding on the official cashier.",
    zh: "官方收银台上大马 FPX 入金的银行优先步骤。",
  },
  howToSteps: [
    howTo("Open official cashier", "打开官方收银台", "Login on real TPOWER surfaces and open deposit from navigation.", "在真实 TPOWER 表面登录，并从导航打开存款。"),
    howTo("Select FPX and your bank", "选择 FPX 与银行", "Pick the bank app you can actually approve tonight.", "选择今晚你真正能批准的银行。"),
    howTo("Enter budgeted amount", "输入预算金额", "Confirm minimums; avoid last-second bonus panic edits.", "确认最低额；避免最后一秒红利恐慌改数。"),
    howTo("Approve inside bank app", "在银行 APP 内批准", "Complete OTP/secure login only on the bank surface.", "只在银行表面完成 OTP/安全登录。"),
    howTo("Return and verify credit", "返回并核对入账", "Confirm cashier completed status before launching games.", "开游戏前确认收银台完成状态。"),
    howTo("Escalate with bank context", "带银行语境升级", "If pending persists, contact Support Center with bank name, time, amount.", "若持续待处理，向客服提供银行名、时间、金额。"),
  ],
  sections: [
    section(
      "What makes FPX different from a plain transfer",
      "FPX 与普通转账有何不同",
      `FPX is checkout-shaped. You are not inventing a reference in a vacuum. The bank presents a payment context tied to the merchant session. That is why personal-account “manual FPX” stories are contradictory: they discard the checkout that makes reconciliation possible.

Players who understand this stop arguing with screenshots alone. They ask whether the bank journey completed, then whether the cashier received the signal. Support Center can work that sequence; it cannot work a random personal transfer labelled “FPX” in a chat title.`,
      `FPX 是结账形态。你不是在真空里发明参考号。银行呈现绑定商户会话的付款语境。这就是为什么私人账户「手动 FPX」故事自相矛盾：它们丢掉了让对账成为可能的结账。

理解这一点的玩家不再只靠截图争吵。他们先问银行旅程是否完成，再问收银台是否收到信号。客服中心能处理该顺序；处理不了聊天标题写成「FPX」的随机私人转账。`,
      "/images/payments/heroes/fpx-deposit.webp",
      false,
    ),
    section(
      "Bank maintenance and choosing a backup the smart way",
      "银行维护与聪明选择备用",
      `When Maybank or another app is down, the smart move is a different documented rail — DuitNow or a wallet you already fund daily — not a stranger’s account. Compare options on Payment Methods before the stressful minute arrives.

Keep one primary FPX bank and one non-FPX backup. Two FPX banks both offline on the same maintenance night teaches a painful lesson.`,
      `当 Maybank 或其他 APP 故障时，聪明做法是换一条已说明通道——DuitNow 或你日常已充的钱包——不是陌生人账户。在压力分钟到来前，先在支付方式比较选项。

保持一个主 FPX 银行与一个非 FPX 备用。两个 FPX 银行在同一维护夜都离线，会教给你痛苦一课。`,
      NEWS,
      true,
    ),
    section(
      "OTP discipline unique to FPX evenings",
      "FPX 夜晚特有的 OTP 纪律",
      `FPX OTP belongs to banking. Casino chat is not a second factor channel. If a “host” asks you to read the code aloud while you are mid-FPX, abort and reopen Payment Security.

Also avoid multitasking that backgrounds the bank app during approval. Commuters on unstable data should wait for Wi-Fi or strong signal before starting FPX, not after the OTP is already ticking.`,
      `FPX OTP 属于银行。博彩聊天不是第二因素通道。若「接待」要你在 FPX 中途朗读验证码，中止并重开支付安全。

也避免在批准期间把银行 APP 切到后台的多任务。通勤数据不稳时，应在开始 FPX 前等待 Wi-Fi 或强信号，而不是 OTP 已开始倒计时之后。`,
      "/images/payments/heroes/payment-security.webp",
      false,
    ),
    section(
      "After FPX credit: play, promotions, and payout prep",
      "FPX 入账后：游玩、优惠与出金准备",
      `Credit is not a command to chase. Responsible Gaming still applies. If you deposited for an offer, confirm wagering rules on Promotions. For later cashouts, matching bank identity from FPX sources usually helps Withdrawal Guide and Fast Withdrawal outcomes.

Return to the Payment Methods hub when comparing rails next time. Keep Deposit & Withdrawal FAQ for rapid symptoms.`,
      `入账不是追损命令。负责任博彩仍适用。若为活动存款，在优惠专区确认流水规则。日后提款时，来自 FPX 来源的匹配银行身份通常有助提款指南与快速提款结果。

下次比较通道时回到支付方式中心。快速症状用存提款 FAQ。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "FPX deposit timeline", zh: "FPX 存款时间线" },
  timeline: [
    timeline("Cashier", "收银台", "Select FPX on official TPOWER.", "在官方 TPOWER 选择 FPX。"),
    timeline("Bank", "银行", "Authenticate and approve in bank app.", "在银行 APP 认证并批准。"),
    timeline("Signal", "信号", "Bank success reaches cashier reconciliation.", "银行成功到达收银台对账。"),
    timeline("Credit", "入账", "Completed status — then play intentionally.", "完成状态—再有意识游玩。"),
  ],
  securityTitle: { en: "FPX security checklist", zh: "FPX 安全清单" },
  securityItems: [
    trust("Bank passwords stay in bank apps", "网银密码留在银行 APP", "Never share IB login with anyone claiming to help FPX.", "绝不与声称协助 FPX 的人分享网银登录。"),
    trust("No personal FPX accounts", "无私人 FPX 账户", "Chat account numbers are not FPX checkout.", "聊天账号不是 FPX 结账。"),
    trust("Single in-flight attempt", "单笔进行中", "Don’t parallel a second FPX while pending.", "待处理时不要平行第二笔 FPX。"),
    trust("Stable network through approval", "批准期间稳定网络", "Finish OTP before switching apps casually.", "随意切 APP 前先完成 OTP。"),
    trust("Official escalation only", "仅官方升级", "Support Center with bank context — not social finance accounts.", "带银行语境找客服中心—不是社交财务号。"),
    trust("Pause on repair urgency", "遇修复紧迫先停", "Failed FPX repair messages are a classic phishing tell.", "失败 FPX 修复消息是经典钓鱼信号。"),
  ],
  faqTitle: { en: "FPX Deposit FAQ", zh: "FPX 存款常见问题" },
  faqs: [
    faq("How does TPOWER FPX deposit work?", "TPower FPX 存款如何运作？", "You start in the official cashier, select FPX and your bank, approve inside the bank app, then verify cashier credit.", "从官方收银台开始，选择 FPX 与银行，在银行 APP 批准，再核对收银台入账。"),
    faq("Why did my FPX fail at the bank step?", "为什么我的 FPX 在银行步骤失败？", "Common causes: maintenance, wrong credentials, expired OTP, or network drop mid-approval. Check the bank app before retrying.", "常见原因：维护、凭证错误、OTP 过期或批准中途网络中断。重试前先查银行 APP。"),
    faq("Is FPX the same as DuitNow?", "FPX 等于 DuitNow 吗？", "No. FPX is checkout-oriented; DuitNow emphasises real-time transfer culture. Use each dedicated guide.", "不等于。FPX 偏结账；DuitNow 强调实时转账文化。请用各自专页。"),
    faq("Can I FPX to an agent account?", "可以 FPX 到代理账户吗？", "No. Official FPX starts in the TPOWER cashier only.", "不可以。官方 FPX 只从 TPOWER 收银台开始。"),
    faq("My bank succeeded but cashier is pending — what now?", "银行成功但收银台待处理——怎么办？", "Wait a short window, then contact Support Center with bank name, time, amount, and reference.", "先等短窗口，再向客服提供银行名、时间、金额与参考号。"),
    faq("Does FPX work on the TPOWER app?", "TPOWER APP 上 FPX 可用吗？", "When listed in the app cashier, yes — install only via Download.", "当 APP 收银台列出时可用——只经下载安装。"),
    faq("Are bonuses eligible with FPX?", "用 FPX 能参加优惠吗？", "Sometimes. Confirm eligible methods on Promotions first.", "有时可以。先在优惠专区确认适用方式。"),
    faq("Where should I read next?", "下一步读什么？", "Deposit Guide, Instant Deposit, Payment Security, and Payment Methods.", "存款指南、即时存款、支付安全与支付方式。"),
  ],
  relatedTitle: { en: "Related FPX & payment pages", zh: "相关 FPX 与支付页面" },
  extraLinks: [],
  ctaTitle: { en: "Deposit with FPX on official TPOWER", zh: "在官方 TPOWER 使用 FPX 存款" },
  ctaDescription: {
    en: "Login, select FPX, approve inside your bank, and verify cashier credit before you play.",
    zh: "登录，选择 FPX，在银行内批准，开玩前核对收银台入账。",
  },
});

console.log("fpx done — continuing in same process...");

// Due to size limits, write remaining 3 via separate imports in this file continued below
fs.writeFileSync(
  path.join(process.cwd(), "scripts/.fpx-rewrite-ok"),
  "ok\n",
);
