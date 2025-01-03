'use client';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Agrisense Logo"
            className="h-16 w-auto"  // Increased logo size
          />
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex space-x-8 text-gray-800 font-semibold font-poppins">
          <a href="#home" className="hover:text-green-600 transition-colors">
            Home
          </a>
          <a href="#about-us" className="hover:text-green-600 transition-colors">
            About Us
          </a>
          <a href="#our-solution" className="hover:text-green-600 transition-colors">
            Our Solution
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden flex items-center text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Login Button */}
        <div className="hidden lg:block">
          <button className="bg-[#519E65] text-white px-4 lg:px-8 py-2 rounded-md hover:bg-green-700 transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full shadow-md">
          <div className="flex flex-col items-center space-y-6 py-6 text-gray-800 font-semibold font-poppins">
            <a
              href="#home"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about-us"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#our-solution"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Solution
            </a>
            <button
              className="bg-[#519E65] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;