"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import { Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect } from "react";

const ContactInformation = () => {
  const { redirect, isFormEmpty, handleInputChange, formData, setFormData } =
    useContext(AuthContext);

  const initialFormData = {
    madrasaAddress: "",
    PhoneNumber: "",
    EmailAddress: "",
    Website: "",
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEmpty()) {
      redirect("/createmadrasaprofile/egalAndAdministrativeInformation");
    }
  };
  return (
    <>
      <h2 className="text-center">Contact Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            {/* madrasa Address   */}
            <div className="mb-2 block">
              <Label htmlFor="madrasaAddress" value="মাদ্রাসার ঠিকানা" />
            </div>
            <TextInput
              id="madrasaAddress"
              name="madrasaAddress"
              onChange={handleInputChange}
              value={formData.madrasaAddress}
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
              name="PhoneNumber"
              value={formData.PhoneNumber}
              onChange={handleInputChange}
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
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleInputChange}
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
              name="Website"
              value={formData.Website}
              onChange={handleInputChange}
              required
              type="Website"
              placeholder="ওয়েবসাইট লিংক"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isFormEmpty()}
              className={`text-white bg-blue-700 ${
                isFormEmpty()
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-800"
              } font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              <svg
                className="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactInformation;
