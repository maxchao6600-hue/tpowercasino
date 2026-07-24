import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone, UserPlus } from "lucide-react";
import type { Locale } from "@/config/site";
import { localePath } from "@/config/i18n";
import { atmosphereImageFor } from "@/config/page-atmosphere";
import type { Dictionary } from "@/lib/dictionary";
import type { BreadcrumbItem } from "@/types";
import { AtmosphereHero } from "@/components/common/atmosphere-hero";
import { Button } from "@/components/ui/button";
import { asDownloadCopy } from "@/components/download/download-copy";

const APP_SCREEN =
  "/images/download/tpower-app-home-screen.png";

type DownloadHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  breadcrumbs: BreadcrumbItem[];
};

export function DownloadHero({
  locale,
  dictionary,
  breadcrumbs,
}: DownloadHeroProps) {
  const t = asDownloadCopy(dictionary.download);
  const brand = dictionary.common.brand;
  const heroAlt =
    t.heroImageAlt ??
    (locale === "zh"
      ? "TPOWER官方APP 真实首页截图"
      : "Official TPOWER App home screen");

  return (
    <AtmosphereHero
      breadcrumbs={breadcrumbs}
      brand={brand}
      title={t.title}
      description={t.subtitle}
      imageSrc={atmosphereImageFor("download")}
      imageAlt={heroAlt}
      overlay="cinematic"
      showTrustBar
      actions={
        <div className="flex flex-row flex-wrap gap-2 sm:gap-3">
          <Button
            asChild
            size="lg"
            className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm"
          >
            <Link href={localePath(locale, "/apk")}>
              <Smartphone
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {t.android}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-9 px-3 text-xs sm:h-11 sm:px-6 sm:text-sm"
          >
            <Link href="#install">
              <Apple
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {t.ios}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-9 border-white/20 bg-transparent px-3 text-xs text-white hover:border-white/35 hover:bg-white/10 hover:text-white sm:h-11 sm:px-6 sm:text-sm"
          >
            <Link href={localePath(locale, "/register")}>
              <UserPlus
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              {dictionary.nav.register}
            </Link>
          </Button>
        </div>
      }
      aside={<PhoneMockup alt={heroAlt} title={t.title} />}
    />
  );
}

function PhoneMockup({ alt, title }: { alt: string; title: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px]">
      {/* Soft red glow behind the device */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(229,9,20,0.5),transparent_68%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-black/50 blur-xl"
        aria-hidden="true"
      />

      {/* Premium iPhone-style frame — ~20–30% larger than previous mock */}
      <div className="relative mx-auto aspect-[9/19.5] w-[92%] drop-shadow-[0_28px_64px_rgba(0,0,0,0.65)]">
        {/* Outer titanium / black chassis */}
        <div className="absolute inset-0 rounded-[2.35rem] bg-gradient-to-b from-[#3a3a3c] via-[#1c1c1e] to-[#0a0a0a] p-[2px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[2.6rem] sm:p-[2.5px] md:rounded-[2.85rem]">
          <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black sm:rounded-[2.45rem] md:rounded-[2.7rem]">
            {/* Side specular edge */}
            <div
              className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
              aria-hidden="true"
            />

            {/* Screen inset */}
            <div className="absolute inset-[3px] overflow-hidden rounded-[2.05rem] bg-black sm:inset-[3.5px] sm:rounded-[2.3rem] md:inset-[4px] md:rounded-[2.55rem]">
              <Image
                src={APP_SCREEN}
                alt={alt}
                title={title}
                fill
                priority
                quality={100}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 390px"
                className="object-cover object-top"
              />
            </div>

            {/* Dynamic Island */}
            <div
              className="absolute left-1/2 top-[11px] z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:top-3 sm:h-[24px] sm:w-[102px] md:top-[14px] md:h-[26px] md:w-[110px]"
              aria-hidden="true"
            >
              <span className="absolute right-[18px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#0a1a22] ring-1 ring-white/10 sm:right-5 sm:h-[9px] sm:w-[9px]" />
            </div>

            {/* Subtle top glass sheen (does not obscure UI) */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-white/[0.06] to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
