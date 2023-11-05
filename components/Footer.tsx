import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const about = [
    "How it works",
    "Featured",
    "Partnership",
    "Business relations",
  ];
  const company = ["Events", "Blog", "Podcasts", "Invite a friend"];
  const social = ["Discord", "Instagram", "Facebook", "Twitter"];
  return (
    <section className="flex flex-col px-14 py-4 bg-gradient-to-b gap-8 from-[#000] to-[#000000ee] rounded-[48px]">
      <div className="flex w-full flex-wrap md:flex-nowrap py-8 gap-4 ">
        <div className="text-white grid w-1/2 ">
          <div>
            <p className="text-2xl md:text-4xl">Email us</p>
            <p className="text-lg md:text-2xl underline">
              rev.rentacar@gmail.com
            </p>
          </div>
        </div>
        <div className="text-white gap-y-8 grid md:grid-cols-3 sm:grid-cols-1 w-1/2 ">
          <div className="h-full flex flex-col gap-4">
            <p className="text-2xl">About us</p>
            <ul className="gap-8 flex flex-col">
              {about.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="h-full flex flex-col gap-4">
            <p className="text-2xl">Company</p>
            <ul className="gap-8 flex flex-col">
              {company.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="h-full flex flex-col gap-4">
            <p className="text-2xl">Socials</p>
            <ul className="gap-8 flex flex-col">
              {social.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="gap-4 flex items-center gap-x-12 text-white w-full flex-wrap md:flex-nowrap">
        <p>{year}, All rights reserved</p>
        <div className="flex gap-4 flex-wrap">
          <p>Privacy policy</p>
          <p>Terms and condition</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
