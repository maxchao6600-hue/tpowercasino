import type { IntentPageContent } from "./types";
import { withIntentRelated } from "./shared";

export const intentTpowerRegister: IntentPageContent = {
  id: "tpower-register",
  path: "/tpower-register",
  heroImage: "/images/intent/heroes/tpower-register.webp",
  schemaExtra: "none",
  metaTitle: { en: `TPOWER Register | Official Sign-Up Guide Malaysia`, zh: `TPower注册｜马来西亚官方注册指南` },
  metaDescription: { en: `Official TPOWER Register guide: account creation steps, identity tips, welcome bonus readiness, phishing defence, and safer first deposits.`, zh: `TPOWER线上博彩官方注册指南：开户步骤、身份提示、迎新准备、防钓鱼与更安全的首次存款。` },
  heroTitle: { en: `TPOWER Register`, zh: `TPOWER线上博彩 注册` },
  heroSubtitle: { en: `Create an official account with clear steps — before bonuses, before deposits, before play.`, zh: `用清楚步骤创建官方账户——在优惠、存款与游玩之前。` },
  introduction: { en: `TPOWER Register targets adults ready to create an official Malaysia account. The interactive form is at [[/register|Register]]. This landing owns education: why official signup beats agent “accounts,” what to prepare, and how registration connects to [[/welcome-bonus|Welcome Bonus]] without rushing terms.

Registration is not login. Login education lives on [[/tpower-login|TPOWER Login]]. Confusing the two creates people who paste passwords into the wrong form under urgency.

Use accurate details aligned with later [[/payment-methods|payments]] and withdrawals. Nickname creativity is fine in display contexts; banking identity is not a place for aliases. See [[/aml-kyc|AML & KYC]] early if you plan larger play.

After register, install only via [[/download|Download]] / [[/tpower-apk|APK]] / [[/mobile-app|Mobile App]]. Fake “register APKs” are takeover tools.

Read [[/tpower-promotions|Promotions]] and [[/responsible-gaming|Responsible Gaming]] before your first deposit. [[/deposit-guide|Deposit Guide]] explains funding. [[/contact|Support Center]] helps when forms error — without password sharing.

Chinese readers searching TPower 注册 get independently written MY Chinese guidance focused on official platform trust, not casino slang spam.

VIP pitches that ask you to register through a personal link demanding prepaid fees are not official. Register on the real site, then evaluate VIP on [[/vip|VIP]].

This page answers TPOWER Register intent with process authority: prepare, signup officially, verify contact channels, read offers, fund intentionally, play within limits.`, zh: `「TPower注册」面向准备创建马来西亚官方账户的成年人。交互表单在 [[/register|注册]]。本着陆页拥有教育：为何官方注册胜过代理「开户」、准备什么，以及注册如何在不赶条款的情况下连接 [[/welcome-bonus|迎新奖金]]。

注册不是登录。登录教育在 [[/tpower-login|TPower登录]]。混淆二者会让人在紧迫下把密码贴进错误表单。

使用与日后 [[/payment-methods|支付]] 与提款对齐的准确资料。显示昵称可以有创意；银行身份不是用化名的地方。若计划较大游玩，尽早看 [[/aml-kyc|AML与KYC]]。

注册后只经 [[/download|下载]] / [[/tpower-apk|APK]] / [[/mobile-app|手机APP]] 安装。假「注册 APK」是盗号工具。

首次存款前读 [[/tpower-promotions|优惠]] 与 [[/responsible-gaming|负责任博彩]]。[[/deposit-guide|存款指南]] 说明入金。表单出错时 [[/contact|客服中心]] 可协助——不分享密码。

搜索 TPower 注册的中文读者获得独立撰写的大马中文指引，聚焦官方平台信任，而非赌场黑话堆砌。

要求你经私人链接注册并预付费的 VIP 推销不是官方。在真网站注册，再在 [[/vip|VIP]] 评估。

本页以流程权威回答 TPower 注册意图：准备、官方注册、核实联系渠道、阅读优惠、有意识入金、限额内游玩。` },
  stats: [
    { value: { en: `Official`, zh: `官方` }, label: { en: `Signup only on real TPOWER forms`, zh: `只在真 TPOWER 表单注册` } },
    { value: { en: `Match`, zh: `匹配` }, label: { en: `Details aligned for later payouts`, zh: `资料对齐以便日后提款` } },
    { value: { en: `Bonus`, zh: `优惠` }, label: { en: `Read terms before first deposit`, zh: `首次存款前先读条款` } },
    { value: { en: `Safe`, zh: `安全` }, label: { en: `No prepaid “agent registration”`, zh: `无预付「代理注册」` } },
  ],
  benefitsTitle: { en: `Benefits of registering the official way`, zh: `官方注册的好处` },
  benefits: [
{ icon: "badge", title: { en: `Own your account`, zh: `拥有自己的账户` }, body: { en: `You control login — not an agent intermediary.`, zh: `你控制登录——不是代理中介。` } },
{ icon: "gift", title: { en: `Clean bonus path`, zh: `干净优惠路径` }, body: { en: `Official offers attach to official accounts.`, zh: `官方优惠附着官方账户。` } },
{ icon: "banknote", title: { en: `Smoother withdrawals later`, zh: `日后提款更顺` }, body: { en: `Matching identity reduces payout friction.`, zh: `身份匹配减少出金摩擦。` } },
{ icon: "shield", title: { en: `Phishing resistance`, zh: `抗钓鱼` }, body: { en: `You learn the real domain at signup time.`, zh: `注册时就学会真域名。` } },
{ icon: "smartphone", title: { en: `App continuity`, zh: `APP 连续` }, body: { en: `Same account on Download/APK installs.`, zh: `下载/APK 安装同一账户。` } },
{ icon: "heart", title: { en: `Responsible start`, zh: `负责任开始` }, body: { en: `Limits and tools available from day one.`, zh: `第一天起就有限额与工具。` } }
  ],
  howToTitle: { en: `How to register on TPOWER`, zh: `如何在 TPOWER 注册` },
  howToDescription: { en: `Official account creation sequence for Malaysia players.`, zh: `大马玩家的官方开户顺序。` },
  howToSteps: [
{ name: { en: `Open official Register`, zh: `打开官方注册` }, text: { en: `Use the real site navigation to [[/register|Register]].`, zh: `用真网站导航打开 [[/register|注册]]。` } },
{ name: { en: `Enter accurate details`, zh: `输入准确资料` }, text: { en: `Use information you can support during verification.`, zh: `使用核验时能支撑的信息。` } },
{ name: { en: `Secure your password`, zh: `保护密码` }, text: { en: `Unique password — not your email password.`, zh: `独立密码——不要用邮箱密码。` } },
{ name: { en: `Confirm contact channels`, zh: `确认联系渠道` }, text: { en: `Ensure you can receive official recovery messages.`, zh: `确保能收到官方找回消息。` } },
{ name: { en: `Read offers before funding`, zh: `入金前读优惠` }, text: { en: `Open Promotions / Welcome Bonus terms first.`, zh: `先打开优惠/迎新条款。` } },
{ name: { en: `Enter lobby intentionally`, zh: `有意识进入大厅` }, text: { en: `Login, then Games or Payments — not chase mode.`, zh: `登录，再进游戏或支付——不是追损模式。` } }
  ],
  sections: [
{
    title: { en: `Agent registration myths`, zh: `代理注册迷思` },
    body: { en: `Paying someone to “open TPOWER for you” usually means they keep control. Official Register keeps the account yours. If a chat demands prepaid fees to register, leave.`, zh: `付钱让人「帮你开 TPOWER」通常意味着对方保留控制。官方注册让账户属于你。若聊天要求预付注册费，离开。` },
    imageSrc: "/images/intent/heroes/tpower-register.webp",
    imageAlt: { en: `Agent registration myths`, zh: `代理注册迷思` },
    reverse: false,
  },
{
    title: { en: `Registration and first-week bonuses`, zh: `注册与首周优惠` },
    body: { en: `Welcome offers are optional. Register first, understand wagering, then deposit if you still want the offer. Free Credit and Cashback pages explain related intents without replacing terms on the promotions lobby.`, zh: `迎新优惠是可选的。先注册、理解流水，仍想要再存款。免费信用与现金回馈页解释相关意图，不取代优惠大厅条款。` },
    imageSrc: "/images/intent/heroes/welcome-bonus.webp",
    imageAlt: { en: `Registration and first-week bonuses`, zh: `注册与首周优惠` },
    reverse: true,
  },
{
    title: { en: `From register to first deposit`, zh: `从注册到首次存款` },
    body: { en: `Deposit Guide and Payment Methods turn signup into funded play. Skip personal-account deposits. Payment Security protects the money moment after registration enthusiasm.`, zh: `存款指南与支付方式把注册变成已入金游玩。跳过私人账户存款。支付安全保护注册热情后的资金时刻。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `From register to first deposit`, zh: `从注册到首次存款` },
    reverse: false,
  },
{
    title: { en: `Cluster for new accounts`, zh: `新账户集群` },
    body: { en: `Login landing, Mobile App, APK, Promotions, VIP, Responsible Gaming, Support, Blog, News — and the live Register form when you are ready to act.`, zh: `登录着陆页、手机APP、APK、优惠、VIP、负责任博彩、客服、博客、新闻——准备行动时再到现场注册表单。` },
    imageSrc: "/images/cta/tpower-lobby-cta.webp",
    imageAlt: { en: `Cluster for new accounts`, zh: `新账户集群` },
    reverse: true,
  }
  ],
  comparisonTitle: { en: `Official register vs agent signup`, zh: `官方注册 vs 代理开户` },
  comparisonHeaders: [
    { en: `Topic`, zh: `主题` },
    { en: `Official`, zh: `官方` },
    { en: `Agent pattern`, zh: `代理模式` },
  ],
  comparisonRows: [
{ label: { en: `Control`, zh: `控制权` }, a: { en: `You hold login`, zh: `你持有登录` }, b: { en: `Someone else may hold access`, zh: `他人可能持有访问` } },
{ label: { en: `Fees`, zh: `费用` }, a: { en: `No prepaid register fee`, zh: `无预付注册费` }, b: { en: `Often demands transfer first`, zh: `常要求先转账` } },
{ label: { en: `Bonuses`, zh: `优惠` }, a: { en: `Official promotions terms`, zh: `官方优惠条款` }, b: { en: `Verbal promises, hard to audit`, zh: `口头承诺，难审计` } },
{ label: { en: `Support`, zh: `客服` }, a: { en: `Support Center`, zh: `客服中心` }, b: { en: `Depends on the agent’s mood`, zh: `取决于代理心情` } }
  ],
  timelineTitle: { en: `Registration timeline`, zh: `注册时间线` },
  timeline: [
{ title: { en: `Prepare`, zh: `准备` }, body: { en: `Decide details and password strategy.`, zh: `决定资料与密码策略。` } },
{ title: { en: `Register`, zh: `注册` }, body: { en: `Complete official form.`, zh: `完成官方表单。` } },
{ title: { en: `Orient`, zh: `定向` }, body: { en: `Read promotions and responsible tools.`, zh: `阅读优惠与负责任工具。` } },
{ title: { en: `Fund`, zh: `入金` }, body: { en: `Deposit via Payment Center if ready.`, zh: `准备好则经支付中心存款。` } }
  ],
  trustTitle: { en: `Register trust checklist`, zh: `注册信任清单` },
  trustItems: [
{ title: { en: `Official form only`, zh: `仅官方表单` }, body: { en: `No chat-based account creation.`, zh: `无基于聊天的开户。` } },
{ title: { en: `Unique password`, zh: `独立密码` }, body: { en: `Never reuse email passwords.`, zh: `永不复用邮箱密码。` } },
{ title: { en: `Accurate banking name`, zh: `准确银行姓名` }, body: { en: `Helps withdrawals later.`, zh: `有助日后提款。` } },
{ title: { en: `Read before bonus deposit`, zh: `红利存款前先读` }, body: { en: `Terms beat headlines.`, zh: `条款胜过标题。` } },
{ title: { en: `Official apps only`, zh: `仅官方 APP` }, body: { en: `Download hub path.`, zh: `下载中心路径。` } },
{ title: { en: `Support without fees`, zh: `无费用客服` }, body: { en: `Help does not require prepaid tips.`, zh: `帮助不要求预付小费。` } }
  ],
  faqTitle: { en: `TPOWER Register FAQ`, zh: `TPower 注册常见问题` },
  faqs: [
{ question: { en: `What is TPOWER Register on TPOWER?`, zh: `TPOWER 上的TPower注册是什么？` }, answer: { en: `TPOWER Register on this landing explains official process, benefits, and safe next steps for Malaysia players — then links into the live product surface.`, zh: `本着陆页上的TPower注册说明官方流程、好处与安全下一步，并链到现场产品表面。` } },
{ question: { en: `Is this page the same as the product lobby?`, zh: `本页等于产品大厅吗？` }, answer: { en: `No. This is the search-intent authority page. Product lobbies and forms keep their own routes for interaction.`, zh: `不等。这是搜索意图权威页。产品大厅与表单保留各自交互路由。` } },
{ question: { en: `How do I start safely?`, zh: `如何安全开始？` }, answer: { en: `Use official navigation only, avoid chat shortcuts, and open Support Center with evidence if something fails.`, zh: `只使用官方导航，避开聊天捷径；失败时带证据打开客服中心。` } },
{ question: { en: `Does Responsible Gaming still apply?`, zh: `负责任博彩仍适用吗？` }, answer: { en: `Always. Landings educate; they do not encourage chase behaviour.`, zh: `始终适用。着陆页做教育，不鼓励追损。` } },
{ question: { en: `Where is the register form?`, zh: `注册表单在哪？` }, answer: { en: `At /register on the official site or app.`, zh: `在官网或 APP 的 /register。` } },
{ question: { en: `Can I register through an agent?`, zh: `可以通过代理注册吗？` }, answer: { en: `You should register officially yourself to keep control.`, zh: `应自己官方注册以保持控制。` } },
{ question: { en: `Do I get a welcome bonus automatically?`, zh: `会自动获得迎新奖金吗？` }, answer: { en: `Depends on live offers and terms — read Welcome Bonus / Promotions first.`, zh: `取决于现场活动与条款——先读迎新/优惠。` } },
{ question: { en: `What after registration?`, zh: `注册之后做什么？` }, answer: { en: `Login, explore Games, consider Mobile App, fund via Payment Center if ready.`, zh: `登录、探索游戏、考虑手机APP，准备好则经支付中心入金。` } }
  ],
  relatedTitle: { en: `Related signup resources`, zh: `相关注册资源` },
  relatedLinks: withIntentRelated([

  ]),
  ctaTitle: { en: `Create your official TPOWER account`, zh: `创建你的官方 TPOWER 账户` },
  ctaDescription: { en: `Open Register on the real site, protect your password, and read offers before your first deposit.`, zh: `在真网站打开注册，保护密码，首次存款前阅读优惠。` },
  ctaImage: "/images/cta/tpower-join-cta.webp",
  primaryCtaHref: "/register",
};
