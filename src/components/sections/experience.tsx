import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-surface/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where the systems got built."
          description="Three-plus years of hands-on ownership, from first commit to production incident response."
        />

        <div className="relative mt-16">
          <div className="absolute bottom-2 left-[15px] top-2 hidden w-px bg-border md:block" aria-hidden />
          <div className="flex flex-col gap-14">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.08} className="relative md:pl-12">
                <span className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-accent md:flex">
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{job.role}</h3>
                      <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                        Achievements
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                        Responsibilities
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
