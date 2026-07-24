import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type ShareLinksProps = {
  title: string;
  path: string;
  label: string;
};

export function ShareLinks({ title, path, label }: ShareLinksProps) {
  const url = encodeURIComponent(absoluteUrl(path));
  const text = encodeURIComponent(title);

  const links = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${url}&text=${text}`,
    },
    {
      name: "Email",
      href: `mailto:?subject=${text}&body=${url}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-small font-semibold text-muted-foreground">{label}</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border bg-card px-3 py-2 text-small font-semibold text-foreground transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-foreground/15"
          aria-label={`Share on ${link.name}`}
        >
          {link.name}
        </a>
      ))}
      <span className="sr-only">{siteConfig.name}</span>
    </div>
  );
}
