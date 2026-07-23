import {
  Boxes,
  Gauge,
  ShieldCheck,
  Puzzle,
  Sparkles,
  LayoutGrid,
  Plug,
} from "lucide-react";
import { engineeringPrinciples } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const icons = [Boxes, Gauge, ShieldCheck, Puzzle, Sparkles, LayoutGrid, Plug];

export function Engineering() {
  return (
    <section id="engineering" className="bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How I Think"
          title="Engineering is a series of trade-offs. I choose them deliberately."
          description="This is the checklist running in the background of every feature I build."
        />

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {engineeringPrinciples.map((principle, i) => {
            const Icon = icons[i % icons.length];
            return (
              <RevealItem key={principle.title}>
                <div className="h-full bg-background p-8 transition-colors hover:bg-surface">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{principle.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
