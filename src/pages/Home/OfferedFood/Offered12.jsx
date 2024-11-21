import { ChevronRightCircle } from "lucide-react";
import React, { useState } from "react";
const offerFood = [
  {
    category: "Kimchi",
    img: "https://i.postimg.cc/DytS1n60/1.jpg",
    rating: 4.5,
    price: "$8.99",
    offer: "20",
    dayRemain: "10",
  },
  {
    category: "Bibimbap",
    img: "https://i.postimg.cc/gJkjGJzS/2.jpg",
    rating: 4.7,
    price: "$10.99",
    offer: "35",
    dayRemain: "4",
  },
  {
    category: "Bulgogi",
    img: "https://i.postimg.cc/0yRNbZ5J/3.jpg",
    rating: 4.8,
    price: "$12.99",
    offer: "15",
    dayRemain: "13",
  },
  {
    category: "Japchae",
    img: "https://i.postimg.cc/3RR8Pc1z/4.jpg",
    rating: 4.6,
    price: "$11.99",
    offer: "7",
    dayRemain: "20",
  },
  {
    category: "Kimchi Jjigae",
    img: "https://i.postimg.cc/59DzSBNf/5.jpg",
    rating: 4.4,
    price: "$9.99",
    offer: "30",
    dayRemain: "11",
  },
  {
    category: "Tteokbokki",
    img: "https://i.postimg.cc/xdsJJH4D/6.jpg",
    rating: 4.9,
    price: "$6.99",
    offer: "10",
    dayRemain: "2",
  },
];
const Offered12 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === offerFood.length - 1 ? 0 : currentSlider + 1
    );
  return (
    <>
      <div className="sm:w-2/3 h-[540px] md:h-[670px] flex items-center relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center right-1 top-1/2 z-50   "
        >
          <ChevronRightCircle size={24} className="bg-white rounded-full" />
        </button>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex gap-[2%]"
          style={{ transform: `translateX(-${currentSlider * 52}%)` }}
        >
          {/* sliders */}
          {offerFood.map((item, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx
                  ? "h-[310px] md:h-[310px] lg:h-[480px] "
                  : "h-[260px] md:h-[280px] lg:h-[380px]"
              } min-w-[50%] bg-black relative duration-200`}
            >
              <img
                src={item.img}
                className="w-full\ h-full"
                alt={item.category}
              />
              <p className="text-2xl font-bold text-cyan-600">
                {item.category}
              </p>
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1">
                <h3 className="text-white rounded-lg inline-flex items-center">
                  <div className="flex flex-col justify-center">
                    <span className="text-4xl font-extrabold">
                      {item.offer}
                    </span>
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
                <p>{item.dayRemain} days remaining</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offered12;
