"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoveIcon, MessageIcon, ShearIcon, ViewIcon } from "@/icon/page";
import { useRouter } from "next/navigation";

const Short = ({ id, views, like, message, shear }) => {
  const router = useRouter();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      router.push(`/feed/short/${id}`, undefined, { shallow: true });
    }
  }, [inView, id]);

  return (
    <div ref={ref} className="short-container my-5 shortCls">
      <div className="short flex items-center mt-5 ms-44">
        <div className="bg-red-200 w-[350px] h-[560px]"></div>
        <div className="space-y-5 ms-2">
          <div className="flex items-center justify-center flex-col">
            <ViewIcon />
            <span>{views}</span>
          </div>
          <div className="flex items-center justify-center flex-col ">
            <LoveIcon />
            <span>{like}</span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <MessageIcon />
            <span>{message}</span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <ShearIcon />
            <span>{shear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Short;
