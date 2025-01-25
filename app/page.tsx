import Link from "next/link";
import React from "react";
import SampleButton from "./components/sampleButton";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <p className="text-5xl animate-bounce font-medium tracking-tight">
        Hello World
      </p>
      <Link href="/sample" className="font-medium animate-bounce">
        Navigate to sample
      </Link>
      <SampleButton />
    </div>
  );
};

export default page;
