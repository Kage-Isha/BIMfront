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

  // Slice only 3 items from news
  const latestNews = news.slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full font-sans">
      {/* Hero Section */}
      <div className="bg-[#1A56A2] text-white text-center py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Pass the knowledge, <br /> <span className="text-white">not the dust</span>
        </h1>
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
          Get Started
        </button>
      </div>

      {/* Latest News Section */}
      <div className="w-full max-w-4xl px-6 mt-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-[#1A56A2] pl-3">📰 Latest News</h2>

        {latestNews.length > 0 ? (
          <div className="space-y-4">
            {latestNews.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-[#1A56A2] transition-all duration-200 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-500 group-hover:text-[#1A56A2] transition">
                    {item.date}
                  </span>
                  {item.category && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                      {item.category}
                    </span>
                  )}
                </div>
                <h3 className="text-md md:text-lg font-semibold text-gray-800 group-hover:text-[#1A56A2] transition">
                  {item.title}
                </h3>
              </div>
            ))}

            {/* View All News Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => window.location.href = "/news"}
                className="text-[#1A56A2] hover:underline font-semibold"
              >
                View All News →
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 bg-gray-50 border border-dashed border-gray-300 text-center rounded-md text-gray-600">
            No news available at the moment.
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mt-12 mb-20">
        <button
          className="bg-white border-2 border-gray-300 hover:border-gray-400 px-6 py-4 rounded-lg text-center shadow-sm transition-all"
          onClick={() => window.location.href = "/donate"}
        >
          <h3 className="text-lg font-semibold mb-1">📚 Donate Now</h3>
          <p className="text-sm text-gray-600">Contribute your books or PDFs to help others</p>
        </button>

        <button
          className="bg-white border-2 border-gray-300 hover:border-gray-400 px-6 py-4 rounded-lg text-center shadow-sm transition-all"
          onClick={() => window.location.href = "/request"}
        >
          <h3 className="text-lg font-semibold mb-1">📖 Need a Book?</h3>
          <p className="text-sm text-gray-600">Request physical or digital materials you require</p>
        </button>
      </div>
    </div>
  );
};

export default Hbody;
