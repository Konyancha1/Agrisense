import React from "react";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="text-center md:text-left">
        <Image src="/assets/logo.png" alt="Agrisense Logo" width={200} height={80} />
        <p className="mt-4 text-gray-700">
          Revolutionizing agriculture with efficiency and speed.
          Discover how we can help, contact us today!
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <h3 className="text-lg font-semibold">Company</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Solutions</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="mt-8 md:mt-0">
        <h3 className="text-lg font-semibold">Get In Touch</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>agrisense.coffee@gmail.com</li>
          <li>+254 769 999 066</li>
          <li className="flex space-x-4 text-xl">
            <span>f</span>
            <span>X</span>
            <span>in</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-12 border-t flex justify-between pt-6 text-center text-gray-600">
      <p>&copy; 2024 AgriSense Technology Limited. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
