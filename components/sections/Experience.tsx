import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ExperienceCard } from "./ExperienceCard";
import { Timeline } from "./Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência"
          subtitle="Atuação profissional como desenvolvedor, em paralelo à formação em Engenharia de Software."
        />

        <div className="mt-14 flex flex-col gap-6">
          {experience.map((entry, i) => (
            <ExperienceCard key={entry.id} entry={entry} delay={i * 100} />
          ))}
        </div>

        <Timeline />
      </Container>
    </section>
  );
}
