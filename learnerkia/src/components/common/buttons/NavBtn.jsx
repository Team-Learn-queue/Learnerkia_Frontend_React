import { NavLink } from "react-router-dom";

const NavBtn = ({ buttonName, navUrl }) => {
  return (
    <NavLink to={navUrl}>
      <button className="max-h-[50px] flex justify-center items-center gap-2 border-[1px] bg-lrnrkia-verydark-gray rounded-lg p-4 text-lrnrkia-white">
        {buttonName}
      </button>
    </NavLink>
  );
};

export default NavBtn;
