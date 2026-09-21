import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon, DownloadIcon } from "../ui/icons";
import { social } from "@/data/social";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-50"
        style={{
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Contato</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl md:text-6xl">
            Tem uma ideia?
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-md text-balance text-base text-muted sm:text-lg">
            Vamos transformar uma ideia em algo real.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${social.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
            >
              Entrar em contato
              <ArrowUpRightIcon />
            </a>
            <a
              href={social.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-accent/60 hover:text-accent"
            >
              Baixar currículo
              <DownloadIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <a
              href={`mailto:${social.email}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <MailIcon className="h-4 w-4" />
              {social.email}
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              {social.githubHandle}
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
