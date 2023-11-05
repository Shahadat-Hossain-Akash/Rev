"use client";
import { fuels, manufacturers, yearsOfProduction } from "@/constants/index";
import { getModelsByName } from "@/lib/utils";
import search from "@/public/assets/search.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SlRefresh } from "react-icons/sl";
import SearchBarItem from "./SearchBarItem";

const SearchBar = () => {
  const manufacturersWithObjects = manufacturers.map((manufacturer) => ({
    title: manufacturer,
    value: manufacturer,
  }));

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");

  const router = useRouter();

  let modelList;
  if (manufacturer) {
    modelList = getModelsByName(manufacturer);
  }
  const manufacturersWithModel = modelList?.map((manufacturer) => ({
    title: manufacturer,
    value: manufacturer,
  }));

  const validate = () => {
    if (manufacturer === "" || model === "") {
      toast.error("Please select a car model and manufacturer");
    }

    updateSearchBar();
  };

  const updateSearchBar = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }
    if (fuel) {
      searchParams.set("fuel", fuel);
    } else {
      searchParams.delete("fuel");
    }

    const newSearchParams = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newSearchParams, { scroll: false });
  };

  return (
    <div className="flex gap-4 flex-wrap md:flex-nowrap flex-col">
      <div className="flex gap-4 flex-wrap md:flex-nowrap">
        <SearchBarItem
          data={
            manufacturersWithObjects || manufacturer
              ? manufacturersWithObjects
              : []
          }
          img={"/assets/brand.png"}
          item={manufacturer}
          setItem={setManufacturer}
        />
        {/*<Input
          classNames={{
            inputWrapper:
              "bg-[#f3f3f4]  shadow-none data-[hover=true]:bg-[#f3f3f4] py-7 ",
            input: "py-7 gap-4 ml-2",
          }}
          placeholder="Model"
          labelPlacement="outside"
          startContent={
            <Image
              src={model}
              width={30}
              height={30}
              alt=""
              aria-label="icon"
            />
          }
        ></Input>*/}
        <SearchBarItem
          data={manufacturersWithModel ? manufacturersWithModel : []}
          img={"/assets/model.png"}
          item={model}
          setItem={setModel}
          state={manufacturer}
        />
        <Button
          isIconOnly
          onClick={validate}
          className="bg-zinc-950 w-full py-7 rounded-full"
        >
          <Image
            src={search}
            width={30}
            height={30}
            alt=""
            aria-label="search"
          />
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap md:flex-nowrap">
        <SearchBarItem
          data={fuels}
          img={"/assets/fuel.png"}
          item={fuel}
          setItem={setFuel}
        />
        <SearchBarItem
          data={yearsOfProduction}
          img={"/assets/year.png"}
          item={year}
          setItem={setYear}
        />
      </div>
      <Link href={"/"}>
        <Button isIconOnly className="bg-[#f3f3f4] w-full py-7 rounded-medium">
          <SlRefresh size={24} className="text-zinc-900" />
        </Button>
      </Link>
      <Toaster />
    </div>
  );
};

export default SearchBar;
