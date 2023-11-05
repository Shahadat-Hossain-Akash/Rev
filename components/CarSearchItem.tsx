import React from "react";
import SearchBar from "./SearchBar";
import CustomFilter from "./CustomFilter";
import Cars from "./Cars";

const CarSearchItem = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <p className="text-3xl ">Categories</p>
      <p>Explore out cars of your choice!</p>
      <SearchBar />
      <CustomFilter />
    </div>
  );
};

export default CarSearchItem;
