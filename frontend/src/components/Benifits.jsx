// import React from "react";
// import { CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";

// const benefits = [
//   "Basics of Stock Market",
//   "Fundamental & Technical Analysis",
//   "Swing & Long-Term Stock Selection",
//   "Option Buying",
//   "Option Selling + Hedging",
//   "Live Market Practice Class",
//   "Risk Management & Psychology Buildup"
// ];

// const Benefits = () => {
//   return (
//     <section id="benefits" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white relative">
//       {/* floating blur shapes */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-10 left-20 w-56 h-56 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>
//         <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           🎯 Why Join Traders Profit Club?
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
//             >
//               <CheckCircle className="text-green-400 w-8 h-8 mx-auto mb-4" />
//               <p className="text-lg font-medium">{benefit}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;

import React from "react";
import {
  FaChartLine,
  FaBalanceScale,
  FaExchangeAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaBrain,
} from "react-icons/fa";


export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Learning With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that set our stock market education apart
            from the rest.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Comprehensive Curriculum",
              desc: "From basics to advanced strategies, we cover everything you need to know.",
            },
            {
              icon: Users,
              title: "Community Support",
              desc: "Join a vibrant community of traders sharing insights and experiences.",
            },
            {
              icon: BarChart3,
              title: "Real-time Analysis",
              desc: "Learn to analyze live market data and make informed decisions.",
            },
            {
              icon: DollarSign,
              title: "Profit Strategies",
              desc: "Master proven techniques for consistent profitability.",
            },
            {
              icon: Clock,
              title: "Flexible Schedule",
              desc: "Learn at your own pace with 24/7 access to course materials.",
            },
            {
              icon: Award,
              title: "Certification",
              desc: "Earn industry-recognized certificates upon course completion.",
            },
            {
              icon: FaExchangeAlt,
              title: "Swing & Long-Term Stock Selection",
              desc: "Learn how to identify high-potential stocks for both swing trading and long-term investing.",
            },
            {
              icon: FaShoppingCart,
              title: "Option Buying",
              desc: "Master the strategies and risk management for buying options effectively.",
            },
            {
              icon: FaShieldAlt,
              title: "Option Selling + Hedging",
              desc: "Understand selling options and hedging techniques to protect your portfolio.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100} // staggered animation
            >
              <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ChevronDown,
  TrendingUp,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  BarChart3,
  DollarSign,
  Target,
  Play,
} from "lucide-react";

// const Benefits = () => (
//     <section id="benefits" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Learning With Us</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Discover the advantages that set our stock market education apart from the rest.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { icon: BookOpen, title: "Comprehensive Curriculum", desc: "From basics to advanced strategies, we cover everything you need to know." },
//             { icon: Users, title: "Community Support", desc: "Join a vibrant community of traders sharing insights and experiences." },
//             { icon: BarChart3, title: "Real-time Analysis", desc: "Learn to analyze live market data and make informed decisions." },
//             { icon: DollarSign, title: "Profit Strategies", desc: "Master proven techniques for consistent profitability." },
//             { icon: Clock, title: "Flexible Schedule", desc: "Learn at your own pace with 24/7 access to course materials." },
//             { icon: Award, title: "Certification", desc: "Earn industry-recognized certificates upon course completion." }
//           ].map((benefit, index) => (
//             <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//                 <benefit.icon className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
//               <p className="text-gray-600">{benefit.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// export default Benefits;
