import type { ContentFaq, LocalizedString, VipTier } from "@/types";

export const vipTiers: VipTier[] = [
  {
    id: "silver",
    name: { en: "Silver", zh: "白银" },
    description: {
      en: "Your entry into the TPOWER VIP Club — faster support routing, monthly appreciation rewards, and a clearer path toward Gold without pressure tactics.",
      zh: "进入 TPOWER VIP 的起点：客服优先接入、每月答谢礼，以及清晰通往黄金等级的路径，不靠催促式营销。",
    },
    benefits: [
      { en: "Priority support queue", zh: "客服优先排队" },
      { en: "Monthly appreciation bonus", zh: "每月答谢红利" },
      { en: "Enhanced reload access", zh: "充值优惠加码" },
      { en: "Birthday acknowledgement", zh: "生日专属问候" },
      { en: "Eligible tournament entry", zh: "合资格赛事报名" },
    ],
    monthlyRewards: {
      en: "Appreciation bonus + reload boost",
      zh: "答谢礼 + 充值加码",
    },
    withdrawalSpeed: {
      en: "Standard VIP priority review",
      zh: "标准 VIP 优先审核",
    },
    cashback: { en: "Entry VIP cashback rate", zh: "入门 VIP 返水" },
    supportLevel: {
      en: "Priority live chat queue",
      zh: "在线客服优先队列",
    },
    exclusiveGifts: {
      en: "Birthday greeting + seasonal notes",
      zh: "生日问候 + 季节礼遇提醒",
    },
  },
  {
    id: "gold",
    name: { en: "Gold", zh: "黄金" },
    description: {
      en: "The most popular Malaysia VIP rewards tier — higher cashback potential, faster withdrawal windows, and a dedicated chat channel for smoother day-to-day play.",
      zh: "最受欢迎的马来西亚 VIP 奖励等级：返水更高、提现窗口更优先，并配备更顺畅的专属沟通通道。",
    },
    benefits: [
      { en: "Higher cashback percentage", zh: "返水比例提升" },
      { en: "Priority withdrawal review", zh: "提款优先审核" },
      { en: "Dedicated chat channel", zh: "专属客服通道" },
      { en: "Seasonal gift selection", zh: "节庆礼品精选" },
      { en: "Boosted lucky-draw entries", zh: "抽奖次数加码" },
    ],
    monthlyRewards: {
      en: "Reload + cashback calendar boost",
      zh: "充值礼 + 返水日历加码",
    },
    withdrawalSpeed: {
      en: "Elevated VIP priority review",
      zh: "加强 VIP 优先审核",
    },
    cashback: { en: "Enhanced VIP cashback rate", zh: "加强 VIP 返水" },
    supportLevel: {
      en: "Dedicated VIP chat channel",
      zh: "专属 VIP 聊天通道",
    },
    exclusiveGifts: {
      en: "Seasonal gifts + birthday bonus",
      zh: "季节礼品 + 生日加码",
    },
    highlight: true,
  },
  {
    id: "platinum",
    name: { en: "Platinum", zh: "铂金" },
    description: {
      en: "Personal hosting for high-touch players — bespoke promotions, highest withdrawal priority, and discreet service designed for Online Casino VIP expectations in Malaysia.",
      zh: "面向高规格玩家的一对一管家：定制优惠、提现最高优先、低调服务，符合马来西亚线上博彩 VIP 的期待。",
    },
    benefits: [
      { en: "Personal VIP host", zh: "专属 VIP 管家" },
      { en: "Bespoke promotion structuring", zh: "量身定制优惠方案" },
      { en: "Highest withdrawal priority", zh: "提款最高优先级" },
      { en: "Invitation-only experiences", zh: "邀请制尊享活动" },
      { en: "Private campaign access", zh: "私密活动准入" },
    ],
    monthlyRewards: {
      en: "Host-curated private rewards",
      zh: "管家精选私人奖励",
    },
    withdrawalSpeed: {
      en: "Highest VIP priority lane",
      zh: "最高 VIP 优先通道",
    },
    cashback: { en: "Top-tier VIP cashback rate", zh: "顶级 VIP 返水" },
    supportLevel: {
      en: "Personal VIP manager coverage",
      zh: "专属 VIP 管家对接",
    },
    exclusiveGifts: {
      en: "Invitation gifts + private events",
      zh: "邀请礼遇 + 私人活动",
    },
  },
];

export type VipComparisonRow = {
  id: string;
  label: LocalizedString;
  silver: LocalizedString;
  gold: LocalizedString;
  platinum: LocalizedString;
};

