import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock3,
  Download,
  UserPlus,
  Wallet,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  offerSchema,
  organizationSchema,
} from "@/lib/schema";
import {
  getPromotionBySlug,
  getRelatedPromotions,
  promotions,
} from "@/data/promotions";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/common/json-ld";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { Container } from "@/components/common/container";
import { TrustBar } from "@/components/common/trust-bar";
import { PageFaq } from "@/components/seo/page-faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PromotionCard } from "@/components/promotions/promotion-card";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    promotions.map((promo) => ({ locale, slug: promo.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const promo = getPromotionBySlug(slug);
  if (!promo) return {};
  return buildMetadata({
    locale,
    title: `${promo.title[locale]} | TPOWER Promotions`,
    description: promo.summary[locale],
    path: `/promotions/${promo.slug}`,
    image: promo.image,
  });
}

export default async function PromotionDetailPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const promo = getPromotionBySlug(slug);
  if (!promo) notFound();

  const related = getRelatedPromotions(promo.slug, 2);
  const t = dictionary.promotions;

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.promotions.metaTitle,
      href: localePath(locale, "/promotions"),
    },
    {
      name: promo.title[locale],
      href: localePath(locale, `/promotions/${promo.slug}`),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          offerSchema({
            name: promo.title[locale],
            description: promo.summary[locale],
            url: `/${locale}/promotions/${promo.slug}`,
            image: promo.image,
            validThrough: promo.expiresAt,
            category: dictionary.promotions.categories[promo.category],
          }),
        ]}
      />

      <section className="relative overflow-hidden bg-[#090909]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(229,9,20,0.2), transparent 60%)",
          }}
        />
        <Container className="relative py-10 md:py-14">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">
                  {dictionary.promotions.categories[promo.category]}
                </Badge>
                <Badge variant="outline">{promo.badge[locale]}</Badge>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {promo.title[locale]}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                {promo.summary[locale]}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={localePath(locale, "/register")}>
                    <UserPlus className="h-4 w-4" aria-hidden="true" />
                    {dictionary.nav.register}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href={localePath(locale, "/download")}>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {dictionary.nav.download}
                  </Link>
                </Button>
              </div>
            </div>
            <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card/80 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t.bonusAmountLabel}
                </dt>
                <dd className="mt-1 font-bold text-foreground">
                  {promo.bonusAmount[locale]}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-4">
                <dt className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.minDepositLabel}
                </dt>
                <dd className="mt-1 font-bold text-foreground">
                  {promo.minDeposit[locale]}
                </dd>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 p-4">
                <dt className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {dictionary.common.expires}
                </dt>
                <dd className="mt-1 font-bold text-foreground">
                  {formatDate(promo.expiresAt, locale)}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-border bg-muted shadow-[0_0_40px_rgba(229,9,20,0.12)]">
              <Image
                src={promo.image}
                alt={promo.imageAlt[locale]}
                title={promo.title[locale]}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            <section>
              <h2 className="h3-display text-foreground">{t.detailOverview}</h2>
              <p className="mt-4 text-body leading-relaxed text-muted-foreground">
                {promo.overview[locale]}
              </p>
              <p className="mt-4 text-body leading-relaxed text-muted-foreground">
                {promo.description[locale]}
              </p>
            </section>

            <section>
              <h2 className="h3-display text-foreground">
                {t.detailEligibility}
              </h2>
              <ul className="mt-5 space-y-3">
                {promo.eligibility.map((item) => (
                  <li
                    key={item.en}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="h3-display text-foreground">
                {t.detailBonusDetails}
              </h2>
              <ul className="mt-5 space-y-3">
                {promo.bonusDetails.map((item) => (
                  <li
                    key={item.en}
                    className="rounded-2xl border border-border bg-card px-5 py-4 text-muted-foreground"
                  >
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] border border-border bg-card p-6 md:p-8">
              <h2 className="h3-display text-foreground">{t.detailTerms}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {promo.terms[locale]}
              </p>
            </section>

            <section>
              <h2 className="h3-display text-foreground">
                {t.detailHowToClaim}
              </h2>
              <ol className="mt-5 space-y-4">
                {promo.howToClaim.map((step, index) => (
                  <li
                    key={step.en}
                    className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-muted-foreground">{step[locale]}</p>
                  </li>
                ))}
              </ol>
            </section>

            {promo.faqs.length > 0 ? (
              <PageFaq
                locale={locale}
                title={t.detailFaq}
                items={promo.faqs}
              />
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl font-bold text-foreground">
                {t.detailRegisterCtaTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.detailRegisterCtaDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <Link href={localePath(locale, "/register")}>
                    {dictionary.nav.register}
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href={localePath(locale, "/login")}>
                    {dictionary.nav.login}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={localePath(locale, "/download")}>
                    {dictionary.nav.download}
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={localePath(locale, "/promotions")}>
                    {dictionary.common.viewAll}
                  </Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5 text-sm">
                <Link
                  href={localePath(locale, "/vip")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.vip.metaTitle}
                </Link>
                <Link
                  href={localePath(locale, "/games")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.nav.games}
                </Link>
                <Link
                  href={localePath(locale, "/providers")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.providers.metaTitle}
                </Link>
                <Link
                  href={localePath(locale, "/responsible-gaming")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.responsible.metaTitle}
                </Link>
                <Link
                  href={localePath(locale, "/news")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.news.metaTitle}
                </Link>
                <Link
                  href={localePath(locale, "/blog")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.nav.blog}
                </Link>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section-y border-t border-border bg-card">
          <Container>
            <h2 className="h2-display text-foreground">{t.detailRelated}</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {related.map((item) => (
                <PromotionCard
                  key={item.id}
                  locale={locale}
                  dictionary={dictionary}
                  promo={item}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
