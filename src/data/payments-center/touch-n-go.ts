import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentTouchNGo: PaymentPageContent = {
  id: "touch-n-go",
  path: "/touch-n-go",
  heroImage: "/images/payments/heroes/touch-n-go.webp",
  metaTitle: { en: `TPOWER Touch 'n Go eWallet | Mobile Deposit Guide`, zh: `TPower Touch 'n Go电子钱包｜手机存款指南` },
  metaDescription: { en: `Official TPOWER Touch 'n Go guide: wallet balance checks, mobile confirmation, PIN hygiene, cashier flow, and safer TnG deposits for Malaysia players.`, zh: `TPOWER线上博彩官方 Touch 'n Go 指南：钱包余额检查、手机确认、PIN 卫生、收银台流程与更安全的大马 TnG 存款。` },
  heroTitle: { en: `TPOWER Touch 'n Go eWallet`, zh: `TPOWER线上博彩 Touch 'n Go电子钱包` },
  heroSubtitle: { en: `Wallet-native funding for players who already keep MYR in TnG.`, zh: `已把马币放在 TnG 的玩家的钱包原生入金。` },
  introduction: { en: `Touch 'n Go on TPOWER is a wallet-native story. Commuters, parking regulars, and mobile-first adults already trust TnG for daily spend. This guide explains how that trust should transfer into the official cashier — without rewriting GrabPay’s balance narrative or FPX’s bank checkout narrative.

GrabPay depth: [[/grabpay|GrabPay Payments]]. Banking depth: [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/online-banking|Online Banking]]. Shared deposit logic: [[/deposit-guide|Deposit Guide]]. Map: [[/payment-methods|Payment Methods]].

Before you tap TnG in cashier, open the Touch 'n Go app and confirm balance. Mid-flow insufficient balance is the most common “my money vanished” illusion when nothing actually left the wallet.

PIN and biometric approvals stay inside TnG. [[/contact|Support Center]] will not ask for your wallet PIN. Anyone who does is running a [[/payment-security|Payment Security]] incident, not a deposit.

Mobile networks drop. If confirmation dies mid-way, check TnG transaction history before starting a second deposit. Parallel wallet attempts create support noise. Timing mindset: [[/instant-deposit|Instant Deposit]].

Install TPOWER only via [[/download|Download]]. Mirrored APKs that overlay a fake TnG cashier are account-takeover tools. Pair with [[/security|Platform Security]].

Budget with [[/responsible-gaming|Responsible Gaming]]. Check [[/promotions|Promotions]] for wallet eligibility. Prepare payouts with [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]]. Keep [[/login|Login]], [[/register|Register]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]] linked.

TnG authority is tactile: balance first, official cashier second, wallet approval third, cashier credit fourth. Skip any step and the night gets noisy.

Refuse “TnG reload agents” who ask you to transfer to their wallet so they can “credit TPOWER.” That is not Touch 'n Go on TPOWER; that is a proxy risk.

TnG players should treat wallet notifications as secondary. Cashier completed status remains primary for play permission. A wallet push alert without cashier credit is incomplete.

Keep Touch 'n Go updated. Outdated wallet apps fail approvals in ways that look like TPOWER faults. Update hygiene is payment hygiene.

If you use TnG GO+ or related tiers, still follow cashier minimums. Wallet marketing tiers do not rewrite TPOWER deposit floors.

Parking-lot deposits are romantic until signal dies. Fund before you enter basements. That single timing change prevents a surprising share of abandoned TnG attempts.`, zh: `TPOWER 上的 Touch 'n Go 是钱包原生故事。通勤者、常停车的人、手机优先成年人已信任 TnG 日常消费。本指南说明该信任应如何转入官方收银台——不重写 GrabPay 余额叙事或 FPX 银行结账叙事。

GrabPay 深度：[[/grabpay|GrabPay支付]]。银行深度：[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/online-banking|网上银行]]。共用存款逻辑：[[/deposit-guide|存款指南]]。地图：[[/payment-methods|支付方式]]。

在收银台点 TnG 前，打开 Touch 'n Go APP 确认余额。流程中余额不足，是最常见的「钱消失了」错觉——其实钱包并未扣款。

PIN 与生物识别批准留在 TnG 内。[[/contact|客服中心]] 不会要钱包 PIN。任何人索要都是 [[/payment-security|支付安全]] 事故，不是存款。

移动网络会断。若确认中途死亡，开第二笔前先查 TnG 交易历史。平行钱包尝试制造客服噪音。时效心态：[[/instant-deposit|即时存款]]。

TPOWER 只经 [[/download|下载]] 安装。覆盖假 TnG 收银台的镜像 APK 是盗号工具。搭配 [[/security|平台安全]]。

用 [[/responsible-gaming|负责任博彩]] 预算。查 [[/promotions|优惠专区]] 钱包资格。用 [[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]] 准备出金。保留 [[/login|登录]]、[[/register|注册]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]。

TnG 权威是触觉性的：先余额、再官方收银台、再钱包批准、再收银台入账。跳过任一步，夜晚就会吵。

拒绝要你转到他们钱包再「帮你入 TPOWER」的「TnG 代充」。那不是 TPOWER 上的 Touch 'n Go；那是代理风险。

TnG 玩家应把钱包通知当次要。游玩许可仍以收银台完成状态为主。没有收银台入账的钱包推送提醒是不完整的。

保持 Touch 'n Go 更新。过时钱包 APP 会以看起来像 TPOWER 故障的方式失败批准。更新卫生就是支付卫生。

若使用 TnG GO+ 或相关层级，仍遵循收银台最低额。钱包营销层级不会改写 TPOWER 存款底线。

停车场存款很浪漫，直到信号死亡。进入地库前先入金。这一时机改变能防止相当比例的半途 TnG 尝试。` },
  stats: [
    { value: { en: `Balance`, zh: `余额` }, label: { en: `Check TnG funds before cashier`, zh: `收银台前检查 TnG 资金` } },
    { value: { en: `PIN`, zh: `PIN` }, label: { en: `Wallet secrets never enter chat`, zh: `钱包机密从不进入聊天` } },
    { value: { en: `Mobile`, zh: `手机` }, label: { en: `Stable data through confirmation`, zh: `确认期间稳定数据` } },
    { value: { en: `History`, zh: `历史` }, label: { en: `Read TnG history before retry`, zh: `重试前阅读 TnG 历史` } },
  ],
  benefitsTitle: { en: `Why Touch 'n Go works on TPOWER nights`, zh: `为何 Touch 'n Go 适合 TPOWER 夜晚` },
  benefits: [
{ icon: "wallet", title: { en: `Phone-first funding`, zh: `手机优先入金` }, body: { en: `No laptop required when TnG already holds your balance.`, zh: `TnG 已有余额时无需笔记本。` } },
{ icon: "zap", title: { en: `Quick confirmation UX`, zh: `快速确认体验` }, body: { en: `Familiar wallet approvals shorten the path to credit.`, zh: `熟悉的钱包批准缩短入账路径。` } },
{ icon: "shield", title: { en: `Clear anti-proxy rules`, zh: `清楚的反代理规则` }, body: { en: `Official TnG never means paying a stranger’s wallet first.`, zh: `官方 TnG 从不意味着先付陌生人钱包。` } },
{ icon: "eye", title: { en: `Transaction history truth`, zh: `交易历史真相` }, body: { en: `TnG history settles “did it debit?” arguments quickly.`, zh: `TnG 历史快速结算「是否扣款」争论。` } },
{ icon: "lock", title: { en: `PIN boundary`, zh: `PIN 边界` }, body: { en: `Approvals stay in Touch 'n Go — not in casino DMs.`, zh: `批准留在 Touch 'n Go——不在博彩私信。` } },
{ icon: "check", title: { en: `Supportable labels`, zh: `可支持标签` }, body: { en: `Saying “Touch 'n Go” + time + amount helps Support Center.`, zh: `说明「Touch 'n Go」+时间+金额帮助客服中心。` } }
  ],
  howToTitle: { en: `How to deposit with Touch 'n Go on TPOWER`, zh: `如何在 TPOWER 用 Touch 'n Go 存款` },
  howToDescription: { en: `Wallet-first steps emphasising balance checks and PIN privacy.`, zh: `强调余额检查与 PIN 隐私的钱包优先步骤。` },
  howToSteps: [
{ name: { en: `Confirm TnG balance`, zh: `确认 TnG 余额` }, text: { en: `Top up TnG via official Touch 'n Go channels if needed.`, zh: `若需要，经 Touch 'n Go 官方渠道充值。` } },
{ name: { en: `Login to official TPOWER`, zh: `登录官方 TPOWER` }, text: { en: `Web or Download app — not mirrored packages.`, zh: `网页或下载 APP——不是镜像包。` } },
{ name: { en: `Select Touch 'n Go in cashier`, zh: `在收银台选择 Touch 'n Go` }, text: { en: `Only when listed for your session.`, zh: `仅当会话列出时。` } },
{ name: { en: `Approve inside TnG`, zh: `在 TnG 内批准` }, text: { en: `Use PIN/biometric in the wallet app only.`, zh: `只在钱包 APP 使用 PIN/生物识别。` } },
{ name: { en: `Verify cashier credit`, zh: `核对收银台入账` }, text: { en: `Confirm completed before opening games.`, zh: `开游戏前确认完成。` } },
{ name: { en: `Escalate with wallet context`, zh: `带钱包语境升级` }, text: { en: `If stuck, send time, amount, and Touch 'n Go label to Support Center.`, zh: `若卡住，向客服发送时间、金额与 Touch 'n Go 标签。` } }
  ],
  sections: [
{
    title: { en: `Balance-first discipline unique to wallets`, zh: `钱包特有的余额优先纪律` },
    body: { en: `Bank rails often fail on maintenance. Wallet rails often fail on empty balances. Checking TnG before cashier prevents the most common false emergency.

If you must reload TnG, reload inside Touch 'n Go’s own ecosystem — not via a casino chat agent offering “TnG credit packages.”`, zh: `银行通道常因维护失败。钱包通道常因余额空失败。收银台前检查 TnG 可防止最常见的假紧急。

若必须给 TnG 充值，在 Touch 'n Go 自己的生态内充——不是经博彩聊天代理推销「TnG 入账套餐」。` },
    imageSrc: "/images/payments/heroes/touch-n-go.webp",
    imageAlt: { en: `Balance-first discipline unique to wallets`, zh: `钱包特有的余额优先纪律` },
    reverse: false,
  },
{
    title: { en: `Dropped mobile confirmations`, zh: `中断的手机确认` },
    body: { en: `LRT tunnels and parking basements kill wallet confirmations. When that happens, open TnG history. Debited? Wait for cashier. Not debited? Restart one clean attempt.

Instant Deposit covers the urge to mash retry. This page covers the wallet evidence that makes retry safe.`, zh: `LRT 隧道与停车场地库会杀死钱包确认。发生时打开 TnG 历史。已扣款？等收银台。未扣款？重开一笔干净尝试。

即时存款覆盖狂按重试的冲动。本页覆盖让重试变安全的钱包证据。` },
    imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
    imageAlt: { en: `Dropped mobile confirmations`, zh: `中断的手机确认` },
    reverse: true,
  },
{
    title: { en: `TnG vs GrabPay — why separate pages exist`, zh: `TnG vs GrabPay——为何分专页` },
    body: { en: `Both are e-wallets; both are not interchangeable essays. TnG habits around parking and transit differ from GrabPay habits around rides and food. Separate authority pages prevent thin duplicate landings and help search intent land correctly.`, zh: `两者都是电子钱包；两者不是可互换散文。TnG 围绕停车与通勤的习惯，不同于 GrabPay 围绕出行与餐饮的习惯。分开权威页防止单薄重复着陆，并帮助搜索意图正确落地。` },
    imageSrc: "/images/payments/heroes/grabpay.webp",
    imageAlt: { en: `TnG vs GrabPay — why separate pages exist`, zh: `TnG vs GrabPay——为何分专页` },
    reverse: false,
  },
{
    title: { en: `After TnG credit`, zh: `TnG 入账之后` },
    body: { en: `Play within budget. If depositing for promotions, confirm wallet eligibility. For cashouts later, keep identity consistent. Payment Security remains the threat page whenever someone invents a TnG shortcut.`, zh: `按预算游玩。为优惠存款时确认钱包资格。日后提款保持身份一致。每当有人发明 TnG 捷径，支付安全仍是威胁专页。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `After TnG credit`, zh: `TnG 入账之后` },
    reverse: true,
  }
,
  {
    title: { en: `TnG deposits during commute windows`, zh: `通勤窗口中的 TnG 存款` },
    body: { en: `Commute windows are TnG’s natural habitat and also its failure habitat. Signal flaps. Approvals die. The fix is timing: fund at the office Wi-Fi or home Wi-Fi edges of the commute, not in the worst tunnel segment.

If you must fund mid-commute, wait for a stable stretch, complete TnG approval in one breath, then verify cashier before the next station announcement distracts you.`, zh: `通勤窗口是 TnG 的自然栖息地，也是失败栖息地。信号抖动。批准死亡。修复是时机：在通勤两端的办公室或家庭 Wi-Fi 入金，而不是最差隧道段。

若必须在通勤中入金，等待稳定路段，一口气完成 TnG 批准，再在下一站广播分心前核对收银台。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `TnG deposits during commute windows`, zh: `通勤窗口中的 TnG 存款` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `Touch 'n Go deposit timeline`, zh: `Touch 'n Go 存款时间线` },
  timeline: [
{ title: { en: `Balance`, zh: `余额` }, body: { en: `Confirm TnG funds.`, zh: `确认 TnG 资金。` } },
{ title: { en: `Cashier`, zh: `收银台` }, body: { en: `Select Touch 'n Go officially.`, zh: `官方选择 Touch 'n Go。` } },
{ title: { en: `Approve`, zh: `批准` }, body: { en: `PIN/biometric inside TnG.`, zh: `在 TnG 内 PIN/生物识别。` } },
{ title: { en: `Credit`, zh: `入账` }, body: { en: `Cashier completed — then play.`, zh: `收银台完成—再游玩。` } }
  ],
  securityTitle: { en: `Touch 'n Go security checklist`, zh: `Touch 'n Go 安全清单` },
  securityItems: [
{ title: { en: `No wallet PIN sharing`, zh: `不分享钱包 PIN` }, body: { en: `Ever — including “VIP hosts.”`, zh: `永远——包括「VIP 接待」。` } },
{ title: { en: `No reload agents`, zh: `无代充` }, body: { en: `Top up TnG via official wallet channels only.`, zh: `只经官方钱包渠道给 TnG 充值。` } },
{ title: { en: `Official TPOWER app only`, zh: `仅官方 TPOWER APP` }, body: { en: `Download hub path — reject mirrored APKs.`, zh: `下载中心路径—拒绝镜像 APK。` } },
{ title: { en: `History before retry`, zh: `重试前看历史` }, body: { en: `Prevent duplicate wallet debits.`, zh: `防止重复钱包扣款。` } },
{ title: { en: `Stable signal`, zh: `稳定信号` }, body: { en: `Start TnG deposits where data holds.`, zh: `在数据稳定处开始 TnG 存款。` } },
{ title: { en: `Support with labels`, zh: `带标签找客服` }, body: { en: `Method name Touch 'n Go + time + amount.`, zh: `方式名 Touch 'n Go +时间+金额。` } }
  ],
  faqTitle: { en: `Touch 'n Go FAQ`, zh: `Touch 'n Go 常见问题` },
  faqs: [
{ question: { en: `How do I deposit with Touch 'n Go on TPOWER?`, zh: `如何在 TPOWER 用 Touch 'n Go 存款？` }, answer: { en: `Confirm TnG balance, login officially, select Touch 'n Go in cashier, approve in TnG, verify credit.`, zh: `确认 TnG 余额，官方登录，收银台选择 Touch 'n Go，在 TnG 批准，核对入账。` } },
{ question: { en: `Why did my TnG deposit fail?`, zh: `为什么 TnG 存款失败？` }, answer: { en: `Insufficient balance, network drop, cancelled approval, or temporary unavailability. Check TnG history before retrying.`, zh: `余额不足、网络中断、取消批准或暂时不可用。重试前查 TnG 历史。` } },
{ question: { en: `Can I pay a person’s TnG for TPOWER credit?`, zh: `可以付到某人的 TnG 换 TPOWER 入账吗？` }, answer: { en: `No. Official credit starts in the TPOWER cashier only.`, zh: `不可以。官方入账只从 TPOWER 收银台开始。` } },
{ question: { en: `Is Touch 'n Go the same as GrabPay on TPOWER?`, zh: `TPOWER 上 Touch 'n Go 等于 GrabPay 吗？` }, answer: { en: `No. Separate guides exist because habits and failure modes differ.`, zh: `不等于。因习惯与失败模式不同而分专页。` } },
{ question: { en: `Does TnG work in the TPOWER app?`, zh: `TPOWER APP 上 TnG 可用吗？` }, answer: { en: `When listed in the app cashier — install only via Download.`, zh: `当 APP 收银台列出时——只经下载安装。` } },
{ question: { en: `Are promotions eligible with TnG?`, zh: `用 TnG 能参加优惠吗？` }, answer: { en: `Sometimes. Confirm on Promotions before depositing for an offer.`, zh: `有时可以。为活动存款前在优惠专区确认。` } },
{ question: { en: `What if cashier is pending after TnG success?`, zh: `TnG 成功后收银台待处理怎么办？` }, answer: { en: `Wait briefly, then contact Support Center with time, amount, and Touch 'n Go as method.`, zh: `稍等，再向客服提供时间、金额，并说明方式为 Touch 'n Go。` } },
{ question: { en: `Where next?`, zh: `下一步？` }, answer: { en: `Payment Methods, Deposit Guide, GrabPay page, Payment Security.`, zh: `支付方式、存款指南、GrabPay 页、支付安全。` } }
  ],
  relatedTitle: { en: `Related wallet & payment pages`, zh: `相关钱包与支付页面` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Fund with Touch 'n Go officially`, zh: `用官方 Touch 'n Go 入金` },
  ctaDescription: { en: `Check balance, login, approve inside TnG, and verify cashier credit before you play.`, zh: `检查余额、登录、在 TnG 内批准，开玩前核对收银台入账。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
