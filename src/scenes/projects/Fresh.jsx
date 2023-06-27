import useMediaQuery from "../../hooks/useMediaQuery";
import LineGradient from "../../components/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "../Navbar";
import { ProjectNav } from "../PeojectNav";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

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
                <section id="content" className="pt-48 pb-48">
                    <h1>Fresh Case Study</h1>
                    <LineGradient/>
                </section>
                <Footer/>
            </div>
            
        );
};
