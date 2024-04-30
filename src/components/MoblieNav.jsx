import React from "react";
import MobileLogo from "./MobileLogo";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import Image from "next/image";

export default function MoblieNav({ toggle }) {
  const navItems = ["features", "pricing", "contact"];
  const socials = [
    { logo: facebook, name: "facebook" },
    { logo: twitter, name: "twitter" },
  ];
  return (
    <div
      className={`absolute top-0 left-0 w-full py-12 px-5 z-10 bg-[#242A45] bg-opacity-95 transition ${
        toggle ? "" : "hidden"
      }`}
    >
      <MobileLogo white={"#fff"} navy={"#242A45"} />
      <ul className="flex flex-col items-center w-full border-y mt-10">
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className={`w-full text-center py-6 text-[20px] leading-[17px] text-white tracking-[2.31px] uppercase hover:text-[#FA5959] transition cursor-pointer ${
              index !== 2 ? "border-b" : ""
            }`}
          >
            {navItem}
          </li>
        ))}
      </ul>
      <button className="border border-white w-full py-4 mt-6 text-xl leading-[17px] tracking-[2.31px] font-medium text-white mb-[239px] hover:bg-white hover:text-[#242A45] hover:text-opacity-95 transition">
        Login
      </button>
      <div className="flex items-center gap-10 justify-center">
        {socials.map((social, index) => (
          <Image
            src={social.logo}
            alt={social.name}
            height={24}
            width={24}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
