import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import React from "react";
import { FaEye } from "react-icons/fa";
import MenuDetails from "../MenuDetails/MenuDetails";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const MenuCard = ({ dish }) => {
  const { category, img, rating, views, cooking_time, price, _id } = dish;
  const navigate = useNavigate();

  const handleOrderNow = (dish) => {
    console.log(dish);
    navigate("/foodOrder", { state: { dish } });
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="food" className="h-48 w-full object-cover" />
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
                <button
                  onClick={() => handleOrderNow(dish)}
                  className="btn btn-outline border-0 border-b-4"
                >
                  Order Now
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    document.getElementById("menuCardModal").showModal()
                  }
                  className="btn btn-outline border-0 border-b-4"
                >
                  Details
                </button>
                <MenuDetails dish={dish}></MenuDetails>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
