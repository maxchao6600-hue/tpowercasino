import { notFound } from "next/navigation";
import type { Locale } from "@/config/site";
import { getHtmlLang, isValidLocale, locales } from "@/config/i18n";
import { getDictionary } from "@/lib/dictionary";
import { SiteShell } from "@/components/layout/site-shell";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div lang={getHtmlLang(locale)}>
      <SiteShell locale={locale} dictionary={dictionary}>
        {children}
      </SiteShell>
    </div>
  );
}
