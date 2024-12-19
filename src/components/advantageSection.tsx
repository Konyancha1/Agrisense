import React from "react";

import { FaClipboardList, FaExclamationTriangle, FaChartLine, FaRobot, FaCloudSunRain, FaMoneyBillWave } from "react-icons/fa";

const advantages = [
  {
    title: "Digital Traceability",
    description:
      "Track every stage of your agricultural process with precision and transparency, ensuring product authenticity and compliance.",
    icon: <FaClipboardList className="w-8 h-8 text-green-900" />
  },
  {
    title: "Early and Accurate Disease Detection",
    description:
      "Leverage advanced technologies to identify potential issues early, reducing crop loss and maximizing yield.",
    icon: <FaExclamationTriangle className="w-8 h-8 text-green-900" />
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain actionable insights through real-time data analysis, empowering you to make informed decisions for optimal outcomes.",
    icon: <FaChartLine className="w-8 h-8 text-green-900" />
  },
  {
    title: "AI Agronomist",
    description:
      "Access AI-driven agronomic advice tailored to your unique farm needs, enhancing productivity and sustainability.",
    icon: <FaRobot className="w-8 h-8 text-green-900" />
  },
  {
    title: "Weather Alerts",
    description:
      "Stay ahead of unpredictable weather conditions with timely and accurate weather forecasts, safeguarding your crops.",
    icon: <FaCloudSunRain className="w-8 h-8 text-green-900" />
  },
  {
    title: "Finance Access",
    description:
      "Connect with financial solutions tailored for farmers, enabling growth and stability in your agricultural journey.",
    icon: <FaMoneyBillWave className="w-8 h-8 text-green-900" />
  },
];

const AdvantagesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover the Advantages of Our Solutions</h2>
          <p className="text-base md:text-lg text-gray-700">
            Our innovative solutions empower farmers with tools and insights that enhance productivity, ensure sustainability, and provide access to essential resources. Explore how each feature can transform your agricultural journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">{advantage.title}</h3>
              <p className="text-base text-gray-700 text-center">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
