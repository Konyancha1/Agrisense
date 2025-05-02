'use client';

import { FC } from 'react';

const StatsSection: FC = () => {
  return (
    <section id="stats-section" className="py-12 px-6 md:px-20 font-poppins bg-white">
      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-orange-300">
        {/* Card 1 */}
        <div className="p-6 text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-[#16A34A]">3,000+</h3>
          <p className="text-gray-700 mt-3 text-lg">Coffee Farmers Onboarded for EUDR Compliance</p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-[#16A34A]">13,000+</h3>
          <p className="text-gray-700 mt-3 text-lg">Farmers in Our Pipeline</p>
        </div>
        
        {/* Card 3 */}
        <div className="p-6 text-center">
          <h3 className="text-5xl md:text-6xl font-bold text-[#16A34A]">2</h3>
          <p className="text-gray-700 mt-3 text-lg flex items-center justify-center gap-2">
            Countries
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;