// import React from "react";

// const testimonials = [
//   { name: "Rahul Sharma", feedback: "This course changed my life! I now trade confidently." },
//   { name: "Priya Verma", feedback: "Very practical and easy to understand. Highly recommend!" },
//   { name: "Amit Patel", feedback: "The strategies taught here are worth every penny." }
// ];

// const Testimonials = () => {
//   return (
//     <section className="py-16 bg-black text-center">
//       <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
//       <div className="grid md:grid-cols-3 gap-6 px-6">
//         {testimonials.map((t, i) => (
//           <div key={i} className="p-6 border rounded-lg shadow">
//             <p className="italic text-gray-300 mb-3">“{t.feedback}”</p>
//             <h4 className="font-semibold">- {t.name}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    feedback:
      "The course is very practical and easy to understand. I could apply the strategies immediately.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    feedback:
      "Excellent guidance on stock market strategies. Highly recommend for beginners!",
    rating: 4,
  },
  {
    name: "Priya Kapoor",
    feedback:
      "Loved the structured approach and live examples. Made trading much simpler.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    feedback:
      "Very informative and interactive. Helped me improve my investment decisions.",
    rating: 4,
  },
  {
    name: "Sneha Joshi",
    feedback: "The mentors are very approachable and clear in explanations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-blue-400 via-blue-100 to-blue-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="font-heading text-3xl lg:text-4xl mb-12 text-blue-900 text-center"
          data-aos="fade-up"
        >
          What Our Students Say
        </h2>

        {/* Scrolling Container */}
        <div
          className="overflow-hidden relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="min-w-[280px] p-6 rounded-xl flex-shrink-0 
                       bg-gradient-to-br from-white/90 via-blue-50/90 to-white/90 
                       shadow-lg hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={(idx % testimonials.length) * 100} // stagger
              >
                <div className="flex justify-center mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="italic text-gray-800 mb-3">“{t.feedback}”</p>
                <div className="font-semibold text-blue-900">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation for continuous scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          gap: 1.5rem;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
