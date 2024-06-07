import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Header/Navbar";
import UpperNavbar from "../../pages/shared/UpperNavbar/UpperNavbar";

const Root = () => {
  return (
    <div>
      <UpperNavbar></UpperNavbar>
      {/* <Header></Header> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
