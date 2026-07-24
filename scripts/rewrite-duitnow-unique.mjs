import fs from "node:fs";
import path from "node:path";
import {
  renderPage,
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
} from "./lib/payment-page-factory.mjs";

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

write("duitnow-deposit.ts", "paymentDuitnowDeposit", {
  id: "duitnow-deposit",
  path: "/duitnow-deposit",
  heroImage: "/images/payments/heroes/duitnow-deposit.webp",
  metaTitle: {
    en: "TPOWER DuitNow Deposit | Real-Time Transfer Guide",
    zh: "TPower DuitNow存款｜实时转账入金指南",
  },
  metaDescription: {
    en: "Official TPOWER DuitNow Deposit guide: real-time Malaysia transfers, cashier identifiers, references, status checks, and safer DuitNow funding habits.",
    zh: "TPOWER线上博彩官方 DuitNow 存款指南：大马实时转账、收银台识别信息、参考号、状态核对与更安全的 DuitNow 入金习惯。",
  },
  heroTitle: { en: "TPOWER DuitNow Deposit", zh: "TPOWER线上博彩 DuitNow存款" },
  heroSubtitle: {
    en: "Push value the way Malaysians already move money between apps — through official cashier instructions.",
    zh: "用大马人已在 APP 间移动资金的方式推送价值——遵循官方收银台指示。",
  },
  introduction: P(
    [
      `TPOWER DuitNow Deposit is written for real-time transfer intent. Malaysians already use DuitNow-style rails for rent, family, and merchant payments. This page explains how that everyday muscle maps onto the official TPOWER cashier — without copying FPX checkout language or e-wallet PIN essays.`,
      `FPX lives on [[/fpx-deposit|FPX Deposit]]. Wallets live on [[/touch-n-go|Touch 'n Go]] and [[/grabpay|GrabPay Payments]]. Broader IB discipline lives on [[/online-banking|Online Banking]]. Shared funding theory: [[/deposit-guide|Deposit Guide]]. Catalogue: [[/payment-methods|Payment Methods]].`,
      `Always copy destination or proxy details from the live cashier after [[/login|Login]]. Yesterday’s screenshot in a WhatsApp group is not a DuitNow method. Session-bound instructions exist so reconciliation can happen. Chat QRs to personal wallets fail [[/payment-security|Payment Security]].`,
      `References are the hero artefact of DuitNow nights. When your bank app shows a reference, save it. [[/contact|Support Center]] resolves “bank success / cashier pending” faster with references than with emotional timelines.`,
      `Real-time does not mean zero queue forever. [[/instant-deposit|Instant Deposit]] frames expectations. If a transfer never left your bank, do not assume TPOWER owes credit. Check debit first, then retry once cleanly.`,
      `Name alignment still matters for [[/withdrawal-guide|Withdrawal Guide]] and [[/fast-withdrawal|Fast Withdrawal]]. Fund from sources that match [[/aml-kyc|AML & KYC]] identity. Budget with [[/responsible-gaming|Responsible Gaming]]. Offers: [[/promotions|Promotions]]. Apps: [[/download|Download]]. Learning: [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/vip|VIP]], [[/register|Register]].`,
      `DuitNow authority on TPOWER is operational: correct identifiers, single push, short patience, evidence-ready support. Keyword presence around TPOWER DuitNow is natural because that is the product language players type when they are about to send MYR.`,
      `Avoid “DuitNow agent proxy” stories that ask you to transfer to a personal proxy who “credits within 30 seconds.” That pattern destroys the reference chain that makes official support solvable.`,
      `When DuitNow feels slower than usual, check bank notices and News before inventing a third transfer. Cluster discipline beats improvisation.`,
    ],
    [
      `「TPOWER DuitNow存款」为实时转账意图而写。大马人已用 DuitNow 风格通道付租、转给家人、付商户。本页说明日常肌肉如何映射到官方 TPOWER 收银台——不复制 FPX 结账语言或电子钱包 PIN 散文。`,
      `FPX 在 [[/fpx-deposit|FPX存款]]。钱包在 [[/touch-n-go|Touch 'n Go]] 与 [[/grabpay|GrabPay支付]]。更广网银纪律在 [[/online-banking|网上银行]]。共用入金理论：[[/deposit-guide|存款指南]]。目录：[[/payment-methods|支付方式]]。`,
      `请在 [[/login|登录]] 后只从现场收银台复制收款或代理识别信息。WhatsApp 群里昨天的截图不是 DuitNow 方式。会话绑定指示存在，是为了能对账。指向私人钱包的聊天 QR 通不过 [[/payment-security|支付安全]]。`,
      `参考号是 DuitNow 夜晚的英雄物件。银行 APP 显示参考号时请保存。[[/contact|客服中心]] 处理「银行成功/收银台待处理」时，有参考号比情绪时间线更快。`,
      `实时不代表永远零队列。[[/instant-deposit|即时存款]] 框定预期。若转账从未离开银行，不要假定 TPOWER 欠入账。先查扣款，再干净重试一次。`,
      `姓名对齐仍影响 [[/withdrawal-guide|提款指南]] 与 [[/fast-withdrawal|快速提款]]。从匹配 [[/aml-kyc|AML与KYC]] 身份的来源入金。用 [[/responsible-gaming|负责任博彩]] 预算。优惠：[[/promotions|优惠专区]]。APP：[[/download|下载]]。学习：[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/vip|VIP]]、[[/register|注册]]。`,
      `TPOWER 上的 DuitNow 权威是运营性的：正确识别信息、单次推送、短耐心、证据就绪的客服。围绕 TPower DuitNow 的关键词自然出现，因为那是玩家准备付出马币时输入的产品语言。`,
      `避开要求你转到私人代理、「30 秒入账」的「DuitNow 代理」故事。该模式摧毁让官方客服可解的参考号链。`,
      `当 DuitNow 感觉比平时慢，先查银行通知与新闻，再发明第三笔转账。集群纪律胜过即兴。`,
    ],
  ),
  stats: [
    { vEn: "Push", vZh: "推送", lEn: "Real-time transfer culture mapped to cashier", lZh: "实时转账文化映射到收银台" },
    { vEn: "ID", vZh: "识别", lEn: "Copy live cashier identifiers only", lZh: "只复制现场收银台识别信息" },
    { vEn: "Ref#", vZh: "参考号", lEn: "Save bank references for support", lZh: "为客服保存银行参考号" },
    { vEn: "Once", vZh: "一次", lEn: "One clean push while pending", lZh: "待处理时只保留一笔干净推送" },
  ],
  benefitsTitle: { en: "Why DuitNow fits TPOWER Malaysia players", zh: "为何 DuitNow 适合 TPOWER 大马玩家" },
  benefits: [
    feature("zap", "Everyday transfer muscle", "日常转账肌肉", "You already know the gesture from life outside gaming.", "你在游戏外的生活里已熟悉这个动作。"),
    feature("file", "Reference-friendly recovery", "参考号友好恢复", "Saved refs turn edge cases into solvable tickets.", "保存的参考号把边界个案变成可解工单。"),
    feature("eye", "Near real-time feedback", "接近实时反馈", "Successful pushes usually show quickly when rails are healthy.", "通道健康时成功推送通常很快显示。"),
    feature("shield", "Anti-proxy clarity", "反代理清楚", "Official DuitNow never begins as a stranger’s personal QR.", "官方 DuitNow 从不从陌生人私人 QR 开始。"),
    feature("building", "Works beside FPX nights", "与 FPX 夜晚并用", "When checkout rails struggle, transfer culture can still work.", "结账通道吃力时，转账文化仍可能可用。"),
    feature("check", "Identity continuity", "身份连续", "Matching sources help later withdrawals stay smooth.", "匹配来源让日后提款更顺。"),
  ],
  howToTitle: { en: "How to deposit with DuitNow on TPOWER", zh: "如何在 TPOWER 用 DuitNow 存款" },
  howToDescription: {
    en: "Transfer-first steps emphasising live identifiers and references.",
    zh: "强调现场识别信息与参考号的转账优先步骤。",
  },
  howToSteps: [
    howTo("Login and open cashier", "登录并打开收银台", "Use official TPOWER web or Download app only.", "只用官方 TPOWER 网页或下载 APP。"),
    howTo("Select DuitNow option", "选择 DuitNow 选项", "Choose DuitNow when listed for your account session.", "当账户会话列出时选择 DuitNow。"),
    howTo("Copy live details exactly", "精确复制现场资料", "Do not reuse old group screenshots.", "不要复用旧群截图。"),
    howTo("Push from your bank app", "从银行 APP 推送", "Complete the transfer and save any reference shown.", "完成转账并保存显示的参考号。"),
    howTo("Confirm cashier credit", "确认收银台入账", "Wait for completed status before playing.", "完成状态后再玩。"),
    howTo("Support with reference", "带参考号找客服", "If pending persists, send time, amount, and ref to Support Center.", "若持续待处理，向客服发送时间、金额与参考号。"),
  ],
  sections: [
    section(
      "Identifiers: why live cashier details beat group photos",
      "识别信息：为何现场收银台资料胜过群照片",
      `DuitNow funding fails socially when players trust a forwarded image more than the cashier. Images age. Sessions rotate. Official instructions are generated for reconciliation.

If someone says “use this DuitNow forever,” they are describing a personal collection account, not TPOWER DuitNow. Payment Methods will never list that pattern.`,
      `当玩家更信任转发图片而不是收银台时，DuitNow 入金在社会层面失败。图片会过期。会话会轮换。官方指示为对账而生成。

若有人说「永远用这个 DuitNow」，他们在描述私人归集账户，不是 TPower DuitNow。支付方式永远不会列出该模式。`,
      "/images/payments/heroes/duitnow-deposit.webp",
      false,
    ),
    section(
      "Reading bank success vs cashier pending on DuitNow",
      "解读 DuitNow 上的银行成功 vs 收银台待处理",
      `Bank apps can show success while cashier reconciliation still runs. That gap is usually minutes, not mysteries. Duplicate pushes during the gap create two signals and one confused night.

Instant Deposit explains the emotional side of waiting. This DuitNow page explains the artefact side: keep the reference, then escalate once.`,
      `银行 APP 可显示成功，而收银台对账仍在进行。该间隙通常是分钟，不是谜。间隙中重复推送会造成两个信号与一个混乱夜晚。

即时存款解释等待的情绪面。本 DuitNow 页解释物件面：保留参考号，然后升级一次。`,
      NEWS,
      true,
    ),
    section(
      "DuitNow and later withdrawals",
      "DuitNow 与日后提款",
      `Funding from matching names reduces payout friction. If you DuitNow from a spouse account “just this once,” expect Withdrawal Guide friction later. AML & KYC exists to make identity consistent — not to punish real-time culture.`,
      `从匹配姓名入金减少出金摩擦。若「只这一次」从配偶账户 DuitNow，日后提款指南可能摩擦。AML 与 KYC 是为了身份一致——不是惩罚实时文化。`,
      "/images/payments/heroes/withdrawal-guide.webp",
      false,
    ),
    section(
      "Cluster position for TPOWER DuitNow searches",
      "TPower DuitNow 搜索的集群位置",
      `This page owns DuitNow intent. Cross-link Deposit Guide for shared logic, Payment Security for proxy scams, Fast Withdrawal for outbound timing, and Deposit & Withdrawal FAQ for rapid symptoms.`,
      `本页拥有 DuitNow 意图。交叉链接存款指南谈共用逻辑、支付安全谈代理骗局、快速提款谈出金时效、存提款 FAQ 谈快速症状。`,
      CTA,
      true,
    ),
  ],
  timelineTitle: { en: "DuitNow deposit timeline", zh: "DuitNow 存款时间线" },
  timeline: [
    timeline("Instruct", "指示", "Read live cashier DuitNow details.", "阅读现场收银台 DuitNow 资料。"),
    timeline("Push", "推送", "Transfer from your bank app.", "从银行 APP 转账。"),
    timeline("Save", "保存", "Keep reference if shown.", "若显示则保存参考号。"),
    timeline("Credit", "入账", "Verify cashier completed status.", "核对收银台完成状态。"),
  ],
  securityTitle: { en: "DuitNow security checklist", zh: "DuitNow 安全清单" },
  securityItems: [
    trust("Live details only", "仅现场资料", "No recycled group QRs.", "不回收群 QR。"),
    trust("No proxy collectors", "无代理归集", "Personal proxies are not official DuitNow.", "私人代理不是官方 DuitNow。"),
    trust("Reference hygiene", "参考号卫生", "Save refs before closing the bank app.", "关闭银行 APP 前保存参考号。"),
    trust("One pending push", "一笔待处理推送", "Don’t double-send while reconciling.", "对账中不要双发。"),
    trust("OTP stays in bank", "OTP 留在银行", "Never forward codes to “credit faster.”", "绝不转发验证码以求「更快入账」。"),
    trust("Official support", "官方客服", "Escalate via Support Center only.", "只经客服中心升级。"),
  ],
  faqTitle: { en: "DuitNow Deposit FAQ", zh: "DuitNow 存款常见问题" },
  faqs: [
    faq("How do I make a TPOWER DuitNow deposit?", "如何进行 TPower DuitNow 存款？", "Login, open cashier, select DuitNow, copy live details, transfer from your bank, save references, confirm credit.", "登录，打开收银台，选择 DuitNow，复制现场资料，从银行转账，保存参考号，确认入账。"),
    faq("Why is DuitNow pending after bank success?", "为什么银行成功后 DuitNow 仍待处理？", "Short reconciliation is normal. If it persists, contact Support Center with the bank reference.", "短对账正常。若持续，带银行参考号联系客服中心。"),
    faq("Can I use a personal DuitNow QR from chat?", "可用聊天里的私人 DuitNow QR 吗？", "No. That is not an official TPOWER method.", "不可以。那不是官方方式。"),
    faq("Is DuitNow faster than FPX?", "DuitNow 比 FPX 快吗？", "Sometimes. Health of rails matters more than labels. See Instant Deposit for expectation framing.", "有时。通道健康比标签更重要。时效预期见即时存款。"),
    faq("What if I typed the wrong amount?", "若金额输错怎么办？", "If not completed, cancel in bank flow when possible. If completed, contact Support Center — don’t invent adjustment transfers to strangers.", "未完成时尽量在银行流程取消。已完成则联系客服——不要发明向陌生人调整转账。"),
    faq("Does DuitNow work in the app?", "APP 上 DuitNow 可用吗？", "When listed in the app cashier, yes — install via Download only.", "当 APP 收银台列出时可用——只经下载安装。"),
    faq("Will DuitNow deposits affect withdrawals?", "DuitNow 存款影响提款吗？", "Matching identity sources usually help later payouts on the Withdrawal Guide.", "匹配身份来源通常有助日后提款指南出金。"),
    faq("Where next?", "下一步去哪？", "Payment Methods, Deposit Guide, Payment Security, Deposit & Withdrawal FAQ.", "支付方式、存款指南、支付安全、存提款常见问题。"),
  ],
  relatedTitle: { en: "Related DuitNow & payment pages", zh: "相关 DuitNow 与支付页面" },
  extraLinks: [],
  ctaTitle: { en: "Push DuitNow the official way", zh: "用官方方式推送 DuitNow" },
  ctaDescription: {
    en: "Login, copy live cashier details, transfer once, and keep your reference ready for Support Center.",
    zh: "登录，复制现场收银台资料，转账一次，并为客服中心准备好参考号。",
  },
});

console.log("duitnow ok");
