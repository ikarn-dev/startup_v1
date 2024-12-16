import React from "react";

function Services() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-72 lg:py-20 py-10">
      <div className="">
        <h1 className="text-black text-xl font-semibold text-left">
          Our Services
        </h1>

        <div className="w-full mt-10">
          <div className="">
            <div className="w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20 transition">
              <span className="font-extralight text-[24px] text-[#A2F97D]">
                01
              </span>
              <span className="font-semibold text-[24px] text-[#A2F97D]">
                UI/UX Design
              </span>
            </div>
            <div className="w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20 transition">
              <span className="font-extralight text-[24px] text-[#A2F97D]">
                02
              </span>
              <span className="font-semibold text-[24px] text-[#A2F97D]">
                Web Development
              </span>
            </div>
            <div className="w-full h-[160px] bg-black rounded-3xl mb-5 flex items-center gap-7 px-20 transition">
              <span className="font-extralight text-[24px] text-[#A2F97D]">
                03
              </span>
              <span className="font-semibold text-[24px] text-[#A2F97D]">
                Android App Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
