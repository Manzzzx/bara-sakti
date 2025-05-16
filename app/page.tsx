import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";


export default function Home() {
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
