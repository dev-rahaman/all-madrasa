import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Overview from "./Overview";
import MadrasaMap from "./MadrasaMap";
import MadrasaNoticeBoard from "./MadrasaNoticeBoard";
import ImageGallery from "./ImageGallery";

const MadrasaPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Overview />
      <MadrasaNoticeBoard />
      <ImageGallery />
      <MadrasaMap />
    </>
  );
};

export default MadrasaPage;
