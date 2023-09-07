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
    return NextResponse.json({ result: error, success: false, status: 400 });
  }
}

export async function POST(request) {
  try {
    await mongoose.connect(MONGODB_URI);
    const data = await request.json();
    const madrasaInformation = new MadrasaInformation(data);
    const result = await madrasaInformation.save();
    return NextResponse.json({ result, status: 200, success: true });
  } catch (error) {
    // console.log(error.message);
  }
}
