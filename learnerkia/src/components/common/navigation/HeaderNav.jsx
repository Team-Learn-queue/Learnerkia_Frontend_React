import { NavLink } from "react-router-dom";
import { ArrowLeftIcon } from "../../../assets/icons/Icons";

const HeaderNav = ({ headerNavName, navUrl }) => {
  return (
    <NavLink
      to={navUrl}
      className={
        "h-8 text-lg text-lrnrkia-medium-teal absolute top-0 left-4 p-2 pl-0 flex justify-center items-center gap-4"
      }
    >
      <ArrowLeftIcon className={"fill-lrnrkia-verydark-teal"} />
      <span>{headerNavName}</span>
    </NavLink>
  );
};

export default HeaderNav;
