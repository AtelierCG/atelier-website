import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Atelier",
  description:
    "If you're building something that matters, we'd like to hear about it. Reach out to Atelier.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: "#060B1E" }}>
      {/* Header */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, #0D204060 0%, #060B1E 70%)" }}
      >
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Get in Touch
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.03em" }}
            >
              If it <span className="gradient-text">resonates</span>,<br />
              let's talk.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p
              className="text-lg text-[#B8C8E8] leading-[1.8]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              If what you've read resonates — if you're building something that matters —
              we'd like to hear about it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-[700px] mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
