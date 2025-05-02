'use client';
import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import { TrendingUp, Users, CreditCard, BarChart2, Award } from "lucide-react";

const impactStats = [
  {
    icon: <TrendingUp size={32} strokeWidth={2} />,
    title: "Increased Yields",
    value: "45%",
    description: "Higher yields using AI recommendations"
  },
  {
    icon: <Users size={32} strokeWidth={2} />,
    title: "Certified Farmers",
    value: "700+",
    description: "Farmers certified for EUDR/Global GAP"
  },
  {
    icon: <CreditCard size={32} strokeWidth={2} />,
    title: "Financial Inclusion",
    value: "100%",
    description: "Digital credit profiles powering access"
  },
  {
    icon: <BarChart2 size={32} strokeWidth={2} />,
    title: "Input Savings",
    value: "20%",
    description: "Cost reduction through optimization"
  },
  {
    icon: <Award size={32} strokeWidth={2} />,
    title: "Multi-Certification",
    value: "6",
    description: "EUDR, GAP, Organic, Rainforest, FairTrade, SMETA"
  }
];

const ImpactSnapshotSection: FC = () => {
  const handleScroll = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element isn't found, we can scroll to a fallback location
      // or handle it another way (e.g., console warning)
      console.warn(`Element with id ${elementId} not found`);
    }
  };

  return (
    <section className="py-4 font-poppins md:py-6 px-6 md:px-12 lg:px-24">
      <div className="container px-6 md:px-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16A34A] mb-2 relative inline-block">
            Impacts
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Measurable results that demonstrate our platform's transformative impact on agricultural communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {impactStats.slice(0, 3).map((stat, index) => (
            <div
              key={stat.title}
              className={`bg-[#FFB743] text-left rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300 ${
                index === 0 ? 'md:-rotate-6' : ''
              }`}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4 mx-auto">
                <div className="text-[#16A34A]">{stat.icon}</div>
              </div>
              <div className="text-center mb-3">
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{stat.title}</h3>
              <p className="text-gray-800 mb-4 text-base text-center">{stat.description}</p>
              <div className="text-center">
                <button
                  className="text-base font-semibold text-gray-900 hover:underline flex items-center justify-center"
                  onClick={() => handleScroll("contact-us")}
                >
                  Learn more <FaAngleRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-center mt-8 md:w-[65%] mx-auto">
          {impactStats.slice(3).map((stat) => (
            <div
              key={stat.title}
              className="bg-[#FFB743] text-left rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4 mx-auto">
                <div className="text-[#16A34A]">{stat.icon}</div>
              </div>
              <div className="text-center mb-3">
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{stat.title}</h3>
              <p className="text-gray-800 mb-4 text-base text-center">{stat.description}</p>
              <div className="text-center">
                <button
                  className="text-base font-semibold text-gray-900 hover:underline flex items-center justify-center"
                  onClick={() => handleScroll("contact-us")}
                >
                  Learn more <FaAngleRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshotSection;