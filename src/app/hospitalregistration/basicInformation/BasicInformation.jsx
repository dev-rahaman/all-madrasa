"use client";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import ContactInformation from "../contactInformation/page";

// const madrasaName = e.target.madrasaName.value;
// const madrasaType = e.target.madrasaType.value;
// const madrasaLogo = e.target.madrasaLogo.value;
// const madrasaImages = e.target.madrasaImages.value;

const BasicInformation = () => {
  const [showContactInformation, setShowContactInformation] =
    useState("hidden");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowContactInformation("block");
  };

  return (
    <>
      <h2 className="text-center">Basic Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleFormSubmit}
        >
          <div>
            {/* madrasa Name  */}
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="মাদ্রাসার নাম" />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaName"
              placeholder="মাদ্রাসার নাম"
              required
            />
          </div>

          {/* madrasa type  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaType" value="মাদ্রাসার ধরণ" />
            </div>
            <TextInput
              id="madrasaType"
              required
              type="madrasaType"
              placeholder="উদাহরণ (নূরানী, হাফেজী, জামিয়া, দাওয়া)"
            />
          </div>

          {/* madrasa logo */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaLogo" value="মাদ্রাসার লোগো " />
            </div>
            <FileInput id="madrasaLogo" required type="madrasaLogo" />
          </div>

          {/* Images of the madrasa */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaImages" value="মাদ্রাসার কিছু ফটো" />
            </div>
            <FileInput id="madrasaImages" required type="madrasaImages" />
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
      <div className={`${showContactInformation}`}>
        <ContactInformation />
      </div>
    </>
  );
};

export default BasicInformation;
