import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col ${alignClass}`}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
