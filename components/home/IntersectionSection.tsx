"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const words = ["CONNECTIVITY", "INTEGRATION", "FLOW"];

export default function IntersectionSection() {
  return (
    <section
      id="intersection"
      className="py-16 md:py-[120px] relative overflow-hidden"
      style={{ background: "#060B1E" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(0,102,255,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <p
              className="text-xs tracking-[0.22em] uppercase mb-16"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#5A7099" }}
            >
              The Intersection
            </p>
          </ScrollReveal>

          {/* Three words, stacked — each fills the line, gradient animated */}
          <div className="flex flex-col items-center gap-3 mb-16">
            {words.map((word, i) => (
              <ScrollReveal key={word} delay={0.1 + i * 0.12}>
                <div
                  className="font-bold gradient-text-animated leading-none tracking-widest"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "clamp(2.5rem, 8vw, 6rem)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {word}
                </div>
                {i < words.length - 1 && (
                  <div
                    className="text-center mt-1"
                    style={{
                      color: "rgba(0,212,255,0.3)",
                      fontSize: "clamp(1rem, 2vw, 1.5rem)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    ·
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.46}>
            <p
              className="text-lg md:text-xl leading-[1.85] max-w-[600px] mx-auto"
              style={{ fontFamily: "var(--font-dm-sans)", color: "#B8C8E8" }}
            >
              This is not a coincidence. When technology and human potential are
              built toward the same ends, something unprecedented becomes possible.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
