"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import { Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useEffect } from "react";

const LegalAndAdministrativeInformation = () => {
  const { redirect, handleInputChange, isFormEmpty, formData, setFormData } =
    useContext(AuthContext);

  const initialFormData = {
    registrationNumber: "",
    OwnershipType: "",
    description: "",
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEmpty()) {
      redirect("/createmadrasaprofile/facilitiesAndServices");
    }
  };

  return (
    <>
      <h2 className="text-center">Legal Information</h2>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            {/* RegistrationNumber */}
            <div className="mb-2 block">
              <Label htmlFor="registrationNumber" value="রেজিস্ট্রেশন নম্বর " />
            </div>

            <TextInput
              id="registrationNumber"
              name="registrationNumber"
              onChange={handleInputChange}
              value={formData.registrationNumber}
              placeholder="রেজিস্ট্রেশন নম্বর অপশনাল "
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
              name="OwnershipType"
              onChange={handleInputChange}
              value={formData.OwnershipType}
              placeholder="মালিকানার ধরন উদাহরণ (প্রাইভেট, লোকাল)"
              required
              type="OwnershipType"
            />
          </div>
          {/* Description */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Description" value="মালিকানার ধরন" />
            </div>
            <Textarea
              className="resize-none h-[200px]"
              id="description"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
              placeholder="এখানে মাদ্রাসার সম্পর্কে বিস্তারিত লিখুন।"
              required
              type="description"
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

export default LegalAndAdministrativeInformation;
