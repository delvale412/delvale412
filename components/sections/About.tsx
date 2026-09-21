import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const traits = [
  {
    number: "01",
    title: "Perfil analítico",
    description: "Entender o problema e os dados envolvidos antes de escrever a primeira linha de código.",
  },
  {
    number: "02",
    title: "Aprendizado contínuo",
    description: "Facilidade para transitar entre linguagens, ferramentas e camadas diferentes de um sistema.",
  },
  {
    number: "03",
    title: "Full Stack",
    description: "Conforto em circular entre front-end, back-end, banco de dados e infraestrutura.",
  },
  {
    number: "04",
    title: "Da ideia ao deploy",
    description: "Interesse em acompanhar a solução do requisito até ela estar rodando em produção.",
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
              Sou estudante de Engenharia de Software na Universidade de Brasília e atuo
              profissionalmente como desenvolvedor desde 2024, passando por dois ambientes
              distintos de tecnologia: a Polícia Federal e, atualmente, a ANVISA.
            </p>
            <p>
              Nesse período trabalhei em diferentes camadas de um sistema — do levantamento de
              requisitos e da modelagem de dados ao desenvolvimento Front-end, Back-end e à
              infraestrutura que sustenta essas aplicações em produção, com Docker, Kubernetes e
              tecnologias do ecossistema Oracle.
            </p>
            <p>
              Gosto de entender o problema antes do código: como os dados se conectam, como um
              requisito vira arquitetura e como uma solução se comporta quando sai da tela e passa
              a fazer parte da rotina de quem vai usá-la. É esse raciocínio — analítico antes de
              técnico — que aplico tanto no trabalho quanto nos projetos que desenvolvo por conta
              própria.
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
