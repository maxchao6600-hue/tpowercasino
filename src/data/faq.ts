import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    id: "create-account",
    category: "account",
    question: {
      en: "How do I create a TPOWER account?",
      zh: "TPOWER怎么注册？",
    },
    answer: {
      en: "Open the registration flow, provide accurate personal details, verify your contact information, and complete any required identity checks before depositing. Accurate details help protect your account and speed up withdrawals.",
      zh: "走官方注册入口，资料填真实的，联系方式先验证好。存款前按提示完成核验。资料准，提现才快。",
    },
  },
  {
    id: "age-requirement",
    category: "account",
    question: {
      en: "What is the minimum age to play?",
      zh: "TPOWER几岁可以玩？",
    },
    answer: {
      en: "Players must be at least 21 years old. TPOWER may request verification documents to confirm eligibility and protect younger users from access.",
      zh: "须年满21岁。平台可能要求身份证明，不合资格进不来。",
    },
  },
  {
    id: "deposit-methods",
    category: "payments",
    question: {
      en: "Which deposit methods are available in Malaysia?",
      zh: "TPOWER支持哪些银行和钱包？",
    },
    answer: {
      en: "TPOWER supports common local rails including FPX, popular e-wallets, DuitNow-style transfers, and bank transfer options. Availability can vary by account status and maintenance windows.",
      zh: "常见有FPX、主流电子钱包、DuitNow类转账与银行转账。个别通道会随账户状态或维护调整。",
    },
  },
  {
    id: "withdrawal-time",
    category: "payments",
    question: {
      en: "How long do withdrawals take?",
      zh: "TPOWER可以提现吗？要多久？",
    },
    answer: {
      en: "Once approved, timing depends on the selected payout method and banking windows. Verified accounts with matching beneficiary details are processed faster. VIP members receive priority review.",
      zh: "可以提现。审核通过后看你选的渠道与银行窗口。资料核对过的账户更快，VIP优先审。",
    },
  },
  {
    id: "game-fairness",
    category: "games",
    question: {
      en: "Are games fair and from real providers?",
      zh: "TPOWER有真人视讯吗？游戏靠谱吗？",
    },
    answer: {
      en: "Yes. TPOWER lists games from established providers. Each title retains the provider's published rules and mathematics. We do not alter game outcomes on the platform side.",
      zh: "有真人视讯，也有老虎机。游戏来自成熟供应商，规则按官方公布，平台不改结果。",
    },
  },
  {
    id: "bonus-terms",
    category: "games",
    question: {
      en: "Where can I find bonus terms before opting in?",
      zh: "TPOWER有哪些优惠？条款在哪看？",
    },
    answer: {
      en: "Every promotion page and opt-in panel displays wagering requirements, contribution rules, expiry windows, and eligibility conditions before activation.",
      zh: "欢迎奖金、返水、每日优惠都在优惠专区。领取前会看到流水、有效期与资格，先看完再领。",
    },
  },
  {
    id: "account-security",
    category: "security",
    question: {
      en: "How does TPOWER protect my account?",
      zh: "TPOWER靠谱吗？账户安全吗？",
    },
    answer: {
      en: "We use encrypted transport, secure session handling, monitoring for suspicious activity, and verification steps for sensitive account changes and withdrawals.",
      zh: "官方平台走加密与安全会话，异常会监控。改资料或提现还要再核验，不是随便进出。",
    },
  },
  {
    id: "responsible-tools",
    category: "security",
    question: {
      en: "What responsible gaming tools are available?",
      zh: "想冷静一下有什么工具？",
    },
    answer: {
      en: "Players can use deposit limits, reality checks, time-outs, and self-exclusion pathways. Our Responsible Gaming page explains how to request these controls.",
      zh: "可设存款限额、提醒、冷静期与自我排除。负责任博彩页有申请说明。",
    },
  },
  {
    id: "vip-qualify",
    category: "vip",
    question: {
      en: "How do I qualify for VIP?",
      zh: "TPOWER VIP怎么升？有什么好处？",
    },
    answer: {
      en: "VIP progression is based on consistent eligible activity and account standing. Higher tiers unlock personal hosting, improved reward structures, and priority operations.",
      zh: "看合资格活跃与账户状态。等级越高，管家、VIP优惠与优先处理越到位。",
    },
  },
  {
    id: "support-languages",
    category: "account",
    question: {
      en: "Does support speak English and Chinese?",
      zh: "客服会讲华语吗？",
    },
    answer: {
      en: "Yes. TPOWER support assists players in English and Chinese across account, payment, and platform questions.",
      zh: "会。中英都能问注册、充值、提现与APP问题。",
    },
  },
  {
    id: "download-platforms",
    category: "download",
    question: {
      en: "Which platforms does the TPOWER app support?",
      zh: "TPOWER手机版怎么下载？支持什么系统？",
    },
    answer: {
      en: "The TPOWER app is available for Android and iOS. Desktop users can use the QR panel on the Download page to open the official install path on their phone.",
      zh: "支持Android与iOS。去下载页点系统按钮，或用电脑扫码装手机版。APK请走官方指引，别装不明包。",
    },
  },
  {
    id: "download-login",
    category: "download",
    question: {
      en: "Can I use the same account on web and app?",
      zh: "APP和网页是同一个TPOWER账号吗？",
    },
    answer: {
      en: "Yes. Your TPOWER credentials work across web and mobile app experiences after secure sign-in.",
      zh: "是同一个。安全登录后，网页与APP共用一套账号。",
    },
  },
];

export function getFaqsByCategory(category?: FaqItem["category"]): FaqItem[] {
  if (!category) return faqItems;
  return faqItems.filter((item) => item.category === category);
}
