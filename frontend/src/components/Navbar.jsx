import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#1E293B] text-white shadow-lg">
      <h1 className="text-xl font-bold">📈 Traders Profit Club</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-[#FACC15]">Home</a></li>
        <li><a href="#benefits" className="hover:text-[#FACC15]">Benefits</a></li>
        <li><a href="#courses" className="hover:text-[#FACC15]">Courses</a></li>
        <li><a href="#about" className="hover:text-[#FACC15]">About</a></li>
        <li><a href="#contact" className="hover:text-[#FACC15]">Contact</a></li>
      </ul>
    </nav>

  );
};

export default Navbar;
