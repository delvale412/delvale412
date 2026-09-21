import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FeaturedProjectCard, ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trabalho"
          title="Projetos selecionados"
          subtitle="Soluções, interfaces e experiências digitais que desenvolvi."
        />

        <div className="mt-14 flex flex-col gap-6">
          {featured ? <FeaturedProjectCard project={featured} /> : null}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 80} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
