import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

type GamesMobileExperienceProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GamesMobileExperience({
  locale,
  dictionary,
}: GamesMobileExperienceProps) {
  const t = dictionary.games;

  return (
    <section className="mt-16 border-t border-border/80 pt-14" aria-labelledby="games-mobile-heading">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#1a0a0c] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[260px]">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-black/40 shadow-[var(--shadow-lift)]" />
          <div className="brand-safe-media absolute inset-[10px] overflow-hidden rounded-[1.55rem] bg-[#111]">
            <Image
              src="/images/app-preview.webp"
              alt={t.mobileImageAlt}
              title={t.mobileTitle}
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {t.mobileEyebrow}
          </p>
          <h2
            id="games-mobile-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
          >
            {t.mobileTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.mobileDescription}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/90">
            {t.mobileHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={localePath(locale, "/apk")}>
                <Smartphone className="h-4 w-4" aria-hidden="true" />
                {dictionary.download.android}
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={localePath(locale, "/download")}>
                <Apple className="h-4 w-4" aria-hidden="true" />
                {dictionary.download.ios}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
