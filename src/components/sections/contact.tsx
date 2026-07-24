"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonEl } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FaGithub, label: "GitHub", href: profile.github },
  { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: MapPin, label: profile.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // Only ever invoked from the form's submit event (react-hook-form's handleSubmit),
  // never during render — safe to navigate here despite the purity lint heuristic.
  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`Project inquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    reset();
  }

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Have a system worth building right?"
          description="Tell me what you're building. I'll respond within one business day."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground/80">{link.label}</span>
                  </div>
                );
                return link.href ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" data-cursor-hover>
                    {content}
                  </a>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted">Name</label>
                  <input
                    {...register("name")}
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted">Email</label>
                  <input
                    {...register("email")}
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                    placeholder="What are you building?"
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <ButtonEl type="submit" variant="primary" magnetic={false} disabled={isSubmitting} className="cursor-pointer">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </ButtonEl>
                {sent && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-secondary">
                    <Check className="h-4 w-4" />
                    Opening your email client
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
