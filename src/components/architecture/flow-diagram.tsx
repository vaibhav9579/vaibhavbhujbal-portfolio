import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FlowStep = {
  title: string;
  note?: string;
};

export function FlowDiagram({
  steps,
  direction = "horizontal",
  className,
}: {
  steps: FlowStep[];
  direction?: "horizontal" | "vertical";
  className?: string;
}) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "flex gap-3 overflow-x-auto pb-2",
        isHorizontal ? "flex-row items-stretch" : "flex-col items-stretch",
        className
      )}
    >
      {steps.map((step, i) => (
        <div key={step.title} className={cn("flex items-center gap-3", !isHorizontal && "flex-col items-stretch")}>
          <div className="min-w-[160px] flex-1 rounded-xl border border-border bg-surface p-4">
            <p className="text-sm font-semibold text-foreground">{step.title}</p>
            {step.note && <p className="mt-1 text-xs leading-relaxed text-muted">{step.note}</p>}
          </div>
          {i < steps.length - 1 &&
            (isHorizontal ? (
              <ArrowRight className="h-4 w-4 shrink-0 text-accent" />
            ) : (
              <ArrowDown className="h-4 w-4 shrink-0 self-center text-accent" />
            ))}
        </div>
      ))}
    </div>
  );
}
