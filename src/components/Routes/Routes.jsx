import React from "react";
import Root from "../Lauout/Root";
import Home from "../../pages/Home/Home/Home";
import About from "../../pages/About/About";
import Menu from "../../pages/Menu/Menu";
import Contact from "../../pages/Contact/Contact";
import Blog from "../../pages/Blog/Blog";
import Footer from "../../pages/shared/Footer/Footer";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/ourmenu",
        element: <Menu></Menu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
