import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipWhyJoin } from "@/data/vip-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { VipFeatureBlock } from "@/components/vip/vip-feature-block";

type VipWhyJoinProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipWhyJoin({ locale, dictionary }: VipWhyJoinProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="why-join"
      eyebrow={t.whyEyebrow}
      title={t.whyTitle}
      description={t.whySubtitle}
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {vipWhyJoin.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.04}>
            <VipFeatureBlock
              locale={locale}
              item={item}
              index={index}
              learnMoreLabel={t.learnMore}
              showLessLabel={t.showLess}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
