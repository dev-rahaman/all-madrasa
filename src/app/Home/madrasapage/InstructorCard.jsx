import Image from "next/image";
import React from "react";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Math Instructor",
    image: "/image2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Science Instructor",
    image: "/image2.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    title: "Math Instructor",
    image: "/image2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Science Instructor",
    image: "/image2.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    title: "Math Instructor",
    image: "/image2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Science Instructor",
    image: "/image2.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    title: "Math Instructor",
    image: "/image2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Science Instructor",
    image: "/image2.jpg",
  },
];

const InstructorCard = () => {
  return (
    <div id="instructors" className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
      <div className="flex flex-wrap gap-5 justify-between">
        {instructors.map((instructor, idx) => (
          <div key={idx} className="w-[300px] bg-gray-300 cursor-pointer">
            <Image
              src={instructor.image}
              width={100}
              height={100}
              alt={`Instructor ${instructor.name}`}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {instructor.name}
            </h3>
            <p className="text-gray-600 text-center">{instructor.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorCard;
