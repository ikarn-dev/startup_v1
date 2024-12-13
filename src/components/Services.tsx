import React from 'react';

function Services() {
  return (
    <div className="w-full mb-10">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Heading */}
        <h1 className="text-black text-xl font-semibold text-left">Our Services</h1>

        {/* Section */}
        <div className="w-full h-[360px] mt-10">
          <div className="max-w-screen-lg mx-auto">
            {/* Buttons */}
            <button className="w-full h-[100px] bg-black text-[#A2F97D] font-bold rounded-xl mb-5 flex items-center pl-10 transition">
            UI/UX Design
            </button>
            <button className="w-full h-[100px] bg-black text-[#A2F97D] font-bold rounded-xl mb-5 flex items-center pl-10 transition">
            Web Devlopment
            </button>
            <button className="w-full h-[100px] bg-black text-[#A2F97D] font-bold rounded-xl flex items-center pl-10 transition">
            Android App Development
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
