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
        I am a Front End Developer focused on building responsive and scalable
        web and mobile applications using React.js and React Native. My
        development journey began in 2020 after completing matriculation, during
        the COVID-19 pandemic. Since then, I have worked on various real-world
        projects, gaining experience across both mobile and web platforms. My
        work includes building user interfaces with React, Next.js, TypeScript,
        Tailwind CSS, MUI, and Redux Toolkit, as well as integrating APIs and
        handling state management. On the backend, I’ve worked with Node.js,
        Express.js, and Prisma, and have deployed applications using AWS
        services and Docker. Projects I’ve contributed to include GTB Pay, GTB
        Agent, ILBC Quick Learn, Musicfy, Yoom, and Evently, covering areas such
        as mobile banking, education, entertainment, and communication. I focus
        on writing maintainable code, ensuring performance and usability, and
        collaborating effectively within development teams.
      </p>
    </motion.section>
  );
};

export default About;
