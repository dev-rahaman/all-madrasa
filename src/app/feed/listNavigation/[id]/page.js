import Link from "next/link";
import React from "react";

const shorts = [
  {
    id: "1",
    link: "1",
    name: "button 1",
  },
  {
    id: "2",
    link: "2",
    name: "button  2",
  },
  {
    id: "3",
    link: "3",
    name: "button 3",
  },
  {
    id: "4",
    link: "4",
    name: "button 4",
  },
  {
    id: "5",
    link: "5",
    name: "button 5",
  },
];

const ShortVideo = () => {
  return (
    <div className="short-container">
      {shorts.map((short, idx) => (
        <div key={idx} className="  w-[700px] flex items-center justify-center">
          {
            <div className="short">
              <Link
                href={short.link}
                className=" block p-2 m-2 cursor-pointer bg-red-200  w-[400px] h-[650px] my-2"
              >
                {short.name}
              </Link>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default ShortVideo;
