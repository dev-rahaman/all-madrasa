"use client";
import { Alert } from "flowbite-react";
import React, { useState } from "react";

const Donation = () => {
  const onDismiss = () => {
    setShowWaring(false);
  };
  return (
    <>
      <div className="px-10 mt-10">
        <Alert color="success" onClick={onDismiss} rounded>
          <span>
            <p>
              আপনার পুরাতন কিতাব, বই ডোনেশন করে গরিব শিক্ষার্থীদের পড়াশোনার
              সুযোগ করে দিন।
            </p>
          </span>
          <button className="bg-gray-400 p-2 rounded mt-2 text-black">
            View Details{" "}
          </button>
        </Alert>
      </div>
      <div className="px-10 mt-10">
        <Alert color="info" onClick={onDismiss} rounded>
          <span>
            <p>
              আপনার যে কোনো ধরণের ডোনেশনের জন্য মাদ্রাসা কর্তৃপক্ষের সাথে
              কন্টাক্ট করুন।
            </p>
          </span>
          <button className="bg-gray-400 p-2 rounded mt-2 text-black">
            Contact Now
          </button>
        </Alert>
      </div>
    </>
  );
};

export default Donation;
