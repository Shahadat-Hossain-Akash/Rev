"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center w-full justify-between ">
        <Link href={"/"}>
          <Button
            endContent={<Image src={logo} width={50} height={50} alt="" />}
            className="text-xl md:text-3xl bg-transparent "
            disableRipple
          >
            Rev
          </Button>
        </Link>
        <Button className="rounded-b-[38px] rounded-t-large border-x-4 border-zinc-800 bg-transparent text-sm md:text-md font-light">
          Rent now
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
