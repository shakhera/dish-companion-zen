import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Menu = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [dishes, setDishes] = useState([]);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    const url = `http://localhost:5000/dishes?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setDishes(data.dishes);
      });
  }, [page, size]);

  const updatePageNumber = (num) => {
    if (num > pages - 1 || 0 > num) {
      return setPage(0);
    }
    setPage(num);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto">
        {dishes.map((dish) => (
          <MenuCard key={dish._id} dish={dish}></MenuCard>
        ))}
      </div>

      {/* pagination  */}
      <div className="mt-12 mb-6 flex select-none justify-center items-center bg-white shadow-lg rounded-sm w-fit mx-auto">
        {/* left arrow */}
        <div
          onClick={() => {
            updatePageNumber(page - 1);
          }}
          className="transition-all py-2 px-3 text-sm border-r duration-200 cursor-pointer p-2 rounded-md flex hover:bg-gray-200 items-center"
        >
          <FaAngleLeft></FaAngleLeft>
          Previous
        </div>
        <div className="flex justify-center items-center  ">
          {[...Array(pages).keys()].map((item) => (
            <div
              onClick={() => {
                setPage(item);
              }}
              className={`cursor-pointer  text-sm  transition-all border-r border-l  duration-200 px-4 ${
                page === item
                  ? "bg-sky-500 text-white"
                  : "bg-white hover:bg-gray-200"
              }   font-semibold text-gray-700   py-[8px] `}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => {
            updatePageNumber(page + 1);
          }}
          className=" transition-all py-2  px-3 text-sm duration-200 cursor-pointer border-l  rounded-md flex hover:bg-gray-200 items-center"
        >
          Next
          <FaAngleRight></FaAngleRight>
        </div>
      </div>
    </div>
  );
};

export default Menu;
