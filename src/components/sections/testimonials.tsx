import { Quote } from "lucide-react";
import { testimonials } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Feedback" title="What it's like to work with me." align="center" />

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3" stagger={0.08}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                <Quote className="h-6 w-6 text-accent/60" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
