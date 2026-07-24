import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentSecurityPage: PaymentPageContent = {
  id: "payment-security",
  path: "/payment-security",
  heroImage: "/images/payments/heroes/payment-security.webp",
  metaTitle: { en: `TPOWER Payment Security | Cashier Safety & Phishing Defence`, zh: `TPower支付安全｜收银台安全与防钓鱼` },
  metaDescription: { en: `TPOWER Payment Security: official cashier hygiene, deposit/withdrawal phishing patterns, OTP rules, fake agent rails, and how to escalate safely.`, zh: `TPOWER线上博彩支付安全：官方收银台卫生、存提款钓鱼模式、OTP 规则、假代理通道，以及如何安全升级。` },
  heroTitle: { en: `TPOWER Payment Security`, zh: `TPOWER线上博彩 支付安全` },
  heroSubtitle: { en: `Defend the money moment — deposits, withdrawals, and every urgent message that imitates them.`, zh: `守住资金时刻——存款、提款，以及一切模仿它们的紧迫消息。` },
  introduction: { en: `TPOWER Payment Security is the money-threat page. Platform Security covers broader account hygiene; this page zooms into cashier language, fake rails, OTP theft, and “priority deposit/withdrawal” scams that target Malaysia players specifically.

Official funding always starts after [[/login|Login]] on real domains or [[/download|Download]] apps, then the cashier listed on [[/payment-methods|Payment Methods]]. Anything that begins with a personal account number in Telegram is not a TPOWER payment method.

Deposit phishing often says your top-up failed and needs a “repair transfer.” Withdrawal phishing often says cashout is locked until you pay an unlock fee or install a remote app. Both fail the official test. Process truth lives on [[/deposit-guide|Deposit Guide]] and [[/withdrawal-guide|Withdrawal Guide]].

OTP and banking passwords are never for agents. Support Center at [[/contact|Support Center]] will ask for timestamps and references — not secrets. Document uploads follow [[/aml-kyc|AML & KYC]] and [[/privacy-and-data-protection|Privacy & Data Protection]] paths only.

Keep [[/responsible-gaming|Responsible Gaming]] in view: scammers exploit chase emotions. VIP claims on [[/vip|VIP]] never require private payment channels. Continue learning via [[/blog|Blog]], [[/news|News]], [[/faq|FAQ]], [[/instant-deposit|Instant Deposit]], [[/fast-withdrawal|Fast Withdrawal]], and [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]].

Payment Security exists so TPOWER Payment keywords include trust, not only rails. Speed pages mean nothing if the first click was a mirrored cashier.

Payment Security is a pause button with curriculum. Every urgent money DM should trigger the same sequence: stop, open official site, navigate to cashier or Support Center, ignore the DM’s deep link.

Teach household adults the same sequence. Shared phones mean shared risk. A partner who “helps” by sending OTP aloud can unwind years of careful deposits.

Report impersonation even when you did not lose money. Patterns help protect the next player. Support Center can receive structured reports with channel and time.

Remember that secure payments are boring. Boring is the brand of safety. Drama belongs to attackers.`, zh: `「TPOWER支付安全」是资金威胁专页。平台安全覆盖更广账户卫生；本页聚焦收银台话术、假通道、OTP 盗窃，以及专门针对大马玩家的「优先存/提款」骗局。

官方入金始终在真实域名 [[/login|登录]] 或 [[/download|下载]] APP 之后，再进入 [[/payment-methods|支付方式]] 列出的收银台。任何从 Telegram 私人账号开始的，都不是 TPOWER 支付方式。

存款钓鱼常说充值失败需要「修复转账」。提款钓鱼常说出金被锁，除非你付解锁费或安装远程 APP。二者都通不过官方测试。流程真相在 [[/deposit-guide|存款指南]] 与 [[/withdrawal-guide|提款指南]]。

OTP 与网银密码从不给客服。[[/contact|客服中心]] 会要时间戳与参考号——不要机密。证件上传只走 [[/aml-kyc|AML与KYC]] 与 [[/privacy-and-data-protection|隐私与数据保护]] 路径。

把 [[/responsible-gaming|负责任博彩]] 放在视野里：骗子利用追损情绪。[[/vip|VIP]] 说法从不需要私人支付通道。续学 [[/blog|博客]]、[[/news|新闻]]、[[/faq|常见问题]]、[[/instant-deposit|即时存款]]、[[/fast-withdrawal|快速提款]]、[[/deposit-withdrawal-faq|存提款常见问题]]。

支付安全的存在，是为了让 TPower 支付关键词包含信任，而不只是通道。若第一次点击已是镜像收银台，速度页毫无意义。

支付安全是带课程的暂停键。每条紧迫资金私信应触发同一顺序：停下、打开官网、导航到收银台或客服中心、忽略私信深链。

把同一顺序教给同住成年人。共用手机意味着共用风险。大声读 OTP「帮忙」的伴侣，可以毁掉多年谨慎存款。

即使未亏损也举报假冒。模式帮助保护下一位玩家。客服中心可接收带通道与时间的结构化报告。

记住安全支付是无聊的。无聊是安全的品牌。戏剧属于攻击者。` },
  stats: [
    { value: { en: `0`, zh: `0` }, label: { en: `Bank passwords requested by real agents`, zh: `真客服索要网银密码次数` } },
    { value: { en: `Cashier`, zh: `收银台` }, label: { en: `Only official start for funding rails`, zh: `入金通道唯一官方起点` } },
    { value: { en: `Pause`, zh: `停顿` }, label: { en: `Default response to urgent money DMs`, zh: `对紧迫资金私信的默认反应` } },
    { value: { en: `Evidence`, zh: `证据` }, label: { en: `Timestamps beat panic narratives`, zh: `时间戳胜过恐慌叙事` } },
  ],
  benefitsTitle: { en: `Payment security habits that matter`, zh: `真正重要的支付安全习惯` },
  benefits: [
{ icon: "lock", title: { en: `Secret boundary`, zh: `机密边界` }, body: { en: `OTP/PIN/passwords never leave provider apps into chat.`, zh: `OTP/PIN/密码从不离开提供方 APP 进入聊天。` } },
{ icon: "eye", title: { en: `URL discipline`, zh: `网址纪律` }, body: { en: `Type official domain before cashier actions.`, zh: `收银台动作前输入官方域名。` } },
{ icon: "shield", title: { en: `Rail authenticity`, zh: `通道真实性` }, body: { en: `Personal accounts in DMs are not listed methods.`, zh: `私信私人账户不是列出的方式。` } },
{ icon: "zap", title: { en: `Urgency scepticism`, zh: `紧迫怀疑` }, body: { en: `Panic language is a phishing feature, not a service feature.`, zh: `恐慌话术是钓鱼功能，不是服务功能。` } },
{ icon: "users", title: { en: `Official support only`, zh: `仅官方客服` }, body: { en: `Initiate from Support Center navigation.`, zh: `从客服中心导航发起。` } },
{ icon: "file", title: { en: `Evidence culture`, zh: `证据文化` }, body: { en: `Save times, amounts, rails before escalating.`, zh: `升级前保存时间、金额、通道。` } }
  ],
  howToTitle: { en: `How to stay safe during TPOWER payments`, zh: `TPower 支付期间如何保持安全` },
  howToDescription: { en: `A defensive sequence for deposit and withdrawal moments.`, zh: `面向存提款时刻的防御步骤。` },
  howToSteps: [
{ name: { en: `Confirm official surface`, zh: `确认官方表面` }, text: { en: `Bookmark Login/Home; avoid message deep links under pressure.`, zh: `收藏登录/首页；压力下避开消息深链。` } },
{ name: { en: `Open cashier from navigation`, zh: `从导航打开收银台` }, text: { en: `Start deposits/withdrawals inside the logged-in product.`, zh: `在已登录产品内启动存/提款。` } },
{ name: { en: `Refuse personal account instructions`, zh: `拒绝私人账户指示` }, text: { en: `If a human sends bank details in chat, stop.`, zh: `若有人在聊天发送银行资料，停下。` } },
{ name: { en: `Keep OTP private`, zh: `OTP 保持私密` }, text: { en: `Enter codes only in bank/wallet apps.`, zh: `只在银行/钱包 APP 输入验证码。` } },
{ name: { en: `Verify statuses officially`, zh: `官方核对状态` }, text: { en: `Trust cashier states over group screenshots.`, zh: `信任收银台状态而非群截图。` } },
{ name: { en: `Escalate without secrets`, zh: `不交机密升级` }, text: { en: `Contact Support Center with references only.`, zh: `只带参考号联系客服中心。` } }
  ],
  sections: [
{
    title: { en: `Deposit phishing patterns in Malaysia chats`, zh: `大马聊天中的存款钓鱼模式` },
    body: { en: `Classic lines include failed deposit repair, limited-time personal QR, and “agent FPX faster than cashier.” Official response: reopen Payment Methods, Deposit Guide, and Support Center. Never repair by paying a stranger.

If you already sent money to a personal account, collect evidence and contact Support Center and your bank guidance paths — do not send a second “completion” payment.`, zh: `经典话术包括失败存款修复、限时私人 QR、「代理 FPX 比收银台快」。官方反应：重开支付方式、存款指南与客服中心。绝不通过付钱给陌生人修复。

若已向私人账户打款，收集证据并联系客服中心与银行指引路径——不要再发第二笔「补完」款。` },
    imageSrc: "/images/payments/heroes/payment-security.webp",
    imageAlt: { en: `Deposit phishing patterns in Malaysia chats`, zh: `大马聊天中的存款钓鱼模式` },
    reverse: false,
  },
{
    title: { en: `Withdrawal unlock scams`, zh: `提款解锁骗局` },
    body: { en: `Unlock fees, remote APKs, and fake VIP hosts prey on players waiting for cashouts. Fast Withdrawal and Withdrawal Guide explain real acceleration: preparation, not payments to strangers.

If someone demands an OTP “to release withdrawal,” they are attacking your bank, not helping TPOWER.`, zh: `解锁费、远程 APK 与假 VIP 接待捕食等待出金的玩家。快速提款与提款指南解释真正加速：准备，而不是付钱给陌生人。

若有人要 OTP「以放行提款」，他们在攻击你的银行，不是在帮 TPOWER。` },
    imageSrc: "/images/payments/heroes/fast-withdrawal.webp",
    imageAlt: { en: `Withdrawal unlock scams`, zh: `提款解锁骗局` },
    reverse: true,
  },
{
    title: { en: `Shared devices, public Wi-Fi, and cashier sessions`, zh: `共用设备、公共 Wi-Fi 与收银台会话` },
    body: { en: `Large deposits and withdrawals deserve trusted networks and private screens. End sessions on borrowed phones. Do not save banking passwords in café browsers.

App installs only via Download. Mirrored APK cashiers are a Payment Security incident waiting to happen.`, zh: `大额存提款值得可信网络与私密屏幕。外借手机请结束会话。不要在咖啡馆浏览器保存网银密码。

APP 只经下载安装。镜像 APK 收银台是等待发生的支付安全事故。` },
    imageSrc: "/images/payments/heroes/deposit-guide.webp",
    imageAlt: { en: `Shared devices, public Wi-Fi, and cashier sessions`, zh: `共用设备、公共 Wi-Fi 与收银台会话` },
    reverse: false,
  },
{
    title: { en: `How Payment Security links the cluster`, zh: `支付安全如何连接集群` },
    body: { en: `Every method page should end in safer behaviour. This page is the shared defensive spine for FPX, DuitNow, wallets, online banking, instant deposit, and fast withdrawal intents — without replacing their unique mechanics.`, zh: `每个方式页都应导向更安全行为。本页是 FPX、DuitNow、钱包、网上银行、即时存款与快速提款意图的共用防御脊梁——但不取代其独特机制。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `How Payment Security links the cluster`, zh: `支付安全如何连接集群` },
    reverse: true,
  }
,
  {
    title: { en: `Building a household payment safety brief`, zh: `建立家庭支付安全简报` },
    body: { en: `Write four lines on the fridge: (1) official domain only, (2) no personal deposit accounts, (3) no withdrawal fees to strangers, (4) Support Center from navigation. That brief beats a hundred banners.

Review the brief when a new adult joins the household device list. Payment Security is cultural, not only technical.`, zh: `在冰箱写四行：(1) 仅官方域名，(2) 无私人存款账户，(3) 无向陌生人付提款费，(4) 从导航打开客服中心。该简报胜过一百个横幅。

当新的成年人加入家庭设备名单时复习简报。支付安全是文化，不只是技术。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Building a household payment safety brief`, zh: `建立家庭支付安全简报` },
    reverse: true,
  }
  ],
  timelineTitle: { en: `Safe payment decision timeline`, zh: `安全支付决策时间线` },
  timeline: [
{ title: { en: `Pause`, zh: `停顿` }, body: { en: `Urgent money message arrives — stop.`, zh: `紧迫资金消息到来—停下。` } },
{ title: { en: `Verify surface`, zh: `核实表面` }, body: { en: `Open official TPOWER via bookmark/navigation.`, zh: `经收藏/导航打开官方 TPOWER。` } },
{ title: { en: `Act officially`, zh: `官方行动` }, body: { en: `Use cashier rails or Support Center only.`, zh: `只用收银台通道或客服中心。` } },
{ title: { en: `Report`, zh: `举报` }, body: { en: `Send evidence of impersonation when relevant.`, zh: `相关时提交假冒证据。` } }
  ],
  securityTitle: { en: `Non-negotiable payment rules`, zh: `不可妥协的支付规则` },
  securityItems: [
{ title: { en: `No personal deposit accounts`, zh: `无私人存款账户` }, body: { en: `Ever.`, zh: `永远。` } },
{ title: { en: `No withdrawal unlock fees`, zh: `无提款解锁费` }, body: { en: `Ever.`, zh: `永远。` } },
{ title: { en: `No OTP sharing`, zh: `不分享 OTP` }, body: { en: `Ever.`, zh: `永远。` } },
{ title: { en: `No remote-control apps for cashouts`, zh: `无远程控制出金 APP` }, body: { en: `Ever.`, zh: `永远。` } },
{ title: { en: `Official Support Center only`, zh: `仅官方客服中心` }, body: { en: `Initiate from site navigation.`, zh: `从站点导航发起。` } },
{ title: { en: `One pending money action`, zh: `一次一个资金动作` }, body: { en: `Don’t stack panic duplicates.`, zh: `不要堆叠恐慌重复。` } }
  ],
  faqTitle: { en: `Payment Security FAQ`, zh: `支付安全常见问题` },
  faqs: [
{ question: { en: `Will TPOWER ask for my bank password?`, zh: `TPOWER 会要网银密码吗？` }, answer: { en: `No. Official agents never need banking passwords or wallet PINs.`, zh: `不会。官方客服从不需要网银密码或钱包 PIN。` } },
{ question: { en: `Someone sent a personal account for deposit — real?`, zh: `有人发私人账户存款——是真的吗？` }, answer: { en: `Not an official method. Use cashier rails only and report via Support Center.`, zh: `不是官方方式。只用收银台通道并通过客服中心举报。` } },
{ question: { en: `What is a withdrawal unlock scam?`, zh: `什么是提款解锁骗局？` }, answer: { en: `A demand for fees, OTPs, or remote apps to “release” a cashout. Official withdrawals don’t work that way.`, zh: `要求费用、OTP 或远程 APP 以「放行」出金。官方提款不是那样运作。` } },
{ question: { en: `How do I verify I’m on the real cashier?`, zh: `如何确认在真收银台？` }, answer: { en: `Arrive via official domain/app navigation after login — not via urgent message links.`, zh: `登录后经官方域名/APP 导航到达——不是紧迫消息链接。` } },
{ question: { en: `What evidence should I save?`, zh: `应保存什么证据？` }, answer: { en: `Local time, amount, method name, references, and impersonation screenshots if relevant.`, zh: `本地时间、金额、方式名、参考号，以及相关假冒截图。` } },
{ question: { en: `Is Payment Security the same as Platform Security?`, zh: `支付安全等于平台安全吗？` }, answer: { en: `Related. Platform Security is broader; Payment Security focuses on money-moment threats.`, zh: `相关。平台安全更广；支付安全聚焦资金时刻威胁。` } },
{ question: { en: `Can VIP hosts take payments privately?`, zh: `VIP 接待可私下收款吗？` }, answer: { en: `No. VIP service does not create personal payment rails.`, zh: `不可以。VIP 服务不创造私人支付通道。` } },
{ question: { en: `Where do I get help after a suspected scam?`, zh: `怀疑诈骗后去哪求助？` }, answer: { en: `Support Center immediately; also follow your bank’s guidance for unauthorised transfers.`, zh: `立即找客服中心；并遵循银行对未授权转账的指引。` } }
  ],
  relatedTitle: { en: `Related trust & payment pages`, zh: `相关信任与支付页面` },
  relatedLinks: withPaymentRelated([
    { href: "/security", label: { en: "Platform Security", zh: "平台安全" } },
  ]),
  ctaTitle: { en: `Move money only on official rails`, zh: `只在官方通道移动资金` },
  ctaDescription: { en: `Login on the real site, use cashier methods, and contact Support Center with evidence — never secrets.`, zh: `在真网站登录，使用收银台方式，带证据联系客服中心——绝不交机密。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
