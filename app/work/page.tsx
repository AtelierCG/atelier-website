import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Work — Atelier",
  description:
    "Selected work from Atelier — AI-driven systems, platform architecture, and purpose-driven transformation.",
};

const projects = [
  {
    index: "01",
    title: "Enterprise AI Agent Platform",
    sector: "Financial Services",
    description:
      "A multi-agent AI orchestration system for a large financial institution — automating complex workflows across risk, compliance, and operations while maintaining full auditability.",
    status: "Completed",
  },
  {
    index: "02",
    title: "Organisational Transformation Programme",
    sector: "Civic / Non-Profit",
    description:
      "A full systems-thinking and Appreciative Inquiry engagement for a national civic organisation navigating structural change — integrating technology infrastructure with deep human development work.",
    status: "Ongoing",
  },
  {
    index: "03",
    title: "Purpose Intelligence Platform",
    sector: "Human Development",
    description:
      "A bespoke platform enabling individuals and communities to map, articulate, and act on their purpose — combining AI-assisted reflection with structured change methodology.",
    status: "In development",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen" style={{ background: "#060B1E" }}>
      {/* Header */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, #0D204060 0%, #060B1E 70%)" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.03em" }}
            >
              Work that <span className="gradient-text">matters.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p
              className="text-lg text-[#B8C8E8] max-w-[560px] leading-[1.8]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              A selection of engagements. More work is done in confidence — what appears
              here represents the breadth of the practice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project list */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.index} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    <div className="flex items-start gap-6 md:gap-10 flex-1">
                      <span
                        className="text-xs text-[#5A7099] shrink-0 mt-1"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {project.index}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className="text-[10px] tracking-[0.15em] uppercase text-cyan px-2 py-0.5 border border-cyan/20 rounded"
                            style={{ fontFamily: "var(--font-dm-mono)" }}
                          >
                            {project.sector}
                          </span>
                        </div>
                        <h2
                          className="text-xl md:text-2xl font-semibold text-white mb-3"
                          style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.02em" }}
                        >
                          {project.title}
                        </h2>
                        <p
                          className="text-[#B8C8E8] leading-[1.75] text-base"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="md:text-right shrink-0">
                      <span
                        className="text-[10px] tracking-[0.12em] uppercase text-[#5A7099]"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* More to come notice */}
      <section className="py-20 px-6" style={{ background: "#0A1230" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="text-lg text-[#B8C8E8] leading-[1.8] mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The most meaningful work is often confidential. If you're curious about
              what's possible, let's have a conversation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <a
              href="/contact"
              className="inline-block gradient-brand text-white text-sm font-medium px-8 py-4 rounded-full tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(0,212,255,0.25)]"
              style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.06em" }}
            >
              Start a conversation
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
