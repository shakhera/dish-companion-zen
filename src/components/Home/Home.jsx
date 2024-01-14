import React from "react";

const Home = () => {
  return (
    <div>
      <section className=" md:flex justify-between">
        <div className="flex justify-center items-center">
          <div className="mt-12 w-96 text-left">
            <h2 className=" font-manrope text-6xl font-extrabold m-4">
              One Step Closer To Your <br></br>
              <span className="text-purple-700"> Dream Job</span>
            </h2>
            <p className="font-manrope text-base font-medium mb-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="px-4 ml-4 py-3 text-white text-1xl font-bold rounded-lg transition duration-300 ease-in-out bg-gradient-to-r from-indigo-400 to-purple-600 hover:from-purple-600 hover:to-indigo-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </section>

      <hr />
    </div>
  );
};

export default Home;
