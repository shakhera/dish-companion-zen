import React from "react";

const ChefDetails = ({ chef }) => {
  const { img, name, exp, recipes, likes, bio, info } = chef;

  return (
    <div>
      <dialog id="chefDetails" className="modal">
        <div className="modal-box max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <img
            src={img}
            alt="chef"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <div className="mb-4">
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Experience:</span> {exp} years
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Recipes:</span> {recipes}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Likes:</span> {likes}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Bio:</span> {bio}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Restaurant:</span>{" "}
              {info.restaurant}
            </p>
          </div>
          <button
            className="btn btn-outline w-full py-2 mt-4 border-0 border-y-4 border-neutral-600 font-semibold rounded-lg hover:bg-neutral transition duration-300"
            onClick={() => document.getElementById("chefDetails").close()}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ChefDetails;
