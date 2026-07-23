"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [supportsHover] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    if (!supportsHover) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [data-cursor-hover]")));
    }

    function handleLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [supportsHover, x, y]);

  if (!supportsHover) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: isPointer ? 48 : 16,
          height: isPointer ? 48 : 16,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}
