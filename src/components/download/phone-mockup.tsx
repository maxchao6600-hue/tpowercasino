import Image from "next/image";

const APP_SCREEN = "/images/download/tpower-app-home-screen.png";

type PhoneMockupProps = {
  alt: string;
  title: string;
  priority?: boolean;
};

/** Desktop-scaled phone frame — same composition at every width. */
export function PhoneMockup({
  alt,
  title,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className="relative w-full min-w-0">
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(229,9,20,0.5),transparent_68%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-full bg-black/50 blur-xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[142px] drop-shadow-[0_28px_64px_rgba(0,0,0,0.65)] sm:max-w-[240px] md:w-[92%] md:max-w-[390px]">
        <div className="absolute inset-0 rounded-[1.85rem] bg-gradient-to-b from-[#3a3a3c] via-[#1c1c1e] to-[#0a0a0a] p-[2px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[2.6rem] sm:p-[2.5px] md:rounded-[2.85rem]">
          <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-black sm:rounded-[2.45rem] md:rounded-[2.7rem]">
            <div
              className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-[3px] overflow-hidden rounded-[1.55rem] bg-[#0a0a0a] sm:inset-[3.5px] sm:rounded-[2.3rem] md:inset-[4px] md:rounded-[2.55rem]">
              <Image
                src={APP_SCREEN}
                alt={alt}
                title={title}
                fill
                priority={priority}
                quality={priority ? 100 : 75}
                sizes="(max-width: 640px) 142px, (max-width: 768px) 240px, 390px"
                className="object-contain object-top"
              />
            </div>

            <div
              className="pointer-events-none absolute left-1/2 top-[7px] z-10 h-[14px] w-[56px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:top-3 sm:h-[24px] sm:w-[102px] md:top-[14px] md:h-[26px] md:w-[110px]"
              aria-hidden="true"
            >
              <span className="absolute right-[10px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full bg-[#0a1a22] ring-1 ring-white/10 sm:right-5 sm:h-[9px] sm:w-[9px]" />
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-10 bg-gradient-to-b from-white/[0.04] to-transparent sm:h-12 md:h-16"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
