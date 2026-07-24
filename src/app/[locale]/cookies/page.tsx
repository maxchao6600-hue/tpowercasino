import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { getCookieSections } from "@/lib/legal-content";
import { JsonLd } from "@/components/common/json-ld";
import { LegalPage } from "@/components/common/legal-page";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.legal.cookiesTitle,
    description: dictionary.legal.cookiesDescription,
    path: "/cookies",
  });
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.legal.cookiesTitle,
      href: localePath(locale, "/cookies"),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <LegalPage
        title={dictionary.legal.cookiesTitle}
        description={dictionary.legal.cookiesDescription}
        breadcrumbs={breadcrumbs}
        sections={getCookieSections(locale)}
      />
    </>
  );
}
