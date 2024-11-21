import React from "react";
import about from "../../assets/about/about.jpg";
import about1 from "../../assets/about/about.avif";

const About = () => {
  return (
    <section className="md:flex my-12 container mx-auto">
      <div className="md:w-1/2 px-12 md:pl-12">
        <img src={about} alt="" className="h-96 rounded-xl" />
        {/* <img src={about1} alt="" className="h-96" /> */}
      </div>
      <div className="md:w-1/2 mx-2">
        <h2 className="text-6xl text-slate-700">About Us</h2>
        <div className="flex mt-8 space-x-12">
          <div className="w-1/3">
            <p className="text-xs lg:text-base text-justify">
              At dishCompanionZen, we're dedicated to celebrating the rich
              tapestry of Korean cuisine. Whether you're a seasoned chef, a home
              cook, or simply someone eager to explore the flavors of Korea,
              you've found your culinary companion.
            </p>
          </div>
          <div className="text-xs lg:text-base w-2/3">
            <p>
              <b>Chef Profiles:</b> Discover talented Korean chefs from various
              backgrounds, each with a unique culinary story. Explore their
              profiles, learn about their expertise, and get inspired by their
              creative journey.
            </p>
            <p>
              <b>Authentic Recipes:</b> Dive into a treasure trove of authentic
              Korean recipes curated by our chefs. From classic dishes to modern
              twists, our collection caters to every taste bud, ensuring you can
              recreate the magic of Korean flavors in your kitchen.
            </p>
            <p>
              <b>Chef Spotlights:</b> Regularly updated spotlights on featured
              chefs, highlighting their latest creations, culinary philosophies,
              and contributions to the world of Korean cuisine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
