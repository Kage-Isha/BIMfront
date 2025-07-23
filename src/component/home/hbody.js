"use client";

import { useEffect, useState } from "react";

const Hbody = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="bg-[#1A56A2] text-white text-center py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Pass the knowledge, <br /> <span className="text-white">not the dust</span>
        </h1>
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
          Get Started
        </button>
      </div>

      {/* News Section */}
      <div className="w-full max-w-3xl px-6 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
        <div className="divide-y border rounded-lg overflow-hidden">
          {news.length > 0 ? (
            news.map((item, idx) => (
              <div key={idx} className="flex justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-all">
                <span className="text-gray-500 w-1/3">{item.date}</span>
                <span className="text-black font-medium w-2/3">{item.title}</span>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No news available.</div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 mb-20">
        <button
          className="bg-white border-2 border-gray-300 hover:border-gray-400 px-6 py-4 rounded-lg text-center shadow-sm transition-all"
          onClick={() => window.location.href = "/donate"}
        >
          <h3 className="text-lg font-semibold mb-1">Donate Now</h3>
          <p className="text-sm text-gray-600">Contribute your books for others to use</p>
        </button>

        <button
          className="bg-white border-2 border-gray-300 hover:border-gray-400 px-6 py-4 rounded-lg text-center shadow-sm transition-all"
          onClick={() => window.location.href = "/request"}
        >
          <h3 className="text-lg font-semibold mb-1">Need a Book?</h3>
          <p className="text-sm text-gray-600">Request books that you require</p>
        </button>
      </div>
    </div>
  );
};

export default Hbody;
