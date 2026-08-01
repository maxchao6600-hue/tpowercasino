import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { faqItems } from "@/data/faq";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLink } from "@/components/common/site-link";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.register.metaTitle,
    description: dictionary.register.metaDescription,
    path: "/register",
    noIndex: true,
  });
}

export default async function RegisterPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.register.metaTitle,
      href: localePath(locale, "/register"),
    },
  ];
  const faqs = faqItems.filter((item) => item.category === "account").slice(0, 5);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: dictionary.register.metaTitle,
            description: dictionary.register.metaDescription,
            path: "/register",
          }),
          faqSchema(
            faqs.map((item) => ({
              question: item.question[locale],
              answer: item.answer[locale],
            })),
          ),
        ]}
      />
      <PageHeader
        title={dictionary.register.title}
        description={dictionary.register.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="register"
        brand={dictionary.common.brand}
      />
      <section className="section-y">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {dictionary.register.headline}
          </h2>
          <div className="df-grid-3 mt-8">
              {dictionary.register.benefits.map((benefit) => (
                <Card key={benefit.title} className="h-full">
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
          <Button asChild size="lg" className="mt-10">
            <SiteLink href={localePath(locale, "/contact")}>
              {dictionary.register.cta}
            </SiteLink>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {dictionary.register.helper}{" "}
            <SiteLink
              href={localePath(locale, "/login")}
              className="font-semibold text-primary hover:underline"
            >
              {dictionary.register.helperLink}
            </SiteLink>
          </p>
          <Accordion
            type="single"
            collapsible
            className="mt-12 rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)]"
          >
            {faqs.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
                <AccordionContent>{item.answer[locale]}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.relatedPages}
            items={[
              {
                href: "/blog/how-to-register-tpower",
                label:
                  locale === "zh"
                    ? "如何注册 TPOWER"
                    : "How to register TPOWER",
              },
              { href: "/login", label: dictionary.nav.login },
              { href: "/promotions", label: dictionary.nav.promotions },
              { href: "/download", label: dictionary.nav.download },
              { href: "/payment-methods", label: dictionary.payments.title },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
