import Link from "next/link";
import {
  Dices,
  Joystick,
  Fish,
  Spade,
  Ticket,
  Trophy,
  Tv,
} from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { gameCategories } from "@/data/categories";
import { Section } from "@/components/common/section";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  slots: Joystick,
  live: Tv,
  sports: Trophy,
  fishing: Fish,
  lottery: Ticket,
  poker: Spade,
  arcade: Dices,
} as const;

type GameCategoriesProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GameCategories({ locale, dictionary }: GameCategoriesProps) {
  return (
    <Section
      title={dictionary.home.categoriesTitle}
      description={dictionary.home.categoriesSubtitle}
    >
      <div className="df-grid-4">
        {gameCategories.map((category, index) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Joystick;
          const href = category.href.startsWith("/games")
            ? localePath(locale, category.href.replace("/games", "/games"))
            : localePath(locale, category.href);

          return (
            <FadeIn key={category.id} delay={index * 0.04}>
              <Card className="h-full">
                <CardHeader className="gap-1 p-3 sm:gap-2 sm:p-5 md:p-8">
                  <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-muted text-foreground sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl md:mb-4 md:h-12 md:w-12">
                    <Icon
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-[inherit]">
                    {category.title[locale]}
                  </CardTitle>
                  <CardDescription className="text-[11px] leading-relaxed sm:text-sm md:text-[inherit]">
                    {category.description[locale]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 sm:p-5 sm:pt-0 md:px-8 md:pb-8">
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="h-7 px-2 text-[10px] sm:h-9 sm:px-3 sm:text-xs md:text-sm"
                  >
                    <Link
                      href={
                        category.href.includes("?")
                          ? `${localePath(locale, "/games")}?${category.href.split("?")[1]}`
                          : href
                      }
                    >
                      {locale === "zh"
                        ? `浏览${category.title[locale]}`
                        : `Explore ${category.title.en}`}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
