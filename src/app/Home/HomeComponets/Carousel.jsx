"use client";
import Image from "next/image";
import React, { useState } from "react";
const images = ["/dini-ilm.jpg", "/dini-ilm.jpg", "/dini-ilm.jpg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-96">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white px-3 py-2 rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white px-3 py-2 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className="w-full h-full flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-full transform transition-transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
