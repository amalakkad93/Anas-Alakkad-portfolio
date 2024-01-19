import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from "react-tilt";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`"
      >
        <div
          option={{
            max: 45,
            scale: 0.5,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem] ">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10 mb-5`}>Introduction</p>
        <h2 className={`${styles.sectionHeadTextLight} text-center mt-10 mb-5`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        // className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] flex justify-center ">
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mx-auto ">
        Hello! I'm Anas Alakkad, a Software Engineer with a passion for blending innovation and efficiency in the tech world.
        My journey into technology started in childhood, where I spent hours disassembling and attempting to repair broken
        electronics, from TVs to vacuums. This early curiosity laid the foundation for my career in computer engineering.

        Moving to the US at 17 as a first-generation college graduate, I faced new academic and cultural challenges.
        Mastering English as my second language and adapting to a diverse environment has shaped my resilient and adaptable
        approach to software development.

        At California State Polytechnic University, Pomona, while pursuing a Bachelor's in Computer Engineering (GPA: 3.62),
        I discovered my profound love for software. This passion was ignited during my academic projects, which involved intricate
        programming and solution development. From designing a multi-controller Software Defined Network (SDN) to creating a car
        dealer program and building a microcontroller-based traffic light system, each project deepened my interest in software
        engineering. This pivotal experience led me to self-teach additional skills such as JavaScript, Flask, and Redux.

        In my role as a Transportation Manager at Ceravo Care, I honed vital leadership and operational skills, enhancing
        team performance and efficiency. This experience has been pivotal in developing my managerial capabilities,
        vital for leading successful technology projects.

        Outside professional life, my hobbies like DIY projects, hiking, and reading keep me creatively engaged and mentally agile.
        These pursuits provide balance and enhance my problem-solving skills, crucial in the ever-evolving field of software engineering.

        As I continue to delve into the vast landscape of software development, I am eager to contribute innovative solutions and
        collaborate with like-minded professionals to push the boundaries of technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
