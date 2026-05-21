"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#060B1E" }}
    >
      {/* Particle field */}
      <HeroParticles />

      {/* Deep radial glow — centred behind the logo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,102,255,0.08) 0%, rgba(123,47,255,0.04) 50%, transparent 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">

        {/* Logo-full as the hero banner — large, dominant */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="w-full mb-12"
          style={{
            maxWidth: "780px",
            /* CSS mask: intersect of horizontal + vertical gradients.
               Pixels are only fully opaque in the central content area —
               the baked-in image background fades away at all four edges. */
            WebkitMaskImage: [
              "linear-gradient(to right,  transparent 0%, black 8%, black 92%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
            ].join(", "),
            WebkitMaskComposite: "source-in",
            maskImage: [
              "linear-gradient(to right,  transparent 0%, black 8%, black 92%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
            ].join(", "),
            maskComposite: "intersect",
          }}
        >
          <Image
            src="/images/logo-full.webp"
            alt="Atelier — AI-Driven Development Studio. Purpose-Driven Technology That Serves Humanity."
            width={780}
            height={420}
            className="w-full h-auto"
            style={{
              filter: "drop-shadow(0 0 48px rgba(0, 212, 255, 0.2)) drop-shadow(0 0 80px rgba(0, 102, 255, 0.10))",
            }}
            priority
          />
        </motion.div>

        {/* Headline — carries the brand voice, Outfit now (clean & modern) */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          className="font-semibold text-white leading-tight"
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
            letterSpacing: "0.02em",
          }}
        >
          Systems that serve.{" "}
          <span className="gradient-text">Technology that understands.</span>
        </motion.h1>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 rounded-full"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
