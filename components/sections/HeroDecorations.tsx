import { cn } from "@/lib/utils";

const ARC_PATH =
  "M200 -20 C 60 120, 20 380, 166 491 C 260 560, 420 520, 560 545 C 740 580, 880 720, 950 900";

function BrandGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" style={{ stopColor: "var(--gradient-end)" }} />
      <stop offset="100%" style={{ stopColor: "var(--gradient-start)" }} />
    </linearGradient>
  );
}

export function HeroArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none overflow-visible", className)}
    >
      <defs>
        <linearGradient id="hero-arc-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop
            offset="0%"
            style={{ stopColor: "var(--gradient-end)", stopOpacity: 0 }}
          />
          <stop offset="35%" style={{ stopColor: "var(--gradient-end)" }} />
          <stop offset="70%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
      </defs>

      <path
        d={ARC_PATH}
        stroke="url(#hero-arc-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroCornerWaves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <BrandGradient id="hero-corner-gradient" />
      </defs>

      <path
        d="M0 150 C 220 165, 440 230, 800 300 L0 300 Z"
        fill="url(#hero-corner-gradient)"
        fillOpacity="0.18"
      />
      <path
        d="M0 215 C 240 225, 470 265, 680 300 L0 300 Z"
        fill="url(#hero-corner-gradient)"
        fillOpacity="0.28"
      />
      <path
        d="M0 110 C 280 125, 540 210, 800 300"
        fill="none"
        stroke="url(#hero-corner-gradient)"
        strokeOpacity="0.6"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
