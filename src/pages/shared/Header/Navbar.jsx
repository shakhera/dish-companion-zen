import React, { useContext, useState } from "react";
import logo from "../../../../public/dish2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/Provider/AuthProvider";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <nav className="w-full container mx-auto bg-opacity-30  border-gray-200 dark:bg-gray-900 dark:border-gray-700  font-semibold">
        <div className=" flex flex-wrap items-center justify-between p-4">
          <span className="flex flex-col items-center justify-center">
            <img className="w-8" src={logo} alt="" />
            <Link
              to="/"
              className="btn btn-ghost text-xl font-extrabold hover:bg-white uppercase"
            >
              DISHCOMPANIONZEN
            </Link>
          </span>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center  md:flex-row  font-medium p-4 md:p-0 mt-4 border  md:border-0 border-gray-100 rounded-lg  md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="mx-4 my-2 md:my-0 font-bold">
                <ActiveLink
                  to="/"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  HOME
                </ActiveLink>
              </li>
              {/* <li className="mx-4 my-2 md:my-0 font-bold">
                  <ActiveLink
                    to="/about"
                    className="text-xl hover:text-cyan-500 duration-500"
                  >
                    ABOUT US
                  </ActiveLink>
                </li> */}
              <li className="mx-4 my-2 md:my-0 font-bold">
                <ActiveLink
                  to="/ourmenu"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  OUR MENU
                </ActiveLink>
              </li>
              <li className="mx-4 my-2 md:my-0 font-bold">
                <ActiveLink
                  to="/blog"
                  className="text-xl hover:text-cyan-500 duration-500"
                >
                  BLOG
                </ActiveLink>
              </li>

              <li className="mx-4 my-2 md:my-0 font-bold">
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
                  className="px-4 ml-4 py-2 text-white text-1xl font-bold rounded-lg transition duration-300  bg-gradient-to-r from-cyan-400 to-slate-600 hover:from-teal-800 hover:to-teal-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  SignOut
                </button>
              ) : (
                <ActiveLink to="/login">
                  <button className=" px-4 ml-4 py-2 text-white text-1xl font-bold rounded-lg transition duration-300 bg-gradient-to-r from-cyan-400 to-slate-600 hover:from-teal-800 hover:to-teal-400 hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    SignIn
                  </button>
                </ActiveLink>
              )}
            </ul>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

export default Navbar;
