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
    <div className="min-h-screen bg-white flex justify-center items-start p-6">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

