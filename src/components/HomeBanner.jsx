import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Decore from "../images/Decore.png"; // Import Decore.png
import Banner from "../images/banner.png"; // Import banner.png

export default function HomeBanner() {
  return (
    <div
      className="h-[700px] w-full relative"
      style={{
        backgroundImage: `url(${Decore})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      {/* Navbar Section */}
      <div className="flex justify-between items-center px-10 py-5">
        <div>
          <img src="/Logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="font-medium font-sans">
          <ul className="flex gap-16 text-black items-center">
            <li>Destination</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
            <li>Login</li>
            <li>
              <span className="border-2 border-black rounded-md px-4 py-2">
                Sign up
              </span>
            </li>
            <li className="flex gap-2 items-center">
              En <MdKeyboardArrowDown />
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex items-center gap-0 h-full px-[80px]">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-[#DF6951] font-extrabold text-[20px] tracking-wide">
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <h1 className="font-bold text-[85px] text-[#181E4B] leading-tight">
            Travel, enjoy <br /> and live a new <br /> and full life
          </h1>
          <p className="text-[#5E6282] mt-3 text-wrap text-justify">
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex gap-5 mt-8 items-center">
            <button className="bg-[#F1A501] text-white h-[60px] w-[160px] rounded-lg shadow-lg">
              Find out more
            </button>
            <button className="flex items-center gap-3 px-4 py-3">
              <span className="bg-[#DF6951] h-[52px] w-[52px] rounded-full flex items-center justify-center text-white shadow-lg">
                <FaPlay />
              </span>
              <span className="text-[#686D77]">Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Banner}
            alt="Banner"
            className="w-[764px] h-[765px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
