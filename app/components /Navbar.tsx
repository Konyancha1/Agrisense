import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png" // Replace with your logo path
            alt="Agrisense Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-green-600">
            Home
          </a>
          <a href="#" className="hover:text-green-600">
            Our Solution
          </a>
          <a href="#" className="hover:text-green-600">
            About Us
          </a>
          <a href="#" className="hover:text-green-600">
            Blog
          </a>
          <a href="#" className="hover:text-green-600">
            Careers
          </a>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
