'use client'
import React from "react";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <>
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
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFB743] leading-tight mb-6 transition-all ease-in-out duration-500 transform hover:scale-105">
            Simplify Compliance and <br /> Drive Growth with Agrisense.
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            From AI-powered compliance to data-driven farm management, Agrisense provides the tools to enhance productivity, ensure transparency, and unlock premium global opportunities. Keep all your data organized in one place!
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
            Request a Demo
          </button>
        </div>
      </section>

      <section className="flex flex-col justify-center p-4 gap-4 items-center py-6 font-poppins md:py-8 px-6 md:px-12 lg:px-24">
        <h1 className="font-semibold text-2xl text-gray-800 mb-4">Our Partners</h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="w-32 h-16 md:w-44 md:h-24 transition-transform duration-300 hover:scale-105">
            <img src="/assets/karmi-logo.png" alt="Karmi valley logo" className="w-full h-full object-contain" />
          </div>
          <div className="w-32 h-16 md:w-44 md:h-24 transition-transform duration-300 hover:scale-105">
            <img src="/assets/microsoft-logo.png" alt="Microsoft logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;