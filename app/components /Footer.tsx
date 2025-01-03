import React from "react";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DCECE0] py-6 md:py-12 text-center">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="text-center md:text-left">
        <div className="flex justify-center lg:justify-start">
        <Image src="/assets/footer-logo.png" alt="Agrisense Logo" width={200} height={80} />
        </div>
        <p className="mt-4 text-gray-700">
          Revolutionizing agriculture with efficiency and speed. <br />
          Discover how we can help, contact us today!
        </p>
      </div>
      <div className="text-start mt-4 lg:mt-8 md:mt-0">
        <h3 className="text-lg ">Company</h3>
        <ul className="mt-2 md:mt-4 space-y-2 text-gray-700">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Solutions</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="mt-4 text-start md:mt-0">
        <h3 className="text-lg">Get In Touch</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>agrisense.coffee@gmail.com</li>
          <li>+254 769 999 066</li>
          <li className="flex justify-start space-x-4 text-xl">
            <span>f</span>
            <span>X</span>
            <span>in</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-2 md:mt-12 border-t flex flex-col lg:flex-row justify-between pt-6 text-center text-gray-600">
      <p>&copy; 2024 AgriSense Technology Limited. All rights reserved.</p>
      <div className="mt-4 flex flex-col md:flex-row justify-center space-x-6">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
