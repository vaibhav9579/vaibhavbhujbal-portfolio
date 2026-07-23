import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { journey, philosophy } from "@/data/journey";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="I build the systems businesses run on."
          description="Three years in, my focus hasn't changed: enterprise-grade software for teams where reliability, security, and scale aren't optional extras."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="glass rounded-2xl p-8">
              <p className="font-display text-lg leading-relaxed text-foreground/90 md:text-xl">
                &ldquo;{philosophy}&rdquo;
              </p>
              <p className="mt-6 text-sm text-muted">— Engineering Philosophy</p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" aria-hidden />
            <div className="flex flex-col gap-10">
              {journey.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{item.year}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
