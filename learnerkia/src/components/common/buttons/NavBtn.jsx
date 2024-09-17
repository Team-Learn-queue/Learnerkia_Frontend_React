import { NavLink } from "react-router-dom";

const NavBtn = ({ buttonName, navUrl }) => {
  return (
    <NavLink to={navUrl}>
      <button className="min-w-28 max-h-[50px] flex justify-center items-center gap-2 border-[1px] bg-lrnrkia-verydark-teal rounded-md p-4 text-lrnrkia-white">
        {buttonName}
      </button>
    </NavLink>
  );
};

export default NavBtn;
