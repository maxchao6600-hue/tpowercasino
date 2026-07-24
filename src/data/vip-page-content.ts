import type { LocalizedString } from "@/types";

export type VipIconKey =
  | "crown"
  | "zap"
  | "gift"
  | "percent"
  | "wallet"
  | "cake"
  | "calendar"
  | "headphones"
  | "sparkles"
  | "shield"
  | "users"
  | "trophy"
  | "ticket"
  | "party"
  | "lock"
  | "smartphone"
  | "star"
  | "message"
  | "gem"
  | "rocket"
  | "target";

export type VipTextBlock = {
  id: string;
  icon: VipIconKey;
  title: LocalizedString;
  body: LocalizedString;
};

export type VipTrustItem = {
  icon: VipIconKey;
  label: LocalizedString;
};

export type VipStep = {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type VipTestimonial = {
  id: string;
  name: string;
  role: LocalizedString;
  quote: LocalizedString;
};

export type VipRelatedGuide = {
  href: string;
  title: LocalizedString;
  description: LocalizedString;
};

export const vipTrustItems: VipTrustItem[] = [
  { icon: "zap", label: { en: "Fast Withdrawals", zh: "快速提现" } },
  { icon: "gift", label: { en: "Daily Cashback", zh: "每日返水" } },
  { icon: "shield", label: { en: "Secure Platform", zh: "安全平台" } },
  {
    icon: "trophy",
    label: { en: "13+ Official Providers", zh: "13+ 官方游戏商" },
  },
  {
    icon: "smartphone",
    label: { en: "Android & iOS Supported", zh: "支持 Android 与 iOS" },
  },
  {
    icon: "star",
    label: { en: "Trusted by Malaysia Players", zh: "马来西亚玩家信赖" },
  },
  { icon: "message", label: { en: "24/7 Live Support", zh: "全天在线客服" } },
  {
    icon: "gem",
    label: { en: "Exclusive VIP Rewards", zh: "专属 VIP 奖励" },
  },
  { icon: "rocket", label: { en: "Instant Deposit", zh: "即时存款" } },
  { icon: "target", label: { en: "High RTP Games", zh: "高 RTP 游戏" } },
];

export const vipWhyJoin: VipTextBlock[] = [
  {
    id: "manager",
    icon: "crown",
    title: {
      en: "Dedicated VIP Manager",
      zh: "专属 VIP 管家",
    },
    body: {
      en: `A TPOWER VIP relationship is built around human continuity, not ticket roulette. Higher tiers unlock a dedicated VIP manager who understands your preferred games, payment habits, and communication style. Instead of repeating your history to a new agent every session, you speak with someone who already knows your verification status, recent withdrawals, and reward calendar. That continuity shortens disputes, clarifies promotion terms before you opt in, and keeps discreet requests private. For Malaysia players comparing Online Casino VIP programmes, personal hosting is often the difference between a logo and a service. Managers coordinate birthday gifts, private campaigns, and priority reviews while respecting responsible-gaming limits you set yourself. The goal is calm, precise assistance — never pressure to chase tiers at the expense of your entertainment budget.`,
      zh: `TPOWER VIP 强调真人连续服务，不是工单轮盘。更高的等级会对接专属 VIP 管家，对方了解你常玩的游戏、支付习惯与沟通偏好。你不必每次重讲账户历史：验证状态、近期提现与奖励日历，管家都已掌握。这样能缩短争议、在领取优惠前先把条款说清楚，也让私人需求保持低调。对比较马来西亚线上博彩 VIP 的玩家来说，管家往往是“有 Logo”和“有服务”的分界。管家会协调生日礼、私密活动与优先审核，同时尊重你自己设定的负责任限额。目标是冷静、准确的协助——绝不催你为冲等级透支娱乐预算。`,
    },
  },
  {
    id: "withdrawals",
    icon: "zap",
    title: {
      en: "Priority Withdrawals",
      zh: "优先提现",
    },
    body: {
      en: `Withdrawal speed is one of the most searched concerns around VIP Casino Malaysia experiences. TPOWER VIP does not invent mythical instant banks; it prioritises review once KYC and payout ownership already match. Silver enters a VIP queue, Gold elevates that lane, and Platinum receives the highest operational attention for eligible requests. You still choose a supported bank or e-wallet rail, and banking windows still apply — but your ticket is not buried under standard volume. Clear beneficiary names, consistent deposit sources, and completed verification remain the real accelerators. Priority withdrawals reward organised accounts, not shortcuts. Read the cashier guide, keep documents ready, and use official channels only. When Malaysia VIP Rewards are paired with clean payout hygiene, cashouts feel predictable rather than theatrical.`,
      zh: `提现速度是马来西亚玩家搜 VIP 时最常关心的点之一。TPOWER VIP 不会编造“秒到神话”，而是在 KYC 与出款归属已核对后，优先处理审核。白银进入 VIP 队列，黄金提升优先级，铂金在合资格申请中获得最高运营关注。你仍要选择支持的银行或电子钱包，银行窗口依然存在——但你的单不会被普通量压住。出款姓名清楚、充值来源一致、验证完整，才是真正加速器。优先提现奖励的是资料整齐的账户，不是捷径。请阅读收银说明、备好文件，并只走官方通道。当马来西亚 VIP 奖励搭配干净的出款习惯，提现会变得可预期，而不是表演式口号。`,
    },
  },
  {
    id: "promotions",
    icon: "gift",
    title: {
      en: "Exclusive Promotions",
      zh: "专属优惠",
    },
    body: {
      en: `Ordinary members see the public promotions hub. VIP members unlock a quieter calendar: birthday packs, monthly reloads, weekly cashback boosts, referral rewards, VIP tournaments, lucky draws, seasonal gifts, and private campaigns structured around your tier. Exclusive does not mean opaque. Each offer still shows wagering, contribution, and expiry so you can decide with a clear head. The TPOWER VIP Club treats Malaysia VIP Rewards as a service layer — not a flashing banner wall. Hosts may tailor Platinum offers when activity and account standing justify it, while Gold receives an expanded VIP calendar and Silver retains VIP-tagged access without overwhelm. Always open the detail page before opting in, and cross-check sports or live-casino contribution if your mix is diverse. Premium promotions should fit your play style, not rewrite it.`,
      zh: `普通会员看到的是公开优惠专区；VIP 则多一层更安静的日历：生日礼包、每月充值礼、每周返水加码、推荐奖励、VIP 赛事、幸运抽奖、季节礼遇，以及按等级安排的私密活动。“专属”不等于含糊。每项优惠仍会写明流水、贡献与到期，方便你冷静决定。TPOWER VIP 俱乐部把马来西亚 VIP 奖励当成服务层，而不是满屏闪灯。铂金在活跃与账户状态达标时，可由管家定制方案；黄金享有更丰富 VIP 日历；白银保留 VIP 标签准入，却不至于信息过载。领取前务必打开详情，若你玩法多样，也要核对体育或真人视讯贡献。高端优惠应贴合你的节奏，而不是改写你的节奏。`,
    },
  },
  {
    id: "cashback",
    icon: "percent",
    title: {
      en: "Higher Cashback",
      zh: "更高返水",
    },
    body: {
      en: `Cashback is the quiet backbone of many Online Casino VIP programmes. At TPOWER, higher tiers unlock stronger cashback rates on eligible activity within published settlement windows. The calculation is transparent: eligible net results or eligible wagering multiply by your tier percentage, with game-type contribution rules applied. Slots, live casino, fishing, crash, and sports may contribute differently — which is why serious players read the contribution table instead of assuming a flat return. Higher cashback is not a licence to ignore bankroll discipline. Pair VIP rates with personal deposit limits and cool-off tools on the Responsible Gaming page. When cashback credits arrive, check expiry and any attached wagering before converting them into impulsive sessions. Sustainable VIP value compounds from clarity, not from chasing yesterday’s loss.`,
      zh: `返水是许多线上博彩 VIP 计划的安静核心。在 TPOWER，更高等级可在公布结算周期内，对合资格活跃享有更强返水比例。算法透明：合资格净结果或合资格流水，乘以等级比例，并套用游戏贡献规则。老虎机、真人、捕鱼、爆点与体育贡献可能不同——认真的玩家会先看贡献表，而不是假设统一返还。更高返水不是无视资金纪律的许可证。请把 VIP 比例与负责任博彩页的个人存款限额、冷静工具一起用。返水到账后，先看有效期与是否附带流水，再决定是否开玩。可持续的 VIP 价值来自清楚，而不是追回昨天的波动。`,
    },
  },
];

export const vipCompleteBenefits: VipTextBlock[] = [
  {
    id: "priority-withdrawals",
    icon: "zap",
    title: { en: "Priority Withdrawals", zh: "优先提现" },
    body: {
      en: `Priority withdrawals sit at the centre of the TPOWER VIP promise. Once your identity checks and beneficiary details are clean, eligible cashout requests enter a VIP review lane that moves ahead of standard volume. Silver receives VIP queue placement, Gold elevates that priority, and Platinum receives the highest attention for qualifying tickets. Banking partners and e-wallet rails still dictate final settlement windows, so “fast” means organised review — not magic. Keep deposit sources consistent, avoid mismatched names, and submit requests through official cashier flows. If a payout needs clarification, VIP chat can surface the exact missing document instead of generic replies. Over time, players who treat withdrawals as an operations process — not a gamble — experience the calmest Malaysia VIP Rewards outcomes.`,
      zh: `优先提现是 TPOWER VIP 承诺的核心之一。身份核验与收款人资料齐全后，合资格出款会进入优于普通量的 VIP 审核通道。白银进入 VIP 队列，黄金提升优先级，铂金对合资格单据获得最高关注。银行与电子钱包仍决定最终结算窗口，所以“快”指的是有条理的审核，不是魔术。请保持充值来源一致、避免姓名不符，并通过官方收银流程提交。若出款需要补充说明，VIP 客服可直接指出缺件，而不是给空泛回复。长期来看，把提现当运营流程、而不是碰运气的玩家，往往最能感受到马来西亚 VIP 奖励的稳。`,
    },
  },
  {
    id: "birthday",
    icon: "cake",
    title: { en: "Birthday Rewards", zh: "生日奖励" },
    body: {
      en: `Birthday rewards turn a calendar date into a tangible VIP moment. Silver members receive acknowledgement and a token gift once date of birth is verified. Gold unlocks a stronger birthday bonus pack aligned with current VIP terms. Platinum players may receive host-arranged gifts timed around personal preferences and responsible limits. Verification in advance matters: last-minute profile edits can delay fulfilment. Birthday rewards usually carry expiry and may include wagering — read the voucher before celebrating with a long session. TPOWER positions birthday value as appreciation, not a reason to override your own deposit caps. Combine the gift with a planned entertainment budget so the day stays enjoyable. For keyword-aware readers researching VIP Casino Malaysia perks, birthday structuring is a clear EEAT signal that the programme remembers people, not only turnover.`,
      zh: `生日奖励把日历日期变成可感知的 VIP 时刻。白银在生日资料核验后可获问候与心意礼；黄金解锁更强的生日礼包；铂金可由管家按偏好与负责任限额安排礼遇。提前提交验证很重要：临时改资料可能延误发放。生日礼通常有有效期，也可能附带流水——开玩前先读券面。TPOWER 把生日价值定位为答谢，而不是让你突破自己的存款上限。把礼物纳入既定娱乐预算，这一天才真正愉快。对研究马来西亚 VIP 赌场礼遇的读者来说，生日结构也是 EEAT 信号：计划记得人，而不只记得流水。`,
    },
  },
  {
    id: "monthly",
    icon: "calendar",
    title: { en: "Monthly Bonus", zh: "每月红利" },
    body: {
      en: `Monthly bonuses give VIP members a predictable rhythm of appreciation across the TPOWER VIP Club calendar. Silver typically receives an appreciation bonus or reload boost. Gold adds stronger reload and cashback-calendar enhancements. Platinum monthly value may be curated by a host when activity and standing justify bespoke structuring. Predictability helps Malaysia players plan entertainment months without chasing every flash promotion. Each monthly bonus still publishes contribution rules, expiry, and game eligibility — treat those lines as part of the product, not fine print to ignore. If your mix leans live casino or sports, confirm contribution before expecting a particular return. Monthly rewards work best when paired with a written budget and a habit of claiming early rather than on the final hour. Consistency beats urgency theatre.`,
      zh: `每月红利让 VIP 在 TPOWER VIP 俱乐部日历里有可预期的答谢节奏。白银多为答谢礼或充值加码；黄金叠加更强充值与返水日历提升；铂金在活跃与状态达标时，可由管家做定制安排。可预期性帮助马来西亚玩家规划整月娱乐，而不必追每一档闪促。每月红利仍会公布贡献、到期与合资格游戏——请把这些当成产品的一部分，而不是可忽略的小字。若你偏真人视讯或体育，先确认贡献再期待回报。每月奖励最好搭配书面预算，并养成提早领取的习惯，而不是卡在最后一小时。稳定优于催促表演。`,
    },
  },
  {
    id: "weekly-cashback",
    icon: "percent",
    title: { en: "Weekly Cashback", zh: "每周返水" },
    body: {
      en: `Weekly cashback compresses settlement into a tighter loop so VIP members see clearer feedback on eligible play. Higher tiers unlock stronger percentages, but the mathematics remain grounded in published windows and contribution tables. Track which games counted, which were reduced, and whether any bonus wallets interacted with the cashback calculation. TPOWER documents these rules so Online Casino VIP research can stay factual rather than rumour-driven. Claim credits promptly, note expiry, and avoid treating cashback as “house money” that excuses oversized bets. Responsible Gaming tools remain available regardless of tier. Weekly cycles also help you spot when a game mix is inefficient for progression — for example, heavy time on excluded titles. Adjust with intention. Cashback should illuminate habits, not obscure them.`,
      zh: `每周返水把结算压成更短循环，让 VIP 更清楚看到合资格娱乐的反馈。更高等级比例更高，但算法仍基于公布周期与贡献表。请核对哪些游戏计入、哪些降低，以及优惠钱包是否影响返水计算。TPOWER 把规则写清楚，方便线上博彩 VIP 研究走事实，而不是传闻。请及时领取、留意有效期，也别把返水当成可以无限加注的“平台的钱”。不论等级，负责任博彩工具始终可用。周结算也能帮你发现冲等级效率低的玩法——例如大量时间花在不计入的游戏上。有意识地调整。返水应照亮习惯，而不是遮住习惯。`,
    },
  },
  {
    id: "personal-manager",
    icon: "crown",
    title: { en: "Personal VIP Manager", zh: "私人 VIP 管家" },
    body: {
      en: `A personal VIP manager is the Platinum hallmark and a major differentiator for serious Malaysia VIP Rewards seekers. Your host consolidates promotion questions, withdrawal follow-ups, event invitations, and document reminders into one relationship. Communication may run through elevated chat, WhatsApp, or Telegram channels displayed inside official TPOWER surfaces after qualification. Managers do not replace compliance: they help you navigate it faster with accurate context. They can explain why a reward needs wagering, which tournament seats open first, or how to prepare a payout for priority review. Discretion matters — high-touch service should feel private, never performative. If you are still on Silver or Gold, dedicated channels and priority desks prepare you for host-level service as you progress. Earn the relationship through healthy standing, not shortcuts.`,
      zh: `私人 VIP 管家是铂金标志，也是认真寻找马来西亚 VIP 奖励者的重要差异点。管家把优惠疑问、提现跟进、活动邀请与文件提醒收敛到一段关系里。达标后，官方界面可能显示加强聊天、WhatsApp 或 Telegram 通道。管家不取代合规：他们用准确上下文帮你更快走完流程。他们能解释为何奖励需要流水、哪些赛事先开放名额，或如何准备出款以进入优先审核。低调很重要——高规格服务应私密，而不是表演。若你仍在白银或黄金，专属通道与优先服务台会为日后的管家级服务做准备。靠良好状态赢得关系，不靠捷径。`,
    },
  },
  {
    id: "exclusive-events",
    icon: "party",
    title: { en: "Exclusive Events", zh: "专属活动" },
    body: {
      en: `Exclusive events extend VIP beyond cashier mathematics into shared moments — invitation tournaments, seasonal gatherings notes, lucky-draw nights, and private campaign drops. Access scales with tier: Silver receives seasonal VIP notes and eligible event entry, Gold gains broader invitations and priority seating windows, and Platinum may see private experiences curated with a host. Events are optional. Declining an invitation never harms your standing. When you do join, read prize structures and eligibility the same way you read a bonus. TPOWER frames events as appreciation and community texture for the VIP Casino Program, not as scarcity theatre. Combine event play with personal limits so a fun night stays a fun night. Internal links to Promotions and News help you verify dates without relying on forwarded screenshots.`,
      zh: `专属活动把 VIP 从收银数字延伸到共同时刻——邀请制赛事、季节聚会提醒、抽奖夜与私密活动投放。准入随等级提升：白银有季节 VIP 提醒与合资格报名；黄金获得更广邀请与优先窗口；铂金可能由管家安排私人体验。活动可选。拒绝邀请不会影响等级。若参加，请像读优惠一样读奖金结构与资格。TPOWER 把活动定位为 VIP 计划的答谢与社群质感，而不是制造稀缺焦虑。把活动娱乐与个人限额一起用，开心的夜晚才保持开心。内链到优惠与资讯，方便你核日期，而不靠转发截图。`,
    },
  },
  {
    id: "dedicated-support",
    icon: "headphones",
    title: { en: "Dedicated Support", zh: "专属支持" },
    body: {
      en: `Dedicated support is the operational backbone behind every VIP promise. Priority live chat reduces wait times for Silver. Gold adds a dedicated VIP chat channel with agents trained on tier benefits. Platinum layers personal assistance on top of that infrastructure. Support quality shows in specifics: confirming cashback windows, citing withdrawal document lists, and directing you to Responsible Gaming tools without stigma. 24/7 coverage means Malaysia evening and weekend sessions still have a human path. Always enter chat from official lobby or app entry points. Spoofed “VIP managers” on social media are a common risk — TPOWER will never ask you to move funds to a personal account. Save official channel names after you unlock them, and treat support transcripts as records you can reference later.`,
      zh: `专属支持是所有 VIP 承诺背后的运营骨架。白银的优先在线客服缩短等待；黄金增加受过等级权益训练的专属 VIP 通道；铂金在此之上叠加专人协助。支持质量体现在细节：确认返水周期、列出提现文件、并自然引导你使用负责任博彩工具。全天覆盖意味着马来西亚晚间与周末仍有真人通路。请只从官方大厅或 APP 入口进入聊天。社交平台冒充“VIP 管家”是常见风险——TPOWER 绝不会要求你把资金转到私人账户。解锁官方通道后请保存名称，并把对话记录当作日后可查阅的凭证。`,
    },
  },
  {
    id: "private-promotions",
    icon: "lock",
    title: { en: "Private Promotions", zh: "私密优惠" },
    body: {
      en: `Private promotions are quieter offers shaped around tier, timing, and account health — the opposite of a public banner stampede. Platinum hosts may structure bespoke reloads or event packages. Gold players see expanded VIP-calendar drops not always mirrored on the public hub. Silver still receives VIP-tagged offers without the noise of every campaign. Private never means undocumented: wagering, contribution, max cashout, and expiry remain visible before you accept. That documentation is how TPOWER builds EEAT for competitive queries like TPOWER VIP and VIP Casino Program. If an offer arrives through chat, open the linked terms inside the product rather than trusting a screenshot. Private campaigns reward loyalty with clarity. Use them when they match your game mix; skip them when they do not.`,
      zh: `私密优惠是按等级、时机与账户健康安排的更安静方案——与公开 Banner 抢流量相反。铂金管家可能定制充值或活动包；黄金会看到未必同步到公开专区的 VIP 日历投放；白银仍有 VIP 标签优惠，却少了全站嘈杂。私密不等于无文档：流水、贡献、最高提款与到期在接受前都可见。正是这些文档，支撑 TPOWER VIP、VIP 计划等竞争查询的 EEAT。若优惠来自聊天，请在产品内打开链接条款，而不是只信截图。私密活动用清楚回报忠诚。匹配你的玩法再领；不匹配就跳过。`,
    },
  },
];

export const vipWithdrawalIntro: LocalizedString = {
  en: `Understanding how VIP withdrawals work removes the mythology around Online Casino VIP cashouts. The timeline below shows the operational path TPOWER uses after you request a payout. Priority review accelerates human checks for VIP tiers; it does not erase banking windows, ownership matching, or responsible-account reviews. Read each stage so you know what you control — and what still depends on rails outside the lobby.`,
  zh: `弄清 VIP 提现流程，才能去掉线上博彩 VIP 出款的神话色彩。下方时间线展示你在 TPOWER 申请提现后的运营路径。优先审核加快 VIP 等级的人工核对，但不会取消银行窗口、归属匹配或负责任账户复核。请逐段阅读，分清你能掌控的部分，以及仍取决于大厅之外通道的部分。`,
};

export const vipWithdrawalSteps: VipStep[] = [
  {
    id: "deposit",
    title: { en: "Deposit", zh: "充值" },
    body: {
      en: "Fund your account through supported Malaysia methods with a name that matches your verified profile. Consistent deposit ownership makes later withdrawals smoother.",
      zh: "用支持的马来西亚方式充值，姓名需与已验证资料一致。充值归属稳定，后续提现更顺。",
    },
  },
  {
    id: "play",
    title: { en: "Play", zh: "娱乐" },
    body: {
      en: "Enjoy eligible games within your budget. VIP priority does not require reckless volume — healthy, verified activity is enough to keep standing strong.",
      zh: "在预算内游玩合资格游戏。VIP 优先不要求失控冲量——健康、已验证的活跃足以维持状态。",
    },
  },
  {
    id: "apply",
    title: { en: "Apply Withdrawal", zh: "申请提现" },
    body: {
      en: "Submit a cashout in the official cashier. Double-check amount, destination wallet or bank, and any open bonus locks before confirming.",
      zh: "在官方收银提交出款。确认前核对这些：金额、收款钱包或银行，以及是否仍有优惠锁定。",
    },
  },
  {
    id: "review",
    title: { en: "VIP Review", zh: "VIP 审核" },
    body: {
      en: "Your request enters the VIP review lane according to tier. Agents confirm KYC status, beneficiary match, and policy checks with elevated priority.",
      zh: "申请按等级进入 VIP 审核通道。客服优先核对 KYC、收款人匹配与政策检查。",
    },
  },
  {
    id: "approval",
    title: { en: "Approval", zh: "批准" },
    body: {
      en: "When checks clear, the withdrawal is approved for payout. If something is missing, VIP support specifies the exact document or detail required.",
      zh: "核对通过后批准出款。若有缺件，VIP 支持会明确指出需要的文件或资料。",
    },
  },
  {
    id: "transfer",
    title: { en: "Bank Transfer", zh: "银行/钱包转账" },
    body: {
      en: "Funds move through your selected bank or e-wallet rail. Processing time follows that partner’s windows, including weekends and cut-offs.",
      zh: "资金经你选择的银行或电子钱包通道划转。处理时间跟随合作方窗口，含周末与截点。",
    },
  },
  {
    id: "completed",
    title: { en: "Completed", zh: "完成" },
    body: {
      en: "When the rail confirms settlement, the withdrawal is complete. Keep the reference ID for your records and contact VIP chat only via official entry points if follow-up is needed.",
      zh: "通道确认到账即完成。请保存参考编号；若需跟进，只通过官方入口联系 VIP 客服。",
    },
  },
];

export const vipWithdrawalClosing: LocalizedString = {
  en: `Across this path, the players who experience the fastest VIP Casino Malaysia withdrawals share habits: verified profiles, matching payout names, no multi-accounting, and requests filed during clear banking windows. Priority review is a queue advantage, not a bypass of compliance. If a promotion wallet still has unmet wagering, clear or cancel according to terms before expecting approval. Pair cashout planning with Responsible Gaming limits so entertainment stays intentional. For deeper payment context, explore the Payment Methods and Security guides after this VIP page — internal links strengthen both user clarity and SEO topical authority around TPOWER VIP.`,
  zh: `在这条路径上，体验最快马来西亚 VIP 提现的玩家通常有共同习惯：资料已验证、出款姓名一致、不多开账户，并在清楚的银行窗口内提交。优先审核是队列优势，不是绕过合规。若优惠钱包仍有未完成流水，请先按条款完成或取消，再期待批准。把出款计划与负责任博彩限额一起用，娱乐才保持有意识。若需更深支付背景，读完本 VIP 页后再看支付方式与安全指南——内链同时提升用户理解与 TPOWER VIP 的专题权威。`,
};

export const vipManagerIntro: LocalizedString = {
  en: `The VIP manager experience is where the TPOWER VIP Club stops feeling like a points ladder and starts feeling like a premium service. Hosts and elevated support desks exist to remove friction: clarifying terms, sequencing documents, announcing exclusive events, and keeping discreet preferences on file. Coverage aims for 24/7 responsiveness through live chat, with WhatsApp and Telegram channels displayed inside official product surfaces once you qualify for higher tiers. Priority queues mean less waiting during Malaysia peak evenings. Personal assistance means fewer repeated explanations. None of this replaces your judgement — managers amplify clarity so you can decide faster and safer.`,
  zh: `VIP 管家体验让 TPOWER VIP 俱乐部从“积分阶梯”变成高端服务。管家与加强服务台的存在是为了减少摩擦：澄清条款、梳理文件顺序、通知专属活动，并把低调偏好记录在案。目标是通过在线客服尽量做到全天响应；达标更高的等级后，官方产品界面会显示 WhatsApp 与 Telegram 通道。优先队列减少马来西亚晚间高峰的等待；专人协助减少反复解释。这些都不取代你的判断——管家放大的是清晰度，让你更快、更安全地做决定。`,
};

export const vipManagerBody: LocalizedString = {
  en: `Practically, a VIP manager conversation might cover birthday reward timing, whether a weekly cashback credit has posted, how a private reload interacts with open wagering, or which VIP tournament seats open first. Agents trained on the VIP Casino Program can point you to the exact contribution row for slots versus sports instead of giving vague encouragement. Live chat remains the universal entry point for every tier. WhatsApp and Telegram appear as authenticated channels after Gold or Platinum qualification — never trust a stranger who messages first claiming to be “your TPOWER host.” Official managers will not ask you to transfer funds to personal bank accounts or to share one-time passwords. If anything feels off, close the chat and reopen support from the lobby or official app. Personal assistance also includes responsible-gaming reminders: deposit caps, cool-offs, and self-exclusion pathways stay available without stigma. The best VIP relationships treat entertainment as adult leisure with documentation, not as secrecy that hides risk. Over hundreds of sessions, that culture of precise, calm help is what competitive keywords like TPOWER VIP and Online Casino VIP should describe — service depth, not glitter.`,
  zh: `实务上，与 VIP 管家的对话可能涉及生日礼发放时间、每周返水是否入账、私密充值礼与未完成流水如何互动，或哪场 VIP 赛事先开放名额。熟悉 VIP 计划的客服能直接指向老虎机与体育的贡献行，而不是给空泛鼓励。在线客服是各等级的通用入口。WhatsApp 与 Telegram 是在黄金或铂金达标后出现的已验证通道——千万别信主动私信、自称“你的 TPOWER 管家”的陌生人。官方管家不会要求你把资金转到私人银行账户，也不会索取一次性密码。若感觉不对，关闭对话，从大厅或官方 APP 重新进入支持。专人协助也包括负责任博彩提醒：存款上限、冷静期与自我排除路径始终可用，且不带标签。最好的 VIP 关系把娱乐当成有文档的成人休闲，而不是用秘密掩盖风险。经历大量场次后，这种精确、冷静的帮助文化，才是 TPOWER VIP、线上博彩 VIP 等竞争词应描述的内涵——是服务深度，不是闪光贴纸。`,
};

export const vipManagerChannels: { icon: VipIconKey; label: LocalizedString; hint: LocalizedString }[] =
  [
    {
      icon: "message",
      label: { en: "24/7 Live Chat", zh: "全天在线客服" },
      hint: {
        en: "Universal official entry for every VIP tier",
        zh: "各 VIP 等级的官方通用入口",
      },
    },
    {
      icon: "smartphone",
      label: { en: "WhatsApp", zh: "WhatsApp" },
      hint: {
        en: "Shown after higher-tier qualification inside official surfaces",
        zh: "更高的等级达标后在官方界面显示",
      },
    },
    {
      icon: "message",
      label: { en: "Telegram", zh: "Telegram" },
      hint: {
        en: "Authenticated VIP channel — never from cold social DMs",
        zh: "已验证 VIP 通道——绝非陌生社交私信",
      },
    },
    {
      icon: "zap",
      label: { en: "Priority Queue", zh: "优先队列" },
      hint: {
        en: "Faster routing during Malaysia peak hours",
        zh: "马来西亚高峰时段更快接入",
      },
    },
    {
      icon: "crown",
      label: { en: "Personal Assistance", zh: "专人协助" },
      hint: {
        en: "Host-level continuity for Platinum relationships",
        zh: "铂金关系的管家级连续服务",
      },
    },
  ];

export const vipExclusivePromotions: VipTextBlock[] = [
  {
    id: "bday-promo",
    icon: "cake",
    title: { en: "Birthday Bonus", zh: "生日礼" },
    body: {
      en: `Celebrate with a tier-scaled birthday bonus after your date of birth is verified. Silver receives acknowledgement value, Gold unlocks a fuller pack, and Platinum may enjoy host-timed gifts. Always check expiry and wagering before you play the gift through.`,
      zh: `生日资料核验后，按等级领取生日礼。白银为问候级礼遇，黄金礼包更完整，铂金可由管家择时安排。开玩前先看有效期与流水。`,
    },
  },
  {
    id: "monthly-reload",
    icon: "calendar",
    title: { en: "Monthly Reload", zh: "每月充值礼" },
    body: {
      en: `Monthly reload offers refresh VIP wallets with structured deposit matches. Read max caps and game contribution so the reload supports your preferred mix instead of locking you into unwanted titles.`,
      zh: `每月充值礼以结构化存款匹配刷新 VIP 钱包。请阅读上限与游戏贡献，让加码服务你的常用玩法，而不是锁进不爱玩的游戏。`,
    },
  },
  {
    id: "weekly-cb",
    icon: "percent",
    title: { en: "Weekly Cashback", zh: "每周返水" },
    body: {
      en: `Weekly cashback returns a percentage of eligible results on a shorter cycle. Higher VIP tiers unlock stronger rates; contribution tables still decide what counts from slots, live, sports, and more.`,
      zh: `每周返水按更短周期返还合资格结果的一定比例。VIP 等级越高比例越强；老虎机、真人、体育等仍看贡献表决定计入多少。`,
    },
  },
  {
    id: "referral",
    icon: "users",
    title: { en: "Referral Rewards", zh: "推荐奖励" },
    body: {
      en: `Share official registration links when friends want to try TPOWER. Referral rewards follow published conditions for qualified sign-ups — never spam, and never promise outcomes you cannot control.`,
      zh: `朋友想了解 TPOWER 时，分享官方注册链接。推荐奖励按合资格注册的公布条件发放——勿骚扰推销，也勿承诺你无法控制的结果。`,
    },
  },
  {
    id: "vip-tournament",
    icon: "trophy",
    title: { en: "VIP Tournament", zh: "VIP 赛事" },
    body: {
      en: `VIP tournaments offer leaderboard competition with tier-aware entry windows. Review prize pools, scoring rules, and eligible games before you commit evening hours to the race.`,
      zh: `VIP 赛事提供排行榜竞争，报名窗口按等级安排。投入晚间时间前，先看奖池、计分规则与合资格游戏。`,
    },
  },
  {
    id: "lucky-draw",
    icon: "ticket",
    title: { en: "Lucky Draw", zh: "幸运抽奖" },
    body: {
      en: `Lucky draws add optional excitement with entries that scale by VIP tier. Draws are chance-based extras — treat them as entertainment, not as a bankroll strategy.`,
      zh: `幸运抽奖以按 VIP 等级加码的次数带来可选刺激。抽奖是概率型额外娱乐——当作乐趣，而不是资金策略。`,
    },
  },
  {
    id: "seasonal",
    icon: "sparkles",
    title: { en: "Seasonal Gifts", zh: "季节礼遇" },
    body: {
      en: `Seasonal gifts mark festive periods on the VIP calendar with limited-time appreciation. Confirm claim windows early; seasonal stock and expiry move faster than evergreen offers.`,
      zh: `季节礼遇在 VIP 日历的节日节点送上限时答谢。请尽早确认领取窗口；季节库存与到期通常比常青优惠更快。`,
    },
  },
  {
    id: "private-campaign",
    icon: "lock",
    title: { en: "Private Campaigns", zh: "私密活动" },
    body: {
      en: `Private campaigns arrive quietly through VIP channels with full terms attached. Accept only when the structure matches your games and limits; skipping a mismatch is smart VIP behaviour.`,
      zh: `私密活动经 VIP 通道安静送达，并附完整条款。只有结构匹配你的游戏与限额时才接受；跳过不合适的方案，才是聪明的 VIP 做法。`,
    },
  },
];

export const vipTestimonials: VipTestimonial[] = [
  {
    id: "jason",
    name: "Jason",
    role: { en: "Gold member, Klang Valley", zh: "黄金会员 · 巴生谷" },
    quote: {
      en: "Gold cashback and the dedicated chat channel made my evenings simpler. Withdrawals feel organised once documents match, and I finally understand contribution before I opt into reloads.",
      zh: "黄金返水与专属聊天通道让我的晚间更简单。资料对齐后提现很有条理，领取充值礼前我也能先看懂贡献。",
    },
  },
  {
    id: "aaron",
    name: "Aaron",
    role: { en: "Silver member, Penang", zh: "白银会员 · 槟城" },
    quote: {
      en: "Silver was a clean entry into TPOWER VIP. Priority chat is noticeably faster on weekends, and the monthly appreciation bonus is explained without hype.",
      zh: "白银是进入 TPOWER VIP 的干净起点。周末优先客服明显更快，每月答谢礼说明清楚，没有夸张话术。",
    },
  },
  {
    id: "daniel",
    name: "Daniel",
    role: { en: "Platinum member, Johor", zh: "铂金会员 · 柔佛" },
    quote: {
      en: "Having a VIP manager means I ask once about private campaigns and get precise terms. Priority withdrawals respect banking windows but skip the long standard queue.",
      zh: "有 VIP 管家后，私密活动我问一次就能拿到精确条款。优先提现仍尊重银行窗口，但不用排漫长的普通队。",
    },
  },
  {
    id: "marcus",
    name: "Marcus",
    role: { en: "Gold member, Melaka", zh: "黄金会员 · 马六甲" },
    quote: {
      en: "I play mostly on Android. VIP progress tracked the same as desktop, and birthday rewards actually arrived after I verified my profile early.",
      zh: "我主要用 Android。VIP 进度与电脑端一样计入，提前提交生日资料后，生日礼也确实到账。",
    },
  },
  {
    id: "ryan",
    name: "Ryan",
    role: { en: "Silver member, Ipoh", zh: "白银会员 · 怡保" },
    quote: {
      en: "I compared a few VIP Casino Malaysia pages before joining. TPOWER’s tier table and FAQ answered the practical questions I actually search for.",
      zh: "加入前我比较过几个马来西亚 VIP 页面。TPOWER 的等级表与常见问题，回答的是我真正会搜的实务问题。",
    },
  },
];

export const vipHowToIntro: LocalizedString = {
  en: `Becoming a TPOWER VIP is a sequence, not a mystery. Follow the steps below, keep verification clean, and let eligible play accumulate under published rules. Rushing with multi-accounts or mismatched payouts slows everything down.`,
  zh: `成为 TPOWER VIP 是清晰步骤，不是玄学。按下列流程进行，保持验证完整，让合资格娱乐按公布规则累积。多开账户或出款不符只会拖慢一切。`,
};

export const vipHowToSteps: VipStep[] = [
  {
    id: "register",
    title: { en: "Register", zh: "注册" },
    body: {
      en: "Create your TPOWER account through the official Register page. Use accurate personal details from day one — corrections later can delay VIP fulfilment and withdrawals.",
      zh: "通过官方注册页创建 TPOWER 账户。从第一天就填写准确资料——事后修改可能延误 VIP 发放与提现。",
    },
  },
  {
    id: "deposit",
    title: { en: "Deposit", zh: "充值" },
    body: {
      en: "Fund with supported Malaysia payment methods under a matching name. Clean deposit ownership is the foundation of priority withdrawal later.",
      zh: "用支持的马来西亚支付方式、以匹配姓名充值。干净的充值归属，是日后优先提现的基础。",
    },
  },
  {
    id: "play",
    title: { en: "Play", zh: "娱乐" },
    body: {
      en: "Enjoy eligible slots, live casino, fishing, crash, or sports within your budget. Check contribution if tier progress is part of your plan.",
      zh: "在预算内游玩合资格老虎机、真人、捕鱼、爆点或体育。若计划冲等级，请先看贡献比例。",
    },
  },
  {
    id: "points",
    title: { en: "Earn Points", zh: "累积进度" },
    body: {
      en: "Eligible activity builds VIP progress according to programme rules. Focus on sustainable sessions rather than overnight spikes that stress your limits.",
      zh: "合资格活跃按计划规则累积 VIP 进度。专注可持续场次，而不是冲击个人限额的隔夜冲量。",
    },
  },
  {
    id: "upgrade",
    title: { en: "Upgrade", zh: "升级" },
    body: {
      en: "When thresholds and account standing align, you may receive an invitation or automatic upgrade into Silver, Gold, or Platinum with the matching benefit set.",
      zh: "当门槛与账户状态对齐时，可能收到邀请或自动升入白银、黄金或铂金，并解锁对应权益。",
    },
  },
  {
    id: "enjoy",
    title: { en: "Enjoy Benefits", zh: "享受权益" },
    body: {
      en: "Activate cashback, birthday rewards, priority support, and exclusive promotions through official channels. Keep Responsible Gaming tools on — VIP is premium leisure, not pressure.",
      zh: "通过官方通道启用返水、生日礼、优先支持与专属优惠。负责任博彩工具请保持开启——VIP 是高端休闲，不是压力。",
    },
  },
];

export const vipRelatedGuides: VipRelatedGuide[] = [
  {
    href: "/promotions",
    title: { en: "Promotions", zh: "优惠专区" },
    description: {
      en: "Compare welcome, reload, cashback, and VIP-tagged offers with clear terms.",
      zh: "比较欢迎礼、充值礼、返水与 VIP 标签优惠，条款清楚可查。",
    },
  },
  {
    href: "/download",
    title: { en: "Download App", zh: "下载 APP" },
    description: {
      en: "Install the official Android or iOS pathway and keep VIP sessions mobile-ready.",
      zh: "安装官方 Android 或 iOS 路径，让 VIP 娱乐随时可在手机进行。",
    },
  },
  {
    href: "/providers",
    title: { en: "Providers", zh: "游戏供应商" },
    description: {
      en: "Browse official studios powering slots, live casino, sports, and fishing.",
      zh: "浏览驱动老虎机、真人视讯、体育与捕鱼的官方工作室。",
    },
  },
  {
    href: "/games",
    title: { en: "Casino Games", zh: "游戏大厅" },
    description: {
      en: "Explore the full TPOWER lobby and see which categories fit your VIP mix.",
      zh: "探索完整 TPOWER 大厅，找到适合你 VIP 组合的品类。",
    },
  },
  {
    href: "/slots",
    title: { en: "Slots", zh: "老虎机" },
    description: {
      en: "Dive into eligible slot catalogues that often contribute strongly to VIP progress.",
      zh: "深入合资格老虎机目录——通常对 VIP 进度贡献明确。",
    },
  },
  {
    href: "/live-casino",
    title: { en: "Live Casino", zh: "真人视讯" },
    description: {
      en: "Review live tables and contribution notes before planning VIP evenings.",
      zh: "规划 VIP 晚间前，先查看真人桌与贡献说明。",
    },
  },
  {
    href: "/responsible-gaming",
    title: { en: "Responsible Gaming", zh: "负责任博彩" },
    description: {
      en: "Set deposit limits, cool-offs, and healthier habits alongside VIP benefits.",
      zh: "在享受 VIP 权益同时，设置存款限额、冷静期与更健康习惯。",
    },
  },
  {
    href: "/news",
    title: { en: "News", zh: "最新消息" },
    description: {
      en: "Follow host coverage and platform updates that affect VIP players.",
      zh: "关注影响 VIP 玩家的管家覆盖与平台更新。",
    },
  },
  {
    href: "/blog",
    title: { en: "Blog", zh: "博彩攻略" },
    description: {
      en: "Read practical guides that deepen Malaysia casino knowledge with EEAT care.",
      zh: "阅读兼具实务与 EEAT 的马来西亚博彩攻略。",
    },
  },
];
