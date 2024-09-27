import { Outlet } from "react-router-dom";
import Logo from "../../../assets/images/logo-full.svg";
const Onboarding = () => {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-cover bg-center">
      <div className="w-1/2 min-w-[500px] min-h-screen bg-lrnrkia-white flex flex-col justify-start items-start gap-[90px] p-20">
        <img src={Logo} alt="site-logo" className="w-[200px] h-auto " />
        <Outlet />
      </div>
    </div>
  );
};

export default Onboarding;
