"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { MenuIcon, CloseIcon } from "../ui/icons";
import { social } from "@/data/social";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="#hero" className="font-display text-lg font-semibold tracking-tight text-paper">
          Matheus<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={social.resumeUrl}
          download
          className="hidden rounded-full border border-line-strong px-5 py-2 text-sm font-medium text-paper transition-colors duration-200 hover:border-accent/60 hover:text-accent md:inline-flex"
        >
          Currículo
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-line p-2 text-paper md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-paper transition-colors duration-200 hover:bg-ink-soft hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={social.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-line-strong px-3 py-3 text-center text-base text-paper"
            >
              Baixar currículo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
