import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { AuthorityHub } from "@/components/authority/authority-hub";
import { authorityCustomerCommitment } from "@/data/authority/customer-commitment";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: authorityCustomerCommitment.metaTitle[locale],
    description: authorityCustomerCommitment.metaDescription[locale],
    path: authorityCustomerCommitment.path,
  });
}

export default async function CustomerCommitmentPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return (
    <AuthorityHub
      locale={locale}
      dictionary={dictionary}
      content={authorityCustomerCommitment}
    />
  );
}
