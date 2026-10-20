import type { ReactNode } from "react";
import Image from "next/image";
import { LogoMark } from "./Logo";

/**
 * Stage for the portrait: a glowing gradient-bordered frame with corner brackets,
 * a faint grid, diagonal light beams and the Vale monogram in the corner. The
 * figure is a transparent cutout, taller than the frame, so the head breaks out
 * at the top and the legs are cropped at the bottom.
 */
export function PortraitStage({
  src,
  alt,
  width = 901,
  height = 1600,
  badge,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** Info card aligned to the bottom edge of the figure. */
  badge?: ReactNode;
}) {
  return (
    <div className="relative mt-20 aspect-4/5 lg:mt-24">
      {/* Glow behind the whole frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(124,92,240,0.35), transparent)" }}
      />

      {/* Gradient border: padded wrapper whose background shows through a 1px ring */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl p-px"
        style={{
          background:
            "linear-gradient(150deg, rgba(228,220,255,0.7) 0%, rgba(124,92,240,0.25) 35%, rgba(124,92,240,0.05) 60%, rgba(167,139,250,0.55) 100%)",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 65% 35%, rgba(124,92,240,0.32), transparent 65%), linear-gradient(160deg, #0c0b16 0%, #06060a 70%)",
          }}
        >
          {/* Faint grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(167,139,250,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,139,250,0.07) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "radial-gradient(ellipse 80% 75% at 55% 40%, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 55% 40%, black 30%, transparent 100%)",
            }}
          />
          {/* Diagonal light beams */}
          <span aria-hidden="true" className="beam absolute -top-10 left-[12%] h-[140%] w-px rotate-[25deg]" />
          <span aria-hidden="true" className="beam beam-slow absolute -top-10 left-[58%] h-[140%] w-px rotate-[25deg]" />

          {/* Monogram badge in the top-left corner */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 rounded-full border border-white/10 bg-ink/50 py-1.5 pr-3.5 pl-2 backdrop-blur-sm">
            <LogoMark className="h-6 w-6 drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]" />
            <span className="font-display text-[11px] font-semibold tracking-[0.3em] text-paper">VALE</span>
          </div>

          {/* Soft sheen across the top third */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.04), transparent)" }}
          />
        </div>
      </div>

      {/* Corner brackets */}
      <span aria-hidden="true" className="absolute -top-2 -left-2 h-10 w-10 rounded-tl-2xl border-t-2 border-l-2 border-accent/80" />
      <span aria-hidden="true" className="absolute -right-2 -bottom-2 h-10 w-10 rounded-br-2xl border-r-2 border-b-2 border-accent/80" />
      <span aria-hidden="true" className="absolute top-6 -right-2 h-6 w-6 border-r-2 border-t-2 border-accent/40" />
      <span aria-hidden="true" className="absolute bottom-6 -left-2 h-6 w-6 border-b-2 border-l-2 border-accent/40" />

      {/* Figure: taller than the frame, so it breaks out */}
      <div className="pointer-events-none absolute inset-x-0 z-10 flex justify-center" style={{ bottom: "-16%" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          sizes="(min-width: 1024px) 460px, 360px"
          className="h-[112%] w-auto max-w-none drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
          style={{
            maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
          }}
        />
        {badge ? <div className="pointer-events-auto">{badge}</div> : null}
      </div>
    </div>
  );
}
