import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { social } from "@/data/social";

const traits = [
  {
    number: "01",
    title: "Resolve o problema certo",
    description: "Entendo o que você realmente precisa antes de começar a construir qualquer coisa.",
  },
  {
    number: "02",
    title: "Fala a sua língua",
    description: "Explico tudo sem termo difícil e sem enrolação, do começo ao fim.",
  },
  {
    number: "03",
    title: "Cuida do projeto inteiro",
    description: "Do visual que o cliente vê até o funcionamento por trás, sem você precisar contratar várias pessoas.",
  },
  {
    number: "04",
    title: "Entrega o que funciona",
    description: "Acompanho tudo até o site estar pronto, no ar e funcionando de verdade.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Sobre" title="Quem vai cuidar do seu projeto." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal delay={80} className="flex flex-col gap-6 text-balance text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Sou o Matheus, de Brasília. Atuo há {social.yearsExperience} anos na área de desenvolvimento de sites e sistemas.
            </p>
            <p>
              Antes de começar qualquer projeto, procuro entender o que você precisa resolver, quem
              vai usar e o que realmente faz diferença pro seu negócio. Depois cuido de tudo: o visual,
              o funcionamento e a publicação, sem dor de cabeça pra você.
            </p>
            <p>
              Já desenvolvi sistemas para instituições como a Polícia Federal e, hoje, a ANVISA. Levo
              esse mesmo cuidado para cada projeto, seja um site simples ou um sistema sob medida.
            </p>
            <div>
              <WhatsAppButton label="Chamar no WhatsApp" from="sobre" size="lg" />
            </div>
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
