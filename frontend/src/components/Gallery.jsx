import React from "react";
import side1 from "../assets/side1.jpeg"; // your main instructor photo
import side2 from "../assets/side2.jpeg"; // your main instructor photo
import side3 from "../assets/side3.jpeg"; // your main instructor photo
import side4 from "../assets/side 4.jpeg"; // your main instructor photo
import side5 from "../assets/side 5.jpeg"; // your main instructor photo

// Array of gallery photos
const galleryPhotos = [
  { src: side1, alt: "Infrastructure 1" },
  //   { src: side2, alt: "Classroom 1" },
  { src: side3, alt: "Students studying" },
  { src: side4, alt: "Center photo" },
  { src: side5, alt: "Students studying" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="font-heading text-3xl lg:text-4xl mb-12 text-blue-900"
          data-aos="fade-up"
        >
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryPhotos.map(({ src, alt }, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // staggered animation
            >
              <img src={src} alt={alt} className="object-contain w-full h-96" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
