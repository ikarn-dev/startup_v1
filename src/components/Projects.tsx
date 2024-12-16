"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ToolIcon from "../assets/images/Tool.png";
import { motion } from "framer-motion";
import gsap from "gsap";

function Projects() {
  // GSAP text animation
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const headingText = headingRef.current;
    if (headingText) {
      const text = headingText.textContent;
      if (text) {
        headingText.innerHTML = text
          .split("")
          .map((char) => `<span class="inline-block opacity-0">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      }
    }

    // GSAP Animations for the heading text (Typewriter effect)
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    const spans = headingRef.current?.querySelectorAll("span");

    if (spans) {
      timeline.to(spans, {
        opacity: 1,
        stagger: 0.05,
      });
    }
  }, []);

  // Animation variants for the cards using Framer Motion
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      {/* Heading Text with GSAP animation */}
      <div>
        <h1
          ref={headingRef}
          className="text-black text-2xl font-semibold text-left"
        >
          Take a look at what we&#39;ve built
        </h1>
      </div>

      {/* Cards Section with Framer Motion */}
      <div className="mt-10 space-y-10">
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={index}
            className="w-full h-[550px] bg-black rounded-[35px] p-10"
            initial="hidden"
            whileInView="visible" // Trigger the animation when the card comes into view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the card is in view
            variants={cardVariants}
          >
            <Image className="w-24 mb-10" src={ToolIcon} alt="ToolIcon" />
            <p className="flex mb-5 text-white text-2xl font-medium">
              Find And Book Local Beauty Experts
            </p>

            <div className="flex flex-row gap-4">
              <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] text-sm font-regular rounded-full hover:bg-gray-800 transition">
                Web Design
              </button>
              <button className="px-4 py-1 bg-black border border-[#A2F97D] text-[#FAF9F6] text-sm font-regular rounded-full hover:bg-gray-800 transition">
                Branding
              </button>
            </div>

            <div className="flex">
              <button
                className="px-4 sm:px-6 py-2 sm:py-3 mt-8 md:mt-10 rounded-xl 
                  bg-[#A2F97D] font-semibold text-[#000000] 
                  text-base sm:text-lg hover:bg-[#8BCD56] transition-colors" // Updated hover color
              >
                Explore Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
