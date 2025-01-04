'use client'
import AboutUs from "./components/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection";
import BenefitsSection from "./components/BenefitsSection";
import ContactUsSection from "./components/ContactUs";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurSolution from "./components/Solution";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <AboutUs />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <OurSolution />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <FeaturesSection />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <BenefitsSection />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <AdvantagesSection />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <ContactUsSection />
      <div className="hidden md:block w-full border-t border-gray-100 my-8"></div>

      <Footer />
    </>
  );
}
