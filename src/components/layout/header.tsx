"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/site";
import { mainNavigation } from "@/config/navigation";
import { localePath, stripLocaleFromPath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/**
 * Desktop: Logo | Nav | Language | Login | Register
 * Mobile:  Hamburger | Logo | … | Language | Login | Register
 */
export function Header({ locale, dictionary }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "";
  const currentPath = stripLocaleFromPath(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-[250ms] ease-out",
        scrolled
          ? "border-border/80 bg-[#090909]/75 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-border/40 bg-[#090909]/45 backdrop-blur-md",
      )}
    >
      <div className="container-page relative flex h-20 items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        <div className="lg:hidden">
          <MobileDrawer locale={locale} dictionary={dictionary} />
        </div>

        <Logo href={localePath(locale)} />

        <nav
          className="hidden min-w-0 flex-1 items-center gap-0.5 lg:flex"
          aria-label={dictionary.common.primaryNav}
        >
          {mainNavigation.map((item) => {
            const href = item.href === "/" ? "" : item.href;
            const itemPath = href || "/";
            const active =
              itemPath === "/"
                ? currentPath === "/"
                : currentPath === itemPath ||
                  currentPath.startsWith(`${itemPath}/`);

            return (
              <Link
                key={item.key}
                href={localePath(locale, href)}
                className={cn(
                  "rounded-2xl px-3 py-2 text-sm font-semibold transition-colors duration-[250ms] ease-out",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
                )}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher
            locale={locale}
            label={dictionary.common.language}
          />
          <Button asChild variant="outline" size="sm" className="h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm">
            <Link href={localePath(locale, "/login")}>
              {dictionary.nav.login}
            </Link>
          </Button>
          <Button asChild size="sm" className="h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm">
            <Link href={localePath(locale, "/register")}>
              {dictionary.nav.register}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
