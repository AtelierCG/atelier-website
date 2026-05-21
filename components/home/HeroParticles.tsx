"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number; // 0 = cyan, 1 = violet
  pulse: number;
  pulseSpeed: number;
}

const BASE_COUNT = 45;
const MOBILE_COUNT = 20;
const MAX_DIST = 160;
const SPEED = 0.18;

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let w = 0, h = 0;

    function resize() {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      const count = w < 768 ? MOBILE_COUNT : BASE_COUNT;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        size: 1 + Math.random() * 1.5,
        hue: Math.random(), // mix of cyan → blue → violet
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.004 + Math.random() * 0.006,
      }));
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // Draw connections — softer, less dense
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const t = 1 - dist / MAX_DIST;
            const alpha = t * t * 0.22; // softer falloff
            // blend between cyan and violet based on average hue
            const h2 = (a.hue + b.hue) / 2;
            const r = Math.round(h2 * 123);       // 0→0 (cyan), 1→123 (violet-r)
            const g = Math.round((1 - h2) * 100); // cyan=100g, violet=0g
            const bl = 255;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes — gently pulsing
      for (const p of particles) {
        const breathe = 0.7 + 0.3 * Math.sin(p.pulse);
        const r2 = Math.round(p.hue * 123);
        const g2 = Math.round((1 - p.hue) * 100);
        const nodeAlpha = 0.5 + 0.3 * breathe;

        // soft outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5 * breathe, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r2},${g2},255,${nodeAlpha * 0.06})`;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * breathe, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r2},${g2},255,${nodeAlpha})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => { resize(); });
    ro.observe(canvas);
    init();
    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
