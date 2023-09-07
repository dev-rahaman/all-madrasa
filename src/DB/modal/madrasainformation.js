const mongoose = require("mongoose");

const madrasaInformationModal = new mongoose.Schema({
  madrasaName: String,
  madrasaDescription: String,
  madrasaDistrict: String,
  madrasaPoliceStation: String,
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
  madrasaRegistrationNumber: String,
  madrasaStudents: String,
  madrasaClasses: String,
  madrasaManager: String,
  madrasaTeacher: String,
  madrasaServant: String,
});

export const MadrasaInformation =
  mongoose.models.madrasainformatioins ||
  mongoose.model("madrasainformatioins", madrasaInformationModal);
