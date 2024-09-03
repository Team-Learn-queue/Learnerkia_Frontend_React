import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-red-100">
      <Sidebar />
      <div className="ml-60">
        <Header />
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
