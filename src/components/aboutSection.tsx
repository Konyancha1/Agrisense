import React from "react";
import farmer from '../assets/image.png';

const AboutSection: React.FC = () => {
  return (
    <section>
      <section className="p-12 bg-white" id="about-us">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-screen-xl mx-auto">
          <figure className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={farmer}
              alt="Agrisense Technologies"
              className="rounded-lg shadow-lg w-[90%]"
            />
          </figure>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-gray-800 text-xl md:text-3xl font-semibold">
              About Us
            </h1>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Agrisense Technologies is dedicated to transforming African agriculture by
              empowering farmers with digital tools that enhance climate adaptation,
              resilience, and promote sustainable farming practices.
              <br />
              <br />
              Our platform addresses farm management inefficiencies, unpredictable
              weather patterns, traceability gaps from farm-to-cup, farmer education,
              and regulatory compliance to ensure continuous market access.
            </p>
          </div>
        </div>
      </section>

      <section className="p-12 bg-white" id="about-us">
        <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
          Unlock Farm Visibility
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <div className="card bg-white shadow-lg hover:shadow-xl transition duration-300">
            <figure className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-green-600 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </figure>
            <div className="card-body text-center md:text-left">
              <h2 className="card-title mx-auto text-gray-800">360 Farm Visibility</h2>
              <p className="text-gray-600 text-base">
                Gain a complete view of your farm's performance and operations.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-lg hover:shadow-xl transition duration-300">
            <figure className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-green-600 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5M12 5l7 7-7 7"
                />
              </svg>
            </figure>
            <div className="card-body text-center md:text-left">
              <h2 className="card-title mx-auto text-gray-800">Streamlined Operations</h2>
              <p className="text-gray-600 text-base">
                Optimize farm management with streamlined operations for greater
                efficiency.
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-lg hover:shadow-xl transition duration-300">
            <figure className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-green-600 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19l5-5-5-5M5 5h14"
                />
              </svg>
            </figure>
            <div className="card-body text-center md:text-left">
              <h2 className="card-title mx-auto text-gray-800">Sales Optimization</h2>
              <p className="text-gray-600 text-base">
                Enhance sales through data-driven insights and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;