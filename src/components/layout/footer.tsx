import Link from "next/link";
import { Send, Video } from "lucide-react";
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

export function Footer({ locale, dictionary }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="section-y">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-12 xl:gap-16">
          <div className="xl:col-span-4">
            <Logo href={localePath(locale)} />
            <p className="mt-6 max-w-sm text-body text-muted-foreground">
              {dictionary.footer.tagline}
            </p>
            <div className="mt-6 space-y-2 text-small">
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
            <div className="mt-8 flex items-center gap-3">
              <SocialLink href={siteConfig.social.facebook} label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={siteConfig.social.telegram} label="Telegram">
                <Send className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.youtube} label="YouTube">
                <Video className="h-4 w-4" />
              </SocialLink>
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

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-small text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. {dictionary.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={localePath(locale, "/responsible-gaming")}
              className="hover:text-foreground"
            >
              {dictionary.footer.responsible}
            </Link>
            <Link
              href={localePath(locale, "/privacy-policy")}
              className="hover:text-foreground"
            >
              {dictionary.footer.privacy}
            </Link>
            <Link
              href={localePath(locale, "/terms-and-conditions")}
              className="hover:text-foreground"
            >
              {dictionary.footer.terms}
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="hover:text-foreground"
            >
              {dictionary.footer.contact}
            </Link>
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
    <div className="xl:col-span-2">
      <p className="text-sm font-bold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={localePath(locale, item.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-muted-foreground transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground hover:shadow-[var(--shadow-soft)]"
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
