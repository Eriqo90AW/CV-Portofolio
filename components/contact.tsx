"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heding";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:eriqo.arief1@gmail.com">
          eriqo.arief1@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action={
            async (formData) => {
                await sendEmail(formData);
        }}>
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="email"
          placeholder="Your Email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
          placeholder="Your Message"
          required
          maxLength={5000}
          name="message"
        />
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
            rounded-full outline-none transition-all focus:sacle-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
