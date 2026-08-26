import Image from "next/image";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import {
  officialPartners,
  officialPartnersCopy,
} from "@/data/official-partners";
import { Container } from "@/components/common/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/common/site-link";
import { cn } from "@/lib/utils";

type OfficialGamingPartnersProps = {
  locale: Locale;
  className?: string;
  /** Limit cards (homepage preview). Default: all. */
  limit?: number;
  showViewAll?: boolean;
};

function PartnerCard({
  locale,
  partner,
}: {
  locale: Locale;
  partner: (typeof officialPartners)[number];
}) {
  return (
    <>
      <div className="flex h-14 items-center justify-center rounded-xl border border-border/80 bg-muted/30 px-3">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={120}
            height={40}
            className="h-8 w-auto max-w-[110px] object-contain"
          />
        ) : (
          <span className="text-sm font-bold tracking-wide text-foreground">
            {partner.name}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-semibold text-foreground">{partner.name}</h3>
        <Badge variant="outline" className="text-[10px]">
          {partner.categoryLabel[locale]}
        </Badge>
      </div>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
        {partner.blurb[locale]}
      </p>
    </>
  );
}

export function OfficialGamingPartners({
  locale,
  className,
  limit,
  showViewAll = true,
}: OfficialGamingPartnersProps) {
  const items =
    typeof limit === "number"
      ? officialPartners.slice(0, limit)
      : officialPartners;

  return (
    <section
      className={cn("section-y", className)}
      aria-labelledby="official-gaming-partners-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {officialPartnersCopy.eyebrow[locale]}
          </p>
          <h2
            id="official-gaming-partners-heading"
            className="h2-display mt-3 text-foreground"
          >
            {officialPartnersCopy.title[locale]}
          </h2>
          <p className="mt-4 text-body text-muted-foreground">
            {officialPartnersCopy.subtitle[locale]}
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="grid min-w-[960px] grid-cols-4 gap-3 md:min-w-0 md:gap-4 lg:grid-cols-5">
            {items.map((partner) => {
              const classNameCard =
                "flex h-full flex-col rounded-[20px] border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-colors hover:border-primary/35";

              if (partner.href) {
                return (
                  <SiteLink
                    key={partner.id}
                    href={localePath(locale, partner.href)}
                    className={classNameCard}
                  >
                    <PartnerCard locale={locale} partner={partner} />
                  </SiteLink>
                );
              }

              return (
                <article key={partner.id} className={classNameCard}>
                  <PartnerCard locale={locale} partner={partner} />
                </article>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
          {officialPartnersCopy.partnershipNote[locale]}
        </p>

        {showViewAll ? (
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <SiteLink href={localePath(locale, "/providers")}>
                {officialPartnersCopy.viewAll[locale]}
              </SiteLink>
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
