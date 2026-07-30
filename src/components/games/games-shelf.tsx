import type { Locale } from "@/config/site";
import type { Dictionary } from "@/lib/dictionary";
import type { Game } from "@/types";
import { GameCard } from "@/components/games/game-card";

type GamesShelfProps = {
  locale: Locale;
  dictionary: Dictionary;
  title: string;
  games: Game[];
};

export function GamesShelf({
  locale,
  dictionary,
  title,
  games,
}: GamesShelfProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-8">
      <div className="mb-3 flex flex-row flex-wrap items-end justify-between gap-2 sm:gap-3">
        <h2 className="h4-display text-foreground">{title}</h2>
        <span className="text-xs font-semibold text-muted-foreground">
          {games.length} {dictionary.games.titlesLabel}
        </span>
      </div>
      <div className="df-scroll">
        <div className="grid min-w-[860px] grid-cols-6 gap-2.5 md:min-w-0 md:gap-3">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              locale={locale}
              dictionary={dictionary}
              game={game}
              priority={index < 6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
