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
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <CardTitle>{category.title[locale]}</CardTitle>
                  <CardDescription>{category.description[locale]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" size="sm">
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
