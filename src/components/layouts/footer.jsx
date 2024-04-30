import React from 'react';
import logo from '../../assets/Agrisense Logo.png';

const Footer = () => {
  return (
    <footer className="bg-white p-3 border-t-2 font-sans">
      <div className="container mx-auto px-4 lg:px-24 flex justify-between items-center">
        <img src={logo} alt="Agrisense Logo" className="h-auto md:w-48 w-24" />
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
