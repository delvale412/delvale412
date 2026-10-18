"use client";

import { useEffect, useRef } from "react";

type Vec3 = [number, number, number];

type Particle = {
  p: Vec3;
  drift: Vec3;
  hot: boolean;
  size: number;
};

type Variant = "spotlight" | "global";

// [main, hot] RGB triplets per variant
const PALETTES: Record<Variant, [string, string]> = {
  spotlight: ["251, 197, 49", "239, 59, 76"],
  global: ["167, 139, 250", "226, 214, 255"],
};

// Icosahedron (d20) geometry
const PHI = (1 + Math.sqrt(5)) / 2;
const D20_VERTS: Vec3[] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
];
const D20_FACES: [number, number, number][] = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
];
const D20_EDGES: [number, number][] = (() => {
  const seen = new Set<string>();
  const edges: [number, number][] = [];
  for (const [a, b, c] of D20_FACES) {
    for (const [x, y] of [[a, b], [b, c], [c, a]] as const) {
      const key = x < y ? `${x}-${y}` : `${y}-${x}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([x, y]);
      }
    }
  }
  return edges;
})();

function rotate(v: Vec3, rx: number, ry: number, rz: number): Vec3 {
  let [x, y, z] = v;
  const cy = Math.cos(ry), sy = Math.sin(ry);
  [x, z] = [x * cy + z * sy, -x * sy + z * cy];
  const cx = Math.cos(rx), sx = Math.sin(rx);
  [y, z] = [y * cx - z * sx, y * sx + z * cx];
  const cz = Math.cos(rz), sz = Math.sin(rz);
  [x, y] = [x * cz - y * sz, x * sz + y * cz];
  return [x, y, z];
}

/**
 * Animated 3D particle field with a wireframe d20, drawn on a 2D canvas with
 * a hand-rolled perspective projection (no 3D library, so it stays light).
 */
export function ParticleField({
  className = "",
  variant = "spotlight",
}: {
  className?: string;
  variant?: Variant;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const [GOLD, CRIT] = PALETTES[variant];
    const isGlobal = variant === "global";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    let visible = true;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let t = 0;
    let last = 0;

    const build = () => {
      const base = w < 640 ? 52 : w < 1024 ? 80 : 120;
      const count = isGlobal ? Math.round(base * 0.8) : base;
      particles = Array.from({ length: count }, () => ({
        p: [Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1],
        drift: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02 - 0.012,
          (Math.random() - 0.5) * 0.02,
        ],
        hot: Math.random() < 0.22,
        size: 0.8 + Math.random() * 1.6,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      if (!running) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const fov = Math.min(w, h) * 1.15;
      const cx = w / 2;
      const cy = h / 2;
      const scroll = isGlobal ? window.scrollY : 0;
      const yaw = t * 0.05 + pointer.x * 0.5 + scroll * 0.0007;
      const pitch = pointer.y * 0.28 + Math.sin(t * 0.2) * 0.08 + scroll * 0.0002;
      const span = Math.max(w, h) * 0.62;

      const proj: { x: number; y: number; s: number; z: number; hot: boolean; size: number }[] = [];
      for (const pt of particles) {
        const [rx, ry, rz] = rotate(pt.p, pitch, yaw, 0);
        const z = rz * span + span * 1.7;
        const s = fov / z;
        proj.push({
          x: cx + rx * span * s,
          y: cy + ry * span * s,
          s,
          z: rz,
          hot: pt.hot,
          size: pt.size,
        });
      }

      // constellation lines between nearby particles
      const maxDist = w < 640 ? 70 : 105;
      ctx.lineWidth = 0.7;
      for (let i = 0; i < proj.length; i++) {
        const a = proj[i];
        for (let j = i + 1; j < proj.length; j++) {
          const b = proj[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const k = 1 - Math.sqrt(d2) / maxDist;
            const depth = Math.min(1, Math.max(0.15, (a.s + b.s) * 0.75));
            ctx.strokeStyle = `rgba(${a.hot && b.hot ? CRIT : GOLD}, ${k * (isGlobal ? 0.28 : 0.32) * depth})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // particles, far to near
      proj.sort((a, b) => b.z - a.z);
      for (const pr of proj) {
        const depth = Math.min(1, Math.max(0.2, pr.s * 0.9));
        const color = pr.hot ? CRIT : GOLD;
        const r = pr.size * (0.6 + pr.s);
        if (pr.size > 1.9) {
          const g = ctx.createRadialGradient(pr.x, pr.y, 0, pr.x, pr.y, r * 5);
          g.addColorStop(0, `rgba(${color}, ${0.35 * depth})`);
          g.addColorStop(1, `rgba(${color}, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(pr.x, pr.y, r * 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${color}, ${(0.25 + 0.7 * depth) * (isGlobal ? 0.95 : 1)})`;
        ctx.beginPath();
        ctx.arc(pr.x, pr.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (isGlobal) return;

      // wireframe d20
      const dieR = w < 1024 ? 38 : Math.min(Math.min(w, h) * 0.2, 140);
      const dieX = w - dieR * (w < 1024 ? 1.5 : 1.9);
      const dieY = w < 1024 ? 46 : h * 0.16 + dieR;
      const bob = Math.sin(t * 0.9) * 6;
      const norm = Math.hypot(1, PHI);
      const dv = D20_VERTS.map((v) => {
        const [rx, ry, rz] = rotate(
          [v[0] / norm, v[1] / norm, v[2] / norm],
          t * 0.45 + pointer.y * 0.6,
          t * 0.62 + pointer.x * 0.9,
          t * 0.2,
        );
        const persp = 1 / (1 - rz * 0.35);
        return { x: dieX + rx * dieR * persp, y: dieY + bob + ry * dieR * persp, z: rz };
      });

      const glow = ctx.createRadialGradient(dieX, dieY + bob, 0, dieX, dieY + bob, dieR * 1.9);
      glow.addColorStop(0, `rgba(${CRIT}, 0.2)`);
      glow.addColorStop(0.5, `rgba(${GOLD}, 0.06)`);
      glow.addColorStop(1, `rgba(${GOLD}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(dieX, dieY + bob, dieR * 1.9, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineCap = "round";
      const edges = D20_EDGES.map(([a, b]) => ({ a: dv[a], b: dv[b], z: (dv[a].z + dv[b].z) / 2 }));
      edges.sort((e1, e2) => e1.z - e2.z);
      for (const e of edges) {
        const front = (e.z + 1) / 2;
        ctx.strokeStyle = `rgba(${GOLD}, ${0.18 + front * 0.6})`;
        ctx.lineWidth = 0.8 + front * 1.1;
        ctx.beginPath();
        ctx.moveTo(e.a.x, e.a.y);
        ctx.lineTo(e.b.x, e.b.y);
        ctx.stroke();
      }
      for (const v of dv) {
        const front = (v.z + 1) / 2;
        ctx.fillStyle = `rgba(${CRIT}, ${0.4 + front * 0.6})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.6 + front * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      t += dt;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      for (const pt of particles) {
        pt.p[0] += pt.drift[0] * dt;
        pt.p[1] += pt.drift[1] * dt;
        pt.p[2] += pt.drift[2] * dt;
        for (let k = 0; k < 3; k++) {
          if (pt.p[k] > 1) pt.p[k] = -1;
          else if (pt.p[k] < -1) pt.p[k] = 1;
        }
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduced || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    t = 2;
    draw();
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [variant]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
}
