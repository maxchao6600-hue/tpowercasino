import type { IntentPageContent } from "./types";
import { withIntentRelated } from "./shared";

export const intentTpowerApk: IntentPageContent = {
  id: "tpower-apk",
  path: "/tpower-apk",
  heroImage: "/images/intent/heroes/tpower-apk.webp",
  schemaExtra: "SoftwareApplication",
  metaTitle: { en: `TPOWER APK Download | Official Android Package Guide`, zh: `TPower APK下载｜官方安卓安装包指南` },
  metaDescription: { en: `Official TPOWER APK guide: safe Android install steps, permission caution, fake package defence, and how APK relates to the mobile app.`, zh: `TPOWER线上博彩官方 APK 指南：安全安卓安装步骤、权限谨慎、假包装防御，以及 APK 与手机 APP 的关系。` },
  heroTitle: { en: `TPOWER APK Download`, zh: `TPOWER线上博彩 APK下载` },
  heroSubtitle: { en: `Android package guidance for players who install outside certain stores — official paths only.`, zh: `面向在特定商店外安装的玩家的安卓包装指引——仅官方路径。` },
  introduction: { en: `TPOWER APK is the intent page for Android package downloads. The operational APK surface remains at [[/apk|APK]]; broader install culture sits on [[/download|Download]] and [[/mobile-app|Mobile App]]. This landing owns safety education for TPOWER APK searchers.

Fake VIP APKs and renamed packages are a top Malaysia mobile risk. If a chat sends an APK to “unlock withdrawal,” delete it. Real installs start from official navigation.

Permissions should match a gaming client — not SMS harvesting or obscure accessibility control. When unsure, stop and open [[/security|Platform Security]].

After install, login with the same account as web ([[/tpower-login|Login guide]]). Fund via [[/payment-methods|Payment Center]], not personal transfers.

APK users still read [[/responsible-gaming|Responsible Gaming]]. Speed of install is not a reason to skip limits.

Chinese intent around TPower 下载 / APK is rewritten for MY Chinese — official platform first, not scare-copy spam.

Compare APK vs store-style installs mentally: APK adds sideload steps; it does not add unofficial payment rails.

Support Center helps install errors with device model and screenshots — never with remote-control apps.`, zh: `「TPower APK」是安卓安装包下载意图页。操作面仍在 [[/apk|APK]]；更广安装文化在 [[/download|下载]] 与 [[/mobile-app|手机APP]]。本着陆页为搜索 TPOWER APK 的人提供安全教育。

假 VIP APK 与改名包装是大马手机顶级风险。若聊天发送 APK「解锁提款」，删除。真安装从官方导航开始。

权限应匹配游戏客户端——不是收割短信或隐晦无障碍控制。不确定时停下并打开 [[/security|平台安全]]。

安装后用与网页同一账户登录（[[/tpower-login|登录指南]]）。经 [[/payment-methods|支付中心]] 入金，不是私人转账。

APK 用户仍读 [[/responsible-gaming|负责任博彩]]。安装速度不是跳过限额的理由。

围绕 TPower 下载 / APK 的中文意图以大马中文重写——官方平台优先，不是恐吓文案堆砌。

在心里比较 APK 与商店式安装：APK 增加旁加载步骤；不加非官方支付通道。

客服中心用设备型号与截图协助安装错误——绝不用远程控制 APP。` },
  stats: [
    { value: { en: `Official`, zh: `官方` }, label: { en: `Only Download/APK hub packages`, zh: `仅下载/APK 中心包装` } },
    { value: { en: `Perms`, zh: `权限` }, label: { en: `Reject SMS-harvest style asks`, zh: `拒绝收割短信式权限` } },
    { value: { en: `Same ID`, zh: `同账户` }, label: { en: `Web and APK share account`, zh: `网页与 APK 共用账户` } },
    { value: { en: `No remote`, zh: `无远程` }, label: { en: `No remote-control “install help”`, zh: `无远程控制「安装帮助」` } },
  ],
  benefitsTitle: { en: `Why official TPOWER APK guidance matters`, zh: `为何官方 TPower APK 指引重要` },
  benefits: [
{ icon: "smartphone", title: { en: `Android path clarity`, zh: `安卓路径清楚` }, body: { en: `Know when APK is relevant vs other install routes.`, zh: `知道何时需要 APK 及其他安装路线。` } },
{ icon: "shield", title: { en: `Fake package defence`, zh: `假包装防御` }, body: { en: `Recognise renamed VIP APKs as hostile.`, zh: `把改名 VIP APK 当敌意识别。` } },
{ icon: "lock", title: { en: `Permission scepticism`, zh: `权限怀疑` }, body: { en: `Unnecessary powers are a stop sign.`, zh: `不必要权限就是停止信号。` } },
{ icon: "check", title: { en: `Account continuity`, zh: `账户连续` }, body: { en: `Same login after install.`, zh: `安装后同一登录。` } },
{ icon: "zap", title: { en: `Faster mobile sessions`, zh: `更快手机场次` }, body: { en: `Local client when browser is inconvenient.`, zh: `浏览器不便时用本地客户端。` } },
{ icon: "eye", title: { en: `Update hygiene`, zh: `更新卫生` }, body: { en: `Reinstall only from official guidance.`, zh: `只从官方指引重装。` } }
  ],
  howToTitle: { en: `How to install the TPOWER APK safely`, zh: `如何安全安装 TPower APK` },
  howToDescription: { en: `Sideload-aware steps for official Android packages.`, zh: `面向官方安卓包装的旁加载步骤。` },
  howToSteps: [
{ name: { en: `Open official APK/Download`, zh: `打开官方 APK/下载` }, text: { en: `Start from site navigation — not chat files.`, zh: `从站点导航开始——不是聊天文件。` } },
{ name: { en: `Verify package source`, zh: `核实包装来源` }, text: { en: `Confirm you are on official TPOWER guidance.`, zh: `确认你在官方 TPOWER 指引上。` } },
{ name: { en: `Review permissions`, zh: `审查权限` }, text: { en: `Abort if asks look unrelated to play.`, zh: `若索取与游玩无关则中止。` } },
{ name: { en: `Install and open`, zh: `安装并打开` }, text: { en: `Follow on-device prompts carefully.`, zh: `仔细跟随设备提示。` } },
{ name: { en: `Login officially`, zh: `官方登录` }, text: { en: `Use your real account credentials privately.`, zh: `私下使用真实账户凭证。` } },
{ name: { en: `Disable unknown sources later`, zh: `随后关闭未知来源` }, text: { en: `Tighten device settings after install when practical.`, zh: `安装后可行时收紧设备设置。` } }
  ],
  sections: [
{
    title: { en: `APK vs Mobile App landing`, zh: `APK vs 手机APP着陆页` },
    body: { en: `Mobile App covers the product experience; APK covers Android package risk. Read both. Download remains the hub for install choices.`, zh: `手机APP覆盖产品体验；APK 覆盖安卓包装风险。两页都读。下载仍是安装选择中心。` },
    imageSrc: "/images/intent/heroes/tpower-apk.webp",
    imageAlt: { en: `APK vs Mobile App landing`, zh: `APK vs 手机APP着陆页` },
    reverse: false,
  },
{
    title: { en: `Malware tells around “casino APKs”`, zh: `「博彩 APK」周边的恶意线索` },
    body: { en: `Urgent withdrawal unlock packages, double extension names, and requests for accessibility control are classic tells. Payment Security and Platform Security expand the defence story.`, zh: `紧迫提款解锁包装、双扩展名、索取无障碍控制是经典线索。支付安全与平台安全扩展防御故事。` },
    imageSrc: "/images/news/tpower-platform-performance-update.webp",
    imageAlt: { en: `Malware tells around “casino APKs”`, zh: `「博彩 APK」周边的恶意线索` },
    reverse: true,
  },
{
    title: { en: `After APK: payments and play`, zh: `APK 之后：支付与游玩` },
    body: { en: `Use Payment Center rails. Open Games intentionally. Promotions still have terms. Responsible Gaming still applies on mobile.`, zh: `使用支付中心通道。有意识打开游戏。优惠仍有条款。手机上负责任博彩仍适用。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `After APK: payments and play`, zh: `APK 之后：支付与游玩` },
    reverse: false,
  },
{
    title: { en: `Cluster for install intent`, zh: `安装意图集群` },
    body: { en: `Download, Mobile App, Login, Register, Support, Security, Payment Center, VIP.`, zh: `下载、手机APP、登录、注册、客服、安全、支付中心、VIP。` },
    imageSrc: "/images/cta/tpower-lobby-cta.webp",
    imageAlt: { en: `Cluster for install intent`, zh: `安装意图集群` },
    reverse: true,
  }
  ],
  comparisonTitle: { en: `Official APK vs chat APK`, zh: `官方 APK vs 聊天 APK` },
  comparisonHeaders: [
    { en: `Check`, zh: `检查` },
    { en: `Official`, zh: `官方` },
    { en: `Chat file`, zh: `聊天文件` },
  ],
  comparisonRows: [
{ label: { en: `Source`, zh: `来源` }, a: { en: `Download/APK pages`, zh: `下载/APK 页` }, b: { en: `Telegram stranger`, zh: `Telegram 陌生人` } },
{ label: { en: `Purpose`, zh: `目的` }, a: { en: `Play client`, zh: `游玩客户端` }, b: { en: `Often “fix withdrawal”`, zh: `常为「修复提款」` } },
{ label: { en: `Permissions`, zh: `权限` }, a: { en: `Game-reasonable`, zh: `游戏合理` }, b: { en: `SMS/accessibility grabs`, zh: `抓短信/无障碍` } },
{ label: { en: `Support`, zh: `支持` }, a: { en: `Support Center`, zh: `客服中心` }, b: { en: `Vanishes after install`, zh: `安装后消失` } }
  ],
  timelineTitle: { en: `APK install timeline`, zh: `APK 安装时间线` },
  timeline: [
{ title: { en: `Guide`, zh: `指引` }, body: { en: `Open official APK page.`, zh: `打开官方 APK 页。` } },
{ title: { en: `Inspect`, zh: `检查` }, body: { en: `Permissions and source.`, zh: `权限与来源。` } },
{ title: { en: `Install`, zh: `安装` }, body: { en: `Complete on-device steps.`, zh: `完成设备步骤。` } },
{ title: { en: `Login`, zh: `登录` }, body: { en: `Enter lobby safely.`, zh: `安全进入大厅。` } }
  ],
  trustTitle: { en: `APK trust checklist`, zh: `APK 信任清单` },
  trustItems: [
{ title: { en: `No chat APKs`, zh: `无聊天 APK` }, body: { en: `Ever.`, zh: `永远。` } },
{ title: { en: `Permission review`, zh: `权限审查` }, body: { en: `Abort weird asks.`, zh: `奇怪索取就中止。` } },
{ title: { en: `Same account`, zh: `同一账户` }, body: { en: `No “APK-only VIP login.”`, zh: `无「仅 APK VIP 登录」。` } },
{ title: { en: `Update from official`, zh: `官方更新` }, body: { en: `Don’t sideload random updates.`, zh: `不要旁加载随机更新。` } },
{ title: { en: `Secure device`, zh: `保护设备` }, body: { en: `Screen lock after install.`, zh: `安装后锁屏。` } },
{ title: { en: `Report fakes`, zh: `举报假包` }, body: { en: `Tell Support Center with evidence.`, zh: `带证据告诉客服中心。` } }
  ],
  faqTitle: { en: `TPOWER APK FAQ`, zh: `TPower APK 常见问题` },
  faqs: [
{ question: { en: `What is TPOWER APK on TPOWER?`, zh: `TPOWER 上的TPower APK是什么？` }, answer: { en: `TPOWER APK on this landing explains official process, benefits, and safe next steps for Malaysia players — then links into the live product surface.`, zh: `本着陆页上的TPower APK说明官方流程、好处与安全下一步，并链到现场产品表面。` } },
{ question: { en: `Is this page the same as the product lobby?`, zh: `本页等于产品大厅吗？` }, answer: { en: `No. This is the search-intent authority page. Product lobbies and forms keep their own routes for interaction.`, zh: `不等。这是搜索意图权威页。产品大厅与表单保留各自交互路由。` } },
{ question: { en: `How do I start safely?`, zh: `如何安全开始？` }, answer: { en: `Use official navigation only, avoid chat shortcuts, and open Support Center with evidence if something fails.`, zh: `只使用官方导航，避开聊天捷径；失败时带证据打开客服中心。` } },
{ question: { en: `Does Responsible Gaming still apply?`, zh: `负责任博彩仍适用吗？` }, answer: { en: `Always. Landings educate; they do not encourage chase behaviour.`, zh: `始终适用。着陆页做教育，不鼓励追损。` } },
{ question: { en: `Where do I download the official APK?`, zh: `去哪里下载官方 APK？` }, answer: { en: `Follow the APK and Download pages on this website only.`, zh: `只遵循本网站的 APK 与下载页。` } },
{ question: { en: `Is APK the same as the iOS app?`, zh: `APK 等于 iOS APP 吗？` }, answer: { en: `APK is Android package guidance; iOS follows Download guidance separately.`, zh: `APK 是安卓包装指引；iOS 另循下载指引。` } },
{ question: { en: `Why do fake APKs exist?`, zh: `为何存在假 APK？` }, answer: { en: `To steal accounts via overlays and permissions. Never install from chat.`, zh: `通过覆盖层与权限盗号。切勿从聊天安装。` } },
{ question: { en: `Can I deposit in the APK?`, zh: `可以在 APK 里存款吗？` }, answer: { en: `Yes via official cashier rails after login — same Payment Center rules.`, zh: `登录后经官方收银台通道可以——同一支付中心规则。` } }
  ],
  relatedTitle: { en: `Related download resources`, zh: `相关下载资源` },
  relatedLinks: withIntentRelated([

  ]),
  ctaTitle: { en: `Get the official TPOWER APK path`, zh: `获取官方 TPower APK 路径` },
  ctaDescription: { en: `Open the APK page from official navigation, review permissions, and login with your real account.`, zh: `从官方导航打开 APK 页，审查权限，并用真实账户登录。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
  primaryCtaHref: "/apk",
};
