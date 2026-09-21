import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { process } from "@/data/process";

export function Process() {
  return (
    <section id="processo" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Método" title="Da ideia ao produto." />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.number} delay={(i % 4) * 80}>
              <div className="relative pl-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{step.number}</span>
                  <div className="h-px flex-1 bg-line-strong" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
