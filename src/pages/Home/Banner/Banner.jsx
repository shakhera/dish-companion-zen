import React from "react";
import "./Banner.css";
import meal1 from "../../../assets/image/banner/Mutton.jpg";
import meal2 from "../../../assets/image/banner/vegetable.jpg";

const Banner = () => {
  return (
    <div className="  ">
      <div className="bg-slate-300">
        <div className="bg-black md:flex">
          <div className="img-container flex items-center">
            <img src={meal1} alt="food" className="" />
          </div>
          <div className="text-white text-center md:w-1/2">
            <h1 className="pt-8 md:text-3xl lg:text-5xl pb-5 font-bold">
              Welcome to
              <span className="text-red-700"> Dish Companion Zen </span>
            </h1>
            <p className="md:pb-10 text-sm md:text-1xl text-gray-300 font-serif">
              Food is a vital aspect of human existence, providing sustenance,
              pleasure, and cultural expression. A balanced, nutritious diet
              with nutrient-rich foods is crucial for maintaining optimal health
              and well-being. However, modern dietary patterns often face
              challenges due to processed foods high in added sugars, unhealthy
              fats, and sodium. Promoting nutritional education and sustainable
              food systems is essential for fostering healthier eating habits
              and mitigating diet-related ailments. Food serves as a nexus
              between science, culture, and society, requiring ongoing research,
              policy development, and personal exploration.
            </p>
          </div>
          <div className="img-container flex items-center">
            <img src={meal2} alt="" className="" />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Banner;
