import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Engineering } from "@/components/sections/engineering";
import { TechStack } from "@/components/sections/tech-stack";
import { OpenSource } from "@/components/sections/open-source";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Projects />
        <Engineering />
        <TechStack />
        <OpenSource />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
