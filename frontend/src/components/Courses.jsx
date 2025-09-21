import React from "react";

const courses = [
  { title: "Beginner’s Stock Market Course", desc: "Learn the basics of stock market, trading platforms, and investments." },
  { title: "Advanced Technical Analysis", desc: "Master chart patterns, indicators, and market psychology." },
  { title: "Options Trading Masterclass", desc: "Deep dive into futures & options strategies with live examples." }
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-[#F8FAFC] text-center">
  <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Our Courses</h2>
  <div className="grid md:grid-cols-3 gap-6 px-6">
    {courses.map((course, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-[#2563EB] mb-3">{course.title}</h3>
        <p className="text-[#334155]">{course.desc}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Courses;
