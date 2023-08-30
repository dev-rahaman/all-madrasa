import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Chottogram from "./Chottogram";
import Dhaka from "./Dhaka";
import Rajshahi from "./Rajshahi";
import Khulna from "./Khulna";
import Barisal from "./Barisal";
import Rangpor from "./Rongpor";
import Monymonshing from "./Moymonshing";
import Silet from "./Silet";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">About us</h2>
            <nav>
              <ul>
                <li className="mb-2 my-2">
                  <Image
                    src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
                    alt="all madrasa.com"
                    width={100}
                    height={100}
                  ></Image>
                </li>
                <li>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat mauris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut consequat mauris
                  </p>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    About us
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    Our Team
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    What do we do
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">টপ ১০ মাদ্রাসা</h2>
            <nav>
              <ul>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    ঢাকার টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    চট্টগ্রামের টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    কুমিল্লার টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    রাজশাহীর টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    খুলনার টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    বরিশালের টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    সিলেটের টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    রংপুরের টপ ১০ মাদ্রাসা
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    ময়মনসিংহের টপ ১০ মাদ্রাসা
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3*/}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">
              জেলা ভিত্তিক মাদ্রাসাসমূহ{" "}
            </h2>
            <nav>
              <div className="block my-2">
                <Dhaka />
              </div>
              <div className="block my-2">
                <Chottogram />
              </div>
              <div className="block my-2">
                <Rajshahi />
              </div>
              <div className="block my-2">
                <Khulna />
              </div>
              <div className="block my-2">
                <Barisal />
              </div>
              <div className="block my-2">
                <Rangpor />
              </div>
              <div className="block my-2">
                <Monymonshing />
              </div>
              <div className="block my-2">
                <Silet />
              </div>
            </nav>
          </div>

          {/* Column 4*/}
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <nav>
              <ul>
                <li className="mb-2 my-2">
                  <Link
                    href="mailto:allmadrasa@admin.com"
                    className="hover:text-gray-400"
                  >
                    allmadrasa@admin.com
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="tel:0mt-4 block 1601313258"
                    className="hover:text-gray-400"
                  >
                    01601313258
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link href="#" className="mt-4 block hover:text-gray-400">
                    01601313258
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    rs-rahaman.com
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-5 flex-wrap">
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaFacebook size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaLinkedin size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaInstagram size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaWhatsapp size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaGithub size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaYoutube size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaPinterest size={25} />
                  </Link>
                </li>
                <li className="mb-2 my-2">
                  <Link
                    href="https://rs-rahaman.web.app/"
                    className="hover:text-gray-400"
                  >
                    <FaTwitter size={25} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
