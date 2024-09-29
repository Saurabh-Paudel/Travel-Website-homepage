import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    testimonial:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "CEO of Red Button",
    testimonial:
      "Sure last upon he same as knew next. Of believed or diverted no.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Emily Stone",
    location: "San Francisco, USA",
    testimonial: "Amazing service with top-notch support!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Alex Johnson",
    location: "New York, USA",
    testimonial: "They provide the best service I've ever experienced!",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container relative my-16 mx-auto flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Left side text */}
        <div className="lg:w-auto mb-10 lg:mb-0 text-center lg:text-left">
          <h5 className="text-gray-400 font-semibold uppercase">
            Testimonials
          </h5>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What People Say About Us.
          </h2>
        </div>

        {/* Right side testimonial card */}
        <div className="lg:w-auto relative md:mx-20 sm:mx-20">
          {/* Main Testimonial */}
          <div className="bg-white shadow-lg rounded-lg h-[245px] w-[504px] p-6 relative z-30 transition-opacity duration-500 ease-in-out">
            {/* Avatar */}
            <div className="absolute -top-10 -left-8">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mt-10">
              {testimonials[currentTestimonial].testimonial}
            </p>
            <p className="text-gray-900 font-semibold mt-4">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-gray-400">
              {testimonials[currentTestimonial].location}
            </p>
          </div>

          {/* Navigation buttons beside testimonial card */}
          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
            <button
              className="text-blue-500 hover:underline mb-2"
              onClick={handlePreviousTestimonial}
            >
              <MdKeyboardArrowUp className="text-[#3E2E4D] h-[25px] w-[25px]" />
            </button>

            <button
              className="text-blue-500 hover:underline"
              onClick={handleNextTestimonial}
            >
              <MdKeyboardArrowDown className="text-[#3E2E4D] h-[25px] w-[25px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Dots centered for screens 745px or less, otherwise below the testimonial card */}
      <div className="flex lg:absolute space-x-2 mt-10 md:mb-12 lg:ml-40 lg:mt-20 lg:w-full">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentTestimonial ? "bg-[#39425D]" : "bg-[#E5E5E5]"
            }`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
    </div>
  );
}
