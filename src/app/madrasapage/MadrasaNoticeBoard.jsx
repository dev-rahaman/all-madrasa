import React from "react";

const notices = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    content:
      "There will be a parent-teacher meeting on September 15th at 4:00 PM in the school auditorium. All parents are requested to attend.",
    date: "2023-09-10",
  },
  {
    id: 2,
    title: "Upcoming Exam Schedule",
    content:
      "The final exams for this semester will begin on October 1st. Please check the exam schedule posted on the school website.",
    date: "2023-09-05",
  },
  {
    id: 3,
    title: "School Holiday - Labor Day",
    content:
      "The school will be closed on September 6th in observance of Labor Day. Enjoy your day off!",
    date: "2023-08-29",
  },
];

const MadrasaNoticeBoard = () => {
  return (
    <div id="notice" className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">
        মাদ্রাসার গুরুত্বপূর্ণ নোটিশ{" "}
      </h2>
      <ul className="space-y-4">
        {notices.map((notice) => (
          <li key={notice.id} className="border border-gray-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
            <p className="text-gray-600 mb-2">{notice.content}</p>
            <p className="text-gray-400">
              {new Date(notice.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MadrasaNoticeBoard;
