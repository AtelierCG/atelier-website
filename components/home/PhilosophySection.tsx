"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-[120px] relative"
      style={{ background: "#060B1E" }}
    >
      {/* Large decorative quote mark — background texture, not content */}
      <div
        aria-hidden="true"
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "clamp(12rem, 30vw, 22rem)",
          lineHeight: 1,
          color: "rgba(0,212,255,0.025)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.22em] uppercase mb-8"
            style={{ fontFamily: "var(--font-dm-sans)", color: "#5A7099" }}
          >
            Philosophy
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2
            className="font-semibold text-white leading-tight mb-12"
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              letterSpacing: "0.01em",
            }}
          >
            Where Intelligence
            <br />
            <span className="gradient-text">Meets Purpose</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p
            className="leading-[1.95] max-w-[720px]"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
              color: "#B8C8E8",
            }}
          >
            Technology and human beings are seeking the same three things: connectivity,
            integration, and flow. Technology seeks connected systems, integrated data,
            and seamless information flow. Human beings seek connection with themselves
            and others, integration of all parts of who they are, and greater flow in
            life, relationships, health, and purpose. Atelier exists at the intersection
            of these worlds — building systems that serve both.
          </p>
        </ScrollReveal>

        {/* AI² marker — subtle, discoverable */}
        <ScrollReveal delay={0.26}>
          <div className="mt-14 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            <p
              style={{ fontFamily: "var(--font-dm-mono)", color: "#5A7099", fontSize: "0.75rem", letterSpacing: "0.12em" }}
            >
              AI<sup style={{ color: "#00D4FF" }}>²</sup>
              <span
                style={{ marginLeft: "0.6rem", fontFamily: "var(--font-dm-sans)", letterSpacing: "normal", textTransform: "none" }}
              >
                — the founding synthesis of Artificial Intelligence and Appreciative Inquiry
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
