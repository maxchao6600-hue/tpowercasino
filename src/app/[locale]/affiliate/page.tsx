import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.affiliate.metaTitle,
    description: dictionary.affiliate.metaDescription,
    path: "/affiliate",
  });
}

export default async function AffiliatePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.affiliate.metaTitle,
      href: localePath(locale, "/affiliate"),
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHeader
        title={dictionary.affiliate.title}
        description={dictionary.affiliate.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="affiliate"
        brand={dictionary.common.brand}
      />
      <Section title={dictionary.affiliate.benefitsTitle}>
        <div className="grid gap-5 md:grid-cols-2">
          {dictionary.affiliate.benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild size="lg">
            <Link href={localePath(locale, "/contact")}>
              {dictionary.common.contactSupport}
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
