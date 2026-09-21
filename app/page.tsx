import { Hero } from "@/components/sections/Hero";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Solutions } from "@/components/sections/Solutions";
import { Skills } from "@/components/sections/Skills";
import { AISection } from "@/components/sections/AISection";
import { Differential } from "@/components/sections/Differential";
import { Process } from "@/components/sections/Process";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsShowcase />
      <About />
      <Experience />
      <Solutions />
      <Skills />
      <AISection />
      <Differential />
      <Process />
      <Education />
      <Contact />
    </>
  );
}
