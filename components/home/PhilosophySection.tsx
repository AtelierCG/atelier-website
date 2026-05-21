"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-16 md:py-[120px]"
      style={{ background: "#060B1E" }}
    >
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Philosophy
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-10"
            style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.03em" }}
          >
            Where Intelligence
            <br />
            <span className="gradient-text">Meets Purpose</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <p
            className="text-lg md:text-xl text-[#B8C8E8] leading-[1.8] max-w-[720px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Technology and human beings are seeking the same three things: connectivity,
            integration, and flow. Technology seeks connected systems, integrated data,
            and seamless information flow. Human beings seek connection with themselves
            and others, integration of all parts of who they are, and greater flow in
            life, relationships, health, and purpose. Atelier exists at the intersection
            of these worlds — building systems that serve both.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <div className="mt-12 pt-10 border-t border-white/5">
            <p className="text-[#5A7099] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              AI<sup className="text-cyan">²</sup>
              <span className="ml-2 normal-case tracking-normal text-[#5A7099]">
                — the founding synthesis of Artificial Intelligence and Appreciative Inquiry
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
