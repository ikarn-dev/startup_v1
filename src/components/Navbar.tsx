"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Explicitly close the menu
  };

  return (
    <nav className="fixed left-0 right-0 z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-4">
        <div className="flex items-center justify-between">

          <div className="text-xl font-bold text-gray-800">Logo</div>


          <div className="hidden md:flex space-x-4 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 font-medium hover:text-gray-600 px-3 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-5 py-2 inline-flex items-center justify-center border-2 border-[#A2F97D] bg-black font-semibold text-[#A2F97D] text-center rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>


          <div className="md:hidden flex items-center backdrop-blur-md space-x-4">
            <a
              href="/contact"
              className="px-5 py-2 inline-flex items-center justify-center border-2 border-[#A2F97D] bg-black text-[#A2F97D] text-center rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
            <button
              onClick={toggleMenu}
              className="border-2 border-[#A2F97D] relative w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <Menu className="text-[#A2F97D]" size={24} />
              ) : (
                <X className="text-[#A2F97D]" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-start pt-4 pb-4 px-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-800 hover:text-gray-600"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;