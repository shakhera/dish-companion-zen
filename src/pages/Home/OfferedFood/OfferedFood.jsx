import React, { useState } from "react";
import Offered12 from "./Offered12";

const OfferedFood = () => {
  return (
    <section className="container mx-auto flex items-center justify-center">
      <div className=" lg:ml-64  h-[400px] lg:h-[570px] px-3 lg:px-10 flex items-center justify-center overflow-hidden gap-5 lg:gap-10 relative">
        <div className="w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
        <div className="w-full lg:w-1/3 mx-auto text-center lg:text-left space-y-2 lg:space-y-5 py-5">
          <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold">
            Discover 10+ Delicious Dishes
          </h1>
          <p className="text-[#616161] text-xs md:text-lg">
            Explore a variety of mouth-watering dishes crafted by our expert
            chefs.
          </p>
          {/* <button className="font-bold py-2 xl:py-3 text-xs md:text-base lg:text-lg xl:text-xl hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-cyan-600">
            Browse Menu
          </button> */}
        </div>
        <Offered12 />
      </div>
    </section>
  );
};

export default OfferedFood;
