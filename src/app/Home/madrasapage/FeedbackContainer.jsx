"use client";
import React, { useState } from "react";

const FeedbackContainer = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg">
      <h2
        className="p-4 text-left hover:bg-[#38bdf8] cursor-pointer border-b"
        onClick={toggleAccordion}
      >
        {title}
      </h2>
      {isOpen && <div className="p-4 border-b">{content}</div>}
    </div>
  );
};

export default FeedbackContainer;
