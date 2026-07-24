import type { PaymentPageContent } from "./types";
import { withPaymentRelated } from "./shared";

export const paymentDepositGuide: PaymentPageContent = {
  id: "deposit-guide",
  path: "/deposit-guide",
  heroImage: "/images/payments/heroes/deposit-guide.webp",
  metaTitle: {
    en: "TPOWER Deposit Guide | How Deposits Work in Malaysia",
    zh: "TPower存款指南｜马来西亚官方入金流程说明",
  },
  metaDescription: {
    en: "Official TPOWER Deposit Guide: cashier steps, method choice, limits mindset, verification, status meanings, and how to avoid unofficial deposit shortcuts.",
    zh: "TPOWER线上博彩官方存款指南：收银台步骤、通道选择、限额思路、核验、状态含义，以及如何避开非官方代存捷径。",
  },
  heroTitle: {
    en: "TPOWER Deposit Guide",
    zh: "TPOWER线上博彩 存款指南",
  },
  heroSubtitle: {
    en: "How funding works on the official cashier — clear steps, honest timing, and safer habits for Malaysia players.",
    zh: "官方收银台如何入金——步骤清楚、时效诚实、习惯更安全，面向大马玩家。",
  },
  introduction: {
    en: `The TPOWER Deposit Guide is the official orientation for funding your account before you open the lobby. Deposits are not magic top-ups. They are structured transfers through documented rails on [[/payment-methods|payment methods]], confirmed by banking or e-wallet systems, then reflected as balance after the cashier records success.

Malaysia players usually fund after work, on mobile, between commuting and evening play. That context matters. A good deposit journey is short when everything matches, and transparent when something needs a second look. This guide explains the journey without promising that every bank window behaves identically on every night of the week.

Start with an official account. If you do not have one, complete [[/register|Register]] on the official domain, then [[/login|Login]] before opening the cashier. Never deposit through an agent chat that asks you to transfer to a personal account “for faster credit.” Unofficial shortcuts break reconciliation, create dispute risk, and often coincide with phishing.

Choose a rail you actually control. FPX, DuitNow, Touch 'n Go, GrabPay, and online banking each appear in dedicated guides: [[/fpx-deposit|FPX Deposit]], [[/duitnow-deposit|DuitNow Deposit]], [[/touch-n-go|Touch 'n Go]], [[/grabpay|GrabPay Payments]], and [[/online-banking|Online Banking]]. Instant-oriented behaviour is covered on [[/instant-deposit|Instant Deposit]]. Use those pages for rail-specific detail; use this Deposit Guide for the shared logic of amount, status, and verification.

Amount discipline belongs next to entertainment discipline. Decide your session budget before you open the cashier. [[/responsible-gaming|Responsible Gaming]] tools help adults keep funding intentional. Depositing while chasing losses is a process failure, not a payment failure.

After you submit, watch official statuses — not Telegram rumours. Pending, processing, and completed mean different things. If a bank app shows success but the cashier still shows pending, wait a short window, then contact [[/contact|Support Center]] with time, amount, and rail name. Do not open a second deposit “to force credit” unless support instructs you; duplicate transfers create harder cases.

Verification can appear before larger withdrawals even when small deposits felt instant. Pair this guide with [[/aml-kyc|AML & KYC]] and [[/payment-security|Payment Security]]. For payout orientation after you play, switch to the [[/withdrawal-guide|Withdrawal Guide]] and [[/fast-withdrawal|Fast Withdrawal]].

The Deposit Guide exists so Malaysia players can fund TPOWER with the same calm they use for ordinary bill payments: official URL, known rail, controlled amount, readable status, and support when the unexpected happens.

Treat every deposit as a documented event. Keep screenshots of bank confirmations when something looks delayed. Official support works faster with evidence than with anxiety. Prefer initiating deposits from the cashier after login, not from links in messages claiming your balance is frozen.

If you use the [[/download|TPOWER App]], the cashier should still feel like the same official product surface — not a third-party wallet bolted on. App deposits follow the same rails and the same anti-phishing rules as browser deposits.

Promotions can change the psychology of a deposit. Read [[/promotions|Promotions]] terms before you top up for a bonus. Wagering and eligible games matter more than the headline percentage. A clean deposit into a clear bonus is better than a rushed deposit into a misunderstood offer.

VIP progression does not require unofficial deposit channels. If a message claims a host needs a special personal transfer to “unlock Silver faster,” treat it as hostile until [[/vip|VIP]] and Support Center confirm otherwise on official URLs.

Knowledge articles on [[/blog/how-to-deposit-tpower|the deposit blog guide]] can walk through screenshots for common rails. This Deposit Guide remains the long-form authority page for intent around TPOWER Deposit keywords and practical funding EEAT.

When in doubt, pause. Reopen this page, the payment methods hub, and Support Center. If the action still makes sense after that pause, proceed on official navigation only.

Cashier psychology deserves its own paragraph set. Many Malaysia players open deposit after a stressful commute. The Deposit Guide recommends a ninety-second pause: confirm domain, confirm budget, confirm rail health. That pause prevents more losses than any slogan about speed.

Treat minimum deposit figures as product floors, not social challenges. Splitting one budget into five micro-deposits to “feel safer” can create five pending states. One planned deposit is easier to support than five anxious ones.

If you share a household device, end the session after funding. Deposit success on a borrowed phone without logout is how cousins accidentally play your balance. Platform habits from Security pages apply to money moments too.

Document your personal funding map: primary rail, backup rail, support contact path. When maintenance hits, you will not invent a chat workaround because your map already names the backup.

Finally, remember that deposit authority is cumulative. Reading Payment Methods, Instant Deposit, and Payment Security alongside this guide builds a complete TPOWER Deposit skill set — not a single-page superstition.`,
    zh: `「TPOWER存款指南」是入金前的官方导向。存款不是魔法加额，而是通过 [[/payment-methods|支付方式]] 上已说明的通道完成结构化划转，由银行或电子钱包确认，再由收银台记入余额。

大马玩家常在下班后、通勤与晚间游玩之间用手机入金。这个语境很重要。一切匹配时，好的存款旅程应该短；需要再核一眼时，应该透明。本指南说明旅程，但不假装每家银行每个夜晚的窗口都完全一样。

先从官方账户开始。若还没有，请在官方域名完成 [[/register|注册]]，再 [[/login|登录]] 后打开收银台。切勿通过代理聊天把钱转到「更快到账」的私人账户。非官方捷径破坏对账、制造争议，也常与钓鱼重叠。

选择你真正控制的通道。FPX、DuitNow、Touch 'n Go、GrabPay 与网上银行各有专页：[[/fpx-deposit|FPX存款]]、[[/duitnow-deposit|DuitNow存款]]、[[/touch-n-go|Touch 'n Go]]、[[/grabpay|GrabPay支付]]、[[/online-banking|网上银行]]。偏即时体验见 [[/instant-deposit|即时存款]]。专页讲通道细节；本存款指南讲金额、状态与核验的共同逻辑。

金额纪律应与娱乐纪律并列。打开收银台前先决定本场预算。[[/responsible-gaming|负责任博彩]] 帮助成年人把入金保持为有意识行为。追损式存款是流程失败，不是支付失败。

提交后看官方状态，而不是 Telegram 谣言。待处理、处理中、已完成含义不同。若银行 APP 显示成功而收银台仍待处理，先等一小段窗口，再向 [[/contact|客服中心]] 提供时间、金额与通道名。除非客服指示，不要为了「逼到账」再存一笔；重复转账只会让个案更难。

即使小额存款感觉秒到，较大提款前仍可能出现核验。请搭配 [[/aml-kyc|AML与KYC]] 与 [[/payment-security|支付安全]]。玩完要出金，请转 [[/withdrawal-guide|提款指南]] 与 [[/fast-withdrawal|快速提款]]。

本指南的存在，是为了让大马玩家用缴账单的平静来为 TPOWER线上博彩 入金：官方网址、熟悉通道、可控金额、可读状态，以及意外时的客服路径。

把每笔存款当成有据可查的事件。出现延迟时保留银行确认截图。官方客服在有证据时比在焦虑时更快。请从登录后的收银台发起存款，而不是从声称余额被冻结的消息链接。

若使用 [[/download|TPOWER官方APP]]，收银台仍应是同一官方产品表面——不是外挂第三方钱包。APP 存款与浏览器遵守同一通道与防钓鱼规则。

优惠会改变存款心理。为红利充值前请先读 [[/promotions|优惠专区]] 条款。流水与适用游戏比标题百分比更重要。清楚红利下的干净存款，优于误解活动下的匆忙充值。

VIP 进阶不需要非官方入金通道。若有消息声称接待需要私人转账「更快解锁白银」，在 [[/vip|VIP]] 与客服中心于官方网址确认前，请当作敌意处理。

[[/blog/how-to-deposit-tpower|存款攻略文章]] 可用截图走常见通道。本存款指南仍是围绕 TPower 存款意图的长文权威页。

不确定时先停顿。重开本页、支付方式中心与客服中心。若停顿后仍说得通，只在官方导航继续。

收银台心理值得单独成段。许多大马玩家在疲惫通勤后打开存款。存款指南建议九十秒停顿：确认域名、确认预算、确认通道健康。这停顿比任何速度口号更能防损失。

把最低存款数字当作产品底线，不是社交挑战。把一笔预算拆成五笔微存款「求安心」，可能造成五个待处理状态。一笔有计划的存款比五笔焦虑存款更好支持。

若共用家庭设备，入金后结束会话。外借手机上存款成功却未登出，是亲戚误玩你余额的常见路径。安全页的平台习惯同样适用于资金时刻。

记录个人资金地图：主通道、备用通道、客服路径。维护到来时，你不会发明聊天变通，因为地图已写明备用。

最后记住，存款权威是累积的。把支付方式、即时存款与支付安全与本指南一起读，才能练成完整的 TPower 存款技能——而不是单页迷信。`,
  },
  stats: [
    {
      value: { en: "MYR", zh: "马币" },
      label: {
        en: "Cashier priced for Malaysia players",
        zh: "面向大马玩家的马币收银台",
      },
    },
    {
      value: { en: "Official", zh: "官方" },
      label: {
        en: "Cashier only — no personal agent accounts",
        zh: "仅官方收银台—拒私人代存账户",
      },
    },
    {
      value: { en: "Status", zh: "状态" },
      label: {
        en: "Readable pending / completed states",
        zh: "可读的待处理/已完成状态",
      },
    },
    {
      value: { en: "24/7", zh: "全天" },
      label: {
        en: "Support path when deposits need review",
        zh: "存款需复核时可走客服路径",
      },
    },
  ],
  benefitsTitle: {
    en: "Why a structured deposit habit matters",
    zh: "为什么结构化存款习惯重要",
  },
  benefits: [
    {
      icon: "wallet",
      title: { en: "Budget before balance", zh: "先预算再余额" },
      body: {
        en: "Decide session spend before the cashier opens — funding follows intention.",
        zh: "打开收银台前先决定本场花费——入金跟随意图。",
      },
    },
    {
      icon: "building",
      title: { en: "Rails you recognise", zh: "认得的通道" },
      body: {
        en: "FPX, DuitNow, and local e-wallets match everyday Malaysia money habits.",
        zh: "FPX、DuitNow 与本地电子钱包符合大马日常资金习惯。",
      },
    },
    {
      icon: "eye",
      title: { en: "Visible statuses", zh: "可见状态" },
      body: {
        en: "Pending and completed states reduce guesswork after bank confirmation.",
        zh: "待处理与已完成减少银行确认后的猜测。",
      },
    },
    {
      icon: "shield",
      title: { en: "Official surface only", zh: "仅官方表面" },
      body: {
        en: "Deposits belong on the logged-in cashier, not in chat-driven personal transfers.",
        zh: "存款应在已登录收银台，而非聊天驱动的私人转账。",
      },
    },
    {
      icon: "zap",
      title: { en: "Faster when matched", zh: "匹配时更快" },
      body: {
        en: "Correct amount, matching name data, and a healthy bank app shorten cycles.",
        zh: "金额正确、姓名资料匹配、银行 APP 健康，周期更短。",
      },
    },
    {
      icon: "check",
      title: { en: "Evidence-ready support", zh: "证据友好客服" },
      body: {
        en: "Timestamps and rail names help Support Center resolve edge cases calmly.",
        zh: "时间戳与通道名帮助客服中心冷静处理边界个案。",
      },
    },
  ],
  howToTitle: {
    en: "How to deposit on TPOWER",
    zh: "如何在TPOWER存款",
  },
  howToDescription: {
    en: "A practical TPOWER Deposit sequence for Malaysia players using the official cashier.",
    zh: "大马玩家使用官方收银台的务实 TPower 存款步骤。",
  },
  howToSteps: [
    {
      name: { en: "Open an official session", zh: "打开官方会话" },
      text: {
        en: "Register or login on the official domain, then open the cashier from product navigation — not from a message link.",
        zh: "在官方域名注册或登录，再从产品导航打开收银台——不要从消息链接进入。",
      },
    },
    {
      name: { en: "Pick a rail you control", zh: "选择你控制的通道" },
      text: {
        en: "Choose FPX, DuitNow, e-wallet, or online banking based on what you can complete yourself tonight.",
        zh: "按今晚你自己能完成的能力选择 FPX、DuitNow、电子钱包或网上银行。",
      },
    },
    {
      name: { en: "Enter a planned amount", zh: "输入计划金额" },
      text: {
        en: "Type the amount you budgeted. Confirm min limits shown in cashier and avoid last-second bonus chasing.",
        zh: "输入已预算金额。确认收银台最低限额，避免最后一秒追红利加额。",
      },
    },
    {
      name: {
        en: "Complete bank or wallet confirmation",
        zh: "完成银行或钱包确认",
      },
      text: {
        en: "Approve the transfer in your bank or e-wallet app. Do not leave the flow mid-OTP unless you intend to cancel.",
        zh: "在银行或电子钱包 APP 批准转账。除非打算取消，不要在 OTP 中途离开。",
      },
    },
    {
      name: { en: "Wait for cashier status", zh: "等待收银台状态" },
      text: {
        en: "Return to the official cashier and confirm completed credit before launching games.",
        zh: "回到官方收银台，确认已入账后再开游戏。",
      },
    },
    {
      name: {
        en: "Escalate with evidence if needed",
        zh: "必要时带证据升级",
      },
      text: {
        en: "If bank success and cashier pending diverge beyond a short window, contact Support Center with time, amount, and rail.",
        zh: "若银行成功与收银台待处理超过短窗口仍不一致，向客服中心提供时间、金额与通道。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Cashier logic: amount, method, confirmation",
        zh: "收银台逻辑：金额、方式、确认",
      },
      imageSrc: "/images/payments/heroes/deposit-guide.webp",
      imageAlt: {
        en: "TPOWER deposit cashier atmosphere",
        zh: "TPOWER存款收银台氛围",
      },
      body: {
        en: `The cashier is a controlled form, not a chat. You select a method, enter an amount, and confirm through the rail provider. That separation exists so TPOWER can reconcile credits against payment references instead of screenshots alone.

Amount fields should match what you can afford for the session. If a promotion requires a minimum deposit, read the offer on [[/promotions|Promotions]] first. Do not inflate a deposit solely because a chat group claims “today only.” Official offers live on official pages.

Method choice should favour reliability over novelty. If your FPX bank app is under maintenance, switch to [[/duitnow-deposit|DuitNow]] or an e-wallet you already use daily. The Deposit Guide does not rank rails as “best forever”; it ranks “best for you tonight” by what you can finish cleanly.

Confirmation belongs inside the bank or wallet UI. TPOWER will not ask for your banking password. Anyone who does is not operating the official cashier. See [[/payment-security|Payment Security]] for phishing patterns around deposit language.

After confirmation, patience for a short window is part of professional funding. Instant rails are usually fast; they are not immune to bank-side queues. Refresh the official cashier rather than launching five parallel deposits.

If you deposit on mobile data during a commute, stay on the network until the bank confirmation finishes. Dropped OTP sessions are a common reason players think money vanished when the transfer never completed.

Keep one mental model: you pay the rail; the rail notifies TPOWER; the cashier shows balance. Skipping the middle with personal account transfers removes the notification path that makes support solvable.`,
        zh: `收银台是受控表单，不是聊天。你选择方式、输入金额，再经通道提供方确认。这种分离让 TPOWER线上博彩 能用支付参考对账，而不是只靠截图。

金额应匹配本场可负担范围。若优惠要求最低存款，先读 [[/promotions|优惠专区]]。不要只因群聊声称「仅限今日」就抬高存款。官方活动在官方页面。

通道选择应优先可靠而非新奇。若 FPX 银行 APP 维护，改用 [[/duitnow-deposit|DuitNow]] 或你日常已用的电子钱包。存款指南不把通道排成「永远最佳」，而是按「今晚你能干净完成」排序。

确认发生在银行或钱包界面内。TPOWER 不会索要网银密码。任何人索要，都不是官方收银台。钓鱼话术见 [[/payment-security|支付安全]]。

确认后，短窗口内的耐心属于专业入金。即时通道通常快，但不免疫银行侧排队。刷新官方收银台，而不是平行发起五笔存款。

通勤用移动数据存款时，请保持网络直到银行确认结束。OTP 中断是玩家以为钱消失、其实转账未完成的常见原因。

记住一个模型：你付给通道；通道通知 TPOWER；收银台显示余额。用私人账户转账跳过中间环节，就失去让客服可解的通知路径。`,
      },
    },
    {
      title: {
        en: "Limits, verification, and name matching",
        zh: "限额、核验与姓名匹配",
      },
      imageSrc: "/images/news/tpower-duitnow-ewallet-tips.webp",
      reverse: true,
      imageAlt: {
        en: "Malaysia payment rails orientation",
        zh: "大马支付通道导向",
      },
      body: {
        en: `Deposit minimums appear in the cashier and on method cards in [[/payment-methods|Payment Methods]]. Treat them as operational floors, not challenges to bypass via split transfers unless the product explicitly supports that pattern.

Name matching protects withdrawals later. Funding from accounts that do not match your registered identity can create friction when you request a payout. Align deposit sources with the identity you will use on the [[/withdrawal-guide|Withdrawal Guide]].

Verification is not punishment. Larger patterns, new devices, or first-time payouts can trigger checks described on [[/aml-kyc|AML & KYC]]. Completing verification early is usually smoother than discovering it at midnight before a withdrawal.

If a deposit is held for review, Support Center will ask for specific evidence — not your password. Provide what is requested on official channels only. Do not upload ID to random cloud folders shared by strangers in chat.

Bonus eligibility can depend on deposit method and timing. Always confirm whether a rail is excluded from an offer before you top up for that offer alone.

Players who keep a simple funding map — one primary bank, one backup e-wallet — resolve issues faster than players who rotate through unfamiliar rails every night.`,
        zh: `存款最低额显示在收银台与 [[/payment-methods|支付方式]] 的方式卡片上。把它当作运营底线，而不是除非产品明确支持、否则用拆分转账去绕过的挑战。

姓名匹配保护日后的提款。从不匹配注册身份的账户入金，可能在申请出金时产生摩擦。请让存款来源与 [[/withdrawal-guide|提款指南]] 将使用的身份一致。

核验不是惩罚。较大模式、新设备或首次出金可能触发 [[/aml-kyc|AML与KYC]] 所述检查。提早完成通常比午夜提款前才发现更顺。

若存款进入复核，客服中心会要具体证据——不要密码。只在官方渠道提供所求资料。不要把证件上传到聊天陌生人分享的随机云盘。

红利资格可能取决于存款方式与时间。为某优惠单独充值前，先确认该通道是否被排除。

保持简单资金地图的玩家——一个主银行、一个备用电子钱包——比每晚轮换陌生通道的玩家更快解决问题。`,
      },
    },
    {
      title: {
        en: "Common deposit problems and calm fixes",
        zh: "常见存款问题与冷静处理",
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Official TPOWER support path",
        zh: "TPOWER官方客服路径",
      },
      body: {
        en: `Bank success, cashier pending: wait a short window, then open [[/contact|Support Center]] with exact time, amount, and method. Bring a bank reference if available.

OTP failed or session expired: do not assume money left your account. Check the bank app transaction list. If no debit occurred, restart a single clean deposit.

Wrong amount typed: if the transfer has not completed, cancel inside the bank flow when possible. If it completed, play within budget or contact support for guidance — do not invent unofficial “adjustment transfers.”

App vs browser confusion: use one surface per attempt. Starting on browser and finishing on a mirrored APK is how phishing wins. Stick to [[/download|Download]] for apps and official domains for web.

Rumour of “deposit bonus codes” from strangers: ignore. Official promotions are listed on [[/promotions|Promotions]]. Codes that require paying a person first are not TPOWER Deposit features.

If you need a clustered FAQ list beyond this guide, open [[/deposit-withdrawal-faq|Deposit & Withdrawal FAQ]]. For speed-focused expectations, read [[/instant-deposit|Instant Deposit]] without treating “instant” as a legal guarantee against all bank delays.`,
        zh: `银行成功、收银台待处理：先等短窗口，再向 [[/contact|客服中心]] 提供准确时间、金额与方式；有银行参考号一并附上。

OTP 失败或会话过期：不要假定钱已离开账户。先查银行 APP 流水。若无扣款，再重新发起一笔干净存款。

金额输错：若转账未完成，尽量在银行流程内取消。若已完成，按预算游玩或向客服寻求指引——不要发明非官方「调整转账」。

APP 与浏览器混淆：每次尝试只用一个表面。浏览器开始、镜像 APK 结束，是钓鱼常见路径。APP 跟 [[/download|下载]]，网页跟官方域名。

陌生人「存款优惠码」谣言：忽略。官方活动在 [[/promotions|优惠专区]]。要先付钱给个人的码不是 TPower 存款功能。

若需要比本指南更集中的问答，打开 [[/deposit-withdrawal-faq|存提款常见问题]]。若关注速度预期，读 [[/instant-deposit|即时存款]]，但不要把「即时」当成对抗一切银行延迟的法律保证。`,
      },
    },
    {
      title: {
        en: "Internal cluster: where to go next",
        zh: "主题集群：下一步去哪",
      },
      imageSrc: "/images/payments/heroes/payment-methods.webp",
      reverse: true,
      imageAlt: {
        en: "TPOWER payment methods hub",
        zh: "TPOWER支付方式中心",
      },
      body: {
        en: `After you understand deposits, deepen method knowledge on [[/payment-methods|Payment Methods]]. Learn payouts on the [[/withdrawal-guide|Withdrawal Guide]]. Strengthen defences on [[/payment-security|Payment Security]] and [[/security|Platform Security]].

Stay responsible with [[/responsible-gaming|Responsible Gaming]]. Keep news and education nearby via [[/news|News]] and [[/blog|Knowledge Center]]. When something breaks, [[/contact|Support Center]] and [[/faq|FAQ]] are the escalation map.

This page anchors the commercial intent around TPOWER Deposit while refusing thin “deposit now” landing page tactics. Authority comes from process clarity, not from shouting urgency.`,
        zh: `理解存款后，到 [[/payment-methods|支付方式]] 加深通道知识；到 [[/withdrawal-guide|提款指南]] 学习出金；到 [[/payment-security|支付安全]] 与 [[/security|平台安全]] 加强防护。

用 [[/responsible-gaming|负责任博彩]] 保持自律。新闻与教育见 [[/news|新闻室]] 与 [[/blog|知识中心]]。出问题时，[[/contact|客服中心]] 与 [[/faq|常见问题]] 是升级地图。

本页锚定 TPower 存款的商业意图，但拒绝单薄的「立刻存款」着陆页手法。权威来自流程清楚，而不是制造紧迫感。`,
      },
    },
  {
    title: { en: `Deposit rituals for night-shift Malaysia players`, zh: `大马夜班玩家的存款仪式` },
    body: { en: `Night-shift funding has patterns. You finish work, open the phone, and want credit before the lobby loads. Rituals protect that moment: bookmark official TPOWER, open cashier from navigation, choose the rail you used successfully last week, enter the amount you decided at dinner, finish provider confirmation without multitasking, verify completed status, then open games.

Break the ritual when something feels off. A new deep link, a host asking for a personal transfer, a mirrored APK — those are exit ramps, not speed ramps. Deposit Guide authority is the courage to stop.

Keep a simple ledger for a month if you are rebuilding discipline: date, rail, amount, outcome. Patterns appear. Maybe FPX fails every Tuesday maintenance. Maybe TnG wins on commute nights. Data beats superstition.

When promotions shout, re-read terms before you inflate the deposit. The Deposit Guide’s commercial job is TPOWER Deposit clarity — not maximising reckless top-ups.`, zh: `夜班入金有其模式。你下班、打开手机、想在大厅加载前入账。仪式保护该时刻：收藏官方 TPOWER、从导航打开收银台、选择上周成功用过的通道、输入晚饭时决定的金额、不打断地完成提供方确认、核对完成状态、再开游戏。

感觉不对时打断仪式。新的深链、要私人转账的接待、镜像 APK——那些是出口匝道，不是速度匝道。存款指南的权威是敢停。

若你在重建纪律，简单记账一个月：日期、通道、金额、结果。模式会出现。也许 FPX 每周二维护失败。也许 TnG 在通勤夜胜出。数据胜过迷信。

当优惠喊叫时，抬高存款前重读条款。存款指南的商业工作是 TPower 存款清楚——不是最大化鲁莽充值。` },
    imageSrc: "/images/cta/tpower-join-cta.webp",
    imageAlt: { en: `Deposit rituals for night-shift Malaysia players`, zh: `大马夜班玩家的存款仪式` },
    reverse: true,
  }
  ],
  timelineTitle: {
    en: "Deposit timeline players should expect",
    zh: "玩家应预期的存款时间线",
  },
  timeline: [
    {
      title: { en: "Plan", zh: "计划" },
      body: {
        en: "Set budget and choose a rail you can complete tonight.",
        zh: "设定预算并选择今晚能完成的通道。",
      },
    },
    {
      title: { en: "Submit", zh: "提交" },
      body: {
        en: "Enter amount in the official cashier and start the rail flow.",
        zh: "在官方收银台输入金额并启动通道流程。",
      },
    },
    {
      title: { en: "Confirm", zh: "确认" },
      body: {
        en: "Approve OTP or wallet payment inside your bank or e-wallet.",
        zh: "在银行或电子钱包内完成 OTP 或支付确认。",
      },
    },
    {
      title: { en: "Credit", zh: "入账" },
      body: {
        en: "Cashier shows completed balance; then open games intentionally.",
        zh: "收银台显示完成余额；再有意识地开游戏。",
      },
    },
  ],
  securityTitle: {
    en: "Deposit security checklist",
    zh: "存款安全清单",
  },
  securityItems: [
    {
      title: { en: "Official cashier only", zh: "仅官方收银台" },
      body: {
        en: "Never transfer to personal accounts shared in chat for “faster credit.”",
        zh: "切勿向聊天分享的私人账户转账以求「更快到账」。",
      },
    },
    {
      title: { en: "No banking passwords to agents", zh: "不向客服交网银密码" },
      body: {
        en: "TPOWER will not ask for your bank login secrets.",
        zh: "TPOWER 不会索要你的银行登录机密。",
      },
    },
    {
      title: { en: "Match identity early", zh: "尽早匹配身份" },
      body: {
        en: "Deposit from sources aligned with your registered name for smoother withdrawals.",
        zh: "从与注册姓名一致的来源入金，提款更顺。",
      },
    },
    {
      title: { en: "One attempt at a time", zh: "一次一笔" },
      body: {
        en: "Avoid parallel duplicate deposits while a status is still pending.",
        zh: "状态仍待处理时避免平行重复存款。",
      },
    },
    {
      title: { en: "Evidence over panic", zh: "证据优于恐慌" },
      body: {
        en: "Save timestamps and references before escalating to Support Center.",
        zh: "升级客服前先保存时间戳与参考号。",
      },
    },
    {
      title: { en: "Pause on urgency", zh: "遇紧迫先停" },
      body: {
        en: "Urgent deposit messages outside navigation are a phishing tell.",
        zh: "导航外的紧迫存款消息是钓鱼信号。",
      },
    },
  ],
  faqTitle: { en: "Deposit Guide FAQ", zh: "存款指南常见问题" },
  faqs: [
    {
      question: {
        en: "How do I make a TPOWER deposit?",
        zh: "如何进行 TPower 存款？",
      },
      answer: {
        en: "Login on the official site or app, open the cashier, choose a Malaysia rail you control, enter your budgeted amount, confirm in your bank or e-wallet, then wait for the cashier completed status before playing.",
        zh: "在官网或 APP 登录，打开收银台，选择你控制的大马通道，输入预算金额，在银行或电子钱包确认，再等收银台显示完成后再玩。",
      },
    },
    {
      question: {
        en: "Why is my deposit pending after bank success?",
        zh: "为什么银行成功了存款仍待处理？",
      },
      answer: {
        en: "Short reconciliation windows are normal. If pending persists beyond a reasonable wait, contact Support Center with time, amount, method, and bank reference — do not create duplicate transfers without guidance.",
        zh: "短对账窗口正常。若合理等待后仍待处理，向客服中心提供时间、金额、方式与银行参考号——未经指引不要重复转账。",
      },
    },
    {
      question: {
        en: "What is the minimum deposit?",
        zh: "最低存款是多少？",
      },
      answer: {
        en: "Minimums vary by method and appear in the live cashier and on the Payment Methods hub. Always trust the cashier figure for your selected rail.",
        zh: "最低额因方式而异，以收银台与支付方式中心显示为准。请以所选通道的收银台数字为准。",
      },
    },
    {
      question: {
        en: "Can I deposit through an agent?",
        zh: "可以通过代理存款吗？",
      },
      answer: {
        en: "No. Official TPOWER deposits go through the logged-in cashier. Personal-account “agent deposits” are unsafe and unsupported.",
        zh: "不可以。官方存款走已登录收银台。私人账户「代存」不安全且不受支持。",
      },
    },
    {
      question: {
        en: "Do bonuses change how I should deposit?",
        zh: "优惠会改变存款方式吗？",
      },
      answer: {
        en: "They can. Read Promotions terms for eligible methods and minimums before topping up for a specific offer.",
        zh: "可能会。为特定活动充值前，先读优惠条款中的适用方式与最低额。",
      },
    },
    {
      question: {
        en: "Is deposit the same on the app?",
        zh: "APP 存款一样吗？",
      },
      answer: {
        en: "Yes in principle: same official rails and anti-phishing rules. Install only via the Download hub.",
        zh: "原则上一样：同一官方通道与防钓鱼规则。安装只走下载中心。",
      },
    },
    {
      question: {
        en: "What should I prepare for Support Center?",
        zh: "联系客服中心要准备什么？",
      },
      answer: {
        en: "Approximate local time, amount, payment rail name, and any bank or wallet reference. Never share banking passwords.",
        zh: "本地大致时间、金额、通道名，以及银行或钱包参考号。切勿分享网银密码。",
      },
    },
    {
      question: {
        en: "Where do I learn withdrawals after depositing?",
        zh: "存款后去哪里学提款？",
      },
      answer: {
        en: "Use the Withdrawal Guide and Fast Withdrawal pages, and keep AML & KYC ready if verification is requested.",
        zh: "使用提款指南与快速提款页；若要求核验，准备好 AML 与 KYC 相关资料。",
      },
    },
  ],
  relatedTitle: {
    en: "Related payment guides",
    zh: "相关支付指南",
  },
  relatedLinks: withPaymentRelated([
    {
      href: "/instant-deposit",
      label: { en: "Instant Deposit", zh: "即时存款" },
    },
  ]),
  ctaTitle: {
    en: "Ready to fund on the official cashier?",
    zh: "准备好在官方收银台入金了吗？",
  },
  ctaDescription: {
    en: "Register or login, choose a Malaysia rail you control, and deposit with a planned budget — then play on your terms.",
    zh: "注册或登录，选择你控制的大马通道，按计划预算存款——再按自己的节奏游玩。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
