import { Button } from "@/app/Component/Componnts";
import React from "react";
import { Input } from "../video/page";

const Photo = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="bg-gray-200 p-5 rounded-2xl w-[920px]">
        <label htmlFor={"description"}>description</label>
        <span className="block">{"ভিডিও ডেসক্রিপশন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px] resize-none border-0 rounded-2xl outline-0  focus:outline-none focus:border-0"
        />
        <Input
          type={"file"}
          inputId={"photo"}
          name={"photo"}
          labelName={"photo"}
          labelTitle={"ফটো"}
          paragraph={"একটি ফটো সিলেক্ট করুন"}
        />
      </div>
      {/* Photo */}

      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default Photo;
