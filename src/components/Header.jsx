"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo-bookmark.svg";
import hamburgerMenu from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import MobileLogo from "./MobileLogo";

export default function Header({ toggle, setToggle }) {
  const handleToggle = () => {
    setToggle(!toggle); // Toggle the state
  };

  const navItems = ["features", "pricing", "contact"];

  return (
    <header className="h-[25px] flex items-center justify-between relative">
      <Image src={logo} alt="logo" width={149} height={25} />
      <nav
        className={`flex items-center uppercase gap-12 max-md:hidden ${
          toggle ? "hidden" : "block"
        }`}
      >
        <ul className="flex text-[13px] tracking-[1.5px] leading-[17px] text-[#242A45] items-center gap-11">
          {navItems.map((navItem) => (
            <li
              key={navItem}
              className="hover:text-[#FA5959] transition cursor-pointer"
            >
              {navItem}
            </li>
          ))}
        </ul>
        <button className="text-[13px] tracking-[1.5px] leading-[17px] text-white font-medium px-[34px] py-3 bg-[#FA5959] border border-[#FA5959] rounded-[5px] hover:bg-white hover:text-[#FA5959] transition">
          Login
        </button>
      </nav>
      <Image
        src={toggle ? close : hamburgerMenu}
        alt="hamburger menu"
        height={15}
        width={18}
        className="hidden max-md:block z-10 cursor-pointer"
        onClick={handleToggle}
      />
    </header>
  );
}
