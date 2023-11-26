import React from "react";

const shorts = [
  {
    id: "1",
    link: "1",
    name: "1",
  },
];

const Page = () => {
  return (
    <div>
      {shorts.map((short, idx) => (
        <div key={idx}>
          {<p className="bg-red-200 p-2 m-2 cursor-pointer">{short}</p>}
        </div>
      ))}
    </div>
  );
};

export default Page;
