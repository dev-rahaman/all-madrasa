const mongoose = require("mongoose");

const madrasaInformationModal = new mongoose.Schema({
  madrasaName: String,
  madrasaRegistrationNumber: String,
  madrasaEstablished: String,
  madrasaDistrict: String,
  madrasaPoliceStation: String,
  madrasaTeacher: String,
  madrasaServant: String,
  madrasaStudents: String,
  madrasaDescription: String,
  madrasaVillage: String,
  madrasaType: String,
  madrasaLogo: String,
  madrasaGallery1: String,
  madrasaGallery2: String,
  madrasaGallery3: String,
  madrasaAddress: String,
  madrasaNumber: String,
  madrasaEmail: String,
  madrasaWebsite: String,
  madrasaClasses: String,
  madrasaManager: String,
});

export const MadrasaInformation =
  mongoose.models.madrasainformatioins ||
  mongoose.model("madrasainformatioins", madrasaInformationModal);

// madrasa registration schema
const madrasaRegistrationModal = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

export const MadrasaRegistration =
  mongoose.models.madrasaRegistrations ||
  mongoose.model("madrasaRegistrations", madrasaRegistrationModal);

// madrasa registration schema
const blogsModal = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  tags: String,
  createdAt: { type: Date, default: Date.now },
});

export const BlogsData =
  mongoose.models.blogs || mongoose.model("blogs", blogsModal);
