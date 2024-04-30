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
