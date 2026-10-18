import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectSpotlight } from "./ProjectSpotlight";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      {featured ? <ProjectSpotlight project={featured} /> : null}

      <section id="projetos" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Mais projetos"
            title="Do problema à solução no ar"
            subtitle="Cada projeto parte de uma necessidade real e termina em algo funcionando de verdade."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 80} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
