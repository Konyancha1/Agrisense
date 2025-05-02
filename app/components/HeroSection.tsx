'use client'
import React from "react";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100vh] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/image-1.png"
          alt="Background image of farmland"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
        {/* mask */}
        <div className="absolute inset-0 bg-green-800 opacity-50"></div>
      </div>
    
      <div className="relative z-10 px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFB743] leading-tight mb-6 transition-all ease-in-out duration-500 transform hover:scale-105">
        Smart Farming. Global Compliance.<br /> Financing Unlocked.
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
        From certification stress to cash flow gaps — we help African farmers and agribusinesses grow smarter, stay compliant, and access financing.
        </p>
        <button
          className="mt-8 bg-[#519E65] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => {
            const contactSection = document.getElementById("contact-us");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default Hero;