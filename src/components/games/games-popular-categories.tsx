import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { games } from "@/data/games";
import type { GameCategory } from "@/types";

type GamesPopularCategoriesProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const CATEGORY_LINKS: Array<{
  category: GameCategory;
  href: string;
}> = [
  { category: "slots", href: "/slots" },
  { category: "live-casino", href: "/live-casino" },
  { category: "sports", href: "/sports" },
  { category: "fishing", href: "/fishing" },
  { category: "lottery", href: "/lottery" },
  { category: "crash", href: "/crash" },
];

function bannerFor(category: GameCategory): string {
  const match =
    games.find((game) => game.category === category && game.featured) ||
    games.find((game) => game.category === category);
  return match?.image ?? "/images/hero.webp";
}

export function GamesPopularCategories({
  locale,
  dictionary,
}: GamesPopularCategoriesProps) {
  const t = dictionary.games;

  return (
    <section className="mt-16 border-t border-border/80 pt-14" aria-labelledby="games-categories-heading">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          {t.categoriesEyebrow}
        </p>
        <h2
          id="games-categories-heading"
          className="h2-display mt-3 text-foreground"
        >
          {t.popularCategoriesTitle}
        </h2>
        <p className="text-lead mt-3 text-muted-foreground">
          {t.popularCategoriesSubtitle}
        </p>
      </div>

      <div className="df-grid-3">
        {CATEGORY_LINKS.map((item) => {
          const image = bannerFor(item.category);
          const title = t.categories[item.category];
          const blurb = t.categoryBlurbs[item.category];

          return (
            <Link
              key={item.category}
              href={localePath(locale, item.href)}
              className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-border/80"
            >
              <Image
                src={image}
                alt={title}
                title={title}
                fill
                className="object-cover transition-[filter] duration-300 group-hover:brightness-110"
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 33vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                  {blurb}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
