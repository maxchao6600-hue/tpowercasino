import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import {
  vipManagerBody,
  vipManagerChannels,
  vipManagerIntro,
} from "@/data/vip-page-content";
import { AtmosphereMedia } from "@/components/common/atmosphere-media";
import { Section } from "@/components/common/section";
import { vipIconMap } from "@/components/vip/vip-icons";

type VipManagerProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function VipManager({ locale, dictionary }: VipManagerProps) {
  const t = dictionary.vip;

  return (
    <Section
      id="vip-manager"
      eyebrow={t.managerEyebrow}
      title={t.managerTitle}
      description={t.managerSubtitle}
    >
      <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-4 sm:gap-8 lg:gap-12">
        <div className="min-w-0">
          <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm md:text-base">
            {vipManagerIntro[locale]}
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-sm md:text-base">
            {vipManagerBody[locale]}
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3">
            {vipManagerChannels.map((channel) => {
              const Icon = vipIconMap[channel.icon];
              return (
                <li
                  key={channel.label.en}
                  className="flex items-start gap-2 rounded-xl border border-border/80 bg-card/70 p-2.5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:gap-3 sm:rounded-2xl sm:p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold text-foreground sm:text-sm">
                      {channel.label[locale]}
                    </span>
                    <span className="mt-0.5 block text-[10px] leading-relaxed text-muted-foreground sm:mt-1 sm:text-xs">
                      {channel.hint[locale]}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative min-w-0">
          <AtmosphereMedia
            src="/images/promotions/tpower-vip-rewards.webp"
            alt={t.managerImageAlt}
            title={t.managerTitle}
            aspectClassName="aspect-[5/6]"
            sizes="(max-width: 768px) 45vw, 42vw"
          />
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-amber-400/10 blur-2xl" />
        </div>
      </div>
    </Section>
  );
}
