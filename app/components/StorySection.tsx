'use client';

import { FC } from 'react';
import { FaSeedling } from 'react-icons/fa';

const ImpactStoriesSection: FC = () => {
  return (
    <section id="impact-section" className="py-12 px-6 md:px-20 font-poppins bg-gray-50">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
          Stories of Impact
        </h2>
        <p className="text-lg text-gray-700 mt-2">Real Change, Real People</p>
      </div>

      {/* Impact Cards */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: '🇷🇼 Rwanda',
            description: '5000+ coffee farmers EUDR-ready in 90 days.',
          },
          {
            title: '🇰🇪 Kenya',
            description: '45% yield increase, 20% input savings reported by farmers.',
          },
          {
            title: '🌍 Exporters',
            description: 'Reduced audit prep by 70%, improved buyer trust and saved costs.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStoriesSection;