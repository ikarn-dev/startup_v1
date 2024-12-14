// src/components/HeroSection.tsx
import React from "react";

function HeroSection() {
  return (
    <div className="w-full px-4 md:px-20 mt-28">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-gray-800 text-[59px] font-medium text-center mt-4 text-[clamp(1.5rem, 5vw, 2.5rem)] tracking-tight leading-none">
          Crafting Digital Experiences
          <br />
          from Vision To Launch
        </h1>
        <p className="text-black font-regular text-center mt-4 text-[clamp(1rem, 5vw, 1.25rem)]">
          From stunning designs to flawless code, we build websites that
          captivate, perform, and scale.
          <br />
          <span>
            Your journey from concept to a production-ready masterpiece starts
            here.
          </span>
        </p>
        <button className="px-6 py-3 mt-10 rounded-xl bg-black font-semibold text-[#A2F97D] text-lg hover:bg-gray-800 transition-colors">
          Let's Build Your Website
        </button>
      </div>

      {/* Moving Green Cards Section */}
      <div className="relative overflow-hidden py-12">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10"></div>

        <div className="flex animate-infiniteScroll whitespace-nowrap">
          {/* First set of cards */}
          <div className="flex gap-4 mr-4">
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
          </div>
          {/* Duplicate set of cards */}
          <div className="flex gap-4">
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
            <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] shrink-0"></div>
          </div>
        </div>

        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;
