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
    <nav className="fixed left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">Logo</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-gray-600 px-3 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="w-[120px] h-[40px] inline-flex items-center justify-center bg-black text-[#A2F97D] text-center rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile View - Hamburger and Contact Button */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="/contact"
              className="w-[120px] h-[40px] inline-flex items-center justify-center bg-black text-[#A2F97D] text-center rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div>
          {/* Blur Background */}
          <div
            className="fixed inset-0 bg-gray-900/70 backdrop-blur-md"
            onClick={closeMenu}
          ></div>

          {/* Menu */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex flex-col items-start pt-20 px-6 space-y-6">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
