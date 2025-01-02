'use client'
import { FC } from "react";
import { ArrowUpRight, Circle, Clipboard, WifiOff, Zap } from "lucide-react";

const FeaturesSection: FC = () => {

    
const features = [
    {
      icon: <ArrowUpRight />,
      title: "Digital Efficiency",
      description: "Collect, store, and process data digitally in real time, eliminating paper forms and reducing errors.",
    },
    {
      icon: <Circle />,
      title: "Centralized Access",
      description: "Inspectors can access forms, checklists, and guidelines on mobile devices, ensuring accuracy, consistency, and faster inspections.",
    },
    {
      icon: <Clipboard />,
      title: "Simplified Reporting",
      description: "Effortlessly generate and share reports to enhance communication and minimize delays.",
    },
    {
      icon: <WifiOff />,
      title: "Offline Capability",
      description: "Work offline seamlessly with automatic data syncing for efficient field operations.",
    },
    {
      icon: <Zap />,
      title: "Faster Decisions",
      description: "Access real-time data to make quick, informed decisions and boost efficiency.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          Empowering Accreditors and Certifiers with Accurate Data
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Accreditors and certifiers often face time-consuming, error-prone, and inefficient paper-based inspection processes. WaziTrack simplifies and streamlines inspections by providing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
            <div
            key={feature.title}
            className={`bg-[#FFB743] text-left rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300 ${
                index === 0 ? 'md:-rotate-6' : '' // Add anti-clockwise rotation to the first card
            }`}
            >
            <div className="text-2xl text-gray-900 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-800 mb-4">{feature.description}</p>
            <a
                href="#"
                className="text-sm font-semibold text-gray-900 hover:underline flex items-center"
            >
                Learn more <ArrowUpRight className="ml-2" size={16} />
            </a>
            </div>
        ))}
</div>
      </div>
    </section>
  );
};

export default FeaturesSection;
