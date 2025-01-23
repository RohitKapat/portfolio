import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };

  const scrollToProject = () => {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300">
          <a href="#home" onClick={scrollToTop}>
            Rohit Kapat
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } absolute top-16 left-0 w-full bg-white shadow-none transform transition-transform duration-300 ease-in-out md:static md:w-auto md:transform-none`}
          role="navigation"
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li className="border-b md:border-none">
              <a
                href="#home"
                className="block py-2 px-4 text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={scrollToTop}
              >
                Home
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#about"
                className="block py-2 px-4 text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={scrollToAbout}
              >
                About
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#projects"
                className="block py-2 px-4 text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={scrollToProject}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-4 text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={scrollToContact}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="hidden md:inline-block bg-gray-800 text-white px-5 py-2 rounded-full shadow hover:bg-gray-900 transition duration-300"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;

