import React from "react";
import ChefDetails from "../ChefDetails/ChefDetails";
import { AiOutlineLike } from "react-icons/ai";

const AnimatedCard = ({ chef }) => {
  const { img, name, exp, recipes, likes, bio, info } = chef;
  return (
    <>
      <div className="max-h-[300px] bg-base-100 shadow-2xl overflow-hidden ">
        <div className="flex">
          <figure className="w-1/2 hover:scale-105 duration-500">
            <img src={img} alt="chef" className="h-48" />
          </figure>
          <div className=" w-1/2 mt-8 pl-2">
            <h2 className="text-xl font-bold ">{name}</h2>
            <h2 className="">Restaurant: {info.restaurant}</h2>
            <p>Experience: {exp} years</p>
            <p>Recipes: {recipes}</p>
          </div>
        </div>
        <div className="flex justify-end gap-x-4 px-4 pb-4">
          <div className="flex items-center gap-2">
            <AiOutlineLike className="w-6 h-6" />
            <p>{likes}</p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => document.getElementById("chefDetails").showModal()}
              className="btn btn-outline border-0 border-b-4 "
            >
              Details
            </button>
            <ChefDetails chef={chef}></ChefDetails>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
