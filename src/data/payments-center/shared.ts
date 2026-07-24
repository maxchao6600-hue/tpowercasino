import type { PaymentRelatedLink } from "./types";

export const paymentClusterLinks: PaymentRelatedLink[] = [
  { href: "/deposit-guide", label: { en: "Deposit Guide", zh: "存款指南" } },
  { href: "/withdrawal-guide", label: { en: "Withdrawal Guide", zh: "提款指南" } },
  { href: "/payment-methods", label: { en: "Payment Methods", zh: "支付方式" } },
  { href: "/fpx-deposit", label: { en: "FPX Deposit", zh: "FPX存款" } },
  { href: "/duitnow-deposit", label: { en: "DuitNow Deposit", zh: "DuitNow存款" } },
  { href: "/touch-n-go", label: { en: "Touch 'n Go", zh: "Touch 'n Go电子钱包" } },
  { href: "/grabpay", label: { en: "GrabPay Payments", zh: "GrabPay支付" } },
  { href: "/online-banking", label: { en: "Online Banking", zh: "网上银行" } },
  { href: "/instant-deposit", label: { en: "Instant Deposit", zh: "即时存款" } },
  { href: "/fast-withdrawal", label: { en: "Fast Withdrawal", zh: "快速提款" } },
  { href: "/payment-security", label: { en: "Payment Security", zh: "支付安全" } },
  {
    href: "/deposit-withdrawal-faq",
    label: { en: "Deposit & Withdrawal FAQ", zh: "存提款常见问题" },
  },
];

export const paymentCoreLinks: PaymentRelatedLink[] = [
  { href: "/", label: { en: "TPOWER Home", zh: "TPOWER官网首页" } },
  { href: "/register", label: { en: "Register", zh: "注册" } },
  { href: "/login", label: { en: "Login", zh: "登录" } },
  { href: "/download", label: { en: "Download App", zh: "APP下载" } },
  { href: "/vip", label: { en: "VIP Club", zh: "VIP俱乐部" } },
  { href: "/promotions", label: { en: "Promotions", zh: "优惠专区" } },
  {
    href: "/responsible-gaming",
    label: { en: "Responsible Gaming", zh: "负责任博彩" },
  },
  { href: "/contact", label: { en: "Support Center", zh: "客服中心" } },
  { href: "/blog", label: { en: "Knowledge Center", zh: "知识中心" } },
  { href: "/news", label: { en: "Newsroom", zh: "新闻室" } },
  { href: "/faq", label: { en: "FAQ", zh: "常见问题" } },
  {
    href: "/blog/how-to-deposit-tpower",
    label: { en: "Deposit Blog Guide", zh: "存款攻略文章" },
  },
  {
    href: "/blog/how-to-withdraw-tpower",
    label: { en: "Withdrawal Blog Guide", zh: "提款攻略文章" },
  },
];

export function withPaymentRelated(
  extra: PaymentRelatedLink[] = [],
): PaymentRelatedLink[] {
  const seen = new Set<string>();
  const merged = [...extra, ...paymentClusterLinks, ...paymentCoreLinks];
  return merged.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}
