"use client";
import { Alert } from "flowbite-react";
import React, { useState } from "react";

const Disclaimer = () => {
  const [shoWarning, setShowWaring] = useState(true);
  const onDismiss = () => {
    setShowWaring(false);
  };
  return (
    <div className="px-10 mt-10">
      <Alert color="warning" onClick={onDismiss} rounded>
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

export default Disclaimer;
