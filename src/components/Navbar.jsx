import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.classList.add("bg-gray-900");
      } else {
        navbar.classList.remove("bg-gray-900");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between py-2 px-4 text-white sticky top-0 bg-opacity-70 transition-colors duration-200">
      <div className="text-2xl font-bold">EJ</div>

      {/* Hamburger menu for small screens */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col items-center justify-center w-10 h-10 hover:bg-slate-700 focus:outline-none"
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

      {/* Desktop navbar links (visible on large screens) */}
      <div className="hidden lg:flex space-x-10">
        <Link to="/" className="text-lg text-white hover:text-xl hover:font-bold hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-lg text-white hover:text-xl hover:font-bold hover:underline">
          About
        </Link>
        <Link
          to="/experience"
          className="text-lg text-white hover:text-xl hover:font-bold hover:underline"
        >
          Experience
        </Link>
        <Link
          to="/projects"
          className="text-lg text-white hover:text-xl hover:font-bold hover:underline"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-lg text-white hover:text-xl hover:font-bold hover:underline"
        >
          Contact
        </Link>
      </div>

      {/* Sidebar menu for small screens */}
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
            className="block px-4 py-2 text-lg text-white hover:text-xl font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-white hover:text-xl font-bold"
          >
            About
          </Link>

          <Link
            to="/experience"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-white hover:text-xl font-bold"
          >
            Experience
          </Link>

          <Link
            to="/projects"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-white hover:text-xl font-bold"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block px-4 py-2 text-lg text-white hover:text-xl font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
