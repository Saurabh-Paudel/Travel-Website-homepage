import React from "react";
import Selection from "../images/Selection.png";
import Payment from "../images/Payment.png";
import Taxi from "../images/Taxi.png";
import Trip from "../images/Trip.jpg";
import Building from "../images/Building.png";
import { PiLeafFill } from "react-icons/pi";
import { FaRegMap, FaLocationArrow } from "react-icons/fa6";
import { BiBuildings } from "react-icons/bi";

export default function EasyStep() {
  return (
    <div className="my-20 mx-20 px-5 md:px-10 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <p className="text-[#5E6282] font-poppins font-semibold text-lg">
          Easy and Fast
        </p>
        <h2 className="text-[#14183E] font-bold text-[32px] md:text-[40px] lg:text-[50px] leading-snug">
          Book your next trip <br /> in 3 easy steps
        </h2>
        <div className="mt-10">
          <ul className="space-y-5">
            <li className="flex items-center space-x-4">
              <span className="bg-[#F0BB1F] h-12 w-12 rounded-lg flex justify-center items-center font-bold">
                <img src={Selection} alt="Selection Step" />
              </span>
              <div>
                <p className="text-base md:text-base font-bold text-[#5E6282]">
                  Choose Destination
                </p>
                <p className="font-poppins text-[#5E6282] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-[#F15A2B] h-12 w-12 rounded-lg flex justify-center items-center font-bold">
                <img src={Payment} alt="Payment Step" />
              </span>
              <div>
                <p className="text-base md:text-base font-bold text-[#5E6282]">
                  Make Payment
                </p>
                <p className="font-poppins text-[#5E6282] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-[#006380] h-12 w-12 rounded-lg flex justify-center items-center font-bold">
                <img src={Taxi} alt="Taxi Step" />
              </span>
              <div>
                <p className="text-base md:text-base font-bold text-[#5E6282]">
                  Reach Airport
                </p>
                <p className="font-poppins text-[#5E6282] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center relative">
        <div className="relative flex flex-col items-center">
          <div className="h-[400px] w-[100%] lg:w-[370px] rounded-2xl border-2 border-gray-200 shadow-lg flex flex-col overflow-hidden">
            <img
              src={Trip}
              alt="Trip to Greece"
              className="h-[161px] w-full rounded-t-2xl object-cover px-5 my-5"
            />
            <div className="p-4 flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-1">Trip To Greece</h3>
              <p className="text-gray-500 mb-5">
                14-29 June | by Robbin Joseph
              </p>
              <ul className="list-none flex gap-4 items-center mb-5">
                {/* Icons */}
                <li>
                  <span className="bg-[#F5F5F5] rounded-full text-[#84829A] flex items-center justify-center h-9 w-9">
                    <PiLeafFill />
                  </span>
                </li>
                <li>
                  <span className="bg-[#F5F5F5] rounded-full text-[#84829A] flex items-center justify-center h-9 w-9">
                    <FaRegMap />
                  </span>
                </li>
                <li>
                  <span className="bg-[#F5F5F5] rounded-full text-[#84829A] flex items-center justify-center h-9 w-9">
                    <FaLocationArrow />
                  </span>
                </li>
              </ul>
              <p className="flex items-center gap-2 text-[#84829A] font-poppins text-base">
                <span className="h-4 w-4 flex items-center justify-center">
                  <BiBuildings />
                </span>
                24 people going
              </p>
            </div>
          </div>

          <div className="absolute right-[-40px] lg:right-[-80px] top-[240px] lg:top-[200px] h-[129px] w-[85%] lg:w-[263px] rounded-2xl border-2 border-gray-200 shadow-lg bg-white p-4 flex flex-col">
            <div className="flex gap-2">
              <img
                src={Building}
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <h4 className="text-sm font-poppins font-medium text-[#84829A]">
                  Ongoing
                </h4>
                <p className="text-lg font-poppins font-medium text-[#080809]">
                  Trip to Rome
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-2 ml-12">
              <div className="font-poppins text-sm pb-2">
                <span className="text-[#8A79DF]">40%</span>{" "}
                <span className="text-[#080809]">completed</span>
              </div>
              <div className="relative w-[100%] lg:w-[156px] h-[5px] bg-[#F5F5F5] rounded-full">
                <div
                  className="absolute top-0 left-0 h-[5px] bg-[#8A79DF] rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
