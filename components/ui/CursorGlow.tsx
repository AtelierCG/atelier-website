"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.opacity = "1";
    };
    const hide = () => { el.style.opacity = "0"; };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return <div id="cursor-glow" ref={ref} aria-hidden="true" style={{ opacity: 0 }} />;
}
