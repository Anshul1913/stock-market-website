// import React from "react";

// const About = () => {
//   return (
//     <section id="about" className="py-16 px-6 text-center bg-black">
//       <h2 className="text-3xl font-bold mb-4">About Us</h2>
//       <p className="text-lg max-w-2xl mx-auto">
//         We provide comprehensive stock market training for beginners and professionals.
//         Our mission is to empower individuals with financial knowledge and trading skills.
//       </p>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Award, BarChart3, Target } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);



export default function About() {
  return (
    <section
  id="about"
  className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-white"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div data-aos="fade-up">
      <h2
        className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-slate-900"
        data-aos="fade-right"
      >
        About <span className="text-blue-600">Us</span>
      </h2>
      <p
        className="mb-8 text-lg text-slate-600 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We empower students with practical stock market education— combining{" "}
        <span className="font-semibold text-slate-800">theory</span>,
        <span className="font-semibold text-slate-800"> live examples</span>, and{" "}
        <span className="font-semibold text-slate-800">
          community support
        </span>{" "}
        to achieve real-world results.
      </p>

      <h3
        className="text-3xl font-bold text-gray-900 mb-6"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        Why Choose Us?
      </h3>
      <div className="space-y-6">
        <div
          className="flex items-start space-x-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Expert Instructors
            </h4>
            <p className="text-gray-600">
              Learn from seasoned professionals with decades of market
              experience.
            </p>
          </div>
        </div>
        <div
          className="flex items-start space-x-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-purple-100 p-3 rounded-full">
            <BarChart3 className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Practical Learning
            </h4>
            <p className="text-gray-600">
              Hands-on training with real market scenarios and live trading
              sessions.
            </p>
          </div>
        </div>
        <div
          className="flex items-start space-x-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bg-green-100 p-3 rounded-full">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Proven Results
            </h4>
            <p className="text-gray-600">
              95% of our students report improved trading performance within
              3 months.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Content (Mission Card) */}
    <div
      className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 p-6 rounded-lg shadow-lg"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
      <p className="text-lg leading-relaxed">
        To democratize financial education and make stock market expertise
        accessible to everyone, regardless of their background or experience
        level.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-2xl font-bold">100%</div>
          <div className="text-sm opacity-90">Money Back Guarantee</div>
        </div>
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-2xl font-bold">24/7</div>
          <div className="text-sm opacity-90">Student Support</div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

//     const About = () => (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">About TradeAcademy</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We're dedicated to empowering individuals with the knowledge and skills needed to succeed in the stock market.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="bg-blue-100 p-3 rounded-full">
//                   <Award className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h4>
//                   <p className="text-gray-600">Learn from seasoned professionals with decades of market experience.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-purple-100 p-3 rounded-full">
//                   <BarChart3 className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2">Practical Learning</h4>
//                   <p className="text-gray-600">Hands-on training with real market scenarios and live trading sessions.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-green-100 p-3 rounded-full">
//                   <Target className="h-6 w-6 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h4>
//                   <p className="text-gray-600">95% of our students report improved trading performance within 3 months.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//               <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
//               <p className="text-lg leading-relaxed">
//                 To democratize financial education and make stock market expertise accessible to everyone, regardless of their background or experience level.
//               </p>
//               <div className="mt-6 grid grid-cols-2 gap-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">100%</div>
//                   <div className="text-sm opacity-90">Money Back Guarantee</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">24/7</div>
//                   <div className="text-sm opacity-90">Student Support</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// export default About;
