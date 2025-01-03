import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DCECE0] py-6 md:py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/footer-logo.png" alt="Agrisense Logo" width={200} height={80} />
          </div>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
            Revolutionizing agriculture with efficiency and speed. <br />
            Discover how we can help, <span className="text-[#519E65]">contact us today!</span>
          </p>
        </div>

        <div className="text-start mt-4 md:mt-0 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 md:mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li>
              <Link href="#home" className="hover:text-[#519E65]">Home</Link>
            </li>
            <li>
              <Link href="#about-us" className="hover:text-[#519E65]">About Us</Link>
            </li>
            <li>
              <Link href="#our-solution" className="hover:text-[#519E65]">Our Solutions</Link>
            </li>
            <li>
              <Link href="#contact-us" className="hover:text-[#519E65]">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="mt-4 text-start md:mt-0 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li><Link href="mailto:agrisense.coffee@gmail.com" className="hover:text-[#519E65]">agrisense.coffee@gmail.com</Link></li>
            <li><Link href="tel:+254769999066" className="hover:text-[#519E65]">+254 769 999 066</Link></li>
            <li className="flex justify-start space-x-4 text-xl">
              <Link href="#" className="text-[#519E65] hover:text-green-600">f</Link>
              <Link href="#" className="text-[#519E65] hover:text-blue-600">X</Link>
              <Link href="#" className="text-[#519E65] hover:text-[#0077b5]">in</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-2 md:mt-12 border-t flex flex-col lg:flex-row justify-between pt-6 text-center text-gray-600">
        <p className="text-sm sm:text-base md:text-lg">&copy; {new Date().getFullYear()} AgriSense Technology Limited. All rights reserved.</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center space-x-6">
          <Link href="#" className="hover:text-[#519E65] text-sm sm:text-base md:text-lg">Terms & Conditions</Link>
          <Link href="#" className="hover:text-[#519E65] text-sm sm:text-base md:text-lg">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;