import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { QuickContactForm } from "@/components/forms/QuickContactForm";
import { social } from "@/data/social";

export const metadata: Metadata = {
  title: "Contato",
  description: "WhatsApp, e-mail e redes profissionais pra falar comigo diretamente.",
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
    icon: GitHubIcon,
    label: "GitHub",
    value: social.githubHandle,
    href: social.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Perfil profissional",
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
            subtitle="Pra um pedido de orçamento mais detalhado, use a página de orçamento. Pra qualquer outra coisa, fale direto por aqui."
          />

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
              <p className="mt-2 text-sm text-muted">Manda uma mensagem rápida por aqui.</p>
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
