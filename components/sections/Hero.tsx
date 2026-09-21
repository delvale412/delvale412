import Image from "next/image";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "../ui/icons";
import { social } from "@/data/social";

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
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Software Developer / Full Stack
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Transformando ideias em <span className="text-accent">soluções digitais.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
                Desenvolvedor de Software e estudante de Engenharia de Software na UnB, com
                experiência em desenvolvimento Full Stack, sistemas web, APIs, bancos de dados e
                infraestrutura.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="#projetos" variant="primary">
                  Ver projetos
                </Button>
                <Button href="#contato" variant="secondary">
                  Entrar em contato
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
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-muted transition-colors duration-200 hover:text-accent"
                  >
                    <GitHubIcon />
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

          <div className="order-1 lg:order-2">
            <Reveal delay={120} className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl"
              />

              <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-line-strong bg-ink-soft">
                <Image
                  src="/images/matheus-photo.jpg"
                  alt="Matheus do Vale Lameira"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 340px"
                  className="object-cover"
                  style={{ objectPosition: "50% 10%" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent" />
              </div>

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
                  Brasília — DF
                </p>
                <p className="mt-0.5 text-sm font-medium text-paper">Software Developer</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
