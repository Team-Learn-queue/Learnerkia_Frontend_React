import { NavLink } from "react-router-dom";

const PermissionSettingList = ({ settingsName, navUrl }) => {
  return (
    <NavLink
      to={navUrl}
      className={
        "min-w-24 min-h-10 bg-slate-400 active:text-lrnrkia-medium-teal"
      }
    >
      <li>{settingsName}</li>
    </NavLink>
  );
};

export default PermissionSettingList;
