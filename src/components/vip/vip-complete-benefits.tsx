import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { vipCompleteBenefits } from "@/data/vip-page-content";
import { FadeIn } from "@/components/common/fade-in";
import { Section } from "@/components/common/section";
import { VipFeatureBlock } from "@/components/vip/vip-feature-block";

type VipCompleteBenefitsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipCompleteBenefits({
  locale,
  dictionary,
}: VipCompleteBenefitsProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="complete-benefits"
      eyebrow={t.completeEyebrow}
      title={t.completeTitle}
      description={t.completeSubtitle}
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {vipCompleteBenefits.map((item, index) => (
          <FadeIn key={item.id} delay={(index % 4) * 0.03}>
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
