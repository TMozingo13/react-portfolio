import { useState } from "react";
import ProjectDrop from "../components/Dropdown";
import { Dropdown } from "rsuite";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import {Link} from "react-router-dom";

const PageLink = ({ pageName, page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-decoration: underline" : ""
      } hover:underline transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {pageName}
    </AnchorLink>
  );
};

// const MyLink = React.forwardRef((props, ref) => {
//   const { href, as, ...rest } = props;
//   return (
//     <Link href={href} as={as}>
//       <a ref={ref} {...rest} />
//     </Link>
//   );
// });


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue text-black";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-black">TM</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-m font-semibold">
            <PageLink
              pageName="HOME"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            
            <div className="">
              <Dropdown title="PROJECTS" trigger="hover">
                <Dropdown.Item className="hover:underline pt-3 border-none">
                  <PageLink
                    pageName="All"
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
                </Dropdown.Item>
                <Dropdown.Item className=" hover:underline pt-3">
                  <a href="./fresh">Fresh</a>
                </Dropdown.Item>
                <Dropdown.Item className=" hover:underline pt-3">
                  <a href="./case">Case in One Place</a>
                </Dropdown.Item>
              </Dropdown>
            </div>
           
            <PageLink
              pageName="SKILLS"
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <PageLink
              pageName="ABOUT"
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <PageLink
              pageName="CONTACT"
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
            <PageLink
              pageName="HOME"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            
            <div className="">
              <Dropdown title="PROJECTS" trigger="hover">
                <Dropdown.Item className="pt-3 border-none">
                  <PageLink
                    pageName="All"
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}/>
                </Dropdown.Item>
                <Dropdown.Item className=" hover:text-yellow pt-3">
                  <a href="./fresh">Fresh</a>
                </Dropdown.Item>
                <Dropdown.Item className=" hover:text-yellow pt-3">
                  <a href="./case">Case in One Place</a>
                </Dropdown.Item>
              </Dropdown>
            </div>
           
            <PageLink
              pageName="SKILLS"
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <PageLink
              pageName="ABOUT"
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <PageLink
              pageName="CONTACT"
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
