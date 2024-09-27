import { NavLink } from "react-router-dom";

const PermissionSettingList = ({ settingsName, navUrl }) => {
  return (
    <NavLink
      to={navUrl}
      className={({ isActive }) =>
        isActive
          ? "bg-lrnrkia-dark-teal text-lrnrkia-white block"
          : "hover:bg-gray-200 text-lrnrkia-verydark-teal block"
      }
    >
      <li className={"text-lg  font-medium pl-8 py-3 mb-2  border-b-[1px] "}>
        {settingsName}
      </li>
    </NavLink>
  );
};

export default PermissionSettingList;
