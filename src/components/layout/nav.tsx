"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((m) => m.ThemeToggle),
  { ssr: false, loading: () => <div className="h-9 w-9" /> }
);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.div
        animate={{
          width: scrolled ? "min(880px, 96%)" : "100%",
          paddingLeft: scrolled ? 20 : 8,
          paddingRight: scrolled ? 12 : 8,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex max-w-6xl items-center justify-between rounded-full py-2 transition-colors duration-300",
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        )}
      >
        <a href="#top" data-cursor-hover className="font-display text-sm font-semibold tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            data-cursor-hover
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass absolute left-4 right-4 top-20 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-foreground/80 hover:bg-surface-elevated"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-4 py-2">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
