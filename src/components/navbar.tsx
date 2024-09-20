import React, { useEffect, useState } from 'react';
import Button from './button';
import Logo from '../assets/images/logo.png';  
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`${
          isScrolled ? 'w-full bg-white shadow-lg rounded-none top-0' : 'w-[85%] bg-white bg-opacity-30 top-2'
        } hidden md:flex justify-between items-center p-4 rounded-[2rem] fixed left-0 right-0 mx-auto z-50 transition-all duration-300 ease-in-out`}
      >
        <img className="w-32" src={Logo} />
        <ul className="flex space-x-12">
          <li>
            <a href="#home" className="text-green-700 hover:text-green-800 text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-green-700 hover:text-green-800 text-lg">
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="text-green-700 hover:text-green-800 text-lg">
              Our Products
            </a>
          </li>
          <li>
            <a href="#contact" className="text-green-700 hover:text-green-800 text-lg">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Button
            onClick={() => console.log('Farmer Clicked')}
            backgroundColor="bg-yellow-400 text-white hover:bg-yellow-600"
            text="Farmer"
          />
          <Button
            onClick={() => console.log('Company Clicked')}
            backgroundColor="bg-green-600 text-white hover:bg-green-700"
            text="Company"
          />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="relative md:hidden flex justify-between items-center w-full p-6 bg-white shadow-md z-50">
        <img className='w-28' src={Logo} />
        <div className="text-2xl text-black cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden z-[1000] fixed top-0 right-0 w-full bg-white p-6 flex flex-col space-y-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: '100vh' }}
      >
        <div className="flex justify-end">
          <div className="text-2xl text-black cursor-pointer" onClick={closeMenu}>
            <FaTimes />
          </div>
        </div>
        <ul className="flex flex-col space-y-4">
          <li><a href="#home" className="text-green-600 hover:text-green-700 text-base" onClick={closeMenu}>Home</a></li>         
          <li><a href="#about" className="text-green-600 hover:text-green-700 text-base" onClick={closeMenu}>About Us</a></li>
          <li><a href="#product" className="text-green-600 hover:text-green-700 text-base" onClick={closeMenu}>Our Products</a></li>
          <li><a href="#contact" className="text-green-600 hover:text-green-700 text-base" onClick={closeMenu}>Contact Us</a></li>
        </ul>
        <div className="flex flex-col space-y-2">
          <Button
            onClick={() => {
              console.log('Farmer Clicked');
              closeMenu();
            }}
            backgroundColor="bg-yellow-400 text-white hover:bg-yellow-600"
            text="Farmer"
          />
          <Button
            onClick={() => {
              console.log('Company Clicked');
              closeMenu();
            }}
            backgroundColor="bg-green-600 text-white hover:bg-green-700"
            text="Company"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;