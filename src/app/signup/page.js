"use client";
import { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    location: "",
    profileimg: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileimg") {
      setForm({ ...form, profileimg: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("bio", form.bio);
    formData.append("location", form.location);
    if (form.profileimg) {
      formData.append("profileimg", form.profileimg);
    }

    try {
      const res = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        setForm({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          bio: "",
          location: "",
          profileimg: null,
        });
        setStep(1);
      } else {
        alert(data.error || "Sign up failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-6">
      <div className="max-w-md w-full bg-white shadow-xl p-8 rounded-2xl">
        <h1 className="text-4xl font-extrabold text-[#1A56A2] text-center mb-6 font-sans tracking-wide">
          BIM Sign Up
        </h1>
        <form
          onSubmit={step === 1 ? handleNext : handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          {step === 1 && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border border-[#1A56A2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1A56A2] hover:bg-[#144A86] text-white py-3 rounded-lg font-semibold transition"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <div className="bg-[#F0F5FF] rounded-2xl shadow-inner p-6">
              <div className="mb-6 text-center">
                <label className="block text-[#1A56A2] text-md font-semibold mb-3">
                  Profile Image
                </label>
                {form.profileimg && (
                  <img
                    src={URL.createObjectURL(form.profileimg)}
                    alt="Preview"
                    className="mx-auto mb-4 h-28 w-28 object-cover rounded-full border-4 border-[#1A56A2]"
                  />
                )}
                <input
                  type="file"
                  name="profileimg"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-[#1A56A2] file:mr-4 file:py-2 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D0DFFF] file:text-[#144A86] hover:file:bg-[#A1B8F8]"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[#1A56A2] font-semibold mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  placeholder="Tell us about yourself"
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#1A56A2] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  rows={4}
                />
              </div>

              <div className="mb-8">
                <label className="block text-[#1A56A2] font-semibold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Where are you from?"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#1A56A2] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div className="flex justify-between gap-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 border border-[#1A56A2] text-[#1A56A2] py-3 rounded-lg hover:bg-[#D0DFFF] font-semibold transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#1A56A2] hover:bg-[#144A86] text-white py-3 rounded-lg font-semibold transition"
                >
                  Save & Create Account
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
