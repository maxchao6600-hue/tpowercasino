import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { PaymentHub } from "@/components/payments/payment-hub";
import { paymentDepositGuide } from "@/data/payments-center/deposit-guide";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: paymentDepositGuide.metaTitle[locale],
    description: paymentDepositGuide.metaDescription[locale],
    path: paymentDepositGuide.path,
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
      content={paymentDepositGuide}
    />
  );
}
