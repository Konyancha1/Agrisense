import React from 'react';

const OurSolution: React.FC = () => {
  return (
    <section id="our-solution" className="py-6 font-poppins md:py-8 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row px-6 md:px-20 items-center justify-between">
        <div className="text-left md:w-[60%]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A] leading-tight">
            Become Audit-Ready, Always
          </h2>
          <p className="text-lg text-yellow-500 mt-2 md:text-xl">
            Smarter. Simpler. Quicker
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed md:w-[90%] text-base md:text-lg">
            Stay prepared for audits with WaziTrack Compliance Software. Our platform ensures you meet regulatory
            standards like GLOBALGAP, Fairtrade International, USDA Organic, EUDR, EU Organic Certification, HACCP, and more.
          </p>
          <ul className="mt-4 space-y-4 text-gray-700 list-disc pl-6">
            <li>
              <strong>AI-Powered Accuracy:</strong> Correct critical errors in real-time with AI-driven corrective actions.
            </li>
            <li>
              <strong>Mobile-First:</strong> Manage key activities on your phone, from SPS to SOPs, CCPs to SSOPs.
            </li>
            <li>
              <strong>Create and Manage HACCP Plans:</strong> Build and maintain comprehensive HACCP plans for your facility.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[35%] mt-6 md:mt-0 flex justify-end">
          <div className="w-full h-auto max-h-[80%] relative">
            <img
              src="/assets/image-2.png"
              alt="A woman inspecting crops in a greenhouse"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
