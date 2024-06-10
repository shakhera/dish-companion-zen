import React from "react";

const MenuDetails = ({ dish }) => {
  return (
    <div>
      <dialog id="menuCardModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-outline border border-neutral-500 font-extrabold hover:text-white hover:bg-neutral transition duration-300 absolute right-2 top-2">
              ×
            </button>
          </form>
          <div className="text-center bg-gray-100 p-8 rounded-lg shadow-md">
            <img
              src={dish.img}
              alt={dish.category}
              className="mx-auto mb-4 rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <h1 className="text-2xl font-bold mb-4">{dish.category}</h1>
                <p className="text-gray-700">
                  <span className="font-semibold">Rating:</span> {dish.rating}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Views:</span> {dish.views}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Cooking Time:</span>
                  {dish.cooking_time}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Types:</span>
                  {dish.types.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Likes:</span> {dish.likes}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Price:</span> {dish.price}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Spiciness:</span>
                  {dish.origin_info.spiciness}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Main Ingredient:</span>
                  {dish.origin_info.main_ingredient}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Origin:</span>
                  {dish.origin_info.origin}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Popular Pairing:</span>
                  {dish.origin_info.popular_pairing.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <form method="dialog" className="flex justify-end">
            <button
              onClick={() => document.getElementById("menuCardModal").close()}
              className="btn btn-sm btn-outline border-0 border-b-4 right-3 border-neutral-600 rounded-lg hover:bg-neutral transition duration-300"
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MenuDetails;
