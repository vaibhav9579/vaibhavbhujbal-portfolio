import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCover } from "@/components/sections/project-cover";
import { ImpactStats } from "@/components/sections/impact-stats";

export function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Enterprise systems, shipped and running in production."
          description="Multi-tenant platforms, real-time data pipelines, and role-driven applications built for teams that can't tolerate downtime."
        />

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={0.05}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProjectCover name={project.name} gradient={project.cover.gradient} />

                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{project.tagline}</p>

                  <ImpactStats items={project.impact} className="mt-6 max-w-md" />

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor-hover
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <span
                      data-cursor-hover
                      className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-muted"
                      title="Private enterprise repository"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source (private)
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
