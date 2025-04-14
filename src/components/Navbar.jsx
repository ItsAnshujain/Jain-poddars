import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo1 from "../images/logo1.png"; 
import logo2 from "../images/logo2.jpg"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) =>
    location.pathname === path
      ? "font-semibold text-[#4D869C]"
      : "relative transition-all duration-500 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#4D869C] before:transition-all before:duration-500 hover:before:w-full hover:text-[#4D869C]";

  const getNavLabel = (path) => {
    switch (path) {
      case "/services":
        return "Our Services";
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      case "/team":
        return "Team JPC";
      default:
        return path.replace("/", "") || "Home";
    }
  };


  return (
    <header className="bg-white shadow-lg p-4 px-10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-6 md:h-10"
            src={logo1}
            alt="Logo"
          />
          <img
            className="h-8 md:h-14"
            src={logo2}
            alt="Logo"
          />
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-800 text-base font-medium">
          {["/", "/about", "/services", "/team", "/contact"].map((path) => (
            <a key={path} href={path} className={getActiveClass(path)}>
              {getNavLabel(path)}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-[#4D869C]" />
          ) : (
            <Menu size={28} className="text-[#4D869C]" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden  p-4 space-y-2">
        
           {["/", "/about", "/services", "/team", "/contact"].map((path) => (
            <a key={path} href={path}  className={`block py-2 ${getActiveClass(path)}`}>
              {getNavLabel(path)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
