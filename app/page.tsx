"use client";

import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.performance) {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (nav?.type === "reload") {
        setTimeout(() => {
          const homeSection = document.getElementById("home");
          if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="tentang">
        <AboutSection />
      </section>
      <section id="keunggulan">
        <FeaturesSection />
      </section>
      <Footer />
    </>
  );
}
