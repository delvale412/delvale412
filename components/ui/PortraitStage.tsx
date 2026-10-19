import Image from "next/image";

/**
 * Dark "stage" for the portrait: a glowing V monogram and diagonal light lines
 * behind the photo. Swap `src` for a photo with a dark background and drop the
 * edge mask (`fade`) to let the stage show through.
 */
export function PortraitStage({
  src,
  alt,
  fade = true,
  objectPosition = "50% 10%",
}: {
  src: string;
  alt: string;
  fade?: boolean;
  objectPosition?: string;
}) {
  const mask = fade
    ? "radial-gradient(ellipse 70% 78% at 50% 44%, black 48%, transparent 100%)"
    : undefined;

  return (
    <div
      className="relative aspect-4/5 overflow-hidden rounded-3xl border border-line-strong"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 65% 35%, rgba(124,92,240,0.35), transparent 65%), linear-gradient(160deg, #0c0b16 0%, #07070c 70%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 54px, rgba(167,139,250,0.09) 54px 55px)",
          maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 100%)",
        }}
      />
      <span aria-hidden="true" className="beam absolute -top-10 left-[12%] h-[140%] w-px rotate-[25deg]" />
      <span aria-hidden="true" className="beam beam-slow absolute -top-10 left-[58%] h-[140%] w-px rotate-[25deg]" />

      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="absolute top-[4%] left-1/2 h-[92%] w-[112%] -translate-x-1/2 opacity-60"
        style={{ filter: "drop-shadow(0 0 22px rgba(167,139,250,0.65))" }}
      >
        <path d="M3 6 L24 43 L45 6" stroke="url(#stage-v)" strokeWidth="2.2" strokeLinecap="square" />
        <path d="M13 6 L24 25 L35 6" stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeLinecap="square" />
        <defs>
          <linearGradient id="stage-v" x1="3" y1="6" x2="45" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e4dcff" />
            <stop offset="1" stopColor="#7c5cf0" />
          </linearGradient>
        </defs>
      </svg>

      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 420px, 340px"
        className="object-cover"
        style={{ objectPosition, maskImage: mask, WebkitMaskImage: mask }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
    </div>
  );
}
