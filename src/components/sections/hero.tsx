"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { FloatingCodeCard } from "@/components/sections/floating-code-card";
import { HeroVideo } from "@/components/sections/hero-video";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <HeroVideo src={profile.heroVideoUrl} poster={profile.heroVideoPoster} />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-background via-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 lg:hidden"
        >
          <img
            src={profile.photoUrl}
            alt={profile.name}
            className="h-20 w-20 rounded-full border border-border object-cover shadow-lg shadow-black/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
          </span>
          Available for enterprise engineering roles
        </motion.div>

        <TextReveal
          text={profile.heroHeadline}
          as="h1"
          className="max-w-4xl font-display text-[13vw] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted md:text-xl"
        >
          {profile.heroSubheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" variant="primary">
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" download>
            Download Resume
            <FileDown className="h-4 w-4" />
          </Button>
          <Button href="#contact" variant="ghost" magnetic={false}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 hidden gap-1 text-xs text-muted/70 lg:flex"
        >
          <span>Angular</span>
          <span className="px-2">·</span>
          <span>React / Next.js</span>
          <span className="px-2">·</span>
          <span>Node.js</span>
          <span className="px-2">·</span>
          <span>AWS</span>
          <span className="px-2">·</span>
          <span>System Design</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[4%] top-[8%] h-[320px] w-[256px]"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/20 blur-3xl" aria-hidden />
          <div className="glass h-full w-full overflow-hidden rounded-[2rem] border border-border p-1.5 shadow-2xl shadow-black/40">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </motion.div>

        <div className="absolute right-[30%] top-[20%]">
          <FloatingCodeCard delay={1.3} title="rbac.guard.ts" />
        </div>
        <div className="absolute bottom-[12%] right-[2%]">
          <FloatingCodeCard
            delay={1.55}
            title="realtime.gateway.ts"
            lines={[
              { text: "ws.on('device:data', publish)", color: "text-accent" },
              { text: "mqtt.subscribe('plant/+/sensor')", color: "text-secondary" },
              { text: "queue.ack(msg, { durable: true })", color: "text-foreground/70" },
            ]}
          />
        </div>
      </div>

      <motion.a
        href="#trust"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
