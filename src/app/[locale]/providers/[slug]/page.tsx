import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  getProviderBySlug,
  getRelatedProviders,
  providers,
} from "@/data/providers";
import {
  getGamesByProvider,
  MIN_FULL_PROVIDER_LIBRARY,
} from "@/data/games";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { PremiumCta } from "@/components/common/premium-cta";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { GameCard } from "@/components/games/game-card";
import { ProviderThinGamesCta } from "@/components/providers/provider-thin-games-cta";
import { ProviderLogoMark } from "@/components/games/provider-logo-mark";
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
  return buildMetadata({
    locale,
    title: provider.metaTitle[locale],
    description: provider.metaDescription[locale],
    path: `/providers/${provider.slug}`,
    image: provider.logo ?? "/images/cta/tpower-lobby-cta.webp",
    keywords:
      locale === "zh"
        ? [
            provider.name,
            "TPOWER线上博彩",
            "官方合作游戏厂商",
            "老虎机",
            "真人视讯",
            "体育博彩",
            "捕鱼游戏",
          ]
        : [
            provider.name,
            "TPOWER Online Casino",
            "Official Game Providers",
            "Malaysia Online Casino",
            "slots",
            "live casino",
          ],
  });
}

export default async function ProviderDetailPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const library = getGamesByProvider(provider.slug);
  const fromIds = library.filter((game) =>
    provider.popularGameIds.includes(game.id),
  );
  const featured = library.filter((game) => game.featured || game.new);
  const popular = (fromIds.length > 0 ? fromIds : featured.length > 0 ? featured : library).slice(
    0,
    6,
  );
  const showFullLibraryLink = library.length >= MIN_FULL_PROVIDER_LIBRARY;
  const related = getRelatedProviders(provider.slug, 4);
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
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            locale,
            name: provider.metaTitle[locale],
            description: provider.metaDescription[locale],
            path: `/providers/${provider.slug}`,
          }),
        ]}
      />
      <PageHeader
        title={provider.name}
        description={provider.description[locale]}
        breadcrumbs={breadcrumbs}
        atmosphere="providers"
        brand={dictionary.common.brand}
      />
      <section className="section-y">
        <Container className="max-w-4xl space-y-14">
          <div className="grid grid-cols-[auto_1fr] items-center gap-6 rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="flex h-[60px] w-[120px] items-center justify-center rounded-2xl border border-border bg-muted/40 px-3">
              <ProviderLogoMark
                name={provider.name}
                logo={provider.logo}
                variant="card"
                className="h-full w-full [&_img]:h-10 [&_img]:max-h-10 [&_img]:max-w-[100px]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{dictionary.providers.officialBadge}</Badge>
              {provider.categories.map((category) => (
                <Badge key={category} variant="outline">
                  {dictionary.games.categories[category]}
                </Badge>
              ))}
            </div>
          </div>

          <article>
            <h2 className="h2-display text-foreground">
              {dictionary.seo.introduction}
            </h2>
            <p className="mt-5 text-body leading-relaxed text-muted-foreground">
              {provider.introduction[locale]}
            </p>
          </article>

          <article>
            <h2 className="h2-display text-foreground">
              {dictionary.seo.features}
            </h2>
            <ul className="df-grid-2 mt-6">
              {provider.features.map((feature) => (
                <li
                  key={feature.en}
                  className="rounded-[24px] border border-border bg-surface px-5 py-4 text-sm font-semibold text-foreground"
                >
                  {feature[locale]}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2 className="h2-display text-foreground">
              {dictionary.seo.gameTypes}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {provider.gameTypes.map((type) => (
                <li key={type.en}>
                  <Badge variant="accent">{type[locale]}</Badge>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                {dictionary.seo.compatibility}:{" "}
              </span>
              {provider.compatibility[locale]}
            </p>
          </article>

          <article>
            <h2 className="h2-display text-foreground">
              {dictionary.seo.popularGames}
            </h2>
            {popular.length === 0 ? (
              <p className="mt-5 text-muted-foreground">
                {dictionary.providers.gamesLibrary.gamesAvailableAfterLogin}
              </p>
            ) : (
              <div className="df-scroll mt-8">
                <div className="grid min-w-[480px] grid-cols-3 gap-2.5 md:min-w-0 md:gap-3">
                  {popular.map((game) => (
                    <GameCard
                      key={game.id}
                      locale={locale}
                      dictionary={dictionary}
                      game={game}
                    />
                  ))}
                </div>
              </div>
            )}
            {showFullLibraryLink ? (
              <div className="mt-6">
                <Button asChild size="lg">
                  <Link
                    href={localePath(locale, `/providers/${provider.slug}/games`)}
                  >
                    {dictionary.providers.gamesLibrary.viewAllGames}
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="mt-10">
                <ProviderThinGamesCta locale={locale} dictionary={dictionary} />
              </div>
            )}
          </article>

          <PageFaq
            locale={locale}
            title={dictionary.seo.faqHeading}
            items={provider.faqs}
          />

          <RelatedLinks
            locale={locale}
            title={dictionary.seo.relatedProviders}
            items={related.map((item) => ({
              href: `/providers/${item.slug}`,
              label: item.name,
              description: item.description[locale],
            }))}
          />

          <PremiumCta
            eyebrow={dictionary.providers.finalCtaEyebrow}
            title={dictionary.seo.providerCtaTitle.replace(
              "{provider}",
              provider.name,
            )}
            description={dictionary.seo.providerCtaDescription}
            imageSrc="/images/cta/tpower-join-cta.webp"
            imageAlt={dictionary.providers.finalCtaImageAlt}
            actions={[
              {
                href: localePath(locale, "/register"),
                label: dictionary.common.ctaRegister,
              },
              {
                href: localePath(locale, "/download"),
                label: dictionary.providers.finalCtaDownload,
                variant: "outline",
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
