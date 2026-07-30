import type { Metadata } from "next";
import Link from "next/link";
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
import { Logo } from "@/components/layout/logo";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dictionary.login.metaTitle,
    description: dictionary.login.metaDescription,
    path: "/login",
    noIndex: true,
  });
}

export default async function LoginPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.login.metaTitle, href: localePath(locale, "/login") },
  ];
  const faqs = faqItems.filter((item) => item.category === "account").slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: dictionary.login.metaTitle,
            description: dictionary.login.metaDescription,
            path: "/login",
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
        title={dictionary.login.title}
        description={dictionary.login.subtitle}
        breadcrumbs={breadcrumbs}
        atmosphere="login"
        brand={dictionary.common.brand}
      />
      <section className="section-y">
        <Container className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-10">
          <div className="min-w-0 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:rounded-3xl sm:p-8">
            <Logo href={localePath(locale)} />
            <h2 className="h2-display mt-4 text-foreground sm:mt-8">
              {dictionary.login.headline}
            </h2>
            <ul className="mt-6 space-y-3">
              {dictionary.login.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link href={localePath(locale, "/blog/tpower-login-guide")}>
                {dictionary.login.cta}
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              {dictionary.login.helper}{" "}
              <Link
                href={localePath(locale, "/contact")}
                className="font-semibold text-primary hover:underline"
              >
                {dictionary.login.helperLink}
              </Link>
            </p>
          </div>
          <div className="min-w-0 space-y-3 sm:space-y-6">
            <Accordion
              type="single"
              collapsible
              className="rounded-xl border border-border bg-card px-3 shadow-[var(--shadow-soft)] sm:rounded-2xl sm:px-5"
            >
              {faqs.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question[locale]}</AccordionTrigger>
                  <AccordionContent>{item.answer[locale]}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href={localePath(locale, "/register")} className="font-semibold text-primary">
                {dictionary.nav.register}
              </Link>
              <Link href={localePath(locale, "/faq")} className="font-semibold text-primary">
                {dictionary.nav.faq}
              </Link>
              <Link href={localePath(locale, "/contact")} className="font-semibold text-primary">
                {dictionary.nav.contact}
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <RelatedLinks
              locale={locale}
              title={dictionary.seo.relatedPages}
              items={[
                {
                  href: "/blog/tpower-login-guide",
                  label:
                    locale === "zh" ? "TPOWER 登录指南" : "TPOWER login guide",
                },
                { href: "/register", label: dictionary.nav.register },
                { href: "/download", label: dictionary.nav.download },
                { href: "/promotions", label: dictionary.nav.promotions },
                { href: "/faq", label: dictionary.nav.faq },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
