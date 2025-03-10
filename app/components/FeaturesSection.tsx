'use client';
import { FC } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { LuClipboardPenLine } from "react-icons/lu";
import { TbCloudOff } from "react-icons/tb";
import { Zap } from "lucide-react";

const features = [
  {
    icon: <IoMdTrendingUp />,
    title: "Digital Efficiency",
    description:
      "Collect, store, and process data digitally in real time, eliminating paper forms and reducing errors.",
  },
  {
    icon: <TbCloudOff />,
    title: "Centralized Access",
    description:
      "Inspectors can access forms, checklists, and guidelines on mobile devices, ensuring accuracy, consistency, and faster inspections.",
  },
  {
    icon: <LuClipboardPenLine />,
    title: "Simplified Reporting",
    description:
      "Effortlessly generate and share reports to enhance communication and minimize delays.",
  },
  {
    icon: <TbCloudOff />,
    title: "Offline Capability",
    description:
      "Work offline seamlessly with automatic data syncing for efficient field operations.",
  },
  {
    icon: <Zap />,
    title: "Faster Decisions",
    description:
      "Access real-time data to make quick, informed decisions and boost efficiency.",
  },
];

const FeaturesSection: FC = () => {
  return (
    <section className="py-4 font-poppins md:py-6 px-6 md:px-12 lg:px-24">
      <div className="container px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A] mb-4">
          Empowering Accreditors and Certifiers with Accurate Data
        </h2>
        <p className="text-gray-600 text-lg mb-8 lg:mb-12">
          Accreditors and certifiers often face time-consuming, error-prone, and inefficient paper-based inspection processes. WaziTrack simplifies and streamlines inspections by providing:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-[#FFB743] text-left rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300 ${
                index === 0 ? 'md:-rotate-6' : ''
              }`}
            >
              <div className="text-2xl text-gray-900 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-800 mb-4 text-base">{feature.description}</p>
              <a
                href="#contact-us"
                className="text-base font-semibold text-gray-900 hover:underline flex items-center"
              >
                Learn more <FaAngleRight className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-center mt-8 md:w-[65%] mx-auto">
          {features.slice(3).map((feature) => (
            <div
              key={feature.title}
              className="bg-[#FFB743] text-left rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl text-gray-900 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-800 mb-4 text-base">{feature.description}</p>
              <a
                href="#contact-us"
                className="text-base font-semibold text-gray-900 hover:underline flex items-center"
              >
                Learn more <FaAngleRight className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;