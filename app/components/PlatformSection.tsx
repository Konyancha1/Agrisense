'use client';

import { FC } from 'react';
import { MdDevices } from 'react-icons/md';

const PlatformSection: FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="platform-section" className="py-12 px-6 md:px-20 font-poppins bg-white">
      {/* Centered Title */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
          The Platform
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
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
            <button className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            onClick={() => handleScroll("contact-us")}
            >
              See the Platform Live
            </button>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex-1 flex justify-center items-center">
          <MdDevices className="text-[#16A34A] w-32 h-32 md:w-40 md:h-40" />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;