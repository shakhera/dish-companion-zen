import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AnimatedCard from "../../../components/AnimatedCard/AnimatedCard";

const Chef = () => {
  const axiosPublic = useAxiosPublic();

  const { data: chefs = [] } = useQuery({
    queryKey: ["chefs"],
    queryFn: async () => {
      const res = await axiosPublic();
      return res.data;
    },
  });

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
    <div>
      <h2 className="text-2xl font-bold text-center my-6">Chef Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto">
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
    </div>
  );
};

export default Chef;
