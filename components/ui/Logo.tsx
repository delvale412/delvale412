import { useId } from "react";

/** The "V" monogram: two nested chevrons with a violet glow. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={`${id}-a`} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d4c8ff" />
          <stop offset="1" stopColor="#7c5cf0" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="24" y1="7" x2="24" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path
        d="M5 7 L24 41 L43 7"
        stroke={`url(#${id}-a)`}
        strokeWidth="4.5"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <path
        d="M15.5 7 L24 22 L32.5 7"
        stroke={`url(#${id}-b)`}
        strokeWidth="2.5"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Monogram + spaced wordmark: VALE / DESENVOLVIMENTOS. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 drop-shadow-[0_0_10px_rgba(167,139,250,0.55)]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.34em] text-paper">VALE</span>
        <span className="mt-1.5 hidden font-mono text-[8px] uppercase tracking-[0.36em] text-muted sm:block">
          Desenvolvimentos
        </span>
      </span>
    </span>
  );
}
