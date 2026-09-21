import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-strong shadow-[0_0_0_1px_rgba(52,224,176,0.35)]",
  secondary:
    "border border-line-strong text-paper hover:border-accent/60 hover:text-accent",
  ghost: "text-paper hover:text-accent",
};

export function Button({ href, children, variant = "primary", className = "", external, icon }: BaseProps) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
