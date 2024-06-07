import React from "react";
import user from "../../../assets/image/user.png";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";
import PopularCategory from "../PopularCategory/PopularCategory";
import BestRecipes from "../BestRecipes/BestRecipes";
import About from "../../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <hr />
      <Chef></Chef>
      <About></About>
      {/* <PopularCategory></PopularCategory> */}
      <BestRecipes></BestRecipes>
    </div>
  );
};

export default Home;
