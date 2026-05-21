"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactInvitationSection() {
  return (
    <section
      id="contact-invitation"
      className="py-16 md:py-[120px]"
      style={{ background: "#0A1230" }}
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <ScrollReveal>
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#5A7099] mb-8"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Let's Connect
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p
            className="text-xl md:text-2xl text-[#B8C8E8] leading-[1.8] mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            If what you've read resonates — if you're building something that matters —
            we'd like to hear about it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
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
  );
}
