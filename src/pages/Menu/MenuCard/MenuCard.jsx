import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import React from "react";
import { FaEye } from "react-icons/fa";

const MenuCard = ({ dish }) => {
  const {
    category,
    img,
    rating,
    views,
    cooking_time,
    types,
    origin_info,
    price,
  } = dish;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="food" className="h-64" />
        </figure>
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{category}</h2>
            <p>Price: {price}</p>
            <p>Cooking time: {cooking_time}</p>
            <span className="flex flex-col justify-center items-center w-28 mx-auto">
              <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            </span>
          </div>
          <div className="card-actions flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <FaEye></FaEye>
              <p>{views}</p>
            </div>
            <div className="flex gap-4">
              <div>
                <button className="btn btn-outline border-0 border-b-4">
                  Order
                </button>
              </div>
              <div>
                <button className="btn btn-outline border-0 border-b-4">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
