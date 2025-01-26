import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center w-full h-screen">
      <p className="text-5xl font-medium tracking-tight">My Shop</p>
      <Link
        href="/products"
        className="bg-white text-black px-4 py-2 rounded-full font-medium hover:shadow-[0px_4px_23px_-7px_#ffffff] transition duration-300 tracking-tight"
      >
        Browse Products
      </Link>
    </div>
  );
};

export default page;
