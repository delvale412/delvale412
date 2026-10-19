import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const gains = [
  {
    number: "01",
    title: "Seja encontrado",
    text: "Seu negócio aparece quando alguém procura no Google e no Instagram, com mapa, endereço e horário.",
  },
  {
    number: "02",
    title: "Passe confiança",
    text: "Um site profissional faz o cliente confiar em você antes mesmo da primeira conversa.",
  },
  {
    number: "03",
    title: "Receba contatos",
    text: "Botão de WhatsApp em todo lugar, com mensagem pronta. O cliente chama você em um toque.",
  },
  {
    number: "04",
    title: "Saiba o que funciona",
    text: "Você vê quantas pessoas visitam e quantas chamam, e descobre onde vale a pena investir.",
  },
];

export function Leverage() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">O que muda no seu negócio</p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
            Um site feito para o seu negócio <span className="text-accent">dar o próximo passo.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Não é só ter uma página bonita. É ter um caminho claro para quem procura você chegar até o seu WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gains.map((gain, i) => (
            <Reveal key={gain.number} delay={i * 80} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-ink-soft p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_50px_-15px_rgba(167,139,250,0.55)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 -right-2 font-display text-8xl font-bold text-accent/10 transition-colors duration-300 group-hover:text-accent/20"
                >
                  {gain.number}
                </span>
                <h3 className="relative font-display text-xl font-semibold text-paper">{gain.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">{gain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center gap-5">
          <WhatsAppButton
            label="Quero isso no meu negócio"
            message="Olá, Matheus! Vi seu site e quero um site que ajude o meu negócio a ser encontrado e receber contatos."
            from="leverage"
            size="lg"
          />
          <p className="text-sm text-faint">Conversa rápida, sem compromisso.</p>
        </Reveal>
      </Container>
    </section>
  );
}
