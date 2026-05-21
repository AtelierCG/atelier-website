"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required.";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "A valid email address is required.";
    if (!data.message) newErrors.message = "A message is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <ScrollReveal>
        <div className="glass-card rounded-xl p-10 text-center">
          <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center mx-auto mb-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2
            className="text-2xl font-semibold text-white mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Message received.
          </h2>
          <p
            className="text-[#B8C8E8] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Thank you for reaching out. We'll be in touch when the time is right.
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.12em] uppercase text-[#5A7099] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`w-full bg-[#0A1230] border rounded-lg px-5 py-4 text-white placeholder-[#2a3d6a] text-base transition-colors duration-200 outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 ${
              errors.name ? "border-red-500/60" : "border-[#1a2860]"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.12em] uppercase text-[#5A7099] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`w-full bg-[#0A1230] border rounded-lg px-5 py-4 text-white placeholder-[#2a3d6a] text-base transition-colors duration-200 outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 ${
              errors.email ? "border-red-500/60" : "border-[#1a2860]"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs tracking-[0.12em] uppercase text-[#5A7099] mb-2"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={`w-full bg-[#0A1230] border rounded-lg px-5 py-4 text-white placeholder-[#2a3d6a] text-base transition-colors duration-200 outline-none focus:border-cyan/40 focus:ring-1 focus:ring-cyan/20 resize-none ${
              errors.message ? "border-red-500/60" : "border-[#1a2860]"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            placeholder="Tell us what you're building and why it matters."
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {errors.message}
            </p>
          )}
        </div>

        {state === "error" && (
          <p
            className="text-sm text-red-400 text-center"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full gradient-brand text-white text-sm font-medium px-8 py-4 rounded-full tracking-wide transition-all duration-200 hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(0,212,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
          style={{ fontFamily: "var(--font-dm-sans)", letterSpacing: "0.06em" }}
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </form>
    </ScrollReveal>
  );
}
