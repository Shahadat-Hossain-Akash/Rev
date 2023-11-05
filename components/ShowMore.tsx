"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ShowMore = ({ pageNumber, isNext }: any) => {
  const [limit, setLimit] = useState(1);
  const router = useRouter();
  const handleNavigation = () => {
    setLimit((prev) => prev + 1);
    const newLimit = (pageNumber + limit) * 6;

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("limit", `${newLimit}`);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };
  return (
    !isNext && (
      <Button
        className="bg-zinc-900 text-white rounded-medium"
        size="lg"
        variant="shadow"
        onClick={handleNavigation}
      >
        Show more
      </Button>
    )
  );
};

export default ShowMore;
