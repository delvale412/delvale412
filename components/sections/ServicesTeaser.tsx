import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ArrowUpRightIcon } from "../ui/icons";
import { services } from "@/data/services";

export function ServicesTeaser() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Como posso ajudar"
          title="Serviços de desenvolvimento"
          subtitle="Do primeiro site institucional ao sistema sob medida — veja o que cabe no seu projeto."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <Link
                href={`/servicos#${service.slug}`}
                className="group block h-full rounded-2xl border border-line bg-ink-soft p-6 transition-colors duration-300 hover:border-accent/50"
              >
                <h3 className="font-display text-lg font-semibold text-paper transition-colors duration-300 group-hover:text-accent">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-paper"
          >
            Ver todos os serviços
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
