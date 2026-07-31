import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { getFeaturedPromotions } from "@/data/promotions";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/common/section";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PromotionGridProps = {
  locale: Locale;
  dictionary: Dictionary;
  limit?: number;
  showHeader?: boolean;
};

export function PromotionGrid({
  locale,
  dictionary,
  limit = 3,
  showHeader = true,
}: PromotionGridProps) {
  const items = getFeaturedPromotions().slice(0, limit);

  return (
    <Section
      className="bg-card"
      title={showHeader ? dictionary.home.promotionsTitle : undefined}
      description={showHeader ? dictionary.home.promotionsSubtitle : undefined}
    >
      <div className="df-row-3">
        <div className="df-grid-3">
          {items.map((promo, index) => (
            <FadeIn key={promo.id} delay={index * 0.05}>
              <Card className="group h-full overflow-hidden">
                <div className="brand-safe-media relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={promo.image}
                    alt={promo.imageAlt[locale]}
                    title={promo.title[locale]}
                    fill
                    className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 33vw, 420px"
                  />
                </div>
                <CardHeader className="space-y-1.5 p-3 sm:space-y-2 sm:p-5 md:space-y-3 md:p-8">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <Badge variant="accent">{promo.badge[locale]}</Badge>
                    <Badge variant="outline" className="text-[9px] sm:text-xs">
                      {dictionary.common.expires}{" "}
                      {formatDate(promo.expiresAt, locale)}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-[inherit]">
                    {promo.title[locale]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-3 pt-0 sm:space-y-4 sm:p-5 sm:pt-0 md:space-y-5 md:px-8 md:pb-8">
                  <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                    {promo.summary[locale]}
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="h-8 w-full text-xs sm:h-10 sm:text-sm"
                  >
                    <Link href={localePath(locale, `/promotions/${promo.slug}`)}>
                      {promo.cta[locale]}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
      {showHeader ? (
        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href={localePath(locale, "/promotions")}>
              {dictionary.common.viewAll}
            </Link>
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
