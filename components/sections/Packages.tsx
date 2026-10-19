import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { care, guarantees, plans } from "@/data/packages";

export function Packages({ id = "pacotes" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pacotes"
          title="Escolha como quer crescer"
          subtitle="Três jeitos de colocar o seu negócio na frente de quem procura. Me chama no WhatsApp e eu indico o certo pra você, sem compromisso."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-accent/60 bg-ink-elevated shadow-[0_0_70px_-18px_rgba(167,139,250,0.6)]"
                    : "border-line bg-ink-soft"
                }`}
              >
                {plan.highlight ? (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink">
                    Mais escolhido
                  </span>
                ) : null}

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{plan.deadline}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-paper">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{plan.tagline}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <WhatsAppButton
                  label={`Quero o ${plan.name}`}
                  message={`Olá, Matheus! Vi seu site e tenho interesse no pacote ${plan.name}. Pode me enviar uma proposta?`}
                  from={`pacote_${plan.name.toLowerCase()}`}
                  variant={plan.highlight ? "solid" : "outline"}
                  className="mt-8 w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-ink-soft p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{care.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{care.text}</p>
          </div>
          <ul className="flex flex-col justify-center gap-2 rounded-2xl border border-line bg-ink-soft p-6">
            {guarantees.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            label="Pedir minha proposta no WhatsApp"
            message="Olá, Matheus! Vi seus pacotes e gostaria de receber uma proposta para o meu negócio."
            from="pacotes_footer"
            size="lg"
          />
          <p className="text-sm text-faint">Precisa de algo diferente? Me conta que eu monto sob medida.</p>
        </Reveal>
      </Container>
    </section>
  );
}
