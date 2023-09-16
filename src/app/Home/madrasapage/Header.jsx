import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ finalData }) => {
  const { madrasaName, madrasaRegistrationNumber, madrasaEstablished } =
    finalData;

  return (
    <div className="m-10">
      <Link href={"#"}>
        <Image
          src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
          alt="Jamia Rashidia Feni"
          width={150}
          height={150}
        ></Image>
      </Link>
      <h2 className="text-4xl font-bold mt-5">{madrasaName}</h2>
      <div className="flex items-center gap-5">
        <h4 lassName="text-4xl font-bold mt-5">
          স্থাপিত: {madrasaEstablished}
        </h4>
        <h4 lassName="text-4xl font-bold mt-5">
          রেজিস্ট্রেশন নম্বর:{madrasaRegistrationNumber}
        </h4>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <Link href={""}></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
