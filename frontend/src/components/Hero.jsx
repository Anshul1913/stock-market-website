import React from "react";

const Hero = () => {
  return (
   <section id="home" className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] text-white text-center py-24">
  <h1 className="text-5xl font-bold mb-4">Master the Stock Market 🚀</h1>
  <p className="text-lg text-gray-300 mb-6">
    Learn trading strategies, technical analysis & investment skills from experts.
  </p>
  <a href="#contact" 
     className="bg-[#2563EB] !text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition">
    Enroll Now
  </a>
</section>

  );
};

export default Hero;
