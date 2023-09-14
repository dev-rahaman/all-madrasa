"use client";
import { Button } from "@/app/Component/Componnts";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export const TextInput = ({
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

const Notice = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const joditConfig = {
    disablePlugins: ["POWERED BY JODIT"],
  };

  return (
    <div className="flex flex-col gap-y-5">
      <TextInput
        type={"text"}
        labelTitle={"Notice Title"}
        labelName={"Notice"}
        inputId={"Notice"}
        paragraph={
          " Introduce the problem and expand on what you put in the title. Minimum 20 characters."
        }
        name={"title"}
      />

      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor="title">Content</label>
        <span className="block">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </span>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          config={joditConfig}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>

      <TextInput
        type={"text"}
        labelTitle={"Tag"}
        labelName={"Tag"}
        inputId={"Tag"}
        paragraph={"Minimum 5 tags is required"}
        name={"tag"}
      />
      <TextInput
        type={"text"}
        labelTitle={"Date"}
        labelName={"Date"}
        inputId={"Date"}
        paragraph={"এখানে আজকের ডেট লিখুন।"}
        name={"tag"}
      />
      <TextInput
        type={"text"}
        labelTitle={"principal"}
        labelName={"principal"}
        inputId={"principal"}
        paragraph={"এখানে অধ্যক্ষের অধ্যক্ষের নাম ডেট লিখুন।"}
        name={"tag"}
      />
      <TextInput
        type={"text"}
        labelTitle={"মাদ্রাসা নাম"}
        labelName={"madrasaName"}
        inputId={"madrasaName"}
        paragraph={"এখানে মাদ্রাসার নাম লিখুন।"}
        name={"tag"}
      />
      <TextInput
        type={"file"}
        labelTitle={"মাদ্রাসা সীল"}
        labelName={"sill"}
        inputId={"sill"}
        paragraph={"এখানে মাদ্রাসার সীল দিন"}
        name={"tag"}
      />
      <TextInput
        type={"text"}
        labelTitle={"মাদ্রাসার স্থান"}
        labelName={"place"}
        inputId={"place"}
        paragraph={"এখানে মাদ্রাসার স্থান লিখুন।"}
        name={"tag"}
      />
      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default Notice;
