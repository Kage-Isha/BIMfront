 "use client";
import { useState } from "react";

export default function Contact() {
 
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
        <input type="text" name="name" placeholder="Your Name" value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded" required />
        <textarea name="message" placeholder="Your Message" value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded h-32" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

