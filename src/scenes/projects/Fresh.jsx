import useMediaQuery from "../../hooks/useMediaQuery";
import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";
import { ProjectNav } from "../PeojectNav";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import MediaCard from "../../components/Card";

 export const Fresh = ({setSelectedPage}) => {
        // const isAboveLarge = useMediaQuery("(min-width: 1060px");
        // const [selectedPage] = useState("home");
        const [isTopOfPage, setIsTopOfPage] = useState(true);
        // const isDesktop = useMediaQuery("(min-width: 1060px)");
        const navbarBackground = isTopOfPage ? "bg-blue" : "bg-blue";
        const [isMenuToggled, setIsMenuToggled] = useState(false);
        const isDesktop = useMediaQuery("(min-width: 768px)");

        return (
            <div>
                <ProjectNav/>
                <motion.div
                    className="md:w-2/5 mx-auto text-center z-30 basis-2/5 mt-12 md:mt-32"
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
                        Fresh Case Study
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-5 mb-10">
                An app to track food and prevent waste
                </p>
                </motion.div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center m-auto max-w-[1200px]">
                  <img src="../../assets/thumbnail.png" className="w-full h-full "/>

                    <div className="sm:grid sm:grid-cols-2 gap-8 mt-10 mb-20">
                        <div>
                            <p className="font-playfair text-3xl font-semibold">Background</p>
                            <p>As college students and young adults start their new independent lives, they are on there own for the first time. As a result, they have limited experience managing groceries and their food.</p>
                        </div>

                        <div>
                            <p className="font-playfair text-3xl font-semibold">Scope</p>
                            <p>UX/UI Design, User Testing, User Interviews, Research</p>
                        </div>

                        <div>
                            <p className="font-playfair text-3xl font-semibold">My Role</p>
                            <p>I worked as the sole designer for this school project. I conducted user research, user interviews, sketches, user testing, wireframes, and prototype.</p>
                        </div>

                        <div>
                            <p className="font-playfair text-3xl font-semibold">Tools</p>
                            <p>Figma</p>
                        </div>
                    </div>
                    <p className="text-4xl font-playfair font-semibold">Tracking your food so you know its fresh</p>
                    <p>Keeping track of the groceries you have in your kitchen can be hard. My goal was to create a platform that keeps it simple.</p>
                    <img src="../../assets/project-4.jpeg" className="mt-10 w-full h-full max-w-[1200px] max-h-[800px]"/>

                    <div className="sm:grid sm:grid-cols-2 gap-8 mt-10 mb-20">
                        <p className="font-playfair text-4xl font-semibold">The Problem</p>
                        <p className="mt-3">this is a short description of the problem of the project</p>
                    </div>

                    <div className="sm:grid sm:grid-cols-2 gap-8 mt-10 mb-20">
                        <p className="font-playfair text-4xl font-semibold">The Goal</p>
                        <p className="mt-3">this is a short description of the goal of the project</p>
                    </div>
                  
                    <p className="text-4xl font-playfair font-semibold mb-20">Research</p>
                    <p className="text-4xl font-playfair font-semibold mb-20">Development</p>
                    <p className="text-4xl font-playfair font-semibold mb-20">User Testing</p>
                    <p className="text-4xl font-playfair font-semibold mb-20">Final Design</p>
                    <div className="sm:grid sm:grid-cols-2 gap-8 mt-10 mb-20">
                        <p className="font-playfair text-4xl font-semibold">Retrospective</p>
                        <p className="mt-4">this is a short description of my final thoughts and a reto of the project as a whole</p>
                    </div>
                </div>
                
                <Footer/>
            </div>
            
        );
};
