import Link from "next/link";
import type { Locale } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/** Server header — no scroll listener / pathname hydration on first paint. */
export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-[#090909]/85 shadow-[var(--shadow-soft)] backdrop-blur-xl">
      <div className="container-page relative flex h-20 items-center justify-between gap-6 md:gap-10">
        <div className="flex min-w-0 items-center gap-8 md:gap-12 xl:gap-16">
          <Logo href={localePath(locale)} />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={dictionary.common.primaryNav}
          >
            {mainNavigation.map((item) => {
              const href = item.href === "/" ? "" : item.href;
              return (
                <Link
                  key={item.key}
                  href={localePath(locale, href)}
                  className="rounded-2xl px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-[250ms] ease-out hover:bg-white/[0.04] hover:text-foreground"
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher
              locale={locale}
              label={dictionary.common.language}
            />
            <Button asChild variant="outline" size="sm">
              <Link href={localePath(locale, "/login")}>
                {dictionary.nav.login}
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href={localePath(locale, "/register")}>
                {dictionary.nav.register}
              </Link>
            </Button>
          </div>
          <MobileDrawer locale={locale} dictionary={dictionary} />
        </div>
      </div>
    </header>
  );
}
