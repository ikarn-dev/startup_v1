import React from "react";

function HeroSection() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 mt-16 md:mt-28 py-10">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-gray-800 font-medium text-center tracking-tight leading-tight
          text-3xl sm:text-4xl md:text-5xl lg:text-[59px]">
          Crafting Digital Experiences
          <br className="hidden sm:block" />
          <span className="sm:mt-2 inline-block">from Vision To Launch</span>
        </h1>
        
        <p className="text-black font-regular text-center mt-4 md:mt-6
          text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          From stunning designs to flawless code, we build websites that
          captivate, perform, and scale.
          <br className="hidden sm:block" />
          <span className="block mt-2 sm:mt-0">
            Your journey from concept to a production-ready masterpiece starts
            here.
          </span>
        </p>

        <button className="px-4 sm:px-6 py-2 sm:py-3 mt-8 md:mt-10 rounded-xl 
          bg-black font-semibold text-[#A2F97D] 
          text-base sm:text-lg hover:bg-gray-800 transition-colors">
          Let's Build Your Website
        </button>
      </div>

      {/* Moving Green Cards Section */}
      <div className="relative overflow-hidden py-8 md:py-12 mt-8 md:mt-12">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-r from-[#FAF9F6] to-transparent z-10"></div>

        <div className="flex animate-infiniteScroll whitespace-nowrap">
          {/* First set of cards */}
          <div className="flex gap-3 sm:gap-4 mr-3 sm:mr-4">
            {[...Array(5)].map((_, index) => (
              <div key={`card1-${index}`} 
                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[233px] md:h-[233px] 
                rounded-xl bg-[#A2F97D] shrink-0">
              </div>
            ))}
          </div>
          {/* Duplicate set of cards */}
          <div className="flex gap-3 sm:gap-4">
            {[...Array(5)].map((_, index) => (
              <div key={`card2-${index}`} 
                className="aspect-square rounded-xl bg-[#A2F97D] shrink-0">
              </div>
            ))}
          </div>
        </div>

        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 
          bg-gradient-to-l from-[#FAF9F6] to-transparent z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;