// import React from "react";
// import { motion } from "framer-motion";

import { ArrowRight, ChevronDown, Play } from "lucide-react";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764]"
//     >
//       {/* Floating blurred circles */}
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-ping"></div>

//       {/* Glassy Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
//       >
//         <motion.h1
//           className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
//           animate={{ textShadow: ["0px 0px 10px #FFD700", "0px 0px 20px #38BDF8", "0px 0px 10px #A78BFA"] }}
//           transition={{ repeat: Infinity, duration: 3 }}
//         >
//           Traders Profit Club
//         </motion.h1>

//         <p className="text-lg text-gray-200 max-w-xl mx-auto mt-6">
//           Learn stock trading with live practice, risk management & expert strategies. 
//           Build confidence in the market 🚀
//         </p>

//         {/* Glassy CTA */}
//         <motion.a
//           href="#contact"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="mt-8 inline-block px-10 py-4 rounded-full font-semibold 
//             bg-gradient-to-r from-yellow-400 to-cyan-400 text-black shadow-lg 
//             backdrop-blur-md hover:shadow-2xl transition"
//         >
//           Enroll Now
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-6"
    >
      <motion.h1
        className="font-heading text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Master the <span className="text-blue-600">Stock Market</span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg lg:text-xl text-slate-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Transform your financial future with our comprehensive stock market courses. Learn from industry experts and start trading with confidence. Gain real skills with our 
        <span className="font-semibold text-slate-800"> expert-led courses</span>.
      </motion.p>

      <motion.a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        🚀 Start Free Trial
      </motion.a>
    </section>
  );
}

//  const Hero = () => (
//     <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-black/20"></div>
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//           Master the
//           <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Stock Market</span>
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
//           Transform your financial future with our comprehensive stock market courses. Learn from industry experts and start trading with confidence.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//             <span>Start Learning Today</span>
//             <ArrowRight className="h-5 w-5" />
//           </button>
//           <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2">
//             <Play className="h-5 w-5" />
//             <span>Watch Demo</span>
//           </button>
//         </div>
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
//           <div className="text-center">
//             <div className="text-3xl font-bold text-white">10,000+</div>
//             <div className="text-gray-300">Students Trained</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-white">95%</div>
//             <div className="text-gray-300">Success Rate</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl font-bold text-white">5+</div>
//             <div className="text-gray-300">Years Experience</div>
//           </div>
//         </div>
//       </div>
      
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="h-8 w-8 text-white" />
//       </div>
//     </section>
//   );


  // export default Hero;
