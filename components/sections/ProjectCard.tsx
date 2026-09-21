import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ArrowUpRightIcon, GitHubIcon } from "../ui/icons";
import type { Project } from "@/data/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group overflow-hidden rounded-3xl border border-line bg-ink-soft">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-16/11 lg:aspect-auto">
            <Image
              src={project.image.desktop}
              alt={`Captura de tela do projeto ${project.title}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent lg:bg-linear-to-r" />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Projeto em destaque
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-faint">{project.category}</p>
            </div>

            <p className="text-balance text-base leading-relaxed text-muted">{project.problem}</p>

            <ul className="flex flex-col gap-2 text-sm text-muted">
              {project.build.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
              >
                Ver projeto
                <ArrowUpRightIcon />
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Ver código
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-soft">
        <div className="relative aspect-16/10">
          <Image
            src={project.image.desktop}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-7">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-faint">{project.category}</p>
          </div>

          <p className="flex-1 text-sm leading-relaxed text-muted">{project.problem}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-paper transition-colors duration-200 hover:text-accent"
            >
              Ver projeto
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                Código
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
