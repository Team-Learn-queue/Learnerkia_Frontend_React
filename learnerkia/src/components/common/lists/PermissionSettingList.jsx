import { NavLink } from "react-router-dom";

const PermissionSettingList = ({ settingsName, navUrl }) => {
  return (
    <NavLink
      to={navUrl}
      className={({ isActive }) =>
        isActive ? "bg-blue-500" : "bg-transparent"
      }
    >
      <li className={"text-lg font-medium p-4 border-b-[1px] "}>
        {settingsName}
      </li>
    </NavLink>
  );
};

export default PermissionSettingList;
