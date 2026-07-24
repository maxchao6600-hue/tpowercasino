import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentGrabPay: PaymentPageContent = {
  id: "grabpay",
  path: "/grabpay",
  heroImage: "/images/payments/heroes/grabpay.webp",
  metaTitle: { en: `TPOWER GrabPay Payments | E-Wallet Deposit Guide`, zh: `TPower GrabPay支付｜电子钱包存款指南` },
  metaDescription: { en: `Official TPOWER GrabPay Payments guide: balance-funded deposits, Grab confirmation flow, anti-proxy habits, and safer GrabPay funding for Malaysia players.`, zh: `TPOWER线上博彩官方 GrabPay 支付指南：余额入金、Grab 确认流程、反代理习惯，以及大马玩家更安全的 GrabPay 入金。` },
  heroTitle: { en: `TPOWER GrabPay Payments`, zh: `TPOWER线上博彩 GrabPay支付` },
  heroSubtitle: { en: `Use the GrabPay balance you already spend on rides and food — on official TPOWER rails only.`, zh: `用你已在出行与餐饮花费的 GrabPay 余额——仅限官方 TPOWER 通道。` },
  introduction: { en: `TPOWER GrabPay Payments targets players whose liquid MYR already sits in GrabPay. The mental model is balance-funded entertainment top-ups after a normal day of Grab use — not a clone of Touch 'n Go parking culture and not a bank checkout lecture.

TnG guide: [[/touch-n-go|Touch 'n Go]]. Banking guides: [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/online-banking|Online Banking]]. Deposit theory: [[/deposit-guide|Deposit Guide]]. Hub: [[/payment-methods|Payment Methods]].

Open Grab and confirm GrabPay balance before cashier. If balance is short, reload inside Grab’s own channels. “GrabPay agent reload for casino” chats are proxies, not methods — see [[/payment-security|Payment Security]].

Complete confirmation inside Grab’s flow after selecting GrabPay in the official cashier ([[/login|Login]] / [[/download|Download]]). Never send GrabPay to a personal phone number that claims to be TPOWER finance.

If Grab shows success and cashier pending, wait a short window, then escalate to [[/contact|Support Center]] with time and amount. Do not double-pay. Timing frame: [[/instant-deposit|Instant Deposit]].

Responsible spend still applies ([[/responsible-gaming|Responsible Gaming]]). Bonus eligibility: [[/promotions|Promotions]]. Payouts: [[/withdrawal-guide|Withdrawal Guide]], [[/fast-withdrawal|Fast Withdrawal]], [[/aml-kyc|AML & KYC]]. Cluster: [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/register|Register]].

GrabPay authority on TPOWER is lifestyle continuity: the same wallet, a different official merchant surface, zero personal intermediaries.

Riders who tip in GrabPay already understand balance discipline. Bring that discipline to deposits and you avoid most false emergencies.

When GrabPay is missing from cashier, ask Support Center — do not accept a personal GrabPay number as a substitute rail.

GrabPay users often deposit after rides. That timing can mean low attention. Build a ritual: open Grab balance, open TPOWER cashier, select GrabPay, confirm, verify credit, then play. Rituals beat improvisation after midnight food orders.

If GrabPay is linked to cards or other funding sources inside Grab, understand that TPOWER still sees a GrabPay method — follow Grab’s own security for those hinterland sources.

Refuse “GrabPay cash-in agents” near entertainment venues who claim partner status. Official partnership is expressed through cashier listing, not street flyers.

When travelling between states, watch for network switches mid-confirmation. Pause GrabPay deposits until signal stabilises.`, zh: `「TPOWER GrabPay支付」面向流动马币已在 GrabPay 的玩家。心智模型是平常使用 Grab 之后的余额娱乐充值——不是 Touch 'n Go 停车文化的克隆，也不是银行结账讲义。

TnG 指南：[[/touch-n-go|Touch 'n Go]]。银行指南：[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/online-banking|网上银行]]。存款理论：[[/deposit-guide|存款指南]]。中心：[[/payment-methods|支付方式]]。

收银台前打开 Grab 确认 GrabPay 余额。若不足，在 Grab 自己的渠道充值。「赌场 GrabPay 代充」聊天是代理，不是方式——见 [[/payment-security|支付安全]]。

在官方收银台选择 GrabPay 后（[[/login|登录]] / [[/download|下载]]），在 Grab 流程内完成确认。切勿向声称是 TPOWER 财务的私人手机号发送 GrabPay。

若 Grab 显示成功而收银台待处理，先等短窗口，再向 [[/contact|客服中心]] 提供时间与金额升级。不要双付。时效框架：[[/instant-deposit|即时存款]]。

负责任花费仍适用（[[/responsible-gaming|负责任博彩]]）。红利资格：[[/promotions|优惠专区]]。出金：[[/withdrawal-guide|提款指南]]、[[/fast-withdrawal|快速提款]]、[[/aml-kyc|AML与KYC]]。集群：[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/register|注册]]。

TPOWER 上的 GrabPay 权威是生活连续：同一个钱包、不同的官方商户表面、零私人中介。

已在 GrabPay 给小费的骑手已懂余额纪律。把纪律带到存款，就能避开多数假紧急。

当收银台缺少 GrabPay，问客服中心——不要接受私人 GrabPay 号码作为替代通道。

GrabPay 用户常在乘车后存款。该时机可能意味着注意力低。建立仪式：打开 Grab 余额、打开 TPOWER 收银台、选择 GrabPay、确认、核对入账、再玩。仪式胜过午夜点餐后的即兴。

若 GrabPay 在 Grab 内连接卡片或其他资金来源，理解 TPOWER 仍看到 GrabPay 方式——那些后方来源遵循 Grab 自身安全。

拒绝娱乐场所附近声称合作方的「GrabPay 兑现代理」。官方合作通过收银台列表表达，不是街头传单。

跨州移动时注意确认中途的网络切换。信号稳定前暂停 GrabPay 存款。` },
  stats: [
    { value: { en: `Balance`, zh: `余额` }, label: { en: `GrabPay funds checked before start`, zh: `开始前检查 GrabPay 资金` } },
    { value: { en: `Grab UI`, zh: `Grab界面` }, label: { en: `Confirmations finish inside Grab`, zh: `确认在 Grab 内完成` } },
    { value: { en: `No DM`, zh: `无私信` }, label: { en: `Never pay personal GrabPay numbers`, zh: `绝不付到私人 GrabPay 号` } },
    { value: { en: `Verify`, zh: `核对` }, label: { en: `Cashier credit before play`, zh: `开玩前收银台入账` } },
  ],
  benefitsTitle: { en: `Why GrabPay fits TPOWER players`, zh: `为何 GrabPay 适合 TPOWER 玩家` },
  benefits: [
{ icon: "wallet", title: { en: `Lifestyle balance reuse`, zh: `生活方式余额复用` }, body: { en: `MYR already in GrabPay can fund official cashier top-ups.`, zh: `已在 GrabPay 的马币可为官方收银台充值。` } },
{ icon: "zap", title: { en: `Familiar Grab confirmation`, zh: `熟悉的 Grab 确认` }, body: { en: `You finish inside an app you open daily.`, zh: `在你每日打开的 APP 内完成。` } },
{ icon: "shield", title: { en: `Anti-number-sharing clarity`, zh: `反分享号码清楚` }, body: { en: `Official GrabPay is not a phone number in Telegram.`, zh: `官方 GrabPay 不是 Telegram 里的手机号。` } },
{ icon: "eye", title: { en: `Clear success/pending split`, zh: `清楚成功/待处理分割` }, body: { en: `Grab success then cashier credit — two checkpoints.`, zh: `Grab 成功再收银台入账——两个检查点。` } },
{ icon: "building", title: { en: `Backup when banks sleep`, zh: `银行休眠时的备用` }, body: { en: `Wallet rails can save evenings during IB maintenance.`, zh: `网银维护时钱包通道可挽救夜晚。` } },
{ icon: "check", title: { en: `Clean support labels`, zh: `干净客服标签` }, body: { en: `“GrabPay” + time + amount is enough to start a case.`, zh: `「GrabPay」+时间+金额足以启动个案。` } }
  ],
  howToTitle: { en: `How to pay with GrabPay on TPOWER`, zh: `如何在 TPOWER 使用 GrabPay 支付` },
  howToDescription: { en: `Balance-first GrabPay steps on the official cashier.`, zh: `官方收银台上余额优先的 GrabPay 步骤。` },
  howToSteps: [
{ name: { en: `Check GrabPay balance`, zh: `检查 GrabPay 余额` }, text: { en: `Reload inside Grab if needed — not via chat agents.`, zh: `若需要在 Grab 内充值——不是经聊天代理。` } },
{ name: { en: `Open official TPOWER cashier`, zh: `打开官方 TPOWER 收银台` }, text: { en: `Login on real domain or Download app.`, zh: `在真实域名或下载 APP 登录。` } },
{ name: { en: `Select GrabPay`, zh: `选择 GrabPay` }, text: { en: `Only when listed for your account.`, zh: `仅当账户列出时。` } },
{ name: { en: `Confirm inside Grab`, zh: `在 Grab 内确认` }, text: { en: `Complete GrabPay approval in Grab’s UI.`, zh: `在 Grab 界面完成 GrabPay 批准。` } },
{ name: { en: `Verify TPOWER credit`, zh: `核对 TPOWER 入账` }, text: { en: `Cashier completed before games.`, zh: `开游戏前收银台完成。` } },
{ name: { en: `Support if divergent`, zh: `不一致则找客服` }, text: { en: `Send time, amount, GrabPay method label.`, zh: `发送时间、金额、GrabPay 方式标签。` } }
  ],
  sections: [
{
    title: { en: `Balance-funded deposits vs proxy phone numbers`, zh: `余额入金 vs 代理手机号` },
    body: { en: `Real GrabPay on TPOWER spends your GrabPay balance through a merchant session. Fake GrabPay is “send to this number.” If the instruction is a phone number in chat, it is not GrabPay Payments on TPOWER.

That single distinction prevents most GrabPay-related losses we see described in support narratives across the industry.`, zh: `TPOWER 上真正的 GrabPay 通过商户会话花费你的 GrabPay 余额。假 GrabPay 是「发到这个号码」。若指示是聊天里的手机号，那就不是 TPOWER 上的 GrabPay 支付。

这一区别能防止行业客服叙事里常见的多数 GrabPay 相关损失。` },
    imageSrc: "/images/payments/heroes/grabpay.webp",
    imageAlt: { en: `Balance-funded deposits vs proxy phone numbers`, zh: `余额入金 vs 代理手机号` },
    reverse: false,
  },
{
    title: { en: `When GrabPay is the smart backup rail`, zh: `何时 GrabPay 是聪明备用通道` },
    body: { en: `Bank maintenance nights are when GrabPay shines for players who already keep wallet float. Compare on Payment Methods before panic. Do not discover GrabPay for the first time while an FPX OTP is expiring.`, zh: `银行维护夜，对已保留钱包浮存的玩家，GrabPay 会发光。恐慌前先在支付方式比较。不要在 FPX OTP 即将过期时第一次发现 GrabPay。` },
    imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
    imageAlt: { en: `When GrabPay is the smart backup rail`, zh: `何时 GrabPay 是聪明备用通道` },
    reverse: true,
  },
{
    title: { en: `GrabPay and promotional fine print`, zh: `GrabPay 与优惠细则` },
    body: { en: `Some offers exclude wallets. If you are depositing for a headline bonus, read Promotions first. A GrabPay deposit that misses eligibility wastes both balance and mood.`, zh: `有些活动排除钱包。若为标题红利存款，先读优惠专区。不符合资格的 GrabPay 存款既浪费余额也浪费心情。` },
    imageSrc: "/images/payments/heroes/payment-methods.webp",
    imageAlt: { en: `GrabPay and promotional fine print`, zh: `GrabPay 与优惠细则` },
    reverse: false,
  },
{
    title: { en: `Cluster links after GrabPay fluency`, zh: `熟悉 GrabPay 后的集群链接` },
    body: { en: `Return to TnG if that is your other wallet. Use Deposit Guide for shared logic, Payment Security for threats, Fast Withdrawal when cashing out, and Deposit & Withdrawal FAQ for rapid answers.`, zh: `若另一钱包是 TnG 就回到 TnG。共用逻辑用存款指南，威胁用支付安全，出金用快速提款，快速答案用存提款 FAQ。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Cluster links after GrabPay fluency`, zh: `熟悉 GrabPay 后的集群链接` },
    reverse: true,
  }
,
  {
    title: { en: `GrabPay after rides — attention management`, zh: `乘车后的 GrabPay——注意力管理` },
    body: { en: `After a ride you are already in Grab. That convenience is useful and risky. Useful because GrabPay is one tap away. Risky because fatigue makes proxy messages look helpful.

Rule: if you open GrabPay for TPOWER, open TPOWER cashier in the same sitting from official navigation. Do not accept a GrabPay number SMS that arrives “helpfully” during the ride.`, zh: `乘车后你已在 Grab。便利有用也有风险。有用是因为 GrabPay 一触即达。有风险是因为疲劳让代理消息看起来有帮助。

规则：若为 TPOWER 打开 GrabPay，同一次坐着从官方导航打开 TPOWER 收银台。不要接受乘车期间「好心」到达的 GrabPay 号码短信。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `GrabPay after rides — attention management`, zh: `乘车后的 GrabPay——注意力管理` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `GrabPay payment timeline`, zh: `GrabPay 支付时间线` },
  timeline: [
{ title: { en: `Balance`, zh: `余额` }, body: { en: `Confirm GrabPay funds.`, zh: `确认 GrabPay 资金。` } },
{ title: { en: `Select`, zh: `选择` }, body: { en: `Choose GrabPay in cashier.`, zh: `在收银台选择 GrabPay。` } },
{ title: { en: `Confirm`, zh: `确认` }, body: { en: `Approve inside Grab.`, zh: `在 Grab 内批准。` } },
{ title: { en: `Credit`, zh: `入账` }, body: { en: `Verify cashier completed.`, zh: `核对收银台完成。` } }
  ],
  securityTitle: { en: `GrabPay security checklist`, zh: `GrabPay 安全清单` },
  securityItems: [
{ title: { en: `No personal GrabPay numbers`, zh: `无私人 GrabPay 号码` }, body: { en: `Chat numbers are not official rails.`, zh: `聊天号码不是官方通道。` } },
{ title: { en: `Reload inside Grab only`, zh: `只在 Grab 内充值` }, body: { en: `Reject casino chat reload agents.`, zh: `拒绝博彩聊天代充。` } },
{ title: { en: `Official app path`, zh: `官方 APP 路径` }, body: { en: `Install TPOWER via Download only.`, zh: `只经下载安装 TPOWER。` } },
{ title: { en: `One pending GrabPay`, zh: `一笔待处理 GrabPay` }, body: { en: `No double confirmation while pending.`, zh: `待处理时不双确认。` } },
{ title: { en: `Secrets stay in Grab`, zh: `机密留在 Grab` }, body: { en: `No PIN/OTP sharing with agents.`, zh: `不与客服分享 PIN/OTP。` } },
{ title: { en: `Evidence for support`, zh: `客服证据` }, body: { en: `Time + amount + GrabPay label.`, zh: `时间+金额+GrabPay 标签。` } }
  ],
  faqTitle: { en: `GrabPay Payments FAQ`, zh: `GrabPay 支付常见问题` },
  faqs: [
{ question: { en: `How do TPOWER GrabPay payments work?`, zh: `TPower GrabPay 支付如何运作？` }, answer: { en: `Confirm GrabPay balance, select GrabPay in official cashier, approve in Grab, verify cashier credit.`, zh: `确认 GrabPay 余额，在官方收银台选择 GrabPay，在 Grab 批准，核对收银台入账。` } },
{ question: { en: `Can I GrabPay a personal number for credit?`, zh: `可以 GrabPay 到私人号码入账吗？` }, answer: { en: `No. That is not an official TPOWER payment method.`, zh: `不可以。那不是官方支付方式。` } },
{ question: { en: `Why is GrabPay pending?`, zh: `为什么 GrabPay 待处理？` }, answer: { en: `Short reconciliation after Grab success can occur. Escalate with evidence if it persists.`, zh: `Grab 成功后可能出现短对账。若持续，带证据升级。` } },
{ question: { en: `Is GrabPay better than Touch 'n Go?`, zh: `GrabPay 比 Touch 'n Go 更好吗？` }, answer: { en: `Better is whichever wallet you already fund and can complete tonight.`, zh: `更好的是你今晚已充值且能完成的那个钱包。` } },
{ question: { en: `Do bonuses allow GrabPay?`, zh: `优惠允许 GrabPay 吗？` }, answer: { en: `Sometimes. Check Promotions eligible methods.`, zh: `有时。查看优惠适用方式。` } },
{ question: { en: `Does GrabPay work on the app?`, zh: `APP 上 GrabPay 可用吗？` }, answer: { en: `When listed — install via Download only.`, zh: `列出时可用——只经下载安装。` } },
{ question: { en: `What should I tell Support Center?`, zh: `应向客服中心说什么？` }, answer: { en: `Local time, amount, and that the method was GrabPay.`, zh: `本地时间、金额，以及方式为 GrabPay。` } },
{ question: { en: `Where next?`, zh: `下一步？` }, answer: { en: `Payment Methods, Touch 'n Go guide, Deposit Guide, Payment Security.`, zh: `支付方式、Touch 'n Go 指南、存款指南、支付安全。` } }
  ],
  relatedTitle: { en: `Related GrabPay & payment pages`, zh: `相关 GrabPay 与支付页面` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Pay with GrabPay on official TPOWER`, zh: `在官方 TPOWER 使用 GrabPay 支付` },
  ctaDescription: { en: `Check balance, select GrabPay in cashier, confirm inside Grab, and verify credit before you play.`, zh: `检查余额，在收银台选择 GrabPay，在 Grab 内确认，开玩前核对入账。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
