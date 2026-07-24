import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

type WhatsAppCardProps = {
  title: string;
  description: string;
  cta: string;
};

export function WhatsAppCard({ title, description, cta }: WhatsAppCardProps) {
  return (
    <div className="rounded-[24px] border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-[250ms] ease-out hover:-translate-y-[6px] hover:shadow-[var(--shadow-lift)] md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="h4-display mt-4 text-foreground">{title}</h3>
      <p className="mt-2 text-body text-muted-foreground">{description}</p>
      <Button asChild variant="secondary" className="mt-5">
        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta}
        </a>
      </Button>
    </div>
  );
}
