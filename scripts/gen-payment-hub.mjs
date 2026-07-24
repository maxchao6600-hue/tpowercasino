import fs from "node:fs";
import path from "node:path";
import {
  L,
  feature,
  howTo,
  timeline,
  trust,
  faq,
  section,
  renderPage,
} from "./lib/payment-page-factory.mjs";

const dir = path.join(process.cwd(), "src/data/payments-center");

function write(file, exportName, data) {
  fs.writeFileSync(path.join(dir, file), renderPage(exportName, data));
  console.log("wrote", file);
}

const CTA = "/images/cta/tpower-join-cta.webp";
const NEWS = "/images/news/tpower-duitnow-ewallet-tips.webp";

/** Build a long unique EN/ZH pair from topic beats */
function longForm(enParas, zhParas) {
  return { en: enParas.join("\n\n"), zh: zhParas.join("\n\n") };
}

// ---- payment-methods hub ----
write("payment-methods.ts", "paymentMethodsHub", {
  id: "payment-methods",
  path: "/payment-methods",
  heroImage: "/images/payments/heroes/payment-methods.webp",
  metaTitle: {
    en: "TPOWER Payment Methods | FPX, DuitNow, E-Wallets & Banking",
    zh: "TPower支付方式｜FPX、DuitNow、电子钱包与银行",
  },
  metaDescription: {
    en: "TPOWER Payment Methods hub for Malaysia: compare FPX, DuitNow, Touch 'n Go, GrabPay, online banking, instant deposit habits, and security links.",
    zh: "TPOWER线上博彩支付方式中心：比较 FPX、DuitNow、Touch 'n Go、GrabPay、网上银行、即时存款习惯与安全链接。",
  },
  heroTitle: {
    en: "TPOWER Payment Methods",
    zh: "TPOWER线上博彩 支付方式",
  },
  heroSubtitle: {
    en: "The Malaysia money map — choose rails you recognise, then open the deep guide for each path.",
    zh: "大马资金地图——选择你认得的通道，再打开每条路径的深度指南。",
  },
  introduction: longForm(
    [
      `The TPOWER Payment Methods hub is the map of how Malaysia players move money into and around the official cashier. It is not a thin logo wall. Each rail links to a dedicated authority page so commercial intent around TPOWER Payment, TPOWER FPX, TPOWER DuitNow, and e-wallet queries can land on specific depth — while this hub explains how to choose.`,
      `Start by knowing what you can finish tonight. If your bank FPX flow is familiar, open [[/fpx-deposit|FPX Deposit]]. If you already move salary with DuitNow, open [[/duitnow-deposit|DuitNow Deposit]]. If your phone wallet is Touch 'n Go or GrabPay, use [[/touch-n-go|Touch 'n Go]] or [[/grabpay|GrabPay Payments]]. Broader banking habits live on [[/online-banking|Online Banking]].`,
      `Speed expectations belong on [[/instant-deposit|Instant Deposit]] and [[/fast-withdrawal|Fast Withdrawal]]. Process depth for funding and payouts sits on the [[/deposit-guide|Deposit Guide]] and [[/withdrawal-guide|Withdrawal Guide]]. Security and phishing around cashier language sit on [[/payment-security|Payment Security]]. Dense Q&A lives on [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].`,
      `Always fund through the logged-in cashier after [[/login|Login]] or [[/register|Register]]. Personal-account “agent deposits” are not a payment method — they are a risk pattern. Pair this hub with [[/responsible-gaming|Responsible Gaming]] so method choice does not become chase fuel.`,
      `Promotions may exclude certain rails. Read [[/promotions|Promotions]] before depositing solely for a bonus. VIP progression on [[/vip|VIP]] never requires unofficial payment channels. App users should install only via [[/download|Download]] so the cashier you open is the real one.`,
      `When a method fails, switch rails rather than inventing chat workarounds. Support lives at [[/contact|Support Center]]. Education continues on [[/blog|Knowledge Center]], [[/news|News]], and [[/faq|FAQ]]. Trust pages such as [[/aml-kyc|AML & KYC]] and [[/security|Platform Security]] explain why matching names and official URLs matter.`,
      `This hub anchors TPOWER Payment Guide intent: compare, choose, then go deep — without keyword stuffing or duplicate paragraphs stolen from method pages.`,
    ],
    [
      `「TPOWER支付方式」中心是大马玩家把钱移入官方收银台的地图。它不是单薄 Logo 墙。每条通道链到专属权威页，让 TPower 支付、TPower FPX、TPower DuitNow 与电子钱包查询能落到具体深度——而本中心说明如何选择。`,
      `先知道今晚你能完成什么。若熟悉银行 FPX，打开 [[/fpx-deposit|FPX存款]]。若已用 DuitNow 转薪资，打开 [[/duitnow-deposit|DuitNow存款]]。若手机钱包是 Touch 'n Go 或 GrabPay，用 [[/touch-n-go|Touch 'n Go]] 或 [[/grabpay|GrabPay支付]]。更广的银行习惯见 [[/online-banking|网上银行]]。`,
      `速度预期在 [[/instant-deposit|即时存款]] 与 [[/fast-withdrawal|快速提款]]。入金与出金流程深度在 [[/deposit-guide|存款指南]] 与 [[/withdrawal-guide|提款指南]]。收银台话术相关的安全与钓鱼在 [[/payment-security|支付安全]]。密集问答在 [[/deposit-withdrawal-faq|存提款常见问题]]。`,
      `请在 [[/login|登录]] 或 [[/register|注册]] 后通过已登录收银台入金。私人账户「代存」不是支付方式——是风险模式。搭配 [[/responsible-gaming|负责任博彩]]，避免通道选择变成追损燃料。`,
      `优惠可能排除某些通道。仅为红利存款前先读 [[/promotions|优惠专区]]。[[/vip|VIP]] 进阶从不需要非官方支付通道。APP 用户只经 [[/download|下载]] 安装，确保打开的收银台是真的。`,
      `某通道失败时，换通道而不是发明聊天变通。客服在 [[/contact|客服中心]]。教育续见 [[/blog|知识中心]]、[[/news|新闻室]]、[[/faq|常见问题]]。[[/aml-kyc|AML与KYC]] 与 [[/security|平台安全]] 解释为何姓名匹配与官方网址重要。`,
      `本中心锚定 TPower 支付指南意图：比较、选择、再深入——不堆砌关键词，也不从专页偷重复段落。`,
    ],
  ),
  stats: [
    { vEn: "6+", vZh: "6+", lEn: "Documented Malaysia-oriented rails", lZh: "已说明的大马导向通道" },
    { vEn: "Hub", vZh: "中心", lEn: "Compare here — deepen on child pages", lZh: "在此比较—在子页深入" },
    { vEn: "MYR", vZh: "马币", lEn: "Local currency cashier orientation", lZh: "本地货币收银台导向" },
    { vEn: "Cluster", vZh: "集群", lEn: "Full payment topic interlinking", lZh: "完整支付主题互链" },
  ],
  benefitsTitle: { en: "How to use this payment hub", zh: "如何使用本支付中心" },
  benefits: [
    feature("globe", "Compare before committing", "先比较再决定", "Scan rails by familiarity, then open the matching deep guide.", "按熟悉度扫通道，再打开对应深度指南。"),
    feature("wallet", "E-wallet vs banking", "电子钱包 vs 银行", "Phone wallets suit mobile nights; FPX/DuitNow suit bank-app users.", "手机钱包适合移动夜晚；FPX/DuitNow 适合网银用户。"),
    feature("zap", "Speed vs certainty", "速度 vs 确定性", "Instant habits help — certainty still needs matching data and healthy apps.", "即时习惯有帮助——确定性仍需匹配资料与健康 APP。"),
    feature("shield", "Official methods only", "仅官方方式", "If a “method” is a personal bank account in chat, it is not listed here for a reason.", "若「方式」是聊天里的私人银行账户，这里不列是有原因的。"),
    feature("building", "Banking continuity", "银行连续性", "Online banking pages explain maintenance mindset and OTP discipline.", "网上银行页说明维护心态与 OTP 纪律。"),
    feature("check", "Cluster completeness", "集群完整", "Guides, FAQ, security, and support surround every logo card.", "指南、FAQ、安全与客服环绕每张 Logo 卡片。"),
  ],
  howToTitle: { en: "How to choose a TPOWER payment method", zh: "如何选择 TPower 支付方式" },
  howToDescription: {
    en: "A decision sequence for Malaysia players before opening the cashier.",
    zh: "打开收银台前，大马玩家的决策顺序。",
  },
  howToSteps: [
    howTo("List what you can complete", "列出你能完成的", "Name the bank apps and wallets installed and funded on your phone tonight.", "说出今晚手机上已安装且有余额的银行 APP 与钱包。"),
    howTo("Check promotion constraints", "检查优惠限制", "If depositing for an offer, confirm eligible methods on Promotions.", "若为活动存款，在优惠专区确认适用方式。"),
    howTo("Open the matching deep page", "打开对应深度页", "Read FPX, DuitNow, TnG, GrabPay, or online banking guidance before first use.", "首次使用前阅读 FPX、DuitNow、TnG、GrabPay 或网上银行指引。"),
    howTo("Deposit via official cashier", "经官方收银台存款", "Login and fund inside product navigation — never via personal transfer instructions in DMs.", "登录并在产品导航内入金——绝不用私信私人转账指示。"),
    howTo("Keep a backup rail", "保留备用通道", "If one rail is in maintenance, switch to your documented backup instead of chat shortcuts.", "若某通道维护，改用已记录的备用，而不是聊天捷径。"),
    howTo("Save support evidence", "保存客服证据", "Note time, amount, and method if status diverges from bank confirmation.", "若状态与银行确认不一致，记下时间、金额与方式。"),
  ],
  sections: [
    section(
      "Rail families on TPOWER",
      "TPOWER 上的通道家族",
      `FPX connects familiar online banking checkouts. DuitNow emphasises real-time transfer culture Malaysians already use for daily life. Touch 'n Go and GrabPay cover wallet-native players who top up on the go. Online banking covers broader transfer mindsets and maintenance realism. Instant deposit and fast withdrawal pages set timing expectations without replacing method truth.

Each family has failure modes. FPX fails when bank apps are down. Wallets fail when balances are insufficient or wallet KYC is incomplete on the wallet side. Banking transfers fail on wrong references. Knowing the family helps you pick a backup that is actually different — not the same bank behind two logos.`,
      `FPX 连接熟悉的网银结账。DuitNow 强调大马人日常生活已用的实时转账文化。Touch 'n Go 与 GrabPay 覆盖随身充值的钱包玩家。网上银行覆盖更广的转账心态与维护现实。即时存款与快速提款页设定时效预期，但不取代通道事实。

每个家族有失败模式。FPX 在银行 APP 故障时失败。钱包在余额不足或钱包侧 KYC 未完成时失败。银行转账在参考号错误时失败。了解家族有助于选择真正不同的备用——而不是两个 Logo 背后同一家银行。`,
      "/images/payments/heroes/payment-methods.webp",
      false,
    ),
    section(
      "How the topic cluster works",
      "主题集群如何运作",
      `This hub is the parent. Child pages own unique intent. The Deposit Guide owns funding logic. The Withdrawal Guide owns payout logic. Method pages own rail specifics. Security owns phishing around money language. FAQ owns rapid answers.

Internal links are intentional PageRank and EEAT paths, not decoration. From here you should reach [[/register|Register]], [[/login|Login]], [[/download|Download]], [[/vip|VIP]], [[/promotions|Promotions]], [[/responsible-gaming|Responsible Gaming]], [[/contact|Support Center]], [[/blog|Blog]], [[/news|News]], and [[/faq|FAQ]] without hunting.`,
      `本中心是父页。子页各自拥有独特意图。存款指南拥有入金逻辑。提款指南拥有出金逻辑。方式页拥有通道细节。安全页拥有资金话术相关钓鱼。FAQ 拥有快速答案。

内链是有意的 PageRank 与 EEAT 路径，不是装饰。从这里应能到达 [[/register|注册]]、[[/login|登录]]、[[/download|下载]]、[[/vip|VIP]]、[[/promotions|优惠]]、[[/responsible-gaming|负责任博彩]]、[[/contact|客服中心]]、[[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]，无需四处找。`,
      NEWS,
      true,
    ),
    section(
      "Commercial keywords without stuffing",
      "商业关键词但不堆砌",
      `People search TPOWER Payment, TPOWER Banking, and method names because they want confidence before sending MYR. This hub answers by mapping options and pointing to depth. Keyword presence is natural because the product language is the keyword language.

Avoid competitor-style keyword walls. Prefer sentences a night-shift player can use. If a paragraph only exists to repeat “TPOWER Payment Methods” three times, delete it — EEAT loses when humans bounce.`,
      `人们搜索 TPower 支付、TPower 银行与通道名，是因为在付出马币前需要信心。本中心通过映射选项并指向深度来回答。关键词自然出现，因为产品语言就是关键词语言。

避免竞品式关键词墙。优先写夜班玩家用得上的句子。若某段只为重复三次「TPOWER支付方式」而存在，删掉——人一跳出，EEAT 就输了。`,
      CTA,
      false,
    ),
    section(
      "When to contact support from the hub",
      "何时从中心联系客服",
      `Contact [[/contact|Support Center]] when bank success and cashier status diverge, when a method disappears from cashier during known issues, or when someone outside official navigation demands a payment “update.” Bring time, amount, and rail name.

Do not contact random social accounts claiming to be TPOWER finance. Official support identity is reinforced on trust pages and the Support Center itself.`,
      `当银行成功与收银台状态不一致、已知故障期间方式从收银台消失、或官方导航外有人要求支付「更新」时，联系 [[/contact|客服中心]]。带上时间、金额与通道名。

不要联系声称是 TPOWER 财务的随机社交账号。官方客服身份在信任页与客服中心本身得到强化。`,
      "/images/payments/heroes/payment-security.webp",
      true,
    ),
  ],
  timelineTitle: { en: "From hub to funded session", zh: "从中心到已入金场次" },
  timeline: [
    timeline("Orient", "定向", "Skim this hub and pick a familiar rail family.", "浏览本中心并选择熟悉的通道家族。"),
    timeline("Deepen", "深入", "Open the child guide for that rail before first transfer.", "首次转账前打开该通道子指南。"),
    timeline("Fund", "入金", "Deposit via official cashier with a planned amount.", "按计划金额经官方收银台存款。"),
    timeline("Play or cash out", "游玩或出金", "Use Games intentionally; use Withdrawal Guide when ending.", "有意识地使用游戏大厅；结束时用提款指南。"),
  ],
  securityTitle: { en: "Hub-level payment safety", zh: "中心级支付安全" },
  securityItems: [
    trust("Listed rails only", "仅列出的通道", "If it is not in cashier and not linked here, treat it as unofficial.", "若收银台没有且此处无链接，视为非官方。"),
    trust("No DM account numbers", "无私信账号", "Real methods do not arrive as personal account numbers in Telegram.", "真方式不会以私人账号形式出现在 Telegram。"),
    trust("Match names for later payouts", "为日后提款匹配姓名", "Funding sources should align with withdrawal identity.", "入金来源应与提款身份对齐。"),
    trust("One surface per attempt", "每次尝试一个表面", "Do not mix mirrored APK cashiers with official browser sessions.", "不要把镜像 APK 收银台与官方浏览器会话混用。"),
    trust("Promotion eligibility check", "检查优惠资格", "Excluded methods waste deposits meant for bonuses.", "被排除的方式会浪费本为红利准备的存款。"),
    trust("Support with references", "带参考号找客服", "Method name + time + amount beats vague panic.", "方式名+时间+金额胜过模糊恐慌。"),
  ],
  faqTitle: { en: "Payment Methods FAQ", zh: "支付方式常见问题" },
  faqs: [
    faq("Which TPOWER payment methods are available in Malaysia?", "TPOWER 在马来西亚有哪些支付方式？", "The cashier lists live options such as FPX, DuitNow, Touch 'n Go, GrabPay, and online banking styles. This hub links deep guides for each family; always confirm what your account shows tonight.", "收银台列出 FPX、DuitNow、Touch 'n Go、GrabPay 与网上银行等实时选项。本中心链到各家族深度指南；请以今晚账户显示为准。"),
    faq("What is the best payment method on TPOWER?", "TPOWER 上最好的支付方式是什么？", "The best method is the one you can complete cleanly tonight with matching identity. Familiarity beats novelty.", "最好的方式是今晚能干净完成且身份匹配的那个。熟悉胜过新奇。"),
    faq("Are e-wallets safe for TPOWER deposits?", "电子钱包存 TPOWER 安全吗？", "When used inside the official cashier, wallets follow the same official-surface rules as banking rails. Protect wallet OTPs and install only official apps.", "在官方收银台内使用时，钱包与银行通道遵守同一官方表面规则。保护钱包 OTP，只装官方 APP。"),
    faq("Can I use personal bank transfer to an agent?", "可以用私人银行转账给代理吗？", "No. That is not an official TPOWER payment method and creates dispute and phishing risk.", "不可以。那不是官方支付方式，会带来争议与钓鱼风险。"),
    faq("Where do I learn deposits and withdrawals?", "去哪里学存款与提款？", "Use the Deposit Guide and Withdrawal Guide, plus Instant Deposit and Fast Withdrawal for timing expectations.", "使用存款指南与提款指南；时效预期见即时存款与快速提款。"),
    faq("Do promotions restrict methods?", "优惠会限制方式吗？", "Sometimes. Read Promotions terms for eligible rails before topping up for a specific offer.", "有时会。为特定活动充值前先读优惠条款中的适用通道。"),
    faq("How does payment security relate to this hub?", "支付安全与本中心有何关系？", "Payment Security explains phishing and cashier hygiene; this hub explains which official rails exist and where to read more.", "支付安全解释钓鱼与收银台卫生；本中心解释有哪些官方通道及何处深入阅读。"),
    faq("Where is Support Center?", "客服中心在哪里？", "Open Support Center from official navigation. Prepare method name, time, and amount for payment cases.", "从官方导航打开客服中心。支付个案请准备方式名、时间与金额。"),
  ],
  relatedTitle: { en: "Explore the payment cluster", zh: "探索支付主题集群" },
  extraLinks: [],
  ctaTitle: { en: "Choose a rail and fund officially", zh: "选择通道并官方入金" },
  ctaDescription: {
    en: "Register or login, pick a Malaysia method you control, and keep the Payment Methods hub bookmarked as your money map.",
    zh: "注册或登录，选择你控制的大马方式，并把支付方式中心收藏为资金地图。",
  },
});

console.log("hub done");
