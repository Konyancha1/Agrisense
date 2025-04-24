'use client';

import { FC } from 'react';

const WhoWeServeSection: FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="who-we-serve" className="py-12 px-6 md:px-20 font-poppins bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A] text-center mb-8">
        Who We Serve
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Farmers & Cooperatives */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Farmers & Cooperatives</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-[1rem] leading-relaxed">
            <li>Achieve global certification</li>
            <li>Increase productivity with AI insights</li>
            <li>Build digital credit profiles</li>
            <li>Learn climate-resilient, regenerative practices</li>
          </ul>
        </div>

        {/* Exporters & Agribusinesses */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Exporters & Agribusinesses</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-[1rem] leading-relaxed">
            <li>Monitor farmer compliance and certification status</li>
            <li>Simplify audit preparation with real-time dashboards</li>
            <li>Access supply chain financing for working capital</li>
            <li>Unlock invoice factoring to convert receivables into immediate cash</li>
            <li>Trace products from farm to market</li>
            <li>Reduce regulatory risk and enter new markets</li>
          </ul>
        </div>

        {/* Financiers & Insurers */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Financiers & Insurers</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-[1rem] leading-relaxed">
            <li>Access verified farmer and production data</li>
            <li>De-risk lending and insurance decisions</li>
            <li>Support ESG-aligned investment</li>
            <li>Enable inclusive rural finance through smart data</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button
          className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          onClick={() => handleScroll("contact-us")}
        >
          Talk to Our Team
        </button>
      </div>
    </section>
  );
};

export default WhoWeServeSection;