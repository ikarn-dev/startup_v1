import React from 'react';

function HeroSection() {
  return (
    <div className="flex flex-col mt-40 justify-start items-center min-h-screen px-4 relative">
      <h1 className="text-gray-800 text-4xl font-bold text-center mt-4 text-[clamp(1.5rem, 5vw, 2.5rem)]">
        Crafting Digital Experiences
        <br />
        <span className="text-[#A2F97D]">
          From Vision To Launch
        </span>
      </h1>
      <p className="text-gray-800 text-center mt-4 text-[clamp(1rem, 4vw, 1.25rem)]">
        From stunning designs to flawless code, we build websites that captivate, perform, and scale.<br />
        <span>Your journey from concept to a production-ready masterpiece starts here.</span>
      </p>
      <button className="w-[250px] h-[50px] mt-10 rounded-lg bg-black text-[#A2F97D] text-lg hover:bg-gray-800 transition-colors">
        Let's Build Your Website
      </button>

      {/* Moving Green Cards Section */}
      <div className="mt-10 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-[1233px] h-[233px] relative">
        {/* Cards all moving left to right */}
        <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] animate-moveCard delay-100"></div>
        <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] animate-moveCard"></div>
        <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] animate-moveCard delay-200"></div>
        <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] animate-moveCard delay-300"></div>
        <div className="w-[233px] h-[233px] rounded-xl bg-[#A2F97D] animate-moveCard delay-400"></div>
      </div>
    </div>
  );
}

export default HeroSection;
