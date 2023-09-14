import React from "react";

const notices = [
  {
    id: 1,
    title: "Parent-Teacher Meeting",
    content:
      "15 ই সেপ্টেম্বর বিকেল 4:00 PM জামিয়া রাশিদিয়ার অডিটোরিয়ামে একটি অভিভাবক-শিক্ষক সভা হবে৷ সকল অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা যাচ্ছে।",
    date: "2023-09-10",
  },
  {
    id: 2,
    title: "Upcoming Exam Schedule",
    content:
      "15 ই সেপ্টেম্বর বিকেল 4:00 PM জামিয়া রাশিদিয়ার অডিটোরিয়ামে একটি অভিভাবক-শিক্ষক সভা হবে৷ সকল অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা যাচ্ছে।",
    date: "2023-09-05",
  },
  {
    id: 3,
    title: "School Holiday - Labor Day",
    content:
      "15 ই সেপ্টেম্বর বিকেল 4:00 PM জামিয়া রাশিদিয়ার অডিটোরিয়ামে একটি অভিভাবক-শিক্ষক সভা হবে৷ সকল অভিভাবকদের উপস্থিত থাকার জন্য অনুরোধ করা যাচ্ছে।",
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
