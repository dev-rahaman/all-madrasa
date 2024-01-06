"use client";
import { Alert } from "flowbite-react";

export const Donation = () => {
  return (
    <>
      <div className="lg:px-10 mt-10">
        <Alert color="success" rounded>
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
      <div className="lg:px-10 mt-10">
        <Alert color="info" rounded>
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

export const Disclaimer = () => {
  return (
    <div className="lg:px-10 mt-10">
      <Alert color="warning" rounded>
        <span>
          <p>
            অল মাদ্রাসা.com কোনো অফিসিয়াল ওয়েবসাইট নয়. আমরা আমাদের ডেটার 100%
            নির্ভুলতা এবং আপ টু ডেট নিশ্চিত করি না। আমরা কোনো যাচাই বা আইনি
            উদ্দেশ্যে ইনস্টিটিউটের অফিসিয়াল ওয়েবসাইট ব্যবহার করার পরামর্শ দিই।
          </p>
        </span>
      </Alert>
    </div>
  );
};
