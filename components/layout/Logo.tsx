import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export function Logo({ variant = "default", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      title="Dra. Amanda Torrigo - Fisioterapia"
      className={cn("inline-flex", className)}
    >
      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight whitespace-nowrap">
          <span
            className={cn(
              "font-medium",
              isLight ? "text-white/80" : "text-muted-foreground"
            )}
          >
            Dra.
          </span>{" "}
          <span className={isLight ? "text-white" : "text-brand-gradient"}>
            Amanda Torrigo
          </span>
        </span>
        <span
          className={cn(
            "mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em]",
            isLight ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Fisioterapia
        </span>
      </span>
    </Link>
  );
}
