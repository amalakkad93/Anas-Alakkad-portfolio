import React from "react";

import { BallCanvas, SquareCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, frontendTechnologies, otherTechnologies, databaseTechnologies, backendTechnologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const renderTechnologySection = (technologies, title, isOtherTech = false) => (
  <>
    <h3 className={`${styles.sectionSubHeading} text-center mt-10 mb-5`}>{title}</h3>
    <div className="flex flex-wrap justify-center gap-1">
      {technologies.map((technology) => (
        <div style={{ height: '5rem', width: "5rem" }} key={technology.name}>
          {isOtherTech ? <SquareCanvas icon={technology.icon} /> : <BallCanvas icon={technology.icon} />}
        </div>
      ))}
    </div>
  </>
);


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} text-center`}>My skills</p>

        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>

      {renderTechnologySection(frontendTechnologies, "Frontend Technologies")}
      {renderTechnologySection(backendTechnologies, "Backend Technologies")}
      {renderTechnologySection(databaseTechnologies, "Database Technologies")}
      {renderTechnologySection(otherTechnologies, "Other Technologies", true)}
    </>
  );
};

export default SectionWrapper(Tech, "");


// const Tech = () => {
//   return (
//     <>
//       <motion.div id="tech" variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Tools
//         </h2>
//       </motion.div>
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div style={{height: '5rem', width: "5rem"}} key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default SectionWrapper(Tech, "");
