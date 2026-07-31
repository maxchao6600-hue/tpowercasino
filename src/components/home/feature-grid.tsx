import {
  Headphones,
  Gift,
  Lock,
  Smartphone,
  BadgeCheck,
  Zap,
} from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import { Section } from "@/components/common/section";
import { FadeIn } from "@/components/common/fade-in";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const icons = [Zap, Lock, Headphones, BadgeCheck, Smartphone, Gift];

type FeatureGridProps = {
  dictionary: Dictionary;
};

export function FeatureGrid({ dictionary }: FeatureGridProps) {
  return (
    <Section
      title={dictionary.home.whyTitle}
      description={dictionary.home.whySubtitle}
    >
      <div className="df-row-3">
        <div className="df-grid-3">
          {dictionary.why.items.map((item, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardHeader className="gap-1.5 p-3 sm:gap-2 sm:p-5 md:p-8">
                    <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-xl bg-muted text-foreground sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl md:mb-4 md:h-12 md:w-12">
                      <Icon
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <CardTitle className="text-sm sm:text-base md:text-[inherit]">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-[11px] leading-relaxed sm:text-sm md:text-[inherit]">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
