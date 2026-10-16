import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos reais que desenvolvi: sites institucionais, aplicações web com backend próprio e landing pages, do problema à solução no ar.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projetos" }]} />
      <ProjectsShowcase />
    </>
  );
}
