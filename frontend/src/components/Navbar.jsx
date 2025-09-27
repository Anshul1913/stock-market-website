// import React from "react";

import { Menu, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";


import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.jpeg"; // Ensure this path is correct

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-md py-2" : "py-4"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Traders Profit Club Logo"
            className="h-12 w-auto rounded object-contain shadow-md"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-slate-700">
          {[
            "Home",
            "About",
            "Benefits",
            "Courses",
            "Testimonials",
            "Contact",
          ].map((link) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md px-6 py-6 space-y-4 text-center shadow-md">
          {[
            "Home",
            "About",
            "Benefits",
            "Courses",
            "Testimonials",
            "Contact",
          ].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
