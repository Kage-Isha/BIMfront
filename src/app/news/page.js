
const newsData = [
  { date: "April 20, 2024", title: "New Scholarship Opportunities" },
  { date: "April 15, 2024", title: "Spring Semester Begins Next Week" },
  { date: "April 10, 2024", title: "Workshop on BIM Tools Scheduled" },
];
export default function News() {
  return (
    

    <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-start">
      <div className="max-w-2xl bg-white p-6 rounded shadow-md w-full">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        {newsData.map((item, i) => (
          <div key={i} className="border-b py-4 flex justify-between">
            <span className="text-gray-500">{item.date}</span>
            <span className="font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
