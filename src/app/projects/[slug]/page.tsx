import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCover } from "@/components/sections/project-cover";
import { Reveal } from "@/components/ui/reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="border-t border-border py-10">
      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{children}</div>
    </Reveal>
  );
}

export default async function ProjectCaseStudy(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-32">
      <Link
        href="/#projects"
        data-cursor-hover
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mt-8">
        <ProjectCover name={project.name} gradient={project.cover.gradient} className="aspect-[16/7]" />
      </div>

      <header className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Case Study</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.tagline}</p>

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
      </header>

      <Block title="The Problem">{project.problem}</Block>

      <Block title="Architecture">{project.architecture}</Block>

      <Block title="Challenges">
        <ul className="flex flex-col gap-2">
          {project.challenges.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {c}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Solution">{project.solution}</Block>

      <Block title="Key Features">
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <div key={f} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
              {f}
            </div>
          ))}
        </div>
      </Block>

      <Block title="Performance">
        <ul className="flex flex-col gap-2">
          {project.performance.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Lessons Learned">{project.lessons}</Block>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-10">
        <Link
          href="/#contact"
          data-cursor-hover
          className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Discuss a similar project
        </Link>
      </div>
    </main>
  );
}
