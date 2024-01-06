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
  // const MadrasaPage = ({ data, covertMadrasaNameOfURL }) => {
  // const selectedMadrasa = data.find(
  //   (item) => item.madrasaName === covertMadrasaNameOfURL
  // );

  // if (!selectedMadrasa) {
  //   return <div>Madrasa not found</div>;
  // }

  return (
    <>
      <div>
        {/* <Header finalData={selectedMadrasa} />
        <Navbar />
        <Overview finalData={selectedMadrasa} />
        <MadrasaNoticeBoard finalData={selectedMadrasa} />
        <ImageGallery finalData={selectedMadrasa} />
        <InstructorCard finalData={selectedMadrasa} />
        <ContactInformation finalData={selectedMadrasa} />
        <Feedback />
        <MadrasaMap /> */}
        <Header />
        <Navbar />
        <Overview />
        <MadrasaNoticeBoard />
        <ImageGallery />
        <InstructorCard />
        <ContactInformation />
        <Feedback />
        <MadrasaMap />
      </div>
    </>
  );
};

export default MadrasaPage;
