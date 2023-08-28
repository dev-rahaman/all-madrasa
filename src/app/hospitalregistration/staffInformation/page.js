"use client";
import { Label, TextInput } from "flowbite-react";

const MedicalStaffInformation = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="text-center">Staff Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <div>
            {/* Chief Medical Officer's Name and Contact */}
            <div className="mb-2 block">
              <Label htmlFor="madrasaManager" value="মাদ্রাসার ম্যানেজার" />
            </div>
            <TextInput
              id="madrasaManager"
              placeholder="মাদ্রাসার ম্যানেজার"
              required
              type="madrasaManager"
            />
          </div>

          {/* Total Number of Doctors */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="TotalNumberOfDoctors"
                value="সর্বমোট উস্তাদের সংখ্যা "
              />
            </div>
            <TextInput
              id="TotalNumberOfDoctors"
              required
              type="TotalNumberOfDoctors"
              placeholder="সর্বমোট উস্তাদের সংখ্যা"
            />
          </div>

          {/*Total Number of Nurses */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="TotalNumberOfNurses"
                value="সর্বমোট খাদেম সংখ্যা"
              />
            </div>
            <TextInput
              id="TotalNumberOfNurses"
              required
              type="TotalNumberOfNurses"
              placeholder="সর্বমোট খাদেম সংখ্যা"
            />
          </div>
          <div className="flex items-center justify-end">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MedicalStaffInformation;
