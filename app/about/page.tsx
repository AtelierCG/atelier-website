import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Atelier",
  description:
    "Christian Grancourt brings 30 years of enterprise technology and human development to Atelier. At the intersection of Artificial Intelligence and Appreciative Inquiry.",
  openGraph: {
    title: "About — Atelier",
    description:
      "Christian Grancourt brings 30 years of enterprise technology and human development to Atelier.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#060B1E" }}>
      {/* Hero band */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, #0D204060 0%, #060B1E 70%)" }}
      >
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The Studio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-outfit)", letterSpacing: "0.03em" }}
            >
              Built from a <span className="gradient-text">thirty-year synthesis.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder narrative */}
      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left: metadata */}
            <ScrollReveal className="md:sticky md:top-28">
              <div className="glass-card rounded-xl p-8">
                <p
                  className="text-xs tracking-[0.15em] uppercase text-[#5A7099] mb-6"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Founder
                </p>
                <h2
                  className="text-2xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Christian Grancourt
                </h2>
                <p
                  className="text-sm text-[#B8C8E8] leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Founder &amp; Principal
                </p>
                <div className="space-y-3">
                  {[
                    "Masters in Positive Organisational Development and Change",
                    "Graduate Certificate in Positive Business and Societal Change",
                    "30 years in enterprise technology",
                    "IBM · Accenture · EY",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-cyan mt-2 shrink-0" />
                      <p
                        className="text-xs text-[#5A7099] leading-relaxed"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: prose */}
            <div className="space-y-10">
              <ScrollReveal delay={0.08}>
                <p
                  className="text-lg text-[#B8C8E8] leading-[1.85]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Atelier was founded by Christian Grancourt, whose career has traced an
                  unusual arc — three decades moving between the largest technology
                  organisations on earth and the deepest questions of human development.
                  He has designed enterprise systems for IBM, led transformation
                  programmes at Accenture and EY, and studied the conditions under which
                  individuals, organisations, and societies genuinely flourish.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.12}>
                <p
                  className="text-lg text-[#B8C8E8] leading-[1.85]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Over time, colleagues began describing Christian as "a unicorn in
                  enterprise technology" — someone who holds, in a single person, genuine
                  depth in both systems architecture and the human dimensions of change.
                  That description stayed with him. Not as a label, but as a responsibility.
                </p>
              </ScrollReveal>

              {/* Unicorn emblem — personal, not a banner */}
              <ScrollReveal delay={0.16}>
                <div className="flex flex-col items-start gap-4 my-8">
                  <Image
                    src="/images/unicorn.webp"
                    alt="The unicorn emblem — a personal symbol of the rare synthesis of technology and humanity"
                    width={120}
                    height={120}
                    className="w-24 h-24 object-contain opacity-80"
                  />
                  <p
                    className="text-xs text-[#5A7099] italic max-w-[320px] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    "A unicorn in enterprise technology" — a description that became a conviction.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.20}>
                <p
                  className="text-lg text-[#B8C8E8] leading-[1.85]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Atelier is the embodiment of that synthesis. It is not a consultancy
                  that applies AI to enterprise problems, and it is not a human development
                  practice that uses technology as a tool. It is something rarer: a studio
                  that genuinely holds both, founded on the belief that technology and
                  human beings are seeking the same things — and that something profound
                  becomes possible when they are built toward the same ends.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* AI² section */}
      <section
        className="py-24 px-6"
        style={{ background: "#0A1230" }}
      >
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-3 mb-8">
              <span
                className="text-4xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                AI
              </span>
              <sup
                className="text-2xl font-bold text-cyan"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                2
              </sup>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2
              className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-snug"
              style={{ fontFamily: "var(--font-outfit)", letterSpacing: "0.03em" }}
            >
              What becomes possible when Artificial Intelligence
              <br className="hidden md:block" />
              and Appreciative Inquiry are intentionally combined?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <ScrollReveal delay={0.12}>
              <div className="glass-card rounded-xl p-8 h-full">
                <p
                  className="text-xs tracking-[0.15em] uppercase text-cyan mb-4"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Artificial Intelligence
                </p>
                <p
                  className="text-[#B8C8E8] leading-[1.8] text-base"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  The computational capacity to reason, learn, and act at scale. Modern AI
                  can process vast complexity, identify patterns invisible to human
                  perception, and execute with a precision and consistency beyond any
                  individual or team. When directed well, it is the most powerful tool
                  civilisation has ever created.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.20}>
              <div className="glass-card rounded-xl p-8 h-full">
                <p
                  className="text-xs tracking-[0.15em] uppercase text-cyan mb-4"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Appreciative Inquiry
                </p>
                <p
                  className="text-[#B8C8E8] leading-[1.8] text-base"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  A philosophy and methodology of change that begins with what is working,
                  amplifies it, and builds toward what is possible. Developed by David
                  Cooperrider, it has transformed organisations and communities worldwide.
                  Christian studied Appreciative Inquiry years before the rise of modern AI
                  — and immediately recognised what they held in common.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.28}>
            <p
              className="text-lg text-[#B8C8E8] leading-[1.85] mt-10"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              The founding question of Atelier is simple: what becomes possible when
              Artificial Intelligence and Appreciative Inquiry are intentionally combined?
              The answer is still being discovered — in every system Atelier builds, and
              every problem it takes on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: "#060B1E" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="text-lg text-[#B8C8E8] leading-[1.8] mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              If this resonates — if you sense that the distinction matters —
              we'd like to have a conversation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <Link
              href="/contact"
              className="inline-block gradient-brand text-white text-sm font-medium px-8 py-4 rounded-full tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(0,212,255,0.25)]"
              style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.06em" }}
            >
              Start a conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
