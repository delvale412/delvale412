import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { WhatsAppButton } from "../ui/WhatsAppButton";

const faqs = [
  {
    q: "Quanto tempo leva para o meu site ficar pronto?",
    a: "Depende do pacote: 7 dias úteis no Essencial, 10 no Profissional e de 15 a 20 no Completo. O prazo conta a partir do momento em que você me envia as informações do seu negócio.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do pacote e do que o seu negócio precisa. Me chama no WhatsApp, eu entendo o seu caso e envio uma proposta sem compromisso, com valor e prazo combinados antes de começar.",
  },
  {
    q: "Preciso ter textos, fotos e logo prontos?",
    a: "Não precisa estar tudo perfeito. Eu te oriento e organizo o conteúdo com o que você já tem. Criação de logotipo e fotos profissionais não estão incluídas, mas posso indicar quem faça.",
  },
  {
    q: "Consigo mexer no site depois de pronto?",
    a: "No pacote Completo você atualiza o catálogo sozinho, com um painel simples. Nos outros, eu faço as alterações pra você, e o cuidado mensal opcional cobre ajustes frequentes.",
  },
  {
    q: "E depois que o site for entregue?",
    a: "Você recebe um vídeo ensinando a usar e tem 30 dias de garantia para correções. Se quiser, o cuidado mensal mantém tudo funcionando e atualizado.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Em duas etapas: metade para começar e metade na entrega, antes de publicar. Também dá para parcelar no cartão.",
  },
  {
    q: "O meu site vai aparecer no Google?",
    a: "Eu deixo o site preparado para o Google encontrar o seu negócio e configuro o mapa. A posição na busca depende de tempo e de concorrência, então não dá para garantir o primeiro lugar. O que eu garanto é um site bem feito e fácil de ser encontrado.",
  },
];

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Dúvidas"
              title="Perguntas que todo mundo faz"
              subtitle="Se a sua não estiver aqui, me pergunta direto no WhatsApp."
            />
            <div className="mt-8">
              <WhatsAppButton
                label="Tirar uma dúvida"
                message="Olá, Matheus! Vi seu site e tenho uma dúvida antes de começar."
                from="faq"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={(i % 4) * 60}>
                <details className="group rounded-2xl border border-line bg-ink-soft p-5 transition-colors duration-200 open:border-accent/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-paper marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xl leading-none text-accent transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
