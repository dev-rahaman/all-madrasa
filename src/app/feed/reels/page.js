"use client";
import React, { useState } from "react";

const cartItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
];

const Reels = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === 0 ? cartItems.length - 4 : prevStartIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === cartItems.length - 4 ? 0 : prevStartIndex + 1
    );
  };

  const visibleItems = cartItems.slice(startIndex, startIndex + 4);

  return (
    <div>
      <div className="bg-white p-4 rounded shadow-md relative overflow-hidden">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          onClick={handlePrev}
        >
          &laquo;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          onClick={handleNext}
        >
          &raquo;
        </button>
        <ul className="flex gap-5">
          {visibleItems.map((item) => (
            <li
              key={item.id}
              className="w-[160px] h-[250px] flex rounded bg-red-50 justify-between items-center border-b-2 py-2"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reels;
