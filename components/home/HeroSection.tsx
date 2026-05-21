"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0D204080 0%, #060B1E 70%)" }}
    >
      <HeroParticles />

      {/* Subtle radial glow behind logo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Brand lockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 md:mb-12"
        >
          <Image
            src="/images/logo-full.webp"
            alt="Atelier — AI-Driven Development Studio. Purpose-Driven Technology That Serves Humanity."
            width={480}
            height={260}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide mb-6"
          style={{
            fontFamily: "var(--font-syne)",
            letterSpacing: "0.04em",
          }}
        >
          Systems that serve.{" "}
          <span className="block gradient-text">Technology that understands.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="text-xs md:text-sm tracking-[0.2em] text-[#5A7099] uppercase"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Purpose-Driven Technology That Serves Humanity
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-cyan to-transparent opacity-50"
        />
      </motion.div>
    </section>
  );
}
