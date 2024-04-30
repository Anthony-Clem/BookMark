"use client";

import React, { useState } from "react";
import MoblieNav from "./MoblieNav";
import Marketing from "./Marketing";
import Extentions from "./Extentions";
import Questions from "./Questions";
import Hero from "./Hero";

export default function Main() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <MoblieNav toggle={toggle} />
      <main className="ml-auto pt-12 mr-auto max-w-[1110px] z-0">
        <Hero toggle={toggle} setToggle={setToggle} />
        <Marketing />
        <Extentions />
        <Questions />
      </main>
    </>
  );
}
