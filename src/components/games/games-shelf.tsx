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
      <div className="mb-3 flex items-end justify-between gap-3">
        <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
          {title}
        </h2>
        <span className="text-xs font-semibold text-muted-foreground">
          {games.length} {dictionary.games.titlesLabel}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:gap-3">
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
    </section>
  );
}
