import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { absoluteUrl } from "@/lib/utils";

type DownloadQrProps = {
  label: string;
  href: string;
};

/** Scannable QR encoding the official install URL. */
export async function DownloadQr({ label, href }: DownloadQrProps) {
  const target = href.startsWith("http") ? href : absoluteUrl(href);
  const dataUrl = await QRCode.toDataURL(target, {
    width: 192,
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#111111", light: "#FFFFFF" },
  });

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-4 rounded-[24px] border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:p-5"
      aria-label={label}
    >
      <Image
        src={dataUrl}
        alt=""
        width={96}
        height={96}
        unoptimized
        className="h-24 w-24 rounded-xl border border-border bg-white"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">TPOWER · Official</p>
      </div>
    </Link>
  );
}
