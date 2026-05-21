"use client";

import Link from "next/link";
import { useState } from "react";

function AI2Mark() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="font-mono text-xs text-[#5A7099] hover:text-cyan transition-colors duration-200 cursor-default"
        aria-describedby="ai2-tooltip"
      >
        AI²
      </button>
      {showTooltip && (
        <span
          id="ai2-tooltip"
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 glass-card text-xs text-[#B8C8E8] whitespace-nowrap rounded pointer-events-none"
          style={{ width: "max-content", maxWidth: "260px", whiteSpace: "normal" }}
        >
          <span className="text-cyan font-medium">AI²</span> — Artificial Intelligence<br />
          + Appreciative Inquiry
        </span>
      )}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060B1E]">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[#5A7099] text-xs">
            <span style={{ fontFamily: "var(--font-dm-sans)" }}>
              © {new Date().getFullYear()} Atelier
            </span>
            <span className="w-px h-3 bg-[#1a2860]" />
            <AI2Mark />
          </div>

          <nav className="flex items-center gap-6">
            {[
              { href: "/about", label: "About" },
              { href: "/work", label: "Work" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-[#5A7099] hover:text-[#B8C8E8] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
