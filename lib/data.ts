import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yoom from "@/public/yoom.png";
import bookStore from "@/public/bookStore.png";
import carhub from "@/public/carhub.png";
import evently from "@/public/evently.png";
import movie from "@/public/movieapp.png";
import musicfy from "@/public/musicfy.png";
import gtbPay from "@/public/gtb_pay.png";
import gtbAgent from "@/public/gtb_agent.png";
import ilbc from "@/public/ilbc_quick_learn.png";
import dashboard from "@/public/travel_agency_dashboard.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "At Geek Squad Studio, I contribute as a Full-Stack Developer in a fast-paced, innovation-driven remote team. My role involves building seamless, scalable web and mobile applications using a modern tech stack including React, Next.js, Node.js, and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - Present",
  },
  {
    title: "Mid-Senior Mobile Developer",
    location: "Remote",
    description:
      "I worked as a Senior Mobile Developer at Myan Ants, focusing on building scalable mobile applications using React Native, TypeScript, and Expo. I collaborate with cross-functional teams to deliver high-quality features, optimize performance, and enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2024 - Dec 2024",
  },
  {
    title: "Mid Mobile Developer",
    location: "Yangon, Myanmar",
    description:
      "I built an e-learning application at Theory IT Solutions, similar to TikTok, using React Native and react-native-video. The app provided engaging video-based educational content to enhance user learning experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Mar 2024",
  },
  {
    title: "Junior-Mid Mobile Developer",
    location: "Yangon, Myanmar",
    description:
      "I worked as a Mobile Developer at ACE Data Systems Ltd, where I developed mobile banking applications, leveraging React Native and TypeScript to create secure and user-friendly banking solutions. Additionally, upskilled to full-stack development during my time there.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - April 2024",
  },
  {
    title: "Fairway Technology",
    location: "Yangon, Myanmar",
    description:
      "I graduated after 1 year of studying at Fairway Technology. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2022 - Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ILBC Quick Learn",
    description:
      "An e-learning application that offers an engaging video scroll experience.",
    tags: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "Axios",
      "React Query",
      "react-native-video",
      "Other NPM Packages",
    ],
    imageUrl: ilbc,
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.quick_learn_mobile",
  },
  {
    title: "GTB Pay",
    description:
      "A comprehensive mobile banking app built with React Native CLI, supporting features like auth, transfers, and top-ups.",
    tags: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "Axios",
      "React Query",
    ],
    imageUrl: gtbPay,
    projectUrl: "https://play.google.com/store/apps/details?id=com.gtbwallet",
  },
  {
    title: "GTB Agent",
    description:
      "A comprehensive mobile banking app built with React Native CLI, supporting features like auth, transfers, and top-ups.",
    tags: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux Toolkit",
      "Axios",
      "React Query",
      "Other NPM Packages",
    ],
    imageUrl: gtbAgent,
    projectUrl: "https://play.google.com/store/apps/details?id=com.gtbagent",
  },
  {
    title: "Travel Agency Dashboard",
    description:
      "Build a dynamic travel dashboard with React, React Router v7, Syncfusion, Appwrite, and Gemini AI!",
    tags: [
      "React",
      "React Router V7",
      "TypeScript",
      "Syncfusion",
      "Appwrite",
      "Gemini AI",
    ],
    imageUrl: dashboard,
    projectUrl: "https://travel-agency-dashboard-brown.vercel.app/",
  },
  {
    title: "Musicfy",
    description:
      "A full-stack music streaming app with features like authentication, and real-time chat.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn",
      "Node.Js",
      "Express.Js",
      "Socket.io",
      "MongoDB",
      "Clerk",
    ],
    imageUrl: musicfy,
    projectUrl: "https://realtime-music-site.onrender.com",
  },
  {
    title: "Yoom",
    description:
      "I built a meeting platform just like a zoom. It is not zoom clone but will look like a zoom meeting platform.",
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
    projectUrl: "https://github.com/aungkaungmyat-is-coding/movie-app",
  },
  {
    title: "Book Store",
    description:
      "I made a book store using React.JS, TailwindCSS, Node.JS, Express.JS, and MongoDb. This makes me understanding of backend knowledge Node.JS, Express.JS.",
    tags: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
    ],
    imageUrl: bookStore,
    projectUrl: "https://github.com/akm-coding/mern-book-store",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Redux",
  "Redux Toolkit",
  "Zustand",
  "Tailwind CSS",
  "MUI",
  "ShadCn Ui",
  "Next.Js",
  "Node.Js",
  "Express.Js",
  "MongoDB",
  "MySql",
  "MsSql",
  "PostgreSql",
  "Prisma",
  "Axios",
  "React Query",
  "Firebase",
  "Git",
  "GitHub",
] as const;
