import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between py-2 px-4 text-white sticky top-0  bg-opacity-70 backdrop-blur-sm z-50">
      <div className="text-2xl font-bold">EJ</div>

      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center w-10 h-10 hover:bg-slate-700 focus:outline-none"
      >
        <span
          className={`h-1 w-8 bg-gray-300 rounded transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-8 bg-gray-300 rounded my-1 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-1 w-8 bg-gray-300 rounded transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-neutral-950 text-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-gray-300 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="mt-16 p-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-gray-300 hover:text-xl font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-gray-300 hover:text-xl font-bold"
          >
            About
          </Link>

          <Link
            to="/experience"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-gray-300 hover:text-xl font-bold"
          >
            Experience
          </Link>

          <Link
            to="/projects"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-gray-300 hover:text-xl font-bold"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-gray-300 hover:text-xl font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
