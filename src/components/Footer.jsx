import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex items-start justify-center gap-[100px] flex-wrap container mx-auto py-8 px-4">
        <div className="h-auto w-auto">
          <p className="font-poppins font-medium text-[44px] text-[#181E4B] mb-3">
            Jadoo.
          </p>
          <p className="font-poppins font-medium text-[13px] leading-[124.5%] text-[#5E6282]">
            Book your trip in minutes, get full <br /> control for much longer.
          </p>
        </div>

        <div className="flex items-start justify-center gap-[100px]">
          <div className="w-auto">
            <p className="font-bold font-poppins text-[#080809] text-[21px] mb-4">
              Company
            </p>
            <ul className="space-y-2 font-poppins font-medium text-[18px] text-[#5E6282]">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div className="w-auto">
            <p className="font-bold font-poppins text-[#080809] text-[21px] mb-4">
              Contact
            </p>
            <ul className="space-y-2 font-poppins font-medium text-[18px] text-[#5E6282]">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div className="w-auto">
            <p className="font-bold font-poppins text-[#080809] text-[21px] mb-4">
              More
            </p>
            <ul className="space-y-2 font-poppins font-medium text-[18px] text-[#5E6282]">
              <li>Airline Fees</li>
              <li>Airlines</li>
              <li>Low Fare Tips</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <ul className="flex items-center gap-[25px] mb-4">
            <li className="bg-[#f1f1f1] h-[41px] w-[41px] rounded-full flex items-center justify-center hover:text-white hover:bg-black">
              <FaFacebookF />
            </li>
            <li className="bg-[#f1f1f1] h-[41px] w-[41px] rounded-full flex items-center justify-center hover:text-white hover:bg-black">
              <FaInstagram />
            </li>
            <li className="bg-[#f1f1f1] h-[41px] w-[41px] rounded-full flex items-center justify-center hover:text-white hover:bg-black">
              <FaTwitter />
            </li>
          </ul>
          <p className="font-poppins font-medium text-xl text-[#5E6282]">
            Discover our app
          </p>
          <div className="flex gap-2 text-white">
            <button className="h-[50px] w-[170px] rounded-3xl bg-black flex items-center gap-4 px-4">
              <FaGooglePlay className="h-[30px] w-[30px] ml-1" />
              <div className="text-left">
                <p className="font-extrabold text-[12px]">GET IT ON</p>
                <p className="font-light text-[12px]">GOOGLE PLAY</p>
              </div>
            </button>
            <button className="h-[50px] w-[170px] rounded-3xl bg-black flex items-center gap-4 px-4 py-4">
              <FaApple className="h-[30px] w-[30px] ml-1" />
              <div className="text-left">
                <p className="font-semibold text-[10px]">Available on the</p>
                <p className="font-bold text-[14px]">Apple Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center my-8">
        <p className="text-[#5E6282] text-md font-poppins font-medium leading-[124.5%]">
          All rights reserved @jadoo.co
        </p>
      </div>
    </footer>
  );
}
