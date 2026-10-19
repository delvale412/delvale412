import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { ViewTracker } from "@/components/ui/ViewTracker";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.problem,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { title: `${project.title} | Vale Desenvolvimentos`, description: project.problem },
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <ViewTracker slug={project.slug} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projetos", href: "/projetos" },
          { label: project.title },
        ]}
      />

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
            <h1 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              {project.problem}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-accent-strong"
              >
                Ver projeto no ar
                <ArrowUpRightIcon />
              </a>
              <WhatsAppButton
                label="Quero um site assim"
                message={`Olá, Matheus! Vi o projeto ${project.title} no seu site e quero algo parecido para o meu negócio.`}
                from={`projeto_${project.slug}`}
                variant="outline"
                size="lg"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="relative mt-12 aspect-16/10 overflow-hidden rounded-3xl border border-line-strong bg-ink-soft">
            <Image
              src={project.image.desktop}
              alt={`Captura de tela do projeto ${project.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-top"
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-paper">O que foi construído</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {project.build.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border-l-2 border-accent/40 bg-ink-soft py-5 pl-5 pr-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">O que isso demonstra</p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.demonstrates}</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-xl font-semibold text-paper">Destaques</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {project.highlights.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="relative mt-8 aspect-9/16 max-w-[220px] overflow-hidden rounded-2xl border border-line-strong bg-ink">
                <Image
                  src={project.image.mobile}
                  alt={`Versão mobile do projeto ${project.title}`}
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="mt-16 rounded-2xl border border-line bg-ink-soft p-7 text-center sm:p-10">
            <p className="font-display text-lg font-semibold text-paper sm:text-xl">
              Quer algo parecido para o seu negócio?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted sm:text-base">
              Me conta o que você precisa pelo WhatsApp e eu te digo como podemos fazer.
            </p>
            <WhatsAppButton
              label="Chamar no WhatsApp"
              message={`Olá, Matheus! Vi o projeto ${project.title} no seu site e quero algo parecido para o meu negócio.`}
              from={`projeto_cta_${project.slug}`}
              size="lg"
              className="mt-5"
            />
          </Reveal>

          <div className="mt-16 border-t border-line pt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Outros projetos</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm text-paper transition-colors duration-200 hover:border-accent/60 hover:text-accent"
                >
                  {p.title}
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
