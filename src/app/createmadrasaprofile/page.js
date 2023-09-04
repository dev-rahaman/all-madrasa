import React from "react";
import BasicInformation from "./basicInformation/BasicInformation";
import ContactInformation from "./contactInformation/page";
import LegalAndAdministrativeInformation from "./egalAndAdministrativeInformation/page";
import FacilitiesAndServices from "./facilitiesAndServices/page";
import MedicalStaffInformation from "./staffInformation/page";

const CreatemadrasaProfile = () => {
  return (
    <div>
      <BasicInformation />
      <ContactInformation />
      <LegalAndAdministrativeInformation />
      <FacilitiesAndServices />
      <MedicalStaffInformation />
    </div>
  );
};

export default CreatemadrasaProfile;
