import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-6 font-poppins md:py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl px-6 md:px-20 text-left py-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#16A34A] leading-tight">
          About Us
        </h1>
        <p className="text-lg text-gray-700 opacity-90 md:opacity-80 leading-relaxed mt-4">
          At Agrisense, we deliver cutting-edge digital solutions for traceability, compliance, and productivity 
          in agriculture. Our platform enhances transparency, streamlines operations, and optimizes resource use, 
          connecting agribusinesses to global markets. Dedicated to sustainability and efficiency, we empower you 
          to grow smarter and succeed in today’s competitive landscape.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
