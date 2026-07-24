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
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  sizes="(max-width: 1280px) 100vw, 33vw"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{promo.badge[locale]}</Badge>
                  <Badge variant="outline">
                    {dictionary.common.expires}{" "}
                    {formatDate(promo.expiresAt, locale)}
                  </Badge>
                </div>
                <CardTitle>{promo.title[locale]}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {promo.summary[locale]}
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={localePath(locale, `/promotions/${promo.slug}`)}>
                    {promo.cta[locale]}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
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
