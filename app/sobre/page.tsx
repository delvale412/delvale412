import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { AISection } from "@/components/sections/AISection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória, formação em Engenharia de Software na UnB, experiência profissional em desenvolvimento de software e abordagem de trabalho.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sobre" }]} />
      <About />
      <Experience />
      <Skills />
      <Education />
      <AISection />
    </>
  );
}
