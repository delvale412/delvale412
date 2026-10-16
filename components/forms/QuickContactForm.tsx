"use client";

import { useState, type FormEvent } from "react";
import { social } from "@/data/social";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "../ui/icons";

export function QuickContactForm() {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (form.get("website")) {
      setSent(true);
      return;
    }

    const nome = String(form.get("nome") || "").trim();
    const contato = String(form.get("contato") || "").trim();
    const mensagem = String(form.get("mensagem") || "").trim();

    if (!nome || !mensagem) {
      setError("Preenche seu nome e a mensagem pra eu saber como te ajudar.");
      return;
    }
    setError("");

    const lines = [
      "Olá, Matheus! Vim pelo site.",
      "",
      `*Nome:* ${nome}`,
      contato ? `*Contato:* ${contato}` : null,
      `*Mensagem:* ${mensagem}`,
    ].filter(Boolean);

    const link = `${social.whatsappBase}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWaLink(link);
    setSent(true);
    trackEvent("contato_form_submit");
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center">
        <p className="font-display text-lg font-semibold text-paper">Mensagem pronta!</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          O WhatsApp deve abrir numa nova aba. Se não abrir, toca aqui:
        </p>
        {waLink ? (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Abrir WhatsApp
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-col gap-2">
        <label htmlFor="qc-nome" className="text-sm font-medium text-paper">
          Nome <span className="text-accent">*</span>
        </label>
        <input id="qc-nome" name="nome" type="text" required className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="qc-contato" className="text-sm font-medium text-paper">
          E-mail ou WhatsApp (opcional)
        </label>
        <input id="qc-contato" name="contato" type="text" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="qc-mensagem" className="text-sm font-medium text-paper">
          Mensagem <span className="text-accent">*</span>
        </label>
        <textarea id="qc-mensagem" name="mensagem" required rows={4} className={inputClass} />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-[#f3a5a5]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Enviar mensagem
      </button>

      <p className="text-xs leading-relaxed text-faint">
        Ao enviar, abrimos o WhatsApp com sua mensagem já pronta. Não guardamos esses dados em
        nenhum servidor.
      </p>
    </form>
  );
}

const inputClass =
  "rounded-xl border border-line-strong bg-ink-soft px-4 py-2.5 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-faint focus:border-accent/60";
