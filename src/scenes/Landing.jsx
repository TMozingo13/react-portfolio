import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/pic.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/pic.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Trinity {""}
            Mozingo {""}
          </p>
          <p className="text-5xl font-playfair z-10 text-center md:text-start mt-3"> 
            <span className="mr-4">I am a</span>
            <TypeAnimation sequence = {[
              'Developer',
              3000,
              'Designer',
              3000,
              'Fashionista',
              3000,
              ]}
              speed={50}
              className='text-blue'
              wrapper="span"
              repeat={Infinity}
            />

          </p>
          <p className="mt-8 mb-7 text-m text-center md:text-start w-65">
            Software developer and UI/UX Designer. Exploring life with a great playlist and an amazing outfit!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
         
          <button
              className="p-5 mr-10 py-3 px-7 bg-green font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 w-[135px]"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'assest/ResumeFall22.pdf';
                link.setAttribute('download', 'ResumeFall22.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              >
              RESUME
            </button>

      
          <AnchorLink
            className="rounded-r-sm bg-blue px-0.5 py-0.5 h-[48px] mt-5"
            onClick={() => setSelectedPage("projects")}
            href="#projects"
          >
            <div className="bg-white px-7 py-3 hover:text-blue transition duration-500 w-full h-full flex items-center justify-center font-semibold">
              MY WORK
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
