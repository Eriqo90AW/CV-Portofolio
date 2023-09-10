"use client";
import React from "react";
import SectionHeading from "./section-heding";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m an undergraduate student majoring in
        <span className="font-medium">{` Computer Engineering `}</span>
        at the University of Indonesia. My passion lies in web development.
        I&apos;ve honed my skills in
        <span className="font-medium">{` full-stack web development `}</span>
        throughout the years and my favorite part of programming is the
        <span className="italic">{` problem-solving  `}</span>
        aspect. My primary stack includes
        <span className="font-medium">{` React, Next.js, Node.js, and MongoDB.  `}</span>
        Additionally, I have a solid foundation in{" "}
        <span className="underline">{`C, Java, and Python.`}</span> 
        I am an avid learner and continuously seek opportunities to explore new technologies.
      </p>
      <p>
        I am actively seeking a
        <span className="font-medium">{` full-time position `}</span>
        as a software developer.
        <span className="italic">{` When I'm not immersed in coding, `}</span>I
        indulge in my hobbies, such as playing video games, watching Premier
        League matches, and spending quality time with my friends.
      </p>
    </motion.section>
  );
}
