import { NavLink } from "react-router-dom";

const NavItem = ({ navName, navIcon }) => {
  return (
    <NavLink className="flex gap-4">
      <img src={navIcon} alt="" />
      {navName}
    </NavLink>
  );
};

export default NavItem;
