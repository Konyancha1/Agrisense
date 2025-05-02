'use client';
import { FC } from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { TrendingUp, CreditCard, BarChart2, Award } from "lucide-react";

const impactStats = [
  {
    icon: <TrendingUp size={32} strokeWidth={3} />,
    title: "Increased Yields",
    value: "45%",
    description: "Higher yields using AI recommendations"
  },
  {
    icon: <CreditCard size={32} strokeWidth={3} />,
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-6 px-6 md:px-12 lg:px-24 font-poppins">
      <div className="text-center mb-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-[#16A34A] mb-4">Impact Snapshot</h2>
          <div className="h-1 w-24 bg-[#FFB743] mx-auto"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Measurable results that demonstrate our platform's transformative impact on agricultural communities
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FFB743] rounded-xl p-6 shadow-md w-[280px] md:w-[300px] lg:w-[320px] h-[320px] text-center"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mb-4 mx-auto text-[#16A34A]">
                {stat.icon}
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-800 mb-4 text-base">{stat.description}</p>
              <button
                className="text-base font-semibold text-gray-900 hover:underline flex items-center justify-center mx-auto"
                onClick={() => handleScroll("contact-us")}
              >
                Learn more <FaAngleRight className="ml-2" size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshotSection;
