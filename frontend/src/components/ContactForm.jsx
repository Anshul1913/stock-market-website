// import React, { useState } from "react";

// const ContactForm = () => {
 

 

//   return (
//     <section id="contact" className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold text-[#1E293B] mb-6">📞 Contact Us</h2>
//       <form className="max-w-md mx-auto space-y-5 text-left" onSubmit={handleSubmit}>

//         <div>
//           <label className="block mb-2 font-medium text-[#1E293B]">Full Name</label>
//           <input
//             className="w-full p-3 text-black border border-gray-300 rounded "
//             type="text" name="name" placeholder="Enter your full name"
//             value={form.name} onChange={handleChange} required
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-[#1E293B]">Contact Number</label>
//           <input
//             className="w-full p-3 border text-black border-gray-300 rounded "
//             type="text" name="contact" placeholder="Enter your phone number"
//             value={form.contact} onChange={handleChange} required
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-[#1E293B]">Email Address (Optional)</label>
//           <input
//             className="w-full p-3 text-black bg-white border border-gray-300 rounded "
//             type="email" name="email" placeholder="Enter your email address"
//             value={form.email} onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium text-[#1E293B]">Message</label>
//           <textarea
//             className="w-full p-3 border text-black border-gray-300 rounded "
//             name="message" placeholder="Write your message here..." rows="4"
//             value={form.message} onChange={handleChange}
//           ></textarea>
//         </div>

//         <button
//           className="w-full bg-[#2563EB] text-white p-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition"
//         >
//           Send Message
//         </button>
//       </form>

//       <p className="mt-4 text-green-600 font-medium">{status}</p>
//     </section>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";

const ContactForm = () => {
   const [form, setForm] = useState({ name: "", contact: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://stock-market-website-oo19.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      let result = await response.json();
      console.log(result);
      
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", contact: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("⚠️ Error occurred.");
      console.log("Error:", error);

    }
  };
  return (
    <section id="contact" className="py-16  bg-blue-50" data-aos="fade-up">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="font-heading text-3xl lg:text-4xl text-blue-900 text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact Us
        </h2>

        <form
          className="bg-gradient-to-br from-white via-blue-50 to-white shadow-lg p-8 rounded-2xl space-y-6"
          data-aos="zoom-in"
          data-aos-delay="200"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="300">
            <label className="text-blue-500"> name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white text-blue-500 border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            
          </div>

          {/* Email Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="400">
            <label className="text-blue-500">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white border text-blue-500 border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            
          </div>

          {/* Subject Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="500">
             <label className="text-blue-500">
              Contact number
            </label>
            <input
              type="number"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white text-blue-500 border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            
          </div>

          {/* Message Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="600">
             <label className="text-blue-500">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg- text-blue-500 border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition resize-none"
            />
            
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 rounded-lg hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Send Message
          </button>
        </form>
      <p className="mt-4 text-green-600 font-medium">{status}</p>
      </div>
    </section>
  );
}

export default ContactForm;