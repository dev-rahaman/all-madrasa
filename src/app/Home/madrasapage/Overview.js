import React from "react";
import SubscribeForm from "./SubscribeForm";
import Disclaimer from "./Disclaimer";
import Donation from "./Donation";

const Overview = ({ finalData }) => {
  const {
    madrasaTeacher,
    madrasaServant,
    madrasaStudents,
    madrasaDescription,
  } = finalData;

  return (
    <>
      <div className="flex justify-around mt-10 ">
        <div className="flex  items-center justify-center  w-[350px] custom-rounded shadow h-[200px] border rounded-b-lg bg-gray-50 ">
          <h2 className="text-4xl font-extrabold">
            #উস্তাদ {madrasaTeacher} জন
          </h2>
        </div>
        <div className="flex  items-center justify-center  w-[350px] custom-rounded  shadow h-[200px] border rounded-b-lg bg-gray-50 ">
          <h2 className="text-4xl font-extrabold">
            #খাদেম {madrasaServant} জন
          </h2>
        </div>
        <div className="flex items-center justify-center w-[350px] custom-rounded shadow h-[200px] border bg-gray-50">
          <h2 className="text-4xl font-extrabold">
            # ছাত্র {madrasaStudents} জন
          </h2>
        </div>
      </div>

      <div id="overview" className="flex  m-5">
        <div className="w-1/3 ">
          <SubscribeForm />
          <Disclaimer />
          <Donation />
        </div>
        <div className=" leading-8	 bg-gray-100 w-2/3 p-4 rounded">
          <h3>{madrasaDescription}</h3>
        </div>
      </div>
    </>
  );
};

export default Overview;
