import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { vipTiers } from "@/data/vip";
import { Section } from "@/components/common/section";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type VipBenefitsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipBenefits({ locale, dictionary }: VipBenefitsProps) {
  return (
    <Section
      title={dictionary.home.vipTitle}
      description={dictionary.home.vipSubtitle}
    >
      <div className="df-row-3">
        <div className="df-grid-3">
          {vipTiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.06}>
              <Card
                className={cn(
                  "h-full",
                  tier.highlight &&
                    "border-[#C4A35A]/35 bg-[linear-gradient(180deg,#1a1710_0%,#161616_60%)] shadow-[var(--shadow-lift)]",
                )}
              >
                <CardHeader className="gap-1.5 p-3 sm:gap-2 sm:p-5 md:p-8">
                  <p
                    className={cn(
                      "text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px] md:text-xs",
                      tier.highlight ? "text-[#E0C07A]" : "text-primary",
                    )}
                  >
                    VIP
                  </p>
                  <CardTitle className="text-base sm:text-xl md:text-2xl">
                    {tier.name[locale]}
                  </CardTitle>
                  <CardDescription className="text-[11px] leading-relaxed sm:text-sm">
                    {tier.description[locale]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 sm:p-5 sm:pt-0 md:px-8 md:pb-8">
                  <ul className="space-y-1.5 sm:space-y-2.5 md:space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit[locale]}
                        className="flex items-start gap-2 text-[10px] text-muted-foreground sm:text-xs md:text-sm"
                      >
                        <span
                          className={cn(
                            "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                            tier.highlight ? "bg-[#C4A35A]" : "bg-primary",
                          )}
                        />
                        {benefit[locale]}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Button asChild size="lg">
          <Link href={localePath(locale, "/vip")}>{dictionary.common.ctaVip}</Link>
        </Button>
      </div>
    </Section>
  );
}
