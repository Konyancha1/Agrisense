'use client'
import React from "react";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image 
          src="/assets/image-1.png" // Make sure to add the image to the public folder
          alt="Background image of farmland"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-2xl lg:text-5xl font-bold text-[#FFB743] leading-tight">
          Simplify Compliance <br /> Audits with Agrisense.
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
          Spend less time managing spreadsheets and more time in the field. Agrisense Technologies
          helps you streamline your workflow, from planting to harvest, with custom farm management software.
          Keep all your data organized in one place!
        </p>
        <button className="mt-8 bg-[#519E65] hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg">
          Request a Demo
        </button>
      </div>
    </section>
  );
} 
export default Hero; 