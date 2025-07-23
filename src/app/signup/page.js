"use client";
import { useState } from "react";

export default function SignUp() {

    
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

