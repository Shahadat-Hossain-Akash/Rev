"use client";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";

const SearchBarItem = ({
  data,
  img,
  item,
  setItem,
  state,
}: {
  data: any[];
  img: string;
  item: string;
  setItem: (item: any) => any;
  state?: string;
}) => {
  const handleSearch = () => {};

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <Select
        isDisabled={data.length <= 1}
        labelPlacement="outside"
        classNames={{
          trigger: " bg-[#f3f3f4] data-[hover=true]:bg-[#f3f3f4] py-7",
          listboxWrapper: "bg-[#f3f3f4] rounded-xl",
        }}
        startContent={
          <Image src={img} width={30} height={30} alt="" aria-label="icon" />
        }
        aria-labelledby="items"
      >
        {data.map((el: any, id: any) => (
          <SelectItem
            key={id}
            value={el?.value}
            onClick={() => setItem(el.value)}
          >
            {el.title}
          </SelectItem>
        ))}
      </Select>
    </form>
  );
};

export default SearchBarItem;
