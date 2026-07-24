import type { LocalizedString } from "@/types";

export type VipFeatureMedia = {
  imageSrc: string;
  imageAlt: LocalizedString;
  summary: LocalizedString;
};

/** Presentation layer for Why Join + Complete Benefits — full EEAT bodies stay in vip-page-content. */
export const vipFeatureMedia: Record<string, VipFeatureMedia> = {
  manager: {
    imageSrc: "/images/vip/vip-manager.webp",
    imageAlt: {
      en: "TPOWER VIP manager assisting a player in a premium dark lounge",
      zh: "TPOWER VIP 管家在高端暗色贵宾厅协助玩家",
    },
    summary: {
      en: "Higher tiers unlock a dedicated VIP manager who already knows your verification status, preferred games, and reward calendar — so support stays continuous, discreet, and precise instead of ticket roulette.",
      zh: "更高的等级对接专属 VIP 管家，对方已掌握验证状态、常玩游戏与奖励日历，服务连续、低调、准确，而不是工单轮盘。",
    },
  },
  withdrawals: {
    imageSrc: "/images/vip/vip-withdrawal.webp",
    imageAlt: {
      en: "Successful mobile withdrawal confirmation in a premium casino setting",
      zh: "高端场景下手机提现成功确认画面",
    },
    summary: {
      en: "VIP cashouts enter a priority review lane once KYC and payout ownership match. Banking windows still apply — but your request moves ahead of standard volume with clearer document follow-up.",
      zh: "KYC 与出款归属核对后，VIP 提现进入优先审核。银行窗口仍在，但排队优于普通量，缺件说明也更清楚。",
    },
  },
  promotions: {
    imageSrc: "/images/vip/vip-invitation.webp",
    imageAlt: {
      en: "Luxury VIP invitation card for exclusive TPOWER promotions",
      zh: "TPOWER 专属优惠的高端 VIP 邀请函",
    },
    summary: {
      en: "VIP members access a quieter calendar of birthday packs, reloads, cashback boosts, tournaments, and private campaigns — always with published wagering, contribution, and expiry before you opt in.",
      zh: "VIP 可进入更安静的日历：生日礼、充值礼、返水加码、赛事与私密活动；领取前仍有清晰流水、贡献与到期说明。",
    },
  },
  cashback: {
    imageSrc: "/images/vip/vip-cashback.webp",
    imageAlt: {
      en: "Premium wallet cashback moment with soft red casino lighting",
      zh: "红黑氛围下的高端钱包返水场景",
    },
    summary: {
      en: "Higher tiers unlock stronger cashback on eligible activity within published windows. Contribution still varies by game type — pair VIP rates with personal limits for sustainable value.",
      zh: "更高等级在公布周期内享有更强合资格返水；贡献仍按游戏类型区分，请搭配个人限额，让价值可持续。",
    },
  },
  "priority-withdrawals": {
    imageSrc: "/images/vip/vip-withdrawal.webp",
    imageAlt: {
      en: "Priority VIP withdrawal success on mobile in a dark luxury setting",
      zh: "暗色奢华场景中的 VIP 优先提现成功画面",
    },
    summary: {
      en: "Silver, Gold, and Platinum escalate withdrawal review priority after clean checks. Keep names matched and use official cashier flows so priority review stays fast and predictable.",
      zh: "白银、黄金、铂金在资料齐全后逐步提升提现审核优先级。姓名一致、走官方收银，优先通道才又快又稳。",
    },
  },
  birthday: {
    imageSrc: "/images/vip/vip-birthday.webp",
    imageAlt: {
      en: "Premium VIP birthday gift box with deep red ribbon",
      zh: "深红色丝带的高端 VIP 生日礼盒",
    },
    summary: {
      en: "Verified birthdays unlock tier-scaled gifts — from Silver acknowledgement to Gold packs and Platinum host-arranged presents. Check expiry and wagering before you play the gift through.",
      zh: "生日资料核验后按等级解锁礼遇：白银问候礼、黄金礼包，到铂金管家安排礼物。开玩前先看有效期与流水。",
    },
  },
  monthly: {
    imageSrc: "/images/vip/vip-chips.webp",
    imageAlt: {
      en: "Premium casino chips stacked under soft red spotlight",
      zh: "红色聚光下的高端赌场筹码叠放",
    },
    summary: {
      en: "Monthly bonuses create a predictable VIP rhythm — appreciation reloads for Silver, stronger calendars for Gold, and host-curated value for Platinum when standing justifies it.",
      zh: "每月红利形成可预期节奏：白银答谢/充值加码，黄金日历更强，铂金在状态达标时可获管家精选价值。",
    },
  },
  "weekly-cashback": {
    imageSrc: "/images/vip/vip-cashback.webp",
    imageAlt: {
      en: "Weekly VIP cashback reflected on wallet and mobile",
      zh: "钱包与手机呈现的 VIP 每周返水",
    },
    summary: {
      en: "Weekly cashback shortens the feedback loop on eligible play. Stronger tier rates still follow contribution tables — claim promptly and treat credits as planned entertainment, not house money.",
      zh: "每周返水缩短合资格娱乐的反馈周期。更高等级比例更高，但仍看贡献表；请及时领取，并把额度当有计划的娱乐。",
    },
  },
  "personal-manager": {
    imageSrc: "/images/vip/vip-manager.webp",
    imageAlt: {
      en: "Personal TPOWER VIP host providing discreet high-touch service",
      zh: "TPOWER 私人 VIP 管家提供低调高规格服务",
    },
    summary: {
      en: "Platinum hosting consolidates promotions, withdrawals, and event invites into one relationship via official chat, WhatsApp, or Telegram — never through cold social DMs.",
      zh: "铂金管家把优惠、提现与活动邀请收敛到一段官方关系：聊天、WhatsApp 或 Telegram，绝非陌生社交私信。",
    },
  },
  "exclusive-events": {
    imageSrc: "/images/vip/vip-invitation.webp",
    imageAlt: {
      en: "Exclusive VIP event invitation with luxury black and gold styling",
      zh: "黑金风格的 VIP 专属活动邀请",
    },
    summary: {
      en: "From seasonal VIP notes to invitation tournaments and private experiences, exclusive events are optional appreciation — decline anytime without harming your standing.",
      zh: "从季节 VIP 提醒到邀请制赛事与私人体验，专属活动都是可选答谢；拒绝不会影响等级。",
    },
  },
  "dedicated-support": {
    imageSrc: "/images/vip/vip-support.webp",
    imageAlt: {
      en: "24/7 dedicated VIP live support specialist at a modern dark desk",
      zh: "现代暗色工作台前的全天 VIP 专属在线支持",
    },
    summary: {
      en: "Priority live chat, dedicated VIP channels, and personal assistance scale with tier. Always enter from official lobby or app paths — spoofed “managers” on social media are a risk.",
      zh: "优先在线客服、专属 VIP 通道与专人协助随等级升级。请只从官方大厅或 APP 进入——社交平台假管家是风险。",
    },
  },
  "private-promotions": {
    imageSrc: "/images/vip/vip-private.webp",
    imageAlt: {
      en: "Private luxury VIP campaign invitation on a dark lacquer tray",
      zh: "深色漆盘上的私密高端 VIP 活动邀请",
    },
    summary: {
      en: "Private campaigns arrive quietly with full terms attached. Accept only when structure matches your games and limits — skipping a mismatch is smart VIP behaviour.",
      zh: "私密活动安静送达并附完整条款。只有结构匹配你的游戏与限额时才接受；跳过不合适的方案更聪明。",
    },
  },
};
