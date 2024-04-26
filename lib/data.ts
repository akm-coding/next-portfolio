import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yoom from "@/public/yoom.png";
import countries from "@/public/countries.png";
import carhub from "@/public/carhub.png";
import evently from "@/public/evently.png";
import movie from "@/public/movieapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Fairway Technology",
    location: "Yangon, Myanmar",
    description:
      "I graduated after 1 year of studying at Fairway Technology. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Mobile Developer",
    location: "Yangon, Myanmar",
    description:
      "I worked as a mobile developer for 2 years at ACE Data Systems Ltd. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Yangon, Myanmar",
    description:
      "I'm now a full-stack developer seeking for remote full-time jobs. My stack includes React,React Native, Next.js, TypeScript, TailwindCSS, ShadcnUi, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Yoom",
    description:
      "I built a meeting platform just like a zoom. It is not zoom clone but will look like a zoom meeting platform. ",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "TailwindCSS",
      "ShadcnUI",
      "React Stream Video",
    ],
    imageUrl: yoom,
    projectUrl: "https://akm-meet.vercel.app/",
  },
  {
    title: "Evently",
    description:
      "Event platform for ordering event tickets. It has features like ticket booking, stripe payment and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Stripe", "Clerk"],
    imageUrl: evently,
    projectUrl: "https://evently-delta-eight.vercel.app/",
  },
  {
    title: "Cars Hub",
    description:
      "A car catalog website that can browse a selection of cars, view their specifications, and potentially filter or search for specific models",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadcnUI"],
    imageUrl: carhub,
    projectUrl: "https://cars-hub-iota.vercel.app/",
  },
  {
    title: "Movie App",
    description: "A personal app for movie ticket booking system.",
    tags: ["React", "React Native", "TMDB Api", "StyleSheet"],
    imageUrl: movie,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Node.js",
] as const;
