"use client";
import { Button } from "@/app/Component/Componnts";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { handleFromSubmit } from "../DashboardComponents/FromSubmit";

export const TextInput = ({ labelTitle, paragraph, name }) => {
  return (
    <div className="bg-gray-200 p-5 rounded w-[900px]">
      <label htmlFor="title">{labelTitle}</label>
      <span className="block">{paragraph}</span>
      <input type="text" id="title" name={name} required className="w-full" />
    </div>
  );
};

const AddBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const joditConfig = {
    disablePlugins: ["POWERED BY JODIT"],
  };

  return (
    <form action={handleFromSubmit} className="flex flex-col gap-y-5">
      <TextInput
        labelTitle={"Title"}
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
          name={"content"}
        />
      </div>

      <TextInput
        labelTitle={"Tag"}
        paragraph={"Minimum 5 tags is required"}
        name={"tags"}
      />

      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
      {content}
    </form>
  );
};

export default AddBlog;
