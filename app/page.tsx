import { Hero } from "@/components/sections/Hero";
import { FeaturedProjectsTeaser } from "@/components/sections/FeaturedProjectsTeaser";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Differential } from "@/components/sections/Differential";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjectsTeaser />
      <ServicesTeaser />
      <Differential />
      <Process />
      <Contact />
    </>
  );
}
