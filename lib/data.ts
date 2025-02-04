import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LiaUniversitySolid } from "react-icons/lia";
import exerspace from "@/public/exerspace.png";
import scoreguessr from "@/public/scoreguessr.png";
import jsleep from "@/public/jsleep.jpg";
import cargo from "@/public/cargo.png";
import surfacegatingapp from "@/public/surfacegatingapp.png";
import pollpal from "@/public/pollpal.png";
import karsabuana from "@/public/karsabuana.png";

export const lastModified = {
    date: "04/02/2025",
    year: "2025",
} as const;

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
    title: "Research Intern",
    location: "NTUST Broadband Multimedia Wireless (BMW) Lab | Taipei, Taiwan",
    description:
      "Successfully designed and implemented a Man-in-the-Middle (MiTM) attack on 5G fronthaul architecture, utilizing kernel-based tool such as DPDK, and security tools such as Wireshark, and Scapy. Analyzed the results to assess vulnerabilities, providing key insights for improving security protocols in 5G networks.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "IT Infrastructure & Design Intern",
    location: "PT XL Axiata Tbk. | Jakarta, Indonesia",
    description:
      "Collaborated with senior IT professionals to analyze existing infrastructure and propose enhancements, demonstrating strong problem-solving and critical thinking skills in identifying opportunities for optimization. Successfully managed data center cost reduction initiatives and worked with enterprise network devices, such as proxies and firewalls, to improve network security and efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Jun 2024",
  },
  {
    title: "Laboratory Asisstant",
    location: " Network Laboratory DTE FTUI |  Depok, Indonesia",
    description:
      "Instructed 90+ students pursuing majors related to computer networks, covering subjects like fundamental computer networking,  object-oriented programming, database architecture, and computer network design. Responsible for developing modules for practical sessions in Computer Networking and Object-Oriented Programming classes. Provided support to the lecturer in guiding and evaluating students within the computer engineering major.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Jun 2024",
  },
  {
    title: "Frontend Developer Intern",
    location:
      "BRIN - National Research and Innovation Agency |  Tangerang, Indonesia",
    description:
      "Worked as a front-end developer, actively contributing to the development of an intuitive admin dashboard for the Charging Station Management System, featuring interactive graphs using the Next.js framework. Responsible for the integration of the Open Charge Point Protocol (OCPP) backend into the frontend application. To ensures a  responsive connection between the charging station infrastructure and the user-facing interface.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Jun 2024",
  },
  {
    title: "Expert Staff of Software",
    location: "Exercise FTUI",
    description:
      "Exercise FTUI is an organization within the Department of Electrical Engineering at FTUI. My role within the organization primarily focuses on handling backend and frontend development, utilizing React, Tailwind, Express.js, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Feb 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Lab Karsa Buana",
    description:
      "I developed the backend of a web application for Karsa Buana Lab, creating APIs to automate sample testing workflows, including project initialization and document autofill.",
    tags: ["Express JS", "Node.js", "MongoDB"],
    imageUrl: karsabuana,
    link: "https://github.com/Eriqo90AW/ScoreGuessr",
  },
  {
    title: "PollPal",
    description:
      "I developed a blockchain-based e-voting platform with IoT security features, a real-time live polling dashboard, and facial recognition for authentication.",
    tags: ["Python", "FastAPI", "JavaScript", "Next.js"],
    imageUrl: pollpal,
    link: "https://github.com/Eriqo90AW/ScoreGuessr",
  },
  {
    title: "Exer.Space",
    description:
      "I'm responsible for creating and managing most of API endpoints used by the website. This website allows users to shorten their URLs and generate a QR code for free.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "Express"],
    imageUrl: exerspace,
    link: "https://exer.space",
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
  {
    title: "JSleep",
    description:
      "JSleep is an Android app developed as a final project for my OOP class. It functions as a room rental service application. I implemented the backend using Java Spring Boot.",
    tags: ["Java", "Spring Boot", "Android Studio"],
    imageUrl: jsleep,
    link: "https://github.com/Eriqo90AW/JSleep",
  },
  {
    title: "ScoreGuessr",
    description:
      "I developed an Android app from scratch, including backend. Users can predict the outcomes of selected football matches and earn rewards.",
    tags: ["Java", "Android Studio", "Node.js", "PostgreSQL"],
    imageUrl: scoreguessr,
    link: "https://github.com/Eriqo90AW/ScoreGuessr",
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
