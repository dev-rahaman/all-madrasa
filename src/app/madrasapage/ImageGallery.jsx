"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = () => {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image2.jpg"];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <>
            <div key={index} className="relative overflow-hidden rounded-md">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                <button
                  className="text-white text-xl"
                  onClick={() => openImageModal(image)}
                >
                  View
                </button>
              </div>
            </div>
            {selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="max-w-full max-h-full overflow-auto">
                  <img
                    src={selectedImage}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <button
                    className="text-white absolute top-4 right-4 text-xl cursor-pointer"
                    onClick={closeImageModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
