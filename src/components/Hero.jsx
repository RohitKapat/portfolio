import React from "react";
import { motion } from "framer-motion";
import Profile from '../assets/Profile.jpg'
import Dev from '../assets/Developer.png'

const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Scroll to the top of the page
  };

const scrollToMiddle = () => {
    window.scrollTo({ top: 1800, behavior: "smooth" }); // Scroll to 500px from the top
  };

const Hero = () => {
  return (
    <section className="h-screen bg-[#FAF9F8] flex items-center justify-center px-6 mx-[8%]">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        
        <div className="text-center items-center align-middle md:text-left md:w-1/2">
        
          {/* Animated Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
          <div className="w-full items-center flex justify-center lg:justify-start">
          <img src={Dev} className="h-[15vh] my-3"/>
          </div>
          
            Hi, I'm <span className="text-gray-800">Rohit Kapat</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A passionate developer creating elegant and functional web
            applications.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
           <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform"
              onClick={scrollToMiddle}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300"
              onClick={scrollToBottom}
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Profile}
            alt="Hero"
            className="w-[20vh] rounded-full max-w-md mx-auto lg:w-[40vh]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
