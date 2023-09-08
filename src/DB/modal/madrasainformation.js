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
