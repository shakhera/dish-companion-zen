import React from "react";
import user from "../../../assets/image/user.png";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* <section className=" md:flex justify-between">
        <div className="flex justify-center items-center">
          <div className="mt-12 w-96 text-left">
            <h2 className=" font-manrope text-6xl font-extrabold m-4">
              One Step Closer To Your <br></br>
              <span className="text-purple-700"> Dream Food</span>
            </h2>
            <p className="font-manrope text-base font-medium mb-4">
              Dream food is a symphony of imagination and desire, a canvas where
              flavors dance in harmony to create an extraordinary sensory
              experience. It transcends the limits of the ordinary, inviting us
              to explore the fantastical realms of culinary possibility. In the
              realm of dream food, each bite is a journey into the sublime,
              where textures whisper stories, and aromas evoke memories yet to
              be made. It's a realm where creativity knows no bounds, and the
              boundaries between reality and fantasy blur with every delightful
              encounter. Dream food is not merely sustenance; it's an expression
              of the soul's longing for joy, indulgence, and the uncharted
              wonders of gastronomic delight.
            </p>
            <button className="px-4 ml-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <img src={user} alt="" />
        </div>
      </section> */}
      <Banner></Banner>
      <hr />
      <Chef></Chef>
    </div>
  );
};

export default Home;
