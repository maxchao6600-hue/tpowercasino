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
      <div className="df-grid-3">
        {dictionary.why.items.map((item, index) => {
          const Icon = icons[index] ?? BadgeCheck;
          return (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground sm:mb-4 sm:h-12 sm:w-12">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
