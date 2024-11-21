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
    <section className="container mx-auto">
      <div className="mb-4 md:w-11/12 px-3 mx-auto flex justify-between items-end">
        <h2 className="text-sm md:text-2xl font-bold flex-shrink-0">
          Search by Food
        </h2>
        <div className="flex-grow border-b bg-neutral-800 mx-2"></div>
        <Link to="/ourmenu" className="flex-shrink-0">
          <button className="btn btn-sm btn-outline border-0 border-b-4">
            VIEW ALL <FaAngleDoubleRight />
          </button>
        </Link>
      </div>

      <div className="md:w-11/12 mx-auto flex flex-wrap justify-center gap-4">
        {category.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.category}
              className="w-32 h-32 md:w-44 md:h-44 rounded-md"
            />
            <h3 className="text-xl font-bold text-slate-500 hover:text-stone-900">
              {item.category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategory;
