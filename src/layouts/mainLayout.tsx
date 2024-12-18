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
      <footer className="footer footer-center bg-green-600 text-white p-10">
        <aside>
          <p className="font-bold">Agrisense Technologies Limited</p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default MainLayout;