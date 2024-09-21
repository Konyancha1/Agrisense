import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white px-6 sm:px-12 md:px-16 lg:px-28 py-10">
        <div className='shadow-lg p-10 rounded-3xl bg-green-800 bg-opacity-10'>
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 ">
            <div className="flex flex-col items-start space-y-4">
              <img src={Logo} alt="Logo" className="w-32" />
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="w-6 h-6 hover:text-yellow-400" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 hover:text-yellow-400" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 hover:text-yellow-400" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-3/4">
              <div>
                <h3 className="font-semibold text-xl mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
                  <li><a href="#careers" className="hover:text-yellow-400">Careers</a></li>
                  <li><a href="#blog" className="hover:text-yellow-400">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#help" className="hover:text-yellow-400">Support</a></li>
                  <li><a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
                  <li><a href="#terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li><a href="mailto:agrisense.coffee@gmail.com" className="hover:text-yellow-400">agrisense.coffee@gmail.com</a></li>
                  <li><a href="tel:+254769999066" className="hover:text-yellow-400">+254 769 999 066</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 my-8"></div>
        </div>
      </footer>
      <div className="w-full bg-yellow-400 p-4">
        <div className="text-left text-black">
          © {new Date().getFullYear()} Agrisense Technologies. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;