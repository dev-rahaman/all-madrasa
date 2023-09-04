import React from "react";

const Advice = ({ heading, title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blend-darken bg-[url('/dini-ilm.jpg')] p-10 my-20 w-2/3 rounded-lg bg-cover bg-center">
        <div>
          <h2 className="font-bold text-5xl text-[#ea8b26] ">{heading}</h2>
          <h2 className="font-bold text-end text-[#ea8b26] ">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Advice;
