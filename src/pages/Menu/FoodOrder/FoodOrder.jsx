import React, { useState } from "react";
import { FaBicycle, FaStore } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FoodOrder = ({ searchQuery, setSearchQuery }) => {
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [address, setAddress] = useState("");

  const handleOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Delivery Option:", deliveryOption);
    // console.log("Address:", address);
    // console.log("Search Query:", searchQuery);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-lg mb-8 w-full md:w-2/3 mx-auto">
      <h2 className="text-2xl font-bold  mb-6 text-center">
        Order Your Food
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white text-lg mb-2">
            Delivery or Pickup
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="deliveryOption"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <FaBicycle className="w-5 h-5 ml-2"></FaBicycle>
              <span className=" text-white">Delivery</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="deliveryOption"
                value="pickup"
                checked={deliveryOption === "pickup"}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <FaStore className="w-4 h-4 ml-2"></FaStore>
              <span className=" text-white">Pickup</span>
            </label>
          </div>
        </div>
        {deliveryOption === "delivery" && (
          <div>
            <label className="block text-white text-lg mb-2">Address</label>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder={`Enter your address`}
              className="mt-2 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}
        <div>
          <label className="block text-white text-lg mb-2">Find Food</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for food"
            className="mt-2 p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodOrder;
