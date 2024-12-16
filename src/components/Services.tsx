"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Services() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading on scroll
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // Trigger when 80% of viewport height is visible
      },
    });

    // Animate cards on scroll
    gsap.from(cardsRef.current.filter(Boolean), {
      x: -50, // Animate from left
      opacity: 0,
      stagger: 0.2, // Sequential delay between animations
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%", // Trigger when heading comes into view
        toggleActions: "play none none none", // Play animation once
      },
    });
  }, []);

  const cardVariants = {
    whileHover: { scale: 1.05 },
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      <div>
        {/* Animated Heading */}
        <h1
          ref={headingRef} // Attach ref for GSAP animation
          className="text-black text-xl font-semibold text-left"
        >
          Our Services
        </h1>

        <div className="w-full mt-10">
          <div>
            {[{ id: "01", title: "UI/UX Design" }, { id: "02", title: "Web Development" }, { id: "03", title: "Android App Development" }].map(
              (service, index) => (
                <motion.div
                  key={service.id}
                  ref={(el) => (cardsRef.current[index] = el)} // Attach ref for GSAP animation
                  className="w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20"
                  variants={cardVariants} // Framer Motion hover variants
                  whileHover="whileHover"
                >
                  <span className="font-extralight text-[24px] text-[#A2F97D]">
                    {service.id}
                  </span>
                  <span className="font-semibold text-[24px] text-[#A2F97D]">
                    {service.title}
                  </span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
