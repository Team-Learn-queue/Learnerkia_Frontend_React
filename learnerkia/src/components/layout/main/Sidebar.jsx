import { NavLink } from "react-router-dom";
import NavItem from "../../common/navigation/NavItem";
import SideBarHeader from "../secondary/SideBarHeader";

import logo1 from "../../../assets/images/logo-full.svg";

import {
  ArrowLeftIOSIcon,
  BookIcon,
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  PeopleIcon,
  PersonAddIcon,
  PersonIcon,
  SettingsIcon,
} from "../../../assets/icons/Icons";

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen fixed bg-lrnrkia-verydark-teal pt-9 text-lrnrkia-white text-lg rounded-tr-[20px] z-50">
      <div className="w-10 h-[54px] bg-lrnrkia-verydark-teal flex justify-center items-center absolute -right-5 top-24 rounded">
        <ArrowLeftIOSIcon />
      </div>
      <SideBarHeader logo={logo1} organization={"University of Essex"} />
      <nav className="min-h-[80vh] relative  p-2 pl-8 pt-10">
        <ul className="flex flex-col gap-10">
          <li>
            <NavItem navName={"Dashboard"} navIcon={<HomeIcon />} navUrl={""} />
          </li>
          <li>
            <NavItem
              navName={"Registration"}
              navIcon={<PersonAddIcon />}
              navUrl={"registration"}
            />
          </li>
          <li>
            <NavItem
              navName={"Members"}
              navIcon={<PeopleIcon />}
              navUrl={"members"}
            />
          </li>
          {/* <li>
            <NavItem
              navName={"Groups"}
              navIcon={<PeopleIcon />}
              navUrl={"groups"}
            />
          </li> */}
          <li>
            <NavItem
              navName={"Role Management"}
              navIcon={<PeopleIcon />}
              navUrl={"role-management"}
            />
          </li>
          <li>
            <NavItem
              navName={"Knowlege Bank"}
              navIcon={<BookIcon />}
              navUrl={"knowledge-bank"}
            />
          </li>
          <li>
            <NavItem
              navName={"Billing"}
              navIcon={<CreditCardIcon />}
              navUrl={"billing"}
            />
          </li>
          <li>
            <NavItem
              navName={"Session "}
              navIcon={<CalendarIcon />}
              navUrl={"session"}
            />
          </li>
          <li>
            <NavItem
              navName={"Account "}
              navIcon={<PersonIcon />}
              navUrl={"account"}
            />
          </li>

          <li className="absolute bottom-0">
            <NavItem
              navName={"Settings"}
              navIcon={<SettingsIcon />}
              navUrl={"settings"}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
