import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full px-4 md:px-8 flex items-center justify-between min-h-[65px] border-b border-b-[#E5E8EB] bg-white">
      {/* Logo and Brand Name */}
      <Link to="/home" className="flex items-center gap-2">
        <img
          className="cursor-pointer h-[45px] w-[45px] rounded-md"
          src={Logo}
          alt="Sardar Brass"
        />
        <p className="cursor-pointer select-none text-lg font-bold text-orange-600">
          Sardar Industries
        </p>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center text-lg text-orange-600">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[65px] left-0 right-0 bg-white shadow-lg border-t border-b-[#E5E8EB] md:hidden">
          <div className="flex flex-col items-center gap-4 text-lg text-orange-600 py-4">
            <NavLink to="/home" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/products" onClick={toggleMenu}>
              Products
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu}>
              About us
            </NavLink>
            <NavLink to="/contact-us" onClick={toggleMenu}>
              Contact us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

// NavLink component for consistent styling and navigation
function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="cursor-pointer font-bold pb-1 border-b-2 border-transparent hover:border-orange-600 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

export default NavBar;
