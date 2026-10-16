"use client";

import { useState, type FormEvent } from "react";
import { social } from "@/data/social";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "../ui/icons";

const projectTypes = [
  "Landing page",
  "Site institucional",
  "E-commerce",
  "Sistema web",
  "API ou integração",
  "Manutenção",
  "Outro",
];

const budgetRanges = [
  "Ainda preciso de orientação",
  "Até R$ 1.000",
  "R$ 1.000 a R$ 3.000",
  "R$ 3.000 a R$ 5.000",
  "R$ 5.000 a R$ 10.000",
  "Acima de R$ 10.000",
];

const preferredContacts = ["WhatsApp", "E-mail", "Qualquer um"];

type Props = {
  initialType?: string;
};

export function QuoteForm({ initialType }: Props) {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot: bots tend to fill every field, humans never see this one.
    if (form.get("website")) {
      setSent(true);
      return;
    }

    const nome = String(form.get("nome") || "").trim();
    const contato = String(form.get("contato") || "").trim();
    const tipo = String(form.get("tipo") || "").trim();
    const descricao = String(form.get("descricao") || "").trim();
    const empresa = String(form.get("empresa") || "").trim();
    const orcamento = String(form.get("orcamento") || "").trim();
    const prazo = String(form.get("prazo") || "").trim();
    const contatoPreferido = String(form.get("contatoPreferido") || "").trim();

    if (!nome || !contato || !tipo || !descricao) {
      setError("Preenche nome, contato, tipo de projeto e descrição pra eu entender melhor o que você precisa.");
      return;
    }
    setError("");

    const lines = [
      "Olá, Matheus! Vim pelo site e gostaria de um orçamento.",
      "",
      `*Tipo de projeto:* ${tipo}`,
      `*Nome:* ${nome}`,
      empresa ? `*Empresa:* ${empresa}` : null,
      `*Descrição:* ${descricao}`,
      orcamento ? `*Faixa de orçamento:* ${orcamento}` : null,
      prazo ? `*Prazo desejado:* ${prazo}` : null,
      `*Contato:* ${contato}${contatoPreferido ? ` (prefere ${contatoPreferido})` : ""}`,
    ].filter(Boolean);

    const message = lines.join("\n");
    const link = `${social.whatsappBase}?text=${encodeURIComponent(message)}`;
    setWaLink(link);
    setSent(true);
    trackEvent("orcamento_form_submit", { tipo });
    window.open(link, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-8 text-center">
        <p className="font-display text-xl font-semibold text-paper">Mensagem pronta!</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          O WhatsApp deve abrir numa nova aba com tudo preenchido. Se não abrir automaticamente,
          toca no botão abaixo.
        </p>
        {waLink ? (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Abrir WhatsApp
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="nome" required>
          <input id="nome" name="nome" type="text" required className={inputClass} />
        </Field>
        <Field label="E-mail ou WhatsApp" htmlFor="contato" required>
          <input id="contato" name="contato" type="text" required className={inputClass} />
        </Field>
      </div>

      <Field label="Empresa (opcional)" htmlFor="empresa">
        <input id="empresa" name="empresa" type="text" className={inputClass} />
      </Field>

      <Field label="Tipo de projeto" htmlFor="tipo" required>
        <select id="tipo" name="tipo" required defaultValue={initialType ?? ""} className={inputClass}>
          <option value="" disabled>
            Selecione
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Descreva o que você precisa" htmlFor="descricao" required>
        <textarea id="descricao" name="descricao" required rows={4} className={inputClass} />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Faixa de orçamento (opcional)" htmlFor="orcamento">
          <select id="orcamento" name="orcamento" defaultValue="" className={inputClass}>
            <option value="">Prefiro não informar</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Prazo desejado (opcional)" htmlFor="prazo">
          <input id="prazo" name="prazo" type="text" placeholder="Ex: em 1 mês" className={inputClass} />
        </Field>
      </div>

      <Field label="Forma preferida de contato (opcional)" htmlFor="contatoPreferido">
        <select id="contatoPreferido" name="contatoPreferido" defaultValue="" className={inputClass}>
          <option value="">Tanto faz</option>
          {preferredContacts.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      {error ? (
        <p role="alert" className="text-sm text-[#f3a5a5]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Enviar e abrir WhatsApp
      </button>

      <p className="text-xs leading-relaxed text-faint">
        Ao enviar, abrimos o WhatsApp com sua mensagem já pronta. Não guardamos esses dados em
        nenhum servidor.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-paper">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "rounded-xl border border-line-strong bg-ink-soft px-4 py-2.5 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-faint focus:border-accent/60";
