import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import WhatsappLogo from "../WhatsappLogo";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <WhatsappLogo />
    </div>
  );
}

export default MainLayout;
