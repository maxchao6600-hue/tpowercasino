import type { AuthorityPageContent } from "./types";
import { withCoreRelated } from "./shared";

export const authorityCustomerCommitment: AuthorityPageContent = {
  id: "customer-commitment",
  path: "/customer-commitment",
  schemaType: "WebPage",
  atmosphere: "about",
  metaTitle: {
    en: "Customer Commitment | Response Standards, Complaints & Fairness",
    zh: "客户承诺｜响应标准、投诉路径与公平处理",
  },
  metaDescription: {
    en: "TPOWER response standards, complaint pathways, fairness expectations, and how escalation works on official support channels.",
    zh: "TPOWER线上博彩 的响应标准、投诉路径、公平预期，以及官方客服通道如何升级处理。",
  },
  heroTitle: {
    en: "Customer Commitment",
    zh: "TPOWER线上博彩 客户承诺",
  },
  heroSubtitle: {
    en: "How we aim to respond, hear complaints, stay fair, and escalate without password theatre.",
    zh: "我们如何响应、受理投诉、保持公平，并在不做密码表演的前提下升级。",
  },
  introduction: {
    en: `Customer Commitment states what Malaysia players should expect when something goes wrong — or when they simply need a clear answer. Entertainment platforms earn trust in the lobby and lose it in messy support. This page covers response standards, complaint pathways, fairness habits, and escalation without demanding secrets.

Official help starts at [[/contact|Support Center]]. Channels, preparation tips, and security notices live there. This commitment page explains the service philosophy behind those channels: acknowledge, clarify, investigate, resolve or escalate, and document.

Fairness means applying published rules consistently — promotions on [[/promotions|Promotions]], verification expectations on [[/aml-kyc|AML & KYC]], responsible controls on [[/responsible-gaming|Responsible Gaming]] — not inventing private exceptions for whoever shouts loudest in a chat app.

Escalation exists for stuck cases. It is not a threat contest. Bring timelines, transaction references, and non-secret screenshots. Never prove seriousness by pasting passwords. Pair this hub with [[/security|Platform Security]] and [[/why-choose-tpower|Why Choose TPOWER]] for the broader clarity promise.

Customer Commitment is measurable in habits: acknowledgement speed, clarity of next steps, willingness to cite published rules, and refusal to collect secrets. It is not measurable in theatrical promises that the desk cannot keep during peak hours.

Players also have commitments that make fairness possible: one official thread, truthful evidence, and calm enough communication that agents can investigate. Mutual discipline beats mutual escalation theatre.

Hold us to the boring standard: acknowledge, clarify, investigate against published rules, answer with reasons, escalate with evidence. If a channel skips those steps and jumps to password collection, it is not our commitment — leave it.

A commitment you cannot audit is marketing. Audit Customer Commitment by watching how cases move: Was the request acknowledged? Were clarifying questions specific and password-free? Did the answer cite a published rule, offer page, or product state? If stuck, could you escalate with a one-page timeline on the same official thread?

Players help the commitment succeed by bringing linear evidence and by staying on one channel. Parallel chats with conflicting stories create fog that slows investigation. Social pressure campaigns do not replace recorded processes. Dignity goes both ways: agents should stay calm; players should not treat abuse as a strategy.

When responsible-play requests arrive, the commitment demands priority dignity — help apply limits, timeouts, or exclusion without humiliation. When security requests arrive, the commitment demands refusal of secret collection. Those two reflexes define whether “customer first” is real.

Draft your case before you open chat. Three sentences: what you expected, what happened, what evidence you have. Then list timestamps and references. Then open Support Center. That draft is Customer Commitment from the player side — it makes acknowledgement, clarification, and investigation dramatically faster.

If you receive an answer you dislike, ask which published rule was applied before you escalate. Sometimes the rule is clear and the outcome will not change; knowing that saves a week of heat. Sometimes the rule was misapplied; evidence plus calm escalation fixes it. Either path beats password theatre and social outrage as strategies.

Hold the desk to dignity on responsible-play requests and to refusal on secret collection. Those two tests reveal whether a channel is real. Real channels can say no. Fake channels ask for more access.

Revisit Customer Commitment when a case heats up. Re-read the sequence: acknowledge, clarify, investigate against published rules, answer with reasons, escalate with a clean timeline on the same official thread. If a channel skips to secret collection, remote control, or unofficial APK installs, it is not this commitment — leave immediately and return to Support Center. Hold the desk to dignity on responsible-play requests and to refusal on password harvesting. Those tests reveal whether “customer first” is operational or theatrical.

Audit the desk by those habits whenever a case heats up — and restart on Support Center if a channel fails the audit. Consistency under observation is the whole point of this commitment.

Keep those audits boring, repeatable, and free of password theatre whenever a case heats up on TPOWER.

When heat rises, carefully re-read the acknowledge-clarify-investigate-answer-escalate loop before you open a second unofficial channel, paste a password, or install a remote-control app from a stranger.

A final service habit: draft the case, open one official thread, cite rules, escalate with a timeline, and never prove seriousness with secrets. That is Customer Commitment in practice for both desk and player.

One thread, rule citations, clean timeline, no password theatre — that is fairness in practice on TPOWER.
`,
    zh: `「客户承诺」说明马来西亚玩家在出问题——或只是需要清楚答案时——应有什么预期。娱乐平台在大厅赢得信任，也常在混乱客服中失去信任。本页覆盖响应标准、投诉路径、公平习惯，以及不索要机密的升级方式。

官方协助从 [[/contact|客服中心]] 开始。通道、准备提示与安全须知在那里。本承诺页解释通道背后的服务哲学：确认收到、澄清问题、调查、解决或升级，并留下记录。

公平意味着一贯适用公开规则——[[/promotions|优惠专区]] 的优惠、[[/aml-kyc|AML与KYC]] 的核验预期、[[/responsible-gaming|负责任博彩]] 的控制——而不是谁在聊天软件里嗓门大就给谁私了例外。

卡住的个案可以升级。这不是威胁比赛。请带时间线、交易参考与不含机密的截图。不要靠粘贴密码证明认真。请搭配 [[/security|平台安全]] 与 [[/why-choose-tpower|为什么选择TPOWER]] 理解更广的清楚承诺。

客户承诺可用习惯衡量：确认速度、下一步是否清楚、是否愿意引用公开规则、是否拒绝收集机密。它无法用高峰时段台席兑现不了的表演式承诺来衡量。

玩家也有让公平成为可能的承诺：一条官方线程、真实证据，以及足够冷静以便调查的沟通。彼此的纪律，胜过彼此的升级表演。

用无聊标准要求我们：确认、澄清、对照公开规则调查、给出有理由的答复、带证据升级。若某通道跳过这些步骤直接收割密码，那就不是我们的承诺——请离开。

无法审计的承诺只是营销。审计客户承诺，就看个案如何推进：请求被确认了吗？澄清问题是否具体且不索要密码？答复是否引用公开规则、优惠页或产品状态？卡住时，能否在同一官方线程用一页纸时间线升级？

玩家用线性证据、留在一条通道，帮助承诺成功。互相矛盾的平行聊天制造调查迷雾。社交施压不能替代留痕流程。尊严是双向的：客服应保持冷静；玩家不应把辱骂当策略。

负责任请求到来时，承诺要求优先尊严——协助启用限额、冷静期或排除，不做羞辱。安全相关请求到来时，承诺要求拒绝收集机密。这两个反射决定「客户优先」是否真实。

开聊天前先起草个案。三句话：你预期什么、发生了什么、你有什么证据。然后列出时间戳与参考号。再打开客服中心。这份草稿是玩家侧的客户承诺——它让确认、澄清与调查快得多。

若收到不喜欢的答复，升级前先问适用了哪条公开规则。有时规则清楚且结果不会变；知道这一点能省下一周火气。有时规则被误用；证据加冷静升级能修好。两条路都胜过把密码表演与社交愤怒当策略。

在负责任请求上要求台席保持尊严，在机密收集上要求拒绝。这两项测试能揭示通道是否真实。真通道可以说不。假通道要更多访问权限。

个案升温时重访客户承诺。重读顺序：确认、澄清、对照公开规则调查、给出有理由的答复、在同一官方线程用干净时间线升级。若某通道跳到收集机密、远程控制或非官方 APK，那就不是本承诺——立刻离开并回到客服中心。在负责任请求上要求尊严，在收割密码上要求拒绝。这些测试能揭示「客户优先」是可运营还是表演。

个案升温时用这些习惯审计台席——若通道未通过审计，回到客服中心重新开始。可观察下的一致性，就是本承诺的全部重点。

个案升温时，让这些审计保持无聊、可重复，且不做密码表演。

火气上升时，在打开第二条通道前，先重读「确认-澄清-调查-答复-升级」闭环。

最后一个服务习惯：起草个案、开一条官方线程、引用规则、用时间线升级，绝不靠机密证明认真。这就是台席与玩家双方实务中的客户承诺。

一条线程、规则引用、干净时间线、不做密码表演——那才是公平。
`,
  },
  stats: [
    {
      value: { en: "ACK", zh: "确认" },
      label: {
        en: "Acknowledge before deep dive",
        zh: "深入前先确认收到",
      },
    },
    {
      value: { en: "PATH", zh: "路径" },
      label: {
        en: "Published complaint route",
        zh: "公开投诉路径",
      },
    },
    {
      value: { en: "FAIR", zh: "公平" },
      label: {
        en: "Rules applied consistently",
        zh: "规则一贯适用",
      },
    },
    {
      value: { en: "ESC", zh: "升级" },
      label: {
        en: "Escalation without secrets",
        zh: "升级不靠机密",
      },
    },
  ],
  featuresTitle: {
    en: "Service habits this commitment covers",
    zh: "本承诺覆盖的服务习惯",
  },
  features: [
    {
      icon: "zap",
      title: {
        en: "Response standards in spirit",
        zh: "响应标准的精神",
      },
      body: {
        en: "Acknowledge receipt, ask precise clarifying questions, avoid silence without status.",
        zh: "确认收到、提出精确澄清问题、避免无状态的沉默。",
      },
    },
    {
      icon: "file",
      title: {
        en: "Complaint pathway clarity",
        zh: "投诉路径清楚",
      },
      body: {
        en: "Know where to file, what to include, and how follow-up works on official channels.",
        zh: "知道去哪提交、要附什么，以及官方通道如何跟进。",
      },
    },
    {
      icon: "scale",
      title: {
        en: "Fairness over favouritism",
        zh: "公平优于偏袒",
      },
      body: {
        en: "Published offer and policy rules beat private side deals.",
        zh: "公开的优惠与政策规则高于私下交易。",
      },
    },
    {
      icon: "users",
      title: {
        en: "Respectful tone under stress",
        zh: "压力下的尊重语气",
      },
      body: {
        en: "Heated cases still deserve calm language — from agents and players.",
        zh: "升温个案仍值得冷静措辞——客服与玩家皆然。",
      },
    },
    {
      icon: "shield",
      title: {
        en: "Security-safe case handling",
        zh: "安全的个案处理",
      },
      body: {
        en: "Identifiers yes; passwords, PINs, and remote control never.",
        zh: "识别信息可以；密码、PIN 与远程控制从不。",
      },
    },
    {
      icon: "check",
      title: {
        en: "Documented escalation steps",
        zh: "成文升级步骤",
      },
      body: {
        en: "Stuck reviews can move to senior attention with a clean evidence pack.",
        zh: "停滞审阅可带着干净证据包进入更高阶关注。",
      },
    },
  ],
  sections: [
    {
      title: {
        en: "Response standards players should recognise",
        zh: "玩家应认得的响应标准",
      },
      body: {
        en: `A healthy response pattern has stages. First, acknowledgement: you are heard and a case reference exists. Second, clarification: agents ask for the missing facts that change outcomes — times, amounts, game IDs, error text — not for passwords. Third, investigation against product logs and published rules. Fourth, an answer: resolved, pending with a reason, or escalated.

Silence without status erodes trust. Even when investigation takes time, players deserve periodic updates on official threads. Duplicate tickets across random numbers slow everyone; keep one clean thread from [[/contact|Support Center]].

Bilingual Malaysia service means English and Chinese agents should describe the same cashier states. Vocabulary drift creates false disputes. Training and editorial alignment with product teams reduce that drift — see [[/about|About TPOWER]].

Players help response quality by preparing. The Support Center lists what to bring. Sharp inputs produce sharper outputs.

Response standards include closing the loop. If an investigation finds the player was correct, say so and fix it. If the published rule blocks the request, say which rule. Ambiguous half-answers create repeat contacts and distrust.

Good faith from players includes not opening five parallel chats with conflicting stories. One truthful thread is faster than a fog of fragments.

Draft three sentences before chat: expected outcome, what happened, evidence. Then list timestamps. Then open Support Center. Player-side discipline accelerates desk-side commitment.

Three-sentence case drafts before chat accelerate acknowledgement and investigation.

Whenever a case heats up, stay on one official thread with rule-linked evidence rather than opening five angry mirrors.
`,
        zh: `健康的响应模式分阶段。第一，确认：你被听到，并有个案参考。第二，澄清：客服索取会改变结果的缺失事实——时间、金额、游戏编号、错误文本——而不是密码。第三，对照产品日志与公开规则调查。第四，给出答案：已解决、待处理并说明原因，或已升级。

无状态的沉默侵蚀信任。即使调查需要时间，玩家也应在官方线程获得阶段性更新。在随机号码上重复开单会拖慢所有人；请从 [[/contact|客服中心]] 保持一条干净线程。

马来西亚双语服务意味着中英客服应描述同一套收银台状态。词汇漂移会制造假争议。培训及与产品团队的编辑对齐可减少漂移——见 [[/about|关于TPOWER]]。

玩家可通过准备提升响应质量。客服中心列出应携带的信息。输入越利落，输出越利落。

响应标准包括闭环。若调查证明玩家正确，就承认并修复；若公开规则挡住请求，就说明是哪条。含糊的半答案只会制造重复联系与不信任。

玩家的善意包括不要开五条互相矛盾的平行聊天。一条真实线程，快过一团碎片迷雾。

开聊天前起草三句话：预期结果、发生了什么、证据。然后列时间戳。再打开客服中心。玩家侧纪律能加速台席侧承诺。

开聊天前的三句话个案草稿，能加速确认与调查。

每当个案升温，留在一条带规则证据的官方线程，而不是开五条愤怒镜像。
`,
      },
      imageSrc: "/images/hero.webp",
      imageAlt: {
        en: "TPOWER response standards",
        zh: "TPOWER 响应标准",
      },
      reverse: false,
    },
    {
      title: {
        en: "Complaint pathway: from issue to record",
        zh: "投诉路径：从问题到记录",
      },
      body: {
        en: `Complaints deserve structure. State the outcome you expected, what happened instead, and the evidence. “Unfair” without a rule reference is harder to adjudicate than “promotion X condition Y was met / not met according to this screenshot of the offer page.”

File through official Support Center channels so the complaint becomes a record — not a disappearing chat on an unofficial alias. If your complaint involves responsible-play urgency, say so early; those requests follow dignity standards on [[/responsible-gaming|Responsible Gaming]].

Payment disputes should include rail references from [[/payment-methods|payment methods]] context and timestamps. Fair-gaming mechanic disputes should include game IDs as described on [[/fair-gaming|Fair Gaming]].

We cannot promise every complaint ends with the player’s preferred outcome. We can commit to a pathway that hears, tests against published rules, and explains the result.

Complaint records protect players when staff handovers happen. A case that lives only in an unofficial WhatsApp disappears when a number changes. Official Support Center threads are how accountability survives shift changes.

Complaint pathways should be used for real disputes, not as a negotiation tactic to unlock ineligible bonuses. Misuse slows everyone, including players with genuine harm cases.

Use complaint pathways for real disputes, not as bonus negotiation theatre. Misuse slows genuine harm cases and weakens fairness for everyone.

Complaint pathways are for real disputes, not bonus negotiation theatre.
`,
        zh: `投诉需要结构。说明你预期的结果、实际发生了什么，以及证据。「不公平」却没有规则参照，比「优惠 X 的条件 Y 已满足/未满足——见优惠页截图」更难裁决。

请通过官方客服中心提交，让投诉成为记录——而不是非官方马甲上消失的聊天。若涉及负责任娱乐紧迫性，请尽早说明；此类请求遵循 [[/responsible-gaming|负责任博彩]] 的尊严标准。

支付争议应包含 [[/payment-methods|支付方式]] 语境下的通道参考与时间戳。公平游戏机制争议应按 [[/fair-gaming|公平游戏]] 说明附上游戏编号。

我们不能承诺每件投诉都以玩家偏好的结果结束。我们能承诺的是一条被倾听、对照公开规则检验、并解释结果的路径。

投诉记录在人员交接时保护玩家。只活在非官方 WhatsApp 的个案会随号码变更消失。官方客服中心线程让问责在换班后仍在。

投诉路径应用于真正争议，而不是当作解锁不合格优惠的谈判战术。滥用会拖慢所有人，包括有真实伤害的个案。

把投诉路径用于真正争议，而不是优惠谈判剧场。滥用会拖慢真实伤害个案，并削弱所有人的公平。

投诉路径用于真正争议，而不是优惠谈判剧场。
`,
      },
      imageSrc: "/images/cta/tpower-lobby-cta.webp",
      imageAlt: {
        en: "Complaint pathway on TPOWER",
        zh: "TPOWER 投诉路径",
      },
      reverse: true,
    },
    {
      title: {
        en: "Fairness: consistent rules beat loudest voice",
        zh: "公平：一贯规则胜过最大嗓门",
      },
      body: {
        en: `Fairness in customer care is consistency. Two players in the same factual situation should not receive opposite answers because one threatened social posts. Published promotion conditions, verification requirements, and responsible-play blocks apply even when inconvenient.

Favouritism also harms the favoured player when unofficial exceptions become unverifiable folklore — then collapse under audit. TPOWER prefers boring consistency: what [[/promotions|Promotions]] says, what cashiers show, what agents repeat.

Fairness includes saying no clearly. If a request violates policy or security (password reset via remote desktop, withdrawal to a third party against matching rules), agents should refuse and explain. Clarity is kinder than false hope.

Editorial and newsroom claims must not invent service guarantees the desk cannot keep — see [[/editorial-policy|Editorial Policy]]. Commitment pages and marketing must stay aligned.

Fairness sometimes means disappointing news delivered early. False hope about mismatched withdrawals or ineligible bonuses wastes everyone’s time. Clear no’s with rule citations are part of respect.

Fairness includes agent safety. Abuse does not unlock exceptions. Calm persistence with evidence does more than threats.

Accept that fairness includes clear refusals. False hope about mismatched withdrawals wastes days. Rule-cited no’s are respectful even when disappointing.

Fairness is consistency under observation. Two similar cases should not diverge because one player threatened a social post or shouted louder in chat. Published rules, offer pages, and product states are the observers that matter. Loudness is not an evidence type; references are. Bring timestamps, transaction IDs, and cropped screenshots. Ask which rule was applied before you escalate. Accept reasoned outcomes even when disappointing, or escalate with a one-page timeline on the same official thread — never with password theatre, remote-control apps, or unofficial channel hopping.

Clear rule-cited refusals are respectful even when the answer is no.
`,
        zh: `客服公平的核心是一致性。事实相同的两名玩家，不应因其中一人威胁发社交贴而得到相反答案。公开的优惠条件、核验要求与负责任阻断，即使不便也适用。

偏袒也会伤害被偏袒者：非官方例外变成无法核实的传说，一旦审计就崩塌。TPOWER线上博彩 更喜欢无聊的一致：[[/promotions|优惠专区]] 怎么写、收银台怎么显示、客服怎么复述。

公平也包括清楚说不。若请求违反政策或安全（远程桌面改密、违反匹配规则提现到第三方），客服应拒绝并解释。清楚比虚假希望更厚道。

编辑与新闻表述不得发明台席无法兑现的服务保证——见 [[/editorial-policy|编辑政策]]。承诺页与营销必须对齐。

公平有时意味着尽早传达令人失望的消息。对不匹配提现或不合格优惠给虚假希望，浪费所有人时间。带着规则引用的清楚拒绝，也是尊重。

公平也包括客服安全。辱骂不会解锁例外。带着证据的冷静坚持，比威胁更有效。

接受公平也包括清楚拒绝。对不匹配提现给虚假希望会浪费数天。带规则引用的「不」，即使令人失望也是尊重。

公平是可观察下的一致性。两个相似个案不应因一名玩家威胁发社交贴或在聊天里嗓门更大而分叉。公开规则、优惠页与产品状态才是重要的观察者。音量不是证据类型；参考号才是。带上时间戳、交易编号与裁切截图。升级前先问适用了哪条规则。即使失望也接受有理由的结果，或在同一官方线程用一页纸时间线升级——绝不靠密码表演、远程控制 APP 或跳非官方通道。

带规则引用的清楚拒绝，即使答案是「不」也是尊重。
`,
      },
      imageSrc: "/images/cta/tpower-join-cta.webp",
      imageAlt: {
        en: "Fair customer care standards",
        zh: "公平客服标准",
      },
      reverse: false,
    },
    {
      title: {
        en: "Escalation without password theatre",
        zh: "不做密码表演的升级",
      },
      body: {
        en: `Escalate when a case is stuck: missing investigator notes, contradictory answers, or time-sensitive harm (for example responsible-play locks). Ask for senior review on the same official thread. Provide a one-page timeline: events, references, prior agent answers.

Do not escalate by sending passwords “to prove ownership,” installing screen-control apps, or moving the case to a stranger’s WhatsApp. Those moves destroy security and often the case trail.

Support Center and Security pages explain safe identifiers. Privacy rights requests follow [[/privacy-and-data-protection|Privacy & Data Protection]]. Verification document questions follow AML/KYC education.

After escalation, expect a reasoned outcome. If you still disagree, you may ask what rule was applied. Understanding the rule is part of fairness — even when the answer is not the one you hoped for.

Escalation packs should be short. A one-page timeline with references beats a hundred angry messages. Senior reviewers need signal, not volume. Password theatre is never part of that signal.

After escalation, accept reasoned outcomes even when disappointed, or ask which rule applied. Understanding the rule is how you avoid repeating the same dispute next month.

Escalate with a one-page timeline, not a hundred angry fragments. Senior reviewers need signal. Password theatre is never signal.

Operational customer-first behaviour is auditable. Acknowledgement exists. Clarifying questions are specific and password-free. Answers cite published rules or product states. Escalations use clean timelines on official threads. Responsible-play requests receive dignity. Secret collection is refused. If any channel fails those audits, it is not representing this commitment — return to Support Center and restart. Players help the audit succeed by bringing linear evidence and by not turning abuse or social pressure into a substitute process.

One-page escalation timelines beat a hundred angry fragments without references.
`,
        zh: `当个案卡住时升级：缺少调查笔记、答案互相矛盾，或存在时间敏感伤害（例如负责任锁定）。在同一官方线程请求更高阶审阅。提供一页纸时间线：事件、参考号、先前客服答复。

不要靠发送密码「证明所有权」、安装屏幕控制 APP，或把个案挪到陌生人的 WhatsApp 来升级。那些动作破坏安全，也常破坏个案轨迹。

客服中心与安全页说明安全的识别方式。隐私权利请求走 [[/privacy-and-data-protection|隐私与数据保护]]。核验文件问题走 AML/KYC 教育。

升级后，预期得到有理由的结果。若仍不同意，可以询问适用了哪条规则。理解规则是公平的一部分——即使答案不是你希望的那个。

升级材料包应短。一页纸时间线加参考号，胜过一百条愤怒消息。更高阶审阅需要信号，不需要音量。密码表演永远不是信号的一部分。

升级后，即使失望也接受有理由的结果，或询问适用了哪条规则。理解规则，才能避免下个月重复同一争议。

用一页纸时间线升级，而不是一百条愤怒碎片。更高阶审阅需要信号。密码表演永远不是信号。

可运营的客户优先行为可被审计。有确认。澄清问题具体且不索要密码。答复引用公开规则或产品状态。升级使用官方线程上的干净时间线。负责任请求获得尊严。机密收集被拒绝。若任何通道未通过这些审计，它就不代表本承诺——回到客服中心重新开始。玩家用线性证据、不把辱骂或社交压力当替代流程，帮助审计成功。

一页纸升级时间线，胜过一百条没有参考号的愤怒碎片。
`,
      },
      imageSrc: "/images/news/tpower-platform-performance-update.webp",
      imageAlt: {
        en: "Safe escalation on TPOWER support",
        zh: "TPOWER 客服安全升级",
      },
      reverse: true,
    },
  ],
  timelineTitle: {
    en: "From first message to fair outcome",
    zh: "从第一条消息到公平结果",
  },
  timeline: [
    {
      title: {
        en: "Open an official case with prep",
        zh: "带准备材料开官方个案",
      },
      body: {
        en: "Use Support Center; include identifiers and a clear ask.",
        zh: "走客服中心；附识别信息与清楚诉求。",
      },
    },
    {
      title: {
        en: "Answer clarifying questions once",
        zh: "一次性回答澄清问题",
      },
      body: {
        en: "Keep one thread; avoid scattering facts across mirrors.",
        zh: "保持一条线程；避免把事实散落到镜像通道。",
      },
    },
    {
      title: {
        en: "Receive a reasoned status",
        zh: "接收有理由的状态",
      },
      body: {
        en: "Resolved, pending with cause, or escalated with next owner.",
        zh: "已解决、待处理并说明原因，或已升级并明确下一责任人。",
      },
    },
    {
      title: {
        en: "Escalate with a clean evidence pack if stuck",
        zh: "卡住时用干净证据包升级",
      },
      body: {
        en: "Timeline + references + prior answers — never passwords.",
        zh: "时间线 + 参考号 + 先前答复——不要密码。",
      },
    },
  ],
  trustTitle: {
    en: "Commitments you can hold us to",
    zh: "你可以据此要求我们的承诺",
  },
  trustItems: [
    {
      title: {
        en: "Official-channel priority",
        zh: "官方通道优先",
      },
      body: {
        en: "Real commitments run through Support Center records.",
        zh: "真正的承诺跑在客服中心记录上。",
      },
    },
    {
      title: {
        en: "No secret-based verification",
        zh: "不以机密做核验",
      },
      body: {
        en: "Ownership proofs never require your password in chat.",
        zh: "所有权证明从不要求在聊天中提供密码。",
      },
    },
    {
      title: {
        en: "Rule-referenced decisions",
        zh: "有规则参照的决定",
      },
      body: {
        en: "Answers should cite offer pages, policies, or product states.",
        zh: "答复应引用优惠页、政策或产品状态。",
      },
    },
    {
      title: {
        en: "Dignity for responsible-play requests",
        zh: "负责任请求保持尊严",
      },
      body: {
        en: "Timeouts and exclusions are handled without humiliation scripts.",
        zh: "冷静期与排除的处理不带羞辱话术。",
      },
    },
    {
      title: {
        en: "Escalation is available",
        zh: "升级可用",
      },
      body: {
        en: "Stuck cases can request senior review with evidence.",
        zh: "卡住的个案可带证据请求更高阶审阅。",
      },
    },
    {
      title: {
        en: "Bilingual consistency goal",
        zh: "双语一致目标",
      },
      body: {
        en: "English and Chinese explanations should match product vocabulary.",
        zh: "中英解释应匹配同一套产品词汇。",
      },
    },
  ],
  faqTitle: {
    en: "Customer Commitment FAQ",
    zh: "客户承诺常见问题",
  },
  faqs: [
    {
      question: {
        en: "Where do I start a support request?",
        zh: "支持请求应从哪里开始？",
      },
      answer: {
        en: "Open the Support Center for live channels, forms, and preparation guidance. Keep the conversation on official paths only. Save the case reference and keep communicating there so handovers do not erase context.",
        zh: "打开客服中心查看即时通道、表单与准备指引。对话只保留在官方路径。保存个案参考号并在该处继续沟通，避免交接抹掉语境。",
      },
    },
    {
      question: {
        en: "What does a good complaint include?",
        zh: "好的投诉应包含什么？",
      },
      answer: {
        en: "Expected outcome, what happened, timestamps/references, and evidence tied to published rules or offer pages — not passwords. Rule-linked evidence is more persuasive than volume or social outrage alone.",
        zh: "预期结果、实际发生、时间戳/参考号，以及绑定公开规则或优惠页的证据——不要密码。绑定规则的证据，比音量或单纯社交愤怒更有说服力。",
      },
    },
    {
      question: {
        en: "Can shouting on social media replace the complaint path?",
        zh: "在社交媒体上吵闹能否替代投诉路径？",
      },
      answer: {
        en: "No. Fairness depends on recorded cases tested against published rules. Social pressure is not a substitute process. Official records outlast social posts when staff change shifts.",
        zh: "不能。公平依赖对照公开规则检验的留痕个案。社交压力不能替代流程。人员换班时，官方记录比社交帖更持久。",
      },
    },
    {
      question: {
        en: "How do you define fairness here?",
        zh: "这里的公平如何定义？",
      },
      answer: {
        en: "Consistent application of published promotions, verification, and policy rules — not private exceptions for the loudest voice. Consistency is the fairness metric we optimise for across similar fact patterns.",
        zh: "一贯适用公开的优惠、核验与政策规则——而不是给嗓门最大的人私了例外。一致性是我们在相似事实模式下优化的公平指标。",
      },
    },
    {
      question: {
        en: "When should I escalate?",
        zh: "何时应该升级？",
      },
      answer: {
        en: "When a case is stuck, answers contradict, or harm is time-sensitive. Ask for senior review on the same official thread with a clean timeline. A clean timeline is the escalation currency that works.",
        zh: "当个案卡住、答案矛盾，或伤害具有时间敏感性时。在同一官方线程用干净时间线请求更高阶审阅。干净时间线才是有效的升级货币。",
      },
    },
    {
      question: {
        en: "Will escalation ever need my password?",
        zh: "升级会不会需要密码？",
      },
      answer: {
        en: "Never. Password or remote-control demands mean you have left legitimate support standards. Treat password demands as proof the path is wrong and return to Support Center yourself.",
        zh: "永远不会。索要密码或远程控制意味着你已离开正当客服标准。把索要密码当作路径错误的证明，并自己回到客服中心。",
      },
    },
    {
      question: {
        en: "How are responsible-gaming requests handled?",
        zh: "负责任博彩请求如何处理？",
      },
      answer: {
        en: "With priority dignity: help apply limits, timeouts, or exclusion without humiliation, per Responsible Gaming and this commitment. Dignity standards apply even when emotions run high on either side.",
        zh: "以尊严为优先：按负责任博彩与本承诺，协助启用限额、冷静期或排除，不做羞辱。即使双方情绪升高，尊严标准仍适用。",
      },
    },
    {
      question: {
        en: "What if I disagree with the final answer?",
        zh: "若我不同意最终答复怎么办？",
      },
      answer: {
        en: "Ask which published rule was applied. Understanding the rule is part of the fairness commitment even when the outcome is unchanged. Rule clarity is still a win when the outcome stays the same.",
        zh: "询问适用了哪条公开规则。即使结果不变，理解规则也是公平承诺的一部分。结果不变时，规则清楚仍是一种收获。",
      },
    },
  ],
  relatedTitle: {
    en: "Service pages connected to this commitment",
    zh: "与本承诺相连的服务页面",
  },
  relatedLinks: withCoreRelated([
    {
      href: "/contact",
      label: { en: "Support Center", zh: "客服中心" },
    },
    {
      href: "/responsible-gaming",
      label: { en: "Responsible Gaming", zh: "负责任博彩" },
    },
    {
      href: "/security",
      label: { en: "Platform Security", zh: "平台安全" },
    },
    {
      href: "/aml-kyc",
      label: { en: "AML & KYC", zh: "AML与KYC" },
    },
    {
      href: "/why-choose-tpower",
      label: { en: "Why Choose TPOWER", zh: "为什么选择TPOWER" },
    },
  ]),
  ctaTitle: {
    en: "Use the official desk with a clear case",
    zh: "带着清楚个案走官方台席",
  },
  ctaDescription: {
    en: "Open Support Center prepared, or review Responsible Gaming and Security before you message.",
    zh: "准备好后打开客服中心，或在留言前先阅读负责任博彩与平台安全。",
  },
  ctaImage: "/images/cta/tpower-join-cta.webp",
};
