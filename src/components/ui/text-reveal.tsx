"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
};

export function TextReveal({ text, as = "h1", className, delay = 0 }: TextRevealProps) {
  // `any` avoids TS collapsing children to `never` for a dynamic tag union.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = as as any;
  const containerRef = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = container.querySelectorAll("[data-word]");

    if (reduced) {
      gsap.set(targets, { opacity: 1, yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: 130, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.06,
          delay,
        }
      );
    }, container);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Component ref={containerRef} className={cn("overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] inline-block overflow-hidden last:mr-0 align-top">
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
