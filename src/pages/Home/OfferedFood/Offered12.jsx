import React, { useState } from "react";
const offerFood = [
  {
    category: "Kimchi",
    img: "https://i.postimg.cc/DytS1n60/1.jpg",
    rating: 4.5,
    price: "$8.99",
  },
  {
    category: "Bibimbap",
    img: "https://i.postimg.cc/gJkjGJzS/2.jpg",
    rating: 4.7,
    price: "$10.99",
  },
  {
    category: "Bulgogi",
    img: "https://i.postimg.cc/0yRNbZ5J/3.jpg",
    rating: 4.8,
    price: "$12.99",
  },
  {
    category: "Japchae",
    img: "https://i.postimg.cc/3RR8Pc1z/4.jpg",
    rating: 4.6,
    price: "$11.99",
  },
  {
    category: "Kimchi Jjigae",
    img: "https://i.postimg.cc/59DzSBNf/5.jpg",
    rating: 4.4,
    price: "$9.99",
  },
  {
    category: "Tteokbokki",
    img: "https://i.postimg.cc/xdsJJH4D/6.jpg",
    rating: 4.9,
    price: "$6.99",
  },
];
const Offered12 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === offerFood.length - 1 ? 0 : currentSlider + 1
    );
  return (
    <div>
      <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-6 h-6 md:w-8 md:h-8  "
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex gap-[2%]"
          style={{ transform: `translateX(-${currentSlider * 52}%)` }}
        >
          {/* sliders */}
          {offerFood.map((slide, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx
                  ? "h-[310px] md:h-[310px] lg:h-[480px] "
                  : "h-[260px] md:h-[280px] lg:h-[380px]"
              } min-w-[50%] bg-black relative duration-200`}
            >
              <img
                src={slide.img}
                className="w-full\ h-full"
                alt={slide.category}
              />
              <p className="text-2xl font-bold text-cyan-600">{slide.category}</p>
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1">
                <h3 className="text-white rounded-lg inline-flex items-center">
                  <div className="flex flex-col justify-center">
                    <span className="text-4xl font-extrabold">20</span>
                  </div>
                  <div className="flex flex-col text-center pt-2">
                    <span className="text-sm font-bold leading-none">%</span>
                    <span className="text-sm font-semibold leading-none">
                      off
                    </span>
                  </div>
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                <p>10 days remaining</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offered12;
