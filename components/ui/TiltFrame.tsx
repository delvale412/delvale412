"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/** Wraps children in a card that tilts in 3D toward the pointer, with a moving glare. */
export function TiltFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${((px - 0.5) * 12).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - py) * 9).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--glare", "1");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--glare", "0");
  };

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`[perspective:1400px] ${className}`}
    >
      <div
        ref={ref}
        className="relative motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--glare,0)] transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(420px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.16), transparent 55%)",
          }}
        />
      </div>
    </div>
  );
}
