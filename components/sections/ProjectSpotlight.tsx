import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ParticleField } from "../ui/ParticleField";
import { TiltFrame } from "../ui/TiltFrame";
import { ArrowUpRightIcon, GitHubIcon } from "../ui/icons";
import type { Project } from "@/data/projects";

export function ProjectSpotlight({ project }: { project: Project }) {
  const host = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section
      id={`projeto-${project.slug}`}
      aria-labelledby="spotlight-title"
      className="relative isolate scroll-mt-20 overflow-hidden border-y border-line py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 75% 40%, rgba(239,59,76,0.13), transparent 60%), radial-gradient(ellipse 70% 60% at 15% 80%, rgba(251,197,49,0.10), transparent 60%), linear-gradient(180deg, #0a0d1a 0%, #0b1020 50%, #0a0d1a 100%)",
      }}
    >
      <ParticleField className="absolute inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-linear-to-b from-ink to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-ink to-transparent"
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#fbc531]/30 bg-[#fbc531]/10 px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-[#ef3b4c]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef3b4c]" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#fbc531]">
                  Projeto em destaque
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="spotlight-title"
                className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
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
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#fbc531]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.stats ? (
              <Reveal delay={240}>
                <dl className="mt-9 grid max-w-md grid-cols-3 gap-3">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-line-strong bg-ink/60 px-4 py-3.5 backdrop-blur-sm"
                    >
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-3xl font-semibold text-[#fbc531]">{s.value}</dd>
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#fbc531] px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_32px_-4px_rgba(251,197,49,0.55)] transition-all duration-300 hover:bg-[#ffd75e] hover:shadow-[0_0_44px_-2px_rgba(251,197,49,0.75)]"
                >
                  Ver projeto no ar
                  <ArrowUpRightIcon />
                </a>
                <Link
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-[#fbc531]/60 hover:text-[#fbc531]"
                >
                  Estudo de caso
                </Link>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-paper transition-colors duration-300 hover:border-[#fbc531]/60 hover:text-[#fbc531]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    Código
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <TiltFrame className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-8 -z-10 rounded-[3rem] bg-[#ef3b4c]/15 blur-3xl"
              />

              <div className="spin-border rounded-[1.35rem] p-[2px] shadow-2xl shadow-black/60">
                <div className="overflow-hidden rounded-[1.25rem] bg-[#0b1020]">
                  <div className="flex items-center gap-3 border-b border-line bg-ink-elevated px-4 py-2.5">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ef3b4c]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fbc531]/80" />
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
                      priority
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
                <div className="overflow-hidden rounded-[1.4rem] border-[3px] border-[#1c2236] bg-ink shadow-2xl shadow-black/70 ring-1 ring-[#fbc531]/40">
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
