import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DCECE0] py-6 md:py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/footer-logo.png" alt="Agrisense Logo" width={220} height={100} />
          </div>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
          Smart Farming. Global Compliance.<br /> Financing Unlocked. <span> <Link href="#contact-us" className="text-[#519E65]">contact us today!</Link></span>
          </p>
        </div>

        <div className="text-center md:text-left mt-4 md:mt-0 mb-6 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 md:mt-4 space-y-2 text-gray-700 text-base md:text-lg">
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

        <div className="text-center md:text-left mt-4 md:mt-0 mb-6 md:mb-0 w-full md:w-1/3">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li>
              <Link href="mailto:info@agrisensetech.com" className="hover:text-[#519E65]">
                info@agrisensetech.com
              </Link>
            </li>
            <li>
              <Link href="tel:+254769999066" className="hover:text-[#519E65]">
                +254 769 999 066
              </Link>
            </li>
            <li className="flex justify-center md:justify-start space-x-4">
              <Link href="https://web.facebook.com/profile.php?id=61565092580073" target="_blank" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#519E65]"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.81v-9.294H9.692V11.13h3.118V8.41c0-3.1 1.892-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.244l-1.918.001c-1.504 0-1.795.714-1.795 1.762v2.309h3.59l-.467 3.576h-3.123V24h6.127C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="https://x.com/AgriSenseTech00" target="_blank" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 text-[#519E65]"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/agrisense-co/posts/?feedView=all" target="_blank" className="hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#519E65]"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.56c-1.12 0-2.03-.91-2.03-2.03s.91-2.03 2.03-2.03 2.03.91 2.03 2.03-.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.6c0-1.34-.02-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.7h-3.5V9h3.36v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.57 0 4.23 2.35 4.23 5.4v6.31z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 md:mt-12 border-t pt-6 text-center text-gray-600 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-base md:text-lg">
          &copy; {new Date().getFullYear()} AgriSense Technology Limited. All rights reserved.
        </p>
        <div className="mt-4 lg:mt-0 flex flex-col md:flex-row justify-center md:space-x-6">
          <Link href="#" className="hover:text-[#519E65] text-base md:text-lg">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-[#519E65] text-base md:text-lg">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;