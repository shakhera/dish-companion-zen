import React, { useContext, useState } from "react";
import logo from "../../../../public/dish2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../components/Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div>
        <nav className="p-5 shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center ">
            <span className="flex flex-col items-center justify-center">
              <img className="w-8" src={logo} alt="" />
              <Link
                to="/"
                className="btn btn-ghost text-xl font-extrabold hover:bg-white"
              >
                DISHCOMPANIONZEN
              </Link>

              {/* <h2 className=" text-xl font-extrabold ">DISHCOMPANIONZEN</h2> */}
            </span>

            <span
              className="text-3xl cursor-pointer mx-2 md:hidden block"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </span>
          </div>
          <ul
            className={`md:flex md:items-center z-10 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
              isMenuOpen ? "opacity-85 top-[80px]" : "opacity-0 top-[-400px]"
            } transition-all ease-in duration-500`}
          >
            {/* <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"> */}
            <li className="mx-4 my-6 md:my-0 font-bold">
              <ActiveLink
                to="/"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                HOME
              </ActiveLink>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <ActiveLink
                to="/about"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                ABOUT US
              </ActiveLink>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <ActiveLink
                to="/ourmenu"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                OUR MENU
              </ActiveLink>
            </li>
            <li className="mx-4 my-6 md:my-0 font-bold">
              <ActiveLink
                to="/blog"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                BLOG
              </ActiveLink>
            </li>

            <li className="mx-4 my-6 md:my-0 font-bold">
              <ActiveLink
                to="/contact"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                CONTACT US
              </ActiveLink>
            </li>

            {user ? (
              <button
                onClick={handleLogOut}
                className="px-4 ml-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-indigo-700 hover:from-indigo-500 hover:to-purple-300 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              >
                Logout
              </button>
            ) : (
              <ActiveLink to="/login">
                <button className="px-4 ml-4 py-2 text-white font-bold rounded transition duration-300 ease-in-out bg-gradient-to-r from-purple-300 to-indigo-500 hover:from-indigo-500 hover:to-purple-300 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-indigo-500 ">
                  Login
                </button>
              </ActiveLink>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
