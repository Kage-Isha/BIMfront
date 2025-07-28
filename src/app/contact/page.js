"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";

export default function Contact() {
  const { user } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "Feedback",
  });

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with API call
    alert("✅ Your message has been sent. Thank you!");
    setForm((prev) => ({
      ...prev,
      phone: "",
      message: "",
      type: "Feedback",
    }));
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-6">
      <div className="max-w-lg w-full bg-white shadow-xl p-8 rounded-2xl border border-[#1A56A2]">
        <h1 className="text-4xl font-extrabold text-[#1A56A2] text-center mb-6 font-sans tracking-wide">
          Contact Us
        </h1>

        {user ? (
          <p className="text-center text-gray-700 mb-6">
            Hello, <span className="font-bold text-[#1A56A2]">{user.name}</span>! We're here to help.
          </p>
        ) : (
          <p className="text-center text-gray-700 mb-6">
            You can contact us below — or{" "}
            <span
              onClick={() => router.push("/signin")}
              className="text-[#1A56A2] underline cursor-pointer font-medium"
            >
              sign in
            </span>{" "}
            for a faster experience.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Type Select */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-2">
              Type
              <span
                title="Feedback: Comment or review\nAdvice: Suggestion or request for help"
                className="text-sm text-gray-500 cursor-help"
              >
                (?)
              </span>
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A56A2]"
              required
            >
              <option value="Feedback">Feedback</option>
              <option value="Advice">Advice</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A56A2]"
              required
              disabled={!!user}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A56A2]"
              required
              disabled={!!user}
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone (optional)</label>
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A56A2]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A56A2] h-32"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1A56A2] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#144A86] transition-all duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Need urgent help? Email us directly at{" "}
          <span className="text-[#1A56A2] font-medium">support@bimconnect.com</span>
        </div>
      </div>
    </div>
  );
}
