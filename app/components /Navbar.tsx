'use client'
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev);
    };
  return (
    <nav className="lg:fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png" // Replace with your logo path
            alt="Agrisense Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-8 text-gray-800 font-semibold font-poppins">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#our-solution" className="hover:text-green-600">
            Our Solution
          </a>
          <a href="#about-us" className="hover:text-green-600">
            About Us
          </a>
          <a href="#" className="hover:text-green-600">
            Blog
          </a>
          <a href="#" className="hover:text-green-600">
            Careers
          </a>
        </div>

        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400"
          onClick={toggleMobileMenu}
        >
          <FaBars className='text-lg'/>
        </button>
        {/* Login Button */}
        <div>
          <button className="bg-[#519E65] text-white px-4 lg:px-10 py-1 py-2 rounded-md md:rounded-lg hover:bg-green-700">
            Login
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
          <div className="lg:hidden flex p-4 items-center text-gray-800 font-semibold font-poppins">
            <div className="flex flex-col mx-auto space-y-4">
            <a href="#home" className="hover:text-green-600">
                  Home
            </a>
            <a href="#our-solution" className="hover:text-green-600">
                  Our Solution
            </a>
            <a href="#about-us" className="hover:text-green-600">
              About Us
            </a>
            <a href="#" className="hover:text-green-600">
              Blog
            </a>
            <a href="#" className="hover:text-green-600">
              Careers
            </a>
            </div>
        </div>      
      )}
    </nav>
  );
};

export default Navbar;
