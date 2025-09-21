import React from "react";

const testimonials = [
  { name: "Rahul Sharma", feedback: "This course changed my life! I now trade confidently." },
  { name: "Priya Verma", feedback: "Very practical and easy to understand. Highly recommend!" },
  { name: "Amit Patel", feedback: "The strategies taught here are worth every penny." }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 border rounded-lg shadow">
            <p className="italic text-gray-300 mb-3">“{t.feedback}”</p>
            <h4 className="font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
