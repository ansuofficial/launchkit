"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltMediaProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees (kept subtle). */
  maxTilt?: number;
  /** Scale on hover (1 = none). */
  hoverScale?: number;
}

/**
 * Subtle 3D tilt for media only (image / preview area).
 * Parent cards should stay flat; wrap only the image container.
 */
export function TiltMedia({
  children,
  className,
  maxTilt = 3,
  hoverScale = 1.01,
}: TiltMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onChange = () => {
      reducedRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const reset = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
  }, []);

  const onMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reducedRef.current) return;
      const el = frameRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      // Center-origin: -1..1
      const nx = (px - 0.5) * 2;
      const ny = (py - 0.5) * 2;
      const rotateY = nx * maxTilt;
      const rotateX = -ny * maxTilt;

      setTransform(
        `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${hoverScale})`,
      );
    },
    [hoverScale, maxTilt],
  );

  return (
    <div
      ref={frameRef}
      className={cn("h-full w-full overflow-hidden [perspective:900px]", className)}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <div
        className="h-full w-full origin-center will-change-transform transition-transform duration-200 ease-out"
        style={{ transform }}
      >
        {children}
      </div>
    </div>
  );
}
