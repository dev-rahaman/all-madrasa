"use client";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/Provider/AuthProvider";
import AllZilla from "@/app/Component/AllZilla";

const BasicInformation = () => {
  const { redirect, handleInputChange, isFormEmpty, formData, setFormData } =
    useContext(AuthContext);

  const initialFormData = {
    madrasaName: "",
    selectedZilla: "",
    selectedThana: "",
    madrasaVillage: "",
    madrasaType: "",
    established: "",
    // madrasaGallery1: "",
    // madrasaGallery2: "",
    // madrasaGallery3: "",
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEmpty()) {
      redirect("/createmadrasaprofile/contactInformation");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* madrasa Name  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="মাদ্রাসার নাম" />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaName"
              onChange={handleInputChange}
              value={formData.madrasaName}
              placeholder="মাদ্রাসার নাম"
              required
            />
          </div>

          <div>
            <AllZilla />
          </div>

          {/* গ্রামের নাম  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="madrasaName" value="গ্রামের নাম" />
            </div>
            <TextInput
              id="madrasaName"
              name="madrasaVillage"
              value={formData.madrasaVillage}
              onChange={handleInputChange}
              placeholder="গ্রামের নাম "
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
              name="madrasaType"
              value={formData.madrasaType}
              onChange={handleInputChange}
              required
              type="madrasaType"
              placeholder="উদাহরণ (নূরানী, হাফেজী, জামিয়া, দাওয়া)"
            />
          </div>

          {/* madrasa established  */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="established" value="স্থাপিত তারিখ" />
            </div>
            <TextInput
              id="established"
              name="established"
              value={formData.established}
              onChange={handleInputChange}
              required
              type="established"
              placeholder="স্থাপিত (১৯৯৬)"
            />
          </div>

          {/* রেজিস্ট্রেশন নম্বর */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="registrationNumber" value="রেজিস্ট্রেশন নম্বর" />
            </div>
            <TextInput
              id="registrationNumber"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              required
              type="registrationNumber"
              placeholder="রেজিস্ট্রেশন নম্বর অপশনাল "
            />
          </div>

          {/* madrasa logo */}

          {/* <div className="mb-2 block">
            <Label
              htmlFor="choiceLogo"
              name="madrasaLogoLabel"
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
              name="madrasaLogo"
              value={formData.madrasaLogo}
              onChange={handleInputChange}
              className="hidden"
              type="madrasaLogo"
            />
          </div>

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
              name="madrasaGallery1"
              value={formData.madrasaGallery1}
              onChange={handleInputChange}
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
              name="madrasaGallery2"
              value={formData.madrasaGallery2}
              onChange={handleInputChange}
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
              id="madrasaGallery3"
              name="madrasaGallery3"
              value={formData.madrasaGallery3}
              onChange={handleInputChange}
              className="hidden"
              type="madrasaLogo"
            />
          </div> */}
          <div className="flex items-center justify-end">
            <button
              className={`text-white bg-blue-700 ${
                isFormEmpty()
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-800"
              } font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              <button
                onClick={() =>
                  redirect("/createmadrasaprofile/contactInformation")
                }
                disabled={isFormEmpty()}
              >
                <svg
                  class="w-6 h-6 dark:text-white"
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
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicInformation;
