import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-32 pb-16">
       <div className="md:flex md:justify-between md:gap-16 mt-32">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          ABOUT <span className="text-red">ME</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10">
           I’m a Computer Science major at the University of Nebraska-Lincoln. After my freshman year
           I  had an internship working as as Software Developer. It was there during a technology 
           career panel that I learned about UI/UX design. I knew that I had found a path that could 
           combine my strong interests in design and technology. Since then, I have spent my time developing 
           my skills and passion for UI/UX design and hope to pursue it as a career. In my freetime I love to 
           sew and keep up with fashion.
        </p>
      </motion.div>

      {/* SIDE STUFF */}
      <div className="mt-16 md:mt-0">
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
       
      <div className="mt-20 md:mt-30 justify-content:center">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-bottom-10 before:-right-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
        </div>
    </section>
  );
};

export default About;