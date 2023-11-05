"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import main from "@/public/assets/mainImg.png";
import About from "./About";

const Landing = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gradient-to-b from-[#d9d9d9] to-[#d9d9d91e] flex flex-col bg-opacity-20  h-full w-full rounded-[48px] px-14 py-8 gap-8">
        <Navbar />
        <div className="text-xl sm:text-5xl md:text-[72px] flex flex-col justify-center text-center  md:text-justify items-center px-12 font-semibold">
          <p>Find and rent a car-</p>
          <p>quick and super easy!</p>
        </div>
        <p className="text-sm md:text-base font-medium text-center">
          Streamline your car rental experiences with our amazing booking
          process effortlessly
        </p>
        <div className="flex items-center aspect-w-16 aspect-h-9 justify-center">
          <Image src={main} alt="" />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Landing;
