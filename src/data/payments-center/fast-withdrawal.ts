import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentFastWithdrawal: PaymentPageContent = {
  id: "fast-withdrawal",
  path: "/fast-withdrawal",
  heroImage: "/images/payments/heroes/fast-withdrawal.webp",
  metaTitle: { en: `TPOWER Fast Withdrawal | Payout Speed Guide`, zh: `TPower快速提款｜出金速度指南` },
  metaDescription: { en: `TPOWER Fast Withdrawal guide: what speeds payouts up, what slows them down, banking windows, KYC timing, and how to request clean cashouts in Malaysia.`, zh: `TPOWER线上博彩快速提款指南：什么加速出金、什么拖慢、银行窗口、KYC 时机，以及如何在大马申请干净出金。` },
  heroTitle: { en: `TPOWER Fast Withdrawal`, zh: `TPOWER线上博彩 快速提款` },
  heroSubtitle: { en: `Operational speed for payouts — prepared players move faster than urgent ones.`, zh: `出金的运营速度——有准备的玩家比紧迫的玩家更快。` },
  introduction: { en: `TPOWER Fast Withdrawal explains payout speed without pretending banks vanish. Fast means prepared identity, matching destinations, clear wagering state, and submitting one clean request during normal windows — not paying strangers for “priority release.”

Process depth lives on the [[/withdrawal-guide|Withdrawal Guide]]. Deposit speed lives on [[/instant-deposit|Instant Deposit]]. Method maps live on [[/payment-methods|Payment Methods]]. This page owns the commercial intent around TPOWER Fast Withdrawal keywords and the habits that make targets realistic.

Before you chase minutes, finish KYC if prompted ([[/aml-kyc|AML & KYC]]), confirm bonus state on [[/promotions|Promotions]], and ensure bank details match your registered name. Most “slow withdrawal” stories begin days earlier with mismatched deposits from the [[/deposit-guide|Deposit Guide]] era.

After submit, track cashier status. Banking cut-offs can add time after TPOWER releases funds. Escalate via [[/contact|Support Center]] with references — never via remote-control APKs pitched as “withdrawal unlock tools” ([[/payment-security|Payment Security]], [[/security|Platform Security]]).

Fast cashouts are also responsible endings. Use [[/responsible-gaming|Responsible Gaming]] when the right move is stopping. VIP hosts on [[/vip|VIP]] can clarify service context; they will not sell personal fee unlocks.

Continue with [[/login|Login]], [[/register|Register]], [[/download|Download]], [[/blog/how-to-withdraw-tpower|withdrawal blog]], [[/news|News]], [[/faq|FAQ]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].

Fast Withdrawal is not a twin of Instant Deposit. Inbound speed optimises provider confirmation; outbound speed optimises eligibility hygiene. Confusing them creates players who mash deposit twice and then demand cashout fees.

Build a pre-cashout checklist on your phone notes: wagering clear? KYC clear? bank match? amount intended? Submit only when all four are yes. That checklist is the real fast lane.

VIP status may improve communication clarity. It does not delete banking holidays. Expectation management is part of feeling fast.

If you chase “faster than Fast Withdrawal” offers in chats, you are leaving the official product. Payment Security is the page for that boundary.`, zh: `「TPOWER快速提款」说明出金速度，但不假装银行消失。快意味着身份已准备、收款匹配、流水状态清楚、在正常窗口提交一笔干净申请——不是向陌生人付「优先放款」。

流程深度在 [[/withdrawal-guide|提款指南]]。存款速度在 [[/instant-deposit|即时存款]]。通道地图在 [[/payment-methods|支付方式]]。本页拥有 TPower 快速提款关键词的商业意图，以及让目标变现实的习惯。

追分钟前，若被提示先完成 KYC（[[/aml-kyc|AML与KYC]]），在 [[/promotions|优惠专区]] 确认红利状态，并确保银行资料匹配注册姓名。多数「提款慢」故事几天前就从 [[/deposit-guide|存款指南]] 时期的不匹配存款开始。

提交后跟踪收银台状态。TPOWER 放款后银行截点仍可能加时。经 [[/contact|客服中心]] 带参考号升级——绝不用「提款解锁工具」推销的远程控制 APK（[[/payment-security|支付安全]]、[[/security|平台安全]]）。

快速出金也是负责任的结束。该停时用 [[/responsible-gaming|负责任博彩]]。[[/vip|VIP]] 接待可澄清服务语境；不会出售私人费用解锁。

继续：[[/login|登录]]、[[/register|注册]]、[[/download|下载]]、[[/blog/how-to-withdraw-tpower|提款攻略]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/deposit-withdrawal-faq|存提款常见问题]]。

快速提款不是即时存款的双胞胎。入金速度优化提供方确认；出金速度优化资格卫生。混淆二者会造就连存两笔又要求出金费的玩家。

在手机备忘录建立出金前清单：流水清？KYC 清？银行匹配？金额有意？四项皆是才提交。该清单才是真正快车道。

VIP 状态可能改善沟通清楚度。它不会删除银行假日。预期管理是「感觉快」的一部分。

若你在聊天追求「比快速提款更快」的报价，你已离开官方产品。支付安全是该边界专页。` },
  stats: [
    { value: { en: `Prepare`, zh: `准备` }, label: { en: `KYC + matching details before rush hour`, zh: `高峰前完成 KYC + 匹配资料` } },
    { value: { en: `1 req`, zh: `1笔` }, label: { en: `One clean request beats stacks`, zh: `一笔干净申请胜过堆叠` } },
    { value: { en: `Window`, zh: `窗口` }, label: { en: `Banking cut-offs still apply after release`, zh: `放款后银行截点仍适用` } },
    { value: { en: `0 fee`, zh: `0费` }, label: { en: `No personal unlock fees — ever`, zh: `从无私人解锁费` } },
  ],
  benefitsTitle: { en: `What actually accelerates TPOWER withdrawals`, zh: `真正加速 TPower 提款的因素` },
  benefits: [
{ icon: "badge", title: { en: `Early verification`, zh: `提早核验` }, body: { en: `KYC done in daylight beats KYC at midnight panic.`, zh: `白天完成的 KYC 胜过午夜恐慌 KYC。` } },
{ icon: "banknote", title: { en: `Matching destinations`, zh: `匹配收款方` }, body: { en: `Same identity as deposits reduces review loops.`, zh: `与存款同一身份减少复核循环。` } },
{ icon: "file", title: { en: `Clear bonus state`, zh: `清楚红利状态` }, body: { en: `Knowing wagering status prevents failed requests.`, zh: `知道流水状态可避免失败申请。` } },
{ icon: "zap", title: { en: `Normal windows`, zh: `正常窗口` }, body: { en: `Submitting during healthy banking hours helps posting speed.`, zh: `在健康银行时段提交有助入账速度。` } },
{ icon: "eye", title: { en: `Status patience`, zh: `状态耐心` }, body: { en: `Reading processing correctly avoids destructive duplicates.`, zh: `正确阅读处理中可避免破坏性重复。` } },
{ icon: "shield", title: { en: `Official escalation`, zh: `官方升级` }, body: { en: `Support with references is faster than rumour channels.`, zh: `带参考号的客服比谣言渠道更快。` } }
  ],
  howToTitle: { en: `How to request a faster withdrawal`, zh: `如何申请更快提款` },
  howToDescription: { en: `A speed-oriented payout checklist grounded in preparation.`, zh: `以准备为基础的速度导向出金清单。` },
  howToSteps: [
{ name: { en: `Clear eligibility`, zh: `理清资格` }, text: { en: `Confirm withdrawable balance vs locked bonus funds.`, zh: `确认可提余额 vs 锁定红利。` } },
{ name: { en: `Confirm destination match`, zh: `确认收款匹配` }, text: { en: `Bank/wallet details must match registered identity.`, zh: `银行/钱包资料必须匹配注册身份。` } },
{ name: { en: `Finish KYC if flagged`, zh: `如被标记完成 KYC` }, text: { en: `Upload only via official AML & KYC / Support paths.`, zh: `只经官方 AML 与 KYC / 客服路径上传。` } },
{ name: { en: `Submit one request`, zh: `提交一笔申请` }, text: { en: `Enter the amount once; do not stack while processing.`, zh: `金额只输一次；处理中勿堆叠。` } },
{ name: { en: `Monitor cashier + bank`, zh: `监控收银台+银行` }, text: { en: `Allow banking windows after TPOWER release.`, zh: `TPOWER 放款后预留银行窗口。` } },
{ name: { en: `Escalate with structure`, zh: `结构化升级` }, text: { en: `Contact Support Center with time, amount, destination mask.`, zh: `向客服提供时间、金额、收款掩码。` } }
  ],
  sections: [
{
    title: { en: `Fast is a preparation story`, zh: `快是一个准备故事` },
    body: { en: `Players who verify early, deposit from matching sources, and understand promotions experience Fast Withdrawal as ordinary. Players who invent urgency after a mismatched week experience it as drama.

This page refuses “pay RM20 to unlock.” That is not speed; that is theft theatre.`, zh: `提早核验、从匹配来源存款、理解优惠的玩家，会把快速提款体验为平常。不匹配一周后才制造紧迫的玩家，会体验为戏剧。

本页拒绝「付 RM20 解锁」。那不是速度；那是盗窃剧本。` },
    imageSrc: "/images/payments/heroes/fast-withdrawal.webp",
    imageAlt: { en: `Fast is a preparation story`, zh: `快是一个准备故事` },
    reverse: false,
  },
{
    title: { en: `What slows payouts (even when TPOWER is ready)`, zh: `什么拖慢出金（即使 TPOWER 已就绪）` },
    body: { en: `Bank holidays, cut-offs, incorrect account numbers, and unfinished wagering slow posting. Fast Withdrawal targets assume normal conditions.

If cashier shows completed but bank not yet posted, wait a reasonable window before escalating — then escalate with evidence, not with a second request.`, zh: `银行假日、截点、错误账号与未完成流水都会拖慢入账。快速提款目标假定正常条件。

若收银台显示完成但银行尚未入账，合理窗口后再升级——然后带证据升级，而不是第二笔申请。` },
    imageSrc: "/images/payments/heroes/withdrawal-guide.webp",
    imageAlt: { en: `What slows payouts (even when TPOWER is ready)`, zh: `什么拖慢出金（即使 TPOWER 已就绪）` },
    reverse: true,
  },
{
    title: { en: `Relationship to Instant Deposit`, zh: `与即时存款的关系` },
    body: { en: `Inbound speed and outbound speed are cousins, not twins. Instant Deposit optimises funding attempts; Fast Withdrawal optimises payout preparation. Together they cover commercial timing intent without merging into one thin page.`, zh: `入金速度与出金速度是表亲，不是双胞胎。即时存款优化入金尝试；快速提款优化出金准备。二者共同覆盖商业时效意图，而不合并成单薄一页。` },
    imageSrc: "/images/payments/heroes/instant-deposit.webp",
    imageAlt: { en: `Relationship to Instant Deposit`, zh: `与即时存款的关系` },
    reverse: false,
  },
{
    title: { en: `Cluster links for payout speed seekers`, zh: `出金速度追求者的集群链接` },
    body: { en: `Withdrawal Guide, Payment Methods, Payment Security, Deposit & Withdrawal FAQ, Support Center, Responsible Gaming, VIP, Blog, News, and FAQ complete the journey after you understand Fast Withdrawal.`, zh: `提款指南、支付方式、支付安全、存提款 FAQ、客服中心、负责任博彩、VIP、博客、新闻与 FAQ，在你理解快速提款后完成旅程。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Cluster links for payout speed seekers`, zh: `出金速度追求者的集群链接` },
    reverse: true,
  }
,
  {
    title: { en: `Measuring payout speed honestly`, zh: `诚实衡量出金速度` },
    body: { en: `Measure from request submit to bank post, and separate TPOWER release time from bank post time. Players who only stare at the bank app blame the wrong layer. Cashier timestamps tell the release story; bank apps tell the posting story.

Honest measurement reduces fake “priority fee” purchases. If release already happened, a stranger cannot accelerate your bank.`, zh: `从申请提交到银行入账衡量，并分开 TPOWER 放款时间与银行入账时间。只盯银行 APP 的玩家会怪错层。收银台时间戳讲述放款故事；银行 APP 讲述入账故事。

诚实衡量减少假「优先费」购买。若已放款，陌生人无法加速你的银行。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Measuring payout speed honestly`, zh: `诚实衡量出金速度` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `Fast withdrawal timeline`, zh: `快速提款时间线` },
  timeline: [
{ title: { en: `Prepare`, zh: `准备` }, body: { en: `KYC, matching details, clear bonus state.`, zh: `KYC、匹配资料、清楚红利状态。` } },
{ title: { en: `Request`, zh: `申请` }, body: { en: `One clean cashier withdrawal.`, zh: `一笔干净收银台提款。` } },
{ title: { en: `Release`, zh: `放款` }, body: { en: `TPOWER completes eligible release steps.`, zh: `TPOWER 完成合格放款步骤。` } },
{ title: { en: `Post`, zh: `入账` }, body: { en: `Bank/wallet posts within its window.`, zh: `银行/钱包在其窗口内入账。` } }
  ],
  securityTitle: { en: `Fast withdrawal security checklist`, zh: `快速提款安全清单` },
  securityItems: [
{ title: { en: `No unlock fees`, zh: `无解锁费` }, body: { en: `Personal payments to release cashouts are scams.`, zh: `付钱给私人以放款是诈骗。` } },
{ title: { en: `No remote APK tools`, zh: `无远程 APK 工具` }, body: { en: `Withdrawal unlock apps are takeover tools.`, zh: `提款解锁 APP 是盗号工具。` } },
{ title: { en: `OTP private`, zh: `OTP 私密` }, body: { en: `Bank OTPs are never for chat agents.`, zh: `银行 OTP 从不给聊天客服。` } },
{ title: { en: `One processing request`, zh: `一次处理一笔` }, body: { en: `Stacks create delay, not speed.`, zh: `堆叠制造延迟，不是速度。` } },
{ title: { en: `Official document paths`, zh: `官方证件路径` }, body: { en: `KYC only through official upload surfaces.`, zh: `KYC 只经官方上传表面。` } },
{ title: { en: `End shared sessions`, zh: `结束共用会话` }, body: { en: `Log out after large cashout requests on borrowed phones.`, zh: `外借手机大额出金后请登出。` } }
  ],
  faqTitle: { en: `Fast Withdrawal FAQ`, zh: `快速提款常见问题` },
  faqs: [
{ question: { en: `Is TPOWER Fast Withdrawal guaranteed timing?`, zh: `TPower 快速提款保证时效吗？` }, answer: { en: `It describes operational targets under normal conditions. Reviews and bank windows can still add time.`, zh: `它描述正常条件下的运营目标。复核与银行窗口仍可能加时。` } },
{ question: { en: `How do I make withdrawals faster?`, zh: `如何让提款更快？` }, answer: { en: `Verify early, match bank names, clear wagering, submit one clean request in normal windows.`, zh: `提早核验、匹配银行姓名、理清流水、在正常窗口提交一笔干净申请。` } },
{ question: { en: `Why is my withdrawal slow?`, zh: `为什么提款慢？` }, answer: { en: `Common causes: mismatch, KYC pending, bonus locks, bank cut-offs, or review of unusual patterns.`, zh: `常见原因：不匹配、KYC 待审、红利锁定、银行截点或异常模式复核。` } },
{ question: { en: `Can I pay for priority withdrawal?`, zh: `可以付费优先提款吗？` }, answer: { en: `Not through personal accounts. Official paths never require stranger fees.`, zh: `不能通过私人账户。官方路径从不要求陌生人费用。` } },
{ question: { en: `Does VIP get faster withdrawals?`, zh: `VIP 提款更快吗？` }, answer: { en: `VIP may improve service context; it does not replace compliance or banking reality.`, zh: `VIP 可能改善服务语境；不能取代合规或银行现实。` } },
{ question: { en: `What if cashier completed but bank empty?`, zh: `收银台完成但银行没到？` }, answer: { en: `Wait a reasonable banking window, then contact Support Center with references.`, zh: `等待合理银行窗口，再带参考号联系客服中心。` } },
{ question: { en: `Is Fast Withdrawal different from the Withdrawal Guide?`, zh: `快速提款与提款指南有何不同？` }, answer: { en: `Yes. Withdrawal Guide owns full process; Fast Withdrawal owns speed habits and expectations.`, zh: `不同。提款指南拥有完整流程；快速提款拥有速度习惯与预期。` } },
{ question: { en: `Where is the FAQ hub?`, zh: `FAQ 中心在哪？` }, answer: { en: `Deposit & Withdrawal FAQ aggregates rapid answers across funding and payouts.`, zh: `存提款常见问题汇总入金与出金的快速答案。` } }
  ],
  relatedTitle: { en: `Related payout pages`, zh: `相关出金页面` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Cash out prepared — not panicked`, zh: `有准备地出金—不要恐慌` },
  ctaDescription: { en: `Login, confirm matching details, and submit one clean withdrawal on official TPOWER.`, zh: `登录，确认匹配资料，在官方 TPOWER 提交一笔干净提款。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
