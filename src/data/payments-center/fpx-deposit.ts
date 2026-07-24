import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentFpxDeposit: PaymentPageContent = {
  id: "fpx-deposit",
  path: "/fpx-deposit",
  heroImage: "/images/payments/heroes/fpx-deposit.webp",
  metaTitle: { en: `TPOWER FPX Deposit | Online Banking Checkout Guide`, zh: `TPower FPX存款｜网银结账入金指南` },
  metaDescription: { en: `Official TPOWER FPX Deposit guide: bank selection, OTP inside your bank app, maintenance realism, cashier status checks, and Malaysia FPX deposit habits.`, zh: `TPOWER线上博彩官方 FPX 存款指南：选银行、在银行 APP 内 OTP、维护现实、收银台状态核对与大马 FPX 入金习惯。` },
  heroTitle: { en: `TPOWER FPX Deposit`, zh: `TPOWER线上博彩 FPX存款` },
  heroSubtitle: { en: `Bank-authenticated checkout — the FPX path Malaysia players already recognise.`, zh: `银行认证结账——大马玩家已熟悉的 FPX 路径。` },
  introduction: { en: `TPOWER FPX Deposit exists for one commercial intent: players searching how FPX funding works on the official cashier. FPX is a bank-authenticated checkout pattern. You choose a participating bank, authenticate in that bank’s world, and return to TPOWER only after the bank confirms the payment intent.

This page will not recycle DuitNow transfer essays, e-wallet PIN stories, or full withdrawal theory. Those belong on [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], and the [[/withdrawal-guide|Withdrawal Guide]]. Shared deposit psychology stays on the [[/deposit-guide|Deposit Guide]]. The catalogue stays on [[/payment-methods|Payment Methods]].

Start only after [[/login|Login]] (or [[/register|Register]]) on the official domain or [[/download|Download]] app. Open cashier → FPX → pick your bank → complete OTP or secure approval inside the bank interface. TPOWER agents never need your IB password. Anyone asking for it fails [[/payment-security|Payment Security]].

FPX nights fail for boring reasons: bank app maintenance, expired OTP, unstable mobile data mid-approval, or selecting a bank you no longer use. Exciting rumours about “agent FPX to personal Maybank” are not FPX — they are phishing. Official Support lives at [[/contact|Support Center]].

Speed expectations after a successful bank confirmation are framed on [[/instant-deposit|Instant Deposit]]. Instant is not a promise that every bank posts identically at 2 a.m. If cashier pending persists beyond a short window, escalate with time, amount, bank name, and reference — do not fire a second FPX while the first is alive.

Promotions may exclude FPX. Read [[/promotions|Promotions]] before topping up solely for a bonus. Budget with [[/responsible-gaming|Responsible Gaming]]. Align identity for later payouts via [[/aml-kyc|AML & KYC]] and [[/fast-withdrawal|Fast Withdrawal]]. Keep [[/blog/how-to-deposit-tpower|deposit blog]], [[/news|News]], [[/faq|FAQ]], and [[/vip|VIP]] in the journey.

Think of FPX as borrowing your bank’s trust UI for a few seconds. The quality of those seconds — correct bank, stable network, single attempt — decides whether TPOWER FPX feels premium or chaotic. Authority is operational clarity, not louder adjectives.

When your preferred bank is offline, switch to a documented backup rail rather than improvising. DuitNow or a daily wallet often saves the evening without inventing unofficial channels. That switching discipline is part of FPX maturity.

Finally, treat every urgent “FPX repair” message as hostile until the official site confirms otherwise. Payment Security and Platform Security exist for that pause. FPX is strongest when it stays boring and official.

FPX literacy includes knowing your bank’s secure approval UX. Soft tokens, SMS OTP, and biometric bank unlocks all count as bank-side truth. Casino chat is never a substitute factor.

If you hold multiple bank apps, decide the primary FPX bank before you open cashier. Indecision mid-flow creates abandoned checkouts that feel like failures when they are simply incomplete.

Corporate or joint accounts can complicate FPX if permissions differ. Prefer personal accounts aligned with your TPOWER identity for smoother later withdrawals.

When FPX succeeds repeatedly, resist the superstition that you must always use FPX even during maintenance. Backup rails exist so loyalty to a logo does not become self-harm.`, zh: `「TPOWER FPX存款」只服务一个商业意图：玩家搜索官方收银台上 FPX 如何入金。FPX 是银行认证结账模式。你选择参与银行，在银行世界里认证，银行确认付款意图后才回到 TPOWER线上博彩。

本页不回收 DuitNow 转账散文、电子钱包 PIN 故事或完整提款理论。那些属于 [[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]] 与 [[/withdrawal-guide|提款指南]]。共用存款心理在 [[/deposit-guide|存款指南]]。目录在 [[/payment-methods|支付方式]]。

只在官方域名或 [[/download|下载]] APP 完成 [[/login|登录]]（或 [[/register|注册]]）后开始。打开收银台 → FPX → 选银行 → 在银行界面完成 OTP 或安全批准。TPOWER 客服从不需要网银密码。任何人索要都通不过 [[/payment-security|支付安全]]。

FPX 夜晚因无聊原因失败：银行 APP 维护、OTP 过期、批准中途移动数据不稳，或选了你已不用的银行。关于「代理 FPX 到私人 Maybank」的刺激谣言不是 FPX——是钓鱼。官方客服在 [[/contact|客服中心]]。

银行确认成功后的速度预期见 [[/instant-deposit|即时存款]]。即时不是承诺每家银行凌晨 2 点入账都一样。若收银台待处理超过短窗口，带时间、金额、银行名与参考号升级——不要在第一笔仍存活时再开第二笔 FPX。

优惠可能排除 FPX。仅为红利充值前读 [[/promotions|优惠专区]]。用 [[/responsible-gaming|负责任博彩]] 预算。经 [[/aml-kyc|AML与KYC]] 与 [[/fast-withdrawal|快速提款]] 为日后提款对齐身份。旅程保留 [[/blog/how-to-deposit-tpower|存款攻略]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]。

把 FPX 想成借用银行信任界面几秒钟。那几秒的质量——正确银行、稳定网络、单次尝试——决定 TPower FPX 感觉高级还是混乱。权威是运营清楚，不是更响的形容词。

偏好银行离线时，切换已说明备用通道，而不是即兴发明。DuitNow 或日常钱包常能挽救夜晚，而无需非官方通道。这种切换纪律属于 FPX 成熟度。

最后，把每条紧迫「FPX 修复」消息先当敌意，直到官网确认相反。支付安全与平台安全就是为了那次停顿。FPX 在保持无聊且官方时最强。

FPX 素养包括了解你银行的安全批准体验。软令牌、短信 OTP 与银行生物识别解锁都算银行侧真相。博彩聊天从来不是替代因素。

若你有多个银行 APP，打开收银台前先决定主 FPX 银行。流程中犹豫会造成半途结账，感觉像失败，其实只是未完成。

公司或联名账户若权限不同可能让 FPX 变复杂。优先使用与 TPOWER 身份对齐的个人账户，以便日后提款更顺。

当 FPX 多次成功时，抵制「维护时也必须用 FPX」的迷信。备用通道存在，是为了不让对 Logo 的忠诚变成自我伤害。` },
  stats: [
    { value: { en: `Bank UI`, zh: `银行界面` }, label: { en: `Approvals happen inside your bank`, zh: `批准发生在你的银行内` } },
    { value: { en: `OTP`, zh: `OTP` }, label: { en: `Never paste codes into casino chat`, zh: `绝不把验证码贴进博彩聊天` } },
    { value: { en: `1 try`, zh: `1次` }, label: { en: `One live FPX attempt at a time`, zh: `同一时间一笔进行中的 FPX` } },
    { value: { en: `Backup`, zh: `备用` }, label: { en: `Switch rails when banks maintain`, zh: `银行维护时切换通道` } },
  ],
  benefitsTitle: { en: `Why FPX remains a TPOWER favourite`, zh: `为何 FPX 仍是 TPOWER 常见选择` },
  benefits: [
{ icon: "building", title: { en: `Familiar bank checkout`, zh: `熟悉的银行结账` }, body: { en: `You reuse the same confirmation posture as other online purchases.`, zh: `复用与其他网购相同的确认姿态。` } },
{ icon: "lock", title: { en: `Authentication boundary`, zh: `认证边界` }, body: { en: `Credentials stay with your bank — not with chat agents.`, zh: `凭证留在银行——不在聊天客服。` } },
{ icon: "eye", title: { en: `Clear success signal path`, zh: `清楚成功信号路径` }, body: { en: `Bank confirms, then cashier reflects credit.`, zh: `银行确认，再由收银台反映入账。` } },
{ icon: "zap", title: { en: `Fast when banks are healthy`, zh: `银行健康时快` }, body: { en: `Good nights feel near-instant after approval.`, zh: `顺利夜晚在批准后接近即时。` } },
{ icon: "shield", title: { en: `Phishing contrast`, zh: `钓鱼对照` }, body: { en: `Real FPX never starts as a personal account number in Telegram.`, zh: `真 FPX 从不从 Telegram 私人账号开始。` } },
{ icon: "check", title: { en: `Supportable failures`, zh: `可支持的失败` }, body: { en: `Bank name + time + amount makes Support Center effective.`, zh: `银行名+时间+金额让客服中心有效。` } }
  ],
  howToTitle: { en: `How to complete a TPOWER FPX deposit`, zh: `如何完成 TPower FPX 存款` },
  howToDescription: { en: `Bank-first steps for Malaysia FPX funding on the official cashier.`, zh: `官方收银台上大马 FPX 入金的银行优先步骤。` },
  howToSteps: [
{ name: { en: `Open official cashier`, zh: `打开官方收银台` }, text: { en: `Login on real TPOWER surfaces and open deposit from navigation.`, zh: `在真实 TPOWER 表面登录，并从导航打开存款。` } },
{ name: { en: `Select FPX and your bank`, zh: `选择 FPX 与银行` }, text: { en: `Pick the bank app you can actually approve tonight.`, zh: `选择今晚你真正能批准的银行。` } },
{ name: { en: `Enter budgeted amount`, zh: `输入预算金额` }, text: { en: `Confirm minimums; avoid last-second bonus panic edits.`, zh: `确认最低额；避免最后一秒红利恐慌改数。` } },
{ name: { en: `Approve inside bank app`, zh: `在银行 APP 内批准` }, text: { en: `Complete OTP/secure login only on the bank surface.`, zh: `只在银行表面完成 OTP/安全登录。` } },
{ name: { en: `Return and verify credit`, zh: `返回并核对入账` }, text: { en: `Confirm cashier completed status before launching games.`, zh: `开游戏前确认收银台完成状态。` } },
{ name: { en: `Escalate with bank context`, zh: `带银行语境升级` }, text: { en: `If pending persists, contact Support Center with bank name, time, amount.`, zh: `若持续待处理，向客服提供银行名、时间、金额。` } }
  ],
  sections: [
{
    title: { en: `What makes FPX different from a plain transfer`, zh: `FPX 与普通转账有何不同` },
    body: { en: `FPX is checkout-shaped. You are not inventing a reference in a vacuum. The bank presents a payment context tied to the merchant session. That is why personal-account “manual FPX” stories are contradictory: they discard the checkout that makes reconciliation possible.

Players who understand this stop arguing with screenshots alone. They ask whether the bank journey completed, then whether the cashier received the signal. Support Center can work that sequence; it cannot work a random personal transfer labelled “FPX” in a chat title.`, zh: `FPX 是结账形态。你不是在真空里发明参考号。银行呈现绑定商户会话的付款语境。这就是为什么私人账户「手动 FPX」故事自相矛盾：它们丢掉了让对账成为可能的结账。

理解这一点的玩家不再只靠截图争吵。他们先问银行旅程是否完成，再问收银台是否收到信号。客服中心能处理该顺序；处理不了聊天标题写成「FPX」的随机私人转账。` },
    imageSrc: "/images/payments/heroes/fpx-deposit.webp",
    imageAlt: { en: `What makes FPX different from a plain transfer`, zh: `FPX 与普通转账有何不同` },
    reverse: false,
  },
{
    title: { en: `Bank maintenance and choosing a backup the smart way`, zh: `银行维护与聪明选择备用` },
    body: { en: `When Maybank or another app is down, the smart move is a different documented rail — DuitNow or a wallet you already fund daily — not a stranger’s account. Compare options on Payment Methods before the stressful minute arrives.

Keep one primary FPX bank and one non-FPX backup. Two FPX banks both offline on the same maintenance night teaches a painful lesson.`, zh: `当 Maybank 或其他 APP 故障时，聪明做法是换一条已说明通道——DuitNow 或你日常已充的钱包——不是陌生人账户。在压力分钟到来前，先在支付方式比较选项。

保持一个主 FPX 银行与一个非 FPX 备用。两个 FPX 银行在同一维护夜都离线，会教给你痛苦一课。` },
    imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
    imageAlt: { en: `Bank maintenance and choosing a backup the smart way`, zh: `银行维护与聪明选择备用` },
    reverse: true,
  },
{
    title: { en: `OTP discipline unique to FPX evenings`, zh: `FPX 夜晚特有的 OTP 纪律` },
    body: { en: `FPX OTP belongs to banking. Casino chat is not a second factor channel. If a “host” asks you to read the code aloud while you are mid-FPX, abort and reopen Payment Security.

Also avoid multitasking that backgrounds the bank app during approval. Commuters on unstable data should wait for Wi-Fi or strong signal before starting FPX, not after the OTP is already ticking.`, zh: `FPX OTP 属于银行。博彩聊天不是第二因素通道。若「接待」要你在 FPX 中途朗读验证码，中止并重开支付安全。

也避免在批准期间把银行 APP 切到后台的多任务。通勤数据不稳时，应在开始 FPX 前等待 Wi-Fi 或强信号，而不是 OTP 已开始倒计时之后。` },
    imageSrc: "/images/payments/heroes/payment-security.webp",
    imageAlt: { en: `OTP discipline unique to FPX evenings`, zh: `FPX 夜晚特有的 OTP 纪律` },
    reverse: false,
  },
{
    title: { en: `After FPX credit: play, promotions, and payout prep`, zh: `FPX 入账后：游玩、优惠与出金准备` },
    body: { en: `Credit is not a command to chase. Responsible Gaming still applies. If you deposited for an offer, confirm wagering rules on Promotions. For later cashouts, matching bank identity from FPX sources usually helps Withdrawal Guide and Fast Withdrawal outcomes.

Return to the Payment Methods hub when comparing rails next time. Keep Deposit & Withdrawal FAQ for rapid symptoms.`, zh: `入账不是追损命令。负责任博彩仍适用。若为活动存款，在优惠专区确认流水规则。日后提款时，来自 FPX 来源的匹配银行身份通常有助提款指南与快速提款结果。

下次比较通道时回到支付方式中心。快速症状用存提款 FAQ。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `After FPX credit: play, promotions, and payout prep`, zh: `FPX 入账后：游玩、优惠与出金准备` },
    reverse: true,
  }
,
  {
    title: { en: `FPX for first-time TPOWER depositors`, zh: `首次 TPOWER 存款者的 FPX` },
    body: { en: `First FPX deposits feel longer because every screen is new. Expect the bank list, the bank login, the OTP, and the return. The second FPX is usually faster because muscle memory returns.

Do not practise first FPX on an unstable bus ride. Practise where you can finish. First-time success builds trust; first-time abandonment builds superstition that “FPX never works.”

After first success, note which bank you used. That note becomes your primary rail for Instant Deposit nights.`, zh: `首次 FPX 存款感觉更长，因为每个屏幕都新。预期银行列表、银行登录、OTP 与返回。第二次 FPX 通常更快，因为肌肉记忆回来了。

不要在不稳的巴士上练习首次 FPX。在能完成的地方练习。首次成功建立信任；首次半途建立「FPX 从不行」的迷信。

首次成功后记下用的银行。该笔记成为即时存款夜晚的主通道。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `FPX for first-time TPOWER depositors`, zh: `首次 TPOWER 存款者的 FPX` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `FPX deposit timeline`, zh: `FPX 存款时间线` },
  timeline: [
{ title: { en: `Cashier`, zh: `收银台` }, body: { en: `Select FPX on official TPOWER.`, zh: `在官方 TPOWER 选择 FPX。` } },
{ title: { en: `Bank`, zh: `银行` }, body: { en: `Authenticate and approve in bank app.`, zh: `在银行 APP 认证并批准。` } },
{ title: { en: `Signal`, zh: `信号` }, body: { en: `Bank success reaches cashier reconciliation.`, zh: `银行成功到达收银台对账。` } },
{ title: { en: `Credit`, zh: `入账` }, body: { en: `Completed status — then play intentionally.`, zh: `完成状态—再有意识游玩。` } }
  ],
  securityTitle: { en: `FPX security checklist`, zh: `FPX 安全清单` },
  securityItems: [
{ title: { en: `Bank passwords stay in bank apps`, zh: `网银密码留在银行 APP` }, body: { en: `Never share IB login with anyone claiming to help FPX.`, zh: `绝不与声称协助 FPX 的人分享网银登录。` } },
{ title: { en: `No personal FPX accounts`, zh: `无私人 FPX 账户` }, body: { en: `Chat account numbers are not FPX checkout.`, zh: `聊天账号不是 FPX 结账。` } },
{ title: { en: `Single in-flight attempt`, zh: `单笔进行中` }, body: { en: `Don’t parallel a second FPX while pending.`, zh: `待处理时不要平行第二笔 FPX。` } },
{ title: { en: `Stable network through approval`, zh: `批准期间稳定网络` }, body: { en: `Finish OTP before switching apps casually.`, zh: `随意切 APP 前先完成 OTP。` } },
{ title: { en: `Official escalation only`, zh: `仅官方升级` }, body: { en: `Support Center with bank context — not social finance accounts.`, zh: `带银行语境找客服中心—不是社交财务号。` } },
{ title: { en: `Pause on repair urgency`, zh: `遇修复紧迫先停` }, body: { en: `Failed FPX repair messages are a classic phishing tell.`, zh: `失败 FPX 修复消息是经典钓鱼信号。` } }
  ],
  faqTitle: { en: `FPX Deposit FAQ`, zh: `FPX 存款常见问题` },
  faqs: [
{ question: { en: `How does TPOWER FPX deposit work?`, zh: `TPower FPX 存款如何运作？` }, answer: { en: `You start in the official cashier, select FPX and your bank, approve inside the bank app, then verify cashier credit.`, zh: `从官方收银台开始，选择 FPX 与银行，在银行 APP 批准，再核对收银台入账。` } },
{ question: { en: `Why did my FPX fail at the bank step?`, zh: `为什么我的 FPX 在银行步骤失败？` }, answer: { en: `Common causes: maintenance, wrong credentials, expired OTP, or network drop mid-approval. Check the bank app before retrying.`, zh: `常见原因：维护、凭证错误、OTP 过期或批准中途网络中断。重试前先查银行 APP。` } },
{ question: { en: `Is FPX the same as DuitNow?`, zh: `FPX 等于 DuitNow 吗？` }, answer: { en: `No. FPX is checkout-oriented; DuitNow emphasises real-time transfer culture. Use each dedicated guide.`, zh: `不等于。FPX 偏结账；DuitNow 强调实时转账文化。请用各自专页。` } },
{ question: { en: `Can I FPX to an agent account?`, zh: `可以 FPX 到代理账户吗？` }, answer: { en: `No. Official FPX starts in the TPOWER cashier only.`, zh: `不可以。官方 FPX 只从 TPOWER 收银台开始。` } },
{ question: { en: `My bank succeeded but cashier is pending — what now?`, zh: `银行成功但收银台待处理——怎么办？` }, answer: { en: `Wait a short window, then contact Support Center with bank name, time, amount, and reference.`, zh: `先等短窗口，再向客服提供银行名、时间、金额与参考号。` } },
{ question: { en: `Does FPX work on the TPOWER app?`, zh: `TPOWER APP 上 FPX 可用吗？` }, answer: { en: `When listed in the app cashier, yes — install only via Download.`, zh: `当 APP 收银台列出时可用——只经下载安装。` } },
{ question: { en: `Are bonuses eligible with FPX?`, zh: `用 FPX 能参加优惠吗？` }, answer: { en: `Sometimes. Confirm eligible methods on Promotions first.`, zh: `有时可以。先在优惠专区确认适用方式。` } },
{ question: { en: `Where should I read next?`, zh: `下一步读什么？` }, answer: { en: `Deposit Guide, Instant Deposit, Payment Security, and Payment Methods.`, zh: `存款指南、即时存款、支付安全与支付方式。` } }
  ],
  relatedTitle: { en: `Related FPX & payment pages`, zh: `相关 FPX 与支付页面` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Deposit with FPX on official TPOWER`, zh: `在官方 TPOWER 使用 FPX 存款` },
  ctaDescription: { en: `Login, select FPX, approve inside your bank, and verify cashier credit before you play.`, zh: `登录，选择 FPX，在银行内批准，开玩前核对收银台入账。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
