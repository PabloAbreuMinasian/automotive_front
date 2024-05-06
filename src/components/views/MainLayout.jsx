import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import WhatsappLogo from "../WhatsappLogo";
import Footer from "../Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <WhatsappLogo />
      <Footer />
    </div>
  );
}

export default MainLayout;