export const vipComparisonRows: VipComparisonRow[] = [
  {
    id: "cashback",
    label: { en: "Cashback", zh: "返水" },
    silver: { en: "Entry rate", zh: "入门比例" },
    gold: { en: "Enhanced rate", zh: "加强比例" },
    platinum: { en: "Top-tier rate", zh: "顶级比例" },
  },
  {
    id: "withdrawal",
    label: { en: "Withdrawal Priority", zh: "提现优先级" },
    silver: { en: "VIP queue", zh: "VIP 队列" },
    gold: { en: "Elevated priority", zh: "加强优先" },
    platinum: { en: "Highest priority", zh: "最高优先" },
  },
  {
    id: "manager",
    label: { en: "VIP Manager", zh: "VIP 管家" },
    silver: { en: "Shared VIP desk", zh: "VIP 共享服务台" },
    gold: { en: "Dedicated channel", zh: "专属通道" },
    platinum: { en: "Personal host", zh: "一对一管家" },
  },
  {
    id: "birthday",
    label: { en: "Birthday Bonus", zh: "生日礼" },
    silver: { en: "Greeting + token gift", zh: "问候 + 心意礼" },
    gold: { en: "Birthday bonus pack", zh: "生日礼包" },
    platinum: { en: "Host-arranged gift", zh: "管家安排礼遇" },
  },
  {
    id: "monthly",
    label: { en: "Monthly Rewards", zh: "每月奖励" },
    silver: { en: "Appreciation bonus", zh: "答谢红利" },
    gold: { en: "Reload + cashback boost", zh: "充值 + 返水加码" },
    platinum: { en: "Curated private rewards", zh: "精选私人奖励" },
  },
  {
    id: "promos",
    label: { en: "Exclusive Promotions", zh: "专属优惠" },
    silver: { en: "VIP-tagged offers", zh: "VIP 标签优惠" },
    gold: { en: "Expanded VIP calendar", zh: "更丰富 VIP 日历" },
    platinum: { en: "Bespoke campaigns", zh: "定制活动" },
  },
  {
    id: "support",
    label: { en: "Customer Support", zh: "客户支持" },
    silver: { en: "Priority live chat", zh: "优先在线客服" },
    gold: { en: "Dedicated VIP chat", zh: "专属 VIP 客服" },
    platinum: { en: "Personal assistance", zh: "专人协助" },
  },
  {
    id: "tournament",
    label: { en: "Tournament Access", zh: "赛事准入" },
    silver: { en: "Eligible events", zh: "合资格赛事" },
    gold: { en: "Priority seating windows", zh: "优先报名窗口" },
    platinum: { en: "Invitation tournaments", zh: "邀请制赛事" },
  },
  {
    id: "lucky",
    label: { en: "Lucky Draw", zh: "幸运抽奖" },
    silver: { en: "Standard VIP entries", zh: "标准 VIP 抽奖次数" },
    gold: { en: "Boosted entries", zh: "抽奖次数加码" },
    platinum: { en: "Premium draw access", zh: "高端抽奖准入" },
  },
  {
    id: "events",
    label: { en: "Exclusive Events", zh: "专属活动" },
    silver: { en: "Seasonal VIP notes", zh: "季节 VIP 提醒" },
    gold: { en: "VIP event invitations", zh: "VIP 活动邀请" },
    platinum: { en: "Private experiences", zh: "私人体验活动" },
  },
];

