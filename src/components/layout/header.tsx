import Link from "next/link";
import type { Locale } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/**
 * Desktop composition at every width: Logo | Nav | Language | Login | Register.
 * Only the nav row scrolls; Login + Register stay pinned in view.
 */
export function Header({ locale, dictionary }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-[#090909]/85 shadow-[var(--shadow-soft)] backdrop-blur-xl">
      <div className="container-page relative flex h-14 min-w-0 items-center gap-1.5 sm:h-16 sm:gap-3 lg:h-20 lg:gap-8">
        <div className="shrink-0">
          <Logo href={localePath(locale)} />
        </div>

        <nav
          className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={dictionary.common.primaryNav}
        >
          {mainNavigation.map((item) => {
            const href = item.href === "/" ? "" : item.href;
            return (
              <Link
                key={item.key}
                href={localePath(locale, href)}
                className="shrink-0 rounded-lg px-1.5 py-1 text-[9px] font-semibold text-muted-foreground transition-colors duration-[250ms] ease-out hover:bg-white/[0.04] hover:text-foreground sm:rounded-2xl sm:px-2.5 sm:py-2 sm:text-xs md:px-3 md:text-sm"
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2.5 lg:gap-3">
          <LanguageSwitcher
            locale={locale}
            label={dictionary.common.language}
          />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-7 px-1.5 text-[9px] sm:h-9 sm:px-3 sm:text-xs md:text-sm"
          >
            <Link href={localePath(locale, "/login")}>
              {dictionary.nav.login}
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="h-7 px-1.5 text-[9px] sm:h-9 sm:px-3 sm:text-xs md:text-sm"
          >
            <Link href={localePath(locale, "/register")}>
              {dictionary.nav.register}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
