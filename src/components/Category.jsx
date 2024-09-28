import React from "react";
import Stars from "../images/Stars.png";
import Weather from "../images/weather.png";
import Flight from "../images/flights.png";
import Event from "../images/events.png";
import Customization from "../images/customization.png";
export default function Category() {
  return (
    <div className="relative bg-white py-10 px-6">
      {/* Background Image positioned absolutely in top-right */}
      <div
        className="absolute top-0 right-0 h-[166px] w-[153px] bg-no-repeat"
        style={{
          backgroundImage: `url(${Stars})`,
          backgroundSize: "contain",
        }}
      ></div>

      {/* Category Title */}
      <div className="text-center text-[#5E6282] font-semibold text-lg mb-2">
        CATEGORY
      </div>

      {/* Main Heading */}
      <div className="text-center text-[50px] font-bold text-[#14183E] mb-8">
        We Offer Best Services
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 ">
        {/* Card 1 */}
        <div className="text-center rounded-2xl py-20 hover:shadow-lg hover:scale-105">
          <img
            src={`${Weather}`}
            alt="Calculated Weather"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-[#1E1D4C]  mb-2">
            Calculated Weather
          </h3>
          <p className="text-base text-[#5E6282] font-medium leading-[26px] text-wrap w-[181px] h-[78px] mx-20">
            Built Wicket longer <br /> admire do barton <br />
            vanity itself do in it.
          </p>
        </div>
        {/* Card 2 */}
        <div className="text-center rounded-2xl py-10 hover:shadow-lg hover:scale-105">
          <img src={`${Flight}`} alt="Best Flights" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#1E1D4C]  mb-2">
            Best Flights
          </h3>
          <p className="text-base text-[#5E6282] font-medium leading-[26px] ">
            Engrossed listening. <br /> Park gate sell they <br />
            west hard for the.
          </p>
        </div>
        {/* Card 3 */}
        <div className="text-center rounded-2xl py-20 hover:shadow-lg hover:scale-105">
          <img src={`${Event}`} alt="Local Events" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-[#1E1D4C]  mb-2">
            Local Events
          </h3>
          <p className="text-base text-[#5E6282] font-medium leading-[26px]">
            Barton vanity itself do <br />
            in it. Preferred to men it <br /> engrossed listening.
          </p>
        </div>
        {/* Card 4 */}
        <div className="text-center rounded-2xl py-20 hover:shadow-lg hover:scale-105">
          <img
            src={`${Customization}`}
            alt="Customization"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-[#1E1D4C]  mb-2">
            Customization
          </h3>
          <p className="text-base text-[#5E6282] font-medium leading-[26px]">
            We deliver outsourced <br /> aviation services for <br /> military
            customers
          </p>
        </div>
      </div>
    </div>
  );
}
