"use client";

import { Reveal } from "../ui/Reveal";
import { PortraitStage } from "../ui/PortraitStage";
import { Button } from "../ui/Button";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { LinkedInIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "../ui/icons";
import { social } from "@/data/social";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="order-1">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Sites e sistemas para o seu negócio
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Seu negócio aparecendo e <span className="text-accent">clientes chamando no WhatsApp.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                Sou o Matheus, desenvolvedor há {social.yearsExperience} anos e estudante de Engenharia de Software na UnB. Faço o seu site do começo ao fim e deixo no ar, com prazo combinado e atendimento direto comigo.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <span className="relative inline-flex">
                  <span aria-hidden="true" className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25d366]/40" />
                  <WhatsAppButton label="Chamar no WhatsApp" from="hero" size="lg" className="relative" />
                </span>
                <Button href="/projetos" variant="secondary">
                  Ver projetos
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-1.5 text-sm text-faint">
                  <MapPinIcon className="h-4 w-4" />
                  {social.location}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    onClick={() => trackEvent("cta_whatsapp_click", { from: "hero_social" })}
                    className="text-muted transition-colors duration-200 hover:text-accent"
                  >
                    <WhatsAppIcon />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-muted transition-colors duration-200 hover:text-accent"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={`mailto:${social.email}`}
                    aria-label="E-mail"
                    className="text-muted transition-colors duration-200 hover:text-accent"
                  >
                    <MailIcon />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-2">
            <Reveal delay={120} className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl"
              />

              <PortraitStage src="/images/matheus-recorte.png" alt="Matheus do Vale Lameira" />

              <span
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-12 w-12 rounded-tl-3xl border-t-2 border-l-2 border-accent/70"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-3xl border-b-2 border-r-2 border-accent/70"
              />

              <div className="absolute -bottom-5 left-5 rounded-xl border border-line-strong bg-ink-elevated px-4 py-3 shadow-xl shadow-black/40">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Brasília, DF
                </p>
                <p className="mt-0.5 text-sm font-medium text-paper">{social.yearsExperience} anos de experiência</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
