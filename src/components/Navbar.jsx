import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) =>
    location.pathname === path ? "underline" : "hover:underline";

  return (
    <header className="bg-white p-4 px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            width="400px"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/Y4L809DEXbT2ajlj/ca-india-logo-AQEVZ4jJNKi3bgn6.jpg"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-blue-900">
          <a href="/" className={getActiveClass("/")}>
            Home
          </a>
          <a href="/about" className={getActiveClass("/about")}>
            About
          </a>
          <a href="/team" className={getActiveClass("/team")}>
            Team JPC
          </a>
          <a href="/contact" className={getActiveClass("/contact")}>
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} className="text-blue-900" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <a href="/" className={`block py-2 text-blue-900 ${getActiveClass("/")}`}>
            Home
          </a>
          <a href="/about" className={`block py-2 text-blue-900 ${getActiveClass("/about")}`}>
            About
          </a>
          <a href="/team" className={`block py-2 text-blue-900 ${getActiveClass("/team")}`}>
            Team JPC
          </a>
          <a href="/contact" className={`block py-2 text-blue-900 ${getActiveClass("/contact")}`}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
