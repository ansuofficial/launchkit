"use client";

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

type Ray = {
  baseAngle: number;
  length: number;
  phase: number;
  speed: number;
  sway: number;
  width: number;
  dot: number;
  opacity: number;
};

function seeded(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function buildRays(count: number): Ray[] {
  const rays: Ray[] = [];
  const start = (-95 * Math.PI) / 180;
  const end = (95 * Math.PI) / 180;

  for (let i = 0; i < count; i++) {
    const t = i / Math.max(1, count - 1);
    const jitter = (seeded(i + 1) - 0.5) * 0.035;
    const baseAngle = start + (end - start) * t + jitter;
    const length =
      0.42 + seeded(i + 40) * 0.5 + Math.sin(t * Math.PI) * 0.12;
    rays.push({
      baseAngle,
      length,
      phase: seeded(i + 90) * Math.PI * 2,
      speed: 0.35 + seeded(i + 120) * 0.55,
      sway: 0.012 + seeded(i + 150) * 0.022,
      width: 0.6 + seeded(i + 180) * 1.1,
      dot: 1.4 + seeded(i + 210) * 2.2,
      opacity: 0.35 + seeded(i + 240) * 0.55,
    });
  }
  return rays;
}

interface JellyNetworkProps {
  className?: string;
  rayCount?: number;
}

/**
 * Interactive sunburst / jelly network.
 * Legs sway subtly in place and gently respond to pointer movement.
 * Animation mutates SVG attributes directly (no React re-render loop).
 */
export function JellyNetwork({ className, rayCount = 100 }: JellyNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const rafRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.35, active: false });

  const rays = useMemo(() => buildRays(rayCount), [rayCount]);

  const viewW = 1200;
  const viewH = 520;
  const originX = viewW / 2;
  const originY = viewH + 8;
  const maxLen = viewH * 0.92;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = mq.matches;
    const onMq = () => {
      reduced = mq.matches;
    };
    mq.addEventListener("change", onMq);

    const paint = (timeMs: number) => {
      const t = timeMs / 1000;
      const ptr = pointerRef.current;
      const px = ptr.x * viewW;
      const py = ptr.y * viewH;

      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        const pathEl = pathRefs.current[i];
        const dotEl = dotRefs.current[i];
        if (!pathEl || !dotEl) continue;

        const sway = reduced
          ? 0
          : Math.sin(t * ray.speed + ray.phase) * ray.sway +
            Math.sin(t * ray.speed * 0.45 + ray.phase * 1.7) * ray.sway * 0.45;

        const angle = ray.baseAngle + sway;
        let len = ray.length * maxLen;

        if (!reduced) {
          len *=
            1 +
            Math.sin(t * ray.speed * 0.7 + ray.phase) * 0.035 +
            Math.sin(t * 0.5 + i * 0.07) * 0.015;
        }

        let tipX = originX + Math.sin(angle) * len;
        let tipY = originY - Math.cos(angle) * len;

        if (ptr.active && !reduced) {
          const dx = px - tipX;
          const dy = py - tipY;
          const dist = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - dist / 280) * 0.14;
          tipX += dx * influence;
          tipY += dy * influence;
        }

        const midT = 0.52;
        const midX = originX + (tipX - originX) * midT;
        const midY = originY + (tipY - originY) * midT;
        const perpX = -(tipY - originY);
        const perpY = tipX - originX;
        const perpLen = Math.hypot(perpX, perpY) || 1;
        const bend =
          (reduced ? 0 : Math.sin(t * ray.speed + ray.phase + 1.2) * 10) *
          (0.5 + ray.opacity * 0.5);
        const c1x = midX + (perpX / perpLen) * bend;
        const c1y = midY + (perpY / perpLen) * bend;

        pathEl.setAttribute(
          "d",
          `M ${originX} ${originY} Q ${c1x} ${c1y} ${tipX} ${tipY}`,
        );
        dotEl.setAttribute("cx", String(tipX));
        dotEl.setAttribute("cy", String(tipY));
      }
    };

    // Static first paint
    paint(0);

    if (reduced) {
      return () => mq.removeEventListener("change", onMq);
    }

    const loop = (now: number) => {
      paint(now);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      mq.removeEventListener("change", onMq);
    };
  }, [maxLen, originX, originY, rays, viewH, viewW]);

  const updatePointer = (clientX: number, clientY: number, active: boolean) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerRef.current = {
      x: (clientX - rect.left) / Math.max(1, rect.width),
      y: (clientY - rect.top) / Math.max(1, rect.height),
      active,
    };
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full touch-none select-none", className)}
      onPointerMove={(e) => updatePointer(e.clientX, e.clientY, true)}
      onPointerEnter={(e) => updatePointer(e.clientX, e.clientY, true)}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${viewW} ${viewH}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMax meet"
        role="presentation"
      >
        <defs>
          <linearGradient id="lk-jelly-stroke" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#6D5EF7" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#5EA8FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.9" />
          </linearGradient>
          <filter
            id="lk-jelly-soft"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="0.35" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#lk-jelly-soft)">
          {rays.map((ray, i) => (
            <path
              key={`p-${i}`}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              d={`M ${originX} ${originY} L ${originX} ${originY}`}
              fill="none"
              stroke="url(#lk-jelly-stroke)"
              strokeWidth={ray.width}
              strokeLinecap="round"
              opacity={ray.opacity}
            />
          ))}
          {rays.map((ray, i) => (
            <circle
              key={`c-${i}`}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              cx={originX}
              cy={originY}
              r={ray.dot}
              fill="#5EA8FF"
              opacity={Math.min(1, ray.opacity + 0.15)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
