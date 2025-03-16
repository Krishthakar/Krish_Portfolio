"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white py-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 max-w-7xl">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500 cursor-pointer">
          <Link href="/">Krish Thakar</Link>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 mx-auto">
          {["about", "skills", "projects", "personal-data", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-lg font-medium hover:text-blue-400 transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black md:hidden flex flex-col space-y-3 py-4 text-center">
            {["about", "skills", "projects", "personal-data", "contact"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-lg font-medium py-2 hover:text-blue-400 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
