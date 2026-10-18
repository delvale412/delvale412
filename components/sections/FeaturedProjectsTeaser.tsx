import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRightIcon } from "../ui/icons";
import { projects } from "@/data/projects";

export function FeaturedProjectsTeaser() {
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Mais projetos"
          title="Do problema à solução no ar"
          subtitle="Cada projeto parte de uma necessidade real e termina em algo funcionando de verdade."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {others.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 80} />
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-paper"
          >
            Ver todos os projetos
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
