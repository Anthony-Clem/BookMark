import React from "react";
import logo from "../assets/logo-bookmark.svg";
import Image from "next/image";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import Logo from "./Logo";

export default function Footer() {
  const navItems = ["features", "pricing", "contact"];
  const socials = [
    { logo: facebook, name: "facebook" },
    { logo: twitter, name: "twitter" },
  ];
  return (
    <footer className="bg-[#242A45] py-8 max-w-full px-5">
      <div className="ml-auto mr-auto max-w-[1110px] flex items-center justify-between max-md:flex-col max-md:gap-10">
        <div className="flex items-center gap-[63px] max-sm:gap-10 max-md:flex-col">
          <Logo fill={"#fff"} />
          <ul className="flex items-center gap-11 text-[13px] leading-[17px] text-white tracking-[1.5px] uppercase max-sm:flex-col">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className="hover:text-[#FA5959] transition cursor-pointer"
              >
                {navItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-10 max-sm:flex-col">
          {socials.map((social, index) => (
            <Image
              src={social.logo}
              alt={social.name}
              height={24}
              width={24}
              key={index}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
