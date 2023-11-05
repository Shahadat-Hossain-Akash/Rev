"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { generateCarImage } from "@/lib/utils";

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

const CarDetailsModal = ({ open, setOpen, cars }: any) => {
  console.log(cars);
  return (
    <div>
      <Modal
        isOpen={open}
        onOpenChange={() => setOpen(!open)}
        classNames={{
          closeButton: "z-10 shadow-sm bg-white",
        }}
      >
        <ModalContent>
          {() => (
            <>
              {" "}
              <ModalHeader className="flex flex-col gap-2 items-center ">
                {" "}
                <div className="relative w-full h-40 bg-cover bg-center rounded-xl bg-[#f3f3f4] ">
                  {" "}
                  <Image
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    className="rounded-lg"
                    src={generateCarImage(cars)}
                  />
                </div>
                <div className="flex gap-2 w-full">
                  <div className="flex w-full relative h-24 rounded-xl bg-[#f3f3f4]">
                    <Image
                      alt=""
                      fill
                      priority
                      className="object-contain"
                      src={generateCarImage(cars, "33")}
                    />
                  </div>
                  <div className="flex w-full relative h-24 rounded-xl bg-[#f3f3f4]">
                    <Image
                      alt=""
                      fill
                      priority
                      className="object-contain"
                      src={generateCarImage(cars, "29")}
                    />
                  </div>
                  <div className="flex w-full relative h-24 rounded-xl bg-[#f3f3f4]">
                    <Image
                      alt=""
                      fill
                      priority
                      className="object-contain"
                      src={generateCarImage(cars, "13")}
                    />
                  </div>
                </div>
              </ModalHeader>
              <ModalBody className="w-full h-full flex-col gap-2">
                <p className="text-2xl capitalize font-medium">{cars.model}</p>
                {Object.entries(cars).map(([key, value]: any[]) => (
                  <>
                    <div className="w-full rounded-lg flex justify-between items-center">
                      <p>{key}</p>
                      <p>{value}</p>
                    </div>
                  </>
                ))}
              </ModalBody>
              <ModalFooter className="w-full flex items-center gap-2 bg-zinc-100">
                <Button className="bg-zinc-900 text-white">Reserve Now</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CarDetailsModal;
