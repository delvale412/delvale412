import Link from "next/link";
import { Container } from "../ui/Container";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "../ui/icons";
import { social } from "@/data/social";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-paper">{social.shortName}</p>
          <p className="mt-1 text-sm text-muted">{social.role}</p>
          <p className="mt-1 text-sm text-faint">{social.location}</p>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={social.resumeUrl}
            download
            className="text-sm text-muted transition-colors duration-200 hover:text-accent"
          >
            Baixar currículo
          </a>
        </nav>

        <div className="flex items-start gap-5 sm:justify-end">
          <a
            href={social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted transition-colors duration-200 hover:text-accent"
          >
            <WhatsAppIcon />
          </a>
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
