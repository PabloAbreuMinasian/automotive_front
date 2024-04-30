import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
