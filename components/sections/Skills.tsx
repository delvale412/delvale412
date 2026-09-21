import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Stack" title="Tecnologias" />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 2) * 100}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ink-soft px-4 py-2 text-sm text-paper transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
