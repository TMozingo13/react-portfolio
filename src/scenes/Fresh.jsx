import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Fresh = ({setSelectedPage}) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px");
    return (
        <div id="fresh">
            <h1>Fresh</h1>
            <LineGradient/>
        </div>
        
    );
};

export default Fresh;