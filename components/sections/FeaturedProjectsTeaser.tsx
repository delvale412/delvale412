import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { FeaturedProjectCard, ProjectCard } from "./ProjectCard";
import { ArrowUpRightIcon } from "../ui/icons";
import { projects } from "@/data/projects";

export function FeaturedProjectsTeaser() {
  const featured = projects.find((p) => p.featured);
  const second = projects.find((p) => !p.featured);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projetos reais"
            title="Do problema à solução no ar"
            subtitle="Alguns projetos que mostram como eu transformo uma necessidade em algo funcionando de verdade."
          />
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {featured ? <FeaturedProjectCard project={featured} /> : null}
          {second ? (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <ProjectCard project={second} />
            </div>
          ) : null}
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
