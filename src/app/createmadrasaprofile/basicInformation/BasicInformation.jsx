"use client";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useState } from "react";
// import ContactInformation from "../contactInformation/page";

// const madrasaName = e.target.madrasaName.value;
// const madrasaType = e.target.madrasaType.value;
// const madrasaLogo = e.target.madrasaLogo.value;
// const madrasaImages = e.target.madrasaImages.value;

const BasicInformation = () => {
  const [showContactInformation, setShowContactInformation] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowContactInformation("block");
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleFormSubmit}
        >
          {/* madrasa Name  */}
          <h2 className="font-extrabold">Basic Information</h2>
          <div>
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

          {/* madrasa জেলা  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="মাদ্রাসার জেলা" />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaName"
              placeholder="মাদ্রাসার জেলা"
              required
            />
          </div>

          {/* madrasa থানা  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="মাদ্রাসার থানা " />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaName"
              placeholder="মাদ্রাসার থানা "
              required
            />
          </div>

          {/* madrasa গ্রাম  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="মাদ্রাসার গ্রাম" />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaName"
              placeholder="মাদ্রাসার গ্রাম"
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

          <div className="mb-2 block">
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার লোগো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              id="choiceLogo"
              className="hidden"
              type="madrasaLogo"
            />
          </div>

          {/* Images of the madrasa */}

          <div className="flex  justify-between mb-2">
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              id="choiceLogo"
              className="hidden"
              type="madrasaLogo"
            />
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>

            <FileInput
              required
              id="choiceLogo"
              className="hidden"
              type="madrasaLogo"
            />
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              id="choiceLogo"
              className="hidden"
              type="madrasaLogo"
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

      {/* <div className={`${showContactInformation}`}>
        <ContactInformation />
      </div> */}
    </>
  );
};

export default BasicInformation;
