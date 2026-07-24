import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentDepositWithdrawalFaq: PaymentPageContent = {
  id: "deposit-withdrawal-faq",
  path: "/deposit-withdrawal-faq",
  heroImage: "/images/payments/heroes/deposit-withdrawal-faq.webp",
  metaTitle: { en: `TPOWER Deposit & Withdrawal FAQ | Money Questions Answered`, zh: `TPower存提款常见问题｜资金问答汇总` },
  metaDescription: { en: `TPOWER Deposit & Withdrawal FAQ: pending deposits, payout delays, limits, KYC, methods, bonuses, and links into the full payment cluster.`, zh: `TPOWER线上博彩存提款常见问题：存款待处理、出金延迟、限额、KYC、方式、优惠，以及完整支付集群链接。` },
  heroTitle: { en: `Deposit & Withdrawal FAQ`, zh: `TPOWER线上博彩 存提款常见问题` },
  heroSubtitle: { en: `Rapid answers for money moments — with deep guides one click away when you need more than a paragraph.`, zh: `资金时刻的快速答案——需要超过一段时，深度指南一键可达。` },
  introduction: { en: `The Deposit & Withdrawal FAQ is the rapid-answer hub for TPOWER money questions. It does not replace the Deposit Guide or Withdrawal Guide; it routes impatient questions to clear answers and then to the right authority page when depth is required.

Use this page when you need a quick status meaning, a yes/no on agent deposits, or a pointer to FPX, DuitNow, wallets, online banking, instant deposit, or fast withdrawal. Each answer stays unique to FAQ intent — short, direct, and linked.

For mechanics open [[/deposit-guide|Deposit Guide]], [[/withdrawal-guide|Withdrawal Guide]], [[/payment-methods|Payment Methods]], [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], [[/online-banking|Online Banking]], [[/instant-deposit|Instant Deposit]], [[/fast-withdrawal|Fast Withdrawal]], and [[/payment-security|Payment Security]].

Always act on official surfaces: [[/login|Login]], [[/register|Register]], [[/download|Download]], cashier, and [[/contact|Support Center]]. Keep [[/promotions|Promotions]], [[/responsible-gaming|Responsible Gaming]], [[/aml-kyc|AML & KYC]], [[/vip|VIP]], [[/blog|Blog]], [[/news|News]], and [[/faq|FAQ]] nearby.

This hub strengthens EEAT for deposit and withdrawal commercial queries by answering like the official team: calm, specific, and allergic to unofficial shortcuts.

FAQ hubs fail when they pretend to replace textbooks. This page succeeds when it triagees: short answer, then deep link. If you need a full FPX story, leave for FPX Deposit. If you need scam defence, leave for Payment Security.

Searchers often arrive with one symptom. Match the symptom, act officially, then bookmark the deeper guide for next time. That is how FAQ becomes a gateway into the cluster rather than a dead end.

Keep asking better questions: not “why slow?” but “bank success or not?”, “method name?”, “wagering active?”, “KYC flagged?”. Better questions unlock better Support Center outcomes.

The FAQ is bilingual by design. Chinese and English answers are written for different search cultures, not mirrored sentence by sentence.`, zh: `「存提款常见问题」是 TPOWER 资金问题的快速答案中心。它不取代存款指南或提款指南；它把急躁问题导向清楚答案，并在需要深度时路由到正确权威页。

当你需要快速理解状态含义、代存是否可以，或指向 FPX、DuitNow、钱包、网上银行、即时存款、快速提款时，用本页。每条答案保持 FAQ 意图——短、直接、可点。

机制请打开 [[/deposit-guide|存款指南]]、[[/withdrawal-guide|提款指南]]、[[/payment-methods|支付方式]]、[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]]、[[/online-banking|网上银行]]、[[/instant-deposit|即时存款]]、[[/fast-withdrawal|快速提款]]、[[/payment-security|支付安全]]。

始终在官方表面行动：[[/login|登录]]、[[/register|注册]]、[[/download|下载]]、收银台与 [[/contact|客服中心]]。附近保留 [[/promotions|优惠]]、[[/responsible-gaming|负责任博彩]]、[[/aml-kyc|AML与KYC]]、[[/vip|VIP]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]。

本中心以官方团队口吻回答存提款商业查询——冷静、具体、排斥非官方捷径——从而强化 EEAT。

FAQ 中心若假装取代课本就会失败。本页在分诊时成功：短答案，再深度链接。若需要完整 FPX 故事，去 FPX 存款。若需要骗局防御，去支付安全。

搜索者常带着一个症状到来。匹配症状、官方行动，再为下次收藏更深指南。这样 FAQ 成为进入集群的门户，而不是死胡同。

持续问更好的问题：不是「为何慢？」，而是「银行是否成功？」「方式名？」「流水是否进行？」「KYC 是否标记？」。更好的问题解锁更好的客服结果。

FAQ 按设计双语。中英文答案面向不同搜索文化撰写，不是逐句镜像。` },
  stats: [
    { value: { en: `Q&A`, zh: `问答` }, label: { en: `Rapid money answers, deep links out`, zh: `快速资金答案，链出深度页` } },
    { value: { en: `Both`, zh: `双向` }, label: { en: `Deposits and withdrawals in one hub`, zh: `存款与提款同一中心` } },
    { value: { en: `Official`, zh: `官方` }, label: { en: `No agent-account workarounds endorsed`, zh: `不背书代理账户变通` } },
    { value: { en: `24/7`, zh: `全天` }, label: { en: `Support Center for case-specific help`, zh: `个案帮助走客服中心` } },
  ],
  benefitsTitle: { en: `Why use the money FAQ hub`, zh: `为何使用资金 FAQ 中心` },
  benefits: [
{ icon: "zap", title: { en: `Faster orientation`, zh: `更快定向` }, body: { en: `Get a clear answer, then open the matching deep guide.`, zh: `先得清楚答案，再打开对应深度指南。` } },
{ icon: "eye", title: { en: `Status literacy`, zh: `状态素养` }, body: { en: `Learn what pending/processing/completed imply.`, zh: `了解待处理/处理中/已完成含义。` } },
{ icon: "shield", title: { en: `Scam resistance`, zh: `抗骗` }, body: { en: `FAQ answers explicitly reject unofficial rails.`, zh: `FAQ 答案明确拒绝非官方通道。` } },
{ icon: "building", title: { en: `Method routing`, zh: `方式路由` }, body: { en: `Jump to FPX, DuitNow, wallets, or banking pages quickly.`, zh: `快速跳到 FPX、DuitNow、钱包或银行页。` } },
{ icon: "banknote", title: { en: `Payout clarity`, zh: `出金清楚` }, body: { en: `Understand delay causes without drama.`, zh: `不带戏剧地理解延迟原因。` } },
{ icon: "check", title: { en: `Cluster completeness`, zh: `集群完整` }, body: { en: `Every answer points into the payment topic cluster.`, zh: `每个答案都指向支付主题集群。` } }
  ],
  howToTitle: { en: `How to use this FAQ effectively`, zh: `如何有效使用本 FAQ` },
  howToDescription: { en: `A short path from question to official action.`, zh: `从问题到官方行动的短路径。` },
  howToSteps: [
{ name: { en: `Find your question type`, zh: `找到问题类型` }, text: { en: `Deposit pending, payout delay, method choice, or security doubt.`, zh: `存款待处理、出金延迟、方式选择或安全疑虑。` } },
{ name: { en: `Read the short answer`, zh: `阅读短答案` }, text: { en: `Use the FAQ response as the official default posture.`, zh: `把 FAQ 回答当作官方默认姿态。` } },
{ name: { en: `Open the deep guide`, zh: `打开深度指南` }, text: { en: `Follow the linked authority page for full process.`, zh: `跟随链接的权威页看完整流程。` } },
{ name: { en: `Act on official cashier`, zh: `在官方收银台行动` }, text: { en: `Login and use listed rails only.`, zh: `登录并只用列出的通道。` } },
{ name: { en: `Collect evidence if stuck`, zh: `卡住则收集证据` }, text: { en: `Time, amount, method, references.`, zh: `时间、金额、方式、参考号。` } },
{ name: { en: `Contact Support Center`, zh: `联系客服中心` }, text: { en: `Escalate with structure — not secrets.`, zh: `结构化升级——不交机密。` } }
  ],
  sections: [
{
    title: { en: `Deposit questions this hub prioritises`, zh: `本中心优先的存款问题` },
    body: { en: `Pending after bank success, minimums, agent deposits, bonus method eligibility, and app vs web differences dominate real searches. Answers here stay short; Deposit Guide and method pages carry the essays.

If your issue is speed psychology, Instant Deposit is the specialised page. If your issue is a specific rail, open that rail’s guide instead of forcing everything into FAQ length.`, zh: `银行成功后仍待处理、最低额、代存、红利方式资格、APP 与网页差异，主导真实搜索。这里的答案保持短；长文由存款指南与方式页承担。

若问题是速度心理，即时存款是专页。若问题是特定通道，打开该通道指南，而不是把一切塞进 FAQ 长度。` },
    imageSrc: "/images/payments/heroes/deposit-withdrawal-faq.webp",
    imageAlt: { en: `Deposit questions this hub prioritises`, zh: `本中心优先的存款问题` },
    reverse: false,
  },
{
    title: { en: `Withdrawal questions this hub prioritises`, zh: `本中心优先的提款问题` },
    body: { en: `Delays, name mismatch, KYC prompts, bonus locks, and unlock-fee scams dominate payout anxiety. Withdrawal Guide and Fast Withdrawal own depth; FAQ owns triage.

Never treat a FAQ answer as permission to use unofficial cashout brokers.`, zh: `延迟、姓名不符、KYC 提示、红利锁定与解锁费骗局主导出金焦虑。深度由提款指南与快速提款拥有；FAQ 拥有分诊。

切勿把 FAQ 答案当成使用非官方出金中介的许可。` },
    imageSrc: "/images/payments/heroes/withdrawal-guide.webp",
    imageAlt: { en: `Withdrawal questions this hub prioritises`, zh: `本中心优先的提款问题` },
    reverse: true,
  },
{
    title: { en: `Security questions belong here too`, zh: `安全问题也属于这里` },
    body: { en: `Money FAQ without security is incomplete. Payment Security answers the threat patterns; this hub repeats the non-negotiables in FAQ form so searchers landing on Q&A still hear them.`, zh: `没有安全的资金 FAQ 不完整。支付安全回答威胁模式；本中心以 FAQ 形式重复不可妥协规则，让落到问答的搜索者仍能听到。` },
    imageSrc: "/images/payments/heroes/payment-security.webp",
    imageAlt: { en: `Security questions belong here too`, zh: `安全问题也属于这里` },
    reverse: false,
  },
{
    title: { en: `After the FAQ: full cluster navigation`, zh: `FAQ 之后：完整集群导航` },
    body: { en: `Payment Methods remains the map. Guides remain the textbooks. Support Center remains the human path. Responsible Gaming remains the budget path. Together they make TPOWER’s payment ecosystem an authority cluster, not twelve thin landings.`, zh: `支付方式仍是地图。指南仍是课本。客服中心仍是人工路径。负责任博彩仍是预算路径。它们共同让 TPOWER 支付生态成为权威集群，而不是十二个单薄着陆页。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `After the FAQ: full cluster navigation`, zh: `FAQ 之后：完整集群导航` },
    reverse: true,
  }
,
  {
    title: { en: `Using FAQ answers in Support Center tickets`, zh: `在客服中心工单中使用 FAQ 答案` },
    body: { en: `When you open Support Center, paste the structured facts this FAQ taught you to collect: time, amount, method, bank/wallet success yes/no, reference if any, wagering active yes/no. Structured tickets resolve faster than essays about feelings.

FAQ does not replace humans for edge cases. It prepares humans with better inputs.`, zh: `打开客服中心时，粘贴本 FAQ 教你收集的结构化事实：时间、金额、方式、银行/钱包是否成功、参考号、流水是否进行。结构化工单比感觉散文更快解决。

FAQ 不取代人类处理边界个案。它用更好的输入准备人类。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Using FAQ answers in Support Center tickets`, zh: `在客服中心工单中使用 FAQ 答案` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `From FAQ to resolved money action`, zh: `从 FAQ 到已解决资金动作` },
  timeline: [
{ title: { en: `Ask`, zh: `提问` }, body: { en: `Match your symptom to a FAQ item.`, zh: `把症状匹配到 FAQ 条目。` } },
{ title: { en: `Learn`, zh: `学习` }, body: { en: `Open the linked deep guide if needed.`, zh: `需要时打开链接的深度指南。` } },
{ title: { en: `Act`, zh: `行动` }, body: { en: `Use official cashier or Support Center.`, zh: `使用官方收银台或客服中心。` } },
{ title: { en: `Confirm`, zh: `确认` }, body: { en: `Verify status; keep evidence if unresolved.`, zh: `核对状态；未解决则保留证据。` } }
  ],
  securityTitle: { en: `FAQ security reminders`, zh: `FAQ 安全提醒` },
  securityItems: [
{ title: { en: `No agent deposits`, zh: `无代存` }, body: { en: `Not supported; not safe.`, zh: `不受支持；不安全。` } },
{ title: { en: `No unlock fees`, zh: `无解锁费` }, body: { en: `Not official; report them.`, zh: `非官方；请举报。` } },
{ title: { en: `No OTP sharing`, zh: `不分享 OTP` }, body: { en: `Repeated because it saves accounts.`, zh: `重复强调，因为能救账户。` } },
{ title: { en: `Official apps only`, zh: `仅官方 APP` }, body: { en: `Download hub path only.`, zh: `只走下载中心路径。` } },
{ title: { en: `Evidence for support`, zh: `客服要证据` }, body: { en: `Time + amount + method.`, zh: `时间+金额+方式。` } },
{ title: { en: `Budget still applies`, zh: `预算仍适用` }, body: { en: `FAQ speed ≠ chase permission.`, zh: `FAQ 速度≠追损许可。` } }
  ],
  faqTitle: { en: `Deposit & Withdrawal questions`, zh: `存提款问题` },
  faqs: [
{ question: { en: `Why is my TPOWER deposit pending?`, zh: `为什么 TPower 存款待处理？` }, answer: { en: `Short reconciliation after bank/wallet success is common. If it persists, contact Support Center with time, amount, and method — don’t duplicate blindly.`, zh: `银行/钱包成功后的短对账常见。若持续，向客服提供时间、金额与方式——不要盲目重复。` } },
{ question: { en: `How long do TPOWER withdrawals take?`, zh: `TPower 提款要多久？` }, answer: { en: `Depends on eligibility, reviews, and bank windows. Prepare matching details and KYC early; see Fast Withdrawal and Withdrawal Guide.`, zh: `取决于资格、复核与银行窗口。提早准备匹配资料与 KYC；见快速提款与提款指南。` } },
{ question: { en: `Can I deposit via an agent?`, zh: `可以通过代理存款吗？` }, answer: { en: `No. Official deposits use the cashier rails on Payment Methods only.`, zh: `不可以。官方存款只用支付方式上的收银台通道。` } },
{ question: { en: `What payment methods does TPOWER support?`, zh: `TPOWER 支持哪些支付方式？` }, answer: { en: `Live options appear in cashier; guides cover FPX, DuitNow, Touch 'n Go, GrabPay, and online banking families.`, zh: `现场选项在收银台；指南覆盖 FPX、DuitNow、Touch 'n Go、GrabPay 与网上银行家族。` } },
{ question: { en: `Why can’t I withdraw my full balance?`, zh: `为什么不能提全额余额？` }, answer: { en: `Bonus locks or unfinished wagering may reduce withdrawable amounts. Check Promotions terms.`, zh: `红利锁定或未完成流水可能减少可提金额。查看优惠条款。` } },
{ question: { en: `Do I need KYC for withdrawals?`, zh: `提款需要 KYC 吗？` }, answer: { en: `Often for first or larger payouts. Complete AML & KYC via official paths.`, zh: `首次或较大出金时常需要。经官方路径完成 AML 与 KYC。` } },
{ question: { en: `Is someone asking for a withdrawal fee legitimate?`, zh: `有人要提款费合法吗？` }, answer: { en: `No. Report via Support Center and read Payment Security.`, zh: `不合法。通过客服中心举报并阅读支付安全。` } },
{ question: { en: `Where are the full guides?`, zh: `完整指南在哪里？` }, answer: { en: `Deposit Guide, Withdrawal Guide, method pages, Instant Deposit, Fast Withdrawal, Payment Security, and Payment Methods hub.`, zh: `存款指南、提款指南、方式页、即时存款、快速提款、支付安全与支付方式中心。` } }
  ],
  relatedTitle: { en: `Continue into the payment cluster`, zh: `继续进入支付集群` },
  relatedLinks: withPaymentRelated([

  ]),
  ctaTitle: { en: `Got your answer — take official action`, zh: `已有答案—采取官方行动` },
  ctaDescription: { en: `Login to the cashier or contact Support Center with evidence. Keep using official TPOWER payment pages only.`, zh: `登录收银台或带证据联系客服中心。只继续使用官方 TPOWER 支付页面。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
