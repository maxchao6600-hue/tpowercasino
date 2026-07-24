import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  collectionPageSchema,
  organizationSchema,
} from "@/lib/schema";
import {
  countGamesByCategory,
  games,
  getFeaturedGames,
  getNewGames,
} from "@/data/games";
import { providers } from "@/data/providers";
import type { GameCategory } from "@/types";
import { JsonLd } from "@/components/common/json-ld";
import { Container } from "@/components/common/container";
import { GamesHero } from "@/components/games/games-hero";
import { GamesShelf } from "@/components/games/games-shelf";
import { GamesLobby } from "@/components/games/games-lobby";
import { GamesFeaturedProviders } from "@/components/games/games-featured-providers";
import { GamesPopularCategories } from "@/components/games/games-popular-categories";
import { GamesWhyPlay } from "@/components/games/games-why-play";
import { GamesMobileExperience } from "@/components/games/games-mobile-experience";
import { GamesSeo } from "@/components/games/games-seo";
import { GamesFinalCta } from "@/components/games/games-final-cta";
import { GamesPlatformStats } from "@/components/games/games-platform-stats";

const categories: Array<GameCategory | "all"> = [
  "all",
  "slots",
  "live-casino",
  "sports",
  "fishing",
  "lottery",
  "table",
  "crash",
  "poker",
  "arcade",
];

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const featured = getFeaturedGames()[0];
  return buildMetadata({
    locale,
    title: dictionary.games.metaTitle,
    description: dictionary.games.metaDescription,
    path: "/games",
    image: featured?.image ?? "/logo/tpower-logo.png",
  });
}

export default async function GamesPage({ params, searchParams }: PageProps) {
  const { locale: raw } = await params;
  const { category: rawCategory } = await searchParams;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const category = categories.includes(rawCategory as GameCategory | "all")
    ? (rawCategory as GameCategory | "all")
    : "all";

  const featured = getFeaturedGames().slice(0, 18);
  const newest = getNewGames(12);
  const hot = featured.slice(0, 12);
  const mosaic = featured.length >= 8 ? featured : games.slice(0, 16);
  const counts = countGamesByCategory();

  const providerOptions = (() => {
    const map = new Map<string, string>();
    for (const game of games) {
      if (!map.has(game.providerId)) {
        map.set(
          game.providerId,
          game.providerName ||
            providers.find((item) => item.id === game.providerId)?.name ||
            game.providerId,
        );
      }
    }
    return [...map.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  })();

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.games.metaTitle, href: localePath(locale, "/games") },
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(locale),
          breadcrumbSchema(breadcrumbs),
          collectionPageSchema({
            name: dictionary.games.heroH1,
            description: dictionary.games.metaDescription,
            url: `/${locale}/games`,
          }),
        ]}
      />

      <GamesHero
        locale={locale}
        dictionary={dictionary}
        breadcrumbs={breadcrumbs}
        totalGames={games.length}
        mosaic={mosaic}
      />

      <section className="bg-[#080808] pb-16 pt-8 md:pb-20 md:pt-10">
        <Container>
          {category === "all" ? (
            <>
              <GamesShelf
                locale={locale}
                dictionary={dictionary}
                title={dictionary.games.hotTitle}
                games={hot}
              />
              <GamesShelf
                locale={locale}
                dictionary={dictionary}
                title={dictionary.games.newTitle}
                games={newest}
              />
            </>
          ) : null}

          <GamesLobby
            key={category}
            locale={locale}
            dictionary={dictionary}
            games={games}
            providers={providerOptions}
            initialCategory={category}
            categoryCounts={counts}
          />

          <GamesPlatformStats locale={locale} dictionary={dictionary} />

          <GamesFeaturedProviders locale={locale} dictionary={dictionary} />
          <GamesPopularCategories locale={locale} dictionary={dictionary} />
          <GamesWhyPlay locale={locale} dictionary={dictionary} />
          <GamesMobileExperience locale={locale} dictionary={dictionary} />
          <GamesSeo locale={locale} dictionary={dictionary} />

          <GamesFinalCta locale={locale} dictionary={dictionary} />
        </Container>
      </section>
    </>
  );
}
