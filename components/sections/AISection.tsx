import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { AgentPipeline } from "./AgentPipeline";
import { aiTopics, designTopics } from "@/data/ai";

export function AISection() {
  return (
    <section id="ia-design" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Diferencial"
          title="Software + Inteligência Artificial"
          subtitle="Na prática: uso IA pra automatizar tarefas repetitivas, criar assistentes dentro do seu site ou sistema, e acelerar o desenvolvimento do seu projeto."
        />

        <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
          {aiTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-line bg-ink-soft px-4 py-2 text-sm text-paper"
            >
              {topic}
            </span>
          ))}
        </Reveal>

        <div className="mt-10">
          <AgentPipeline />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Design</p>
            <h3 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              Código também começa no design.
            </h3>
            <p className="mt-4 max-w-md text-balance text-sm leading-relaxed text-muted sm:text-base">
              Antes de começar a construir, penso na experiência: como a interface se comporta,
              como a pessoa se move por ela e como cada decisão visual facilita o uso.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-wrap gap-2.5">
            {designTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-line bg-ink-soft px-4 py-2 text-sm text-paper"
              >
                {topic}
              </span>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
