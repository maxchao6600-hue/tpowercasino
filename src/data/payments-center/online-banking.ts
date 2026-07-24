import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentOnlineBanking: PaymentPageContent = {
  id: "online-banking",
  path: "/online-banking",
  heroImage: "/images/payments/heroes/online-banking.webp",
  metaTitle: { en: `TPOWER Online Banking | Bank Transfer & IB Habits`, zh: `TPower网上银行｜银行转账与网银习惯` },
  metaDescription: { en: `TPOWER Online Banking guide: internet banking habits, transfer references, maintenance windows, OTP discipline, and safer bank-funded deposits in Malaysia.`, zh: `TPOWER线上博彩网上银行指南：网银习惯、转账参考号、维护窗口、OTP 纪律，以及更安全的大马银行入金。` },
  heroTitle: { en: `TPOWER Online Banking`, zh: `TPOWER线上博彩 网上银行` },
  heroSubtitle: { en: `Bank-app discipline for players who fund TPOWER the way they pay serious bills.`, zh: `像缴重要账单一样，用网银纪律为 TPOWER 入金。` },
  introduction: { en: `TPOWER Online Banking is the authority page for internet-banking mindsets — not a duplicate of FPX checkout marketing and not a DuitNow twin. Online banking here means the broader habit set: logging into your bank safely, reading maintenance notices, copying references carefully, and refusing chat-based account numbers that pretend to be “manual IB deposits.”

FPX-specific checkout lives on [[/fpx-deposit|FPX Deposit]]. Real-time push culture lives on [[/duitnow-deposit|DuitNow Deposit]]. Wallets live on [[/touch-n-go|Touch 'n Go]] and [[/grabpay|GrabPay Payments]]. Shared deposit theory: [[/deposit-guide|Deposit Guide]]. Catalogue: [[/payment-methods|Payment Methods]].

Always begin from the official cashier after [[/login|Login]]. If the cashier shows bank details for a session, treat them as session-bound. Do not reuse yesterday’s screenshot from a group chat. That pattern fails [[/payment-security|Payment Security]].

OTP and secure-plus devices stay in your bank’s world. TPOWER will not ask you to forward SMS codes. [[/security|Platform Security]] explains why urgency around “IB unlock” is hostile.

Maintenance windows are normal. When your bank is offline, switch to a documented backup rail instead of unofficial agents. Timing expectations: [[/instant-deposit|Instant Deposit]]. Payouts later: [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]].

Budget with [[/responsible-gaming|Responsible Gaming]]. Confirm offers on [[/promotions|Promotions]]. Install only via [[/download|Download]]. Escalate via [[/contact|Support Center]] with bank name, time, amount, and reference. Keep [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/vip|VIP]], [[/register|Register]] in the journey.

Online banking maturity includes reading bank push notifications. A declined IB attempt should be read in the bank app before you assume TPOWER rejected you. Many declines are bank-side fraud controls on unfamiliar merchant patterns — retry calmly or switch rails.

Joint account signatories should confirm who can approve transfers before starting a TPOWER banking deposit. Half-approved transfers create confusing pending stories.

Keep your bank’s official app from sideloaded stores. Compromised IB apps turn every casino deposit into an account-takeover risk unrelated to TPOWER’s cashier.

When typing account numbers, use copy-paste from cashier when offered, then visually verify length and last digits. Manual retyping errors are classic IB pain.`, zh: `「TPOWER网上银行」是网银心态的权威页——不是 FPX 结账营销的复制，也不是 DuitNow 双胞胎。这里的网上银行指更广的习惯：安全登录银行、阅读维护通知、仔细复制参考号、拒绝伪装「手动网银存款」的聊天账号。

FPX 专属结账在 [[/fpx-deposit|FPX存款]]。实时推送文化在 [[/duitnow-deposit|DuitNow存款]]。钱包在 [[/touch-n-go|Touch 'n Go]] 与 [[/grabpay|GrabPay支付]]。共用存款理论：[[/deposit-guide|存款指南]]。目录：[[/payment-methods|支付方式]]。

请在 [[/login|登录]] 后从官方收银台开始。若收银台显示当次银行资料，视为会话绑定。不要复用群聊里昨天的截图。该模式通不过 [[/payment-security|支付安全]]。

OTP 与 secure-plus 设备留在银行世界。TPOWER 不会要你转发短信验证码。[[/security|平台安全]] 解释为何围绕「网银解锁」的紧迫感是敌意。

维护窗口正常。银行离线时，切换已说明备用通道，而不是非官方代理。时效预期：[[/instant-deposit|即时存款]]。日后提款：[[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]]。

用 [[/responsible-gaming|负责任博彩]] 预算。在 [[/promotions|优惠专区]] 确认活动。只经 [[/download|下载]] 安装。向 [[/contact|客服中心]] 升级时带银行名、时间、金额与参考号。旅程中保留 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]、[[/register|注册]]。

网上银行成熟度包括阅读银行推送通知。被拒的网银尝试应先在银行 APP 阅读，再假定 TPOWER 拒绝了你。许多拒绝是银行侧对陌生商户模式的风控——冷静重试或换通道。

联名账户签署人应在开始 TPOWER 银行存款前确认谁能批准转账。半批准转账会造成混乱的待处理故事。

不要从非官方商店安装银行 APP。被入侵的网银 APP 会让每笔博彩存款变成与 TPOWER 收银台无关的盗号风险。

输入账号时，若收银台提供则复制粘贴，再目视核对长度与末几位。手动重打错误是经典网银痛苦。` },
  stats: [
    { value: { en: `IB`, zh: `网银` }, label: { en: `Internet banking habit set`, zh: `网上银行习惯集` } },
    { value: { en: `Window`, zh: `窗口` }, label: { en: `Respect bank maintenance reality`, zh: `尊重银行维护现实` } },
    { value: { en: `Ref`, zh: `参考` }, label: { en: `Transfer references for support`, zh: `供客服用的转账参考号` } },
    { value: { en: `OTP`, zh: `OTP` }, label: { en: `Codes never forwarded to agents`, zh: `验证码从不转发给客服` } },
  ],
  benefitsTitle: { en: `Online banking strengths on TPOWER`, zh: `TPOWER 网上银行的优势` },
  benefits: [
{ icon: "building", title: { en: `Bank-grade familiarity`, zh: `银行级熟悉度` }, body: { en: `You reuse the same careful posture as bill payments.`, zh: `复用与缴账单相同的谨慎姿态。` } },
{ icon: "file", title: { en: `Reference discipline`, zh: `参考号纪律` }, body: { en: `Saved references make Support Center cases solvable.`, zh: `保存的参考号让客服个案可解。` } },
{ icon: "lock", title: { en: `OTP boundary`, zh: `OTP 边界` }, body: { en: `Authentication stays inside your bank — not in casino chat.`, zh: `认证留在银行内——不在博彩聊天。` } },
{ icon: "eye", title: { en: `Maintenance awareness`, zh: `维护意识` }, body: { en: `Knowing windows prevents panic switching to unofficial rails.`, zh: `了解窗口可避免恐慌切到非官方通道。` } },
{ icon: "shield", title: { en: `Session-bound details`, zh: `会话绑定资料` }, body: { en: `Cashier instructions beat recycled group screenshots.`, zh: `收银台指示胜过回收的群截图。` } },
{ icon: "check", title: { en: `Identity continuity`, zh: `身份连续` }, body: { en: `Banking from matching names helps later withdrawals.`, zh: `从匹配姓名的银行入金有助日后提款。` } }
  ],
  howToTitle: { en: `How to fund via online banking on TPOWER`, zh: `如何在 TPOWER 用网上银行入金` },
  howToDescription: { en: `A careful IB-oriented deposit sequence for Malaysia players.`, zh: `面向大马玩家的谨慎网银入金步骤。` },
  howToSteps: [
{ name: { en: `Login to TPOWER officially`, zh: `官方登录 TPOWER` }, text: { en: `Use official domain or Download app — not search ads under pressure.`, zh: `使用官方域名或下载 APP——不要在压力下点搜索广告。` } },
{ name: { en: `Open cashier banking option`, zh: `打开收银台银行选项` }, text: { en: `Select the online banking / bank transfer style option shown live.`, zh: `选择现场显示的网上银行/银行转账类选项。` } },
{ name: { en: `Copy session details carefully`, zh: `仔细复制会话资料` }, text: { en: `Enter amounts and references exactly as cashier instructs for this attempt.`, zh: `金额与参考号严格按当次收银台指示。` } },
{ name: { en: `Approve inside your bank app`, zh: `在银行 APP 内批准` }, text: { en: `Complete IB login and OTP on your bank surface only.`, zh: `只在银行表面完成网银登录与 OTP。` } },
{ name: { en: `Verify cashier credit`, zh: `核对收银台入账` }, text: { en: `Confirm completed status before launching games.`, zh: `开游戏前确认完成状态。` } },
{ name: { en: `Support with bank references`, zh: `带银行参考号找客服` }, text: { en: `If pending persists, contact Support Center with time, amount, bank, reference.`, zh: `若持续待处理，向客服提供时间、金额、银行、参考号。` } }
  ],
  sections: [
{
    title: { en: `Internet banking vs chat “manual deposit”`, zh: `网上银行 vs 聊天「手动存款」` },
    body: { en: `Real online banking on TPOWER is mediated by the cashier. Fake manual deposit is a person sending you an account number over chat. The first produces reconciliable signals; the second produces screenshots and arguments.

If someone says online banking is “down so use this personal Maybank/CIMB account,” treat it as hostile until Support Center confirms on official channels. Payment Methods will never list random personal accounts as rails.`, zh: `TPOWER 上真正的网上银行由收银台中介。假手动存款是有人在聊天发账号。前者产生可对账信号；后者产生截图与争吵。

若有人说网上银行「挂了所以用这个私人 Maybank/CIMB 账户」，在客服中心于官方渠道确认前视为敌意。支付方式永远不会把随机私人账户列为通道。` },
    imageSrc: "/images/payments/heroes/online-banking.webp",
    imageAlt: { en: `Internet banking vs chat “manual deposit”`, zh: `网上银行 vs 聊天「手动存款」` },
    reverse: false,
  },
{
    title: { en: `Maintenance, cut-offs, and calm switching`, zh: `维护、截点与冷静切换` },
    body: { en: `Banks publish maintenance. Players who read notices waste less money on failed attempts. When IB is unavailable, switch to DuitNow or an e-wallet you already documented — not to a stranger.

Cut-offs also affect how soon you see credit after unusual hours. Instant Deposit explains expectation framing without promising every 3 a.m. attempt is identical.`, zh: `银行会公布维护。阅读通知的玩家更少把钱浪费在失败尝试上。网银不可用时，切换到你已记录的 DuitNow 或电子钱包——不是陌生人。

截点也影响非常规时段入账可见速度。即时存款解释预期框架，但不承诺每个凌晨 3 点尝试都一样。` },
    imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
    imageAlt: { en: `Maintenance, cut-offs, and calm switching`, zh: `维护、截点与冷静切换` },
    reverse: true,
  },
{
    title: { en: `References, evidence, and withdrawals later`, zh: `参考号、证据与日后提款` },
    body: { en: `Save transfer references. They are the difference between a 10-minute support case and a day of ambiguity. Align banking identity with AML & KYC so Withdrawal Guide requests do not stall on name mismatch.

Online banking players often fund larger amounts. Larger patterns can trigger verification earlier — completing it calmly is part of banking maturity, not an insult.`, zh: `保存转账参考号。它们决定客服个案是 10 分钟还是一天模糊。将银行身份与 AML 与 KYC 对齐，避免提款指南申请卡在姓名不符。

网银玩家常入金较大。较大模式可能更早触发核验——平静完成是银行成熟度的一部分，不是侮辱。` },
    imageSrc: "/images/payments/heroes/withdrawal-guide.webp",
    imageAlt: { en: `References, evidence, and withdrawals later`, zh: `参考号、证据与日后提款` },
    reverse: false,
  },
{
    title: { en: `Cluster position for TPOWER Banking intent`, zh: `TPower 银行意图的集群位置` },
    body: { en: `This page captures TPOWER Banking / online banking commercial intent. Cross-link to Payment Security for phishing, Deposit & Withdrawal FAQ for rapid answers, and Fast Withdrawal for payout speed talk after you finish playing.`, zh: `本页承接 TPower 银行/网上银行商业意图。交叉链接支付安全谈钓鱼、存提款 FAQ 谈快速答案、快速提款谈玩完后的出金速度。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Cluster position for TPOWER Banking intent`, zh: `TPower 银行意图的集群位置` },
    reverse: true,
  }
,
  {
    title: { en: `IB deposits for higher amounts`, zh: `较高金额的网银存款` },
    body: { en: `Higher IB amounts attract more bank-side scrutiny and more phishing attention. Use trusted networks, verify cashier details twice, and avoid publicising large deposits in group chats.

If your bank asks extra verification for merchant payments, complete it inside the bank — never by sharing screens with remote helpers claiming to be TPOWER staff.`, zh: `较高网银金额吸引更多银行侧审查与更多钓鱼注意。使用可信网络，两次核对接收银台资料，避免在群聊炫耀大额存款。

若银行为商户付款要求额外验证，在银行内完成——绝不与声称是 TPOWER 职员的远程助手共享屏幕。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `IB deposits for higher amounts`, zh: `较高金额的网银存款` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `Online banking deposit timeline`, zh: `网上银行存款时间线` },
  timeline: [
{ title: { en: `Prepare`, zh: `准备` }, body: { en: `Check bank app health and your budget.`, zh: `检查银行 APP 健康与预算。` } },
{ title: { en: `Instruct`, zh: `指示` }, body: { en: `Read live cashier banking instructions.`, zh: `阅读现场收银台银行指示。` } },
{ title: { en: `Transfer`, zh: `转账` }, body: { en: `Complete IB approval with OTP in bank app.`, zh: `在银行 APP 用 OTP 完成网银批准。` } },
{ title: { en: `Reconcile`, zh: `对账` }, body: { en: `Confirm cashier credit; save references if delayed.`, zh: `确认收银台入账；延迟则保存参考号。` } }
  ],
  securityTitle: { en: `Online banking security checklist`, zh: `网上银行安全清单` },
  securityItems: [
{ title: { en: `No forwarded OTP`, zh: `不转发 OTP` }, body: { en: `SMS or token codes stay on your device.`, zh: `短信或令牌验证码留在你的设备。` } },
{ title: { en: `No personal IB accounts`, zh: `无私人网银账户` }, body: { en: `Chat account numbers are not online banking methods.`, zh: `聊天账号不是网上银行方式。` } },
{ title: { en: `Bookmark official TPOWER`, zh: `收藏官方 TPOWER` }, body: { en: `Avoid search-ad mirrors before banking.`, zh: `网银前避开搜索广告镜像。` } },
{ title: { en: `One transfer attempt`, zh: `一次转账尝试` }, body: { en: `Confirm debit status before repeating.`, zh: `重复前先确认扣款状态。` } },
{ title: { en: `Trusted network`, zh: `可信网络` }, body: { en: `Prefer controlled networks for large IB deposits.`, zh: `大额网银存款优先可控网络。` } },
{ title: { en: `Support with bank refs`, zh: `带银行参考找客服` }, body: { en: `References beat emotional urgency.`, zh: `参考号胜过情绪紧迫。` } }
  ],
  faqTitle: { en: `Online Banking FAQ`, zh: `网上银行常见问题` },
  faqs: [
{ question: { en: `What is TPOWER Online Banking?`, zh: `什么是 TPower 网上银行？` }, answer: { en: `It is funding via internet banking habits through the official cashier — not personal accounts shared in chat.`, zh: `经官方收银台用网银习惯入金——不是聊天分享的私人账户。` } },
{ question: { en: `Is online banking the same as FPX?`, zh: `网上银行等于 FPX 吗？` }, answer: { en: `Related but not identical. FPX has a dedicated checkout guide; this page covers broader IB discipline and manual-style risks.`, zh: `相关但不完全相同。FPX 有专属结账指南；本页覆盖更广网银纪律与手动式风险。` } },
{ question: { en: `What if my bank is under maintenance?`, zh: `若银行维护怎么办？` }, answer: { en: `Wait or switch to another documented rail such as DuitNow or an e-wallet — not an agent account.`, zh: `等待或切换到 DuitNow、电子钱包等已说明通道——不是代理账户。` } },
{ question: { en: `Do I need a transfer reference?`, zh: `需要转账参考号吗？` }, answer: { en: `When the flow uses references, copy them exactly and save them for Support Center.`, zh: `当流程使用参考号时，精确复制并为客服保存。` } },
{ question: { en: `Can support ask for my IB password?`, zh: `客服可以要网银密码吗？` }, answer: { en: `No. Official TPOWER never needs your bank login password.`, zh: `不可以。官方 TPOWER 从不需要你的银行登录密码。` } },
{ question: { en: `How does this affect withdrawals?`, zh: `这对提款有何影响？` }, answer: { en: `Depositing from matching bank identity usually smooths later payouts on the Withdrawal Guide.`, zh: `从匹配银行身份存款通常让日后提款指南出金更顺。` } },
{ question: { en: `Is online banking available on the app?`, zh: `APP 上有网上银行吗？` }, answer: { en: `When listed in the app cashier, yes — same official rules as web.`, zh: `当 APP 收银台列出时有——与网页同一官方规则。` } },
{ question: { en: `Where else should I read?`, zh: `还应读哪些？` }, answer: { en: `Payment Methods, Payment Security, Deposit Guide, and Deposit & Withdrawal FAQ.`, zh: `支付方式、支付安全、存款指南与存提款常见问题。` } }
  ],
  relatedTitle: { en: `Related banking guides`, zh: `相关银行指南` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Bank carefully on official TPOWER`, zh: `在官方 TPOWER 谨慎网银入金` },
  ctaDescription: { en: `Login, follow live cashier banking instructions, and keep OTP inside your bank app.`, zh: `登录，遵循现场收银台银行指示，并把 OTP 留在银行 APP 内。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
