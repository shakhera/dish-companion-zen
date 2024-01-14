import React, { useState } from "react";
import logo from "../../../public/dish2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div>
        <nav className="p-5  shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center ">
            <span className="flex flex-col items-center justify-center">
              <img className="w-8" src={logo} alt="" />
              <h2 className=" text-xl font-extrabold ">DISHCOMPANIONZEN</h2>
            </span>

            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </span>
          </div>
          <ul
            className={`md:flex md:items-center  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
              isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
            } transition-all ease-in duration-500`}
          >
            {/* <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"> */}
            <li className="mx-4 my-6 md:my-0 font-bold">
              <Link to="/" className="text-xl hover:text-cyan-500 duration-500">
                HOME
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <Link
                to="/about"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                ABOUT US
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <Link
                to="/ourmenu"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                OUR MENU
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <Link
                to="/blog"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                BLOG
              </Link>
            </li>

            <li className="mx-4 my-6 md:my-0 font-bold">
              <Link
                to="/contact"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                CONTACT US
              </Link>
            </li>

            <Link to="/login">
              <button className="px-4 ml-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out bg-gradient-to-r from-purple-300 to-indigo-500 hover:from-indigo-500 hover:to-purple-300 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500 ">
                Login
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
