import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LinkedInIcon, MailIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { QuickContactForm } from "@/components/forms/QuickContactForm";
import { social } from "@/data/social";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale comigo direto pelo WhatsApp ou por e-mail. Respondo rápido e sem compromisso.",
  alternates: { canonical: "/contato" },
};

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: social.whatsappDisplay,
    href: social.whatsapp,
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: social.email,
    href: `mailto:${social.email}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Meu perfil profissional",
    href: social.linkedin,
  },
];

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contato" }]} />
      <section className="pb-24 pt-10 sm:pb-32 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar"
            subtitle="O caminho mais rápido é o WhatsApp. Me conta o que você precisa e eu te respondo com os próximos passos."
          />

          <div className="mt-8">
            <WhatsAppButton label="Chamar no WhatsApp agora" from="contato_page" size="lg" />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink-soft p-6 transition-colors duration-300 hover:border-accent/50"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-colors duration-300 group-hover:text-accent">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-faint">{channel.label}</p>
                      <p className="mt-0.5 text-sm font-medium text-paper">{channel.value}</p>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="h-4 w-4 text-faint transition-colors duration-300 group-hover:text-accent" />
                </a>
              ))}
            </Reveal>

            <Reveal delay={120} className="rounded-3xl border border-line bg-ink-soft p-7 sm:p-10">
              <p className="font-display text-lg font-semibold text-paper">Prefere escrever?</p>
              <p className="mt-2 text-sm text-muted">Escreve aqui e eu te respondo pelo WhatsApp.</p>
              <div className="mt-6">
                <QuickContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
