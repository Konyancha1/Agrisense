import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="hover:text-green-600 text-green-900 font-medium"
      aria-label={children?.toString()}
    >
      {children}
    </a>
  </li>
);

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white text-green-900">
      {/* Header */}
      <header>
        <div className="navbar bg-white shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                <NavLink href="#home">Home</NavLink>
                <li>
                  <details>
                    <summary className="hover:text-green-600 text-green-900 font-medium">Our Solutions</summary>
                    <ul className="p-2 bg-white">
                      <NavLink href="#our-solutions">WaziTrack</NavLink>
                    </ul>
                  </details>
                </li>
                <NavLink href="#about-us">About Us</NavLink>
              </ul>
            </div>
            <a
              className="btn btn-ghost text-xl text-green-600 font-bold"
              href="#home"
              aria-label="Agrisense Home"
            >
              Agrisense
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink href="#home">Home</NavLink>
              <li>
                <details>
                  <summary className="hover:text-green-600 text-green-900 font-medium">Our Solutions</summary>
                  <ul className="p-2 bg-white">
                    <NavLink href="#our-solutions">WaziTrack</NavLink>
                  </ul>
                </details>
              </li>
              <NavLink href="#about-us">About Us</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn bg-green-600 text-white hover:bg-green-700 border-none"
              href="#contact-us"
              aria-label="Request for Demo"
            >
              Request for Demo
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer bg-green-600 text-white p-12 mt-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <p className="font-bold text-lg mb-4">Agrisense Technologies Limited</p>
              <p className="text-sm">
                Empowering businesses with cutting-edge technologies. We specialize in providing innovative solutions
                for various industries, helping them grow through smarter systems and data-driven strategies.
              </p>
            </div>

            <div>
              <p className="font-bold text-lg mb-4">Quick Links</p>
              <ul>
                <li>
                  <a href="#home" className="hover:text-green-300">Home</a>
                </li>
                <li>
                  <a href="#about-us" className="hover:text-green-300">About Us</a>
                </li>
                <li>
                  <a href="#our-solutions" className="hover:text-green-300">Our Solutions</a>
                </li>
                <li>
                  <a href="#contact-us" className="hover:text-green-300">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-lg mb-4">Contact Information</p>
              <ul>
                <li className="mb-2">
                  <span className="block text-sm">Email: agrisense.coffee@gmail.com</span>
                </li>
                <li className="mb-2">
                  <span className="block text-sm">Phone: +254 769 999 066</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm mb-4">Follow Us</p>
            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" className="hover:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v9h5v-9h4l1-4h-5V6a1 1 0 0 1 1-1h3V2z"
                  />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M23 3a10.8 10.8 0 0 1-3.141.859A5.404 5.404 0 0 0 22.47 2c-.863.51-1.81.868-2.815 1.038a5.415 5.415 0 0 0-9.345 4.928C7.72 7.722 4.1 5.1 1.64 3.321a5.417 5.417 0 0 0 1.675 7.217A5.375 5.375 0 0 1 .64 9.644v.05a5.416 5.416 0 0 0 4.345 5.295 5.402 5.402 0 0 1-2.437.092 5.42 5.42 0 0 0 5.063 3.757 10.839 10.839 0 0 1-6.68 2.31c-.434 0-.862-.025-1.291-.072a15.31 15.31 0 0 0 8.14 2.39C17.55 20 23 10.5 23 3z"
                  />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-green-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 2C2.895 2 2 2.895 2 4v16c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H4zm2 16v-7h4v7h-4zm2-8H6V9h2V7c0-1.105.895-2 2-2h1v3h-2v3h4v7h-4v-7h-2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-green-700 pt-6">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Agrisense Technologies Limited. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default MainLayout;