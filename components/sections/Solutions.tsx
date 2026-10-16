import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon } from "../ui/icons";
import { solutions, extraCapabilities } from "@/data/solutions";

export function Solutions() {
  return (
    <section id="o-que-faco" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Como posso ajudar"
          title="Sites de todo tipo, pensados pro seu caso"
          subtitle="Alguns tipos de projeto que já apliquei — com exemplos reais do portfólio abaixo — e situações comuns que também sei resolver."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-soft p-7">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-paper">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>

                <div className="mt-5 flex-1 rounded-xl border-l-2 border-accent/40 bg-ink pl-4 pr-3 py-3">
                  <p className="text-sm leading-relaxed text-faint italic">{solution.scenario}</p>
                </div>

                {solution.proof ? (
                  <a
                    href={solution.proof.href}
                    className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent transition-colors duration-200 hover:text-paper"
                  >
                    {solution.proof.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-10">
          <span className="text-sm text-faint">Além disso, também aplico quando faz sentido:</span>
          {extraCapabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-ink-soft px-3.5 py-1.5 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
