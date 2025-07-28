"use client";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start pt-20 px-6">
      <div className="max-w-md w-full bg-white shadow-xl p-8 rounded-2xl">
        <h1 className="text-4xl font-extrabold text-[#1A56A2] text-center mb-6 font-sans tracking-wide">
          BIM Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#1A56A2] hover:bg-[#144A86] text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
