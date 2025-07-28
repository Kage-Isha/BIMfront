const newsData = [
  {
    date: "April 20, 2024",
    title: "New Scholarship Opportunities",
    excerpt:
      "Explore the latest scholarship opportunities available for BIM students across various semesters.",
  },
  {
    date: "April 15, 2024",
    title: "Spring Semester Begins Next Week",
    excerpt:
      "The spring session is starting from April 22. Prepare your registration and course selection.",
  },
  {
    date: "April 10, 2024",
    title: "Workshop on BIM Tools Scheduled",
    excerpt:
      "Don't miss the hands-on workshop covering essential BIM software and project tools.",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start px-4 py-10">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-[#1A56A2] font-sans tracking-wide">
          📢 Latest News
        </h1>

        {newsData.length === 0 ? (
          <div className="border p-4 rounded text-center text-gray-600">
            <span className="text-red-500 text-lg mr-2">•</span> No news available.
          </div>
        ) : (
          <div className="space-y-8">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-[#1A56A2] rounded-2xl shadow-sm hover:shadow-lg transition duration-300 bg-[#F5F9FF] hover:bg-white cursor-pointer"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-[#D6E4FF] text-[#1A56A2] px-4 py-1 rounded-full font-semibold tracking-wide">
                    {item.date}
                  </span>
                  <span className="text-sm text-[#1A56A2] font-medium">BIM News</span>
                </div>
                <h2 className="text-2xl font-semibold text-[#1A56A2]">{item.title}</h2>
                <p className="text-gray-700 mt-2 text-base">{item.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
