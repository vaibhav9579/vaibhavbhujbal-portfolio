"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full-stack toolkit built for enterprise workloads."
          description="Not a list of buzzwords — every category below maps to systems I've shipped and operated in production."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {skillCategories.map((category) => (
            <RevealItem key={category.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                <h3 className="font-display text-lg font-semibold text-foreground">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-accent/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
