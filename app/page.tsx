'use client'
import AboutUs from "./components /AboutSection";
import AdvantagesSection from "./components /AdvantagesSection";
import BenefitsSection from "./components /BenefitsSection";
import ContactUsSection from "./components /ContactUs";
import FeaturesSection from "./components /FeaturesSection";
import Footer from "./components /Footer";
import Hero from "./components /HeroSection";
import Navbar from "./components /Navbar";
import OurSolution from "./components /Solution";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurSolution />
      <FeaturesSection />
      <BenefitsSection />
      <AdvantagesSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
