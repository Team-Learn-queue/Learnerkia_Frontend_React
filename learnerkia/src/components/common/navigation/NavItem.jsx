import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ navName, navIcon, navUrl }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavLink
      to={navUrl}
      className={({ isActive }) =>
        isActive
          ? `${setIsActive(true)} flex gap-4 p-1 relative`
          : `${setIsActive(false)} flex gap-4 p-1 relative`
      }
    >
      <div
        className={
          isActive
            ? "w-1 h-[70px] bg-lrnrkia-dark-teal absolute  -left-8 -top-1/2 rounded-full"
            : "absolute"
        }
      ></div>

      <div
        className={isActive ? "text-lrnrkia-dark-teal" : "text-lrnrkia-white"}
      >
        {navIcon}
      </div>

      {navName}
    </NavLink>
  );
};

export default NavItem;
