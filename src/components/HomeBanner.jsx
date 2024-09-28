import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Decore from "../images/Decore.png";
import Banner from "../images/banner.png";

export default function HomeBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <div
      className="h-[700px] w-full relative mb-[100px]"
      style={{
        backgroundImage: `url(${Decore})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      {/* Navbar Section */}
      <div className="flex justify-between items-center px-10 py-5 z-20 relative">
        <div>
          <img src="/Logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="hidden md:flex font-medium font-sans">
          <ul className="flex gap-[80px] text-black items-center lg:gap-[50px] xl:gap-[80px] 2xl:gap-[80px]">
            {["Destination", "Hotels", "Flights", "Bookings", "Login"].map(
              (item) => (
                <li key={item} className="relative group">
                  {item}
                  <span className="block h-[2px] bg-[#F1A501] w-0 group-hover:w-full transition-all duration-300 ease-in-out absolute left-0 top-[100%]"></span>
                </li>
              )
            )}
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
        <div className="md:hidden">
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-black text-2xl"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 right-0 left-0 px-5 py-4 z-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <AiOutlineClose
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />{" "}
            {/* Close icon */}
          </div>
          <ul className="flex flex-col gap-4 text-black">
            {["Destination", "Hotels", "Flights", "Bookings", "Login"].map(
              (item) => (
                <li key={item} className="relative group">
                  <span onClick={handleMenuItemClick}>{item}</span>{" "}
                  {/* Close menu on click */}
                  <span className="block h-[2px] bg-[#F1A501] w-0 group-hover:w-full transition-all duration-300 ease-in-out absolute left-0 top-[100%]"></span>
                </li>
              )
            )}
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
      )}

      {/* Hero Section */}
      <div className="flex items-center gap-0 h-full px-10">
        {/* Left Content */}
        <div className="max-w-xl relative z-10 flex flex-col justify-center">
          <p className="text-[#DF6951] font-extrabold text-[16px] sm:text-[20px] tracking-wide">
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <h1 className="font-bold text-[50px] sm:text-[65px] md:text-[75px] lg:text-[85px] text-[#181E4B] leading-tight">
            Travel, enjoy <br /> and live a new <br /> and full life
          </h1>
          <p className="text-[#5E6282] mt-3 text-wrap text-justify">
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex gap-5 mt-8 items-center">
            <button className="bg-[#F1A501] text-white h-[60px] w-[140px] sm:w-[160px] rounded-lg shadow-lg">
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
        <div className="hidden md:flex flex-1 justify-center">
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
