"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import { Label, TextInput } from "flowbite-react";
import { useContext, useEffect } from "react";

const MedicalStaffInformation = () => {
  const { redirect, handleInputChange, isFormEmpty, formData, setFormData } =
    useContext(AuthContext);

  const initialFormData = {
    madrasaManager: "",
    TotalNumberOfTeacher: "",
    TotalNumberOfNurses: "",
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <form
          className="flex lg:w-[500px] flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            {/* Chief Medical Officer's Name and Contact */}
            <div className="mb-2 block">
              <Label htmlFor="madrasaManager" value="মাদ্রাসার ম্যানেজার" />
            </div>

            <TextInput
              id="madrasaManager"
              name="madrasaManager"
              onChange={handleInputChange}
              value={formData.madrasaManager}
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
              id="TotalNumberOfTeacher"
              name="TotalNumberOfTeacher"
              onChange={handleInputChange}
              value={formData.TotalNumberOfDoctors}
              placeholder="সর্বমোট উস্তাদের সংখ্যা"
              required
              type="TotalNumberOfTeacher"
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
              name="TotalNumberOfNurses"
              onChange={handleInputChange}
              value={formData.TotalNumberOfNurses}
              placeholder="সর্বমোট খাদেম সংখ্যা"
              required
              type="TotalNumberOfNurses"
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MedicalStaffInformation;
