import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import IntersectionSection from "@/components/home/IntersectionSection";
import ContactInvitationSection from "@/components/home/ContactInvitationSection";

export const metadata: Metadata = {
  title: "Atelier — AI-Driven Development Studio",
  description:
    "Purpose-driven technology that serves humanity. Atelier builds at the intersection of artificial intelligence and human potential.",
  openGraph: {
    title: "Atelier — AI-Driven Development Studio",
    description:
      "Purpose-driven technology that serves humanity. At the intersection of artificial intelligence and human potential.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <CapabilitiesSection />
      <IntersectionSection />
      <ContactInvitationSection />
    </>
  );
}
