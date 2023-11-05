import { Chip } from "@nextui-org/react";
import React from "react";

const About = () => {
  const lists = [
    "Wide Selection",
    "Quality Assurance",
    "Flexibility",
    "Customer-Centric Service",
    "Competitive Pricing",
  ];
  return (
    <div className="flex-col md:flex-row flex gap-4 rounded-[48px] w-full h-full bg-gradient-to-b from-[#000] to-[#000000ee] px-14 py-8">
      <section className="flex items-center justify-start md:justify-center w-full md:w-1/4 text-white text-3xl md:text-5xl font-semibold">
        About us
      </section>
      <section className=" h-full w-full md:w-3/4 flex flex-col gap-8">
        <div className="py-8 text-white font-medium text-xl text-justify md:text-start">
          Welcome to Rev Car Rentals, your trusted partner in personalized and
          hassle-free car rental experiences. We are dedicated to providing you
          with the freedom to explore your destinations on your terms, all while
          ensuring your safety, comfort, and convenience.
        </div>
        <div className="py-8 text-white font-medium  flex flex-col gap-4">
          <p className="text-4xl">Our Mission</p>
          <p className="text-xl text-justify md:text-start">
            At Rev, our mission is simple yet profound: to empower travellers
            like you with the perfect vehicle for your journey. Whether
            you&apos;re a solo explorer, a family on vacation, a business
            traveller, or anyone in between, we believe that the right car can
            make all the difference.
          </p>
        </div>
        <div className="py-8 text-white font-medium  flex flex-col gap-4">
          <p className="text-4xl">Why choose Rev?</p>
          <div className="flex flex-wrap gap-4 cursor-pointer">
            {lists.map((list, id) => (
              <Chip
                className="bg-white text-md md:text-3xl p-5 md:p-8 opacity-100 hover:opacity-90"
                key={id}
              >
                {list}
              </Chip>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
