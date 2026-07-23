import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic-button";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset]",
  secondary:
    "bg-surface-elevated text-foreground border border-border hover:border-accent/50 hover:bg-surface-elevated/80",
  ghost: "text-foreground/80 hover:text-foreground",
};

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 ease-out disabled:opacity-60 disabled:pointer-events-none";

type AnchorButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  magnetic?: boolean;
};

export function Button({
  className,
  variant = "primary",
  magnetic = true,
  children,
  ...props
}: AnchorButtonProps) {
  const content = (
    <a className={cn(baseClasses, variants[variant], className)} data-cursor-hover {...props}>
      {children}
    </a>
  );

  if (!magnetic) return content;
  return <Magnetic>{content}</Magnetic>;
}

type SubmitButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  magnetic?: boolean;
};

export function ButtonEl({
  className,
  variant = "primary",
  magnetic = true,
  children,
  ...props
}: SubmitButtonProps) {
  const content = (
    <button className={cn(baseClasses, variants[variant], className)} data-cursor-hover {...props}>
      {children}
    </button>
  );

  if (!magnetic) return content;
  return <Magnetic>{content}</Magnetic>;
}
