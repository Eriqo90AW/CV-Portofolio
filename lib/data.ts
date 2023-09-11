import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LiaUniversitySolid } from "react-icons/lia";
import exerspace from "@/public/exerspace.png";
import scoreguessr from "@/public/scoreguessr.png";
import jsleep from "@/public/jsleep.jpg";
import cargo from "@/public/cargo.png";
import surfacegatingapp from "@/public/surfacegatingapp.png";

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
    title: "SMAN 3 Depok",
    location: "Depok, West Java",
    description:
      "I graduated after attending high school for 3 years, with a focus on natural sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "University of Indonesia",
    location: "Depok, Indonesia",
    description:
      "I'm currently majoring in computer engineering, which is an exciting field that combines hardware and software to create innovative technology solutions.",
    icon: React.createElement(LiaUniversitySolid),
    date: "2021 - Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Exercise FTUI",
    description:
      "Exercise FTUI is an organization within the Department of Electrical Engineering at FTUI. My role within the organization primarily focuses on handling backend and frontend development, utilizing React, Tailwind, Express.js, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Exer.Space",
    description:
      "I'm responsible for creating and managing most of API endpoints used by the website. This website allows users to shorten their URLs and generate a QR code for free.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: exerspace,
    link: "https://exer.space",
  },
  {
    title: "ScoreGuessr",
    description:
      "I developed an Android app from scratch, including backend. Users can predict the outcomes of selected football matches and earn rewards.",
    tags: ["Java", "Android Studio", "Node.js", "PostgreSQL"],
    imageUrl: scoreguessr,
    link: "https://github.com/Eriqo90AW/ScoreGuessr",
  },
  {
    title: "JSleep",
    description:
      "JSleep is an Android app developed as a final project for my OOP class. It functions as a room rental service application. I implemented the backend using Java Spring Boot.",
    tags: ["Java", "Spring Boot", "Android Studio"],
    imageUrl: jsleep,
    link: "https://github.com/Eriqo90AW/JSleep",
  },
  {
    title: "Car Go",
    description:
      "CarGo is a web-based car dealership service, which is a final project for my Database Systems class. I developed the full-stack for this web app.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL"],
    imageUrl: cargo,
    link: "https://github.com/SistemBasisData2023/CarGo",
  },
  {
    title: "Surface Gating App",
    description:
      "I collaborated as part of a team of three to develop a Python-based GUI application for surface-guided radiotherapy. This app displays accurate graphs from Arduino.",
    tags: ["Python", "PyQt5", "Pyqtgraph", "Arduino"],
    imageUrl: surfacegatingapp,
    link: "https://github.com/Eriqo90AW/RSCM-App",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "C++",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Pandas",
  "PyQt5",
  "MATLAB",
  "Assembly",
  "VHDL",
  "Arduino",
  "ESP32",
] as const;