export const vipFaqs: ContentFaq[] = [
  {
    question: {
      en: "How do I become a VIP?",
      zh: "怎么成为 TPOWER VIP？",
    },
    answer: {
      en: "Register a TPOWER account, complete required verification, deposit through supported Malaysia payment methods, and play eligible games. Consistent eligible activity and healthy account standing unlock Silver and higher tiers through invitation or automatic progression.",
      zh: "先注册 TPOWER 账户、完成必要验证，用支持的马来西亚支付方式充值，并游玩合资格游戏。持续合资格活跃与良好账户状态，可通过邀请或自动进阶解锁白银及更高 VIP 等级。",
    },
  },
  {
    question: { en: "Is VIP free?", zh: "加入 VIP 要收费吗？" },
    answer: {
      en: "There is no separate membership fee to join the TPOWER VIP Club. Progression is based on eligible play and account quality rather than a paid subscription.",
      zh: "加入 TPOWER VIP 俱乐部不另收会员费。等级进阶看合资格娱乐与账户质量，不是付费订阅。",
    },
  },
  {
    question: {
      en: "Can I lose VIP status?",
      zh: "VIP 身份会不会被取消？",
    },
    answer: {
      en: "VIP standing can change if eligible activity drops for an extended period, if account checks fail, or if programme rules are breached. Maintaining verification, consistent play patterns, and responsible limits helps preserve your tier.",
      zh: "若长期缺乏合资格活跃、账户审核未通过，或违反计划规则，VIP 状态可能调整。保持验证完整、娱乐节奏稳定，并设置负责任限额，有助维持等级。",
    },
  },
  {
    question: {
      en: "How is cashback calculated?",
      zh: "返水怎么计算？",
    },
    answer: {
      en: "Cashback is calculated from eligible net losses or eligible wagering within the published VIP window, using your tier rate. Contribution varies by game type; always review the cashback terms shown in your account before relying on a projected figure.",
      zh: "返水按账户公布的 VIP 结算周期，以合资格净亏损或合资格流水乘以对应等级比例计算。不同游戏贡献不同，请以账户内条款为准，勿只凭估算。",
    },
  },
  {
    question: {
      en: "How fast are VIP withdrawals?",
      zh: "VIP 提现有多快？",
    },
    answer: {
      en: "VIP requests enter a priority review lane once KYC and payout ownership details match. Final arrival time still depends on your bank or e-wallet rail and banking windows, but VIP queues move ahead of standard withdrawals.",
      zh: "资料与出款归属核对无误后，VIP 提现进入优先审核。到账时间仍看银行或电子钱包通道与银行窗口，但排队优于普通提现。",
    },
  },
  {
    question: {
      en: "Do VIP rewards expire?",
      zh: "VIP 奖励会过期吗？",
    },
    answer: {
      en: "Most gifts, reloads, and cashback credits carry a validity window shown in offer terms. Claim and use rewards before expiry, and note any wagering or payout conditions attached to the reward.",
      zh: "多数礼遇、充值礼与返水额度都有有效期，优惠条款会写明。请在到期前领取使用，并留意流水或提款相关条件。",
    },
  },
  {
    question: {
      en: "Can foreigners join?",
      zh: "外籍人士可以加入 VIP 吗？",
    },
    answer: {
      en: "Eligibility depends on account registration rules, verification requirements, and the payment methods available in your region. Players who can complete Malaysia-facing onboarding and pass identity checks may progress through VIP under the same programme structure.",
      zh: "是否可加入取决于注册规则、验证要求与你所在地区可用的支付方式。能完成面向马来西亚的开户流程并通过身份核验的玩家，可按同一 VIP 结构进阶。",
    },
  },
  {
    question: {
      en: "Can mobile users become VIP?",
      zh: "手机用户也能成为 VIP 吗？",
    },
    answer: {
      en: "Yes. Android and iOS sessions count toward eligible VIP activity the same way desktop play does, provided you use the official TPOWER pathways and complete verification on your account.",
      zh: "可以。Android 与 iOS 的合资格活跃与电脑端同等计入，前提是走 TPOWER 官方路径，并完成账户验证。",
    },
  },
  {
    question: {
      en: "Does VIP include sports betting?",
      zh: "VIP 包含体育博彩吗？",
    },
    answer: {
      en: "Sports markets can contribute when marked eligible in VIP terms. Contribution rates may differ from slots or live casino, so check the sports contribution table before planning tier progress around fixtures alone.",
      zh: "体育盘口在 VIP 条款标注合资格时可以计入。贡献比例可能与老虎机或真人视讯不同，请先看体育贡献表，勿只靠赛事冲等级。",
    },
  },
  {
    question: {
      en: "What games count toward VIP?",
      zh: "哪些游戏计入 VIP？",
    },
    answer: {
      en: "Eligible slots, live casino tables, fishing titles, crash games, and selected sports markets may contribute at published rates. Excluded or reduced-contribution games are listed in VIP and promotion terms.",
      zh: "合资格老虎机、真人桌、捕鱼、爆点及部分体育盘口可按公布比例计入。不计入或低贡献游戏会写在 VIP 与优惠条款中。",
    },
  },
  {
    question: {
      en: "Can I downgrade?",
      zh: "可以主动降级吗？",
    },
    answer: {
      en: "Tier movement is generally automatic based on activity and programme rules. If you need clarification about a standing change, contact VIP support with your account ID rather than opening duplicate profiles.",
      zh: "等级通常按活跃与计划规则自动调整。若对等级变动有疑问，请带账户 ID 联系 VIP 支持，不要另开重复账户。",
    },
  },
  {
    question: {
      en: "Is there a birthday bonus?",
      zh: "有生日礼吗？",
    },
    answer: {
      en: "Yes. Silver includes birthday acknowledgement, while Gold and Platinum unlock stronger birthday packs or host-arranged gifts when your profile date of birth is verified in advance.",
      zh: "有。白银含生日问候；黄金与铂金在预先生日资料核验后，可解锁更丰富生日礼包或管家安排礼遇。",
    },
  },
  {
    question: {
      en: "Can I transfer VIP?",
      zh: "VIP 可以转让吗？",
    },
    answer: {
      en: "VIP status is tied to a single verified account and cannot be sold, gifted, or transferred. Benefits apply only to the account that earned the tier.",
      zh: "VIP 绑定单一已验证账户，不可出售、赠送或转让。权益只适用于达成该等级的账户本身。",
    },
  },
  {
    question: {
      en: "How do I contact VIP support?",
      zh: "怎么联系 VIP 客服？",
    },
    answer: {
      en: "Use live chat from the lobby, or the VIP WhatsApp / Telegram channels shown after you unlock Gold or Platinum. Always start from official TPOWER entry points — never from unsolicited social messages.",
      zh: "可从大厅在线客服联系；解锁黄金或铂金后，账户会显示 VIP WhatsApp / Telegram 通道。请只从 TPOWER 官方入口进入，勿信陌生社交私信。",
    },
  },
  {
    question: {
      en: "Can I have multiple VIP accounts?",
      zh: "可以开多个 VIP 账户吗？",
    },
    answer: {
      en: "No. Multi-accounting violates programme integrity and can lead to review, reward cancellation, or account restrictions. One person should maintain one verified TPOWER profile.",
      zh: "不可以。多开账户违反计划诚信，可能导致审核、奖励取消或账户限制。一人应只维护一个已验证的 TPOWER 资料。",
    },
  },
];
