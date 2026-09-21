import { Container } from "../ui/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../ui/icons";
import { social } from "@/data/social";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-paper">{social.shortName}</p>
          <p className="mt-1 text-sm text-muted">{social.role}</p>
          <p className="mt-1 text-sm text-faint">{social.location}</p>
        </div>

        <div className="flex items-center gap-5">
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
      </Container>

      <Container className="border-t border-line py-6">
        <p className="text-xs text-faint">
          © {year} {social.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
