"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a mobile developer with 2 years experiences and a passion for
        creating web and mobile applications. I'm a good team player and highly
        motivated to learn and grow. Currently, I'm focusing on building dynamic
        and scalable user interfaces with React (Next.js) and have experience
        with concepts like component creation, state management using Redux, and
        API integration. I'm always eager to learn new technologies and
        contribute to challenging projects. I am currently learning about
        <span className="font-bold"> Kotlin & Golang</span> programming
        language.
      </p>
    </motion.section>
  );
};

export default About;
