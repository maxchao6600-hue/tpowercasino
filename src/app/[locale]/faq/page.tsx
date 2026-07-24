import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqItems } from "@/data/faq";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { FaqBrowser } from "@/components/faq/faq-browser";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.faqPage.metaTitle,
    description: dictionary.faqPage.metaDescription,
    path: "/faq",
  });
}

export default async function FaqPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.faqPage.metaTitle, href: localePath(locale, "/faq") },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(
            faqItems.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            })),
          ),
        ]}
      />
      <PageHeader
        title={dictionary.faqPage.title}
        description={dictionary.faqPage.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="faq"
        brand={dictionary.common.brand}
      />
      <section className="section-y">
        <Container className="max-w-3xl">
          <FaqBrowser locale={locale} dictionary={dictionary} items={faqItems} />
        </Container>
      </section>
    </>
  );
}
