"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <div className="leading-tight">
            <p className="text-black font-semibold text-base tracking-tight">Seravion</p>
            <p className="text-gray-400 text-[10px] tracking-widest uppercase">Technologies</p>
          </div>
        </Link>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center text-sm gap-8 text-gray-600 font-light">
          <Link href="#about" className="hover:text-black transition-colors">About Us</Link>
          <Link href="#work" className="hover:text-black transition-colors flex items-center gap-1">
            Work <span className="text-blue-500">+</span>
          </Link>
          <Link href="#industries" className="hover:text-black transition-colors flex items-center gap-1">
            Industries <span className="text-blue-500">+</span>
          </Link>
          <Link href="#services" className="hover:text-black transition-colors flex items-center gap-1">
            Services <span className="text-blue-500">+</span>
          </Link>
          <Link href="#blog" className="hover:text-black transition-colors">Blog</Link>
          <Link href="#faq" className="hover:text-black transition-colors">FAQs</Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-2.5 rounded-lg transition-colors font-medium">
            Contact Us
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="#work" onClick={() => setMenuOpen(false)}>Work+</Link>
          <Link href="#industries" onClick={() => setMenuOpen(false)}>Industries+</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services+</Link>
          <Link href="#blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQs</Link>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium w-full text-center">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
