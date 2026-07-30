import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { getFeaturedProviders } from "@/data/providers";
import { promotions } from "@/data/promotions";
import { gameCategories } from "@/data/categories";
import { Container } from "@/components/common/container";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";

type ProvidersRelatedProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProvidersRelated({
  locale,
  dictionary,
}: ProvidersRelatedProps) {
  const t = dictionary.providers;
  const featured = getFeaturedProviders().slice(0, 4);
  const featuredPromos = promotions.filter((p) => p.featured).slice(0, 3);
  const popularCategories = gameCategories.slice(0, 6);

  return (
    <section
      className="section-y border-t border-border bg-[#0a0a0a]"
      aria-labelledby="providers-related-heading"
    >
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="providers-related-heading"
            className="h2-display text-foreground"
          >
            {t.relatedTitle}
          </h2>
          <p className="text-lead mt-4 text-muted-foreground">
            {t.relatedSubtitle}
          </p>
        </header>

        <div className="df-grid-3 mt-12">
          <FadeIn>
            <div className="h-full rounded-[24px] border border-border/80 bg-card/60 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {dictionary.providers.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {featured.map((provider) => (
                  <li key={provider.id}>
                    <Link
                      href={localePath(locale, `/providers/${provider.slug}`)}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition hover:border-border hover:bg-muted/40 hover:text-foreground"
                    >
                      <span>{provider.name}</span>
                      <Badge variant="outline" className="opacity-70 group-hover:opacity-100">
                        {dictionary.games.categories[provider.categories[0]!]}
                      </Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="h-full rounded-[24px] border border-border/80 bg-card/60 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {dictionary.nav.promotions}
              </h3>
              <ul className="mt-5 space-y-3">
                {featuredPromos.map((promo) => (
                  <li key={promo.id}>
                    <Link
                      href={localePath(locale, `/promotions/${promo.slug}`)}
                      className="block rounded-xl border border-transparent px-3 py-2 transition hover:border-border hover:bg-muted/40"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {promo.title[locale]}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {promo.summary[locale]}
                      </p>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={localePath(locale, "/promotions")}
                    className="mt-2 inline-flex px-3 text-sm font-semibold text-primary hover:underline"
                  >
                    {dictionary.common.viewAll}
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-[24px] border border-border/80 bg-card/60 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {dictionary.nav.games}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {popularCategories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={localePath(locale, category.href)}
                      className="inline-flex rounded-full border border-border/80 bg-muted/30 px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                    >
                      {category.title[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={localePath(locale, "/games")}
                className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                {dictionary.common.viewAll}
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
