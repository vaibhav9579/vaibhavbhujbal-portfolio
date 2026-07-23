"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools chosen for production, not for résumés."
          description="Hover any tool to see where it earns its place in the stack."
          align="center"
        />

        <RevealGroup
          className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
          stagger={0.03}
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;
            const isActive = active === tech.name;
            return (
              <RevealItem key={tech.name}>
                <div
                  onMouseEnter={() => setActive(tech.name)}
                  onMouseLeave={() => setActive(null)}
                  data-cursor-hover
                  className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-elevated"
                >
                  <Icon className="h-8 w-8 text-foreground/70 transition-colors group-hover:text-accent" />
                  <span className="text-xs font-medium text-foreground/70">{tech.name}</span>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="glass absolute left-1/2 top-full z-20 mt-2 w-48 -translate-x-1/2 rounded-xl p-3 text-center text-xs leading-relaxed text-foreground/80 shadow-xl"
                      >
                        {tech.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
