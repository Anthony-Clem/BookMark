"use client";

import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return; // Prevent further execution
    }
    // Handle form submission
    console.log("Email submitted:", email);
    setValid(true);
  };

  return (
    <form
      className="h-12 flex gap-4 max-md:flex-col max-md:w-full"
      onSubmit={handleSubmit}
    >
      <div
        className={`${
          error ? "bg-[#FA5959]" : ""
        } p-[2px] rounded-[5px] flex flex-col h-[70px] transition`}
      >
        <input
          placeholder="Enter your email address"
          className={`px-5 py-[10px] text-sm tracking-[0.25px] text-[#242A45] text-opacity-25 rounded-[5px] h-12 max-md:w-full w-[300px] outline-none focus:text-[#242A45] ${
            valid ? "border-2 border-green-600" : ""
          } `}
          value={email}
          onChange={handleChange}
          spellCheck={false}
        />
        {error && (
          <p className="italic font-medium text-[10px] text-white tracking-[0.25px] mt-2 ml-2 transition">
            Whoops, make sure it’s a valid email
          </p>
        )}
      </div>
      <button className="text-medium text-sm tracking-[0.25px] text-white px-6 py-[10px] capitalize bg-[#FA5959] rounded-[5px] h-full max-md:w-full hover:bg-white hover:text-[#FA5959] transition border border-[#fa5959]">
        contact us
      </button>
    </form>
  );
}
