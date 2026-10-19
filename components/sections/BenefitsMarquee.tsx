const items = [
  "Seu negócio encontrado no Google",
  "Clientes chamando no WhatsApp",
  "Site pronto em poucos dias",
  "Atendimento direto comigo",
  "Funciona no celular",
  "8 anos de experiência",
];

/** Slow, endless strip of benefits right under the first screen. */
export function BenefitsMarquee() {
  const row = [...items, ...items];

  return (
    <div
      aria-label={items.join(". ")}
      className="relative overflow-hidden border-y border-line bg-ink-soft/70 py-4 backdrop-blur-sm"
    >
      <div aria-hidden="true" className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.concat(row).map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {item}
            <span className="text-accent">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
