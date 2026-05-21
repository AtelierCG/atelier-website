import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Work — Atelier",
  description:
    "Atelier works with aligned clients by referral and invitation. Selected engagements shared in confidence.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen" style={{ background: "#060B1E" }}>
      {/* Header */}
      <section
        className="pt-40 pb-20 px-6"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(13,32,64,0.4) 0%, #060B1E 70%)",
        }}
      >
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.22em] uppercase mb-6"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#5A7099" }}
            >
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.02em",
              }}
            >
              Work that <span className="gradient-text">matters.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Honest placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-10 md:p-14">
              <p
                className="text-xs tracking-[0.18em] uppercase mb-8"
                style={{ fontFamily: "var(--font-dm-mono)", color: "#5A7099" }}
              >
                A note on confidentiality
              </p>
              <p
                className="leading-[1.9] mb-6"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  color: "#B8C8E8",
                }}
              >
                Atelier operates by referral and at the invitation of aligned
                clients. The work we do — at the intersection of AI systems,
                platform architecture, and human development — is significant
                enough that most of it is shared only in confidence.
              </p>
              <p
                className="leading-[1.9]"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  color: "#B8C8E8",
                }}
              >
                Selected case studies will appear here when they can be shared.
                In the meantime, if you are curious about what is possible, the
                best next step is a conversation.
              </p>

              <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <Link
                  href="/contact"
                  className="inline-block gradient-brand text-white text-sm font-medium px-8 py-4 rounded-full tracking-wide transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(0,212,255,0.25)]"
                  style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.06em" }}
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
