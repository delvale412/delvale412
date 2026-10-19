import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Quem é o Matheus: 8 anos na área de desenvolvimento, formação em Engenharia de Software na UnB e experiência em sistemas da Polícia Federal e da ANVISA.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sobre" }]} />
      <About />
      <Experience />
      <Education />
    </>
  );
}
