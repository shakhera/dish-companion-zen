import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic.jsx";
import AnimatedCard from "../AnimatedCard/AnimatedCard";

const Chef = () => {
  const axiosPublic = useAxiosPublic();

  const { data: chefs = [] } = useQuery({
    queryKey: ["chefs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/chefs");
      return res.data;
    },
  });

  console.log("chefs data", chefs);

  const [displayAllCard, setDisplayAllCard] = useState(false);
  const initialDisplayCard = 3;
  const [displayCard, setDisplayCard] = useState(initialDisplayCard);

  const handleSeeMore = () => {
    setDisplayAllCard(true);
    setDisplayCard(chefs.length);
  };

  const handleSeeLess = () => {
    setDisplayAllCard(false);
    setDisplayCard(initialDisplayCard);
  };

  return (
    <section className="container mx-auto">
      <div className="mb-4 lg:w-11/12 mx-auto flex items-end">
        <h2 className="text-sm md:text-2xl font-bold flex-shrink-0">Chef</h2>
        <div className="flex-grow border-b bg-neutral-800 mx-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-11/12 mx-auto">
        {chefs
          .slice(0, displayAllCard ? chefs.length : displayCard)
          .map((chef) => (
            <AnimatedCard key={chef.chefId} chef={chef}></AnimatedCard>
          ))}
        {/* {chefs.map((chef) => (
          <AnimatedCard key={chef.chefId} chef={chef}></AnimatedCard>
        ))} */}
      </div>

      {displayAllCard ? (
        <div className="flex justify-center my-4">
          <button
            onClick={handleSeeLess}
            className="btn btn-outline border-0 border-b-4  "
          >
            See Less
          </button>
        </div>
      ) : (
        <div className="flex justify-center my-4">
          <button
            onClick={handleSeeMore}
            className="btn btn-outline border-0 border-b-4  "
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default Chef;
