import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "../components/Card";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, url = "/", description }) => {


  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <Link to={url} style={{zIndex:1}}>
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>
      </div>
      <img src={`../assets/thumbnail.png`} alt={projectTitle} />
    </motion.div>
    </Link>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
           Check out my work from UI/UX Design and Software Development!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            UI/UX DESIGN
          </div>
          <Project 
            title="Fresh" 
            url='fresh'
            description="An app to track food and prevent waste"
           />
          <Project 
            title="Case In One Place"
            description="A file management system that addresses the greatest pains of lawyers currently"
          /> */}

          {/* ROW 2*/}
          <MediaCard 
            title="Fresh"
            description="An app to track food and prevent waste"
            url="fresh"
            image="thumbnail.png"
          />
           <MediaCard 
            title="Case in One Place"
            description="A file Management system that addresses the greatest pains of lawyers currently"
            url="case"
            image="coming.png"
          />
           {/* <MediaCard 
            title="Project 5"
            description="Short description of the project"
            image="project-2.jpeg"
          /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SOFTWARE DEVELOPMENT
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
