import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const traits = [
  {
    number: "01",
    title: "Resolve o problema certo",
    description: "Entendo o que você realmente precisa antes de pensar em qualquer tecnologia.",
  },
  {
    number: "02",
    title: "Aprende rápido",
    description: "Facilidade para me adaptar a diferentes ferramentas, desafios e formas de trabalhar.",
  },
  {
    number: "03",
    title: "Cuida do projeto inteiro",
    description: "Da tela que o usuário vê até o que roda por trás, sem precisar contratar várias pessoas.",
  },
  {
    number: "04",
    title: "Entrega o que funciona",
    description: "Acompanho tudo até o site ou sistema estar pronto, no ar e funcionando de verdade.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Sobre" title="Mais do que código." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal delay={80} className="flex flex-col gap-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Antes de escrever qualquer linha de código, eu procuro entender o problema: o que
              você precisa resolver, quem vai usar a solução e o que realmente faz diferença pro
              seu negócio ou projeto.
            </p>
            <p>
              A partir daí, cuido de cada etapa, da ideia ao produto no ar: a forma como ele é
              construído por trás, a experiência de quem vai usar no dia a dia, e os detalhes
              técnicos que garantem que tudo funcione bem, de forma estável e sem dor de cabeça
              pra você.
            </p>
            <p>
              Desde 2024 aplico esse mesmo cuidado em ambientes exigentes de verdade, desenvolvendo
              sistemas para instituições como a Polícia Federal e, atualmente, a ANVISA, e trago
              essa experiência prática para cada projeto que desenvolvo, seja um site simples ou um
              sistema sob medida.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {traits.map((trait, i) => (
              <Reveal key={trait.number} delay={160 + i * 80}>
                <div className="rounded-2xl border border-line bg-ink-soft p-6">
                  <span className="font-mono text-xs text-accent">{trait.number}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-paper">{trait.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{trait.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
