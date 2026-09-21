import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { education, languages } from "@/data/education";

export function Education() {
  return (
    <section id="formacao" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Acadêmico" title="Formação" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {education.status} • Previsão de conclusão {education.expected}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {education.institution}
              </h3>
              <p className="mt-2 text-base text-muted">{education.degree}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Idiomas</p>
              <div className="mt-3 flex flex-col gap-1">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-baseline justify-between gap-4">
                    <span className="text-base text-paper">{lang.name}</span>
                    <span className="text-sm text-muted">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
