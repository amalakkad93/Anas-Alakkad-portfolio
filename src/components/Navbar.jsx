
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
          <p className="text-white text-[18px] font-bold flex">
            Anas&nbsp;<span className="hidden sm:block">Alakkad</span>
          </p>
        </Link>

        {/* navlinks */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer`}
              // onClick={() => setActive(link.title)}
              onClick={() => handleNavLinkClick(link.title, link.title === 'Resume')}
            >
              <a href={`#${link.id}`}>{link.title}</a>
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
                    <a  href="https://raw.githubusercontent.com/amalakkad93/amalakkad93.github.io/main/Anas_Alakkad_Resume.pdf" target="_blank" >{link.title}</a>

                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`top2 ${"text-secondary"
            } hover:text-white text-[15px] font-medium cursor-pointer`}
        >
          <a href="https://raw.githubusercontent.com/amalakkad93/amalakkad93.github.io/main/Anas_Alakkad_Resume.pdf" target="_blank">Resume</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { logo} from "../assets";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-3 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-9 h-9 object-contain logo' />
//           <p className='sm:block text-white text-[18px] font-bold cursor-pointer flex '>
//           aarti.rathi
//           </p>
//         </Link>

//         <div className='sm:flex gap-5'>
//           <div
//               className={`top2 ${"text-secondary"
//               } hover:text-white text-[15px] font-medium cursor-pointer`}
//             >
//               <a href="https://drive.google.com/drive/folders/13YGuvdkXQdyFzfuJd3YdUaG99dhCPz22?pli=1" target="_blank">Resume</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
