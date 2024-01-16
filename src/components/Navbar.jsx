
import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  //states
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (linkTitle, isResume = false) => {
    setActive(linkTitle);
    if (!isResume) {
      setToggle(false);
    }
  };
  //vars and contants

  // function

  // return
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo */}
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
          {/* <p className="text-white text-[18px] font-bold flex">
            Anas&nbsp;<span className="hidden sm:block">Alakkad</span>
          </p> */}
        </Link>

        {/* navlinks */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer`}
            >
              {link.title === 'Resume' ? (
                // Render the Resume link with a direct download attribute
                <a href="https://raw.githubusercontent.com/amalakkad93/amalakkad93.github.io/main/Anas_Alakkad_Resume.pdf" download="Anas_Alakkad_Resume.pdf">{link.title}</a>
              ) : (
                // Render other links normally
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>


        {/* mobile view navlinks */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.title === 'Resume' ? (
                    <a href="https://raw.githubusercontent.com/amalakkad93/amalakkad93.github.io/main/Anas_Alakkad_Resume.pdf" download="Anas_Alakkad_Resume.pdf">{link.title}</a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}



                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
