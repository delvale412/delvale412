import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { solutions } from "@/data/solutions";

export function Solutions() {
  return (
    <section id="o-que-faco" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capacidades"
          title="O que posso construir"
          subtitle="Entre as soluções que desenvolvo e exploro estão:"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-line bg-ink-soft p-6 transition-colors duration-300 hover:border-accent/50">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-accent">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
