"use server";
import { MONGODB_URI } from "@/DB/db";
import { BlogsData } from "@/DB/modal/madrasainformation";
import mongoose from "mongoose";

export const handleFromSubmit = async (formData) => {
  try {
    await mongoose.connect(MONGODB_URI);
    let newDate = new Date();
    const blogs = new BlogsData({
      _id: new mongoose.Types.ObjectId(),
      title: formData.get("title"),
      content: formData.get("content"),
      tags: formData.get("tags"),
      createdAt: newDate,
    });
    await blogs.save();
    mongoose.connection.close();
  } catch (error) {
    console.log(error.message);
  }
};
