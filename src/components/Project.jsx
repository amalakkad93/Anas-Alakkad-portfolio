import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';


const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  const isActive = active === id;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px]
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {isActive && (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
          <div className="absolute inset-0 flex justify-end m-3"></div>
          <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]"></p>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10 mb-5`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight} text-center mt-10 mb-5`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl text-center leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {/* <div className="mt-[50px] flex lg:flex-row flex-col items-center justify-center min-h-[70vh] gap-5"> */}
          {projects.map((project, index) => (
            <div key={project.id} className="items-center">
              <ProjectCard
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
              {active === project.id && (
                <div className="mt-4 p-4">
                  <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
                    {project.name}
                  </h2>
                  <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
                    {project.description}
                  </p>


                  {/* Icons and Links with similar styles as in ProjectCard */}
                  <div className="flex items-center space-x-4">
                    {/* Adjusted container for GitHub Icon with specific margin for alignment */}
                    <div className="flex justify-center items-center bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full cursor-pointer sm:opacity-[0.9] opacity-[0.8] mt-[20px]"
                      onClick={() => window.open(project.repo, '_blank')}>
                      <img src={github} alt="source code" className="w-4/5 h-4/5 object-contain" />
                    </div>

                    {/* LIVE DEMO Button */}
                    <div className="flex justify-center items-center">
                      <button onClick={() => window.open(project.demo, '_blank')}
                        className="live-demo flex justify-between items-center sm:text-[16px] text-[14px] text-timberWolf font-bold font-beckman py-2 px-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism sm:mt-[22px] mt-[16px] hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out">
                        <img src={pineapple} alt="pineapple" className="btn-icon sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] object-contain" />
                        LIVE DEMO
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');



// import Tilt from "react-parallax-tilt";
// import { motion, transform } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { demo } from "../assets";
// import { SectionWrapper } from "../hoc";
// import {list} from "../constants"
// import { fadeIn, textVariant } from "../utils/motion";
// import { cProject, javaProject, webProject, otherProject } from "../constants";
// import ProjectList from "./ProjectList";
// import "./Project.scss";


// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   source_link,
// }) => {
//   return (
//     <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
//       >
//         <div className='Box1 relative w-full h-[180px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='image w-full h-full object-cover rounded-2xl'
//           />

//         <div className='absolute inset-0 flex justify-center card-img_hover' style={{alignItems: "center",}}>
//           <h3 className='text-black font-bold text-[16px]'>{name}</h3>
//           </div>

//           <div className='title absolute inset-0 flex justify-end card-img_hover'>
//             <div
//               onClick={() => window.open(source_link, "_blank")}
//               className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
//             >

//               <img
//                 src={demo}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>

//           </div>
//         </div>

//         <div className='content mt-5'>
//           <p className='mt-2 text-secondary text-[14px]' style={{textAlign:'justify'}}>{description}</p>
//         </div>

//         <div className='content mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };
// const Project = () => {

//   const [selected, setSelected] = useState("java");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     switch (selected) {
//       case "java":
//         setData(javaProject);
//         break;
//       case "c++":
//         setData(cProject);
//         break;
//       case "web":
//         setData(webProject);
//         break;
//       case "other":
//         setData(otherProject);
//         break;

//       default:
//         setData(cProject);
//     }
//   }, [selected]);

//   return (
//     <>
//       <motion.div whileInView={{ opacity: 1 , transform : 'none'}} variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='project w-full flex'>
//         <motion.p whileInView={{ opacity: 1 , transform : 'none'}}
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] leading-[30px]'
//         >
//         <ul>
//         {list.map((item) => (
//           <ProjectList
//             title={item.title}
//             active={selected === item.id}
//             setSelected={setSelected}
//             id={item.id}
//           />
//         ))}
//       </ul>

//       <div className='box mt-20 flex flex-wrap justify-center'>
//         {data.map((project, index) => (
//           <div>
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           </div>
//         ))}
//       </div>


//       </motion.p>
//       </div>

//     </>
//   );
// };

// export default SectionWrapper(Project, "project");
