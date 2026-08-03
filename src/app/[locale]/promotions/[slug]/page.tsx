import type { Metadata } from "next";
import Image from "next/image";
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
import { SiteLink } from "@/components/common/site-link";

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
          <div className="mt-8 df-scroll">
          <div className="grid min-w-[800px] grid-cols-[1.15fr_0.85fr] items-end gap-3 sm:gap-6 lg:gap-8 xl:min-w-0">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">
                  {dictionary.promotions.categories[promo.category]}
                </Badge>
                <Badge variant="outline">{promo.badge[locale]}</Badge>
              </div>
              <h1 className="h1-display mt-3 text-foreground sm:mt-5">
                {promo.title[locale]}
              </h1>
              <p className="text-lead mt-2 max-w-2xl text-muted-foreground sm:mt-4">
                {promo.summary[locale]}
              </p>
              <div className="df-actions mt-4 sm:mt-8">
                <Button asChild size="lg" className="whitespace-nowrap">
                  <SiteLink href={localePath(locale, "/register")}>
                    <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {dictionary.nav.register}
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  <SiteLink href={localePath(locale, "/download")}>
                    <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {dictionary.nav.download}
                  </SiteLink>
                </Button>
              </div>
            </div>
            <dl className="df-scroll flex min-w-0 gap-2 lg:grid lg:grid-cols-3 lg:gap-3 lg:overflow-visible">
              <div className="min-w-[112px] shrink-0 rounded-xl border border-border bg-card/80 p-2 lg:min-w-0 lg:shrink lg:rounded-2xl lg:p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-normal text-muted-foreground sm:text-xs sm:tracking-wide">
                  {t.bonusAmountLabel}
                </dt>
                <dd className="mt-0.5 break-words text-sm font-bold leading-snug text-foreground sm:mt-1 sm:text-base">
                  {promo.bonusAmount[locale]}
                </dd>
              </div>
              <div className="min-w-[112px] shrink-0 rounded-xl border border-border bg-card/80 p-2 lg:min-w-0 lg:shrink lg:rounded-2xl lg:p-4">
                <dt className="flex flex-wrap items-center gap-1 text-[10px] font-semibold uppercase tracking-normal text-muted-foreground sm:text-xs sm:tracking-wide">
                  <Wallet className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                  {t.minDepositLabel}
                </dt>
                <dd className="mt-0.5 break-words text-sm font-bold leading-snug text-foreground sm:mt-1 sm:text-base">
                  {promo.minDeposit[locale]}
                </dd>
              </div>
              <div className="min-w-[112px] shrink-0 rounded-xl border border-border bg-card/80 p-2 lg:min-w-0 lg:shrink lg:rounded-2xl lg:p-4">
                <dt className="flex flex-wrap items-center gap-1 text-[10px] font-semibold uppercase tracking-normal text-muted-foreground sm:text-xs sm:tracking-wide">
                  <Clock3 className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                  {dictionary.common.expires}
                </dt>
                <dd className="mt-0.5 break-words text-sm font-bold leading-snug text-foreground sm:mt-1 sm:text-base">
                  {formatDate(promo.expiresAt, locale)}
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="section-y">
        <Container className="df-scroll min-w-0 max-w-full">
        <div className="grid min-w-[800px] grid-cols-[1.2fr_0.8fr] gap-3 sm:gap-6 lg:gap-10 xl:min-w-0">
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

          <aside className="min-w-0 space-y-3 sm:space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-6">
              <h2 className="text-xl font-bold text-foreground">
                {t.detailRegisterCtaTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.detailRegisterCtaDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <SiteLink href={localePath(locale, "/register")}>
                    {dictionary.nav.register}
                  </SiteLink>
                </Button>
                <Button asChild variant="secondary">
                  <SiteLink href={localePath(locale, "/login")}>
                    {dictionary.nav.login}
                  </SiteLink>
                </Button>
                <Button asChild variant="outline">
                  <SiteLink href={localePath(locale, "/download")}>
                    {dictionary.nav.download}
                  </SiteLink>
                </Button>
                <Button asChild variant="ghost">
                  <SiteLink href={localePath(locale, "/promotions")}>
                    {dictionary.common.viewAll}
                  </SiteLink>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5 text-sm">
                <SiteLink
                  href={localePath(locale, "/vip")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.vip.metaTitle}
                </SiteLink>
                <SiteLink
                  href={localePath(locale, "/games")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.nav.games}
                </SiteLink>
                <SiteLink
                  href={localePath(locale, "/providers")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.providers.metaTitle}
                </SiteLink>
                <SiteLink
                  href={localePath(locale, "/responsible-gaming")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.responsible.metaTitle}
                </SiteLink>
                <SiteLink
                  href={localePath(locale, "/news")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.news.metaTitle}
                </SiteLink>
                <SiteLink
                  href={localePath(locale, "/blog")}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {dictionary.nav.blog}
                </SiteLink>
              </div>
            </div>
          </aside>
        </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section-y border-t border-border bg-card">
          <Container>
            <h2 className="h2-display text-foreground">{t.detailRelated}</h2>
            <div className="df-row-2 mt-8">
              <div className="df-grid-2">
                {related.map((item) => (
                  <PromotionCard
                    key={item.id}
                    locale={locale}
                    dictionary={dictionary}
                    promo={item}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
