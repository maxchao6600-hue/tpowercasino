import { permanentRedirect } from "next/navigation";
import { isValidLocale, localePath } from "@/config/i18n";
import type { Locale } from "@/config/site";

type PageProps = { params: Promise<{ locale: string }> };

export default async function TermsRedirectPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) permanentRedirect("/en/terms-and-conditions");
  permanentRedirect(localePath(raw as Locale, "/terms-and-conditions"));
}
