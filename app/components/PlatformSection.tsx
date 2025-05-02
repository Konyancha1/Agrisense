'use client';

import { FC } from 'react';
import Image from "next/image";

import complianceImage2 from "../../Assets/Images/Img2.png";
import complianceImage3 from "../../Assets/Images/Img3.png";

const PlatformSection: FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="platform-section" className="py-12 px-6 md:px-20 font-poppins bg-white">
      {/* Title */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
          The Platform
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1">
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Built for Africa. Ready for the World.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-[1rem] leading-relaxed">
            <li>Mobile-first, offline-capable tools</li>
            <li>Exporter dashboards for compliance and financing tracking</li>
            <li>Enumerator apps for field data collection</li>
            <li>Local language support</li>
          </ul>

          {/* CTA */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              onClick={() => handleScroll("contact-us")}
            >
              See the Platform Live
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-row items-center space-x-4">
            {/* First Image (Larger and Lowered) */}
            <div className="w-120 self-start mt-20">
              <Image
                src={complianceImage2}
                alt="Smart Farm Management"
                width={350}
                height={420}
                className="rounded-lg object-contain w-full h-auto"
                priority
              />
            </div>

            {/* Second Image (Center aligned with taller first image) */}
            <div className="w-48 flex items-center">
              <Image
                src={complianceImage3}
                alt="Farmer Dashboard"
                width={192}
                height={256}
                className="rounded-lg object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;