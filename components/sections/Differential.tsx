import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const pillars = ["Software Engineering", "Full Stack", "Design", "IA", "Automação"];

export function Differential() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Construo, testo e evoluo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-4">
                <span className="font-mono text-sm uppercase tracking-wider text-muted">
                  {pillar}
                </span>
                {i < pillars.length - 1 ? (
                  <span aria-hidden="true" className="text-accent">
                    +
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="max-w-lg text-balance text-sm text-faint sm:text-base">
            Não me limito a uma única camada do desenvolvimento — transito entre elas para
            conectar um produto do início ao fim.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
