import React from "react";
import { motion, useInView } from "framer-motion";
import IMG from '../assets/About.jpg'

const scrollToProject = () => {
  window.scrollTo({ top: 1800, behavior: "smooth" });
};

const scrollToContact = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};


const About = () => {
  return (
    <section className=" py-16 px-6 my-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section with Bottom-to-Top Animation */}
        <InViewImage>
          <img
            src={IMG}
            alt="About Me"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </InViewImage>

        {/* Text Section with Bottom-to-Top Animation */}
        <InViewText>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-left">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-left">
            Hi! I’m Rohit Kapat, a passionate web developer with a love for
            creating sleek and functional websites. With a strong background in 
            frontend and backend development, I thrive on building user-centric 
            applications that solve real-world problems.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 text-left">
            Beyond coding, I enjoy exploring new technologies, designing 
            intuitive user experiences, and collaborating with talented teams 
            to bring ideas to life.
          </p>

          {/* Skills Section */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>React & Tailwind</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>Node.js & Express</span>
            </li>
            {/* <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>REST & GraphQL APIs</span>
            </li> */}
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-lg">•</span>
              <span>UI/UX Design</span>
            </li>
          </ul>

          {/* Call-to-Action */}
          <div className="flex space-x-4">
            <a
               href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform"
              onClick={scrollToContact}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition duration-300"
              onClick={scrollToProject}
            >
              View My Work
            </a>
          </div>
        </InViewText>
      </div>
    </section>
  );
};

/* Subcomponent for Image with Bottom-to-Top Animation */
const InViewImage = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex-shrink-0 lg:w-1/2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

/* Subcomponent for Text with Bottom-to-Top Animation */
const InViewText = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="lg:w-1/2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default About;
