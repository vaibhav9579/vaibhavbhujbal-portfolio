import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "glass rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
