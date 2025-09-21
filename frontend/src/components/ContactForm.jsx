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
      let response = await fetch("http://localhost:5000/api/contact", {
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
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#1E293B] mb-6">📞 Contact Us</h2>
      <form className="max-w-md mx-auto space-y-5 text-left" onSubmit={handleSubmit}>
        
        <div>
          <label className="block mb-2 font-medium text-[#1E293B]">Full Name</label>
          <input 
            className="w-full p-3 text-black border border-gray-300 rounded " 
            type="text" name="name" placeholder="Enter your full name" 
            value={form.name} onChange={handleChange} required 
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#1E293B]">Contact Number</label>
          <input 
            className="w-full p-3 border text-black border-gray-300 rounded " 
            type="text" name="contact" placeholder="Enter your phone number" 
            value={form.contact} onChange={handleChange} required 
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#1E293B]">Email Address (Optional)</label>
          <input 
            className="w-full p-3 text-black bg-white border border-gray-300 rounded " 
            type="email" name="email" placeholder="Enter your email address" 
            value={form.email} onChange={handleChange} 
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#1E293B]">Message</label>
          <textarea 
            className="w-full p-3 border text-black border-gray-300 rounded " 
            name="message" placeholder="Write your message here..." rows="4" 
            value={form.message} onChange={handleChange} 
          ></textarea>
        </div>

        <button 
          className="w-full bg-[#2563EB] text-white p-3 rounded-lg font-semibold hover:bg-[#1D4ED8] transition"
        >
          Send Message
        </button>
      </form>

      <p className="mt-4 text-green-600 font-medium">{status}</p>
    </section>
  );
};

export default ContactForm;
