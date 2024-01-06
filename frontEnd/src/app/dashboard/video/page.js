import { Button } from "@/app/Component/Componnts";
import React from "react";

export const Input = ({
  labelName,
  labelTitle,
  paragraph,
  name,
  inputId,
  type,
}) => {
  return (
    <div className="bg-gray-200 p-5 rounded w-[900px]">
      <label htmlFor={labelName}>{labelTitle}</label>
      <span className="block">{paragraph}</span>
      <input type={type} id={inputId} name={name} required className="w-full" />
    </div>
  );
};

const Video = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {/* video */}
      <Input
        type={"file"}
        inputId={"video"}
        name={"video"}
        labelName={"video"}
        labelTitle={"ভিডিও"}
        paragraph={"একটি ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <Input
        type={"text"}
        name={"video title"}
        inputId={"videotitle"}
        labelName={"videotitle"}
        labelTitle={"ভিডিও"}
        paragraph={"ভিডিও টাইটেল"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>description</label>
        <span className="block">{"ভিডিও ডেসক্রিপশন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px]"
        />
      </div>

      {/* video */}
      <Input
        type={"file"}
        inputId={"Thumbnail"}
        name={"Thumbnail"}
        labelName={"Thumbnail"}
        labelTitle={"থাম্বনেইল"}
        paragraph={"একটি ভিডিও থাম্বনেইল সিলেক্ট করুন"}
      />

      {/* playlist */}
      <select>
        <option>Select a playlist</option>
        <option>name1</option>
        <option>name2</option>
        <option>name3</option>
        <option>name4</option>
        <option>name5</option>
      </select>
      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default Video;
