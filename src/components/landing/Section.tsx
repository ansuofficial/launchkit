import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "light" | "muted" | "dark" | "accent";
}

const variantStyles = {
  light: "bg-background text-foreground",
  muted: "bg-[var(--lk-bg-light-muted)] text-foreground",
  dark: "bg-[var(--lk-bg-primary)] text-white",
  accent: "bg-primary/5 text-foreground",
};

export function Section({
  children,
  className,
  id,
  variant = "light",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}