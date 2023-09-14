import { Button } from "@/app/Component/Componnts";
import {
  BlockQuitIcon,
  BoldIcon,
  HashTagIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  OrderListIcon,
  PhotoIcon,
} from "@/icon/page";
import React from "react";

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
  return (
    <div className="flex flex-col gap-y-5">
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
        {/* icons */}
        <div className="flex  gap-5 bg-gray-50 p-2">
          <button>
            <BoldIcon />
          </button>
          <button>
            <ItalicIcon />
          </button>
          <button>
            <LinkIcon />
          </button>
          <button>
            <PhotoIcon />
          </button>
          <button>
            <HashTagIcon />
          </button>
          <button>
            <ListIcon />
          </button>
          <button>
            <OrderListIcon />
          </button>
          <button>
            <BlockQuitIcon />
          </button>
        </div>
        <textarea
          id="content"
          name="content"
          required
          className="w-full h-[250px]"
        ></textarea>
      </div>

      <TextInput
        labelTitle={"Tag"}
        paragraph={"Minimum 5 tags is required"}
        name={"tag"}
      />

      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default AddBlog;
