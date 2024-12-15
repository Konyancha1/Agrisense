import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="p-12 bg-white">
      <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
        Unlock Farm Visibility
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ">
        <div className="card bg-white shadow-xl">
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
          <div className="card-body text-center">
            <h2 className="card-title text-gray-800">360 Farm Visibility</h2>
            <p className="text-gray-600">
              Gain a complete view of your farm's performance and operations.
            </p>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
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
          <div className="card-body text-center">
            <h2 className="card-title text-gray-800">Streamlined Operations</h2>
            <p className="text-gray-600">
              Optimize farm management with streamlined operations for greater efficiency.
            </p>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
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
          <div className="card-body text-center">
            <h2 className="card-title text-gray-800">Sales Optimization</h2>
            <p className="text-gray-600">
              Enhance sales through data-driven insights and strategic planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;