"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const THRESHOLD = 0.4;

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1600,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Starts at the final value so the server-rendered HTML (crawlers, no-JS visitors) shows it.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let armed = false;
    let frame = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        const inView =
          entry.isIntersecting && entry.intersectionRatio >= THRESHOLD;

        if (!inView) {
          if (!armed) {
            armed = true;
            setDisplay(0);
          }
          return;
        }

        io.disconnect();
        // Already on screen when the page loaded: keep the final value instead of jumping to 0.
        if (!armed) return;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: THRESHOLD }
    );

    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
