"use client";
import { calculateCarRent, generateCarImage } from "@/lib/utils";
import img from "@/public/assets/arrow.png";
import { Button, Card, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { PiGearSixLight, PiSteeringWheel } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import CarDetailsModal from "./CarDetailsModal";

interface Props {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface carProps {
  cars: Props;
}

const Cars = ({ cars }: any) => {
  const [open, setOpen] = useState(false);
  const { model, make, year, combination_mpg } = cars;
  return (
    <div className="">
      {[cars].map((car) => (
        <>
          <Card
            key={model}
            shadow="none"
            radius="lg"
            className="border-none relative min-h-[40vh] flex items-center bg-[#f3f3f4] px-2 w-full"
          >
            <CardHeader className="flex items-center justify-between gap-2 py-2  mt-2 rounded-large  subpixel-antialiased">
              <div className="text-4xl flex items-end gap-2 text-zinc-800 flex-wrap md:flex-nowrap">
                <p className="text-xl md:text-2xl capitalize">{make} </p>
                <p className="text-xl md:text-2xl">{model}</p>
              </div>
              <div className="flex text-xl overflow-hidden p-2 rounded-large text-zinc-800 bg-[#d9d9d9]/20 cursor-pointer">
                <span className="text-sm self-start">$ </span>
                {calculateCarRent(year, combination_mpg)}
                <span className="text-sm self-end"> /day</span>
              </div>
            </CardHeader>
            <Image
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-lg"
              src={generateCarImage(cars, "19", "front")}
            />
            <Button
              onPress={() => setOpen(!open)}
              className=" py-4 absolute rounded-full bg-zinc-800  w-[calc(100%_-_24px)] shadow-small z-10 bottom-2 h-unit-12"
              endContent={
                <Image
                  src={img}
                  width={30}
                  height={30}
                  alt=""
                  aria-label="icon"
                />
              }
            >
              <p className="text-sm text-white/80">View more</p>
            </Button>

            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-full  w-[calc(100%_-_24px)] shadow-small z-10 bottom-16 color-inherit subpixel-antialiased backdrop-blur backdrop-saturate-150 color-inherit    bg-[#d9d9d9]/20">
              <div className="flex w-full justify-between rounded-full ">
                <Chip
                  variant="light"
                  color="warning"
                  className="flex p-1 py-0 md:py-1 gap-2 h-full text-sm md:text-md w-1/3 bg-zinc-800/70"
                  endContent={<PiSteeringWheel size={24} />}
                >
                  <p className="text-sm md:text-md text-white">
                    {car.transmission === "a" ? "Auto" : "Manual"}
                  </p>
                </Chip>
                <Chip
                  variant="light"
                  color="success"
                  className="flex p-1 py-0 md:py-1 gap-2 h-full text-sm md:text-md w-1/3  bg-zinc-800/70"
                  endContent={<SlSpeedometer size={24} />}
                >
                  <p className="text-sm md:text-md text-white">
                    {car.highway_mpg}
                  </p>
                </Chip>
                <Chip
                  variant="light"
                  color="warning"
                  className="flex p-1 py-0 md:py-1 gap-2 h-full text-sm md:text-md w-1/3  bg-zinc-800/70"
                  endContent={<PiGearSixLight size={24} />}
                >
                  <p className="text-sm md:text-md text-white">
                    {car.drive.toUpperCase()}
                  </p>
                </Chip>
              </div>
            </CardFooter>
          </Card>
          <CarDetailsModal cars={car} open={open} setOpen={setOpen} />
        </>
      ))}
    </div>
  );
};

export default Cars;
