"use client";
import React from "react";

const SampleButton = () => {
  return (
    <button
      className="bg-slate-100 text-zinc-900 font-semibold px-4 py-2 rounded-full animate-bounce"
      onClick={() => console.log("Print")}
    >
      Click to Print
    </button>
  );
};

export default SampleButton;
