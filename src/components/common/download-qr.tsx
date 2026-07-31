import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { absoluteUrl } from "@/lib/utils";

type DownloadQrProps = {
  label: string;
  href: string;
};

/** Scannable QR — same row composition at every breakpoint; only scales. */
export async function DownloadQr({ label, href }: DownloadQrProps) {
  const target = href.startsWith("http") ? href : absoluteUrl(href);
  const dataUrl = await QRCode.toDataURL(target, {
    width: 192,
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#111111", light: "#FFFFFF" },
  });

  const officialMark = "TPOWER · Official";

  return (
    <Link
      href={href}
      className="inline-flex max-w-full items-center gap-2 rounded-[16px] border border-border bg-card p-2 shadow-[var(--shadow-soft)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:gap-3 sm:rounded-[20px] sm:p-3 md:gap-4 md:rounded-[24px] md:p-5"
    >
      <Image
        src={dataUrl}
        alt=""
        width={96}
        height={96}
        unoptimized
        decoding="async"
        className="h-12 w-12 shrink-0 rounded-lg border border-border bg-white sm:h-16 sm:w-16 sm:rounded-xl md:h-24 md:w-24"
      />
      <div className="min-w-0">
        <p className="truncate text-[10px] font-semibold text-foreground sm:text-xs md:text-sm">
          {label}
        </p>
        <p className="mt-0.5 text-[9px] text-muted-foreground sm:mt-1 sm:text-[10px] md:text-xs">
          {officialMark}
        </p>
      </div>
    </Link>
  );
}
