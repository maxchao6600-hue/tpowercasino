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
      <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-4 overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#1a0a0c] p-3 sm:gap-8 sm:p-6 md:gap-10 md:p-10">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[140px] sm:max-w-[200px] md:max-w-[260px]">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-black/40 shadow-[var(--shadow-lift)]" />
          <div className="brand-safe-media absolute inset-[10px] overflow-hidden rounded-[1.55rem] bg-[#111]">
            <Image
              src="/images/app-preview.webp"
              alt={t.mobileImageAlt}
              title={t.mobileTitle}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 140px, (max-width: 768px) 200px, 260px"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary sm:text-xs">
            {t.mobileEyebrow}
          </p>
          <h2
            id="games-mobile-heading"
            className="h2-display mt-2 text-foreground sm:mt-3"
          >
            {t.mobileTitle}
          </h2>
          <p className="text-lead mt-2 max-w-xl text-muted-foreground sm:mt-4">
            {t.mobileDescription}
          </p>
          <ul className="mt-4 space-y-2 text-xs text-foreground/90 sm:mt-6 sm:space-y-3 sm:text-sm">
            {t.mobileHighlights.map((item) => (
              <li key={item} className="flex gap-2 sm:gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="df-actions mt-5 sm:mt-8">
            <Button asChild size="lg" className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm">
              <Link href={localePath(locale, "/apk")}>
                <Smartphone className="h-4 w-4" aria-hidden="true" />
                {dictionary.download.android}
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm">
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
