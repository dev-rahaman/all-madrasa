"use client";
import { AuthContext } from "@/Provider/AuthProvider";
import OutsideClickHandler from "@/app/Component/Functions/OutsideClickHandler";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navbarItem = [
  { link: { href: "#overview", text: "ওভারভিউ" } },
  { link: { href: "#notice", text: "নোটিশঃ" } },
  { link: { href: "#gallery", text: "গ্যালারি" } },
  { link: { href: "#feedback", text: "ফিডব্যাক" } },
  { link: { href: "#instructors", text: "উস্তাদ" } },
  { link: { href: "#contactInformation", text: "কন্টাক ইনফরমেশন" } },
  { link: { href: "#map", text: "ম্যাপ" } },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full z-50 bg-gray-800 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <Link href={"#"}>
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
                {navbarItem.map((item, idx) => (
                  <Link
                    href={item?.link.href}
                    key={idx}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item?.link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={openDropdown}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
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
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navbarItem.map((item, idx) => (
                <Link
                  href={item?.link.href}
                  key={idx}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item?.link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </nav>
  );
};

export default Navbar;
