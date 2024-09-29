import React from "react";
import Rome from "../images/Rome.png";
import London from "../images/London.jpg";
import Europe from "../images/Europe.png";
import { FaLocationArrow } from "react-icons/fa6";

export default function TopSelling() {
  const destinations = [
    {
      city: "Rome, Italy",
      price: "$5.42k",
      days: "10 Days Trip",
      image: Rome,
    },
    {
      city: "London, UK",
      price: "$4.2k",
      days: "12 Days Trip",
      image: London,
    },
    {
      city: "Full Europe",
      price: "$15k",
      days: "28 Days Trip",
      image: Europe,
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold text-[#5E6282]">Top Selling</h2>
        <h1 className="text-[50px] font-bold text-[#14183E]">
          Top Destinations
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px]">
          {destinations.map((items) => (
            <div className="h-[472px] w-[315px] shadow-2xl rounded-3xl relative hover:scale-105">
              <img
                src={items.image}
                alt={items.city}
                className="h-[325px] w-[315px] rounded-t-3xl object-cover"
              />
              <div className="h-[147px] w-[313px] rounded-b-3xl">
                <div className="text-[#5E6282] flex items-center justify-between font-medium text-lg leading-[124.5%] my-[27px] mx-5">
                  <p>{items.city}</p>
                  <p>{items.price}</p>
                </div>
                <div className="flex items-center mx-5 gap-[14px]">
                  <FaLocationArrow className="h-5 w-5" />
                  <span className="text-[#5E6282] font-medium text-base leading-[124.5%]">
                    {items.days}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
