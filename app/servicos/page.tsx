import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesList } from "@/components/sections/ServicesList";
import { Packages } from "@/components/sections/Packages";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Páginas de apresentação, sites completos, lojas online e sistemas sob medida, com prazo combinado e atendimento direto pelo WhatsApp.",
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
            title="O que posso fazer pra você"
            subtitle="Veja o que está incluído em cada serviço, escolha o que combina com o seu negócio e me chama no WhatsApp para receber a sua proposta."
          />
          <div className="mt-14">
            <ServicesList />
          </div>
        </Container>
      </section>
      <Packages />
    </>
  );
}
