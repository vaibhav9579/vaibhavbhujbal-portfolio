import { stats, companies } from "@/data/profile";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

export function Trust() {
  const looped = [...companies, ...companies];

  return (
    <section id="trust" className="border-y border-border bg-surface/40 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted">
            Trusted across industries that can&apos;t afford downtime
          </p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {looped.map((company, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-lg font-medium text-muted/60"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs text-muted md:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
