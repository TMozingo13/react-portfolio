import { useState } from "react";
import ProjectDrop from "../components/Dropdown";
import { Dropdown } from "rsuite";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {Link} from "react-router-dom";



export const ProjectNav = () =>{
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        <div className="bg-blue z-40 w-full fixed top-0 py-6">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold text-yellow">
                    <a href="/" className="hover:text-white">TM</a>
                </h4>
                {isDesktop ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <div className="">
                        <Dropdown title="Projects" trigger="hover">
                            <Dropdown.Item className=" hover:text-yellow pt-3">
                            <a href="./fresh">Fresh</a>
                            </Dropdown.Item>
                            <Dropdown.Item className=" hover:text-yellow pt-3">
                            <a href="./case">Case In One Place</a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    
                </div>
                ) : (
                <button
                    className="rounded-full bg-blue p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img alt="menu-icon" src="../assets/menu-icon.svg" />
                </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="close-icon" src="../assets/close-icon.svg" />
                    </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <a href="/">Home</a>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}