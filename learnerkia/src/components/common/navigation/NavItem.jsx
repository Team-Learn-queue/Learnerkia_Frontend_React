import { NavLink } from "react-router-dom";

const NavItem = ({ navName, navIcon, navUrl }) => {
  return (
    <NavLink to={navUrl} className="flex gap-4 p-1">
      <img src={navIcon} alt="" className=" text-orange-400 fill-white" />
      {navName}
    </NavLink>
  );
};

export default NavItem;
