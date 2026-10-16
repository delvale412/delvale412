import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon } from "../ui/icons";
import { services } from "@/data/services";

export function ServicesList() {
  return (
    <div className="flex flex-col gap-10">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 3) * 60}>
          <article
            id={service.slug}
            className="scroll-mt-28 rounded-3xl border border-line bg-ink-soft p-7 sm:p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {service.summary}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-faint">
                Sob consulta
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">O que inclui</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {service.scope.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Você recebe</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Não incluso</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.notIncluded.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-faint">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8">
              {service.scenarios.map((scenario) => (
                <div key={scenario.text} className="rounded-xl border-l-2 border-accent/40 bg-ink py-3 pl-4 pr-3">
                  <p className="text-sm italic leading-relaxed text-faint">{scenario.text}</p>
                  {scenario.proof ? (
                    <Link
                      href={scenario.proof.href}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-paper"
                    >
                      {scenario.proof.label}
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <Link
              href={`/orcamento?tipo=${encodeURIComponent(service.formType)}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
            >
              Solicitar orçamento
              <ArrowUpRightIcon />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
