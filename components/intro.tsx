"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { type } from "os";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/images/profile.png"
              alt="Eriqo's Image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, my name is Eriqo.`}</span>
        {` I'm a `}
        <span className="font-bold">{`CompEng Student`}</span>
        {` with `}
        <span className="font-bold">{`passion`}</span>
        {` for `}
        <span className="italic">{`web development,`}</span>
        {` I have valuable experience in both   `}
        <span className="italic">{`front-end`}</span>
        {` and `}
        <span className="italic">{`back-end`}</span>
        {` . My current focus is `}
        <span className="underline">{`React(Next.js) and Express.js.`}</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center fap-2 text-lg px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="/#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV_EriqoAriefWicaksono.pdf" download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border broder-black/10"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a
          href="https://www.linkedin.com/in/eriqoarief/" target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border broder-black/10"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Eriqo90AW" target="_blank"
          className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full outline-none 
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border broder-black/10"
        >
          {" "}
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
