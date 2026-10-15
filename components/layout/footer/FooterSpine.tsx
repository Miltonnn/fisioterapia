import { cn } from "@/lib/utils";

const CENTER_X = 240;
const CENTER_Y = 250;
const RADIUS = 150;
const VERTEBRAE = 11;

const vertebrae = Array.from({ length: VERTEBRAE }, (_, index) => {
  const angle = 180 + (180 / (VERTEBRAE - 1)) * index;
  const scale = 1 - index * 0.035;

  return { angle, scale };
});

const discs = vertebrae.slice(1).map(({ angle }) => angle - 180 / (VERTEBRAE - 1) / 2);

export function FooterSpine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none", className)}
    >
      {vertebrae.map(({ angle, scale }) => (
        <g
          key={angle}
          transform={`translate(${CENTER_X} ${CENTER_Y}) rotate(${angle}) translate(${RADIUS} 0) scale(${scale})`}
        >
          <rect x="-46" y="-4" width="92" height="8" rx="4" opacity="0.55" />
          <rect x="-26" y="-14" width="52" height="28" rx="9" />
        </g>
      ))}

      {discs.map((angle) => (
        <circle
          key={angle}
          r="4"
          opacity="0.45"
          transform={`translate(${CENTER_X} ${CENTER_Y}) rotate(${angle}) translate(${RADIUS} 0)`}
        />
      ))}
    </svg>
  );
}
