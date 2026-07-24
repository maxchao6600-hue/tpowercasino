import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentWithdrawalGuide: PaymentPageContent = {
  id: "withdrawal-guide",
  path: "/withdrawal-guide",
  heroImage: "/images/payments/heroes/withdrawal-guide.webp",
  metaTitle: {
    en: "TPOWER Withdrawal Guide | Payout Process for Malaysia",
    zh: "TPower提款指南｜马来西亚出金流程说明",
  },
  metaDescription: {
    en: "Official TPOWER Withdrawal Guide: request steps, bank matching, verification, processing windows, common payout blockers, and how to prepare a clean withdrawal.",
    zh: "TPOWER线上博彩官方提款指南：申请步骤、银行匹配、核验、处理窗口、常见出金阻碍，以及如何准备干净提款。",
  },
  heroTitle: {
    en: "TPOWER Withdrawal Guide",
    zh: "TPOWER线上博彩 提款指南",
  },
  heroSubtitle: {
    en: "How payouts leave the cashier — matching accounts, clear statuses, and preparation that protects your time.",
    zh: "资金如何离开收银台——账户匹配、状态清楚、准备妥当以节省你的时间。",
  },
  introduction: {
    en: `The TPOWER Withdrawal Guide explains how money leaves your player balance and returns to a bank or wallet you control. Withdrawals are a different product moment from deposits. Deposits ask a rail to send value in. Withdrawals ask TPOWER to release value out — after eligibility, identity alignment, and banking windows are respected.

Malaysia players care about TPOWER Withdrawal clarity because evening sessions often end with a desire to lock in results before sleep. A clean payout starts hours earlier: deposit from matching sources, keep bonus terms honest, and finish verification before you need speed. This page is about that preparation, not about promising that every bank posts at the same minute.

Begin on an official session. [[/login|Login]] on the real domain or via [[/download|Download]] installs only. Open the cashier withdrawal flow from product navigation. Ignore chat messages that offer “priority cashout” if you transfer a fee to a personal account first. Those patterns are not part of official TPOWER Banking.

Bank details must match the identity on your account. Name mismatches are among the most common payout delays worldwide. If you deposited from a family member’s account “just once,” expect friction later. Align funding and payout sources using habits from the [[/deposit-guide|Deposit Guide]] and method pages such as [[/online-banking|Online Banking]] and [[/duitnow-deposit|DuitNow Deposit]].

Verification sits between entertainment and banking. First withdrawals, larger amounts, or unusual device patterns can trigger checks described on [[/aml-kyc|AML & KYC]]. Completing KYC while you are calm is kinder than discovering it when you want an immediate cashout. Privacy expectations for documents live on [[/privacy-and-data-protection|Privacy & Data Protection]] — upload only through official Support or product surfaces.

Bonus and wagering state can block or reduce withdrawable balance. Before you request a payout, read active offers on [[/promotions|Promotions]]. If wagering remains, either complete eligible play or understand what portion is locked. Surprise is what damages trust; the Withdrawal Guide exists to remove surprise.

After you submit a request, track official statuses. Processing does not mean “lost.” Banking cut-offs, weekend queues, and review queues all create honest waits. For speed-oriented expectations, read [[/fast-withdrawal|Fast Withdrawal]] — and treat “fast” as an operational target, not a guarantee against every bank holiday.

If something stalls, escalate with evidence to [[/contact|Support Center]]: request time, amount, destination bank mask, and any reference shown in cashier. Pair with [[/payment-security|Payment Security]] so you never share OTP or bank passwords while chasing a payout.

Responsible endings matter. A withdrawal is also a chance to stop. Use [[/responsible-gaming|Responsible Gaming]] tools if sessions are spilling past your budget. [[/vip|VIP]] hosts, when available, help with service context — they will not ask you to pay personal fees for “faster release.”

Long-form education continues on [[/blog/how-to-withdraw-tpower|the withdrawal blog guide]] and the [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]]. This Withdrawal Guide remains the authority page for TPOWER Withdrawal process EEAT: request, match, verify, wait, receive.

Keep News and Blog nearby for operational notices via [[/news|News]] and [[/blog|Knowledge Center]]. When bank rails publish maintenance windows, plan payouts around them rather than stacking panic requests.

A final posture: withdrawals reward patience and preparation more than urgency theatre. Official TPOWER payouts are designed to be boring in the best way — predictable, documented, and reachable through Support Center when reality is messy.

Payout calendar thinking helps. If you know your bank posts slowly on Sundays, do not schedule emotional withdrawals for Sunday midnight. Fast Withdrawal targets assume ordinary banking behaviour; the Withdrawal Guide teaches you to plan around that behaviour.

Keep a withdrawal folder of screenshots only when something looks wrong — not for every successful cashout. Evidence culture is for exceptions. Normal completed withdrawals should feel uneventful.

If a promotion is active, write down the wagering remainder before you request payout. Surprises at the request button are usually preventable reading failures, not cashier malice.

Large first withdrawals deserve daylight. Completing KYC at noon beats discovering document blur at 1 a.m. AML & KYC is part of withdrawal craft.

Never negotiate cashout speed in unofficial channels. Official speed is preparation plus windows — not fees to strangers. Payment Security repeats that rule because money anxiety makes people forget.`,
    zh: `「TPOWER提款指南」说明余额如何离开玩家账户、回到你控制的银行或钱包。提款与存款是不同产品时刻。存款请通道把价值送进来；提款请 TPOWER线上博彩 在资格、身份对齐与银行窗口被尊重之后把价值送出去。

大马玩家在意 TPower 提款是否清楚，因为晚间场次常想在睡前锁定结果。干净出金往往几小时前就开始：从匹配来源存款、诚实对待优惠条款、在需要速度前完成核验。本页讲准备，而不是承诺每家银行同一分钟入账。

从官方会话开始。只在真实域名 [[/login|登录]]，或经 [[/download|下载]] 安装。从产品导航打开收银台提款流程。忽略要求你先向私人账户付「优先出金费」的聊天。那些模式不属于官方 TPOWER 银行流程。

银行资料必须匹配账户身份。姓名不符是全球最常见出金延迟之一。若曾「只一次」用家人账户存款，日后可能摩擦。请用 [[/deposit-guide|存款指南]] 与 [[/online-banking|网上银行]]、[[/duitnow-deposit|DuitNow存款]] 等专页的习惯，对齐入金与出金来源。

核验介于娱乐与银行之间。首次提款、较大金额或异常设备模式可能触发 [[/aml-kyc|AML与KYC]] 所述检查。在平静时完成 KYC，比想立刻出金才发现更友善。证件隐私预期见 [[/privacy-and-data-protection|隐私与数据保护]]——只经官方客服或产品表面上传。

红利与流水状态可能阻止或减少可提余额。申请前先读 [[/promotions|优惠专区]] 进行中的活动。若流水未完成，要么完成适用游戏，要么弄清锁定部分。意外损害信任；提款指南就是为了去掉意外。

提交后跟踪官方状态。处理中不等于「丢失」。银行截点、周末队列与复核队列都会带来诚实等待。速度预期见 [[/fast-withdrawal|快速提款]]——并把「快」当作运营目标，而非对抗一切银行假日的保证。

若卡住，向 [[/contact|客服中心]] 带证据升级：申请时间、金额、收款银行掩码、收银台参考号。搭配 [[/payment-security|支付安全]]，追出金时绝不分享 OTP 或网银密码。

负责任的结束同样重要。提款也是停下来的机会。若场次已超出预算，使用 [[/responsible-gaming|负责任博彩]] 工具。[[/vip|VIP]] 接待可提供服务语境——不会要你付私人费用换「更快放款」。

长文教育续见 [[/blog/how-to-withdraw-tpower|提款攻略文章]] 与 [[/deposit-withdrawal-faq|存提款常见问题]]。本提款指南仍是 TPower 提款流程 EEAT 的权威页：申请、匹配、核验、等待、到账。

通过 [[/news|新闻室]] 与 [[/blog|知识中心]] 留意运营通知。银行通道发布维护窗口时，围绕窗口安排出金，而不是堆叠恐慌申请。

最后姿态：提款奖励耐心与准备，而不是紧迫表演。官方 TPOWER 出金最好的样子是无聊——可预期、有记录，现实混乱时能通过客服中心触达。

出金日历思维有帮助。若你知道银行周日入账慢，就不要把情绪化提款排在周日午夜。快速提款目标假定平常银行行为；提款指南教你围绕该行为计划。

只在看起来不对时保留提款截图文件夹——不是每笔成功出金都存。证据文化服务例外。正常完成的提款应感觉平淡。

若有优惠进行中，申请出金前写下剩余流水。申请按钮前的意外通常是可预防的阅读失败，不是收银台恶意。

大额首次提款值得白天进行。中午完成 KYC 胜过凌晨 1 点才发现证件模糊。AML 与 KYC 是提款手艺的一部分。

永远不要在非官方渠道谈判出金速度。官方速度是准备加窗口——不是付给陌生人的费用。支付安全重复该规则，因为资金焦虑让人忘记。`,
  },
  stats: [
    {
      value: { en: "Match", zh: "匹配" },
      label: {
        en: "Name-aligned bank details reduce delays",
        zh: "姓名对齐的银行资料减少延误",
      },
    },
    {
      value: { en: "KYC", zh: "KYC" },
      label: {
        en: "Verify early — before you need speed",
        zh: "尽早核验—在需要速度之前",
      },
    },
    {
      value: { en: "Status", zh: "状态" },
      label: {
        en: "Track processing in official cashier only",
        zh: "只在官方收银台跟踪处理状态",
      },
    },
    {
      value: { en: "Evidence", zh: "证据" },
      label: {
        en: "References beat rumour when escalating",
        zh: "升级时参考号胜过谣言",
      },
    },
  ],
  benefitsTitle: {
    en: "What a clean TPOWER withdrawal protects",
    zh: "干净的 TPower 提款保护什么",
  },
  benefits: [
    {
      icon: "banknote",
      title: { en: "Destination clarity", zh: "收款清晰" },
      body: {
        en: "You know which bank or wallet will receive funds — no mystery personal accounts.",
        zh: "你知道哪家银行或钱包收款——没有神秘私人账户。",
      },
    },
    {
      icon: "badge",
      title: { en: "Identity alignment", zh: "身份对齐" },
      body: {
        en: "Matching registered name to payout destination lowers review loops.",
        zh: "注册姓名与收款方匹配，减少复核循环。",
      },
    },
    {
      icon: "file",
      title: { en: "Bonus honesty", zh: "优惠诚实" },
      body: {
        en: "Understanding wagering before request prevents “why can’t I withdraw?” shock.",
        zh: "申请前弄清流水，避免「为何不能提」的惊吓。",
      },
    },
    {
      icon: "lock",
      title: { en: "Secret hygiene", zh: "机密卫生" },
      body: {
        en: "Payout chase never requires sharing bank passwords or OTPs with agents.",
        zh: "追出金从不需要向客服分享网银密码或 OTP。",
      },
    },
    {
      icon: "zap",
      title: { en: "Prepared speed", zh: "有准备的速度" },
      body: {
        en: "Early KYC and matching rails make Fast Withdrawal targets more realistic.",
        zh: "提早 KYC 与匹配通道，让快速提款目标更现实。",
      },
    },
    {
      icon: "heart",
      title: { en: "Session closure", zh: "场次收束" },
      body: {
        en: "Withdrawals can end the night intentionally instead of chasing one more spin.",
        zh: "提款可以有意识地结束夜晚，而不是再追一轮。",
      },
    },
  ],
  howToTitle: {
    en: "How to request a TPOWER withdrawal",
    zh: "如何申请 TPower 提款",
  },
  howToDescription: {
    en: "A payout sequence focused on eligibility, matching details, and official status tracking.",
    zh: "聚焦资格、匹配资料与官方状态跟踪的出金步骤。",
  },
  howToSteps: [
    {
      name: { en: "Confirm withdrawable balance", zh: "确认可提余额" },
      text: {
        en: "Check cashier balance versus locked bonus funds. Read active Promotions terms if wagering may apply.",
        zh: "核对收银台余额与锁定红利。若可能有流水，先读进行中的优惠条款。",
      },
    },
    {
      name: { en: "Verify destination details", zh: "核对接款资料" },
      text: {
        en: "Ensure bank or wallet details match your registered identity before submitting.",
        zh: "提交前确保银行或钱包资料与注册身份一致。",
      },
    },
    {
      name: { en: "Complete KYC if prompted", zh: "如被提示完成 KYC" },
      text: {
        en: "Upload documents only through official product or Support Center paths described in AML & KYC.",
        zh: "只通过 AML 与 KYC 所述的官方产品或客服路径上传证件。",
      },
    },
    {
      name: { en: "Submit one clean request", zh: "提交一笔干净申请" },
      text: {
        en: "Enter the amount you intend to receive. Avoid stacking duplicate requests while one is processing.",
        zh: "输入打算收到的金额。一笔处理中时避免堆叠重复申请。",
      },
    },
    {
      name: { en: "Monitor official status", zh: "监控官方状态" },
      text: {
        en: "Watch cashier states and your bank app. Banking windows can add honest delay after TPOWER releases funds.",
        zh: "查看收银台状态与银行 APP。TPOWER 放款后，银行窗口仍可能带来诚实延迟。",
      },
    },
    {
      name: { en: "Escalate with references", zh: "带参考号升级" },
      text: {
        en: "If delay exceeds a reasonable window, contact Support Center with request time, amount, and destination mask.",
        zh: "若超过合理窗口仍未到，向客服中心提供申请时间、金额与收款掩码。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Eligibility before the request button",
        zh: "按下申请前的资格",
      },
      imageSrc: "/images/payments/heroes/withdrawal-guide.webp",
      imageAlt: {
        en: "TPOWER withdrawal orientation",
        zh: "TPOWER提款导向",
      },
      body: {
        en: `Withdrawable balance is not always equal to the number you see after a lucky session. Bonus funds, locked portions, and unfinished wagering change what the cashier will release. Read [[/promotions|Promotions]] before you assume a full cashout is available.

Gameplay category can matter for some offers. If a promotion excludes certain titles, grinding the wrong lobby will not unlock withdrawal. Prefer clarity over speed when an offer is active.

Outstanding reviews also affect eligibility. If Support Center already asked for a document, finish that thread before stacking a new withdrawal request. Parallel chaos slows everyone.

Responsible limits are part of eligibility psychology. If you set deposit caps on [[/responsible-gaming|Responsible Gaming]], treat payout as the healthy counterpart — moving winnings out rather than recycling them into chase behaviour.

VIP context does not rewrite eligibility math. Hosts may explain statuses; they do not invent personal transfer shortcuts. Anything asking for a “release fee” to a private account fails the official test on [[/payment-security|Payment Security]].`,
        zh: `可提余额不一定等于幸运场次后看到的数字。红利资金、锁定部分与未完成流水都会改变收银台放款范围。假定可全额出金前，先读 [[/promotions|优惠专区]]。

某些活动对游戏品类有要求。若优惠排除特定游戏，刷错大厅也无法解锁提款。有活动进行时，清楚优于盲目求快。

未完成的复核也影响资格。若客服中心已要求文件，先完成该线程再堆新提款。平行混乱会拖慢所有人。

负责任限额属于资格心理的一部分。若你在 [[/responsible-gaming|负责任博彩]] 设定了存款上限，把出金当作健康对应——把盈利移出，而不是循环追损。

VIP 语境不会改写资格数学。接待可解释状态；不会发明私人转账捷径。任何要求向私人账户付「放款费」的，都通不过 [[/payment-security|支付安全]] 的官方测试。`,
      },
    },
    {
      title: {
        en: "Bank matching and Malaysia payout rails",
        zh: "银行匹配与大马出金通道",
      },
      imageSrc: "/images/payments/heroes/online-banking.webp",
      reverse: true,
      imageAlt: {
        en: "Online banking payout atmosphere",
        zh: "网上银行出金氛围",
      },
      body: {
        en: `Malaysia payouts typically return to local banking details you control. Keep account numbers accurate. A single transposed digit can send a request into manual review or failure.

Prefer destinations you used for deposits when practical. Consistency helps reconciliation. Method education on [[/payment-methods|Payment Methods]], [[/online-banking|Online Banking]], and e-wallet pages supports that consistency.

DuitNow-oriented players should still confirm the destination fields the cashier shows — do not assume every transfer type uses the same identifier. When unsure, ask Support Center before submitting large first-time payouts.

Crypto or alternative rails, if shown in cashier, follow their own address discipline. Wrong network or wrong address is rarely reversible. If a rail is unfamiliar, read the method card twice and start with a smaller test only when the product allows.

Bank holidays and maintenance windows are real. [[/news|News]] and bank apps publish them. Planning around windows beats submitting five frantic duplicates at midnight.`,
        zh: `大马出金通常回到你控制的本地银行资料。账号务必准确。一个颠倒数字就可能让申请进入人工复核或失败。

可行时优先使用存款用过的收款方。一致性有助于对账。[[/payment-methods|支付方式]]、[[/online-banking|网上银行]] 与电子钱包专页支持这种一致。

偏 DuitNow 的玩家仍须确认收银台显示的收款字段——不要假定每种转账用同一识别号。不确定时，大额首次出金前提问客服中心。

若收银台显示加密或其他通道，遵守其地址纪律。错误网络或错误地址很少可逆。不熟悉的通道请把方式卡片读两遍；仅在产品允许时从小额测试开始。

银行假日与维护窗口是真实的。[[/news|新闻室]] 与银行 APP 会公布。围绕窗口计划，胜过午夜连发五笔慌乱申请。`,
      },
    },
    {
      title: {
        en: "Processing windows, delays, and escalation",
        zh: "处理窗口、延迟与升级",
      },
      imageSrc: "/images/payments/heroes/fast-withdrawal.webp",
      imageAlt: {
        en: "Fast withdrawal expectations",
        zh: "快速提款预期",
      },
      body: {
        en: `After TPOWER approves a withdrawal, banking rails still need time to post. “Fast” on [[/fast-withdrawal|Fast Withdrawal]] describes operational ambition during normal windows — not immunity to every queue.

Statuses in cashier are the source of truth. Third-party screenshots in group chats are not. If your bank shows an incoming transfer after cashier completed, you are done. If cashier is still processing, wait a reasonable window before escalating.

When escalating, bring structure: local time of request, amount, destination bank name (masked account), and any cashier reference. That package helps [[/contact|Support Center]] more than emotional urgency.

Never “verify withdrawal” by installing a remote-control APK. That path is account-takeover theatre. Re-read [[/security|Platform Security]] and [[/payment-security|Payment Security]] if someone pushes that story.

If a withdrawal fails, read the failure reason when shown. Fix the data, then submit one corrected request. Stacking broken requests multiplies review load.`,
        zh: `TPOWER 批准提款后，银行通道仍需时间入账。[[/fast-withdrawal|快速提款]] 上的「快」描述正常窗口下的运营目标——不是对一切队列免疫。

收银台状态是真相来源。群聊第三方截图不是。若收银台完成后银行显示入账，你已完成。若仍处理中，合理窗口后再升级。

升级时带结构：申请本地时间、金额、收款银行名（掩码账号）、收银台参考号。这包信息比情绪紧迫更帮助 [[/contact|客服中心]]。

切勿通过安装远程控制 APK「验证提款」。那是盗号剧本。若有人推销该故事，重读 [[/security|平台安全]] 与 [[/payment-security|支付安全]]。

若提款失败，阅读显示的失败原因。修正资料后提交一笔更正申请。堆叠坏申请只会倍增复核负担。`,
      },
    },
    {
      title: {
        en: "Cluster links after you understand payouts",
        zh: "理解出金后的集群链接",
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      reverse: true,
      imageAlt: {
        en: "Continue on official TPOWER",
        zh: "在官方TPOWER继续",
      },
      body: {
        en: `Return to funding orientation on the [[/deposit-guide|Deposit Guide]] when you top up again. Compare rails on [[/payment-methods|Payment Methods]]. Keep FAQ dense answers on [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].

For register and return journeys use [[/register|Register]] and [[/login|Login]]. For trust context see [[/about|About]] and [[/customer-commitment|Customer Commitment]] without treating them as payout SLAs.

This Withdrawal Guide anchors TPOWER Withdrawal search intent with process depth — the opposite of a thin “cashout now” page.`,
        zh: `再次充值时回到 [[/deposit-guide|存款指南]]。在 [[/payment-methods|支付方式]] 比较通道。密集问答见 [[/deposit-withdrawal-faq|存提款常见问题]]。

注册与回访用 [[/register|注册]] 与 [[/login|登录]]。信任语境见 [[/about|关于我们]] 与 [[/customer-commitment|客户承诺]]——但不要把它们当成出金 SLA。

本提款指南用流程深度锚定 TPower 提款搜索意图——与单薄的「立刻出金」页相反。`,
      },
    },
  {
    title: { en: `Emotional cashouts vs planned cashouts`, zh: `情绪化出金 vs 计划出金` },
    body: { en: `Emotional cashouts happen after a swing session when you fear giving it back. Planned cashouts happen because you decided a stop point earlier. The Withdrawal Guide endorses planned cashouts. Emotional cashouts still work through the same cashier — but they collide more often with unfinished wagering and mismatched details you ignored while winning.

Write the stop point before you play. When you hit it, open Withdrawal Guide habits immediately: check withdrawable balance, confirm destination, submit once. Do not reopen slots “for one more spin” while the request processes.

If fear says “pay unlock fee now,” that fear is the attack surface. Payment Security and Support Center exist for that minute. Official TPOWER Withdrawal never sells fear.`, zh: `情绪化出金发生在波动场次后，你害怕还回去。计划出金发生在你更早决定停止点之后。提款指南背书计划出金。情绪化出金仍走同一收银台——但更常撞上未完成流水与赢钱时忽略的不匹配资料。

开玩前写下停止点。到达时立即打开提款指南习惯：查可提余额、确认收款方、提交一次。申请处理中不要重开老虎机「再来一轮」。

若恐惧说「现在付解锁费」，那恐惧就是攻击面。支付安全与客服中心为那一分钟存在。官方 TPower 提款从不贩卖恐惧。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Emotional cashouts vs planned cashouts`, zh: `情绪化出金 vs 计划出金` },
    reverse: true,
  }
  ],
  timelineTitle: {
    en: "Withdrawal timeline at a glance",
    zh: "提款时间线一览",
  },
  timeline: [
    {
      title: { en: "Prepare", zh: "准备" },
      body: {
        en: "Clear wagering doubts and align bank details with your identity.",
        zh: "弄清流水疑虑，并将银行资料与身份对齐。",
      },
    },
    {
      title: { en: "Request", zh: "申请" },
      body: {
        en: "Submit one withdrawal in the official cashier for the amount you want out.",
        zh: "在官方收银台提交一笔你想取出的金额。",
      },
    },
    {
      title: { en: "Review", zh: "复核" },
      body: {
        en: "Automated or manual checks may confirm eligibility and matching data.",
        zh: "自动或人工检查可能确认资格与匹配资料。",
      },
    },
    {
      title: { en: "Receive", zh: "到账" },
      body: {
        en: "Funds post to your bank or wallet after release and banking windows.",
        zh: "放款并经过银行窗口后，资金入账到银行或钱包。",
      },
    },
  ],
  securityTitle: {
    en: "Withdrawal security checklist",
    zh: "提款安全清单",
  },
  securityItems: [
    {
      title: { en: "No personal fee transfers", zh: "无私人手续费转账" },
      body: {
        en: "Official payouts never require paying a stranger to “unlock” cashout.",
        zh: "官方出金从不要求向陌生人付费「解锁」提款。",
      },
    },
    {
      title: { en: "OTP stays private", zh: "OTP 保持私密" },
      body: {
        en: "Bank and wallet OTPs are for you alone — never for chat agents.",
        zh: "银行与钱包 OTP 只属于你——绝不给聊天客服。",
      },
    },
    {
      title: { en: "Official document upload only", zh: "仅官方上传证件" },
      body: {
        en: "KYC files go through official paths, not random cloud links from DMs.",
        zh: "KYC 文件走官方路径，不是私信里的随机云盘链接。",
      },
    },
    {
      title: { en: "One processing request", zh: "一次处理一笔" },
      body: {
        en: "Duplicate stacked withdrawals while pending create noise, not speed.",
        zh: "待处理时堆叠重复提款制造噪音，不是速度。",
      },
    },
    {
      title: { en: "Trusted networks for large cashouts", zh: "大额出金用可信网络" },
      body: {
        en: "Prefer trusted Wi-Fi or mobile data you control for large requests.",
        zh: "大额申请优先使用你控制的可信 Wi-Fi 或移动数据。",
      },
    },
    {
      title: { en: "End shared-device sessions", zh: "结束共用设备会话" },
      body: {
        en: "Log out after requesting payouts on borrowed phones.",
        zh: "在外借手机申请出金后请登出。",
      },
    },
  ],
  faqTitle: { en: "Withdrawal Guide FAQ", zh: "提款指南常见问题" },
  faqs: [
    {
      question: {
        en: "How do TPOWER withdrawals work?",
        zh: "TPower 提款如何运作？",
      },
      answer: {
        en: "You request a payout in the official cashier to matching bank or wallet details. After eligibility and any verification, funds are released and then posted by your bank within its windows.",
        zh: "你在官方收银台向匹配的银行或钱包资料申请出金。资格与核验通过后放款，再由银行在其窗口内入账。",
      },
    },
    {
      question: {
        en: "Why was my withdrawal delayed?",
        zh: "为什么提款延迟？",
      },
      answer: {
        en: "Common causes include name mismatch, unfinished wagering, pending KYC, banking cut-offs, or review of unusual patterns. Check cashier status and contact Support Center with references if the wait exceeds a reasonable window.",
        zh: "常见原因包括姓名不符、流水未完成、KYC 待审、银行截点或异常模式复核。查看收银台状态；若超过合理窗口，带参考号联系客服中心。",
      },
    },
    {
      question: {
        en: "Can I withdraw to a different name?",
        zh: "可以提到他人名下吗？",
      },
      answer: {
        en: "Payouts should go to details matching your registered identity. Third-party destinations create compliance and delay risk.",
        zh: "出金应到与注册身份匹配的资料。第三方收款会带来合规与延误风险。",
      },
    },
    {
      question: {
        en: "Do I need KYC to withdraw?",
        zh: "提款需要 KYC 吗？",
      },
      answer: {
        en: "You may, especially for first payouts or larger amounts. Completing AML & KYC early usually saves time later.",
        zh: "可能需要，尤其首次或较大金额。提早完成 AML 与 KYC 通常更省时间。",
      },
    },
    {
      question: {
        en: "What if a bonus is still active?",
        zh: "若优惠仍进行中怎么办？",
      },
      answer: {
        en: "Withdrawable amounts may be limited until wagering completes. Read Promotions terms before requesting a full cashout.",
        zh: "流水完成前可提金额可能受限。申请全额出金前先读优惠条款。",
      },
    },
    {
      question: {
        en: "Is Fast Withdrawal guaranteed?",
        zh: "快速提款有保证吗？",
      },
      answer: {
        en: "Fast Withdrawal describes operational targets under normal conditions. Bank holidays and reviews can still add time.",
        zh: "快速提款描述正常条件下的运营目标。银行假日与复核仍可能增加时间。",
      },
    },
    {
      question: {
        en: "Someone asked for a withdrawal unlock fee — is that real?",
        zh: "有人要提款解锁费——是真的吗？",
      },
      answer: {
        en: "No. Official TPOWER will not ask you to pay a personal account to release a withdrawal. Report via Support Center.",
        zh: "不是。官方 TPOWER 不会要求你向私人账户付费才能放款。请通过客服中心举报。",
      },
    },
    {
      question: {
        en: "Where else should I read?",
        zh: "还应读哪些页面？",
      },
      answer: {
        en: "Deposit Guide, Payment Methods, Payment Security, Deposit & Withdrawal FAQ, and the withdrawal blog guide.",
        zh: "存款指南、支付方式、支付安全、存提款常见问题，以及提款攻略文章。",
      },
    },
  ],
  relatedTitle: {
    en: "Related payout resources",
    zh: "相关出金资源",
  },
  relatedLinks: withPaymentRelated([
    {
      href: "/fast-withdrawal",
      label: { en: "Fast Withdrawal", zh: "快速提款" },
    },
  ]),
  ctaTitle: {
    en: "Request payouts the official way",
    zh: "用官方方式申请出金",
  },
  ctaDescription: {
    en: "Login, confirm matching bank details, and submit one clean withdrawal — with Support Center ready if you need evidence-based help.",
    zh: "登录、确认匹配银行资料、提交一笔干净提款——需要基于证据的帮助时，客服中心随时在。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
