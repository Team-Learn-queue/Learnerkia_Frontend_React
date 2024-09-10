import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" max-w-[1800px] mr-auto ">
      <Sidebar />
      <div className="ml-60">
        <Header />
        <div className="min-h-[70vh] bg-lrnrkia-white mx-4  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
