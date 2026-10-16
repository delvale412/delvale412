import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar orçamento",
  description:
    "Me conta o que você precisa (tipo de projeto, descrição, prazo e orçamento estimado) e eu te respondo pelo WhatsApp.",
  alternates: { canonical: "/orcamento" },
};

export default async function OrcamentoPage(props: PageProps<"/orcamento">) {
  const params = await props.searchParams;
  const tipoParam = params.tipo;
  const initialType = Array.isArray(tipoParam) ? tipoParam[0] : tipoParam;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solicitar orçamento" }]} />
      <section className="pb-24 pt-10 sm:pb-32 sm:pt-14">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Vamos conversar"
            title="Solicitar orçamento"
            subtitle="Quanto mais detalhe você der, mais rápido eu consigo te responder com algo útil."
          />

          <div className="mt-12 rounded-3xl border border-line bg-ink-soft p-7 sm:p-10">
            <QuoteForm initialType={initialType} />
          </div>
        </Container>
      </section>
    </>
  );
}
