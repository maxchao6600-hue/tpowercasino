import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { AuthorityHub } from "@/components/authority/authority-hub";
import { authorityAmlKyc } from "@/data/authority/aml-kyc";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: authorityAmlKyc.metaTitle[locale],
    description: authorityAmlKyc.metaDescription[locale],
    path: authorityAmlKyc.path,
  });
}

export default async function AmlKycPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return (
    <AuthorityHub
      locale={locale}
      dictionary={dictionary}
      content={authorityAmlKyc}
    />
  );
}
