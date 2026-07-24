import { aiTools } from "@/data/ai-tools";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function AiToolkit() {
  return (
    <section className="bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI-Augmented Engineering"
          title="I ship faster because I treat AI tools as infrastructure."
          description="Pro subscriber across today's leading AI coding and research tools — used daily as part of the actual workflow, not as a novelty."
          align="center"
        />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.05}>
          {aiTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <RevealItem key={tool.name}>
                <div className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent/50 hover:bg-surface-elevated">
                  <span className="absolute right-3 top-3 rounded-full border border-secondary/30 bg-secondary/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-secondary">
                    PRO
                  </span>
                  <Icon className="h-8 w-8 text-foreground/70 transition-colors group-hover:text-accent" />
                  <span className="text-sm font-medium text-foreground">{tool.name}</span>
                  <p className="text-xs leading-relaxed text-muted">{tool.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
