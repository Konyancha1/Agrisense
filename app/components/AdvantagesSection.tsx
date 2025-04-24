/* eslint-disable react/no-unescaped-entities */

'use client';

import { FC } from 'react';
import Image from 'next/image';

const AdvantagesSection: FC = () => {
  return (
    <div className="py-4 font-poppins md:py-6 px-6 md:px-12 lg:px-24">
      <section className="flex flex-col justify-center p-4 gap-4 items-center py-6 font-poppins md:py-8 px-6 md:px-12 lg:px-24">
        <h1 className="font-semibold text-2xl text-gray-800 mb-4"></h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="w-32 h-16 md:w-44 md:h-24 transition-transform duration-300 hover:scale-105">
            <img src="/assets/karmi-logo.png" alt="Karmi valley logo" className="w-full h-full object-contain" />
          </div>
          <div className="w-32 h-16 md:w-44 md:h-24 transition-transform duration-300 hover:scale-105">
            <img src="/assets/microsoft-logo.png" alt="Microsoft logo" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvantagesSection;