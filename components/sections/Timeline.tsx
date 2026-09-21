import { Reveal } from "../ui/Reveal";

const milestones = [
  { year: "2024", title: "Polícia Federal", detail: "Desenvolvimento de Sistemas / Full Stack" },
  { year: "2025", title: "ANVISA", detail: "Desenvolvimento de Software / Full Stack" },
  { year: "2027", title: "Conclusão prevista", detail: "Engenharia de Software — UnB" },
];

export function Timeline() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
        {milestones.map((m, i) => (
          <Reveal key={m.year} delay={i * 100}>
            <div className="relative pl-6 sm:pl-0">
              <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0">
                <span className="font-mono text-sm text-accent">{m.year}</span>
                <div
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-linear-to-r from-line-strong to-transparent sm:mt-4 sm:mb-4 sm:block sm:w-full"
                />
              </div>
              <p className="mt-1 font-display text-lg font-semibold text-paper sm:mt-0">{m.title}</p>
              <p className="mt-1 text-sm text-muted">{m.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
