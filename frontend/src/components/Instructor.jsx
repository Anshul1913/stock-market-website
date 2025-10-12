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

        {/* WhatsApp Chat Button */}
<a
  href="https://wa.me/7489817271" // your WhatsApp number with country code, e.g. https://wa.me/917489817271
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center"
  data-aos="zoom-in"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7"
    fill="currentColor"
  >
    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.73 5.55 2.12 7.96L.5 31.5l7.73-2.07A15.36 15.36 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3c-2.47 0-4.9-.67-7.02-1.94l-.5-.3-4.58 1.22 1.22-4.46-.33-.52A13.08 13.08 0 012.9 16 13.1 13.1 0 0116 2.9 13.1 13.1 0 0129.1 16 13.1 13.1 0 0116 28.8zm7.23-9.76c-.4-.2-2.33-1.16-2.69-1.29-.36-.13-.63-.2-.9.2-.27.4-1.03 1.29-1.26 1.56-.23.27-.46.3-.86.1s-1.67-.61-3.18-1.94c-1.17-1.04-1.96-2.33-2.19-2.73-.23-.4-.02-.62.18-.82.18-.18.4-.46.6-.69.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.24-2.96-.33-.8-.67-.68-.9-.69l-.77-.01c-.27 0-.7.1-1.06.5-.36.4-1.4 1.37-1.4 3.34s1.43 3.87 1.63 4.14c.2.27 2.8 4.3 6.8 6.03.95.41 1.7.65 2.27.83.95.3 1.82.26 2.51.16.77-.11 2.33-.95 2.66-1.87.33-.92.33-1.7.23-1.87-.1-.16-.36-.27-.76-.47z" />
  </svg>
</a>

      </div>
    </section>
  );
}
