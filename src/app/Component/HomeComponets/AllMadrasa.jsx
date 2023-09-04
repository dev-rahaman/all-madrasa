import Link from "next/link";
import React from "react";
import Title from "../Title";
const allmadrasa = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barisal",
  "Bhola",
  "Bogra",
  "Brahamanbaria",
  "Chandpur",
  "Chittagong",
  "Chuadanga",
  "Comilla",
  "Coxsbazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jessore",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Maulvibazar",
  "Meherpur",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Nawabganj",
  "Netrakona",
  "Nilphamari",
  "Noakhali",
  "Norail",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

const AllMadrasa = () => {
  return (
    <div>
      <Title
        heading={"All Madrasa of Bangladesh by"}
        headingStyle={"District"}
        paragraph={
          "We simplify website creation and launch with a few easy steps. Our goal is a stress-free experience, ensuring your new site comes together effortlessly."
        }
      />
      <div className="flex items-center justify-center gap-5 flex-wrap lg:m-10 m-5">
        {allmadrasa.map((district, idx) => (
          <Link
            key={idx}
            href={district}
            className="inline-block text-center w-[150px] p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            {district}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllMadrasa;
