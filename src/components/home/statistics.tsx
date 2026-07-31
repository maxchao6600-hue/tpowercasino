import type { Dictionary } from "@/lib/dictionary";
import { games } from "@/data/games";
import { providers } from "@/data/providers";
import { Section } from "@/components/common/section";

type StatisticsProps = {
  dictionary: Dictionary;
};

/** Catalog-backed counts only — no unverifiable marketing totals. */
export function Statistics({ dictionary }: StatisticsProps) {
  const stats = [
    {
      key: "games" as const,
      value: String(games.length),
      width: "4ch",
    },
    {
      key: "providers" as const,
      value: String(providers.length),
      width: "4ch",
    },
    {
      key: "support" as const,
      value: "24/7",
      width: "5ch",
    },
  ];

  return (
    <Section
      title={dictionary.home.statsTitle}
      description={dictionary.home.statsSubtitle}
    >
      <div className="df-grid-3">
        {stats.map((stat) => (
          <div
            key={stat.key}
            className="rounded-[16px] border border-border bg-card p-3 text-center shadow-[var(--shadow-soft)] transition-all duration-[250ms] ease-out hover:-translate-y-[6px] hover:border-primary/35 hover:shadow-[var(--shadow-lift)] sm:rounded-[20px] sm:p-5 md:rounded-[24px] md:p-8"
          >
            <p className="h3-display tabular-nums text-foreground [font-size:clamp(1.1rem,0.95rem+0.9vw,1.875rem)]">
              <span className="inline-block" style={{ minWidth: stat.width }}>
                {stat.value}
              </span>
            </p>
            <p className="mt-1.5 text-[10px] font-medium text-muted-foreground sm:mt-2 sm:text-xs md:mt-3 md:text-sm">
              {dictionary.stats[stat.key]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
