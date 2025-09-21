import React from "react";
import { CheckCircle } from "lucide-react"; // npm install lucide-react

const benefits = [
  "Basics of Stock Market",
  "Fundamental & Technical Analysis",
  "Swing & Long-Term Stock Selection",
  "Option Buying",
  "Option Selling + Hedging",
  "Live Market Practice Class",
  "Risk Management & Psychology Buildup"
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          🎯 Benefits of Joining <span className="text-yellow-500">Traders Profit Club</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Unlock powerful strategies and skills that will help you trade smarter and manage risks effectively.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-6 bg-white shadow-md hover:shadow-xl transition rounded-2xl"
            >
              <CheckCircle className="text-green-600 w-7 h-7 flex-shrink-0" />
              <span className="text-gray-800 text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="https://wa.me/917489817271"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            🚀 Register Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
