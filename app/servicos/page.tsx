import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesList } from "@/components/sections/ServicesList";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Landing pages, sites institucionais, sistemas web sob medida, e-commerce e manutenção — escopo, entregáveis e orçamento sob consulta.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Serviços" }]} />
      <section className="pb-24 pt-10 sm:pb-32 sm:pt-14">
        <Container>
          <SectionHeading
            eyebrow="Serviços"
            title="O que posso construir pra você"
            subtitle="Cada projeto tem um escopo próprio — os valores abaixo ficam sob consulta, de acordo com tamanho, integrações e prazo."
          />
          <div className="mt-14">
            <ServicesList />
          </div>
        </Container>
      </section>
    </>
  );
}
