import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" max-w-[1800px] mr-auto ">
      <Sidebar />
      <div className="ml-60">
        <Header />
        <div className="min-h-[100vh] bg-lrnrkia-pale-white pl-10 pr-1 pt-32 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
