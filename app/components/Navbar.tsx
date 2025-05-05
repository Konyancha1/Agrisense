'use client';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Agrisense Logo"
            className="h-12 md:h-16 w-auto" 
          />
        </div>

        <div className="hidden lg:flex space-x-8 text-gray-800 font-semibold font-poppins">
          <a href="#home" className="hover:text-green-600 transition-colors">
            Home
          </a>
          <a href="#what-we-offer" className="hover:text-green-600 transition-colors">
            What We Offer
          </a>
          <div className="relative">
            <a href="#who-we-serve" className="hover:text-green-600 transition-colors">
              Who We Serve
            </a>
          </div>
        </div>

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

        <div className="hidden lg:block">
          <button
            className="bg-[#519E65] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all"
            onClick={() => handleScroll("contact-us")}
          >
            Book a Demo
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
              href="#what-we-offer"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              What We Offer
            </a>
            <a
              href="#who-we-serve"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Who We Serve
            </a>
            <button
              className="bg-[#519E65] text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all"
              onClick={() => handleScroll("contact-us")}
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;