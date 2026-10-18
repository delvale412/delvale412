import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ParticleField } from "../ui/ParticleField";
import { TiltFrame } from "../ui/TiltFrame";
import { ArrowUpRightIcon, GitHubIcon } from "../ui/icons";
import type { Project, SpotlightTheme } from "@/data/projects";

const DEFAULT_THEME: SpotlightTheme = {
  shape: "icosahedron",
  accent: "#fbc531",
  accent2: "#ef3b4c",
  base: "#0b1020",
};

function rgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

export function ProjectSpotlight({ project, flip = false }: { project: Project; flip?: boolean }) {
  const theme = project.spotlight ?? DEFAULT_THEME;
  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const titleId = `spotlight-title-${project.slug}`;
  const a = rgb(theme.accent);
  const b = rgb(theme.accent2);

  const sectionStyle = {
    "--sp-a": theme.accent,
    "--sp-b": theme.accent2,
    background: `radial-gradient(ellipse 80% 70% at ${flip ? 25 : 75}% 40%, rgba(${b}, 0.14), transparent 60%), radial-gradient(ellipse 70% 60% at ${flip ? 85 : 15}% 80%, rgba(${a}, 0.10), transparent 60%), linear-gradient(180deg, ${theme.base} 0%, color-mix(in srgb, ${theme.base} 92%, white) 50%, ${theme.base} 100%)`,
  } as CSSProperties;

  return (
    <section
      id={`projeto-${project.slug}`}
      aria-labelledby={titleId}
      className="relative isolate scroll-mt-20 overflow-hidden border-y border-line py-20 sm:py-28"
      style={sectionStyle}
    >
      <ParticleField
        className="absolute inset-0 -z-10 h-full w-full"
        shape={theme.shape}
        main={a}
        hot={b}
        align={flip ? "left" : "right"}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-linear-to-b from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-ink to-transparent"
      />

      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-16 lg:gap-12 ${
            flip ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"
          }`}
        >
          <div className={flip ? "lg:order-2" : ""}>
            <Reveal>
              <div className="sp-pill inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="sp-bg-b animate-ping-soft absolute inline-flex h-full w-full rounded-full" />
                  <span className="sp-bg-b relative inline-flex h-2 w-2 rounded-full" />
                </span>
                <span className="sp-text font-mono text-[11px] uppercase tracking-[0.2em]">
                  {project.featured ? "Projeto em destaque" : "Projeto no ar"}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id={titleId}
                className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.25rem]"
              >
                <span className="text-crit-gradient">{project.title}</span>
              </h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                {project.category}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-paper/80 sm:text-lg">
                {project.problem}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-7 flex max-w-xl flex-col gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                {project.build.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="sp-bg mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.stats ? (
              <Reveal delay={240}>
                <dl
                  className="mt-9 grid max-w-md gap-3"
                  style={{ gridTemplateColumns: `repeat(${project.stats.length}, minmax(0, 1fr))` }}
                >
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-line-strong bg-ink/60 px-4 py-3.5 backdrop-blur-sm"
                    >
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="sp-text font-display text-3xl font-semibold">{s.value}</dd>
                      <p aria-hidden="true" className="mt-0.5 text-[11px] leading-tight text-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ) : null}

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink transition-all duration-300"
                >
                  Ver projeto no ar
                  <ArrowUpRightIcon />
                </a>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="sp-ghost inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-paper transition-colors duration-300"
                >
                  Estudo de caso
                </Link>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-ghost inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-paper transition-colors duration-300"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Código
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className={flip ? "lg:order-1" : ""}>
            <TiltFrame className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-[3rem] blur-3xl"
                style={{ backgroundColor: `rgba(${b}, 0.15)` }}
              />

              <div className="spin-border rounded-[1.35rem] p-[2px] shadow-2xl shadow-black/60">
                <div className="overflow-hidden rounded-[1.25rem] bg-ink-soft">
                  <div className="flex items-center gap-3 border-b border-line bg-ink-elevated px-4 py-2.5">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="sp-bg-b h-2.5 w-2.5 rounded-full opacity-80" />
                      <span className="sp-bg h-2.5 w-2.5 rounded-full opacity-80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="min-w-0 flex-1 truncate rounded-md bg-ink px-3 py-1 text-center font-mono text-[11px] text-faint">
                      {host}
                    </div>
                  </div>
                  <div className="relative aspect-16/10">
                    <Image
                      src={project.image.desktop}
                      alt={`Captura de tela do projeto ${project.title}`}
                      fill
                      priority={project.featured}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div
                className="animate-float absolute -right-3 -bottom-10 w-[27%] min-w-[96px] max-w-[160px] sm:-right-6 lg:-right-8"
                style={{ transform: "translate3d(0, 0, 70px)" }}
              >
                <div className="sp-ring overflow-hidden rounded-[1.4rem] border-[3px] border-[#1c2236] bg-ink shadow-2xl shadow-black/70">
                  <div className="relative aspect-780/1688">
                    <Image
                      src={project.image.mobile}
                      alt={`Versão mobile do projeto ${project.title}`}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </TiltFrame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
