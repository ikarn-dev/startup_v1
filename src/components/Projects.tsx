import React from "react";

function Projects() {
  return (
    <div className="w-full mt-10 mb-5">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Heading */}
        <h1 className="text-black text-xl font-bold text-left">
        Take a look at what we've built
        </h1>

        {/* Section */}
        <div className="w-full h-[500px] mt-10 bg-black rounded-[20px] p-6">
          {/* Text at Top Left */}
          <h1 className="text-white text-lg font-semibold mb-10">
            TOOL
          </h1>

          <p className="flex mb-5 text-white">
            Find And Book Local Beauty Experts
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mb-16">
            <button className="w-[120px] h-[30px] bg-black border-2 border-[#A2F97D] text-[#FAF9F6] font-bold rounded-full hover:bg-gray-800 transition">
              Web Design
            </button>
            <button className="w-[120px] h-[30px] bg-black border-2 border-[#A2F97D] text-[#FAF9F6] font-bold rounded-full hover:bg-gray-800 transition">
              Branding
            </button>
          </div>

          {/* Additional Button */}
          <div className="flex">
            <button className="w-[180px] h-[50px] bg-[#A2F97D] text-black font-bold rounded-[12px] hover:bg-[#8FEF69] transition">
              Explore Project
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section */}
        <div className="w-full h-[500px] mt-10 bg-black rounded-[20px] p-6">
          {/* Text at Top Left */}
          <h1 className="text-white text-lg font-semibold mb-10">
            TOOL
          </h1>

          <p className="flex mb-5 text-white">
            Find And Book Local Beauty Experts
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mb-16">
            <button className="w-[120px] h-[30px] bg-black border-2 border-[#A2F97D] text-[#FAF9F6] font-bold rounded-full hover:bg-gray-800 transition">
              Web Design
            </button>
            <button className="w-[120px] h-[30px] bg-black border-2 border-[#A2F97D] text-[#FAF9F6] font-bold rounded-full hover:bg-gray-800 transition">
              Branding
            </button>
          </div>

          {/* Additional Button */}
          <div className="flex">
            <button className="w-[180px] h-[50px] bg-[#A2F97D] text-black font-bold rounded-[12px] hover:bg-[#8FEF69] transition">
              Explore Project
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex mt-10 mb-5">
            <button className="w-[180px] h-[50px] bg-black text-[#A2F97D] font-bold rounded-[15px]  hover:bg-gray-800 transition">
                Explore All Projects
            </button>
          </div>
    </div>

    
  );
}

export default Projects;
