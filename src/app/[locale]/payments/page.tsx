import { permanentRedirect } from "next/navigation";
import { isValidLocale, localePath } from "@/config/i18n";
import type { Locale } from "@/config/site";

type PageProps = { params: Promise<{ locale: string }> };

export default async function PaymentsRedirectPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isValidLocale(raw)) permanentRedirect("/en/payment-methods");
  permanentRedirect(localePath(raw as Locale, "/payment-methods"));
}
