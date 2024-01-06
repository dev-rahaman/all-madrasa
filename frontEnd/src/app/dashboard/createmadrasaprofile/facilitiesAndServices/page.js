"use client";
import { Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Provider/AuthProvider";

const FacilitiesAndServices = () => {
  const { redirect, handleInputChange, isFormEmpty, formData, setFormData } =
    useContext(AuthContext);

  const initialFormData = {
    NumberOfBeds: "",
    ListOfServices: "",
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEmpty()) {
      redirect("/createmadrasaprofile/staffInformation");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            {/* Number of Beds */}
            <div className="mb-2 block">
              <Label
                htmlFor="NumberOfBeds"
                value="সর্বমোট ছাত্র ছাত্রী সংখ্যা"
              />
            </div>
            <TextInput
              id="NumberOfBeds"
              name="NumberOfBeds"
              onChange={handleInputChange}
              value={formData.NumberOfBeds}
              placeholder="সর্বমোট ছাত্র / ছাত্রী সংখ্যা"
              required
              type="Number Of Beds"
            />
          </div>

          {/*Total Number of Nurses */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="ListOfServices" value="জামাত বা ক্লাসসমূহ " />
            </div>
            <TextInput
              id="ListOfServices"
              name="ListOfServices"
              onChange={handleInputChange}
              value={formData.ListOfServices}
              placeholder="জামাত বা ক্লাসসমূহ "
              required
              type="ListOfServices"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              onClick={() => redirect(`/createmadrasaprofile/staffInformation`)}
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

export default FacilitiesAndServices;
