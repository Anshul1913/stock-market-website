import React from "react";
import MainInstructorImg from "../assets/instructor.jpeg"; // your main instructor photo

const instructor = {
  name: "Nihal Chouhan",
  title: "FOUNDER & LEAD INSTRUCTOR",
  img: MainInstructorImg,
  bio: "Nihal has over 5 years of experience in financial markets and specializes in portfolio management.",
};

export default function Instructors() {
  return (
    <section
      id="instructors"
      className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-gray-800 relative"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="font-heading text-3xl lg:text-4xl mb-12"
          data-aos="fade-up"
        >
          Our Instructor
        </h2>

        {/* Main Instructor */}
        <div className="relative inline-block" data-aos="zoom-in">
          <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-lg">
            <img
              src={instructor.img}
              alt={instructor.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-heading text-2xl">{instructor.name}</h3>
            <p className="text-sm">{instructor.title}</p>
            <p className="mt-2 max-w-md mx-auto">{instructor.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
