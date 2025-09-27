// import React, { useState } from "react";

// const ContactForm = () => {
//   const [form, setForm] = useState({ name: "", contact: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

 

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
   const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("https://stock-market-website-znyg.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      let result = await response.json();
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
    <section id="contact" className="py-16 bg-blue-50" data-aos="fade-up">
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
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="400">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
              Your Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="500">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative" data-aos="fade-up" data-aos-delay="600">
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none transition resize-none"
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-500 peer-focus:text-sm">
              Message
            </label>
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