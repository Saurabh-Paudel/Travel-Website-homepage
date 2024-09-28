import React from "react";
import Stars from "../images/Stars.png";
import Weather from "../images/weather.png";
import Flight from "../images/flights.png";
import Event from "../images/events.png";
import Customization from "../images/customization.png";

const categories = [
  {
    id: 1,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: Weather,
  },
  {
    id: 2,
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: Flight,
  },
  {
    id: 3,
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    image: Event,
  },
  {
    id: 4,
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    image: Customization,
  },
];

const Category = () => {
  return (
    <div className="relative bg-white py-10 px-6">
      {/* Top-right Background Image */}
      <div
        className="absolute top-0 right-0 h-[166px] w-[153px] bg-no-repeat"
        style={{
          backgroundImage: `url(${Stars})`,
          backgroundSize: "contain",
        }}
      ></div>

      {/* Section Title */}
      <div className="text-center text-[#5E6282] font-semibold text-lg mb-2">
        CATEGORY
      </div>

      {/* Main Heading */}
      <div className="text-center text-[50px] font-bold text-[#14183E] mb-8">
        We Offer Best Services
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-2xl p-8 hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out text-center"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-24 mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold text-[#1E1D4C] mb-4">
              {category.title}
            </h3>
            <p className="text-[#5E6282] text-base font-medium leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
