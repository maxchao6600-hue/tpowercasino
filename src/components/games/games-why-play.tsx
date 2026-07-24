import { Gamepad2, Headphones, Smartphone, Store } from "lucide-react";
import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import { games } from "@/data/games";
import { providers } from "@/data/providers";

type GamesWhyPlayProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GamesWhyPlay({ locale, dictionary }: GamesWhyPlayProps) {
  const t = dictionary.games;
  const providerCount = new Set(games.map((game) => game.providerId)).size;

  const stats = [
    {
      key: "games",
      value: String(games.length),
      label: t.whyStats.games,
      hint: t.whyStats.gamesHint,
      icon: Gamepad2,
    },
    {
      key: "providers",
      value: String(Math.max(providerCount, providers.length)),
      label: t.whyStats.providers,
      hint: t.whyStats.providersHint,
      icon: Store,
    },
    {
      key: "mobile",
      value: locale === "zh" ? "双端" : "iOS+Android",
      label: t.whyStats.mobile,
      hint: t.whyStats.mobileHint,
      icon: Smartphone,
    },
    {
      key: "support",
      value: "24/7",
      label: t.whyStats.support,
      hint: t.whyStats.supportHint,
      icon: Headphones,
    },
  ] as const;

  return (
    <section className="mt-16 border-t border-border/80 pt-14" aria-labelledby="games-why-heading">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
          {t.whyEyebrow}
        </p>
        <h2
          id="games-why-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          {t.whyTitle}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {t.whySubtitle}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.key}
              className="rounded-3xl border border-border/80 bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-3xl font-bold tracking-tight text-foreground tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-bold text-foreground">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.hint}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
