import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { getGamesByCategory } from "@/data/games";
import { getCategorySeo } from "@/data/category-seo";
import type { GameCategory } from "@/types";
import {
  breadcrumbSchema,
  collectionPageSchema,
  faqSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/common/json-ld";
import { PageHeader } from "@/components/common/page-header";
import { Container } from "@/components/common/container";
import { PageFaq } from "@/components/seo/page-faq";
import { RelatedLinks } from "@/components/seo/related-links";
import { InternalCta } from "@/components/seo/internal-cta";
import { GameCard } from "@/components/games/game-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CategoryGamesPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  category: GameCategory;
  title: string;
  description: string;
  path: string;
};

export function CategoryGamesPage({
  locale,
  dictionary,
  category,
  title,
  description,
  path,
}: CategoryGamesPageProps) {
  const items = getGamesByCategory(category);
  const seo = getCategorySeo(path);
  const breadcrumbs = [
    { name: dictionary.common.home, href: localePath(locale) },
    { name: dictionary.games.metaTitle, href: localePath(locale, "/games") },
    { name: title, href: localePath(locale, path) },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          collectionPageSchema({
            name: title,
            description,
            url: localePath(locale, path),
          }),
          ...(seo
            ? [
                faqSchema(
                  seo.faqs.map((item) => ({
                    question: item.question[locale],
                    answer: item.answer[locale],
                  })),
                ),
              ]
            : []),
        ]}
      />
      <PageHeader
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        atmosphere={category}
        brand={dictionary.common.brand}
      />
      <section className="section-y bg-[#080808]">
        <Container>
          {seo ? (
            <div className="mb-10 max-w-3xl space-y-8">
              <article>
                <h2 className="h2-display text-foreground">
                  {dictionary.seo.introduction}
                </h2>
                <p className="mt-5 text-body leading-relaxed text-muted-foreground">
                  {seo.intro[locale]}
                </p>
              </article>
              <article>
                <h2 className="h2-display text-foreground">
                  {dictionary.seo.gameTypes}
                </h2>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {seo.gameTypes.map((type) => (
                    <li key={type.en}>
                      <Badge variant="accent">{type[locale]}</Badge>
                    </li>
                  ))}
                </ul>
              </article>
              <article>
                <h2 className="h2-display text-foreground">
                  {dictionary.seo.benefits}
                </h2>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {seo.benefits.map((benefit) => (
                    <li
                      key={benefit.en}
                      className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)]"
                    >
                      {benefit[locale]}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}

          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              {dictionary.seo.popularTitles}
            </h2>
            <span className="text-xs font-semibold text-muted-foreground">
              {items.length} {dictionary.games.titlesLabel}
            </span>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)] md:p-12">
              <p className="text-muted-foreground">
                {locale === "zh"
                  ? "此分类目前在大厅以供应商精选形式提供。请浏览全部游戏库或相关供应商页面。"
                  : "This category is currently available through curated provider selections in the lobby. Browse the full games library or related provider pages."}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <Link href={localePath(locale, "/games")}>
                    {dictionary.common.viewAll}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={localePath(locale, "/providers")}>
                    {dictionary.providers.title}
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-3">
              {items.map((game, index) => (
                <GameCard
                  key={game.id}
                  locale={locale}
                  dictionary={dictionary}
                  game={game}
                  priority={index < 12}
                />
              ))}
            </div>
          )}

          {seo ? (
            <div className="mt-14 max-w-3xl space-y-4">
              <h2 className="h2-display text-foreground">
                {dictionary.responsible.title}
              </h2>
              <p className="text-body leading-relaxed text-muted-foreground">
                {seo.responsibleNote[locale]}
              </p>
              <Button asChild variant="outline">
                <Link href={localePath(locale, "/responsible-gaming")}>
                  {dictionary.footer.responsible}
                </Link>
              </Button>
            </div>
          ) : null}

          {seo ? (
            <>
              <PageFaq
                locale={locale}
                title={dictionary.seo.faqHeading}
                items={seo.faqs}
                withSchema={false}
              />
              <RelatedLinks
                locale={locale}
                title={dictionary.seo.relatedPages}
                items={seo.relatedPaths.map((item) => ({
                  href: item.href,
                  label: item.label[locale],
                }))}
              />
            </>
          ) : null}

          <InternalCta
            locale={locale}
            title={dictionary.seo.categoryCtaTitle}
            description={dictionary.seo.categoryCtaDescription}
            primaryHref="/register"
            primaryLabel={dictionary.common.ctaRegister}
            secondaryHref="/promotions"
            secondaryLabel={dictionary.nav.promotions}
          />
        </Container>
      </section>
    </>
  );
}
