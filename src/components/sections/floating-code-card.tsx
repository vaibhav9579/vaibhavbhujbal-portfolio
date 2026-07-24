"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultLines = [
  { text: "guard: RoleBasedAuthGuard", color: "text-secondary" },
  { text: "channel.subscribe('ward:42')", color: "text-accent" },
  { text: "await tenant.scope(req)", color: "text-foreground/70" },
];

export function FloatingCodeCard({
  className,
  delay = 0,
  title = "auth.middleware.ts",
  lines = defaultLines,
}: {
  className?: string;
  delay?: number;
  title?: string;
  lines?: { text: string; color: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass animate-float w-64 rounded-xl p-4 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/40",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 text-[10px] text-muted">{title}</span>
      </div>
      {lines.map((line, i) => (
        <div key={i} className={cn("whitespace-nowrap", line.color)}>
          {line.text}
        </div>
      ))}
    </motion.div>
  );
}
