import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function ImpactStats({
  items,
  size = "compact",
  className,
}: {
  items: { value: string; label: string }[];
  size?: "compact" | "large";
  className?: string;
}) {
  return (
    <RevealGroup
      className={cn(
        "grid gap-x-6 gap-y-5",
        size === "compact" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 md:grid-cols-4",
        className
      )}
      stagger={0.06}
    >
      {items.map((item) => (
        <RevealItem key={item.label}>
          <div>
            <p
              className={cn(
                "font-display font-semibold tracking-tight text-accent",
                size === "compact" ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
              )}
            >
              {item.value}
            </p>
            <p className={cn("mt-1 text-muted", size === "compact" ? "text-xs" : "text-xs md:text-sm")}>
              {item.label}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
