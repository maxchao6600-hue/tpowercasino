import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentInstantDeposit: PaymentPageContent = {
  id: "instant-deposit",
  path: "/instant-deposit",
  heroImage: "/images/payments/heroes/instant-deposit.webp",
  metaTitle: { en: `TPOWER Instant Deposit | Speed Expectations & Habits`, zh: `TPower即时存款｜速度预期与习惯` },
  metaDescription: { en: `TPOWER Instant Deposit guide: what “instant” means in practice, rail choice for speed, pending windows, and how to avoid duplicate panic top-ups.`, zh: `TPOWER线上博彩即时存款指南：「即时」实务含义、为速度选通道、待处理窗口，以及如何避免重复恐慌充值。` },
  heroTitle: { en: `TPOWER Instant Deposit`, zh: `TPOWER线上博彩 即时存款` },
  heroSubtitle: { en: `Honest speed: how to aim for fast credit without treating every bank night as identical.`, zh: `诚实的速度：如何追求快速入账，而不把每个银行夜晚当成完全一样。` },
  introduction: { en: `TPOWER Instant Deposit is about timing expectations — not a secret rail that bypasses banking. “Instant” in Malaysia consumer language usually means “fast after provider success.” It does not mean “immune to maintenance, OTP failure, or reconciliation windows.”

This page owns speed intent. Method mechanics stay on [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], and [[/online-banking|Online Banking]]. Process fundamentals stay on the [[/deposit-guide|Deposit Guide]]. The map stays on [[/payment-methods|Payment Methods]].

To aim for speed: use a healthy provider app, stable network, correct amount first try, and a rail you already control. Avoid switching mid-OTP. Avoid parallel duplicate deposits while pending — that is the opposite of instant, because support must untangle two signals.

When bank success and cashier pending diverge, wait a short window, then use [[/contact|Support Center]] with evidence. Do not invent unofficial “priority credit” payments. That fails [[/payment-security|Payment Security]].

Speed without budget is still a bad session. Pair with [[/responsible-gaming|Responsible Gaming]]. Bonus impatience is not a reason to ignore [[/promotions|Promotions]] terms. App path: [[/download|Download]]. Payout counterpart mindset: [[/fast-withdrawal|Fast Withdrawal]].

Keep [[/login|Login]], [[/register|Register]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/aml-kyc|AML & KYC]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]] linked for a complete journey.

Instant Deposit is a coaching page for impatience. The enemy is not the bank — it is the second deposit fired during the first pending window. If you remember only one rule from this page, remember single-flight funding.

Create a personal SLA: wait X minutes after provider success before support. Your X can be short, but it should be intentional. Random rage retries are not SLAs.

Speed also comes from device readiness: updated apps, charged phone, known passwords. Hunting for an OTP SIM while the timer runs is how instant becomes endless.

If you need adrenaline, do not seek it from duplicate transfers. Seek it from games after credit is confirmed — within Responsible Gaming limits.`, zh: `「TPOWER即时存款」讲时效预期——不是绕过银行的秘密通道。大马消费语境里的「即时」通常指「提供方成功后很快」。它不表示「免疫维护、OTP 失败或对账窗口」。

本页拥有速度意图。通道机制在 [[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]]、[[/online-banking|网上银行]]。流程基础在 [[/deposit-guide|存款指南]]。地图在 [[/payment-methods|支付方式]]。

追求速度：使用健康的提供方 APP、稳定网络、第一次就输对金额、选择你已控制的通道。避免 OTP 中途切换。避免待处理时平行重复存款——那与即时相反，因为客服必须拆两信号。

当银行成功与收银台待处理不一致，先等短窗口，再带证据找 [[/contact|客服中心]]。不要发明非官方「优先入账」付款。那通不过 [[/payment-security|支付安全]]。

没有预算的速度仍是坏场次。搭配 [[/responsible-gaming|负责任博彩]]。红利急躁不是忽略 [[/promotions|优惠专区]] 条款的理由。APP 路径：[[/download|下载]]。出金对应心态：[[/fast-withdrawal|快速提款]]。

保留 [[/login|登录]]、[[/register|注册]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/aml-kyc|AML与KYC]]、[[/deposit-withdrawal-faq|存提款常见问题]] 以构成完整旅程。

即时存款是给急躁的教练页。敌人不是银行——而是第一笔待处理窗口中发射的第二笔存款。若本页只记住一条规则，记住单飞行入金。

建立个人 SLA：提供方成功后等待 X 分钟再找客服。你的 X 可以短，但应有意识。随机怒重试不是 SLA。

速度也来自设备就绪：已更新 APP、电量充足、已知密码。OTP 倒计时中找 SIM，是即时变无尽的方式。

若你需要肾上腺素，不要从重复转账寻找。在入账确认后、负责任博彩限额内，从游戏寻找。` },
  stats: [
    { value: { en: `Fast`, zh: `快` }, label: { en: `After provider success on healthy rails`, zh: `健康通道上提供方成功之后` } },
    { value: { en: `1x`, zh: `1次` }, label: { en: `One clean attempt beats duplicates`, zh: `一笔干净尝试胜过重复` } },
    { value: { en: `Net`, zh: `网络` }, label: { en: `Stable connection through OTP`, zh: `OTP 期间保持稳定连接` } },
    { value: { en: `Honest`, zh: `诚实` }, label: { en: `Speed targets ≠ zero bank queues`, zh: `速度目标≠零银行队列` } },
  ],
  benefitsTitle: { en: `Habits that actually make deposits faster`, zh: `真正让存款更快的习惯` },
  benefits: [
{ icon: "zap", title: { en: `Familiar rail first`, zh: `先用熟悉通道` }, body: { en: `The rail you can finish beats an unfamiliar “faster” rumour.`, zh: `你能完成的通道胜过陌生的「更快」谣言。` } },
{ icon: "check", title: { en: `Correct amount once`, zh: `一次输对金额` }, body: { en: `Typos force restarts that destroy speed.`, zh: `打错字导致重开，摧毁速度。` } },
{ icon: "globe", title: { en: `Stable connectivity`, zh: `稳定连接` }, body: { en: `Dropped OTP sessions feel like lost money when nothing debited.`, zh: `OTP 中断在未扣款时仍像钱丢了。` } },
{ icon: "eye", title: { en: `Status literacy`, zh: `状态素养` }, body: { en: `Knowing pending vs completed stops panic duplicates.`, zh: `分清待处理与已完成可停止恐慌重复。` } },
{ icon: "shield", title: { en: `Official only`, zh: `仅官方` }, body: { en: `Chat priority credit is slow and unsafe.`, zh: `聊天优先入账又慢又不安全。` } },
{ icon: "wallet", title: { en: `Pre-check balances`, zh: `预查余额` }, body: { en: `Wallet/bank funds ready before cashier start.`, zh: `启动收银台前准备好钱包/银行资金。` } }
  ],
  howToTitle: { en: `How to aim for instant-style credit`, zh: `如何追求即时风格入账` },
  howToDescription: { en: `A speed-oriented checklist that still respects banking reality.`, zh: `仍尊重银行现实的速度导向清单。` },
  howToSteps: [
{ name: { en: `Preflight provider apps`, zh: `预检提供方 APP` }, text: { en: `Update bank/wallet apps and confirm balances before opening cashier.`, zh: `打开收银台前更新银行/钱包 APP 并确认余额。` } },
{ name: { en: `Pick a known rail`, zh: `选择已知通道` }, text: { en: `Choose FPX, DuitNow, or wallet you successfully used before.`, zh: `选择你曾成功使用的 FPX、DuitNow 或钱包。` } },
{ name: { en: `Submit one clean amount`, zh: `提交一笔干净金额` }, text: { en: `Enter budgeted amount carefully; avoid editing mid-flow casually.`, zh: `仔细输入预算金额；避免随意中途改数。` } },
{ name: { en: `Stay through confirmation`, zh: `确认期间留下` }, text: { en: `Do not background the app during OTP unless you intend to cancel.`, zh: `除非打算取消，OTP 期间不要把 APP 切到后台。` } },
{ name: { en: `Wait briefly on pending`, zh: `待处理时稍等` }, text: { en: `Allow a short reconciliation window before retrying.`, zh: `重试前允许短对账窗口。` } },
{ name: { en: `Escalate once with evidence`, zh: `带证据升级一次` }, text: { en: `Contact Support Center with time, amount, method — not five duplicates.`, zh: `向客服中心提供时间、金额、方式——不是五笔重复。` } }
  ],
  sections: [
{
    title: { en: `What instant does and does not mean`, zh: `即时意味着什么、不意味着什么` },
    body: { en: `Instant Deposit marketing elsewhere often overpromises. TPOWER’s stance is operational honesty: many Malaysia rails credit quickly after success signals, and players should prepare for the nights when they do not.

Instant is also a player skill. Prepared balances, familiar rails, and single attempts outperform frantic switching across four methods in four minutes.`, zh: `别处的即时存款营销常过度承诺。TPOWER 的立场是运营诚实：许多大马通道在成功信号后快速入账，玩家也应为不如此的夜晚做准备。

即时也是玩家技能。准备好的余额、熟悉通道与单次尝试，胜过四分钟内慌乱切换四种方式。` },
    imageSrc: "/images/payments/heroes/instant-deposit.webp",
    imageAlt: { en: `What instant does and does not mean`, zh: `即时意味着什么、不意味着什么` },
    reverse: false,
  },
{
    title: { en: `Duplicate deposits: the speed killer`, zh: `重复存款：速度杀手` },
    body: { en: `The most common anti-pattern is depositing again while the first is pending because a friend said “just send once more.” That creates two bank signals and one confused cashier state.

If you must retry, confirm no debit occurred, or wait for support guidance. Deposit Guide and Payment Security both warn against panic doubles for good reason.`, zh: `最常见反模式是第一笔仍待处理时再存一次，因为朋友说「再发一次就好」。这会造成两个银行信号与一个混乱收银台状态。

若必须重试，先确认无扣款，或等待客服指引。存款指南与支付安全都有理由警告恐慌双存。` },
    imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
    imageAlt: { en: `Duplicate deposits: the speed killer`, zh: `重复存款：速度杀手` },
    reverse: true,
  },
{
    title: { en: `Choosing rails when you care about speed`, zh: `在意速度时如何选通道` },
    body: { en: `Use the Payment Methods hub to compare. On a given night, the fastest rail is the healthy one. A “slow” familiar wallet can beat a “fast” bank under maintenance.

Instant Deposit does not replace method pages; it teaches you to pick and finish.`, zh: `用支付方式中心比较。某个夜晚，最快的通道是健康的那条。「慢」但熟悉的钱包，可以胜过维护中的「快」银行。

即时存款不取代方式专页；它教你选择并完成。` },
    imageSrc: "/images/payments/heroes/payment-methods.webp",
    imageAlt: { en: `Choosing rails when you care about speed`, zh: `在意速度时如何选通道` },
    reverse: false,
  },
{
    title: { en: `After fast credit: play and cash out with intention`, zh: `快速入账之后：有意识地玩与出金` },
    body: { en: `Fast deposits should not automatically become fast chase. Responsible Gaming tools still apply. When ending, Fast Withdrawal and Withdrawal Guide cover the outbound timing story.`, zh: `快速存款不应自动变成快速追损。负责任博彩工具仍适用。结束时，快速提款与提款指南覆盖出金时效故事。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `After fast credit: play and cash out with intention`, zh: `快速入账之后：有意识地玩与出金` },
    reverse: true,
  }
,
  {
    title: { en: `Teaching impatient friends without spreading panic`, zh: `教急躁朋友而不传播恐慌` },
    body: { en: `If a friend asks how to make TPOWER Instant Deposit work, send them this page and the Deposit Guide — not a personal account workaround. Teaching official habits scales. Teaching proxies creates victims.

Instant Deposit culture should be calm competence, not speed shaming. Banks have nights. Prepared players still win the week.`, zh: `若朋友问如何让 TPower 即时存款生效，把本页与存款指南发给他们——不是私人账户变通。传授官方习惯可扩展。传授代理制造受害者。

即时存款文化应是冷静能力，不是速度羞辱。银行有夜晚。有准备的玩家仍赢得整周。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Teaching impatient friends without spreading panic`, zh: `教急躁朋友而不传播恐慌` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `Instant-oriented deposit timeline`, zh: `即时导向存款时间线` },
  timeline: [
{ title: { en: `Preflight`, zh: `预检` }, body: { en: `Apps healthy, balance ready, budget set.`, zh: `APP 健康、余额就绪、预算设定。` } },
{ title: { en: `Single submit`, zh: `单次提交` }, body: { en: `One cashier attempt on a known rail.`, zh: `在已知通道上一次收银台尝试。` } },
{ title: { en: `Confirm`, zh: `确认` }, body: { en: `Finish provider OTP without interruption.`, zh: `不中断地完成提供方 OTP。` } },
{ title: { en: `Verify`, zh: `核对` }, body: { en: `Cashier completed — then play.`, zh: `收银台完成—再游玩。` } }
  ],
  securityTitle: { en: `Instant deposit security checklist`, zh: `即时存款安全清单` },
  securityItems: [
{ title: { en: `No priority personal fees`, zh: `无优先私人费用` }, body: { en: `Speed never requires paying a stranger.`, zh: `速度从不需要付钱给陌生人。` } },
{ title: { en: `No parallel pending deposits`, zh: `无平行待处理存款` }, body: { en: `One in-flight deposit at a time.`, zh: `同一时间只有一笔进行中存款。` } },
{ title: { en: `Official cashier start`, zh: `官方收银台启动` }, body: { en: `Message links claiming faster instant rails are suspect.`, zh: `声称更快即时通道的消息链接可疑。` } },
{ title: { en: `Evidence over rumour`, zh: `证据优于谣言` }, body: { en: `Support needs timestamps, not group chat myths.`, zh: `客服需要时间戳，不是群聊神话。` } },
{ title: { en: `OTP privacy`, zh: `OTP 隐私` }, body: { en: `Never share codes to “speed up credit.”`, zh: `绝不分享验证码以「加速入账」。` } },
{ title: { en: `Budget lock`, zh: `预算锁定` }, body: { en: `Instant funding still obeys session limits.`, zh: `即时入金仍服从场次限额。` } }
  ],
  faqTitle: { en: `Instant Deposit FAQ`, zh: `即时存款常见问题` },
  faqs: [
{ question: { en: `Is TPOWER Instant Deposit a separate payment method?`, zh: `TPower 即时存款是单独支付方式吗？` }, answer: { en: `No. It is a speed-expectation guide that sits above rails like FPX, DuitNow, and e-wallets.`, zh: `不是。它是位于 FPX、DuitNow、电子钱包等通道之上的速度预期指南。` } },
{ question: { en: `Why wasn’t my deposit instant?`, zh: `为什么我的存款不是即时？` }, answer: { en: `Provider queues, maintenance, network drops, OTP failure, or short reconciliation windows can add time.`, zh: `提供方队列、维护、网络中断、OTP 失败或短对账窗口都可能增加时间。` } },
{ question: { en: `Should I deposit twice to force instant credit?`, zh: `应存两次逼即时入账吗？` }, answer: { en: `No. Duplicates create harder support cases and can slow you down.`, zh: `不应。重复会造成更难的客服个案并拖慢你。` } },
{ question: { en: `Which rail is fastest?`, zh: `哪条通道最快？` }, answer: { en: `The healthy familiar rail tonight. Compare options on Payment Methods.`, zh: `今晚健康且熟悉的那条。在支付方式比较选项。` } },
{ question: { en: `Does instant deposit skip KYC?`, zh: `即时存款能跳过 KYC 吗？` }, answer: { en: `No. Verification rules still apply when required for risk or payouts.`, zh: `不能。需要风控或提款时核验规则仍适用。` } },
{ question: { en: `Can promotions promise instant credit?`, zh: `优惠能承诺即时入账吗？` }, answer: { en: `Offers may have deposit rules, but banking reality still applies. Read Promotions terms.`, zh: `活动可能有存款规则，但银行现实仍适用。请读优惠条款。` } },
{ question: { en: `How do I get help on a slow deposit?`, zh: `存款变慢如何求助？` }, answer: { en: `Contact Support Center with time, amount, and method after a short wait.`, zh: `短等待后向客服中心提供时间、金额与方式。` } },
{ question: { en: `What is the payout counterpart page?`, zh: `出金对应页是什么？` }, answer: { en: `Fast Withdrawal, plus the Withdrawal Guide for process depth.`, zh: `快速提款，加上提款指南的流程深度。` } }
  ],
  relatedTitle: { en: `Related speed & funding pages`, zh: `相关速度与入金页面` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Fund fast — stay official`, zh: `快速入金—保持官方` },
  ctaDescription: { en: `Login, use one clean attempt on a familiar Malaysia rail, and verify cashier credit before you play.`, zh: `登录，在熟悉的大马通道上干净尝试一次，开玩前核对收银台入账。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
