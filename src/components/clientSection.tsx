import React from "react";
import client1 from "../assets/karmiLogo.png";

const ClientsSection: React.FC = () => {
  return (
    <section
      className="py-10 bg-white flex flex-col justify-center items-center text-center"
      aria-labelledby="clients-section"
    >
      <h1
        id="clients-section"
        className="mb-5 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl"
      >
        Trusted By
      </h1>
      <div className="carousel carousel-center space-x-4 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
        <div className="carousel-item">
          <img
            src={client1}
            alt="Karmi Valley Logo"
            className="w-24 h-24 object-contain sm:w-32 sm:h-32"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;