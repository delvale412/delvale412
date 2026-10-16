"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "../ui/Container";
import { MenuIcon, CloseIcon } from "../ui/icons";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-paper">
          Matheus<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm transition-colors duration-200 hover:text-paper ${
                isActive(link.href) ? "text-paper" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/orcamento"
          onClick={() => trackEvent("cta_orcamento_click", { from: "navbar" })}
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong md:inline-flex"
        >
          Solicitar orçamento
        </Link>

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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base transition-colors duration-200 hover:bg-ink-soft hover:text-accent ${
                  isActive(link.href) ? "text-accent" : "text-paper"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/orcamento"
              onClick={() => {
                trackEvent("cta_orcamento_click", { from: "navbar_mobile" });
                setOpen(false);
              }}
              className="mt-2 rounded-lg bg-accent px-3 py-3 text-center text-base font-medium text-ink"
            >
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
