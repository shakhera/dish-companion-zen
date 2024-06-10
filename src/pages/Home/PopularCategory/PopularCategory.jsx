import React, { useEffect, useState } from "react";
import dish from "../../../assets/category/dish.avif";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

const PopularCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      const res = await fetch("category.json");
      const data = await res.json();
      setCategory(data);
    };
    fatchData();
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center w-2/3 mx-auto">
        <h2 className="text-2xl font-bold text-center mt-12 mb-8 flex-grow">
          Search by Food
        </h2>
        <div className="">
          <Link to="/ourmenu">
            <button className="btn btn-outline border-0 border-b-4">
              VIEW ALL <FaAngleDoubleRight/>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-wrap justify-center gap-4">
        {category.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt="" className="w-44 h-44 rounded-full" />
            <h3 className="text-xl font-bold text-slate-500 hover:text-stone-900">
              {item.category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
