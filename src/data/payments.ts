import type { PaymentMethod } from "@/types";

export const paymentMethods: PaymentMethod[] = [
  {
    id: "fpx",
    name: "FPX",
    description: {
      en: "Direct online banking via major Malaysian banks with familiar checkout flows.",
      zh: "本地主流银行 FPX 直连，网银流程熟悉，入金安心快捷。",
    },
    type: "bank",
    minDeposit: "MYR 30",
    processing: {
      en: "Usually instant after bank confirmation",
      zh: "银行确认后通常秒到账",
    },
    logo: "/images/payments/fpx.png",
  },
  {
    id: "touch-n-go",
    name: "Touch 'n Go eWallet",
    description: {
      en: "Popular Malaysian e-wallet deposits for fast mobile top-ups.",
      zh: "Touch 'n Go 电子钱包，大马玩家常用，手机充值几分钟搞定。",
    },
    type: "ewallet",
    minDeposit: "MYR 30",
    processing: {
      en: "Typically within minutes",
      zh: "一般数分钟内到账",
    },
    logo: "/images/payments/touch-n-go.png",
  },
  {
    id: "grabpay",
    name: "GrabPay",
    description: {
      en: "Convenient e-wallet deposits using your GrabPay balance.",
      zh: "GrabPay 余额直接入金，日常出行用的钱包，充TPOWER官方平台也方便。",
    },
    type: "ewallet",
    minDeposit: "MYR 30",
    processing: {
      en: "Typically within minutes",
      zh: "一般数分钟内到账",
    },
    logo: "/images/payments/grabpay.png",
  },
  {
    id: "duitnow",
    name: "DuitNow",
    description: {
      en: "Real-time transfer rails widely used across Malaysian banking apps.",
      zh: "DuitNow 实时转账，各大银行 APP 都能用，大马玩家最熟悉的通道之一。",
    },
    type: "bank",
    minDeposit: "MYR 30",
    processing: {
      en: "Near real-time on successful transfer",
      zh: "转账成功即接近实时到账",
    },
    logo: "/images/payments/duitnow.png",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    description: {
      en: "Manual bank transfer option with verified account matching for withdrawals.",
      zh: "银行转账入金，账户资料须与提款户名一致，核验后更顺畅。",
    },
    type: "bank",
    minDeposit: "MYR 50",
    processing: {
      en: "Deposits after verification; withdrawals by banking window",
      zh: "存款核验后入账；提款按银行处理时段",
    },
    logo: "/images/payments/bank-transfer.png",
  },
  {
    id: "usdt",
    name: "USDT",
    description: {
      en: "Optional crypto rail for players who prefer stablecoin transfers.",
      zh: "USDT 稳定币通道，偏好加密转账的玩家可选用。",
    },
    type: "crypto",
    minDeposit: "USDT 20",
    processing: {
      en: "After required network confirmations",
      zh: "网络确认完成后到账",
    },
    logo: "/images/payments/usdt.png",
  },
];
