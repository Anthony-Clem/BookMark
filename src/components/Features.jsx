"use client";

import Image from "next/image";
import illustration1 from "../assets/illustration-features-tab-1.svg";
import illustration2 from "../assets/illustration-features-tab-2.svg";
import illustration3 from "../assets/illustration-features-tab-3.svg";
import { useState } from "react";

export default function Features() {
  const features = [
    {
      img: illustration1,
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      img: illustration2,
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      img: illustration3,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex to 0

  const featuresSlider = [
    "Simple Bookmarking",
    "Speedy Searching",
    "Easy Sharing",
  ];

  const handleToggle = (index) => {
    setActiveIndex(index); // Set the activeIndex to the clicked index
  };

  const feature = features[activeIndex];

  return (
    <>
      <div className="w-full flex items-center justify-between border-b border-[#495DCF] border-opacity-20 mb-[72px] max-md:flex-col">
        {featuresSlider.map((feature, index) => (
          <button
            key={index}
            className={`transition pt-5 w-full max-md:border-t max-md:border-opacity-20 border-[#495DCF] hover:text-[#FA5959] flex justify-center`}
            onClick={() => handleToggle(index)}
          >
            <p
              className={`pb-[17px] ${
                activeIndex === index
                  ? "border-b-4 border-b-[#FA5959] w-full max-sm:w-[161px] border-opacity-100"
                  : ""
              }`}
            >
              {feature}
            </p>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-[125px] max-lg:gap-[80px] max-lg:flex-col">
        <Image
          src={feature.img}
          alt="UI illustration"
          width={536}
          height={346}
        />
        <div className="flex flex-col max-lg:items-center max-lg:w-[536px] max-md:w-full">
          <h2 className="font-medium text-[32px] leading-[52px] tracking-[-0.1px] text-[#242A45] mb-4 max-sm:text-center">
            {feature.title}
          </h2>
          <p className="text-lg text-[#242A45] opacity-50 mb-8 max-lg:text-center">
            {feature.text}
          </p>
          <button className="font-medium text-sm leading-7 tracking-[0.25px] text-white px-6 py-[10px] rounded-[5px] bg-[#5267DF] border-[#5267DF] hover:text-[#5267df] hover:bg-white transition w-[117px] border">
            More Info
          </button>
        </div>
      </div>
    </>
  );
}
