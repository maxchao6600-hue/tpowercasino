import Image from "next/image";
import {
  AUTH_LINK_REL,
  OFFICIAL_QR_IMAGE,
  OFFICIAL_REGISTER_URL,
} from "@/config/auth";

type DownloadQrProps = {
  label: string;
  /** Ignored — QR always opens the official registration URL. */
  href?: string;
};

/** Official registration QR — static asset (never generated). */
export function DownloadQr({ label }: DownloadQrProps) {
  return (
    <a
      href={OFFICIAL_REGISTER_URL}
      target="_blank"
      rel={AUTH_LINK_REL}
      className="inline-flex max-w-full items-center gap-2 rounded-[16px] border border-border bg-card p-2 shadow-[var(--shadow-soft)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:gap-3 sm:rounded-[20px] sm:p-3 md:gap-4 md:rounded-[24px] md:p-5"
    >
      <Image
        src={OFFICIAL_QR_IMAGE}
        alt={label}
        width={192}
        height={192}
        unoptimized
        decoding="async"
        className="h-12 w-12 shrink-0 rounded-lg border border-border bg-white object-contain sm:h-16 sm:w-16 sm:rounded-xl md:h-24 md:w-24"
      />
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs md:text-sm">
          {label}
        </p>
        <p className="mt-0.5 text-[9px] text-muted-foreground sm:mt-1 sm:text-[10px] md:text-xs">
          TPOWER · Official
        </p>
      </div>
    </a>
  );
}
