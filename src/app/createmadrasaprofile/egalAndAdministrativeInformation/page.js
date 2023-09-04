"use client";
import { Label, TextInput } from "flowbite-react";
// import FacilitiesAndServices from "../facilitiesAndServices/page";
import { useState } from "react";

const LegalAndAdministrativeInformation = () => {
  const [showFacilitiesAndServices, setShowFacilitiesAndServices] =
    useState("hidden");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowFacilitiesAndServices("block");
  };

  return (
    <>
      <h2 className="text-center">Legal Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleFormSubmit}
        >
          <div>
            {/* RegistrationNumber */}
            <div className="mb-2 block">
              <Label
                htmlFor="RegistrationNumber"
                value="মাদ্রাসার রেজিস্ট্রেশন নম্বর "
              />
            </div>
            <TextInput
              id="RegistrationNumber"
              placeholder="মাদ্রাসার রেজিস্ট্রেশন নম্বর যদি থাকে"
              required
              type="RegistrationNumber"
            />
          </div>

          {/* Ownership Type */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="OwnershipType" value="মালিকানার ধরন" />
            </div>
            <TextInput
              id="OwnershipType"
              required
              type="OwnershipType"
              placeholder="মালিকানার ধরন উদাহরণ (প্রাইভেট, লোকাল)"
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
      {/* <div className={`${showFacilitiesAndServices}`}>
        <FacilitiesAndServices />
      </div> */}
    </>
  );
};

export default LegalAndAdministrativeInformation;
