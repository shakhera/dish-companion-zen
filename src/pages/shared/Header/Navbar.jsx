import React, { useState } from "react";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navItems = (
    <>
      <li className="mx-4 my-6 md:my-0 font-bold">
        <ActiveLink to="/" className="text-xl hover:text-cyan-500 duration-500">
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
    </>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`md:flex md:items-center  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
                isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
              } transition-all ease-in duration-500`}
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DISHCOMPANIONZEN</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
