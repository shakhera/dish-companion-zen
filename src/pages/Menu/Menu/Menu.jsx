import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FoodOrder from "../FoodOrder/FoodOrder";
import Location from "../../Home/Location/Location";

const categories = [
  "Kimchi",
  "Bibimbap",
  "Bulgogi",
  "Japchae",
  "Kimchi Jjigae",
  "Tteokbokki",
  "Samgyeopsal",
  "Dakgalbi",
  "Haemul Pajeon",
  "Bokkeumbap",
  "Sundubu Jjigae",
  "Banchan",
  "Korean BBQ",
  "Kimbap",
  "Galbi",
];
const Menu = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [dishes, setDishes] = useState([]);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = selectedCategory
      ? dish.category === selectedCategory
      : true;
    const matchesSearch = dish.category
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const url = `https://dish-companion-zen-server-shakheras-projects.vercel.app/dishes?page=${page}&size=${size}`;
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
    <div className="">
      {/* search category  */}
      <div className="flex justify-between items-center mb-4 w-10/12 mx-auto">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* display menu  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <MenuCard
              key={dish._id}
              dish={dish}
              setSearchQuery={setSearchQuery}
            />
          ))
        ) : (
          <p className="text-red-600 text-center w-full ">No dishes found</p>
        )}
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

      {/* food order  */}
      <div>
        <FoodOrder searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <Location></Location>
    </div>
  );
};

export default Menu;
