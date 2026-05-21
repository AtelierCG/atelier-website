"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const capabilities = [
  {
    number: "01",
    title: "AI-Driven Systems",
    body: "Custom AI product development, intelligent agent architectures, and automation systems built for real-world complexity.",
  },
  {
    number: "02",
    title: "Platform & Product Architecture",
    body: "Full-stack systems design, database architecture, and API ecosystems engineered for scale and longevity.",
  },
  {
    number: "03",
    title: "Human & Societal Transformation",
    body: "Systems thinking and Appreciative Inquiry applied to change at any scale: individual, organisational, community, societal.",
  },
  {
    number: "04",
    title: "Purpose-Driven Innovation",
    body: "Technology strategy in service of meaningful outcomes, for founders and leaders working at the frontier of what's possible.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="py-16 md:py-[120px]"
      style={{ background: "#0A1230" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What We Build
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-14"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "0.03em" }}
          >
            Built for what matters.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.number} delay={0.08 + i * 0.08}>
              <div className="glass-card rounded-xl p-8 h-full">
                <span
                  className="text-xs tracking-[0.15em] text-[#5A7099] mb-4 block"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {cap.number}
                </span>
                <h3
                  className="text-xl font-semibold text-white mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-outfit)", letterSpacing: "0.02em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-[#B8C8E8] leading-[1.75] text-base"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {cap.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
