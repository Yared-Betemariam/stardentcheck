"use client";

import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-2">
      <HeroSection />
      <About />
      <ContactSection />
    </main>
  );
}
