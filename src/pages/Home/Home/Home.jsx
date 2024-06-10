import React from "react";
import user from "../../../assets/image/user.png";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";
import PopularCategory from "../PopularCategory/PopularCategory";
import BestRecipes from "../BestRecipes/BestRecipes";
import About from "../../About/About";
import OfferedFood from "../OfferedFood/OfferedFood";
import Location from "../Location/Location";
import Offered12 from "../OfferedFood/Offered12";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <hr />
      <OfferedFood></OfferedFood>
      <Chef></Chef>
      <About></About>
      <PopularCategory></PopularCategory>
      <BestRecipes></BestRecipes>
      <Location></Location>
    </div>
  );
};

export default Home;
