"use client";

import { useEffect, useState } from "react";

export default function About() {
  const feedbacks = [
    { name: "Aarav Shrestha", message: "Great platform to share and request books!" },
    { name: "Sita Gurung", message: "This really helped me prepare for finals. Thanks to the contributors!" },
    { name: "Bikash Maharjan", message: "Love the design and simplicity. Sharing PDFs was never this easy." },
    { name: "Nisha Basnet", message: "A valuable initiative for all BIM students, especially the ones from remote campuses." },
    { name: "Roshan Adhikari", message: "I was able to access the required textbooks within minutes. Amazing!" },
    { name: "Pratiksha Thapa", message: "User-friendly and exactly what our community needed!" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsToShow = 3;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, startIndex]); // 👈 include startIndex to avoid stale state

  const visibleFeedbacks = Array.from({ length: itemsToShow }, (_, i) => {
    const index = (startIndex + i) % feedbacks.length;
    return feedbacks[index];
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 space-y-12">
      {/* About Section */}
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          <strong>BIM Student Connect</strong> is an open platform built for students enrolled in the Bachelor of Information Management (BIM) program.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our goal is to make learning more accessible by enabling students to share and receive valuable educational materials.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Through this platform, you can <strong>donate or request books and PDFs</strong>, keeping academic resources in motion — not gathering dust.
        </p>
        <p className="text-gray-700 text-lg">
          We also provide updates, student-written blogs, and tools to support collaboration. This is a space by students, for students.
        </p>
      </div>

      {/* Feedback Section */}
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">What Students Are Saying</h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-4 justify-center">
            {/* Prev Button */}
            <button
              onClick={prev}
              className="h-full px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ◀
            </button>

            {/* Feedback Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500">
              {visibleFeedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FA] border border-gray-300 rounded-2xl p-5 shadow hover:shadow-md transition-all duration-200 w-72"
                >
                  <p className="text-base text-blue-700 font-bold mb-2">
                    {feedback.name}
                  </p>
                  <p className="text-gray-700 text-sm">{feedback.message}</p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="h-full px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
