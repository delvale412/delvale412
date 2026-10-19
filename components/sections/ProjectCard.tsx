import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ArrowUpRightIcon } from "../ui/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article
        id={`projeto-${project.slug}`}
        className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-line bg-ink-soft"
      >
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
            {project.highlights.slice(0, 3).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-paper transition-colors duration-200 hover:text-accent"
            >
              Ver projeto
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <Link
              href={`/projetos/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              Estudo de caso
            </Link>

          </div>
        </div>
      </article>
    </Reveal>
  );
}
