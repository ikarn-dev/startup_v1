import React from 'react';

function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row space-x-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600">
            We offer a wide range of services designed to help you succeed in
            your business. Our team of professionals is committed to providing
            top-notch solutions tailored to your needs.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="lg:w-1/2 flex space-x-4 mt-8 lg:mt-0">
          {/* Card 1 */}
          <div className="w-full bg-[#A2F97D] rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Service 1</h2>
            <p className="text-gray-800 mt-2">
              Description of service 1. It can help improve your business in
              various ways.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#A2F97D] rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800">Service 2</h2>
            <p className="text-gray-800 mt-2">
              Description of service 2. It provides solutions to modern
              challenges faced by businesses.
            </p>
          </div>

          {/* Card 3 - Cropped by 20% */}
          <div className="w-full bg-[#A2F97D] rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 relative">
            <h2 className="text-2xl font-semibold text-gray-800">Service 3</h2>
            <p className="text-gray-800 mt-2">
              Description of service 3. Helping businesses innovate and stay
              competitive in the market.
            </p>
            <div className="absolute inset-0 bg-gray-50 opacity-20 rounded-2xl" style={{ top: '80%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
