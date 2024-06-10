import React from "react";
import ChefDetails from "../ChefDetails/ChefDetails";

const AnimatedCard = ({ chef }) => {
  const { img, name, exp, recipes, likes, bio, info } = chef;
  return (
    <div>
      <div>
        <div className="max-h-[300px] bg-base-100 shadow-2xl duration-500 overflow-hidden hover:scale-110">
          <div className="flex">
            <figure className="w-1/2">
              <img src={img} alt="chef" className=" h-48" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <p>{likes}</p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("chefDetails").showModal()
                }
                className="btn btn-outline border-0 border-b-4 "
              >
                Details
              </button>
              <ChefDetails chef={chef}></ChefDetails>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
