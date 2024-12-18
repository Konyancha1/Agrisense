import React from "react";
import wazitrack from "../assets/Farmers Main Dashboard.png";

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Wazitrack",
      description:
        "A tool designed to streamline recording of farming activities and enhance traceability, ensuring better productivity and transparency.",
      image: wazitrack,
    },
  ];

  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your account on Wazitrack by providing basic details to get started.",
      icon: "👤",
    },
    {
      title: "Set Up Your Farm",
      description:
        "Enter details about your farm, including crops, livestock, and production activities.",
      icon: "🌾",
    },
    {
      title: "Start Tracking",
      description:
        "Record farming activities and generate insights for better decision-making.",
      icon: "📊",
    },
  ];

  return (
    <>
      <section className="bg-white py-12" id="our-solutions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
              Explore our tools that revolutionize farming through innovation and technology.
            </p>
          </div>

          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`flex flex-col-reverse lg:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Mockup Browser */}
              <div className="lg:w-1/2 w-full">
                <div className="mockup-browser bg-base-300 border shadow-lg">
                  <div className="mockup-browser-toolbar">
                    <div className="input text-sm">https://wazitrack.com</div>
                  </div>
                  <div className="bg-base-200 flex justify-center">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h3 className="text-3xl font-semibold text-green-700">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  {solution.description}
                </p>
                <button className="btn btn-outline btn-success mt-6">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              How to Get Started with Wazitrack
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Follow these simple steps to begin your journey toward smarter farming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl">{step.icon}</div>
                <h3 className="text-xl font-semibold text-green-700 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSection;