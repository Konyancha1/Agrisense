/* eslint-disable react/no-unescaped-entities */

'use client';

import { FC } from 'react';
import Image from 'next/image';

// Import all partner logos
import startupLogo from '../../assets/images/Startup.png';
import tinyLogo from '../../assets/images/Tiny.png';
import siliconLogo from '../../assets/images/Silicon.png';
import jerikaLogo from '../../assets/images/Jerika.png';
import gmacLogo from '../../assets/images/GMAC.png';
import darkLogo from '../../assets/images/Dark.png';
import cbsLogo from '../../assets/images/CBS.png';
import ahvinchaLogo from '../../assets/images/Ahvincha.png';
import microsoftLogo from '../../assets/images/microsoft-logo.png';
import karmiLogo from '../../assets/images/karmi-logo.png';

const PartnersSection: FC = () => {
  const partners = [
    { src: startupLogo, alt: "Startup Logo" },
    { src: tinyLogo, alt: "Tiny Logo" },
    { src: siliconLogo, alt: "Silicon Logo" },
    { src: darkLogo, alt: "Dark Logo" },
    { src: microsoftLogo, alt: "Microsoft Logo" },
    { src: jerikaLogo, alt: "Jerika Logo" },
    { src: gmacLogo, alt: "GMAC Logo" },
    { src: cbsLogo, alt: "CBS Logo" },
    { src: ahvinchaLogo, alt: "Ahvincha Logo" },
    { src: karmiLogo, alt: "Karmi Logo" },
  ];

  return (
    <section className="py-12 px-6 md:px-20 font-poppins bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
            Our Partners
          </h2>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-24 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="object-contain max-h-16 md:max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
