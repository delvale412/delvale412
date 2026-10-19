import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon } from "../ui/icons";
import { education } from "@/data/education";
import { social } from "@/data/social";

const facts = [
  { value: `${social.yearsExperience} anos`, label: "trabalhando com desenvolvimento" },
  { value: "Governo federal", label: "sistemas feitos para a Polícia Federal e a ANVISA" },
  { value: "UnB", label: `cursando ${education.degree.replace("Bacharelado em ", "")} (${education.status})` },
];

export function WhoIAm() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Quem vai cuidar do seu projeto</p>
            <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
              {social.yearsExperience} anos fazendo sites e sistemas funcionarem.
            </h2>
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              Sou o Matheus, de Brasília. Atuo há {social.yearsExperience} anos na área de desenvolvimento e estudo
              Engenharia de Software na Universidade de Brasília. Você fala direto comigo, do primeiro
              contato até o site no ar, sem intermediário.
            </p>
            <Link
              href="/sobre"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-paper"
            >
              Conhecer minha trajetória
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4">
            {facts.map((fact, i) => (
              <Reveal key={fact.value} delay={i * 80}>
                <div className="rounded-2xl border border-line bg-ink-soft p-6">
                  <p className="font-display text-2xl font-semibold text-paper">{fact.value}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{fact.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
