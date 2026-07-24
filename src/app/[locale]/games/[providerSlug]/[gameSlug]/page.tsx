import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { isValidLocale, localePath, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  gameSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  games,
  getGameByProviderAndSlug,
  getGameDetailPath,
  getGameProviderUrlSlug,
  getSimilarGames,
} from "@/data/games";
import { getProviderById } from "@/data/providers";
import { gameDetailMetaDescription } from "@/lib/game-detail-content";
import { JsonLd } from "@/components/common/json-ld";
import { GameDetail } from "@/components/games/game-detail";

type PageProps = {
  params: Promise<{ locale: string; providerSlug: string; gameSlug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    games.map((game) => ({
      locale,
      providerSlug: getGameProviderUrlSlug(game),
      gameSlug: game.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw, providerSlug, gameSlug } = await params;
  if (!isValidLocale(raw)) return {};
  const locale = raw as Locale;
  const game = getGameByProviderAndSlug(providerSlug, gameSlug);
  if (!game) return {};

  const dictionary = getDictionary(locale);
  const categoryLabel = dictionary.games.categories[game.category];
  const path = getGameDetailPath(game);
  const title =
    locale === "zh"
      ? `${game.name.zh}｜${game.providerName ?? game.providerId}｜TPOWER线上博彩`
      : `${game.name.en} | ${game.providerName ?? game.providerId} | TPOWER`;

  return buildMetadata({
    locale,
    title,
    description: gameDetailMetaDescription(game, locale, categoryLabel),
    path,
    image: game.image,
    imageAlt: game.name[locale],
    keywords:
      locale === "zh"
        ? [
            game.name.zh,
            game.providerName ?? game.providerId,
            "TPOWER线上博彩",
            categoryLabel,
            "TPOWER官网",
          ]
        : [
            game.name.en,
            game.providerName ?? game.providerId,
            "TPOWER Online Casino",
            categoryLabel,
            "Malaysia online casino",
          ],
  });
}

export default async function GameDetailPage({ params }: PageProps) {
  const { locale: raw, providerSlug, gameSlug } = await params;
  if (!isValidLocale(raw)) notFound();
  const locale = raw as Locale;
  const game = getGameByProviderAndSlug(providerSlug, gameSlug);
  if (!game) notFound();

  const dictionary = getDictionary(locale);
  const similarGames = getSimilarGames(game, 6);
  const provider = getProviderById(game.providerId);
  const path = getGameDetailPath(game);
  const categoryLabel = dictionary.games.categories[game.category];

  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    {
      name: dictionary.nav.games,
      href: localePath(locale, "/games"),
    },
    ...(provider
      ? [
          {
            name: provider.name,
            href: localePath(locale, `/providers/${provider.slug}`),
          },
        ]
      : []),
    {
      name: game.name[locale],
      href: localePath(locale, path),
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
            name: game.name[locale],
            description: gameDetailMetaDescription(game, locale, categoryLabel),
            path,
          }),
          gameSchema({
            locale,
            name: game.name[locale],
            description: game.description[locale],
            image: game.image,
            url: localePath(locale, path),
            providerName: game.providerName ?? game.providerId,
            category: categoryLabel,
            rtp: game.rtp,
          }),
        ]}
      />
      <GameDetail
        locale={locale}
        dictionary={dictionary}
        game={game}
        similarGames={similarGames}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}
