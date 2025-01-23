import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 pt-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <p className="text-lg mb-4">
          <span className="font-bold">Rohit Kapat</span> | Portfolio
        </p>
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/RohitKapat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rohitkapat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:rohitkapat2001@gmail.com" className="text-gray-400 hover:text-white">
            Email
          </a>
          <a href="/cv.pdf"
          download='cv.pdf' className="text-gray-400 hover:text-white">
            Resume
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Rohit Kapat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
