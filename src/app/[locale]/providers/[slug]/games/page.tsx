import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  collectionPageSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import { getGamesByProvider, getRealGameCountByProvider } from "@/data/games";
import {
  getProviderBySlug,
  getRelatedProviders,
  providers,
} from "@/data/providers";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { RelatedLinks } from "@/components/seo/related-links";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
import { ProviderGamesLibrary } from "@/components/providers/provider-games-library";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    providers.map((provider) => ({ locale, slug: provider.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const provider = getProviderBySlug(slug);
  if (!provider) return {};
  const dictionary = getDictionary(locale);
  const t = dictionary.providers.gamesLibrary;
  const title = `${provider.name} ${t.metaTitleSuffix}`;
  const description = t.metaDescription.replace("{provider}", provider.name);
  const gameCount = getGamesByProvider(provider.slug).length;

  return buildMetadata({
    locale,
    title,
    description,
    path: `/providers/${provider.slug}/games`,
    image: provider.logo ?? "/images/cta/tpower-lobby-cta.webp",
    imageAlt: `${provider.name} games on TPOWER`,
    keywords:
      locale === "zh"
        ? [
            `${provider.name} 游戏`,
            "TPOWER线上博彩",
            "官方合作游戏厂商",
            "老虎机",
            "真人视讯",
            "捕鱼游戏",
          ]
        : [
            `${provider.name} games`,
            "TPOWER Online Casino",
            "Malaysia Online Casino",
            "slots",
            "live casino",
            "fishing games",
            `${gameCount} games`,
          ],
  });
}

export default async function ProviderGamesPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const t = dictionary.providers.gamesLibrary;
  const providerGames = getGamesByProvider(provider.slug);
  const realGameCount = getRealGameCountByProvider(provider.slug);
  const related = getRelatedProviders(provider.slug, 4);

  const title = `${provider.name} ${t.metaTitleSuffix}`;
  const description = t.metaDescription.replace("{provider}", provider.name);

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.providers.heroH1,
      href: localePath(locale, "/providers"),
    },
    {
      name: provider.name,
      href: localePath(locale, `/providers/${provider.slug}`),
    },
    {
      name: t.viewAllGames,
      href: localePath(locale, `/providers/${provider.slug}/games`),
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: title,
            description,
            path: `/providers/${provider.slug}/games`,
          }),
          collectionPageSchema({
            name: title,
            description,
            url: localePath(locale, `/providers/${provider.slug}/games`),
          }),
        ]}
      />

      <PageHeader
        title={`${provider.name} ${locale === "zh" ? "游戏全集" : "Games"}`}
        description={t.heroDescription.replace("{provider}", provider.name)}
        breadcrumbs={breadcrumbs}
        atmosphere="providers"
        brand={dictionary.common.brand}
      />

      <section className="section-y pt-8 md:pt-10">
        <Container>
          <div className="mb-8 grid grid-cols-[1fr_auto] items-center gap-5 rounded-[24px] border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-[60px] w-[120px] items-center justify-center rounded-2xl border border-border bg-muted/40 px-3">
                <ProviderLogoMark
                  name={provider.name}
                  logo={provider.logo}
                  variant="card"
                  className="h-full w-full [&_img]:h-10 [&_img]:max-h-10 [&_img]:max-w-[100px]"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {t.heroEyebrow}
                </p>
                <h2 className="mt-1 text-xl font-bold text-foreground md:text-2xl">
                  {provider.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {realGameCount > 0 ? (
                    <>
                      <span className="font-semibold tabular-nums text-foreground">
                        {realGameCount}
                      </span>{" "}
                      {t.gamesCountLabel}
                    </>
                  ) : (
                    <span className="font-semibold text-foreground">
                      {t.gamesAvailableAfterLogin}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{dictionary.providers.officialBadge}</Badge>
              {provider.categories.map((category) => (
                <Badge key={category} variant="outline">
                  {dictionary.games.categories[category]}
                </Badge>
              ))}
              <Button asChild variant="outline" size="sm" className="ml-auto md:ml-2">
                <Link href={localePath(locale, `/providers/${provider.slug}`)}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {t.backToProvider}
                </Link>
              </Button>
            </div>
          </div>

          <ProviderGamesLibrary
            locale={locale}
            dictionary={dictionary}
            games={providerGames}
            providerName={provider.name}
          />

          <div className="mt-16">
            <RelatedLinks
              locale={locale}
              title={t.relatedLinksTitle}
              items={[
                {
                  href: "/providers",
                  label: dictionary.providers.title,
                },
                {
                  href: "/games",
                  label: dictionary.nav.games,
                },
                {
                  href: "/slots",
                  label: dictionary.games.categories.slots,
                },
                {
                  href: "/live-casino",
                  label: dictionary.games.categories["live-casino"],
                },
                {
                  href: "/promotions",
                  label: dictionary.nav.promotions,
                },
                ...related.map((item) => ({
                  href: `/providers/${item.slug}`,
                  label: item.name,
                  description: item.description[locale],
                })),
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
