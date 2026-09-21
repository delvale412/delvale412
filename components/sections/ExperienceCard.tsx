import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import type { ExperienceEntry } from "@/data/experience";

export function ExperienceCard({ entry, delay = 0 }: { entry: ExperienceEntry; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                {entry.company}
              </h3>
              {entry.current ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Atual
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{entry.role}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-muted">{entry.period}</p>
            <p className="mt-1 text-xs text-faint">{entry.location}</p>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {entry.summary}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {entry.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {entry.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
