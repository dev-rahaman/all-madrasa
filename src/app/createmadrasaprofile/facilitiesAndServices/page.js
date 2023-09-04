"use client";
import { Label, TextInput } from "flowbite-react";

// import MedicalStaffInformation from "../../madrasaregistration/staffInformation/page";
import { useState } from "react";

const FacilitiesAndServices = () => {
  const [showStaffInformation, setShowStaffInformation] = useState("hidden");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowStaffInformation("block");
  };

  return (
    <>
      <h2 className="text-center">Services Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleFormSubmit}
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
              required
              type="ListOfServices"
              placeholder="জামাত বা ক্লাসসমূহ "
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
      {/* <div className={`${showStaffInformation}`}>
        <MedicalStaffInformation />
      </div> */}
    </>
  );
};

export default FacilitiesAndServices;
