import React from "react";


function HeroSection() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/taulosphoto.jpg')" }}>
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end pr-52 h-full px-2 text-white ml-12 pb-10  mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold ">
          TOLUS SPRING COLLECTION
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection.
        </p>
        <button className="bg-white text-black px-6 py-2 text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
