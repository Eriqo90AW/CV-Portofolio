"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heding";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:eriqo.arief1@gmail.com">
          eriqo.arief1@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const {data, error } = await sendEmail(formData);
            if (error) {
                toast.error(error);
                return;
            }
            toast.success("Email sent successfully!")
        }}
      >
        <input
          className="h-14 px-4 rounded-lg dark:placeholder-gray-700 border border-black/10 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80 transition-all dark:outline-none"
          type="email"
          placeholder="Your Email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg dark:placeholder-gray-700 border border-black/10 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80 transition-all dark:outline-none"
          placeholder="Your Message"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
