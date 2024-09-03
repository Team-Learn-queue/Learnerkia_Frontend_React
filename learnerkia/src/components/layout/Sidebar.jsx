import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg";
import NavItem from "../common/NavItem";
import SideBarHeader from "../common/SideBarHeader";

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen fixed z-50 bg-lrnrkia-verydark-gray">
      <SideBarHeader logo={HomeIcon} organization={"University of Lagos"} />
      <nav className="min-h-[70vh] relative bg-slate-400 m-2 p-2">
        <ul>
          <li>
            <NavItem navName={"Dashboard"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Programs"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Documents"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Exams & Results"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Groups"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Bills & Payments"} navIcon={HomeIcon} />
          </li>
          <li>
            <NavItem navName={"Account"} navIcon={HomeIcon} />
          </li>

          <li className="absolute bottom-0">
            <NavItem navName={"Settings"} navIcon={HomeIcon} />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
