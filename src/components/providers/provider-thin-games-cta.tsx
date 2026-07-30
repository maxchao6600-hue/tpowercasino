import Link from "next/link";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

type ProviderThinGamesCtaProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProviderThinGamesCta({
  locale,
  dictionary,
}: ProviderThinGamesCtaProps) {
  const t = dictionary.providers.gamesLibrary;

  return (
    <div className="rounded-[24px] border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 text-center shadow-[var(--shadow-soft)] md:p-10">
      <p className="mx-auto max-w-xl text-lg font-semibold leading-relaxed text-foreground md:text-xl">
        {t.exploreMoreGamesCta}
      </p>
      <div className="df-actions mt-8 justify-center">
        <Button asChild size="lg">
          <Link href={localePath(locale, "/register")}>
            {dictionary.common.ctaRegister}
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={localePath(locale, "/games")}>{t.viewMoreGames}</Link>
        </Button>
      </div>
    </div>
  );
}
