import { cn } from "@/lib/utils";

export function ProjectCover({
  name,
  gradient,
  className,
}: {
  name: string;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <span className="relative select-none font-display text-4xl font-semibold tracking-tight text-white/90 sm:text-5xl">
        {name}
      </span>
    </div>
  );
}
