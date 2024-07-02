import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full p-4 border-t border-t-[#E5E8EB] text-center select-none flex flex-col md:flex-row items-center justify-center">
      <Link
        to="/about"
        className="cursor-pointer font-bold text-gray-700 hover:text-orange-600 transition-colors duration-300 mb-2 md:mb-0 md:mr-8"
      >
        About us
      </Link>
      <p className="font-bold text-gray-700 mb-2 md:mb-0">
        Copyright@2024 Varudi Brass
      </p>
      <Link
        to="/contact-us"
        className="cursor-pointer font-bold text-gray-700 hover:text-orange-600 transition-colors duration-300 mt-2 md:mt-0 md:ml-8"
      >
        Contact us
      </Link>
    </footer>
  );
}

export default Footer;
