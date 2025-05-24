'use client';
import { FC, useState } from "react";
import Image from "next/image";
import { 
  Globe, 
  Leaf, 
  CreditCard, 
  LineChart, 
  ChevronRight,
  CheckCircle
} from "lucide-react";

import complianceImage from "../../assets/images/Img.png";
import complianceImage2 from "../../assets/images/Img2.png";
import complianceImage3 from "../../assets/images/Smart.png";
import complianceImage4 from "../../assets/images/Cash.png";

const WhatWeOfferSection: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offeringTabs = [
    {
      id: 0,
      icon: <Globe size={24} />,
      title: "Global Compliance & Traceability",
      tagline: "Ensure your value chain meets export regulations with ease.",
      features: [
        "EUDR compliance: GPS mapping, deforestation checks, land use history",
        "Global GAP support: digital records, audit tools, traceability logs",
        "Multi-certification readiness: Organic, FairTrade, Rainforest Alliance, SMETA",
        "Audit-ready dashboards for exporters and certifiers",
        "Enumerator tools for efficient field data capture"
      ],
      cta: "Get Certified Now"
    },
    {
      id: 1,
      icon: <Leaf size={24} />,
      title: "Climate-Smart & Regenerative Farming",
      tagline: "Farming that adapts, regenerates, and thrives.",
      features: [
        "Dynamic planting & harvest calendars via weather insights",
        "AI-powered pest & disease alerts",
        "Regenerative practices: composting, soil health, cover cropping",
        "Weather-based risk alerts in local languages",
        "Satellite and mobile data for resilient agriculture"
      ],
      cta: "Explore Climate Tools"
    },
    {
      id: 2,
      icon: <CreditCard size={24} />,
      title: "Agri-Financing & Credit Access",
      tagline: "Turn farm data into financial opportunities.",
      features: [
        "Supply chain financing for exporters",
        "Invoice factoring: Turn outstanding invoices into instant cash flow — no collateral needed",
        "Verified digital profiles built from compliance, weather, and yield data",
        "AI-driven credit scoring for de-risked lending",
        "Tools to assess loan readiness and track financial health"
      ],
      cta: "Unlock Financing",
      note: "Strategic Partners: We work with banks and trade finance institutions to deliver flexible, inclusive financing to agribusinesses and farmers."
    },
    {
      id: 3,
      icon: <LineChart size={24} />,
      title: "Smart Farm Management",
      tagline: "Digitize daily farm operations. Boost productivity and compliance.",
      features: [
        "Plan, track, and analyze activities: input use, labor, harvest",
        "Generate audit-ready reports for certification",
        "AI-powered task reminders and crop alerts",
        "Multi-farm dashboards for cooperatives and aggregators"
      ],
      cta: "Try Smart Farm Management"
    }
  ];

  return (
    <section id= "what-we-offer" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#16A34A] mb-4">What We Offer</h2>
          <div className="h-1 w-24 bg-[#FFB743] mx-auto"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {offeringTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#16A34A] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-[#FFB743] hover:text-gray-800"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center">
                <div className="bg-[#FFB743] p-3 rounded-full mr-4">
                  {offeringTabs[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {offeringTabs[activeTab].title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 my-4">
                {offeringTabs[activeTab].tagline}
              </p>
              
              <ul className="space-y-3 mb-6">
                {offeringTabs[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={20} className="text-[#16A34A] mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {offeringTabs[activeTab].note && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 mb-6">
                  {offeringTabs[activeTab].note}
                </div>
              )}
              
              <button
                onClick={() => handleScroll("contact-us")}
                className="bg-[#16A34A] text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                {offeringTabs[activeTab].cta}
                <ChevronRight size={18} className="ml-2" />
              </button>
            </div>

            {/* Right Visuals */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB743] opacity-10 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#16A34A] opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

              <div className="aspect-w-16 aspect-h-9 relative z-10 flex items-center justify-center">
                <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  {activeTab === 0 && (
                    <div className="text-center w-full h-full relative rounded-lg overflow-hidden">
                      <Image 
                        src={complianceImage}
                        alt="Global Compliance & Traceability"
                        fill
                        className="rounded-lg"
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div className="text-center w-full h-full relative rounded-lg overflow-hidden">
                      <Image 
                        src={complianceImage3}
                        alt="Climate-Smart & Regenerative Farming"
                        fill
                        className="rounded-lg"
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="text-center w-full h-full relative rounded-lg overflow-hidden">
                      <Image 
                        src={complianceImage4}
                        alt="Smart Farm Management"
                        fill
                        className="rounded-lg"
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="text-center w-full h-full relative rounded-lg overflow-hidden">
                      <Image 
                        src={complianceImage2}
                        alt="Smart Farm Management"
                        fill
                        className="rounded-lg"
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;