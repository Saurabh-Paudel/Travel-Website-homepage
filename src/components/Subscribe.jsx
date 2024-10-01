import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import Stars from "../images/Stars2.png";
import StyleOne from "../images/style1.png";
import StyleTwo from "../images/style2.png";

export default function Subscribe() {
  return (
    <div className="relative h-[490px] w-full max-w-[1356px] flex items-center justify-center my-[124px] mx-auto px-4">
      <div
        className="absolute top-[350px] -right-24 h-[166px] w-[153px] hidden lg:block"
        style={{
          backgroundImage: `url(${Stars})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="h-[407px] w-full bg-[#DFD7F9] rounded-lg rounded-tl-[100px] relative flex flex-col items-center justify-center">
        <div className="absolute -top-6 -right-6 h-[70px] w-[70px] rounded-full bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] flex items-center justify-center">
          <IoIosSend className="h-[40px] w-[40px] text-white" />
        </div>
        <div
          className="absolute top-[110px] left-0 h-[300.19px] w-[389.45px] opacity-[0.3] hidden md:block"
          style={{
            backgroundImage: `url(${StyleOne})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute bottom-0 right-[-20px] h-[290px] w-[284.8px] hidden lg:block"
          style={{
            backgroundImage: `url(${StyleTwo})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <p className="text-center text-[20px] sm:text-[28px] md:text-[33px] leading-[30px] md:leading-[54px] font-poppins font-semibold text-[#5E6282] mt-4 mb-[24px]">
          Subscribe to get information, latest news, and other{" "}
          <br className="hidden md:block" />
          interesting offers about Jadoo
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full max-w-md">
            <CiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#39425D]" />
            <input
              type="email"
              placeholder="Your email"
              className="h-[50px] w-full pl-10 rounded-[10px] border border-gray-300 text-[#39425D] bg-white z-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button className="h-[50px] w-full max-w-[180px] px-8 bg-[#FF7D68] text-white text-[17px] font-semibold rounded-md hover:bg-[#fc6b54] transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
