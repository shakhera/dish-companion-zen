import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      {/* <NextNab></NextNab> */}
      <Outlet></Outlet>
      <Footer></Footer>
      {/* <Navbar></Navbar> */}
    </div>
  );
};

export default Root;
