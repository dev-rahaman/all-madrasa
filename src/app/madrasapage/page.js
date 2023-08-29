import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Overview from "./Overview";
import MadrasaMap from "./MadrasaMap";
import MadrasaNoticeBoard from "./MadrasaNoticeBoard";
import ImageGallery from "./ImageGallery";
import InstructorCard from "./InstructorCard";
import ContactInformation from "./ContactInformation";
import Feedback from "./Feedback";

const MadrasaPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Overview />
      <MadrasaNoticeBoard />
      <ImageGallery />
      <InstructorCard />
      <ContactInformation />
      <Feedback />
      <MadrasaMap />
    </>
  );
};

export default MadrasaPage;
