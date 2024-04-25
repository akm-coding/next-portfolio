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
        After passing with a diploma in High School Diploma, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned
        professional web development. My favorite part of programming is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is React, React Native, Next.js,
        Node.js, and MongoDB . I am also familiar with TypeScript and any other
        libraries. I am always looking to learn new technologies. I am currently
        looking for a full-time position as a software developer. When I'm not
        coding, I enjoy playing video games, watching movies, and playing with
        my dog. I also enjoy learning new things. I am currently learning about
        <span className="font-bold"> Kotlin & Golang</span> programming
        language.
      </p>
    </motion.section>
  );
};

export default About;
