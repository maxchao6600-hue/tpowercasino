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
              <CardHeader>
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.18em]",
                    tier.highlight ? "text-[#E0C07A]" : "text-primary",
                  )}
                >
                  VIP
                </p>
                <CardTitle className="text-2xl">{tier.name[locale]}</CardTitle>
                <CardDescription>{tier.description[locale]}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit[locale]}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={cn(
                          "mt-1 h-1.5 w-1.5 rounded-full",
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
      <div className="mt-10">
        <Button asChild size="lg">
          <Link href={localePath(locale, "/vip")}>{dictionary.common.ctaVip}</Link>
        </Button>
      </div>
    </Section>
  );
}
