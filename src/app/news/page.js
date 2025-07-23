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
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">📢 Latest News</h1>

        {newsData.length === 0 ? (
          <div className="border p-4 rounded text-center text-gray-600">
            <span className="text-red-500 text-lg mr-2">•</span> No news available.
          </div>
        ) : (
          <div className="space-y-6">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200 bg-gray-50 hover:bg-white cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                    {item.date}
                  </span>
                  <span className="text-sm text-gray-500">BIM News</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mt-1 text-sm">{item.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
