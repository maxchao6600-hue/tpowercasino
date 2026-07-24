import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { AuthorityHub } from "@/components/authority/authority-hub";
import { authorityEditorial } from "@/data/authority/editorial";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  return buildMetadata({
    locale,
    title: authorityEditorial.metaTitle[locale],
    description: authorityEditorial.metaDescription[locale],
    path: authorityEditorial.path,
  });
}

export default async function EditorialPolicyPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return (
    <AuthorityHub
      locale={locale}
      dictionary={dictionary}
      content={authorityEditorial}
    />
  );
}
