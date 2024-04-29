import React from 'react';
import logo from '../../assets/Agrisense Logo.png';

const Navbar = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:agrisense.coffee@gmail.com';
  };

  return (
    <nav className="bg-white p-3 shadow-md font-sans">
      <div className="flex items-center justify-between mx-4 lg:mx-24">
        <img src={logo} alt="Agrisense Logo" className="h-auto w-48" />
        <div className="hidden lg:flex items-center justify-center gap-10 flex-grow">
          <a href="#contact" className="block lg:inline-block lg:mt-0 mr-4 font-semibold text-gray-800 hover:text-green-600">Home</a>
          <a href="#about" className="block lg:inline-block lg:mt-0 mr-4 font-semibold text-gray-800 hover:text-green-600">About Us</a>
          <a href="#solution" className="block lg:inline-block lg:mt-0 mr-4 font-semibold text-gray-800 hover:text-green-600">Our Solution</a>
        </div>
        <button
            className={`flex bg-green-600 p-3 text-sm text-white font-bold rounded-lg cursor-pointer transition duration-300 hover:bg-green-700 md:px-6 md:py-3 md:text-base`}
            onClick={handleContactClick}
            title ='mailto:agrisense.coffee@gmail.com'
          >
            Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
