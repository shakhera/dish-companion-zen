import React, { useEffect, useState } from "react";
import dish from "../../../assets/category/dish.avif";

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
      <h2 className="text-2xl font-bold text-center mt-12 mb-8">
        Popular Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2 w-2/3 mx-auto">
        {category.map((item, index) => (
          <div key={index} className="">
            <div className="flex gap-3  items-center">
              <img src={item.img} alt="" className="w-16 h-16 rounded-full" />
              <h3 className="text-3xl font-bold text-slate-500 hover:text-stone-900">
                {item.category}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
