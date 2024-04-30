"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrow from "../assets/icon-arrow.svg";

export default function Questions() {
  const questions = [
    {
      question: "What is Bookmark?",
      answer:
        "Bookmark is a browser extension that allows users to save and organize their favorite websites or pages for quick access. It helps users to easily revisit their saved content without having to remember or search for the URLs.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "To request a new browser, please visit our official website and navigate to the 'Contact Us' page. You can fill out the contact form and select 'Browser Request' as the subject. Our support team will review your request and get back to you as soon as possible.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes, Bookmark also offers a mobile app available for both iOS and Android devices. You can download the app from the Apple App Store or Google Play Store. The mobile app provides similar functionality to the browser extension, allowing you to access your saved bookmarks on the go.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Bookmark is compatible with most Chromium-based browsers, including Google Chrome, Microsoft Edge, Opera, and Brave. You can install the Bookmark extension from the respective browser's extension store and enjoy the same features and functionality across different Chromium browsers.",
    },
  ];

  const [openedQuestions, setOpenedQuestions] = useState(
    Array(questions.length).fill(false)
  );

  const handleToggleQuestion = (index) => {
    const newOpenedQuestions = [...openedQuestions];
    newOpenedQuestions[index] = !newOpenedQuestions[index];
    setOpenedQuestions(newOpenedQuestions);
  };

  return (
    <div className="flex flex-col items-center max-w-[540px] mr-auto ml-auto mb-[150px] mx-5">
      <h1 className="font-medium text-[32px] leading-[52px] tracking-[-0.1px] text-[#242A45] mb-4 max-lg:text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-[#242A45] opacity-50 text-lg max-w-[540px] text-center mb-14">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul className="w-full mb-14">
        {questions.map((question, index) => (
          <li
            key={index}
            className="w-full border-y border-[#979797] border-opacity-[14.77%] pt-5 pb-4 max-md:px-5"
          >
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => handleToggleQuestion(index)}
            >
              <p className="text-lg text-[#242A45] leading-8 max-sm:text-left hover:text-[#FA5959] transition">
                {question.question}
              </p>
              <Image
                src={arrow}
                alt="arrow"
                width={16}
                height={8}
                className={openedQuestions[index] ? "rotate-180" : ""}
              />
            </button>
            {openedQuestions[index] && (
              <p className="mt-8 text-base leading-9 tracking-[0.15px] text-[#242A45] opacity-75">
                {question.answer}
              </p>
            )}
          </li>
        ))}
      </ul>
      <button className="font-medium text-sm leading-7 tracking-[0.25px] text-white px-6 py-[10px] rounded-[5px] bg-[#5267DF] border-[#5267DF] hover:text-[#5267df] hover:bg-white transition w-[117px] border">
        More Info
      </button>
    </div>
  );
}
