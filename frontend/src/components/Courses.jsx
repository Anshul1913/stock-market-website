import { CheckCircle } from "lucide-react";
import React from "react";

// const courses = [
//   { title: "Beginner’s Stock Market Course", desc: "Learn the basics of stock market, trading platforms, and investments." },
//   { title: "Advanced Technical Analysis", desc: "Master chart patterns, indicators, and market psychology." },
//   { title: "Options Trading Masterclass", desc: "Deep dive into futures & options strategies with live examples." }
// ];

// const Courses = () => {
//   return (
//     <section id="courses" className="py-16 bg-[#F8FAFC] text-center">
//   <h2 className="text-3xl font-bold text-[#1E293B] mb-8">Our Courses</h2>
//   <div className="grid md:grid-cols-3 gap-6 px-6">
//     {courses.map((course, index) => (
//       <div key={index} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition">
//         <h3 className="text-xl font-semibold text-[#2563EB] mb-3">{course.title}</h3>
//         <p className="text-[#334155]">{course.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>

//   );
// };

// export default Courses;



import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// const courseData = {
//   Beginner: ['Intro to Trading','Basic Charting','Risk Management'],
//   Intermediate: ['Technical Analysis','Options Strategies','Swing Trading'],
//   Advanced: ['Algorithmic Trading','Futures & Forex','Portfolio Optimization']
// };

// function CourseCard({ title }) {
//   return (
//     <div className="min-w-[250px] bg-white/10 backdrop-blur-sm p-6 rounded-lg mr-4">
//       <h4 className="font-heading text-lg mb-2">{title}</h4>
//       <p className="text-sm">Short description of {title}.</p>
//       <a href="#contact" className="text-accent mt-4 inline-block">Learn More</a>
//     </div>
//   );
// }

// export default function Courses() {
//   return (
//     <section id="courses" className="py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="font-heading text-3xl lg:text-4xl text-center mb-8">Our Courses</h2>
//         <Tabs>
//           <TabList className="flex justify-center space-x-6 mb-6">
//             {Object.keys(courseData).map(level => (
//               <Tab key={level} className="px-4 py-2 cursor-pointer" selectedClassName="border-b-2 border-accent">
//                 {level}
//               </Tab>
//             ))}
//           </TabList>
//           {Object.entries(courseData).map(([level, courses]) => (
//             <TabPanel key={level}>
//               <div className="flex overflow-x-auto py-4">
//                 {courses.map(title => <CourseCard key={title} title={title} />)}
//               </div>
//             </TabPanel>
//           ))}
//         </Tabs>
//       </div>
//     </section>
//   );
// }




 const Courses = () => (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted courses designed for different skill levels and trading goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Beginner's Foundation",
              price: "$299",
              duration: "4 weeks",
              features: ["Market Basics", "Chart Reading", "Risk Management", "Paper Trading", "Live Support"]
            },
            {
              title: "Advanced Trading",
              price: "$599",
              duration: "8 weeks",
              features: ["Technical Analysis", "Options Trading", "Swing Trading", "Day Trading", "Portfolio Management"],
              popular: true
            },
            {
              title: "Professional Trader",
              price: "$999",
              duration: "12 weeks",
              features: ["Advanced Strategies", "Algorithmic Trading", "Risk Modeling", "1-on-1 Mentoring", "Trading Psychology"]
            }
          ].map((course, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${course.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}>
              {course.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">{course.price}</div>
              <div className="text-gray-600 mb-6">{course.duration}</div>
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                course.popular 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
export default Courses;