import type { Promotion, PromotionCategory } from "@/types";

export const promotions: Promotion[] = [
  {
    id: "welcome-package",
    slug: "welcome-package",
    title: { en: "Welcome Package", zh: "首存优惠礼包" },
    summary: {
      en: "A structured first-deposit TPOWER Welcome Bonus with transparent wagering and clear game contribution rules.",
      zh: "TPOWER官网 首存优惠，流水规则透明，老虎机与真人视讯贡献比例写清楚。",
    },
    description: {
      en: "New TPOWER members can unlock a welcome package designed for clarity. Bonus amounts, eligible games, and completion windows are published before you opt in — so you always know what you are activating.",
      zh: "新会员注册后可领欢迎礼包。奖励金额、适用游戏、完成时限，领取前全部公开，心里有数再激活。",
    },
    overview: {
      en: "The TPOWER Welcome Bonus is the primary onboarding offer for eligible new Malaysia accounts. It is built around a first qualifying deposit, published contribution rules, and a completion window you can evaluate before activation. This is not a vague “mystery pack” — it is a documented TPOWER Bonus path that sits inside TPOWER Promotions Malaysia.",
      zh: "首存优惠是 TPOWER线上博彩 新会员的主打福利。首次合资格入金、流水贡献、完成期限，激活前都能评估。不是神秘盲盒，是 马来西亚线上博彩 里条款写明的正式 TPOWER优惠 路径。",
    },
    eligibility: [
      {
        en: "New verified adult accounts registered through official TPOWER Register channels",
        zh: "经 TPOWER官网 官方注册并完成验证的成年新账户",
      },
      {
        en: "One welcome package per player, device, and payment ownership profile",
        zh: "每位玩家、每台设备、每组支付资料限领一次",
      },
      {
        en: "Minimum deposit must meet the published cashier threshold at opt-in",
        zh: "入金须达到领取时收银台公布的最低门槛",
      },
      {
        en: "Account details must match local payment ownership for later withdrawals",
        zh: "账户资料须与本地支付户名一致，方便日后提款",
      },
    ],
    bonusDetails: [
      {
        en: "Bonus value is shown in the promotions panel before activation",
        zh: "激活前优惠面板即显示奖励金额",
      },
      {
        en: "Wagering and game contribution percentages are published with the offer",
        zh: "流水倍数与各游戏贡献比例随活动一并公布",
      },
      {
        en: "Eligible categories may include selected slots and specified specialty games",
        zh: "适用品类含精选老虎机及指定特色游戏",
      },
      {
        en: "Maximum cashout or bonus caps, if any, appear in the live terms",
        zh: "如有最高兑付或红利上限，以实时条款为准",
      },
    ],
    howToClaim: [
      {
        en: "Create your account via the official Register guide and complete verification steps",
        zh: "走官方注册指南开户，按步骤完成验证",
      },
      {
        en: "Sign in through TPOWER Login on web or the official TPOWER App",
        zh: "网页或官方 APP 登录 TPOWER 账户",
      },
      {
        en: "Open Promotions, review Welcome Package terms, and opt in before depositing",
        zh: "进优惠中心看首存条款，入金前先点领取优惠",
      },
      {
        en: "Make the qualifying deposit using documented Payment Methods",
        zh: "用平台支持的支付方式完成合资格入金",
      },
      {
        en: "Play on eligible games until wagering completes, then withdraw under normal rules",
        zh: "在适用游戏完成流水，再按常规规则提现",
      },
    ],
    terms: {
      en: "Available to new verified accounts in Malaysia. One welcome package per player. Standard wagering and contribution rules apply. Full terms are shown at opt-in and may update for fairness or compliance.",
      zh: "限马来西亚新验证账户，每人一次。适用标准流水与贡献规则，完整条款以领取时显示为准。",
    },
    bonusAmount: { en: "Up to welcome package value", zh: "最高首存礼包价值" },
    minDeposit: { en: "From MYR 30", zh: "最低 MYR 30 起" },
    badge: { en: "New players", zh: "新会员专享" },
    cta: { en: "Claim welcome details", zh: "领取优惠" },
    image: "/images/promotions/tpower-welcome-package.webp",
    imageAlt: {
      en: "TPOWER Welcome Package banner with premium casino chips and welcome gift",
      zh: "TPOWER 首存优惠宣传图：筹码与欢迎礼盒",
    },
    category: "welcome",
    expiresAt: "2026-12-31",
    featured: true,
    faqs: [
      {
        question: {
          en: "Who can claim the TPOWER Welcome Bonus?",
          zh: "TPOWER首存优惠谁可以领？",
        },
        answer: {
          en: "Eligible new adult Malaysia accounts that complete official registration and verification. Existing players should review reload, cashback, or VIP offers instead.",
          zh: "完成官方注册与验证的大马新成年账户。老玩家请看充值、返水或 VIP 专属优惠。",
        },
      },
      {
        question: {
          en: "Do I need to opt in before depositing?",
          zh: "首存前要先领取优惠吗？",
        },
        answer: {
          en: "Yes. Review and accept the Welcome Package terms in Promotions before making the qualifying deposit so contribution rules apply correctly.",
          zh: "要。入金前先在优惠中心确认首存条款并领取，流水贡献才会正确计算。",
        },
      },
    ],
  },
  {
    id: "weekly-reload",
    slug: "weekly-reload",
    title: { en: "Weekly Reload Boost", zh: "每周充值加码" },
    summary: {
      en: "A recurring mid-week TPOWER Bonus for active members with predictable reward windows.",
      zh: "老会员周中充值加码，奖励时段固定，好安排预算。",
    },
    description: {
      en: "Stay in rhythm with a weekly reload boost. The offer opens on a published schedule and includes a fixed percentage boost capped for fairness across player tiers.",
      zh: "每周固定时段开放充值优惠，百分比透明，上限设好，各等级玩家都公平。",
    },
    overview: {
      en: "Weekly Reload Boost is a recurring TPOWER Malaysia Promotions offer for players who already funded an account. It rewards planned deposits inside a published weekday window, with percentage boosts and maximum caps designed to stay readable rather than theatrical.",
      zh: "每周充值加码面向已入金的老会员。工作日固定窗口内计划性充值可享百分比奖励，上限写清楚，不搞夸张噱头。",
    },
    eligibility: [
      {
        en: "Active accounts with completed first deposit history",
        zh: "已完成首次入金的有效账户",
      },
      {
        en: "Opt-in during the published weekly window only",
        zh: "仅在公布的每周开放时段内领取",
      },
      {
        en: "Minimum deposit meets the reload threshold shown at activation",
        zh: "入金须达激活时显示的充值门槛",
      },
      {
        en: "Not combinable with conflicting same-day reload campaigns",
        zh: "不可与同天冲突的充值活动叠加",
      },
    ],
    bonusDetails: [
      {
        en: "Percentage reload boost with a published maximum bonus cap",
        zh: "百分比充值奖励，最高红利上限已公布",
      },
      {
        en: "Eligible games and contribution rates listed before opt-in",
        zh: "适用游戏与贡献比例，领取前即列明",
      },
      {
        en: "Schedule and expiry appear in the promotion card and detail page",
        zh: "开放时段与到期日见优惠卡片及详情页",
      },
    ],
    howToClaim: [
      {
        en: "Login to your TPOWER account on web or app",
        zh: "网页或 APP 登录 TPOWER 账户",
      },
      {
        en: "Open Promotions and select Weekly Reload Boost during the active window",
        zh: "开放时段内进优惠中心，选每周充值加码",
      },
      {
        en: "Confirm terms, then deposit at or above the minimum",
        zh: "确认条款后，按最低额或以上入金",
      },
      {
        en: "Complete wagering on eligible titles before requesting withdrawal",
        zh: "在适用游戏完成流水后再申请提现",
      },
    ],
    terms: {
      en: "Available on selected weekdays. Minimum deposit and maximum bonus caps apply. Not combinable with conflicting reload offers. Abuse voids participation.",
      zh: "限指定工作日。设最低入金与最高奖励上限，不可与冲突充值优惠叠加，滥用取消资格。",
    },
    bonusAmount: { en: "Up to weekly reload %", zh: "最高每周充值比例" },
    minDeposit: { en: "From MYR 50", zh: "最低 MYR 50 起" },
    badge: { en: "Weekly", zh: "每周限时" },
    cta: { en: "See reload terms", zh: "查看更多优惠" },
    image: "/images/promotions/tpower-weekly-reload.webp",
    imageAlt: {
      en: "TPOWER Weekly Reload Boost banner with mobile deposit and casino chips",
      zh: "TPOWER 每周充值加码宣传图：手机入金与筹码",
    },
    category: "reload",
    expiresAt: "2026-09-30",
    featured: true,
    faqs: [
      {
        question: {
          en: "Can new players use Weekly Reload instead of Welcome Bonus?",
          zh: "新玩家能跳过首存直接领每周充值吗？",
        },
        answer: {
          en: "New players should complete the Welcome Package path first when eligible. Reload is intended for returning funded accounts.",
          zh: "符合资格的新会员应先走首存优惠。每周充值面向已入金的老玩家。",
        },
      },
    ],
  },
  {
    id: "cashback-calm",
    slug: "cashback-calm",
    title: { en: "Calm Cashback", zh: "安心返水计划" },
    summary: {
      en: "TPOWER Cashback calculated on net losses with readable conditions and a published payout window.",
      zh: "按净亏损算返水，条件好读，派发时间事先公布。",
    },
    description: {
      en: "Calm Cashback returns a percentage of net losses over the qualifying period. The calculation method and payout window are listed in the promotion panel before activation.",
      zh: "安心返水按周期内净亏损返还一定比例。计算方式与到账时间，激活前就在面板写清楚。",
    },
    overview: {
      en: "TPOWER Cashback is designed as a recovery-style reward rather than a high-pressure chase mechanic. Calm Cashback publishes the percentage basis, eligible games, and payout timing so Malaysia players can evaluate whether the offer fits their entertainment budget.",
      zh: "TPOWER 返水走稳健路线，不是逼你追输的玩法。比例、适用游戏、到账时间全公开，大马玩家可以对照娱乐预算再决定。",
    },
    eligibility: [
      {
        en: "Verified accounts with eligible game activity in the qualifying period",
        zh: "验证账户在统计周期内有适用游戏记录",
      },
      {
        en: "Net-loss calculation follows the method shown at opt-in",
        zh: "净亏损按领取时显示的方式计算",
      },
      {
        en: "Multi-accounting or bonus abuse voids cashback eligibility",
        zh: "多账户或滥用优惠将取消返水资格",
      },
    ],
    bonusDetails: [
      {
        en: "Percentage cashback on net losses for eligible categories",
        zh: "适用品类净亏损按百分比返水",
      },
      {
        en: "Mild wagering may apply before withdrawal of cashback funds",
        zh: "返水到账后提现前可能有轻度流水",
      },
      {
        en: "Payout window is listed in the promotions panel",
        zh: "派发窗口见优惠面板说明",
      },
    ],
    howToClaim: [
      {
        en: "Opt in to Calm Cashback from the Promotions hub when available",
        zh: "开放时在优惠中心领取安心返水",
      },
      {
        en: "Play eligible games within your planned entertainment budget",
        zh: "在预算内玩适用游戏即可",
      },
      {
        en: "Wait for the published calculation and payout window",
        zh: "等系统按公布时段结算并派发",
      },
      {
        en: "Complete any mild wagering, then withdraw through Payment Methods",
        zh: "完成轻度流水后，走支付方式提现",
      },
    ],
    terms: {
      en: "Calculated on net losses for eligible games. Cashback may carry mild wagering. Abuse or multi-accounting voids eligibility.",
      zh: "按适用游戏净亏损计算，返水可能附带轻度流水，滥用或多账户取消资格。",
    },
    bonusAmount: { en: "Net-loss cashback %", zh: "净亏损返水比例" },
    minDeposit: { en: "No extra min beyond play", zh: "正常游玩即可，无额外最低入金" },
    badge: { en: "Ongoing", zh: "长期有效" },
    cta: { en: "Understand cashback", zh: "了解返水规则" },
    image: "/images/promotions/tpower-cashback.webp",
    imageAlt: {
      en: "TPOWER Calm Cashback banner with gold coins returning around premium chips",
      zh: "TPOWER 安心返水宣传图：金币环绕筹码",
    },
    category: "cashback",
    expiresAt: "2026-12-31",
    featured: true,
    faqs: [
      {
        question: {
          en: "Is TPOWER Cashback paid on every loss?",
          zh: "TPOWER返水是每输一把都有吗？",
        },
        answer: {
          en: "No. Cashback is calculated on net losses across the qualifying period for eligible games, using the method published when you opt in.",
          zh: "不是。按统计周期内适用游戏的净亏损算，方式以领取时公布的为准。",
        },
      },
    ],
  },
  {
    id: "vip-accelerated",
    slug: "vip-accelerated",
    title: { en: "VIP Accelerated Rewards", zh: "VIP 专属加速礼遇" },
    summary: {
      en: "TPOWER VIP Promotions with enhanced celebration rewards and host-managed offers.",
      zh: "VIP 会员专属 TPOWER优惠，节庆加码，管家一对一安排。",
    },
    description: {
      en: "VIP members receive accelerated reward calendars managed by personal hosts. Offers are tailored by tier and communicated privately — never as public flash clutter.",
      zh: "VIP 会员享管家管理的加速奖励日历。按等级定制，私下沟通，不搞公开闪购那一套。",
    },
    overview: {
      en: "TPOWER VIP Promotions reward consistent eligible activity with discretion. Accelerated rewards, birthday or celebration gestures, and host-managed boosts are communicated according to tier rather than as noisy public flash sales.",
      zh: "VIP 专属优惠奖励长期活跃玩家，低调不张扬。加速礼遇、生日惊喜、管家加码，按等级私下通知，不是满屏广告。",
    },
    eligibility: [
      {
        en: "Active membership in an eligible TPOWER VIP tier",
        zh: "处于有效 TPOWER VIP 等级的会员",
      },
      {
        en: "Healthy account standing and completed verification",
        zh: "账户状态良好且已完成验证",
      },
      {
        en: "Host-issued offers may require private confirmation",
        zh: "管家发放的优惠可能需要私下确认",
      },
    ],
    bonusDetails: [
      {
        en: "Tier-based reward calendars and celebration boosts",
        zh: "按等级的奖励日历与节庆加码",
      },
      {
        en: "Priority operational attention where published for the tier",
        zh: "该等级公布的优先运营支持",
      },
      {
        en: "Selected host offers may include reload or cashback enhancements",
        zh: "部分管家优惠含充值或返水加码",
      },
    ],
    howToClaim: [
      {
        en: "Review your VIP tier status inside the product after Login",
        zh: "登录后在产品内查看 VIP 等级",
      },
      {
        en: "Open the VIP Club page for public programme context",
        zh: "逛 VIP 俱乐部页了解公开计划",
      },
      {
        en: "Confirm host-issued offers privately before depositing if required",
        zh: "如需入金，先跟管家私下确认优惠细节",
      },
      {
        en: "Keep Responsible Gaming limits active while using VIP rewards",
        zh: "使用 VIP 奖励时保持理性娱乐限额开启",
      },
    ],
    terms: {
      en: "Exclusive to active VIP tiers. Host-issued offers may vary by tier and activity. Standard account verification required. Rewards never override responsible gaming controls.",
      zh: "限有效 VIP 等级，管家优惠因等级与活跃度而异，须完成验证，奖励不覆盖理性娱乐控制。",
    },
    bonusAmount: { en: "Tier-based VIP rewards", zh: "按等级 VIP 奖励" },
    minDeposit: { en: "Varies by host offer", zh: "视管家方案而定" },
    badge: { en: "VIP only", zh: "VIP 专属" },
    cta: { en: "Explore VIP Club", zh: "进入 VIP 俱乐部" },
    image: "/images/promotions/tpower-vip-rewards.webp",
    imageAlt: {
      en: "TPOWER VIP Accelerated Rewards banner with champagne and luxury lounge chips",
      zh: "TPOWER VIP 加速礼遇宣传图：香槟与贵宾筹码",
    },
    category: "vip",
    expiresAt: "2026-12-31",
    faqs: [
      {
        question: {
          en: "Are TPOWER VIP Promotions public to every player?",
          zh: "VIP 专属优惠所有玩家都能看到吗？",
        },
        answer: {
          en: "Public programme context is on the VIP Club page, but many accelerated rewards are host-managed and tier-specific rather than open flash offers.",
          zh: "公开说明在 VIP 俱乐部页，很多加速礼遇由管家按等级私下发放，不是开放闪购。",
        },
      },
    ],
  },
  {
    id: "merdeka-seasonal",
    slug: "merdeka-seasonal",
    title: { en: "Merdeka Seasonal Boost", zh: "国庆季限时加码" },
    summary: {
      en: "A limited seasonal TPOWER Bonus with published dates and contribution rules for Malaysia celebrations.",
      zh: "大马节庆限时 TPOWER优惠，日期与流水贡献规则事先公布。",
    },
    description: {
      en: "Celebrate the season with a time-boxed boost. Eligibility, game contribution, and expiry are listed before activation so the offer stays easy to evaluate.",
      zh: "节庆限时加码，资格、游戏贡献、到期日激活前全写清，好评估再下手。",
    },
    overview: {
      en: "Seasonal promotions such as Merdeka Seasonal Boost sit beside evergreen TPOWER Promotions. They are intentionally time-boxed, with start/end visibility, so Malaysia players can decide quickly without chasing endless scarcity theatre.",
      zh: "国庆季加码与常年 TPOWER优惠 并列，故意设起止日期，大马玩家一眼看懂，不用被无限「最后机会」忽悠。",
    },
    eligibility: [
      {
        en: "Verified Malaysia accounts active during the published seasonal window",
        zh: "节庆窗口内有效的已验证大马账户",
      },
      {
        en: "Opt-in required before the qualifying deposit or entry action",
        zh: "合资格入金或参与前须先领取",
      },
      {
        en: "Standard verification and responsible gaming rules still apply",
        zh: "仍须遵守标准验证与理性娱乐规则",
      },
    ],
    bonusDetails: [
      {
        en: "Time-boxed boost percentage or package value published at launch",
        zh: "上线时公布限时加码比例或礼包价值",
      },
      {
        en: "Eligible games may emphasise slots, sports fixtures, or live tables by season",
        zh: "适用游戏可能侧重老虎机、体育赛事或真人视讯",
      },
      {
        en: "Expiry is hard-dated on the promotion card",
        zh: "到期日在优惠卡片上硬性标注",
      },
    ],
    howToClaim: [
      {
        en: "Confirm the seasonal window is still open on the Promotions page",
        zh: "先在优惠页确认节庆窗口仍开放",
      },
      {
        en: "Opt in and read contribution rules carefully",
        zh: "领取优惠并细读流水贡献规则",
      },
      {
        en: "Deposit or complete the entry action shown in the offer",
        zh: "按活动说明完成入金或参与动作",
      },
      {
        en: "Finish wagering before the hard expiry date",
        zh: "在硬性到期日前完成流水",
      },
    ],
    terms: {
      en: "Available during the published seasonal window only. Standard verification and wagering rules apply. Expired seasonal offers cannot be reinstated.",
      zh: "仅在公布节庆时段有效，适用标准验证与流水规则，过期不可恢复。",
    },
    bonusAmount: { en: "Seasonal boost package", zh: "节庆加码礼包" },
    minDeposit: { en: "From MYR 50", zh: "最低 MYR 50 起" },
    badge: { en: "Seasonal", zh: "限时节庆" },
    cta: { en: "View seasonal offer", zh: "领取优惠" },
    image: "/images/promotions/tpower-merdeka-seasonal.webp",
    imageAlt: {
      en: "TPOWER Merdeka Seasonal Boost banner with football and festive casino chips",
      zh: "TPOWER 国庆季加码宣传图：足球与节庆筹码",
    },
    category: "seasonal",
    expiresAt: "2026-08-31",
    featured: true,
    faqs: [
      {
        question: {
          en: "What happens when a seasonal TPOWER Bonus expires?",
          zh: "节庆优惠到期了会怎样？",
        },
        answer: {
          en: "Unfinished seasonal progress typically ends at the hard expiry shown on the card. Check live terms at opt-in for exact handling.",
          zh: "未完成的进度一般在卡片到期日截止，具体以领取时实时条款为准。",
        },
      },
    ],
  },
];

export function getFeaturedPromotions(): Promotion[] {
  return promotions.filter((item) => item.featured);
}

export function getPromotionBySlug(slug: string): Promotion | undefined {
  return promotions.find((item) => item.slug === slug);
}

export function getPromotionsByCategory(
  category: PromotionCategory | "all",
): Promotion[] {
  if (category === "all") return promotions;
  return promotions.filter((item) => item.category === category);
}

export function getRelatedPromotions(
  slug: string,
  limit = 3,
): Promotion[] {
  const current = getPromotionBySlug(slug);
  if (!current) return promotions.slice(0, limit);
  const sameCategory = promotions.filter(
    (item) => item.slug !== slug && item.category === current.category,
  );
  const others = promotions.filter(
    (item) => item.slug !== slug && item.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
