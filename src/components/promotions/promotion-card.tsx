import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Wallet } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import type { Promotion } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PromotionCardProps = {
  locale: Locale;
  dictionary: Dictionary;
  promo: Promotion;
};

export function PromotionCard({
  locale,
  dictionary,
  promo,
}: PromotionCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(229,9,20,0.18)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-primary/20 via-transparent to-amber-500/10" />
      </div>

      <div className="brand-safe-media relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={promo.image}
          alt={promo.imageAlt[locale]}
          title={promo.title[locale]}
          fill
          className="object-cover transition-[filter] duration-500 group-hover:brightness-110"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 50vw, 560px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Badges stay inside the 5% Brand Safe Area, below the logo */}
        <div className="brand-safe-chips">
          <Badge variant="accent">
            {dictionary.promotions.categories[promo.category]}
          </Badge>
          <Badge variant="outline" className="border-white/20 bg-black/40 text-white">
            {promo.badge[locale]}
          </Badge>
        </div>
      </div>

      <div className="relative space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            {promo.title[locale]}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {promo.summary[locale]}
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border bg-surface/80 px-3 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {dictionary.promotions.bonusAmountLabel}
              </dt>
              <dd className="mt-1 text-sm font-bold text-foreground">
                {promo.bonusAmount[locale]}
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 px-3 py-3">
              <dt className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                <Wallet className="h-3 w-3" aria-hidden="true" />
                {dictionary.promotions.minDepositLabel}
              </dt>
              <dd className="mt-1 text-sm font-bold text-foreground">
                {promo.minDeposit[locale]}
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 px-3 py-3">
              <dt className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                <Clock3 className="h-3 w-3" aria-hidden="true" />
                {dictionary.common.expires}
              </dt>
              <dd className="mt-1 text-sm font-bold text-foreground">
                {formatDate(promo.expiresAt, locale)}
              </dd>
            </div>
          </dl>

        <Button asChild className="w-full">
          <Link href={localePath(locale, `/promotions/${promo.slug}`)}>
            {promo.cta[locale]}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
