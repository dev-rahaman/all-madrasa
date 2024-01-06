import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// const ContactInformation = ({ finalData }) => {
const ContactInformation = () => {
  return (
    <div
      id="contactInformation"
      className="p-4 rounded-md shadow-md m-8 bg-gray-300"
    >
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <div className="mb-2">
        <span className="font-bold">Address: </span>
        {"finalData.madrasaAddress"}
      </div>
      <div className="mb-2">
        <a href="tel: 01601313258"> {"finalData.madrasaNumber"}</a>
      </div>
      <div className="mb-2">
        <a href="mailto:jamiarashidia@gmail.com"> {"finalData.madrasaEmail"}</a>
      </div>
      <div className="mb-2">
        <a href="https://rs-rahaman.web.app/" target="_blank">
          {"finalData.madrasaWebsite"}
        </a>
      </div>
      <div className="flex gap-3">
        <a href="" target="_blank">
          <FaFacebook size={32} className="text-[#1877f2] cursor-pointer" />
        </a>
        <a href="" target="_blank">
          <FaYoutube size={32} className="text-[#ff0000] cursor-pointer" />
        </a>
        <a href="" target="_blank">
          <FaTwitter size={32} className="text-[#1da1f2] cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ContactInformation;
