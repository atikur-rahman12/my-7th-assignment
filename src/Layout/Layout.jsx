import React from "react";
import NavBar from "../components/shared/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <NavBar />

      <div className="flex-1 overflow-visible">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
