"use client";
import { Label, TextInput } from "flowbite-react";

import React, { useState } from "react";
// import LegalAndAdministrativeInformation from "../egalAndAdministrativeInformation/page";

const ContactInformation = () => {
  const [
    showLegalAndAdministrativeInformation,
    setShowLegalAndAdministrativeInformation,
  ] = useState("hidden");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowLegalAndAdministrativeInformation("block");
  };

  return (
    <>
      <h2 className="text-center">Contact Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleFormSubmit}
        >
          <div>
            {/* madrasa Address   */}
            <div className="mb-2 block">
              <Label htmlFor="madrasaAddress" value="মাদ্রাসার ঠিকানা" />
            </div>
            <TextInput
              id="madrasaAddress"
              placeholder="মাদ্রাসার ঠিকানাঃ "
              required
              type="madrasaAddress"
            />
          </div>

          {/* Phone Number  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="PhoneNumber" value="ফোন নম্বর " />
            </div>
            <TextInput
              id="PhoneNumber"
              required
              type="PhoneNumber"
              placeholder="মাদ্রাসার ফোন নম্বর "
            />
          </div>

          {/* Email Address  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="EmailAddress" value="ইমেইল এড্রেস" />
            </div>
            <TextInput
              id="EmailAddress"
              required
              type="EmailAddress"
              placeholder="ইমেইল এড্রেস"
            />
          </div>

          {/* Website  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Website" value="ওয়েবসাইট লিংক " />
            </div>
            <TextInput
              id="Website"
              required
              type="Website"
              placeholder="ওয়েবসাইট লিংক"
            />
          </div>
          <div className="flex items-center justify-end">
            <button type="submit">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {/* <div className={`${showLegalAndAdministrativeInformation}`}>
        <LegalAndAdministrativeInformation />
      </div> */}
    </>
  );
};

export default ContactInformation;
