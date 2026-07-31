import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  className?: string;
};

/** Official TPOWER brand mark only — no HTML wordmark, no rebuilt text logo. */
export function Logo({ href, className }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center self-center",
        className,
      )}
      aria-label="TPOWER Online Casino"
    >
      <Image
        src="/logo/tpower-logo.png"
        alt="TPOWER Online Casino"
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
        priority
      />
    </Link>
  );
}
