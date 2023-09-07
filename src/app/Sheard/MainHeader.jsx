"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Classes from "./Classes";
import OutsideClickHandler from "../Functions/OutsideClickHandler";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#ea8b26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Link href={"/"}>
                <Image
                  src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
                  alt="Jamia Rashidia Feni"
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/top-ten"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  বাংলাদেশের টপ ১০ মাদ্রাসা
                </Link>
                <Link
                  href="/allMadrasaOfBangladesh"
                  className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  সব মাদ্রাসা
                </Link>
                <Classes />

                <Link
                  href="/classes"
                  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  অনলাইন ক্লাসসমূহ
                </Link>
                <Link
                  href="/authorization"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  একাউন্ট তৈরি করুন
                </Link>
                <Link
                  href="/madrasaregistration"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  একটি মাদ্রাসা রেজিস্ট্রেশন করুন
                </Link>
                <Link
                  href="/createmadrasaprofile"
                  className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  মাদ্রাসার প্রোফাইল তৈরী করুন
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={closeDropdown}>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#notice"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                বাংলাদেশের টপ ১০ মাদ্রাসা
              </Link>
              <Link
                href="/allMadrasaOfBangladesh"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                সব মাদ্রাসা
              </Link>

              <Link
                href="#contactInformation"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                অনলাইন ক্লাসসমূহ
              </Link>
              <Classes />
              <Link
                href="/Authorization/Resignation"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                একাউন্ট তৈরি করুন
              </Link>
              <Link
                href="/register"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                একটি মাদ্রাসা রেজিস্ট্রেশন করুন
              </Link>
              <Link
                href="/register"
                className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                মাদ্রাসার প্রোফাইল তৈরী করুন
              </Link>
              <Link
                href="/createmadrasaprofile"
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                মাদ্রাসার প্রোফাইল তৈরী করুন
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </nav>
  );
};

export default MainHeader;
