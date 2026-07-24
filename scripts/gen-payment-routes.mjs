import fs from "node:fs";
import path from "node:path";

const routes = [
  ["deposit-guide", "paymentDepositGuide", "deposit-guide"],
  ["withdrawal-guide", "paymentWithdrawalGuide", "withdrawal-guide"],
  ["fpx-deposit", "paymentFpxDeposit", "fpx-deposit"],
  ["duitnow-deposit", "paymentDuitnowDeposit", "duitnow-deposit"],
  ["touch-n-go", "paymentTouchNGo", "touch-n-go"],
  ["grabpay", "paymentGrabPay", "grabpay"],
  ["online-banking", "paymentOnlineBanking", "online-banking"],
  ["instant-deposit", "paymentInstantDeposit", "instant-deposit"],
  ["fast-withdrawal", "paymentFastWithdrawal", "fast-withdrawal"],
  ["payment-security", "paymentSecurityPage", "payment-security"],
  [
    "deposit-withdrawal-faq",
    "paymentDepositWithdrawalFaq",
    "deposit-withdrawal-faq",
  ],
];

for (const [slug, exp, file] of routes) {
  const dir = path.join("src/app/[locale]", slug);
  fs.mkdirSync(dir, { recursive: true });
  const content = `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { PaymentHub } from "@/components/payments/payment-hub";
import { ${exp} } from "@/data/payments-center/${file}";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: ${exp}.metaTitle[locale],
    description: ${exp}.metaDescription[locale],
    path: ${exp}.path,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return (
    <PaymentHub
      locale={locale}
      dictionary={dictionary}
      content={${exp}}
    />
  );
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), content);
  console.log("ok", slug);
}
