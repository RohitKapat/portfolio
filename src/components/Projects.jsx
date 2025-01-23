import React from "react";
import { motion, useInView } from "framer-motion";
import Proj from "../assets/Proj1.jpg";
import Proj2 from "../assets/Proj2.png";
import Proj3 from "../assets/Proj3.png";
import Travel from "../assets/Travel.png";
import BW from "../assets/B&W.jpeg";
import Food from "../assets/Food.jpg";
import Weather from "../assets/Weather.png";

const projects = [
  {
    id: 1,
    title: "Netflix Reimagined (UI/UX)",
    description:
      "What if Netflix had Light mode instead of their whole dark theatre aesthetics?",
    link: "https://www.behance.net/gallery/149450983/Netflix-Light-Mode",
    img: [Proj],
  },
  {
    id: 2,
    title: "HydroLink (Work under progress)",
    description:
      "A realtime water level management system using the leverage of IoT along with a fully flourished water monitoring web app for your organisation.",
    link: "#",
    img: [Proj3],
  },
  {
    id: 7,
    title: "Weather App",
    description: "A realtime weather application that gives you weather information of the place you want around the world.",
    link: "https://radiant-seahorse-43ba1c.netlify.app/",
    img: [Weather],
  },
  {
    id: 3,
    title: "Hi!",
    description:
      "A revolutionized social media app that allows you to conenct with your friends.",
    link: "https://hi-backend.onrender.com/",
    img: [Proj2],
  },
  {
    id: 4,
    title: "TravelGo (UI/UX)",
    description: "A trip planning platform.",
    link: "https://www.behance.net/gallery/156137481/TravelGo-A-Travel-Agency-Website-Design",
    img: [Travel],
  },
  {
    id: 5,
    title: "Silhouette (UI/UX)",
    description: "A social media dedicated for black & white image sharing.",
    link: "https://www.behance.net/gallery/149103165/Silhouette-A-social-media-for-B-W-pics",
    img: [BW],
  },
  {
    id: 6,
    title: "Foodify (UI/UX)",
    description: "A food delivery app.",
    link: "https://www.behance.net/gallery/148817365/Food-Ordering-App-UI-design",
    img: [Food],
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-800 transition duration-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 transition duration-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Take a look at some of the projects I’ve built and contributed to.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={project.id}>
              <InViewGridItem index={index}>
                <div className="relative group overflow-hidden rounded-lg shadow-md">
                  {/* Image */}
                  <img
                    src={project.img}
                    alt="project"
                    className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </InViewGridItem>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Subcomponent: Animated Grid Item */
const InViewGridItem = ({ children, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="transform hover:scale-105 transition-transform duration-400"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Projects;
