import { MONGODB_URI } from "@/DB/db";
import { MadrasaInformation } from "@/DB/modal/madrasainformation";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(MONGODB_URI);
    const data = await MadrasaInformation.find();
    return NextResponse.json({ result: data, success: true, status: 200 });
  } catch (error) {
    data = { success: false };
  }
}
