"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";  // Import Link from Next.js

const NAV_LINKS = [
  { href: "/about", label: "About" },
  {
    href: "/projects",
    label: "Projects",
    dropdown: [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
      "Project 5",
    ],
  },
  {
    href: "/services", // Corrected href
    label: "Services",
    dropdown: [
      "Service 1",
      "Service 2",
      "Service 3",
      "Service 4",
      "Service 5",
    ],
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Handle screen resize and reset menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: "auto",
        opacity: 1,
        ease: "power3.out",
      });

      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        height: 0,
        opacity: 0,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed left-0 right-0 z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 2xl:px-72 py-4">
        <div className="flex items-center justify-between">
          {/* Logo wrapped in Link component to redirect to home page */}
          <Link href="/" passHref>
            <div className="text-xl font-bold text-gray-800 cursor-pointer">
              Logo
            </div>
          </Link>

          <div className="hidden md:flex space-x-4 items-center">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href} // Using Next.js Link component
                  className="text-gray-800 font-medium hover:text-gray-600 px-3 py-2"
                >
                  {link.label}
                </Link>

                {(link.label === "Projects" || link.label === "Services") && (
                  <div
                    className="absolute top-8 left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                  >
                    {/* Dropdown items (show only first 3 items) */}
                    {(link.dropdown?.slice(0, 3) || []).map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                    {/* "See More" link */}
                    {link.dropdown && link.dropdown.length > 3 && (
                      <Link
                        href="/services-list"  // Corrected href for See More
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        See More
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 inline-flex items-center justify-center bg-black font-semibold text-[#A2F97D] text-center rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center backdrop-blur-md space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 inline-flex items-center justify-center bg-black text-[#A2F97D] text-center rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
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

      <div ref={menuRef} className="overflow-hidden opacity-0 h-0">
        <div className="flex flex-col items-start pt-4 pb-4 px-6 space-y-4">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              ref={(el) => {
                if (el) {
                  linksRef.current[index] = el;
                }
              }}
              href={link.href} // Using Next.js Link component
              className="text-lg text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
