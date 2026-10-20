import Image from "next/image";

/**
 * Dark "stage" for the portrait: a glowing V monogram and diagonal light lines
 * behind the subject. The photo's black background is blended into the page
 * (mix-blend-mode: lighten), and the figure is taller than the frame, so the
 * head and shoulders break out of the card.
 */
export function PortraitStage({
  src,
  alt,
  width = 901,
  height = 1600,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="relative mt-20 aspect-4/5 lg:mt-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-3xl border border-line-strong"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 35%, rgba(124,92,240,0.35), transparent 65%), linear-gradient(160deg, #0c0b16 0%, #07070c 70%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 54px, rgba(167,139,250,0.09) 54px 55px)",
            maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 100%)",
          }}
        />
        <span className="beam absolute -top-10 left-[12%] h-[140%] w-px rotate-[25deg]" />
        <span className="beam beam-slow absolute -top-10 left-[58%] h-[140%] w-px rotate-[25deg]" />
      </div>

      {/* The figure is taller than the card, so the head breaks out of the frame. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          sizes="(min-width: 1024px) 460px, 360px"
          className="h-[112%] w-auto max-w-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  );
}
