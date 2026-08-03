import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { localePath } from "@/config/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/common/container";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

/**
 * Desktop footer track — same 12-col composition as xl.
 * Narrow viewports scroll horizontally; columns never compress.
 */
const FOOTER_TRACK =
  "grid min-w-[1200px] grid-cols-12 gap-10 xl:min-w-0 xl:gap-12";

export function Footer({ locale, dictionary }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="section-y min-w-0 max-w-full">
        {/* Desktop composition: logo (4) + About/Games/Support/Legal (2 each). */}
        <div className="df-scroll">
          <div className={FOOTER_TRACK}>
            <div className="col-span-4">
              {/* Keep desktop column span; constrain copy so the first scroll
                  paint stays fully readable inside a ~390px viewport. */}
              <div className="max-w-[20rem]">
              <Logo href={localePath(locale)} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-body">
                {dictionary.footer.tagline}
              </p>
              <div className="mt-4 space-y-2 text-xs sm:mt-6 sm:text-small">
                <p className="font-medium text-foreground">
                  {siteConfig.address[locale]}
                </p>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.supportEmail}
                </a>
                <p className="text-muted-foreground">{siteConfig.phone}</p>
              </div>
              <div className="mt-5 flex flex-nowrap items-center gap-2 sm:mt-8 sm:gap-3">
                <SocialLink
                  href={siteConfig.social.whatsapp}
                  label="WhatsApp Customer Service"
                >
                  <MessageCircle className="h-4 w-4" />
                </SocialLink>
                <SocialLink
                  href={siteConfig.social.telegram}
                  label="Telegram Customer Service"
                >
                  <Send className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={siteConfig.social.facebook} label="Facebook">
                  <FacebookIcon />
                </SocialLink>
                <SocialLink href={siteConfig.social.instagram} label="Instagram">
                  <InstagramIcon />
                </SocialLink>
                <SocialLink href={siteConfig.social.threads} label="Threads">
                  <ThreadsIcon />
                </SocialLink>
              </div>
              </div>
            </div>

            <FooterColumn
              title={dictionary.footer.about}
              locale={locale}
              items={footerNavigation.about}
            />
            <FooterColumn
              title={dictionary.footer.games}
              locale={locale}
              items={footerNavigation.games}
            />
            <FooterColumn
              title={dictionary.footer.support}
              locale={locale}
              items={footerNavigation.support}
            />
            <FooterColumn
              title={dictionary.footer.legal}
              locale={locale}
              items={footerNavigation.legal}
            />
          </div>
        </div>

        <div className="df-scroll mt-8 sm:mt-12 lg:mt-16">
          <div
            className={`flex flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:pt-8 sm:text-small ${"min-w-[1200px] xl:min-w-0"}`}
          >
            <p className="shrink-0 whitespace-nowrap">
              © {year} {siteConfig.name}. {dictionary.footer.rights}
            </p>
            <div className="flex flex-nowrap items-center gap-1 sm:gap-2">
              <Link
                href={localePath(locale, "/responsible-gaming")}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 hover:text-foreground"
              >
                {dictionary.footer.responsible}
              </Link>
              <Link
                href={localePath(locale, "/privacy-policy")}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 hover:text-foreground"
              >
                {dictionary.footer.privacy}
              </Link>
              <Link
                href={localePath(locale, "/terms-and-conditions")}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 hover:text-foreground"
              >
                {dictionary.footer.terms}
              </Link>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap px-2 hover:text-foreground"
              >
                {dictionary.footer.contact}
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {dictionary.common.ageNotice}
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  locale,
  items,
}: {
  title: string;
  locale: Locale;
  items: readonly { key: string; href: string; label: Record<Locale, string> }[];
}) {
  return (
    <div className="col-span-2">
      <p className="whitespace-nowrap text-xs font-bold text-foreground sm:text-sm">
        {title}
      </p>
      <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={localePath(locale, item.href)}
              className="block w-full py-1.5 text-xs leading-snug text-muted-foreground transition-colors hover:text-foreground sm:py-0 sm:text-sm"
            >
              {item.label[locale]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border text-muted-foreground transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground hover:shadow-[var(--shadow-soft)]"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M16.5 9.2c-.3-2.1-1.7-3.5-4.2-3.5-2.8 0-4.6 1.8-4.6 4.7 0 3.2 1.8 4.8 4.9 4.8 1.1 0 2.1-.2 2.9-.5-.2.8-.6 1.4-1.2 1.8-.7.5-1.7.7-2.9.7-2.1 0-3.7-.6-4.7-1.8-1-1.1-1.5-2.8-1.5-4.9s.5-3.8 1.5-4.9c1-1.2 2.6-1.8 4.7-1.8 2.4 0 4.1.7 5.1 2.1.6.8 1 1.9 1.1 3.3h-2.1zm-4.1 4.2c-1.6 0-2.5-.9-2.5-2.5s.9-2.5 2.5-2.5 2.4.9 2.5 2.4c-.7.4-1.5.6-2.5.6z" />
    </svg>
  );
}
