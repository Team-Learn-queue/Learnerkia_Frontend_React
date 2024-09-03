import { NavLink } from "react-router-dom";
import NavItem from "../common/NavItem";
import SideBarHeader from "../common/SideBarHeader";

import logo1 from "../../assets/images/logo-full.svg";
import HomeIcon from "../../assets/icons/home.svg";
import RegIcon from "../../assets/icons/person-add.svg";
import MemberIcon from "../../assets/icons/people.svg";
import RoleIcon from "../../assets/icons/people.svg";
import BookIcon from "../../assets/icons/book.svg";
import BillingIcon from "../../assets/icons/credit-card.svg";
import SessionIcon from "../../assets/icons/calendar.svg";
import AccountIcon from "../../assets/icons/person.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen fixed bg-lrnrkia-verydark-gray pt-9 z-50 text-lrnrkia-white text-lg rounded-tr-[20px]">
      <SideBarHeader logo={logo1} organization={"University of Essex"} />
      <nav className="min-h-[80vh] relative  p-2 pl-8 pt-10">
        <ul className="flex flex-col gap-12">
          <li>
            <NavItem navName={"Dashboard"} navIcon={HomeIcon} navUrl={""} />
          </li>
          <li>
            <NavItem
              navName={"Registration"}
              navIcon={RegIcon}
              navUrl={"registration"}
            />
          </li>
          <li>
            <NavItem
              navName={"Members"}
              navIcon={MemberIcon}
              navUrl={"members"}
            />
          </li>
          <li>
            <NavItem
              navName={"Role Management"}
              navIcon={RoleIcon}
              navUrl={"rolemanagement"}
            />
          </li>
          <li>
            <NavItem
              navName={"Knowlege Bank"}
              navIcon={BookIcon}
              navUrl={"knowledgebank"}
            />
          </li>
          <li>
            <NavItem
              navName={"Billing"}
              navIcon={BillingIcon}
              navUrl={"billing"}
            />
          </li>
          <li>
            <NavItem
              navName={"Session "}
              navIcon={SessionIcon}
              navUrl={"session"}
            />
          </li>
          <li>
            <NavItem
              navName={"Account "}
              navIcon={AccountIcon}
              navUrl={"account"}
            />
          </li>

          <li className="absolute bottom-0">
            <NavItem
              navName={"Settings"}
              navIcon={SettingsIcon}
              navUrl={"settings"}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
