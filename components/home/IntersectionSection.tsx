"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function IntersectionSection() {
  return (
    <section
      id="intersection"
      className="py-16 md:py-[120px] relative overflow-hidden"
      style={{ background: "#060B1E" }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-12"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The Intersection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2
              className="font-bold leading-none mb-14 gradient-text-animated"
              style={{
                fontFamily: "var(--font-syne)",
                letterSpacing: "0.08em",
                fontSize: "clamp(1.5rem, 5vw, 3.75rem)",
              }}
            >
              CONNECTIVITY&nbsp;·&nbsp;INTEGRATION&nbsp;·&nbsp;FLOW
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p
              className="text-lg md:text-xl text-[#B8C8E8] leading-[1.8] max-w-[640px] mx-auto"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              This is not a coincidence. When technology and human potential are built
              toward the same ends, something unprecedented becomes possible.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
