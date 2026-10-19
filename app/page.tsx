import { Hero } from "@/components/sections/Hero";
import { ProjectSpotlight } from "@/components/sections/ProjectSpotlight";
import { FeaturedProjectsTeaser } from "@/components/sections/FeaturedProjectsTeaser";
import { Packages } from "@/components/sections/Packages";
import { BenefitsMarquee } from "@/components/sections/BenefitsMarquee";
import { Leverage } from "@/components/sections/Leverage";
import { WhoIAm } from "@/components/sections/WhoIAm";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.find((p) => p.featured);

  return (
    <>
      <Hero />
      <BenefitsMarquee />
      {featured ? <ProjectSpotlight project={featured} /> : null}
      <Leverage />
      <FeaturedProjectsTeaser />
      <Packages />
      <WhoIAm />
      <Process />
      <Contact />
    </>
  );
}
