import { Hero } from "@/components/sections/Hero";
import { ProjectSpotlight } from "@/components/sections/ProjectSpotlight";
import { FeaturedProjectsTeaser } from "@/components/sections/FeaturedProjectsTeaser";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Differential } from "@/components/sections/Differential";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.find((p) => p.featured);

  return (
    <>
      <Hero />
      {featured ? <ProjectSpotlight project={featured} /> : null}
      <FeaturedProjectsTeaser />
      <ServicesTeaser />
      <Differential />
      <Process />
      <Contact />
    </>
  );
}
