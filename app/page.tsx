'use client'
import PartnersSection from "./components/AdvantagesSection";
import ContactUsSection from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import ImpactSnapshotSection from "./components/Impact";
import Navbar from "./components/Navbar";
import WhatWeOfferSection from "./components/Offer";
import PlatformSection from "./components/PlatformSection";
import WhoWeServeSection from "./components/ServeSection";
import ImpactStoriesSection from "./components/StorySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <ImpactSnapshotSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <WhatWeOfferSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <WhoWeServeSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <PlatformSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <ImpactStoriesSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <PartnersSection />
      <div className="block w-full border-t border-gray-100 my-4"></div>

      <ContactUsSection />

      <Footer />
    </>
  );
}
