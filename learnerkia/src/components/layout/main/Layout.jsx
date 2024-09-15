import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="h-screen max-w-[1800px] mr-auto">
      <Sidebar />

      <div className="ml-60">
        <Header />
        <div className="h-full px-4 ml-4 relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
